let signin = document.getElementById("signin");
signin.classList.add("signin_active");

let signinForm = signin.querySelector("#signin__form");


function signIN(e) {
	e.preventDefault();
	let xhr = new XMLHttpRequest();
	xhr.addEventListener("loadend", function () {
		let response = this.response;
		if (response.success) {
			localStorage.setItem("user_id", response.user_id);
		} else {
			alert("Неверный логин/пароль");
		}
		showWelcome();
	});
	xhr.responseType = "json";
	xhr.open("POST", this.closest("form").action);
	xhr.send(new FormData(this.closest("form")));
};

function signOUT(e) {
	e.preventDefault();
	localStorage.removeItem("user_id");
	showWelcome();
};

function showWelcome() {
	let userID = localStorage.getItem("user_id");
	let welcomeWindow = document.getElementById("welcome");
	if (userID) {
		welcomeWindow.querySelector("#user_id").textContent = userID;
		welcomeWindow.classList.add("welcome_active");
		signinForm.style = 'display: none;';
		document.querySelector('.title').style = 'display: none';
	} else {
		welcomeWindow.querySelector("#user_id").textContent = "";
		welcomeWindow.classList.remove("welcome_active");
	}
	signinForm.reset();
};

signinForm
	.querySelector("#signin__btn")
	.addEventListener("click", signIN, false);
signinForm
	.querySelector("#signout__btn")
	.addEventListener("click", signOUT, false);

showWelcome();