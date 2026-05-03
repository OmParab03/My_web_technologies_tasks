function submitForm() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let prn = document.getElementById("prn").value;
    let date = document.getElementById("date").value;

    let now = new Date();
    let time = now.toLocaleTimeString();

    if (name === "" || age === "" || prn === "" || date === "") {
        alert("⚠️ Please fill all fields");
        return;
    }

    document.getElementById("output").innerHTML =
        "✅ Entry Recorded<br>" +
        "Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
        "PRN: " + prn + "<br>" +
        "Date: " + date + "<br>" +
        "Time: " + time;

    alert("Student Entry Submitted Successfully!");

   
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("prn").value = "";
    document.getElementById("date").value = "";
}
