if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // no pc, no gallery
}else{
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Escape") {
        if (r1!=0 || r2!=0 || r3!=0 || r4!=0 || r5!=0 || r6!=0){
            closeGallery();
        } else if (document.getElementById("about_us_logo").style.display != "none"){
            document.getElementById("about_us_logo").style.cssText = "display: none";
        }
    } else if (key == 'ArrowLeft') {
       change_b();
    }
    else if (key == 'ArrowRight') {
       change();
    }
});

var r1=0;
var r2=0;
var r3=0;
var r4=0;
var r5=0;
var r6=0;

function change(){
	if (r2!=0){
		change2();
	} else if (r3!=0){
		change3();
	} 
    else if (r4!=0){
		change4();
	} 
}

function change_b(){
	if (r2!=0){
		change2_b();
	} else if (r3!=0){
		change3_b();
	} 
    else if (r4!=0){
		change4_b();
	} 
}

// POST 1 //



// POST 2 //

var arr_capt2 = ["", "", "", "", "", ""];
var l2 = arr_capt2.length;

document.getElementById("img18.1").addEventListener("click", function(){openGallery_2(1);});
document.getElementById("img18.2").addEventListener("click", function(){openGallery_2(2);});
document.getElementById("img18.3").addEventListener("click", function(){openGallery_2(3);});
document.getElementById("img18.4").addEventListener("click", function(){openGallery_2(4);});
document.getElementById("img18.5").addEventListener("click", function(){openGallery_2(5);});
document.getElementById("img18.6").addEventListener("click", function(){openGallery_2(6);});

function openGallery_2() {
    i = arguments[0];
    console.log(i);
    document.images["pic"].src = "images/posts/IMG18_".concat(i.toString()).concat(".jpg");
    document.images["pic"].alt = "IMG18_".concat(i.toString());
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l2);
    document.getElementById("captions").innerHTML = arr_capt2[i-1];
    document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -48%)';
    document.getElementById('backg').style.cssText = 'width: 73%';
    if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
    	document.getElementById('right').style.cssText = 'display: block';
    } else if (i==l2) {																		//
    	document.getElementById('right').style.cssText = 'display: none';
    	document.getElementById('left').style.cssText = 'display: block';
    } else {
    	document.getElementById('left').style.cssText = 'display: block';
    	document.getElementById('right').style.cssText = 'display: block';
    }
    return r2=i;
}
function change2() {
	var i=r2;																				//
	if (i+1<=l2) {																			//
		if (i==1) {
			document.getElementById('left').style.cssText = 'display: block';
		}
		i++;
		document.images["pic"].src = "images/posts/IMG18_".concat(i.toString()).concat(".jpg");	//
    	document.images["pic"].alt = "IMG18_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l2);		//
    	document.getElementById("captions").innerHTML = arr_capt2[i-1];							//
    }
	if (i==l2) {																				//
    	document.getElementById('right').style.cssText = 'display: none';
	}
	return r2=i;																				//
}
function change2_b() {
	var i=r2;																					//
	if (i-1>=1) {
		if (i==l2) {																			//
			document.getElementById('right').style.cssText = 'display: block';
		}
		i--;
		document.images["pic"].src = "images/posts/IMG18_".concat(i.toString()).concat(".jpg");	//
    	document.images["pic"].alt = "IMG18_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l2);		//
    	document.getElementById("captions").innerHTML = arr_capt2[i-1];							//
    }
	if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
	}
	return r2=i;																				//
}


// POST 3 //

var arr_capt3 = ["", "", "", "", "", ""];
var l3 = arr_capt3.length;

document.getElementById("img19.1").addEventListener("click", function(){openGallery_3(1);});
document.getElementById("img19.2").addEventListener("click", function(){openGallery_3(2);});
document.getElementById("img19.3").addEventListener("click", function(){openGallery_3(3);});
document.getElementById("img19.4").addEventListener("click", function(){openGallery_3(4);});
document.getElementById("img19.5").addEventListener("click", function(){openGallery_3(5);});
document.getElementById("img19.6").addEventListener("click", function(){openGallery_3(6);});

