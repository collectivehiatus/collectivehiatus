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
var r6=0

function change(){
	if (r4!=0){
		change4();
	} else if (r5!=0){
		change5();
	} else if (r6!=0){
        change6();
    }
}

function change_b(){
	if (r4!=0){
		change4_b();
	} else if (r5!=0){
		change5_b();
	} else if (r6!=0){
        change6_b();
    }
}

// POST 1 //

var arr_capt1 = [""];
var l1 = arr_capt1.length;

document.getElementById("img11.1").addEventListener("click", function(){openGallery_1(1);});

function openGallery_1() {
	i = arguments[0];
    console.log(i);
	document.images["pic"].src = "images/posts/IMG11_".concat(i.toString()).concat(".jpg");
    document.images["pic"].alt = "IMG11_".concat(i.toString());
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l1);
    document.getElementById("captions").innerHTML = arr_capt1[i-1];
	document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -48%)';
    document.getElementById('backg').style.cssText = 'width: 75%';
    if (i==1) {
        document.getElementById('left').style.cssText = 'display: none';
    }
    if (i==l1) {
        document.getElementById('right').style.cssText = 'display: none';
    }
    return r1=i;
}

// POST 2 //

var arr_capt2 = [""];
var l2 = arr_capt2.length;																	//

document.getElementById("img12.1").addEventListener("click", function(){openGallery_2(1);});


function openGallery_2() {
	i = arguments[0];
	document.images["pic"].src = "images/posts/IMG12_".concat(i.toString()).concat(".jpg"); 	//
    document.images["pic"].alt = "IMG12_".concat(i.toString()); 								//
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l2); 		//
    document.getElementById("captions").innerHTML = arr_capt2[i-1];							//
	document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -48%)';
    document.getElementById('backg').style.cssText = 'width: 45%';
    if (i==1) {
        document.getElementById('left').style.cssText = 'display: none';
    }
    if (i==l1) {
        document.getElementById('right').style.cssText = 'display: none';
    }
    return r1=i;
}


// POST 3 //

var arr_capt3 = [""];
var l3 = arr_capt3.length;

document.getElementById("img13.1").addEventListener("click", function(){openGallery_3(1);});

function openGallery_3() {
    i = arguments[0];
    console.log(i);
    document.images["pic"].src = "images/posts/IMG13_".concat(i.toString()).concat(".jpg");
    document.images["pic"].alt = "IMG13_".concat(i.toString());
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l3);
    document.getElementById("captions").innerHTML = arr_capt3[i-1];
    document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -48%)';
    document.getElementById('backg').style.cssText = 'width: 75%';
    if (i==1) {
        document.getElementById('left').style.cssText = 'display: none';
    }
    if (i==l3) {
        document.getElementById('right').style.cssText = 'display: none';
    }
    return r3=i;
}

// POST 4 //


// POST 5 //

var arr_capt5 = ["", "", "", "", ""];
var l5 = arr_capt5.length;

document.getElementById("img15.1").addEventListener("click", function(){openGallery_5(1);});
document.getElementById("img15.2").addEventListener("click", function(){openGallery_5(2);});
document.getElementById("img15.3").addEventListener("click", function(){openGallery_5(3);});
document.getElementById("img15.4").addEventListener("click", function(){openGallery_5(4);});
document.getElementById("img15.5").addEventListener("click", function(){openGallery_5(5);});

function openGallery_5() {
	i = arguments[0];
	document.images["pic"].src = "images/posts/IMG15_".concat(i.toString()).concat(".jpg"); 	//
    document.images["pic"].alt = "IMG15_".concat(i.toString()); 								//
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l5); 		//
    document.getElementById("captions").innerHTML = arr_capt5[i-1];							//
	document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -48%)';
    document.getElementById('backg').style.cssText = 'width: 80%';
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
		document.images["pic"].src = "images/posts/IMG15_".concat(i.toString()).concat(".jpg");	//
    	document.images["pic"].alt = "IMG15_".concat(i.toString());								//
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
		document.images["pic"].src = "images/posts/IMG15_".concat(i.toString()).concat(".jpg");	//
    	document.images["pic"].alt = "IMG15_".concat(i.toString());								//
    	document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l5);		//
    	document.getElementById("captions").innerHTML = arr_capt5[i-1];							//
    }
	if (i==1) {
    	document.getElementById('left').style.cssText = 'display: none';
	}
	return r5=i;																				//
}

// POST 6 //

var arr_capt6 = ["", ""];
var l6 = arr_capt6.length;

document.getElementById("img16.1").addEventListener("click", function(){openGallery_6(1);});
document.getElementById("img16.2").addEventListener("click", function(){openGallery_6(2);});


function openGallery_6() {
    i = arguments[0];
    document.images["pic"].src = "images/posts/IMG16_".concat(i.toString()).concat(".jpg");     //
    document.images["pic"].alt = "IMG16_".concat(i.toString());                                 //
    document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l6);       //
    document.getElementById("captions").innerHTML = arr_capt6[i-1];                         //
    document.getElementById('gallery_background').style.cssText = 'display: block';
    document.getElementById('body').style.cssText = 'overflow: hidden';
    document.getElementById('pic').style.cssText = 'transform: translate(-50%, -50%)';
    document.getElementById('backg').style.cssText = 'width: 80%';
    if (i==1) {
        document.getElementById('left').style.cssText = 'display: none';
        document.getElementById('right').style.cssText = 'display: block';
    } else if (i==l6) {                                                                     //
        document.getElementById('right').style.cssText = 'display: none';
        document.getElementById('left').style.cssText = 'display: block';
    } else {
        document.getElementById('left').style.cssText = 'display: block';
        document.getElementById('right').style.cssText = 'display: block';
    }
    return r6=i;                                                                            //
}

function change6() {
    var i=r6;                                                                               //
    if (i+1<=l6) {                                                                          //
        if (i==1) {
            document.getElementById('left').style.cssText = 'display: block';
        }
        i++;
        document.images["pic"].src = "images/posts/IMG16_".concat(i.toString()).concat(".jpg"); //
        document.images["pic"].alt = "IMG16_".concat(i.toString());                             //
        document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l6);       //
        document.getElementById("captions").innerHTML = arr_capt6[i-1];                         //
    }
    if (i==l6) {                                                                                //
        document.getElementById('right').style.cssText = 'display: none';
    }
    return r6=i;                                                                                //
}

function change6_b() {
    var i=r6;                                                                                   //
    if (i-1>=1) {
        if (i==l6) {                                                                            //
            document.getElementById('right').style.cssText = 'display: block';
        }
        i--;
        document.images["pic"].src = "images/posts/IMG16_".concat(i.toString()).concat(".jpg"); //
        document.images["pic"].alt = "IMG16_".concat(i.toString());                             //
        document.getElementById("srcnr").innerHTML = i.toString().concat("/").concat(l6);       //
        document.getElementById("captions").innerHTML = arr_capt6[i-1];                         //
    }
    if (i==1) {
        document.getElementById('left').style.cssText = 'display: none';
    }
    return r6=i;                                                                                //
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