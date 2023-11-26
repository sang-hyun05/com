document.getElementById("menu1").addEventListener("click",function() {
    const filter = "win16|win32|win64|mac|macintel";
	if ( filter.indexOf(navigator.platform.toLowerCase()) < 0 ) {
		//mobile
		window.location.href = "../mob/N-Mmenu1.html";
	} else {
		//pc
		window.location.href = "../pc/N-Pmenu1.html";
	};
});
document.getElementById("menu2").addEventListener("click",function() {
    const filter = "win16|win32|win64|mac|macintel";
	if ( filter.indexOf(navigator.platform.toLowerCase()) < 0 ) {
		//mobile
		// window.location.href = "../mob/N-Mmenu2.html";
		window.location.href = "../No.html";
	} else {
		//pc
		// window.location.href = "../pc/N-Pmenu2.html";
		window.location.href = "../No.html";
	};
});
document.getElementById("home").addEventListener("click",function() {
    const filter = "win16|win32|win64|mac|macintel";
	if ( filter.indexOf(navigator.platform.toLowerCase()) < 0 ) {
		//mobile
		window.location.href = "../../M-Mhomp.html";
	} else {
		//pc
		window.location.href = "../../M-Phomp.html";
	};
});
document.getElementById("login_menu1").addEventListener("click",function() {
	const filter = "win16|win32|win64|mac|macintel";
	if ( filter.indexOf(navigator.platform.toLowerCase()) < 0 ) {
		//mobile
		window.location.href = "../mob/M-Mlogin.html";
	} else {
		//pc
		window.location.href = "../pc/M-Plogin.html";
	};
});
document.getElementById("login_menu2").addEventListener("click",function() {
	const filter = "win16|win32|win64|mac|macintel";
	if ( filter.indexOf(navigator.platform.toLowerCase()) < 0 ) {
		//mobile
		window.location.href = "../mob/M-Mmember.html";
	} else {
		//pc
		window.location.href = "../pc/M-Pmember.html";
	};
});
document.getElementById("login_menu3").addEventListener("click",function() {
	const filter = "win16|win32|win64|mac|macintel";
	if ( filter.indexOf(navigator.platform.toLowerCase()) < 0 ) {
		//mobile
		window.location.href = "../mob/M-Mpickup.html";
	} else {
		//pc
		window.location.href = "../pc/M-Ppickup.html";
	};
});