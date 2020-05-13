if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // no pc, no gallery
}else{
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
	if (r1!=0){
		change1();
	} else if (r2!=0){
        change2();
    } else if (r3!=0){
		change3();
	} else if (r5!=0){
		change5();
	}
}

function change_b(){
	if (r1!=0){
		change1_b();
	} else if (r2!=0){
        change2_b();
    } else if (r3!=0){
		change3_b();
	} else if (r5!=0){
		change5_b();
	}
}

// POST 1 //

var arr_capt1 = ["", "", "", "", ""];
var l1 = arr_capt1.length;

document.getElementById("img6.1").addEventListener("click", function(){openGallery_1(1);});
document.getElementById("img6.2").addEventListener("click", function(){openGallery_1(2);});
document.getElementById("img6.3").addEventListener("click", function(){openGallery_1(3);});
document.getElementById("img6.4").addEventListener("click", function(){openGallery_1(4);});
document.getElementById("img6.5").addEventListener("click", function(){openGallery_1(5);});

function openGallery_1() {
	i = arguments[0];
    console.log(i);
	document.images["pic"].src = "images/posts/IMG6_".concat(i.toString()).concat(".jpg");
    document.images["pic"].alt = "IMG6_".concat(i.toString());
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l1);
    document.getElementById("captions").innerHTML = arr_capt1[i-1];
	document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -50%)';
    document.getElementById('backg').style.cssText = 'width: 80%';
    if (i==1) {
        document.getElementById('left').style.cssText = 'display: none';
        document.getElementById('right').style.cssText = 'display: block';
    } else if (i==l2) {                                                                     //
        document.getElementById('right').style.cssText = 'display: none';
        document.getElementById('left').style.cssText = 'display: block';
    } else {
        document.getElementById('left').style.cssText = 'display: block';
        document.getElementById('right').style.cssText = 'display: block';
    }
    return r1=i;
}

function change1() {
    var i=r1;                                                                               //
    if (i+1<=l1) {                                                                          //
        if (i==1) {
            document.getElementById('left').style.cssText = 'display: block';
        }
        i++;
        document.images["pic"].src = "images/posts/IMG6_".concat(i.toString()).concat(".jpg");  //
        document.images["pic"].alt = "IMG6_".concat(i.toString());                              //
        document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l1);       //
        document.getElementById("captions").innerHTML = arr_capt1[i-1];                         //
    }
    if (i==l1) {                                                                                //
        document.getElementById('right').style.cssText = 'display: none';
    }
    return r1=i;                                                                                //
}

function change1_b() {
    var i=r1;                                                                                   //
    if (i-1>=1) {
        if (i==l1) {                                                                            //
            document.getElementById('right').style.cssText = 'display: block';
        }
        i--;
        document.images["pic"].src = "images/posts/IMG6_".concat(i.toString()).concat(".jpg");  //
        document.images["pic"].alt = "IMG6_".concat(i.toString());                              //
        document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l1);       //
        document.getElementById("captions").innerHTML = arr_capt1[i-1];                         //
    }
    if (i==1) {
        document.getElementById('left').style.cssText = 'display: none';
    }
    return r1=i;                                                                                //
}

// POST 2 //

var arr_capt2 = ["", "", "", "", "", ""];
var l2 = arr_capt2.length;																	//

document.getElementById("img7.1").addEventListener("click", function(){openGallery_2(1);});
document.getElementById("img7.2").addEventListener("click", function(){openGallery_2(2);});
document.getElementById("img7.3").addEventListener("click", function(){openGallery_2(2);});
document.getElementById("img7.4").addEventListener("click", function(){openGallery_2(2);});
document.getElementById("img7.5").addEventListener("click", function(){openGallery_2(2);});
document.getElementById("img7.6").addEventListener("click", function(){openGallery_2(2);});


function openGallery_2() {
	i = arguments[0];
	document.images["pic"].src = "images/posts/IMG7_".concat(i.toString()).concat(".jpg"); 	//
    document.images["pic"].alt = "IMG7_".concat(i.toString()); 								//
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l2); 		//
    document.getElementById("captions").innerHTML = arr_capt2[i-1];							//
	document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -50%)';
    document.getElementById('backg').style.cssText = 'width: 80%';
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
    return r2=i;																			//
}

function change2() {
	var i=r2;																				//
	if (i+1<=l2) {																			//
		if (i==1) {
			document.getElementById('left').style.cssText = 'display: block';
		}
		i++;
		document.images["pic"].src = "images/posts/IMG7_".concat(i.toString()).concat(".jpg");	//
    	document.images["pic"].alt = "IMG7_".concat(i.toString());								//
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
		document.images["pic"].src = "images/posts/IMG7_".concat(i.toString()).concat(".jpg");	//
    	document.images["pic"].alt = "IMG7_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l2);		//
    	document.getElementById("captions").innerHTML = arr_capt2[i-1];							//
    }
	if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
	}
	return r2=i;																				//
}

// POST 3 //


// POST 4 //

var arr_capt4 = [""];
var l4 = arr_capt4.length;

document.getElementById("img9.1").addEventListener("click", function(){openGallery_4(1);});

function openGallery_4() {
	i = arguments[0];
	document.images["pic"].src = "images/posts/IMG9_".concat(i.toString()).concat(".png"); 	//
    document.images["pic"].alt = "IMG9_".concat(i.toString()); 								//
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l4); 		//
    document.getElementById("captions").innerHTML = arr_capt4[i-1];							//
	document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -48%)';
    document.getElementById('backg').style.cssText = 'width: 45%';

    document.getElementById('left').style.cssText = 'display: none';
    document.getElementById('right').style.cssText = 'display: none';
    return r4=i;																			//
}


// POST 5 //

var arr_capt5 = ["", "", "", "", "", ""];
var l5 = arr_capt5.length;

document.getElementById("img10.1").addEventListener("click", function(){openGallery_5(1);});
document.getElementById("img10.2").addEventListener("click", function(){openGallery_5(2);});
document.getElementById("img10.3").addEventListener("click", function(){openGallery_5(3);});
document.getElementById("img10.4").addEventListener("click", function(){openGallery_5(4);});
document.getElementById("img10.5").addEventListener("click", function(){openGallery_5(5);});
document.getElementById("img10.6").addEventListener("click", function(){openGallery_5(6);});

function openGallery_5() {
	i = arguments[0];
	document.images["pic"].src = "images/posts/IMG10_".concat(i.toString()).concat(".jpg"); 	//
    document.images["pic"].alt = "IMG10_".concat(i.toString()); 								//
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l5); 		//
    document.getElementById("captions").innerHTML = arr_capt5[i-1];							//
	document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -48%)';
    document.getElementById('backg').style.cssText = 'width: 25%';
    if (i==1) {
        document.getElementById('left').style.cssText = 'display: none';
        document.getElementById('right').style.cssText = 'display: block';
    } else if (i==l5) {                                                                     //
        document.getElementById('right').style.cssText = 'display: none';
        document.getElementById('left').style.cssText = 'display: block';
    } else {
        document.getElementById('left').style.cssText = 'display: block';
        document.getElementById('right').style.cssText = 'display: block';
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
		document.images["pic"].src = "images/posts/IMG10_".concat(i.toString()).concat(".jpg");	//
    	document.images["pic"].alt = "IMG10_".concat(i.toString());								//
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
		document.images["pic"].src = "images/posts/IMG10_".concat(i.toString()).concat(".jpg");	//
    	document.images["pic"].alt = "IMG10_".concat(i.toString());								//
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