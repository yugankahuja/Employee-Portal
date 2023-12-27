/*document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulated static login details
        if (username === "admin" && password === "admin123") {
            // Redirect to admin dashboard
            window.location.href = "admin_dashboard.php";
        } else if (username === "user" && password === "user123") {
            // Redirect to user dashboard
            window.location.href = "user_dashboard.php";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});*/
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email_id = document.getElementById("email_id").value;
        const password = document.getElementById("password").value;

        // Simulated static login details
        if (email_id === "admin@gmail.com" && password === "admin123") {
            // Redirect to admin dashboard (mod.html)
            window.location.href = "admin.jsx";
        } else if (email_id === "user@gmail.com" && password === "user123") {
            // Redirect to user profile page (profile.html)
            window.location.href = "profile.jsx";
        } else {
            alert("Invalid email id or password. Please try again.");
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Function to export attendance data to Excel
    function exportToExcel() {
        const table = document.querySelector("table");
        const rows = table.querySelectorAll("tr");

        const data = [];
        for (let i = 0; i < rows.length; i++) {
            const cols = rows[i].querySelectorAll("td");
            const rowData = [];
            cols.forEach((col) => {
                rowData.push(col.innerText);
            });
            data.push(rowData);
        }

        const worksheet = XLSX.utils.aoa_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Attendance");
        XLSX.writeFile(workbook, "attendance.xlsx");
    }

    // Attach a click event listener to the export button
    const exportButton = document.getElementById("export-btn");
    exportButton.addEventListener("click", exportToExcel);
});

/*document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();



    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        // Redirect to admin dashboard
        window.location.href = "admin_dashboard.php";
    } else if (username === "user" && password === "user123") {
        // Redirect to user dashboard
        window.location.href = "user_dashboard.php";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
*/
/*

document.addEventListener("DOMContentLoaded", function () {
    // Simulated user data (you would fetch this from a server)
    const users = [
        { id: 1, name: "User 1", status: "pending" },
        { id: 2, name: "User 2", status: "approved" },
        { id: 3, name: "User 3", status: "rejected" },
    ];

    // Function to render user data
    function renderUsers() {
        const userModerationSection = document.querySelector(".user-moderation");
        userModerationSection.innerHTML = "";

        users.forEach((user) => {
            const userDiv = document.createElement("div");
            userDiv.classList.add("user");

            const userName = document.createElement("span");
            userName.textContent = user.name;

            const approveButton = document.createElement("button");
            approveButton.textContent = "Approve";
            approveButton.classList.add("button", "approve");
            approveButton.dataset.id = user.id;

            const rejectButton = document.createElement("button");
            rejectButton.textContent = "Reject";
            rejectButton.classList.add("button", "reject");
            rejectButton.dataset.id = user.id;

            userDiv.appendChild(userName);
            userDiv.appendChild(approveButton);
            userDiv.appendChild(rejectButton);

            if (user.status === "pending") {
                userDiv.classList.add("pending");
            } else if (user.status === "approved") {
                userDiv.classList.add("approved");
            } else if (user.status === "rejected") {
                userDiv.classList.add("rejected");
            }

            userModerationSection.appendChild(userDiv);
        });
    }

    // Event listeners for moderation actions
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("approve")) {
            const userId = parseInt(event.target.dataset.id, 10);
            // Perform approval logic (e.g., update status)
            // Simulated update:
            users.find((user) => user.id === userId).status = "approved";
            renderUsers();
        } else if (event.target.classList.contains("reject")) {
            const userId = parseInt(event.target.dataset.id, 10);
            // Perform rejection logic (e.g., update status)
            // Simulated update:
            users.find((user) => user.id === userId).status = "rejected";
            renderUsers();
        }
    });

    // Initial rendering of user data
    renderUsers();
});
*/







