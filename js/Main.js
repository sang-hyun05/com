    const filter = "win16|win32|win64|mac|macintel";
	if ( filter.indexOf(navigator.platform.toLowerCase()) < 0 ) {
		//mobile
		window.location.href = "../com/M-Mhomp.html";
	} else {
		//pc
		window.location.href = "../com/M-Phomp.html";
	};
