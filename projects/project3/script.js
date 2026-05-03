let isLogin = true;
let chartInstance = null;
let currentUser = localStorage.getItem("currentUser");
let expenses = [];


function initializeExpenses() {
  if (currentUser) {
    expenses = JSON.parse(localStorage.getItem(currentUser + "_exp")) || [];
  }
}

//AUTH FUNCTION
function toggleForm() {
  isLogin = !isLogin;
  const titleEl = document.getElementById("title");
  const buttonEl = document.querySelector("button");
  const toggleEl = document.getElementById("toggleText");
  
  if (titleEl) titleEl.innerText = isLogin ? "🔐 Login" : "📝 Register";
  if (buttonEl) buttonEl.innerText = isLogin ? "Login" : "Register";
  if (toggleEl) toggleEl.innerText = isLogin ? "Don't have an account? Create one" : "Back to login";
}

function handleAuth() {
  let username = usernameInput();
  let password = passwordInput();

  if (!username || !password) {
    alert("⚠️ Please enter both username and password");
    return;
  }

  processAuth(username, password);
}

function usernameInput() {
  return document.getElementById("username")?.value.trim() || "";
}

function passwordInput() {
  return document.getElementById("password")?.value || "";
}


function processAuth(username, password) {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (isLogin) {
    let user = users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem("currentUser", username);
      window.location.href = "dashboard.html";
    } else {
      alert("❌ Invalid username or password");
    }
  } else {
    let userExists = users.find(u => u.username === username);
    if (userExists) {
      alert("⚠️ Username already exists. Please choose another.");
      return;
    }
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("✅ Account registered successfully! You can now login.");
    
    
    isLogin = true;
    const titleEl = document.getElementById("title");
    const buttonEl = document.querySelector("button");
    const toggleEl = document.getElementById("toggleText");
    
    if (titleEl) titleEl.innerText = "🔐 Login";
    if (buttonEl) buttonEl.innerText = "Login";
    if (toggleEl) toggleEl.innerText = "Don't have an account? Create one";
    
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }
}
//==========================================================================================
// ===== DASHBOARD INITIALIZATION =====

if (location.pathname.includes("dashboard.html")) {
  if (!currentUser) {
    location.href = "index.html";
  } else {
    initializeExpenses();
    const userEl = document.getElementById("userName");
    if (userEl) {
      userEl.innerText = "👋 " + currentUser;
    }
    loadExpenses();
  }
}

//EXPENSE MANAGEMENT
function addExpense() {
  const amountEl = document.getElementById("amount");
  const categoryEl = document.getElementById("category");
  const noteEl = document.getElementById("note");

  let amount = Number(amountEl?.value || 0);
  let category = categoryEl?.value.trim() || "";
  let note = noteEl?.value.trim() || "";

  // Validation
  if (amount <= 0) {
    alert("⚠️ Please enter a valid amount greater than 0");
    return;
  }

  if (!category) {
    alert("⚠️ Please enter a category");
    return;
  }

  saveExpense(amount, category, note);
}

function saveExpense(amount, category, note = "") {
  const expense = {
    amount: parseFloat(amount),
    category: category,
    note: note,
    date: new Date().toLocaleDateString("en-IN"),
    id: Date.now()
  };

  expenses.push(expense);
  localStorage.setItem(currentUser + "_exp", JSON.stringify(expenses));

  //Clear inputs------------------
  document.getElementById("amount").value = "";
  document.getElementById("category").value = "";
  document.getElementById("note").value = "";

  //Animation-------------------------
  document.body.style.transform = "scale(0.99)";
  setTimeout(() => {
    document.body.style.transform = "scale(1)";
  }, 100);

  loadExpenses();
}

function deleteExpense(id) {
  if (confirm("🗑️ Are you sure you want to delete this expense?")) {
    expenses = expenses.filter(e => e.id !== id);
    localStorage.setItem(currentUser + "_exp", JSON.stringify(expenses));
    loadExpenses();
  }
}

