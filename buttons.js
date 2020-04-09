//----------------------------java para desktop----------------------------------//

var mq = window.matchMedia( "(min-width: 1024px)" );
if (mq.matches) {

    

//clicar no about us
$('#hiatus').click(
                function(){
                    $('#about_us_logo').css('display', 'table')
                }, 
               

);

//clicar no close about us
$('#close_about').click(
                function(){
                    $('#about_us_logo').css('display', 'none')
                }, 
               

); 
    


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
                    
                    $('#right_side').css('marginLeft', '60%')
                    $('#right_side').css('width', '40vw')
                    $('#close_button').css('display', 'flex')
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
                    
                    $('#right_side').css('marginLeft', '60%')
                    $('#right_side').css('width', '40vw')
                    $('#close_button').css('display', 'flex')
                },   
    

);
$('#close_button').click(
                function(){
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#close_button').css('display', 'none')
                },             
);



/* para voltar a home page */
    
$('.back, .rife').click(
                function(){
                    $('#right_side').css('marginLeft', '60%')
                    $('#right_side').css('width', '40vw')
                    $('#left_side').css('width', '60%')
                    $('#background').css('width', '60%')
                    
                    $('#post_1_content').css('display', 'none')
                    $('#post_2_content').css('display', 'none')
                    $('#post_3_content').css('display', 'none')
                    $('#post_4_content').css('display', 'none')
                    $('#post_5_content').css('display', 'none')
                    $('#post_1').css('display', 'block')
                    $('#post_2').css('display', 'block')
                    $('#post_3').css('display', 'block')
                    $('#post_4').css('display', 'block')
                    $('#post_5').css('display', 'block')
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 0)')
                    
                    $('#menu_issues').css('display', 'block')
                    $('#menu_back').css('display', 'none')
                    $('#post_1_link').css('width', '80%')
                    $('#post_2_link').css('width', '80%')
                    $('#post_3_link').css('width', '80%')
                    $('#post_4_link').css('width', '80%')
                    $('#post_5_link').css('width', '80%')
                    $('#post_1_link_date').css('display', 'block')
                    $('#post_2_link_date').css('display', 'block')
                    $('#post_3_link_date').css('display', 'block')
                    $('#post_4_link_date').css('display', 'block')
                    $('#post_5_link_date').css('display', 'block')
                    
                    $('#editorial_button').css('display', 'flex')
                    $('#about_button').css('display', 'flex')
                    $('#editorial_button_2').css('display', 'none')
                    $('#about_button_2').css('display', 'none')
                    $('#close_button').css('display', 'none')
                    
                    $(function() {
                        $('.title_date_1').hover(function() {
                            $('#post_1_link').css('color', '#3e4a9a');
                            $('#post_1_link').css('-webkit-stroke-width', '3.75vmax');
                            $('#post_1_link').css('-webkit-stroke-color', '#3e4a9a');
                            $('#post_1_link').css('-webkit-fill-color', '#3e4a9a');
                            $('#post_1_link').css('text-shadow', '0px 0px 20px #3e4a9a');
                            $('#post_1_link').css('-cursor', 'pointer');
                        }, function() {
                    
                            $('#post_1_link').css('color', 'black');
                            $('#post_1_link').css('-webkit-stroke-width', '0vmax');
                            $('#post_1_link').css('-webkit-stroke-color', '#3e4a9a');
                            $('#post_1_link').css('-webkit-fill-color', '#3e4a9a');
                            $('#post_1_link').css('text-shadow', '0px 0px 0px #3e4a9a');
                            $('#post_1_link').css('-cursor', 'pointer');
                        });
                    });
                    
                    $(function() {
                        $('.title_date_2').hover(function() {
                            $('#post_2_link').css('color', '#3e4a9a');
                            $('#post_2_link').css('-webkit-stroke-width', '3.75vmax');
                            $('#post_2_link').css('-webkit-stroke-color', '#3e4a9a');
                            $('#post_2_link').css('-webkit-fill-color', '#3e4a9a');
                            $('#post_2_link').css('text-shadow', '0px 0px 20px #3e4a9a');
                            $('#post_2_link').css('-cursor', 'pointer');
                        }, function() {
                    
                            $('#post_2_link').css('color', 'black');
                            $('#post_2_link').css('-webkit-stroke-width', '0vmax');
                            $('#post_2_link').css('-webkit-stroke-color', '#3e4a9a');
                            $('#post_2_link').css('-webkit-fill-color', '#3e4a9a');
                            $('#post_2_link').css('text-shadow', '0px 0px 0px #3e4a9a');
                            $('#post_2_link').css('-cursor', 'pointer');
                        });
                    }); 
                    
                    $(function() {
                        $('.title_date_3').hover(function() {
                            $('#post_3_link').css('color', '#3e4a9a');
                            $('#post_3_link').css('-webkit-stroke-width', '3.75vmax');
                            $('#post_3_link').css('-webkit-stroke-color', '#3e4a9a');
                            $('#post_3_link').css('-webkit-fill-color', '#3e4a9a');
                            $('#post_3_link').css('text-shadow', '0px 0px 20px #3e4a9a');
                            $('#post_3_link').css('-cursor', 'pointer');
                        }, function() {
                    
                            $('#post_3_link').css('color', 'black');
                            $('#post_3_link').css('-webkit-stroke-width', '0vmax');
                            $('#post_3_link').css('-webkit-stroke-color', '#3e4a9a');
                            $('#post_3_link').css('-webkit-fill-color', '#3e4a9a');
                            $('#post_3_link').css('text-shadow', '0px 0px 0px #3e4a9a');
                            $('#post_3_link').css('-cursor', 'pointer');
                        });
                    });
                    
                    $(function() {
                        $('.title_date_4').hover(function() {
                            $('#post_4_link').css('color', '#3e4a9a');
                            $('#post_4_link').css('-webkit-stroke-width', '3.75vmax');
                            $('#post_4_link').css('-webkit-stroke-color', '#3e4a9a');
                            $('#post_4_link').css('-webkit-fill-color', '#3e4a9a');
                            $('#post_4_link').css('text-shadow', '0px 0px 20px #3e4a9a');
                            $('#post_4_link').css('-cursor', 'pointer');
                        }, function() {
                    
                            $('#post_4_link').css('color', 'black');
                            $('#post_4_link').css('-webkit-stroke-width', '0vmax');
                            $('#post_4_link').css('-webkit-stroke-color', '#3e4a9a');
                            $('#post_4_link').css('-webkit-fill-color', '#3e4a9a');
                            $('#post_4_link').css('text-shadow', '0px 0px 0px #3e4a9a');
                            $('#post_4_link').css('-cursor', 'pointer');
                        });
                    });
                    
                    $(function() {
                        $('.title_date_5').hover(function() {
                            $('#post_5_link').css('color', '#3e4a9a');
                            $('#post_5_link').css('-webkit-stroke-width', '3.75vmax');
                            $('#post_5_link').css('-webkit-stroke-color', '#3e4a9a');
                            $('#post_5_link').css('-webkit-fill-color', '#3e4a9a');
                            $('#post_5_link').css('text-shadow', '0px 0px 20px #3e4a9a');
                            $('#post_5_link').css('-cursor', 'pointer');
                        }, function() {
                    
                            $('#post_5_link').css('color', 'black');
                            $('#post_5_link').css('-webkit-stroke-width', '0vmax');
                            $('#post_5_link').css('-webkit-stroke-color', '#3e4a9a');
                            $('#post_5_link').css('-webkit-fill-color', '#3e4a9a');
                            $('#post_5_link').css('text-shadow', '0px 0px 0px #3e4a9a');
                            $('#post_5_link').css('-cursor', 'pointer');
                        });
                    });                    
                    
                },             
);


