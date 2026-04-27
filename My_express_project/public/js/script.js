let isLogin = true;
let chartInstance = null;
let currentUser = localStorage.getItem("currentUser");
let expenses = [];


function initializeExpenses() {
  if (currentUser) {
    expenses = JSON.parse(localStorage.getItem(currentUser + "_exp")) || [];
  }
}


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
    //generateAIAdvice(categoryData, total);
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