function loadExpenses() {
  const listEl = document.getElementById("list");
  
  if (!listEl) return; // Not on dashboard page

  // Clear list
  listEl.innerHTML = "";

  // If no expenses, show placeholder
  if (expenses.length === 0) {
    listEl.innerHTML = '<li style="opacity: 0.6; padding: 20px; text-align: center; background: rgba(255,255,255,0.08); border-radius: 10px;">No expenses yet. Add one to get started! 👆</li>';
    
    // Hide chart and advice
    const chartEl = document.getElementById("chart");
    if (chartEl) chartEl.style.display = "none";
    
    const adviceEl = document.getElementById("aiAdvice");
    if (adviceEl) adviceEl.remove();
    
    document.getElementById("total").innerText = "0";
    document.getElementById("count").innerText = "0";
    return;
  }

  let total = 0;
  let categoryData = {};

  // Build list and category data
  expenses.forEach(e => {
    total += e.amount;

    let li = document.createElement("li");
    li.innerHTML = `
      <div class="expense-item">
        <div class="expense-info">
          <strong style="font-size: 15px;">${e.category}</strong> - <span style="font-weight: 600; color: #81C784;">₹${e.amount.toFixed(2)}</span>
          ${e.note ? `<p style="margin: 4px 0; opacity: 0.8; font-size: 13px;">📝 ${e.note}</p>` : ""}
          <small style="opacity: 0.7;">📅 ${e.date}</small>
        </div>
        <button class="delete-btn" onclick="deleteExpense(${e.id})" title="Delete expense">🗑️</button>
      </div>
    `;
    listEl.appendChild(li);

    // Build category breakdown
    if (!categoryData[e.category]) {
      categoryData[e.category] = 0;
    }
    categoryData[e.category] += e.amount;
  });

  //add total------------------------
  document.getElementById("total").innerText = total.toFixed(2);
  document.getElementById("count").innerText = expenses.length;

  // Render chart and advice
  if (Object.keys(categoryData).length > 0) {
    renderChart(categoryData);
    generateAIAdvice(categoryData, total);
  }
}

// ===== CHART RENDERING =====
function renderChart(data) {
  const chartEl = document.getElementById("chart");
  
  if (!chartEl) return;

  // Destroy previous chart instance
  if (chartInstance) {
    chartInstance.destroy();
    chartInstance = null;
  }

  chartEl.style.display = "block";

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
    '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B88B', '#A8E6CF',
    '#FF8A65', '#64B5F6', '#81C784', '#FFD54F', '#FF5252'
  ];

  const labels = Object.keys(data);
  const values = Object.values(data);

  try {
    chartInstance = new Chart(chartEl, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: colors.slice(0, labels.length),
          borderColor: 'rgba(255, 255, 255, 0.3)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            labels: {
              color: 'rgba(255, 255, 255, 0.9)',
              font: {
                size: 13,
                family: "'Poppins', sans-serif",
                weight: '500'
              },
              padding: 15,
              usePointStyle: true
            },
            position: 'bottom'
          }
        }
      }
    });
  } catch (err) {
    console.error("Chart error:", err);
  }
}
//============================================================================================================
// ===== AI ADVISOR =====
function generateAIAdvice(categoryData, total) {
  if (total === 0) return;

  let adviceEl = document.getElementById("aiAdvice");
  
  // Create advice container if it doesn't exist
  if (!adviceEl) {
    const gridEl = document.querySelector(".grid");
    if (!gridEl) return;
    
    adviceEl = document.createElement("div");
    adviceEl.id = "aiAdvice";
    adviceEl.className = "card full";
    gridEl.appendChild(adviceEl);
  }

  // Analyze spending
  let categoryArray = Object.entries(categoryData)
    .map(([category, amount]) => ({
      category: category,
      amount: parseFloat(amount),
      percentage: ((amount / total) * 100).toFixed(1)
    }))
    .sort((a, b) => b.amount - a.amount);

  let highestSpending = categoryArray[0];
  let maxPercentage = parseFloat(categoryArray[0].percentage);
  let minPercentage = parseFloat(categoryArray[categoryArray.length - 1].percentage);
  let balance = maxPercentage - minPercentage;

  let htmlContent = '<h3>🤖 AI Advisor - Financial Insights</h3>';

  // Advice 1: Top spending category
  htmlContent += '<div class="advice-item">';
  if (maxPercentage > 50) {
    htmlContent += `<p>⚠️ <strong>${highestSpending.category}</strong> accounts for ${maxPercentage}% of your spending. Consider reducing this to save more money.</p>`;
  } else if (maxPercentage > 35) {
    htmlContent += `<p>📊 <strong>${highestSpending.category}</strong> is your biggest expense at ${maxPercentage}%. Keep monitoring this category.</p>`;
  } else {
    htmlContent += `<p>✅ Great! Your spending is well-distributed. <strong>${highestSpending.category}</strong> is at ${maxPercentage}%.</p>`;
  }
  htmlContent += '</div>';

  // Advice 2: Spending balance
  htmlContent += '<div class="advice-item">';
  if (balance > 60) {
    htmlContent += `<p>🎯 Your spending is highly unbalanced. Try distributing expenses more evenly across categories.</p>`;
  } else if (balance > 30) {
    htmlContent += `<p>📈 Your spending shows moderate distribution. Work on evening out the categories.</p>`;
  } else {
    htmlContent += `<p>🌟 Excellent! Your expenses are well-distributed across all categories.</p>`;
  }
  htmlContent += '</div>';

  // Advice 3: Top categories
  htmlContent += '<div class="advice-item">';
  htmlContent += '<p><strong>💰 Top Spending Categories:</strong></p>';
  htmlContent += '<ul style="margin: 8px 0; padding-left: 20px;">';
  categoryArray.slice(0, 3).forEach((cat, index) => {
    const icons = ['🥇', '🥈', '🥉'];
    htmlContent += `<li>${icons[index]} ${cat.category}: ₹${cat.amount.toFixed(2)} (${cat.percentage}%)</li>`;
  });
  htmlContent += '</ul>';
  htmlContent += '</div>';

  // Advice 4: Category-specific recommendations
  htmlContent += '<div class="advice-item">';
  htmlContent += '<p><strong>💡 Recommendations:</strong></p>';
  
  let recommendations = [];
  
  const foodCategories = ['food', 'groceries', 'eating', 'restaurant', 'lunch', 'dinner', 'breakfast'];
  const shoppingCategories = ['shopping', 'clothes', 'fashion', 'apparel', 'shopping online'];
  const entertainmentCategories = ['entertainment', 'movies', 'games', 'hobbies', 'fun'];

  categoryArray.forEach(cat => {
    const lowerCat = cat.category.toLowerCase();
    
    if (foodCategories.some(f => lowerCat.includes(f)) && cat.percentage > 20) {
      recommendations.push('🍔 Food spending is high. Try meal planning and cooking at home to reduce costs.');
    }
    if (shoppingCategories.some(s => lowerCat.includes(s)) && cat.percentage > 15) {
      recommendations.push('🛍️ Shopping expenses are significant. Make lists before shopping to avoid impulse buys.');
    }
    if (entertainmentCategories.some(e => lowerCat.includes(e)) && cat.percentage > 10) {
      recommendations.push('🎬 Entertainment spending is high. Set a monthly entertainment budget and stick to it.');
    }
  });

  if (recommendations.length > 0) {
    htmlContent += '<ul style="margin: 8px 0; padding-left: 20px;">';
    recommendations.forEach(rec => {
      htmlContent += `<li>${rec}</li>`;
    });
    htmlContent += '</ul>';
  } else {
    htmlContent += '<p style="margin: 5px 0; opacity: 0.8;">💚 All spending categories look reasonable!</p>';
  }
  
  htmlContent += '</div>';

  // Health score
  htmlContent += '<div class="advice-score">';
  let score = 0;
  
  // Score calculation
  if (categoryArray.length > 3) score += 20;
  if (balance < 40) score += 20;
  if (maxPercentage < 45) score += 30;
  score += 30;
  
  let scoreText = score >= 80 ? "Excellent Spending Habits 🌟" : 
                  score >= 60 ? "Good Spending Habits ✅" : 
                  "Work on Improving Habits 📈";
  
  htmlContent += `<strong>Spending Health: ${scoreText}</strong>`;
  htmlContent += `<p style="margin: 8px 0; font-size: 12px; opacity: 0.8;">Overall Score: <strong style="color: #81C784;">${score}/100</strong></p>`;
  htmlContent += '</div>';

  adviceEl.innerHTML = htmlContent;
}

