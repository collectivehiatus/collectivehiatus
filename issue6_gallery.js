if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // no pc, no gallery
}else{
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Escape") {
        if (r1!=0 || r2!=0 || r3!=0 || r4!=0 || r5!=0 || r6!=0 || r7!=0 || r8!=0){
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
var r7=0;
var r8=0;

function change(){
	if (r1!=0){
		change1();
	} else if (r4!=0){
		change4();
	} 
    else if (r5!=0){
		change5();
	} 
    else if (r6!=0){
		change6();
	} 
    else if (r8!=0){
		change8();
	} 
}

function change_b(){
	if (r1!=0){
		change1_b();
	} else if (r4!=0){
		change4_b();
	} 
    else if (r5!=0){
		change5_b();
	}
    else if (r6!=0){
		change6_b();
	} 
    else if (r8!=0){
		change8_b();
	} 
}

// POST 1 //

var arr_capt1 = ["", "", "", "", "", "", "", "", ""];
var l1 = arr_capt1.length;

document.getElementById("img31.1").addEventListener("click", function(){openGallery_1(1);});
document.getElementById("img31.2").addEventListener("click", function(){openGallery_1(2);});    
document.getElementById("img31.3").addEventListener("click", function(){openGallery_1(3);});  
document.getElementById("img31.4").addEventListener("click", function(){openGallery_1(4);});
document.getElementById("img31.5").addEventListener("click", function(){openGallery_1(5);});  
document.getElementById("img31.6").addEventListener("click", function(){openGallery_1(6);});  
document.getElementById("img31.7").addEventListener("click", function(){openGallery_1(7);});  
document.getElementById("img31.8").addEventListener("click", function(){openGallery_1(8);});  
document.getElementById("img31.9").addEventListener("click", function(){openGallery_1(9);});  

function openGallery_1() {
	i = arguments[0];
    console.log(i);
	document.images["pic"].src = "images/posts/IMG31_".concat(i.toString()).concat(".png");
    document.images["pic"].alt = "IMG31_".concat(i.toString());
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l1);
    document.getElementById("captions").innerHTML = arr_capt1[i-1];
	document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -48%)';
    document.getElementById('backg').style.cssText = 'width: 40%';
    if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
    	document.getElementById('right').style.cssText = 'display: block';
    } else if (i==l1) {																		//
    	document.getElementById('right').style.cssText = 'display: none';
    	document.getElementById('left').style.cssText = 'display: block';
    } else {
    	document.getElementById('left').style.cssText = 'display: block';
    	document.getElementById('right').style.cssText = 'display: block';
    }
    return r1=i;
}
function change1() {
	var i=r1;																				//
	if (i+1<=l1) {																			//
		if (i==1) {
			document.getElementById('left').style.cssText = 'display: block';
		}
		i++;
		document.images["pic"].src = "images/posts/IMG31_".concat(i.toString()).concat(".png");	//
    	document.images["pic"].alt = "IMG31_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l1);		//
    	document.getElementById("captions").innerHTML = arr_capt1[i-1];							//
    }
	if (i==l1) {																				//
    	document.getElementById('right').style.cssText = 'display: none';
	}
	return r1=i;																				//
}
function change1_b() {
	var i=r1;																					//
	if (i-1>=1) {
		if (i==l1) {																			//
			document.getElementById('right').style.cssText = 'display: block';
		}
		i--;
		document.images["pic"].src = "images/posts/IMG31_".concat(i.toString()).concat(".png");	//
    	document.images["pic"].alt = "IMG31_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l1);		//
    	document.getElementById("captions").innerHTML = arr_capt1[i-1];							//
    }
	if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
	}
	return r1=i;																				//
}

// POST 2 //

var arr_capt2 = [""];
var l2 = arr_capt2.length;

document.getElementById("img32.1").addEventListener("click", function(){openGallery_2(1);});

function openGallery_2() {
    i = arguments[0];
    console.log(i);
    document.images["pic"].src = "images/posts/IMG32_".concat(i.toString()).concat(".jpg");
    document.images["pic"].alt = "IMG32_".concat(i.toString());
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l2);
    document.getElementById("captions").innerHTML = arr_capt2[i-1];
    document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -48%)';
    document.getElementById('backg').style.cssText = 'width: 65%';
    if (i==1) {
        document.getElementById('left').style.cssText = 'display: none';
    }
    if (i==l2) {
        document.getElementById('right').style.cssText = 'display: none';
    }
    return r2=i;
}



// POST 3 //

var arr_capt3 = [""];
var l3 = arr_capt3.length;

document.getElementById("img33.1").addEventListener("click", function(){openGallery_3(1);});

