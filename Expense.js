// JavaScript for Budget Management
let budget = 0;
let expenses = [];

function setBudget() {
    const budgetInput = document.getElementById("budgetInput").value;
    budget = parseFloat(budgetInput);
    document.getElementById("budgetDisplay").innerText = `Your budget is set to $${budget.toFixed(2)}`;
}

function addExpense() {
    const expenseName = document.getElementById("expenseName").value;
    const expenseAmount = document.getElementById("expenseAmount").value;

    if (expenseName === "" || expenseAmount === "") {
        alert("Please enter both expense name and amount.");
        return;
    }

    const expense = {
        name: expenseName,
        amount: parseFloat(expenseAmount)
    };

    expenses.push(expense);
    displayExpenses();
}

function displayExpenses() {
    const expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = ""; // Clear the existing list

    expenses.forEach(expense => {
        const li = document.createElement("li");
        li.innerText = `${expense.name}: $${expense.amount.toFixed(2)}`;
        expenseList.appendChild(li);
    });
}

// JavaScript for Financial Goal Management
let goal = {};

function setGoal() {
    const goalName = document.getElementById("goalName").value;
    const goalAmount = document.getElementById("goalAmount").value;

    if (goalName === "" || goalAmount === "") {
        alert("Please enter both goal name and amount.");
        return;
    }

    goal = {
        name: goalName,
        amount: parseFloat(goalAmount)
    };

    document.getElementById("goalDisplay").innerText = `Your goal is set: ${goal.name} - $${goal.amount.toFixed(2)}`;
}