// ===== PROFILE MANAGEMENT =====
if (location.pathname.includes("profile.html")) {
  if (!currentUser) {
    location.href = "index.html";
  } else {
    loadProfileData();
  }
}

function loadProfileData() {
  let profile = JSON.parse(localStorage.getItem(currentUser + "_profile")) || {};

  // Display section
  document.getElementById("d_name").innerText = profile.name || "-";
  document.getElementById("d_age").innerText = profile.age || "-";
  document.getElementById("d_profession").innerText = profile.profession || "-";
  document.getElementById("d_income").innerText = profile.income || "-";

  // Form inputs
  document.getElementById("name").value = profile.name || "";
  document.getElementById("age").value = profile.age || "";
  document.getElementById("profession").value = profile.profession || "";
  document.getElementById("income").value = profile.income || "";
}

function saveProfile() {
  let name = document.getElementById("name")?.value.trim();
  let age = document.getElementById("age")?.value.trim();
  let profession = document.getElementById("profession")?.value.trim();
  let income = document.getElementById("income")?.value.trim();

  if (!name || !age || !profession || !income) {
    alert("⚠️ Please fill in all fields");
    return;
  }

  let profile = {
    name: name,
    age: age,
    profession: profession,
    income: income
  };

  localStorage.setItem(currentUser + "_profile", JSON.stringify(profile));

  // Update display
  document.getElementById("d_name").innerText = name;
  document.getElementById("d_age").innerText = age;
  document.getElementById("d_profession").innerText = profession;
  document.getElementById("d_income").innerText = income;

  alert("✅ Profile updated successfully!");
}

// ===== NAVIGATION =====
function goProfile() {
  if (!currentUser) {
    alert("⚠️ Please login first");
    return;
  }
  location.href = "profile.html";
}

function goDashboard() {
  if (!currentUser) {
    location.href = "index.html";
    return;
  }
  location.href = "dashboard.html";
}

function logout() {
  if (confirm("Are you sure you want to logout?")) {
    localStorage.removeItem("currentUser");
    location.href = "index.html";
  }
}
