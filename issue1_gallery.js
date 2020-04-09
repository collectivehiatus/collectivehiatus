var mq = window.matchMedia( "(min-width: 1024px)" );
if (mq.matches) {

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Escape") {
        if (r1!=0 || r2!=0 || r3!=0 || r4!=0 || r5!=0){
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

function change(){
	if (r2!=0){
		change2();
	} else if (r3!=0){
		change3();
	} else if (r4!=0){
		change4();
	} else if (r5!=0){
		change5();
	}
}

function change_b(){
	if (r2!=0){
		change2_b();
	} else if (r3!=0){
		change3_b();
	} else if (r4!=0){
		change4_b();
	} else if (r5!=0){
		change5_b();
	}
}

// POST 1 //

var arr_capt1 = ["Alone, Omen 3 (Man Alive!, 2020) by King Krule."];
var l1 = arr_capt1.length;

document.getElementById("img1.1").addEventListener("click", function(){openGallery_1(1);});

function openGallery_1() {
	i = arguments[0];
	document.images["pic"].src = "images/posts/IMG1_".concat(i.toString()).concat(".jpg");
    document.images["pic"].alt = "IMG1_".concat(i.toString());
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l1);
    document.getElementById("captions").innerHTML = arr_capt1[i-1];
	document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -4.5%)';
    document.getElementById('backg').style.cssText = 'width: 47%';
    if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
    }
    if (i==l1) {
    	document.getElementById('right').style.cssText = 'display: none';
    }
    return r1=i;
}

// POST 2 //

var arr_capt2 = ["AN ORTHOGONAL APPROACH", "THE MATHEMATICS OF SPACE", "TOPOS - A TERRAIN VIEW", "A VISUAL DEPICTION OF EXPANSION", "TRANSITING", "THE TRINITY OF SPACE"];
var l2 = arr_capt2.length;																	//

document.getElementById("img2.1").addEventListener("click", function(){openGallery_2(1);});
document.getElementById("img2.2").addEventListener("click", function(){openGallery_2(2);});
document.getElementById("img2.3").addEventListener("click", function(){openGallery_2(3);});
document.getElementById("img2.4").addEventListener("click", function(){openGallery_2(4);});
document.getElementById("img2.5").addEventListener("click", function(){openGallery_2(5);});
document.getElementById("img2.6").addEventListener("click", function(){openGallery_2(6);});

function openGallery_2() {
	i = arguments[0];
	document.images["pic"].src = "images/posts/IMG2_".concat(i.toString()).concat(".png"); 	//
    document.images["pic"].alt = "IMG2_".concat(i.toString()); 								//
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l2); 		//
    document.getElementById("captions").innerHTML = arr_capt2[i-1];							//
	document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -50%)';
    document.getElementById('backg').style.cssText = 'width: 60%';
    if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
    	document.getElementById('right').style.cssText = 'display: block';
    } else if (i==l2) {																		//
    	document.getElementById('right').style.cssText = 'display: none';
    	document.getElementById('left').style.cssText = 'display: block';
    } else {
    	document.getElementById('left').style.cssText = 'display: block';
    	document.getElementById('left').style.cssText = 'display: block';
    }
    return r2=i;																			//
}

function change2() {
	var i=r2;																				//
	if (i+1<=l2) {																			//
		if (i==1) {
			document.getElementById('left').style.cssText = 'display: block';
		}
		i++;
		document.images["pic"].src = "images/posts/IMG2_".concat(i.toString()).concat(".png");	//
    	document.images["pic"].alt = "IMG2_".concat(i.toString());								//
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
		document.images["pic"].src = "images/posts/IMG2_".concat(i.toString()).concat(".png");	//
    	document.images["pic"].alt = "IMG2_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l2);		//
    	document.getElementById("captions").innerHTML = arr_capt2[i-1];							//
    }
	if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
	}
	return r2=i;																				//
}

// POST 3 //

var arr_capt3 = ["1. Earthy tones and soft brush strokes create<br>an everyday towel that sits restfully <br>on a bentwood chair Tony Belobrajdic<br>2. Window - “Looking Out a Dirty Old Window” <br>Version 2 (2018) Colley Whisson",
"1. Bed - “Assemblage” (2010) Derek Buckner<br>2. Jam jar - No title (2017) Francis Livingston"];
var l3 = arr_capt3.length;

document.getElementById("img3.1").addEventListener("click", function(){openGallery_3(1);});
document.getElementById("img3.2").addEventListener("click", function(){openGallery_3(2);});

function openGallery_3() {
	i = arguments[0];
	document.images["pic"].src = "images/posts/IMG3_".concat(i.toString()).concat(".png");
    document.images["pic"].alt = "IMG3_".concat(i.toString());
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l3);
    document.getElementById("captions").innerHTML = arr_capt3[i-1];
	document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -50%)';
    if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
    	document.getElementById('right').style.cssText = 'display: block';
    } else if (i==l3) {
    	document.getElementById('right').style.cssText = 'display: none';
    	document.getElementById('left').style.cssText = 'display: block';
    } else {
    	document.getElementById('left').style.cssText = 'display: block';
    	document.getElementById('left').style.cssText = 'display: block';
    }
    return r3=i;
}

function change3() {
	var i=r3;
	if (i+1<=l3) {
		if (i==1) {
			document.getElementById('left').style.cssText = 'display: block';
		}
		i++;
		document.images["pic"].src = "images/posts/IMG3_".concat(i.toString()).concat(".png");
    	document.images["pic"].alt = "IMG3_".concat(i.toString());
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l3);
    	document.getElementById("captions").innerHTML = arr_capt3[i-1];
    }
	if (i==l3) {
    	document.getElementById('right').style.cssText = 'display: none';
	}
	return r3=i;
}

