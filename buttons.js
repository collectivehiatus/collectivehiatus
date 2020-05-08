window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

//----------------------------java para desktop----------------------------------//

var mq = window.matchMedia( "(min-width: 1024px)" );
if (mq.matches) {


// scroll arrow desaparece

$(document).ready(function() {
        $(window).scroll(function(event) {
            let scroll = $(this).scrollTop();
            let opacity = 1 - (scroll / 100);
            if (opacity > -20) {
                $('.arrow').css('opacity', opacity);
            }
        });
    });

$('.post_1_subtitle_guest_m').css('display', 'none')

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
    
$('.back').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css('marginLeft', '60%')
                    $('#right_side').css('width', '40vw')
                    $('#left_side').css('width', '60%')
                    $('#background').css('width', '60%')
                    $('#arrow').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '86vh')
                    
                    $('#post_1_content').css('display', 'none')
                    $('#post_2_content').css('display', 'none')
                    $('#post_3_content').css('display', 'none')
                    $('#post_4_content').css('display', 'none')
                    $('#post_5_content').css('display', 'none')
                    $('#post_6_content').css('display', 'none')
                    $('#post_1').css('display', 'block')
                    $('#post_2').css('display', 'block')
                    $('#post_3').css('display', 'block')
                    $('#post_4').css('display', 'block')
                    $('#post_5').css('display', 'block')
                    $('#post_6').css('display', 'block')
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 0)')
                    
                    $('#menu_issues').css('display', 'block')
                    $('#menu_back').css('display', 'none')
                    $('#post_1_link').css('width', '80%')
                    $('#post_2_link').css('width', '80%')
                    $('#post_3_link').css('width', '80%')
                    $('#post_4_link').css('width', '80%')
                    $('#post_5_link').css('width', '80%')
                    $('#post_6_link').css('width', '80%')
                    
                    $('#editorial_button').css('display', 'flex')
                    $('#about_button').css('display', 'flex')
                    $('#editorial_button_2').css('display', 'none')
                    $('#about_button_2').css('display', 'none')
                    $('#close_button').css('display', 'none')
                    
                    $(function() {
                        $('.title_date_1').hover(function() {
                            $('.glow_1_1').css('color', 'black');
                            $('.glow_1_1').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_1_1').css('-webkit-stroke-color', '#000000');
                            $('.glow_1_1').css('-webkit-fill-color', '#000000');
                            $('.glow_1_1').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_1_1').css('cursor', 'pointer');

                            $('.glow_2_1').css('color', 'black');
                            $('.glow_2_1').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_2_1').css('-webkit-stroke-color', '#000000');
                            $('.glow_2_1').css('-webkit-fill-color', '#000000');
                            $('.glow_2_1').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_2_1').css('cursor', 'pointer');

                            $('.glow_3_1').css('color', 'black');
                            $('.glow_3_1').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_3_1').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_1').css('-webkit-fill-color', '#000000');
                            $('.glow_3_1').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_3_1').css('cursor', 'pointer');

                        }, function() {
                            $('.glow_1_1').css('color', 'black');
                            $('.glow_1_1').css('-webkit-stroke-width', '0vmax');
                            $('.glow_1_1').css('-webkit-stroke-color', '#000000');
                            $('.glow_1_1').css('-webkit-fill-color', '#000000');
                            $('.glow_1_1').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_1_1').css('cursor', 'pointer');

                            $('.glow_2_1').css('color', 'black');
                            $('.glow_2_1').css('-webkit-stroke-width', '0vmax');
                            $('.glow_2_1').css('-webkit-stroke-color', '#000000');
                            $('.glow_2_1').css('-webkit-fill-color', '#000000');
                            $('.glow_2_1').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_2_1').css('cursor', 'pointer');

                            $('.glow_3_1').css('color', 'black');
                            $('.glow_3_1').css('-webkit-stroke-width', '0vmax');
                            $('.glow_3_1').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_1').css('-webkit-fill-color', '#000000');
                            $('.glow_3_1').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_3_1').css('cursor', 'pointer');
                        })
                    });
                    
                    $(function() {
                        $('.title_date_2').hover(function() {
                            $('.glow_1_2').css('color', 'black');
                            $('.glow_1_2').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_1_2').css('-webkit-stroke-color', '#000000');
                            $('.glow_1_2').css('-webkit-fill-color', '#000000');
                            $('.glow_1_2').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_1_2').css('cursor', 'pointer');

                            $('.glow_2_2').css('color', 'black');
                            $('.glow_2_2').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_2_2').css('-webkit-stroke-color', '#000000');
                            $('.glow_2_2').css('-webkit-fill-color', '#000000');
                            $('.glow_2_2').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_2_2').css('cursor', 'pointer');

                            $('.glow_3_2').css('color', 'black');
                            $('.glow_3_2').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_3_2').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_2').css('-webkit-fill-color', '#000000');
                            $('.glow_3_2').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_3_2').css('cursor', 'pointer');

                        }, function() {
                            $('.glow_1_2').css('color', 'black');
                            $('.glow_1_2').css('-webkit-stroke-width', '0vmax');
                            $('.glow_1_2').css('-webkit-stroke-color', '#000000');
                            $('.glow_1_2').css('-webkit-fill-color', '#000000');
                            $('.glow_1_2').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_1_2').css('cursor', 'pointer');

                            $('.glow_2_2').css('color', 'black');
                            $('.glow_2_2').css('-webkit-stroke-width', '0vmax');
                            $('.glow_2_2').css('-webkit-stroke-color', '#000000');
                            $('.glow_2_2').css('-webkit-fill-color', '#000000');
                            $('.glow_2_2').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_2_2').css('cursor', 'pointer');

                            $('.glow_3_2').css('color', 'black');
                            $('.glow_3_2').css('-webkit-stroke-width', '0vmax');
                            $('.glow_3_2').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_2').css('-webkit-fill-color', '#000000');
                            $('.glow_3_2').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_3_2').css('cursor', 'pointer');
                        })
                    }); 
                    
                    $(function() {
                        $('.title_date_3').hover(function() {
                            $('.glow_1_3').css('color', 'black');
                            $('.glow_1_3').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_1_3').css('-webkit-stroke-color', '#000000');
                            $('.glow_1_3').css('-webkit-fill-color', '#000000');
                            $('.glow_1_3').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_1_3').css('cursor', 'pointer');

                            $('.glow_2_3').css('color', 'black');
                            $('.glow_2_3').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_2_3').css('-webkit-stroke-color', '#000000');
                            $('.glow_2_3').css('-webkit-fill-color', '#000000');
                            $('.glow_2_3').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_2_3').css('cursor', 'pointer');

                            $('.glow_3_3').css('color', 'black');
                            $('.glow_3_3').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_3_3').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_3').css('-webkit-fill-color', '#000000');
                            $('.glow_3_3').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_3_3').css('cursor', 'pointer');
                        }, function() {
                            $('.glow_1_3').css('color', 'black');
                            $('.glow_1_3').css('-webkit-stroke-width', '0vmax');
                            $('.glow_1_3').css('-webkit-stroke-color', '#000000');
                            $('.glow_1_3').css('-webkit-fill-color', '#000000');
                            $('.glow_1_3').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_1_3').css('cursor', 'pointer');

                            $('.glow_2_3').css('color', 'black');
                            $('.glow_2_3').css('-webkit-stroke-width', '0vmax');
                            $('.glow_2_3').css('-webkit-stroke-color', '#000000');
                            $('.glow_2_3').css('-webkit-fill-color', '#000000');
                            $('.glow_2_3').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_2_3').css('cursor', 'pointer');

                            $('.glow_3_3').css('color', 'black');
                            $('.glow_3_3').css('-webkit-stroke-width', '0vmax');
                            $('.glow_3_3').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_3').css('-webkit-fill-color', '#000000');
                            $('.glow_3_3').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_3_3').css('cursor', 'pointer');
                        })
                    });
                    
                    $(function() {
                        $('.title_date_4').hover(function() {
                            $('.glow_1_4').css('color', 'black');
                            $('.glow_1_4').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_1_4').css('-webkit-stroke-color', '#000000');
                            $('.glow_1_4').css('-webkit-fill-color', '#000000');
                            $('.glow_1_4').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_1_4').css('cursor', 'pointer');

                            $('.glow_2_4').css('color', 'black');
                            $('.glow_2_4').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_2_4').css('-webkit-stroke-color', '#000000');
                            $('.glow_2_4').css('-webkit-fill-color', '#000000');
                            $('.glow_2_4').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_2_4').css('cursor', 'pointer');

                            $('.glow_3_4').css('color', 'black');
                            $('.glow_3_4').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_3_4').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_4').css('-webkit-fill-color', '#000000');
                            $('.glow_3_4').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_3_4').css('cursor', 'pointer');

                        }, function() {
                            $('.glow_1_4').css('color', 'black');
                            $('.glow_1_4').css('-webkit-stroke-width', '0vmax');
                            $('.glow_1_4').css('-webkit-stroke-color', '#000000');
                            $('.glow_1_4').css('-webkit-fill-color', '#000000');
                            $('.glow_1_4').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_1_4').css('cursor', 'pointer');

                            $('.glow_2_4').css('color', 'black');
                            $('.glow_2_4').css('-webkit-stroke-width', '0vmax');
                            $('.glow_2_4').css('-webkit-stroke-color', '#000000');
                            $('.glow_2_4').css('-webkit-fill-color', '#000000');
                            $('.glow_2_4').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_2_4').css('cursor', 'pointer');

                            $('.glow_3_4').css('color', 'black');
                            $('.glow_3_4').css('-webkit-stroke-width', '0vmax');
                            $('.glow_3_4').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_4').css('-webkit-fill-color', '#000000');
                            $('.glow_3_4').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_3_4').css('cursor', 'pointer');
                        })
                    });
                    
                    $(function() {
                        $('.title_date_5').hover(function() {
                            $('.glow_1_5').css('color', 'black');
                            $('.glow_1_5').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_1_5').css('-webkit-stroke-color', '#000000');
                            $('.glow_1_5').css('-webkit-fill-color', '#000000');
                            $('.glow_1_5').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_1_5').css('cursor', 'pointer');

                            $('.glow_2_5').css('color', 'black');
                            $('.glow_2_5').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_2_5').css('-webkit-stroke-color', '#000000');
                            $('.glow_2_5').css('-webkit-fill-color', '#000000');
                            $('.glow_2_5').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_2_5').css('cursor', 'pointer');

                            $('.glow_3_5').css('color', 'black');
                            $('.glow_3_5').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_3_5').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_5').css('-webkit-fill-color', '#000000');
                            $('.glow_3_5').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_3_5').css('cursor', 'pointer');
                        }, function() {
                            $('.glow_1_5').css('color', 'black');
                            $('.glow_1_5').css('-webkit-stroke-width', '0vmax');
                            $('.glow_1_5').css('-webkit-stroke-color', '#000000');
                            $('.glow_1_5').css('-webkit-fill-color', '#000000');
                            $('.glow_1_5').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_1_5').css('cursor', 'pointer');

                            $('.glow_2_5').css('color', 'black');
                            $('.glow_2_5').css('-webkit-stroke-width', '0vmax');
                            $('.glow_2_5').css('-webkit-stroke-color', '#000000');
                            $('.glow_2_5').css('-webkit-fill-color', '#000000');
                            $('.glow_2_5').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_2_5').css('cursor', 'pointer');

                            $('.glow_3_5').css('color', 'black');
                            $('.glow_3_5').css('-webkit-stroke-width', '0vmax');
                            $('.glow_3_5').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_5').css('-webkit-fill-color', '#000000');
                            $('.glow_3_5').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_3_5').css('cursor', 'pointer');
                        })
                    });   

                    $(function() {
                        $('.title_date_6').hover(function() {
                            $('.glow_3_6').css('color', 'black');
                            $('.glow_3_6').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_3_6').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_6').css('-webkit-fill-color', '#000000');
                            $('.glow_3_6').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_3_6').css('cursor', 'pointer');

                        }, function() {
                            $('.glow_3_6').css('color', 'black');
                            $('.glow_3_6').css('-webkit-stroke-width', '0vmax');
                            $('.glow_3_6').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_6').css('-webkit-fill-color', '#000000');
                            $('.glow_3_6').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_3_6').css('cursor', 'pointer');
                        })
                    });                     
                    
                },             
);