/* para abrir o primeiro post */
    
$('#post_1').click(
                function(){
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#background').css('width', '100%')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_1_content').css('display', 'block')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_1_link_date').css('display', 'none')
                    $('#post_1_link').css('width', '60%')
                    
                    $('#editorial_button').css('display', 'none')
                    $('#about_button').css('display', 'none')
                    $('#editorial_button_2').css('display', 'flex')
                    $('#about_button_2').css('display', 'flex')
                    $('#close_button').css('display', 'none')
                    
                    $('#post_1_link').css('color', 'black')
                    $('#post_1_link').css('textDecoration', 'none')
                    $('#post_1_link').css('-webkit-stroke-width', '0')
                    $('#post_1_link').css('-webkit-stroke-color', 'black')
                    $('#post_1_link').css('-webkit-fill-color', 'black')
                    $('#post_1_link').css('text-shadow', '0px 0px 0px black')
                    $('#post_1_link').css('cursor', 'default')
                    
                    
                     
                },             
 );

    /* para abrir o segundo post */
    $('#post_2').click(
                function(){
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#background').css('width', '100%')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_2_content').css('display', 'block')
                    $('#post_1').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_2_link_date').css('display', 'none')
                    $('#post_2_link').css('width', '60%')
                    
                    $('#editorial_button').css('display', 'none')
                    $('#about_button').css('display', 'none')
                    $('#editorial_button_2').css('display', 'flex')
                    $('#about_button_2').css('display', 'flex')
                    $('#close_button').css('display', 'none')
                    
                    $('#post_2_link').css('color', 'black')
                    $('#post_2_link').css('textDecoration', 'none')
                    $('#post_2_link').css('-webkit-stroke-width', '0')
                    $('#post_2_link').css('-webkit-stroke-color', 'black')
                    $('#post_2_link').css('-webkit-fill-color', 'black')
                    $('#post_2_link').css('text-shadow', '0px 0px 0px black')
                    $('#post_2_link').css('cursor', 'default')
                    
                    
                     
                },             
 );

    /* para abrir o terceiro post */
    $('#post_3').click(
                function(){
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#background').css('width', '100%')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_3_content').css('display', 'block')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_3_link_date').css('display', 'none')
                    $('#post_3_link').css('width', '60%')
                    
                    $('#editorial_button').css('display', 'none')
                    $('#about_button').css('display', 'none')
                    $('#editorial_button_2').css('display', 'flex')
                    $('#about_button_2').css('display', 'flex')
                    $('#close_button').css('display', 'none')
                    
                    $('#post_3_link').css('color', 'black')
                    $('#post_3_link').css('textDecoration', 'none')
                    $('#post_3_link').css('-webkit-stroke-width', '0')
                    $('#post_3_link').css('-webkit-stroke-color', 'black')
                    $('#post_3_link').css('-webkit-fill-color', 'black')
                    $('#post_3_link').css('text-shadow', '0px 0px 0px black')
                    $('#post_3_link').css('cursor', 'default')
                    
                    
                     
                },             
 );
    /* para abrir o quarto post */
    $('#post_4').click(
                function(){
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#background').css('width', '100%')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_4_content').css('display', 'block')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_4_link_date').css('display', 'none')
                    $('#post_4_link').css('width', '60%')
                    
                    $('#editorial_button').css('display', 'none')
                    $('#about_button').css('display', 'none')
                    $('#editorial_button_2').css('display', 'flex')
                    $('#about_button_2').css('display', 'flex')
                    $('#close_button').css('display', 'none')
                    
                    $('#post_4_link').css('color', 'black')
                    $('#post_4_link').css('textDecoration', 'none')
                    $('#post_4_link').css('-webkit-stroke-width', '0')
                    $('#post_4_link').css('-webkit-stroke-color', 'black')
                    $('#post_4_link').css('-webkit-fill-color', 'black')
                    $('#post_4_link').css('text-shadow', '0px 0px 0px black')
                    $('#post_4_link').css('cursor', 'default')
                    
                    
                     
                },             
 );
    /* para abrir o quinto post */
    $('#post_5').click(
                function(){
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#background').css('width', '100%')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_5_content').css('display', 'block')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_5_link_date').css('display', 'none')
                    $('#post_5_link').css('width', '60%')
                    
                    $('#editorial_button').css('display', 'none')
                    $('#about_button').css('display', 'none')
                    $('#editorial_button_2').css('display', 'flex')
                    $('#about_button_2').css('display', 'flex')
                    $('#close_button').css('display', 'none')
                    
                    $('#post_5_link').css('color', 'black')
                    $('#post_5_link').css('textDecoration', 'none')
                    $('#post_5_link').css('-webkit-stroke-width', '0')
                    $('#post_5_link').css('-webkit-stroke-color', 'black')
                    $('#post_5_link').css('-webkit-fill-color', 'black')
                    $('#post_5_link').css('text-shadow', '0px 0px 0px black')
                    $('#post_5_link').css('cursor', 'default')
                    
                    
                     
                },             
 );



}