function openGallery_3() {
    i = arguments[0];
    console.log(i);
    document.images["pic"].src = "images/posts/IMG19_".concat(i.toString()).concat(".jpg");
    document.images["pic"].alt = "IMG19_".concat(i.toString());
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l3);
    document.getElementById("captions").innerHTML = arr_capt3[i-1];
    document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -48%)';
    document.getElementById('backg').style.cssText = 'width: 67%';
    if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
    	document.getElementById('right').style.cssText = 'display: block';
    } else if (i==l3) {																		//
    	document.getElementById('right').style.cssText = 'display: none';
    	document.getElementById('left').style.cssText = 'display: block';
    } else {
    	document.getElementById('left').style.cssText = 'display: block';
    	document.getElementById('right').style.cssText = 'display: block';
    }
    return r3=i;
}
function change3() {
	var i=r3;																				//
	if (i+1<=l3) {																			//
		if (i==1) {
			document.getElementById('left').style.cssText = 'display: block';
		}
		i++;
		document.images["pic"].src = "images/posts/IMG19_".concat(i.toString()).concat(".jpg");	//
    	document.images["pic"].alt = "IMG19_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l3);		//
    	document.getElementById("captions").innerHTML = arr_capt3[i-1];							//
    }
	if (i==l3) {																				//
    	document.getElementById('right').style.cssText = 'display: none';
	}
	return r3=i;																				//
}
function change3_b() {
	var i=r3;																					//
	if (i-1>=1) {
		if (i==l3) {																			//
			document.getElementById('right').style.cssText = 'display: block';
		}
		i--;
		document.images["pic"].src = "images/posts/IMG19_".concat(i.toString()).concat(".jpg");	//
    	document.images["pic"].alt = "IMG19_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l3);		//
    	document.getElementById("captions").innerHTML = arr_capt3[i-1];							//
    }
	if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
	}
	return r3=i;																				//
}

// POST 4 //

var arr_capt4 = ["", "", "", ""];
var l4 = arr_capt4.length;

document.getElementById("img20.1").addEventListener("click", function(){openGallery_4(1);});
document.getElementById("img20.2").addEventListener("click", function(){openGallery_4(2);});
document.getElementById("img20.3").addEventListener("click", function(){openGallery_4(3);});
document.getElementById("img20.4").addEventListener("click", function(){openGallery_4(4);});

function openGallery_4() {
    i = arguments[0];
    console.log(i);
    document.images["pic"].src = "images/posts/IMG20_".concat(i.toString()).concat(".png");
    document.images["pic"].alt = "IMG20_".concat(i.toString());
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l4);
    document.getElementById("captions").innerHTML = arr_capt4[i-1];
    document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -48%)';
    document.getElementById('backg').style.cssText = 'width: 47%';
    if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
    	document.getElementById('right').style.cssText = 'display: block';
    } else if (i==l4) {																		//
    	document.getElementById('right').style.cssText = 'display: none';
    	document.getElementById('left').style.cssText = 'display: block';
    } else {
    	document.getElementById('left').style.cssText = 'display: block';
    	document.getElementById('right').style.cssText = 'display: block';
    }
    return r4=i;
}
function change4() {
	var i=r4;																				//
	if (i+1<=l4) {																			//
		if (i==1) {
			document.getElementById('left').style.cssText = 'display: block';
		}
		i++;
		document.images["pic"].src = "images/posts/IMG20_".concat(i.toString()).concat(".png");	//
    	document.images["pic"].alt = "IMG20_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l4);		//
    	document.getElementById("captions").innerHTML = arr_capt4[i-1];							//
    }
	if (i==l4) {																				//
    	document.getElementById('right').style.cssText = 'display: none';
	}
	return r4=i;																				//
}
function change4_b() {
	var i=r4;																					//
	if (i-1>=1) {
		if (i==l4) {																			//
			document.getElementById('right').style.cssText = 'display: block';
		}
		i--;
		document.images["pic"].src = "images/posts/IMG20_".concat(i.toString()).concat(".png");	//
    	document.images["pic"].alt = "IMG20_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l4);		//
    	document.getElementById("captions").innerHTML = arr_capt4[i-1];							//
    }
	if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
	}
	return r4=i;																				//
}
// POST 5 //


// POST 6 //

var arr_capt6 = [""];
var l6 = arr_capt6.length;

document.getElementById("img22.1").addEventListener("click", function(){openGallery_6(1);});

function openGallery_6() {
	i = arguments[0];
    console.log(i);
	document.images["pic"].src = "images/posts/IMG22_".concat(i.toString()).concat(".gif");
    document.images["pic"].alt = "IMG22_".concat(i.toString());
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l6);
    document.getElementById("captions").innerHTML = arr_capt6[i-1];
	document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -48%)';
    document.getElementById('backg').style.cssText = 'width: 75%';
    if (i==1) {
        document.getElementById('left').style.cssText = 'display: none';
    }
    if (i==l6) {
        document.getElementById('right').style.cssText = 'display: none';
    }
    return r6=i;
}



// CLOSE GALLERY //

function closeGallery() {
	document.getElementById('gallery_background').style.cssText = 'display: none';
	document.getElementById('body').style.cssText = 'overflow: auto';
    r2=0;
    r3=0;
    r4=0;
    r6=0;
}
}