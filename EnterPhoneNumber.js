let phone = [];
function checkdata() {
	var username = document.getElementById("username").value;
	dict = {
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9,
		zero: 0
	};
	if (username == "" || dict.hasOwnProperty(username) == false) {
		alert("Please enter valid number word");
		return false;
	} else if (dict.hasOwnProperty(username)) {
		phone.push(dict[username]);
		display(phone);
		return true;
	} else {
		alert("Something is missing");
		return false;
	}
}
function display(phone) {
	let list = document.getElementById("phNum");
	let digits = "";
	phone.forEach((item) => {
		digits = digits + " " + item;
	});
	list.innerHTML = digits;
}
function sub() {
	if (phone.length == 10) {
		alert("Successfully submitted");
		window.location.href = "";
		return true;
	} else {
		alert("Enter a valid phone number");
		return false;
	}
}
function res() {
	window.location.href = "";
	//window.location.href = window.location.href;
}

setTimeout(function () {
	alert("TIMEOUT! Start Again");
	window.location.href = "";
	//window.location.href = window.location.href;
}, 50000);