/* para abrir o primeiro post */
    
$('#post_1').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#background').css('width', '100%')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_1_content').css('display', 'block')
                    $('#arrow').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_1_link').css('width', '60%')
                    
                    $('#editorial_button').css('display', 'none')
                    $('#about_button').css('display', 'none')
                    $('#editorial_button_2').css('display', 'flex')
                    $('#about_button_2').css('display', 'flex')
                    $('#close_button').css('display', 'none')
                    
                    $('.glow_1_1').css('color', 'black')
                    $('.glow_1_1').css('textDecoration', 'none')
                    $('.glow_1_1').css('-webkit-stroke-width', '0')
                    $('.glow_1_1').css('-webkit-stroke-color', 'black')
                    $('.glow_1_1').css('-webkit-fill-color', 'black')
                    $('.glow_1_1').css('text-shadow', '0px 0px 0px black')
                    $('.glow_1_1').css('cursor', 'default')

                    $('.glow_2_1').css('color', 'black')
                    $('.glow_2_1').css('textDecoration', 'none')
                    $('.glow_2_1').css('-webkit-stroke-width', '0')
                    $('.glow_2_1').css('-webkit-stroke-color', 'black')
                    $('.glow_2_1').css('-webkit-fill-color', 'black')
                    $('.glow_2_1').css('text-shadow', '0px 0px 0px black')
                    $('.glow_2_1').css('cursor', 'default')
                    
                    $('.glow_3_1').css('color', 'black')
                    $('.glow_3_1').css('textDecoration', 'none')
                    $('.glow_3_1').css('-webkit-stroke-width', '0')
                    $('.glow_3_1').css('-webkit-stroke-color', 'black')
                    $('.glow_3_1').css('-webkit-fill-color', 'black')
                    $('.glow_3_1').css('text-shadow', '0px 0px 0px black')
                    $('.glow_3_1').css('cursor', 'default')
                    
                     
                },             
 );

    /* para abrir o segundo post */
    $('#post_2').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#background').css('width', '100%')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_2_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_2_link').css('width', '60%')
                    
                    $('#editorial_button').css('display', 'none')
                    $('#about_button').css('display', 'none')
                    $('#editorial_button_2').css('display', 'flex')
                    $('#about_button_2').css('display', 'flex')
                    $('#close_button').css('display', 'none')
                    
                    $('.glow_1_2').css('color', 'black')
                    $('.glow_1_2').css('textDecoration', 'none')
                    $('.glow_1_2').css('-webkit-stroke-width', '0')
                    $('.glow_1_2').css('-webkit-stroke-color', 'black')
                    $('.glow_1_2').css('-webkit-fill-color', 'black')
                    $('.glow_1_2').css('text-shadow', '0px 0px 0px black')
                    $('.glow_1_2').css('cursor', 'default')
                    
                    $('.glow_2_2').css('color', 'black')
                    $('.glow_2_2').css('textDecoration', 'none')
                    $('.glow_2_2').css('-webkit-stroke-width', '0')
                    $('.glow_2_2').css('-webkit-stroke-color', 'black')
                    $('.glow_2_2').css('-webkit-fill-color', 'black')
                    $('.glow_2_2').css('text-shadow', '0px 0px 0px black')
                    $('.glow_2_2').css('cursor', 'default')
                    
                    $('.glow_3_2').css('color', 'black')
                    $('.glow_3_2').css('textDecoration', 'none')
                    $('.glow_3_2').css('-webkit-stroke-width', '0')
                    $('.glow_3_2').css('-webkit-stroke-color', 'black')
                    $('.glow_3_2').css('-webkit-fill-color', 'black')
                    $('.glow_3_2').css('text-shadow', '0px 0px 0px black')
                    $('.glow_3_2').css('cursor', 'default')
                },             
 );

    /* para abrir o terceiro post */
    $('#post_3').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#background').css('width', '100%')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_3_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_3_link').css('width', '60%')
                    
                    $('#editorial_button').css('display', 'none')
                    $('#about_button').css('display', 'none')
                    $('#editorial_button_2').css('display', 'flex')
                    $('#about_button_2').css('display', 'flex')
                    $('#close_button').css('display', 'none')
                    
                    $('.glow_1_3').css('color', 'black')
                    $('.glow_1_3').css('textDecoration', 'none')
                    $('.glow_1_3').css('-webkit-stroke-width', '0')
                    $('.glow_1_3').css('-webkit-stroke-color', 'black')
                    $('.glow_1_3').css('-webkit-fill-color', 'black')
                    $('.glow_1_3').css('text-shadow', '0px 0px 0px black')
                    $('.glow_1_3').css('cursor', 'default')

                    $('.glow_2_3').css('color', 'black')
                    $('.glow_2_3').css('textDecoration', 'none')
                    $('.glow_2_3').css('-webkit-stroke-width', '0')
                    $('.glow_2_3').css('-webkit-stroke-color', 'black')
                    $('.glow_2_3').css('-webkit-fill-color', 'black')
                    $('.glow_2_3').css('text-shadow', '0px 0px 0px black')
                    $('.glow_2_3').css('cursor', 'default')

                    $('.glow_3_3').css('color', 'black')
                    $('.glow_3_3').css('textDecoration', 'none')
                    $('.glow_3_3').css('-webkit-stroke-width', '0')
                    $('.glow_3_3').css('-webkit-stroke-color', 'black')
                    $('.glow_3_3').css('-webkit-fill-color', 'black')
                    $('.glow_3_3').css('text-shadow', '0px 0px 0px black')
                    $('.glow_3_3').css('cursor', 'default')
                    
                    
                     
                },             
 );
    /* para abrir o quarto post */
    $('#post_4').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#background').css('width', '100%')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_4_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')

                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_4_link').css('width', '60%')
                    
                    $('#editorial_button').css('display', 'none')
                    $('#about_button').css('display', 'none')
                    $('#editorial_button_2').css('display', 'flex')
                    $('#about_button_2').css('display', 'flex')
                    $('#close_button').css('display', 'none')
                    
                    $('.glow_1_4').css('color', 'black')
                    $('.glow_1_4').css('textDecoration', 'none')
                    $('.glow_1_4').css('-webkit-stroke-width', '0')
                    $('.glow_1_4').css('-webkit-stroke-color', 'black')
                    $('.glow_1_4').css('-webkit-fill-color', 'black')
                    $('.glow_1_4').css('text-shadow', '0px 0px 0px black')
                    $('.glow_1_4').css('cursor', 'default')
                    
                    $('.glow_2_4').css('color', 'black')
                    $('.glow_2_4').css('textDecoration', 'none')
                    $('.glow_2_4').css('-webkit-stroke-width', '0')
                    $('.glow_2_4').css('-webkit-stroke-color', 'black')
                    $('.glow_2_4').css('-webkit-fill-color', 'black')
                    $('.glow_2_4').css('text-shadow', '0px 0px 0px black')
                    $('.glow_2_4').css('cursor', 'default')
                    
                    $('.glow_3_4').css('color', 'black')
                    $('.glow_3_4').css('textDecoration', 'none')
                    $('.glow_3_4').css('-webkit-stroke-width', '0')
                    $('.glow_3_4').css('-webkit-stroke-color', 'black')
                    $('.glow_3_4').css('-webkit-fill-color', 'black')
                    $('.glow_3_4').css('text-shadow', '0px 0px 0px black')
                    $('.glow_3_4').css('cursor', 'default')
                },             
 );
    /* para abrir o quinto post */
    $('#post_5').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#background').css('width', '100%')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_5_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_5_link').css('width', '60%')
                    
                    $('#editorial_button').css('display', 'none')
                    $('#about_button').css('display', 'none')
                    $('#editorial_button_2').css('display', 'flex')
                    $('#about_button_2').css('display', 'flex')
                    $('#close_button').css('display', 'none')
                    
                    $('.glow_1_5').css('color', 'black')
                    $('.glow_1_5').css('textDecoration', 'none')
                    $('.glow_1_5').css('-webkit-stroke-width', '0')
                    $('.glow_1_5').css('-webkit-stroke-color', 'black')
                    $('.glow_1_5').css('-webkit-fill-color', 'black')
                    $('.glow_1_5').css('text-shadow', '0px 0px 0px black')
                    $('.glow_1_5').css('cursor', 'default')
                    
                    $('.glow_2_5').css('color', 'black')
                    $('.glow_2_5').css('textDecoration', 'none')
                    $('.glow_2_5').css('-webkit-stroke-width', '0')
                    $('.glow_2_5').css('-webkit-stroke-color', 'black')
                    $('.glow_2_5').css('-webkit-fill-color', 'black')
                    $('.glow_2_5').css('text-shadow', '0px 0px 0px black')
                    $('.glow_2_5').css('cursor', 'default')
                    
                    $('.glow_3_5').css('color', 'black')
                    $('.glow_3_5').css('textDecoration', 'none')
                    $('.glow_3_5').css('-webkit-stroke-width', '0')
                    $('.glow_3_5').css('-webkit-stroke-color', 'black')
                    $('.glow_3_5').css('-webkit-fill-color', 'black')
                    $('.glow_3_5').css('text-shadow', '0px 0px 0px black')
                    $('.glow_3_5').css('cursor', 'default')
                     
                },             
 );

    /* para abrir o sexto post */
    $('#post_6').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#background').css('width', '100%')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_6_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_6_link').css('width', '60%')
                    
                    $('#editorial_button').css('display', 'none')
                    $('#about_button').css('display', 'none')
                    $('#editorial_button_2').css('display', 'flex')
                    $('#about_button_2').css('display', 'flex')
                    $('#close_button').css('display', 'none')
                    
                    $('.glow_3_6').css('color', 'black')
                    $('.glow_3_6').css('textDecoration', 'none')
                    $('.glow_3_6').css('-webkit-stroke-width', '0')
                    $('.glow_3_6').css('-webkit-stroke-color', 'black')
                    $('.glow_3_6').css('-webkit-fill-color', 'black')
                    $('.glow_3_6').css('text-shadow', '0px 0px 0px black')
                    $('.glow_3_6').css('cursor', 'default')
                     
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

    $('.title_date_6').click(
    // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
    
);

    // scroll arrow desaparece