function openGallery_3() {
    i = arguments[0];
    console.log(i);
    document.images["pic"].src = "images/posts/IMG33_".concat(i.toString()).concat(".gif");
    document.images["pic"].alt = "IMG33_".concat(i.toString());
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l3);
    document.getElementById("captions").innerHTML = arr_capt3[i-1];
    document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -48%)';
    document.getElementById('backg').style.cssText = 'width: 50%';
    if (i==1) {
        document.getElementById('left').style.cssText = 'display: none';
    }
    if (i==l3) {
        document.getElementById('right').style.cssText = 'display: none';
    }
    return r3=i;
}


// POST 4 //

var arr_capt4 = ["", "", "", "", "", ""];
var l4 = arr_capt4.length;

document.getElementById("img34.1").addEventListener("click", function(){openGallery_4(1);});
document.getElementById("img34.2").addEventListener("click", function(){openGallery_4(2);});
document.getElementById("img34.3").addEventListener("click", function(){openGallery_4(3);});
document.getElementById("img34.4").addEventListener("click", function(){openGallery_4(4);});
document.getElementById("img34.5").addEventListener("click", function(){openGallery_4(5);});
document.getElementById("img34.6").addEventListener("click", function(){openGallery_4(6);});

function openGallery_4() {
    i = arguments[0];
    console.log(i);
    document.images["pic"].src = "images/posts/IMG34_".concat(i.toString()).concat(".jpg");
    document.images["pic"].alt = "IMG34_".concat(i.toString());
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l4);
    document.getElementById("captions").innerHTML = arr_capt4[i-1];
    document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -48%)';
    document.getElementById('backg').style.cssText = 'width: 20%';
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
		document.images["pic"].src = "images/posts/IMG34_".concat(i.toString()).concat(".jpg");	//
    	document.images["pic"].alt = "IMG34_".concat(i.toString());								//
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
		document.images["pic"].src = "images/posts/IMG34_".concat(i.toString()).concat(".jpg");	//
    	document.images["pic"].alt = "IMG34_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l4);		//
    	document.getElementById("captions").innerHTML = arr_capt4[i-1];							//
    }
	if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
	}
	return r4=i;																				//
}
// POST 5 //

var arr_capt5 = ["", "", "", "", "", ""];
var l5 = arr_capt5.length;

document.getElementById("img35.1").addEventListener("click", function(){openGallery_5(1);});
document.getElementById("img35.2").addEventListener("click", function(){openGallery_5(2);});
document.getElementById("img35.3").addEventListener("click", function(){openGallery_5(3);});
document.getElementById("img35.4").addEventListener("click", function(){openGallery_5(4);});
document.getElementById("img35.5").addEventListener("click", function(){openGallery_5(5);});    
document.getElementById("img35.6").addEventListener("click", function(){openGallery_5(6);});  
    

function openGallery_5() {
    i = arguments[0];
    console.log(i);
    document.images["pic"].src = "images/posts/IMG35_".concat(i.toString()).concat(".jpg");
    document.images["pic"].alt = "IMG35_".concat(i.toString());
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l5);
    document.getElementById("captions").innerHTML = arr_capt5[i-1];
    document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -48%)';
    document.getElementById('backg').style.cssText = 'width: 20%';
    if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
    	document.getElementById('right').style.cssText = 'display: block';
    } else if (i==l5) {																		//
    	document.getElementById('right').style.cssText = 'display: none';
    	document.getElementById('left').style.cssText = 'display: block';
    } else {
    	document.getElementById('left').style.cssText = 'display: block';
    	document.getElementById('right').style.cssText = 'display: block';
    }
    return r5=i;
}
function change5() {
	var i=r5;																				//
	if (i+1<=l5) {																			//
		if (i==1) {
			document.getElementById('left').style.cssText = 'display: block';
		}
		i++;
		document.images["pic"].src = "images/posts/IMG35_".concat(i.toString()).concat(".jpg");	//
    	document.images["pic"].alt = "IMG35_".concat(i.toString());								//
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
		document.images["pic"].src = "images/posts/IMG35_".concat(i.toString()).concat(".jpg");	//
    	document.images["pic"].alt = "IMG35_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l5);		//
    	document.getElementById("captions").innerHTML = arr_capt5[i-1];							//
    }
	if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
	}
	return r5=i;																				//
}
// POST 6 //

var arr_capt6 = ["", "", ""];
var l6 = arr_capt6.length;

document.getElementById("img36.1").addEventListener("click", function(){openGallery_6(1);});
document.getElementById("img36.2").addEventListener("click", function(){openGallery_6(2);});    
document.getElementById("img36.3").addEventListener("click", function(){openGallery_6(3);});   