//------------------------------------------mobile-----------------------------------
else {
    // window width is smaller than 1023 px
    
    $('.title_date_1').click(
    // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
    
);
    $('.title_date_2').click(
    // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
    
);
    $('.title_date_3').click(
    // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
    
);
    $('.title_date_4').click(
    // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
    
);
    $('.title_date_5').click(
    // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
    
);


$('#blue_bar').click(
                function(){
                    $('#right_side').css({height:'100vh'});
                    $('#right_side').css({marginTop:'0vh'});
                    $('.hiatus').css({display:'flex'});
                },             
 );
$('#close_bar').click(
                function(){
                    $('#right_side').css({height:'0vh'});
                    $('#right_side').css({marginTop:'100vh'});
                    $('.hiatus').css({display:'none'});
                },             
 );

//$(function() {  
//    var clickCount = 0;
//    $('#blue_bar').click(function () {
//        if(clickCount%2==0){
//              //do when open
//               $('#right_side').css({height:'100vh'});
//               $('#right_side').css({marginTop:'0vh'});
//            $('.hiatus').css({display:'flex'});
//        }else{
//             //do when closed
//             $('#right_side').css({height:'0vh'});
//            $('#right_side').css({marginTop:'100vh'});
//            $('.hiatus').css({display:'none'});
//         }
//        clickCount++;
//    });
//});
//
//$(function() {  
//    var clickCount = 0;
//    $('#open_bar').click(function () {
//        if(clickCount%2==0){
//              //do when open
//               $('#right_side').css({height:'100vh'});
//               $('#right_side').css({marginTop:'0vh'});
//            $('.hiatus').css({display:'flex'});
//        }else{
//             //do when closed
//             $('#right_side').css({height:'0vh'});
//            $('#right_side').css({marginTop:'100vh'});
//            $('.hiatus').css({display:'none'});
//         }
//        clickCount++;
//    });
//});
    
//clicar no about us
$('#hiatus').click(
                function(){
                    $('#about_us_logo').css('display', 'block')
                    $('#hiatus_about_mobile').css('display', 'block')
                }, 
               

);

//clicar no close about us
$('#close_about').click(
                function(){
                    $('#about_us_logo').css('display', 'none')
                    $('#hiatus_about_mobile').css('display', 'none')
                }, 
               

); 
    
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

    
//post 1
    $('.title_date_1').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_1_content').css('display', 'block')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_1_link_date').css('display', 'none')
                    $('#post_1_link').css('width', '100%')
                    
                       
                },             
 );