$(document).ready(function() {
        $(window).scroll(function(event) {
            let scroll = $(this).scrollTop();
            let opacity = 1 - (scroll / 100);
            if (opacity > -20) {
                $('.arrow').css('opacity', opacity);
            }
        });
    });


$('#blue_bar').click(
                function(){
                    $('#right_side').css({height:'100vh'});
                    $('#right_side').css({marginTop:'0vh'});
                    $('.hiatus').css({display:'block'});
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
                    $('#arrow').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_1_link').css('width', '100%')
                    
                       
                },             
 );
//post 2
    $('.title_date_2').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_2_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_2_link').css('width', '100%')
                    
                       
                },             
 );
//post 3
    $('.title_date_3').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_3_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_3_link').css('width', '100%')
                    
                       
                },             
 );
//post 4
    $('.title_date_4').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_4_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_4_link').css('width', '100%')
                    
                       
                },             
 );
//post 5
    $('.title_date_5').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_5_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_5_link').css('width', '100%')
                    
                       
                },             
 );

//post 6
    $('.title_date_6').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_6_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_6_link').css('width', '100%')
                    
                       
                },             
 );

    
$('.back').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 0)')
                    $('#arrow').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '77vh')
                    
                    $('#post_1_content').css('display', 'none')
                    $('#post_2_content').css('display', 'none')
                    $('#post_3_content').css('display', 'none')
                    $('#post_4_content').css('display', 'none')
                    $('#post_5_content').css('display', 'none')
                    $('#post_6_content').css('display', 'none')
                    $('#post_1').css('display', 'block')
                    $('#post_2').css('display', 'block')
                    $('#post_3').css('display', 'block')
                    $('#post_4').css('display', 'block')
                    $('#post_5').css('display', 'block')
                    $('#post_6').css('display', 'block')
                    
                    $('#menu_issues').css('display', 'flex')
                    $('#menu_back').css('display', 'none')

                    $('#post_1_link').css('width', '80%')
                    $('#post_2_link').css('width', '80%')
                    $('#post_3_link').css('width', '80%')
                    $('#post_4_link').css('width', '80%')
                    $('#post_5_link').css('width', '80%')
                    $('#post_6_link').css('width', '80%')
                    
                 
                     
                },             
 );
    
    
}    