function openGallery_6() {
	i = arguments[0];
    console.log(i);
	document.images["pic"].src = "images/posts/IMG36_".concat(i.toString()).concat(".jpg");
    document.images["pic"].alt = "IMG36_".concat(i.toString());
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l6);
    document.getElementById("captions").innerHTML = arr_capt6[i-1];
	document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -48%)';
    document.getElementById('backg').style.cssText = 'width: 45%';
    if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
    	document.getElementById('right').style.cssText = 'display: block';
    } else if (i==l6) {																		//
    	document.getElementById('right').style.cssText = 'display: none';
    	document.getElementById('left').style.cssText = 'display: block';
    } else {
    	document.getElementById('left').style.cssText = 'display: block';
    	document.getElementById('right').style.cssText = 'display: block';
    }
    return r6=i;
}
function change6() {
	var i=r6;																				//
	if (i+1<=l6) {																			//
		if (i==1) {
			document.getElementById('left').style.cssText = 'display: block';
		}
		i++;
		document.images["pic"].src = "images/posts/IMG36_".concat(i.toString()).concat(".jpg");	//
    	document.images["pic"].alt = "IMG36_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l6);		//
    	document.getElementById("captions").innerHTML = arr_capt6[i-1];							//
    }
	if (i==l6) {																				//
    	document.getElementById('right').style.cssText = 'display: none';
	}
	return r6=i;																				//
}
function change6_b() {
	var i=r6;																					//
	if (i-1>=1) {
		if (i==l6) {																			//
			document.getElementById('right').style.cssText = 'display: block';
		}
		i--;
		document.images["pic"].src = "images/posts/IMG36_".concat(i.toString()).concat(".jpg");	//
    	document.images["pic"].alt = "IMG36_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l6);		//
    	document.getElementById("captions").innerHTML = arr_capt6[i-1];							//
    }
	if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
	}
	return r6=i;																				//
}
// POST 7 //



// POST 8 //

var arr_capt8 = ["", "", "", "", "", "", "", ""];
var l8 = arr_capt8.length;

document.getElementById("img38.1").addEventListener("click", function(){openGallery_8(1);});
document.getElementById("img38.2").addEventListener("click", function(){openGallery_8(2);});    
document.getElementById("img38.3").addEventListener("click", function(){openGallery_8(3);});    
document.getElementById("img38.4").addEventListener("click", function(){openGallery_8(4);});      
document.getElementById("img38.5").addEventListener("click", function(){openGallery_8(5);});      
document.getElementById("img38.6").addEventListener("click", function(){openGallery_8(6);});      
document.getElementById("img38.7").addEventListener("click", function(){openGallery_8(7);});      
document.getElementById("img38.8").addEventListener("click", function(){openGallery_8(8);});    
    

function openGallery_8() {
	i = arguments[0];
    console.log(i);
	document.images["pic"].src = "images/posts/IMG38_".concat(i.toString()).concat(".png");
    document.images["pic"].alt = "IMG38_".concat(i.toString());
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l8);
    document.getElementById("captions").innerHTML = arr_capt8[i-1];
	document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -48%)';
    document.getElementById('backg').style.cssText = 'width: 45%';
    if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
    	document.getElementById('right').style.cssText = 'display: block';
    } else if (i==l8) {																		//
    	document.getElementById('right').style.cssText = 'display: none';
    	document.getElementById('left').style.cssText = 'display: block';
    } else {
    	document.getElementById('left').style.cssText = 'display: block';
    	document.getElementById('right').style.cssText = 'display: block';
    }
    return r8=i;
}
function change8() {
	var i=r8;																				//
	if (i+1<=l8) {																			//
		if (i==1) {
			document.getElementById('left').style.cssText = 'display: block';
		}
		i++;
		document.images["pic"].src = "images/posts/IMG38_".concat(i.toString()).concat(".png");	//
    	document.images["pic"].alt = "IMG38_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l8);		//
    	document.getElementById("captions").innerHTML = arr_capt8[i-1];							//
    }
	if (i==l8) {																				//
    	document.getElementById('right').style.cssText = 'display: none';
	}
	return r8=i;																				//
}
function change8_b() {
	var i=r8;																					//
	if (i-1>=1) {
		if (i==l8) {																			//
			document.getElementById('right').style.cssText = 'display: block';
		}
		i--;
		document.images["pic"].src = "images/posts/IMG38_".concat(i.toString()).concat(".png");	//
    	document.images["pic"].alt = "IMG38_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l8);		//
    	document.getElementById("captions").innerHTML = arr_capt8[i-1];							//
    }
	if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
	}
	return r8=i;																				//
}    
// CLOSE GALLERY //

function closeGallery() {
	document.getElementById('gallery_background').style.cssText = 'display: none';
	document.getElementById('body').style.cssText = 'overflow: auto';
    r1=0;
    r2=0;
    r3=0;
    r4=0;
    r5=0;
    r6=0;
    r8=0;
}
}