//post 2
    $('.title_date_2').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_2_content').css('display', 'block')
                    $('#post_1').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_2_link_date').css('display', 'none')
                    $('#post_2_link').css('width', '100%')
                    
                       
                },             
 );
//post 3
    $('.title_date_3').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_3_content').css('display', 'block')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_3_link_date').css('display', 'none')
                    $('#post_3_link').css('width', '100%')
                    
                       
                },             
 );
//post 4
    $('.title_date_4').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_4_content').css('display', 'block')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_4_link_date').css('display', 'none')
                    $('#post_4_link').css('width', '100%')
                    
                       
                },             
 );
//post 5
    $('.title_date_5').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_5_content').css('display', 'block')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_5_link_date').css('display', 'none')
                    $('#post_5_link').css('width', '100%')
                    
                       
                },             
 );

    
$('.back').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 0)')
                    
                    $('#post_1_content').css('display', 'none')
                    $('#post_2_content').css('display', 'none')
                    $('#post_3_content').css('display', 'none')
                    $('#post_4_content').css('display', 'none')
                    $('#post_5_content').css('display', 'none')
                    $('#post_1').css('display', 'block')
                    $('#post_2').css('display', 'block')
                    $('#post_3').css('display', 'block')
                    $('#post_4').css('display', 'block')
                    $('#post_5').css('display', 'block')
                    
                    $('#menu_issues').css('display', 'flex')
                    $('#menu_back').css('display', 'none')
                    
                    $('#post_1_link_date').css('display', 'block')
                    $('#post_2_link_date').css('display', 'block')
                    $('#post_3_link_date').css('display', 'block')
                    $('#post_4_link_date').css('display', 'block')
                    $('#post_5_link_date').css('display', 'block')
                    $('#post_1_link').css('width', '80%')
                    $('#post_2_link').css('width', '80%')
                    $('#post_3_link').css('width', '80%')
                    $('#post_4_link').css('width', '80%')
                    $('#post_5_link').css('width', '80%')
                    
                    
                 
                     
                },             
 );
    
    
}    
