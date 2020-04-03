var mq = window.matchMedia( "(min-width: 1024px)" );
if (mq.matches) {


//clicar no about
$('#about_button').click(
                function(){
                    $('#editorial').css('display', 'none')
                    $('#about').css('display', 'block')
                },             
 );
$('#about_button_2').click(
                function(){
                    $('#editorial').css('display', 'none')
                    $('#about').css('display', 'block')
                },             
 );


//clicar no editorial
 $('#editorial_button').click(
                function(){
                    $('#editorial').css('display', 'block')
                    $('#about').css('display', 'none')
                },             
 );
     $('#editorial_button_2').click(
                function(){
                    $('#editorial').css('display', 'block')
                    $('#about').css('display', 'none')
                },             
 );





/* para voltar a home page */
function openNav() {
    document.getElementById("right_side").style.marginLeft = "60%";
  document.getElementById("right_side").style.width = "40%";
  document.getElementById("left_side").style.width = "60%";
    document.getElementById("post_1_content").style.display = "none";
    document.getElementById("post_2_content").style.display = "none";
    document.getElementById("post_3_content").style.display = "none";
    document.getElementById("post_4_content").style.display = "none";
    document.getElementById("post_5_content").style.display = "none";
    document.getElementById("post_1").style.display = "block";
    document.getElementById("post_2").style.display = "block";
    document.getElementById("post_3").style.display = "block";
    document.getElementById("post_4").style.display = "block";
    document.getElementById("post_5").style.display = "block";
    document.getElementById("left_side_content").style.backgroundColor = "rgba(200, 200, 200, 0)";
    
    document.getElementById("menu_issues").style.display = "block";
    document.getElementById("menu_back").style.display = "none";
    document.getElementById("post_1_link").style.width = "80%";
    document.getElementById("post_2_link").style.width = "80%";
    document.getElementById("post_3_link").style.width = "80%";
    document.getElementById("post_4_link").style.width = "80%";
    document.getElementById("post_5_link").style.width = "80%";
    document.getElementById("post_1_link_date").style.display = "block";
    document.getElementById("post_2_link_date").style.display = "block";
    document.getElementById("post_3_link_date").style.display = "block";
    document.getElementById("post_4_link_date").style.display = "block";
    document.getElementById("post_5_link_date").style.display = "block";
    
    
    document.getElementById("editorial_button").style.display = "flex";
    document.getElementById("about_button").style.display = "flex";
    document.getElementById("editorial_button_2").style.display = "none";
    document.getElementById("about_button_2").style.display = "none";
    document.getElementById("close_button").style.display = "none";
    
}
 /* para para abrir menu dentro dos posts */   
function openNav2() {
    document.getElementById("right_side").style.marginLeft = "60%";
  document.getElementById("right_side").style.width = "40%";
        document.getElementById("close_button").style.display = "flex";
  
    
}
function closeNav() {
    document.getElementById("right_side").style.marginLeft = "100%";
  document.getElementById("right_side").style.width = "0%";
        document.getElementById("close_button").style.display = "none";
  
    
}

/* para abrir o primeiro post */
function closeNav1() {
    document.getElementById("right_side").style.marginLeft = "100%";
    document.getElementById("right_side").style.width = "0%";
    document.getElementById("left_side").style.width = "100%";
    
    document.getElementById("left_side_content").style.backgroundColor = "rgba(200, 200, 200)";

    document.getElementById("post_1_content").style.display = "block";
    document.getElementById("post_2").style.display = "none";
    document.getElementById("post_3").style.display = "none";
    document.getElementById("post_4").style.display = "none";
    document.getElementById("post_5").style.display = "none";
    
    document.getElementById("menu_issues").style.display = "none";
    document.getElementById("menu_back").style.display = "block";
    document.getElementById("post_1_link_date").style.display = "none";
    document.getElementById("post_1_link").style.width = "60%";
    
    document.getElementById("editorial_button").style.display = "none";
    document.getElementById("about_button").style.display = "none";
    document.getElementById("editorial_button_2").style.display = "flex";
    document.getElementById("about_button_2").style.display = "flex";
    document.getElementById("close_button").style.display = "none";
    
}
    /* para abrir o segundo post */
function closeNav2() {
    document.getElementById("right_side").style.marginLeft = "100%";
    document.getElementById("right_side").style.width = "0%";
    document.getElementById("left_side").style.width = "100%";
    
    document.getElementById("left_side_content").style.backgroundColor = "rgba(200, 200, 200)";

    document.getElementById("post_2_content").style.display = "block";
    document.getElementById("post_1").style.display = "none";
    document.getElementById("post_3").style.display = "none";
    document.getElementById("post_4").style.display = "none";
    document.getElementById("post_5").style.display = "none";
    
    document.getElementById("menu_issues").style.display = "none";
    document.getElementById("menu_back").style.display = "block";
    document.getElementById("post_2_link_date").style.display = "none";
    document.getElementById("post_2_link").style.width = "60%";
    
    document.getElementById("editorial_button").style.display = "none";
    document.getElementById("about_button").style.display = "none";
    document.getElementById("editorial_button_2").style.display = "flex";
    document.getElementById("about_button_2").style.display = "flex";
    document.getElementById("close_button").style.display = "none";
    
}
    /* para abrir o terceiro post */
function closeNav3() {
    document.getElementById("right_side").style.marginLeft = "100%";
    document.getElementById("right_side").style.width = "0%";
    document.getElementById("left_side").style.width = "100%";
    
    document.getElementById("left_side_content").style.backgroundColor = "rgba(200, 200, 200)";

    document.getElementById("post_3_content").style.display = "block";
    document.getElementById("post_1").style.display = "none";
    document.getElementById("post_2").style.display = "none";
    document.getElementById("post_4").style.display = "none";
    document.getElementById("post_5").style.display = "none";
    
    document.getElementById("menu_issues").style.display = "none";
    document.getElementById("menu_back").style.display = "block";
    document.getElementById("post_3_link_date").style.display = "none";
    document.getElementById("post_3_link").style.width = "60%";
    
    document.getElementById("editorial_button").style.display = "none";
    document.getElementById("about_button").style.display = "none";
    document.getElementById("editorial_button_2").style.display = "flex";
    document.getElementById("about_button_2").style.display = "flex";
    document.getElementById("close_button").style.display = "none";
    
}
    /* para abrir o quarto post */
function closeNav4() {
    document.getElementById("right_side").style.marginLeft = "100%";
    document.getElementById("right_side").style.width = "0%";
    document.getElementById("left_side").style.width = "100%";
    
    document.getElementById("left_side_content").style.backgroundColor = "rgba(200, 200, 200)";

    document.getElementById("post_4_content").style.display = "block";
    document.getElementById("post_1").style.display = "none";
    document.getElementById("post_2").style.display = "none";
    document.getElementById("post_3").style.display = "none";
    document.getElementById("post_5").style.display = "none";
    
    document.getElementById("menu_issues").style.display = "none";
    document.getElementById("menu_back").style.display = "block";
    document.getElementById("post_4_link_date").style.display = "none";
    document.getElementById("post_4_link").style.width = "60%";
    
    document.getElementById("editorial_button").style.display = "none";
    document.getElementById("about_button").style.display = "none";
    document.getElementById("editorial_button_2").style.display = "flex";
    document.getElementById("about_button_2").style.display = "flex";
    document.getElementById("close_button").style.display = "none";
    
}
    /* para abrir o quinto post */
function closeNav5() {
    document.getElementById("right_side").style.marginLeft = "100%";
    document.getElementById("right_side").style.width = "0%";
    document.getElementById("left_side").style.width = "100%";
    
    document.getElementById("left_side_content").style.backgroundColor = "rgba(200, 200, 200)";

    document.getElementById("post_5_content").style.display = "block";
    document.getElementById("post_1").style.display = "none";
    document.getElementById("post_2").style.display = "none";
    document.getElementById("post_3").style.display = "none";
    document.getElementById("post_4").style.display = "none";
    
    document.getElementById("menu_issues").style.display = "none";
    document.getElementById("menu_back").style.display = "block";
    document.getElementById("post_5_link_date").style.display = "none";
    document.getElementById("post_5_link").style.width = "60%";
    
    document.getElementById("editorial_button").style.display = "none";
    document.getElementById("about_button").style.display = "none";
    document.getElementById("editorial_button_2").style.display = "flex";
    document.getElementById("about_button_2").style.display = "flex";
    document.getElementById("close_button").style.display = "none";
    
}

// para hover posts

}