function change3_b() {
	var i=r3;
	if (i-1>=1) {
		if (i==l3) {
			document.getElementById('right').style.cssText = 'display: block';
		}
		i--;
		document.images["pic"].src = "images/posts/IMG3_".concat(i.toString()).concat(".png");
    	document.images["pic"].alt = "IMG3_".concat(i.toString());
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l3);
    	document.getElementById("captions").innerHTML = arr_capt3[i-1];
    }
	if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
	}
	return r3=i;
}



// POST 4 //

var arr_capt4 = ["Untitled.", "Untitled.", "Untitled.", "Untitled.", "Untitled.", "Untitled.", "Untitled."];
var l4 = arr_capt4.length;

document.getElementById("img4.1").addEventListener("click", function(){openGallery_4(1);});
document.getElementById("img4.2").addEventListener("click", function(){openGallery_4(2);});
document.getElementById("img4.3").addEventListener("click", function(){openGallery_4(3);});
document.getElementById("img4.4").addEventListener("click", function(){openGallery_4(4);});
document.getElementById("img4.5").addEventListener("click", function(){openGallery_4(5);});
document.getElementById("img4.6").addEventListener("click", function(){openGallery_4(6);});
document.getElementById("img4.7").addEventListener("click", function(){openGallery_4(7);});

function openGallery_4() {
	i = arguments[0];
	document.images["pic"].src = "images/posts/IMG4_".concat(i.toString()).concat(".png"); 	//
    document.images["pic"].alt = "IMG4_".concat(i.toString()); 								//
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l4); 		//
    document.getElementById("captions").innerHTML = arr_capt4[i-1];							//
	document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -50%)';
    if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
    	document.getElementById('right').style.cssText = 'display: block';
    } else if (i==l4) {																		//
    	document.getElementById('right').style.cssText = 'display: none';
    	document.getElementById('left').style.cssText = 'display: block';
    } else {
    	document.getElementById('left').style.cssText = 'display: block';
    	document.getElementById('left').style.cssText = 'display: block';
    }
    return r4=i;																			//
}

function change4() {
	var i=r4;																				//
	if (i+1<=l4) {																			//
		if (i==1) {
			document.getElementById('left').style.cssText = 'display: block';
		}
		i++;
		document.images["pic"].src = "images/posts/IMG4_".concat(i.toString()).concat(".png");	//
    	document.images["pic"].alt = "IMG4_".concat(i.toString());								//
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
		document.images["pic"].src = "images/posts/IMG4_".concat(i.toString()).concat(".png");	//
    	document.images["pic"].alt = "IMG4_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l4);		//
    	document.getElementById("captions").innerHTML = arr_capt4[i-1];							//
    }
	if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
	}
	return r4=i;																				//
}


// POST 5 //

var arr_capt5 = ["Untitled.", "Untitled.", "Untitled."];
var l5 = arr_capt5.length;

document.getElementById("img5.1").addEventListener("click", function(){openGallery_5(1);});
document.getElementById("img5.2").addEventListener("click", function(){openGallery_5(2);});
document.getElementById("img5.3").addEventListener("click", function(){openGallery_5(3);});

function openGallery_5() {
	i = arguments[0];
	document.images["pic"].src = "images/posts/IMG5_".concat(i.toString()).concat(".gif"); 	//
    document.images["pic"].alt = "IMG5_".concat(i.toString()); 								//
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l5); 		//
    document.getElementById("captions").innerHTML = arr_capt5[i-1];							//
	document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -50%)';
    document.getElementById('backg').style.cssText = 'width: 47%';
    if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
    	document.getElementById('right').style.cssText = 'display: block';
    } else if (i==l5) {																		//
    	document.getElementById('right').style.cssText = 'display: none';
    	document.getElementById('left').style.cssText = 'display: block';
    } else {
    	document.getElementById('left').style.cssText = 'display: block';
    	document.getElementById('left').style.cssText = 'display: block';
    }
    return r5=i;																			//
}

function change5() {
	var i=r5;																				//
	if (i+1<=l5) {																			//
		if (i==1) {
			document.getElementById('left').style.cssText = 'display: block';
		}
		i++;
		document.images["pic"].src = "images/posts/IMG5_".concat(i.toString()).concat(".gif");	//
    	document.images["pic"].alt = "IMG5_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l5);		//
    	document.getElementById("captions").innerHTML = arr_capt5[i-1];							//
    }
	if (i==l5) {																				//
    	document.getElementById('right').style.cssText = 'display: none';
	}
	return r5=i;																				//
}

function change5_b() {
	var i=r5;																					//
	if (i-1>=1) {
		if (i==l5) {																			//
			document.getElementById('right').style.cssText = 'display: block';
		}
		i--;
		document.images["pic"].src = "images/posts/IMG5_".concat(i.toString()).concat(".gif");	//
    	document.images["pic"].alt = "IMG5_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l5);		//
    	document.getElementById("captions").innerHTML = arr_capt5[i-1];							//
    }
	if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
	}
	return r5=i;																				//
}

// CLOSE GALLERY //

function closeGallery() {
	document.getElementById('gallery_background').style.cssText = 'display: none';
	document.getElementById('body').style.cssText = 'overflow: auto';
    r2=0;
    r3=0;
    r4=0;
    r5=0;
}

}
