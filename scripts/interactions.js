var bookcoververrast = document.querySelector('section > article');
var bookcoverhonger = document.querySelector('section > article:nth-of-type(2)');
var bookcoveressentie = document.querySelector('section > article:nth-of-type(3)');

var accountpopup = document.querySelector('body > section');
var accountform = document.querySelector('form p:nth-of-type(2)');

bookcoververrast.style.backgroundImage = "url('images/bookcoververrast.png')";
bookcoverhonger.style.backgroundImage = "url('images/bookcoverhonger.png')";
bookcoveressentie.style.backgroundImage = "url('images/bookcoveressentie.png')";

function flipverrast() {																	
	bookcoververrast.classList.toggle("showinfo");
	bookcoververrast.classList.toggle("showimg");

	if (bookcoververrast.innerHTML == "") {
		bookcoververrast.innerHTML = "Titel: Verrast<br> Designer: R. van Dodewaard<br> Sfeer: Uitbundig<br> Leestijd: 8 Minuten<br><br>Naar verhaal >";
		bookcoververrast.style.backgroundImage = "";
	} else {
		bookcoververrast.innerHTML = "";
		bookcoververrast.style.backgroundImage = "url('images/bookcoververrast.png')";
	};
};

function fliphonger() {																	
	bookcoverhonger.classList.toggle("showinfo");
	bookcoverhonger.classList.toggle("showimg");

	if (bookcoverhonger.innerHTML == "") {
		bookcoverhonger.innerHTML = "Titel: Hongerwinter<br> Designer: R. van Dodewaard<br> Sfeer: Melancholisch<br> Leestijd: 12 Minuten<br><br>Naar verhaal >";
		bookcoverhonger.style.backgroundImage = "";
	} else {
		bookcoverhonger.innerHTML = "";
		bookcoverhonger.style.backgroundImage = "url('images/bookcoverhonger.png')";
	};
};

function flipessentie() {																	
	bookcoveressentie.classList.toggle("showinfo");
	bookcoveressentie.classList.toggle("showimg");

	if (bookcoveressentie.innerHTML == "") {
		bookcoveressentie.innerHTML = "Titel: Essentie<br> Designer: R. van Dodewaard<br> Sfeer: Helder<br> Leestijd: 2 Minuten<br><br>Naar verhaal >";
		bookcoveressentie.style.backgroundImage = "";
	} else {
		bookcoveressentie.innerHTML = "";
		bookcoveressentie.style.backgroundImage = "url('images/bookcoveressentie.png')";
	};
};

function accountaanmaken() {
	accountpopup.classList.toggle("showaccount");
	accountpopup.classList.toggle("hideaccount");
};

bookcoververrast.addEventListener("mouseover", flipverrast);
bookcoververrast.addEventListener("mouseout", flipverrast);

bookcoverhonger.addEventListener("mouseover", fliphonger);
bookcoverhonger.addEventListener("mouseout", fliphonger);

bookcoveressentie.addEventListener("mouseover", flipessentie);
bookcoveressentie.addEventListener("mouseout", flipessentie);

accountform.addEventListener("click", accountaanmaken);
