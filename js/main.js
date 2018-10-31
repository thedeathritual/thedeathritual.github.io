window.onload = function() {

	var logo = document.getElementById('logo'),
		news = document.getElementById('news'),
		main = document.getElementById('main'), 
		contentRight = document.getElementById('content__right'),
		nav = document.getElementById('nav'),
		hamburger = document.getElementById('hamburger'),
		menuclose = document.getElementById('menu__close'),
		download = document.getElementById('download'),
		about = document.getElementById('about'),
		dwclose = document.getElementById('popup-download__close'),
		dwpopup = document.getElementById('popup-download'),
		abclose = document.getElementById('popup-about__close'),
		music = document.getElementById('music'),
		musicMenu = document.getElementById('music__menu'),
		abpopup = document.getElementById('popup-about');

	music.onfocus = function()	{
		musicMenu.style.display = 'block';
	}

	logo.onmouseenter = function() {
		news.style.display = 'block';
	}

	contentRight.onmouseleave = function() {
		news.style.display = 'none';
	}

	download.onclick = function() {
		dwpopup.style.visibility = 'visible';
		dwpopup.style.opacity = '1';
	}

	dwclose.onclick = function() {
		dwpopup.style.visibility = 'hidden';
		dwpopup.style.opacity = '0';
	}

	about.onclick = function() {
		abpopup.style.visibility = 'visible';
		abpopup.style.opacity = '1';
		main.style.overflow = 'hidden';
	}

	abclose.onclick = function() {
		abpopup.style.visibility = 'hidden';
		abpopup.style.opacity = '0';
		main.style.overflow = 'auto';	
	}

	hamburger.onclick = function() {
		nav.style.display = 'block';
		hamburger.style.display = 'none';
		menuclose.style.display = 'block';
	}

	menuclose.onclick = function() {
		nav.style.display = 'none';
		hamburger.style.display = 'flex';
		menuclose.style.display = 'none';
	}
}
