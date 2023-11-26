document.getElementById("menu1").addEventListener("click", () => {
    const filter = "win16|win32|win64|mac|macintel";
	if ( filter.indexOf(navigator.platform.toLowerCase()) < 0 ) {
		//mobile
		window.location.href = "./sub_menu/mob/N-Mmenu1.html";
	} else {
		//pc
		window.location.href = "./sub_menu/pc/N-Pmenu1.html";
	};
});
document.getElementById("menu2").addEventListener("click", () => {
    const filter = "win16|win32|win64|mac|macintel";
	if ( filter.indexOf(navigator.platform.toLowerCase()) < 0 ) {
		//mobile
		window.location.href = "./sub_menu/mob/N-Mmenu2.html";
	} else {
		//pc
		window.location.href = "./sub_menu/pc/N-Pmenu2.html";
	};
});
document.getElementById("home").addEventListener("click", () => {
    const filter = "win16|win32|win64|mac|macintel";
	if ( filter.indexOf(navigator.platform.toLowerCase()) < 0 ) {
		//mobile
		window.location.href = "./M-Mhomp.html";
	} else {
		//pc
		window.location.href = "./M-Phomp.html";
	};
});
document.getElementById("login_menu1").addEventListener("click", () => {
    const filter = "win16|win32|win64|mac|macintel";
	if ( filter.indexOf(navigator.platform.toLowerCase()) < 0 ) {
		//mobile
		window.location.href = "./sub_menu/mob/M-Mlogin.html";
	} else {
		//pc
		window.location.href = "./sub_menu/pc/M-Plogin.html";
	};
});
document.getElementById("login_menu2").addEventListener("click", () => {
    const filter = "win16|win32|win64|mac|macintel";
	if ( filter.indexOf(navigator.platform.toLowerCase()) < 0 ) {
		//mobile
		window.location.href = "./sub_menu/mob/M-Mmember.html";
	} else {
		//pc
		window.location.href = "./sub_menu/pc/M-Pmember.html";
	};
});
document.getElementById("login_menu3").addEventListener("click", () => {
    const filter = "win16|win32|win64|mac|macintel";
	if ( filter.indexOf(navigator.platform.toLowerCase()) < 0 ) {
		//mobile
		window.location.href = "./sub_menu/mob/M-Mpickup.html";
	} else {
		//pc
		window.location.href = "./sub_menu/pc/M-Ppickup.html";
	};
});
document.getElementById("all").addEventListener("click", () => {
	const filter = "win16|win32|win64|mac|macintel";
	if ( filter.indexOf(navigator.platform.toLowerCase()) < 0 ) {
		//mobile
		window.location.href = "./sub_menu/mob/M-Mall.html";
	} else {
		//pc
		window.location.href = "./sub_menu/pc/M-Pall.html";
	};
});