//mobile
else {
    // window width is smaller than 1023 px



$(function() {  
    var clickCount = 0;
    $('.subtitle_m').click(function () {
        if(clickCount%2==0){
              //do when open
               $('#right_side').css({height:'100vh'});
               $('#right_side').css({marginTop:'0vh'});
            $('.hiatus').css({display:'block'});
        }else{
             //do when closed
             $('#right_side').css({height:'0vh'});
            $('#right_side').css({marginTop:'92vh'});
            $('.hiatus').css({display:'none'});
         }
        clickCount++;
    });
});
    
    
//clicar no about
$('.about_button_m').click(
                function(){
                    $('#editorial').css('display', 'none')
                    $('#about').css('display', 'block')
                },             
 );



//clicar no editorial
 $('.editorial_button_m').click(
                function(){
                    $('#editorial').css('display', 'block')
                    $('#about').css('display', 'none')
                },             
 );

    
//posts
    function closeNav1() {
    
    document.getElementById("left_side_content").style.backgroundColor = "rgba(200, 200, 200)";

    document.getElementById("post_1_content").style.display = "block";
    document.getElementById("post_2").style.display = "none";
    document.getElementById("post_3").style.display = "none";
    document.getElementById("post_4").style.display = "none";
    document.getElementById("post_5").style.display = "none";
    
    document.getElementById("menu_issues").style.display = "none";
    document.getElementById("menu_back").style.display = "block";
        
    
    document.getElementById("post_1_link_date").style.display = "none";
    document.getElementById("post_1_link").style.width = "100%";
    
    
}
    function closeNav2() {
    
    document.getElementById("left_side_content").style.backgroundColor = "rgba(200, 200, 200)";

    document.getElementById("post_2_content").style.display = "block";
    document.getElementById("post_1").style.display = "none";
    document.getElementById("post_3").style.display = "none";
    document.getElementById("post_4").style.display = "none";
    document.getElementById("post_5").style.display = "none";
    
    document.getElementById("menu_issues").style.display = "none";
    document.getElementById("menu_back").style.display = "block";
        
    
    document.getElementById("post_2_link_date").style.display = "none";
    document.getElementById("post_2_link").style.width = "100%";
    
    
}
    function closeNav3() {
    
    document.getElementById("left_side_content").style.backgroundColor = "rgba(200, 200, 200)";

    document.getElementById("post_3_content").style.display = "block";
    document.getElementById("post_1").style.display = "none";
    document.getElementById("post_2").style.display = "none";
    document.getElementById("post_4").style.display = "none";
    document.getElementById("post_5").style.display = "none";
    
    document.getElementById("menu_issues").style.display = "none";
    document.getElementById("menu_back").style.display = "block";
        
    
    document.getElementById("post_3_link_date").style.display = "none";
    document.getElementById("post_3_link").style.width = "100%";
    
    
}
    function closeNav4() {
    
    document.getElementById("left_side_content").style.backgroundColor = "rgba(200, 200, 200)";

    document.getElementById("post_4_content").style.display = "block";
    document.getElementById("post_1").style.display = "none";
    document.getElementById("post_2").style.display = "none";
    document.getElementById("post_3").style.display = "none";
    document.getElementById("post_5").style.display = "none";
    
    document.getElementById("menu_issues").style.display = "none";
    document.getElementById("menu_back").style.display = "block";
        
    
    document.getElementById("post_4_link_date").style.display = "none";
    document.getElementById("post_4_link").style.width = "100%";
    
    
}
    function closeNav5() {
    
    document.getElementById("left_side_content").style.backgroundColor = "rgba(200, 200, 200)";

    document.getElementById("post_5_content").style.display = "block";
    document.getElementById("post_1").style.display = "none";
    document.getElementById("post_2").style.display = "none";
    document.getElementById("post_3").style.display = "none";
    document.getElementById("post_4").style.display = "none";
    
    document.getElementById("menu_issues").style.display = "none";
    document.getElementById("menu_back").style.display = "block";
        
    
    document.getElementById("post_5_link_date").style.display = "none";
    document.getElementById("post_5_link").style.width = "100%";
    
    
}

    function openNav() {
    document.getElementById("left_side_content").style.backgroundColor = "rgba(200, 200, 200, 0)";
        
    document.getElementById("post_1_content").style.display = "none";
        document.getElementById("post_2_content").style.display = "none";
        document.getElementById("post_3_content").style.display = "none";
        document.getElementById("post_4_content").style.display = "none";
        document.getElementById("post_5_content").style.display = "none";
    document.getElementById("post_1").style.display = "block";
    document.getElementById("post_2").style.display = "block";
    document.getElementById("post_3").style.display = "block";
    document.getElementById("post_4").style.display = "block";
    document.getElementById("post_5").style.display = "block";
    
    
    document.getElementById("menu_issues").style.display = "flex";
    document.getElementById("menu_back").style.display = "none";
        
    document.getElementById("post_1_link_date").style.display = "block";
    document.getElementById("post_1_link").style.width = "80%";
    document.getElementById("post_2_link_date").style.display = "block";
    document.getElementById("post_2_link").style.width = "80%";
    document.getElementById("post_3_link_date").style.display = "block";
    document.getElementById("post_3_link").style.width = "80%";
    document.getElementById("post_4_link_date").style.display = "block";
    document.getElementById("post_4_link").style.width = "80%";
    document.getElementById("post_5_link_date").style.display = "block";
    document.getElementById("post_5_link").style.width = "80%";
    
    

    
}
    
}    
