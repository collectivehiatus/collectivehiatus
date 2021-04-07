window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function setPageBottom(id, percentagemDesktop, percentagemMobile) {
    document.getElementById(id).style.bottom =-(document.getElementById(id).offsetHeight
                        - ((window.innerWidth <= 1023) ? percentagemMobile : percentagemDesktop)
                        * window.innerHeight)+"px";

               }

//----------------------------codigo para desktop----------------------------------//

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
$(document).ready(function() {
        $(open_call).scroll(function(event) {
            let scroll = $(this).scrollTop();
            let opacity = 1 - (scroll / 100);
            if (opacity > -20) {
                $('.arrow_call').css('opacity', opacity);
            }
        });
    });

$('.post_1_subtitle_guest_m').css('display', 'none')

//clicar e fechar no about us
function* toggleAboutUs() {
  while (true) {
    yield () => $('#about_us_logo').css('display', 'block');
    yield () => $('#about_us_logo').css('display', 'none');
  }
}
const toggleAboutUsGen = toggleAboutUs();
$('#hiatus').click(
                () => toggleAboutUsGen.next().value()
                ,);

//clicar no close about us
$('#close_about').click(
                function(){
                    $('#about_us_logo').css('display', 'none')
                }, 
               

); 
    
//clicar no close call
$('#close_call').click(
                function(){
                    $('#open_call').css('display', 'none')
                }, 
               

); 
    


//clicar no about
$('#about_button').click(
                function(){
                    $('#right_side').scrollTop(0);
                    $('#right_side').scrollTop(0);
                    $('#editorial').css('display', 'none')
                    $('#about').css('display', 'block')
                }, 
               

);
    
$('#about_button_2').click(
                function(){
                    $('#right_side').scrollTop(0);
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
                    $('#right_side').scrollTop(0);
                    $('#editorial').css('display', 'block')
                    $('#about').css('display', 'none')
                }, 
    

);
$('#editorial_button_2').click(
                function(){
                    $('#right_side').scrollTop(0);
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
/* clicar info issue 5 */
    $('#header_info').click(
                function(){
                    $('#right_side_5').scrollTop(0);
                    $('.subtitle_buttons_5').css('display', 'flex')
                    $('#editorial').css('display', 'block')
                    $('#about').css('display', 'none')
                    
                    $('#editorial_button').css('display', 'none')
                    $('#about_button').css('display', 'none')
                    $('#editorial_button_2').css('display', 'flex')
                    $('#about_button_2').css('display', 'flex')
                    $('#close_button').css('display', 'none')
                    
                    
                    $('#right_side_5').css('marginLeft', '60%')
                    $('#right_side_5').css('width', '40vw')
                    $('#close_button').css('display', 'flex')
                    $('#header_info').css('display', 'none')
                },   

);
    
$('#close_button').click(
                function(){
                    $('.subtitle_buttons_5').css('display', 'none')
                    $('#right_side_5').css('marginLeft', '92%')
                    $('#right_side').css('width', '8vw')
                    $('#close_button').css('display', 'none')
                    $('#header_info').css('display', 'flex')
                    $('#editorial').css('display', 'none')
                    $('#about').css('display', 'none')
                },             
);
/* para voltar a home page */
    
$('.back').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css('marginLeft', '60%')
                    $('#right_side').css('width', '40vw')
                    $('#left_side').css('display', 'flex')
                    $('#left_side').css('width', '60%')
                    
                    $('#background').css('width', '60%')
                    
                    $('#arrow').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '86vh')
                    $('.menu_posts_guest4').css('margin-top', '64vh')
                    
                    $('#post_1_content').css('display', 'none')
                    $('#post_2_content').css('display', 'none')
                    $('#post_3_content').css('display', 'none')
                    $('#post_4_content').css('display', 'none')
                    $('#post_5_content').css('display', 'none')
                    $('#post_6_content').css('display', 'none')
                    $('#post_7_content').css('display', 'none')
                    $('#post_8_content').css('display', 'none')
                    $('#post_1_B_content').css('display', 'none')
                     $('#post_2_B_content').css('display', 'none')
                    $('#post_3_B_content').css('display', 'none')
                    $('#post_4_B_content').css('display', 'none')
                    
                    
                    $('#post_1').css('display', 'block')
                    $('#post_2').css('display', 'block')
                    $('#post_3').css('display', 'block')
                    $('#post_4').css('display', 'block')
                    $('#post_5').css('display', 'block')
                    $('#post_6').css('display', 'block')
                    $('#post_7').css('display', 'block')
                    $('#post_8').css('display', 'block')
                    
                    $('#post_1_B').css('display', 'block')
                    $('#post_2_B').css('display', 'block')
                    $('#post_3_B').css('display', 'block')
                    $('#post_4_B').css('display', 'block')
                    $('#background_2').css('transition', '1s')
                    $('#content_2').css('display', 'flex')
                    
                    $('#left_side2').css('display', 'flex')
                    $('#left_side2').css('width', '60%')
                    $('#background_2').css('width', '60%')
                    $('#background_2').css('height', '100%')
                    
                    $('#filler').css('display', 'block')
                    $('#parts').css('display', 'flex')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 0)')
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 0)')
                    
                    $('#menu_issues').css('display', 'block')
                    $('#menu_back').css('display', 'none')
                    $('#post_1_link').css('width', '80%')
                    $('#post_1_link_4').css('width', '80%')
                    $('#post_2_link').css('width', '80%')
                    $('#post_3_link').css('width', '80%')
                    $('#post_4_link').css('width', '80%')
                    $('#post_5_link').css('width', '80%')
                    $('#post_6_link').css('width', '80%')
                    $('#post_7_link').css('width', '80%')
                    $('#post_8_link').css('width', '80%')
                    
                    $('#post_1_B_link').css('width', '80%')
                    $('#post_2_B_link').css('width', '80%')
                    $('#post_3_B_link').css('width', '80%')
                    $('#post_4_B_link').css('width', '80%')
                    
                    $('#editorial_button').css('display', 'flex')
                    $('#about_button').css('display', 'flex')
                    $('#editorial_button_2').css('display', 'none')
                    $('#about_button_2').css('display', 'none')
                    $('#close_button').css('display', 'none')
                    $('#editorial').css('display', 'flex')
                    
//                    textos bilingues
                    $('.post_1_link_2').css('display', 'none')
                    $('.post_1_link_1').css('display', 'block')
                    $('#text_pt_link').css('font-family', 'NHaasGrotesk-Roman')
                    $('#text_eng_link').css('font-family', 'NHaasGrotesk-Medium')
                    $('#text_pt').css('display', 'none')
                    $('#text_eng').css('display', 'block')
                    
                    
                    
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
                            $('.glow_1_6').css('color', 'black');
                            $('.glow_1_6').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_1_6').css('-webkit-stroke-color', '#000000');
                            $('.glow_1_6').css('-webkit-fill-color', '#000000');
                            $('.glow_1_6').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_1_6').css('cursor', 'pointer');

                            $('.glow_2_6').css('color', 'black');
                            $('.glow_2_6').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_2_6').css('-webkit-stroke-color', '#000000');
                            $('.glow_2_6').css('-webkit-fill-color', '#000000');
                            $('.glow_2_6').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_2_6').css('cursor', 'pointer');

                            $('.glow_3_6').css('color', 'black');
                            $('.glow_3_6').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_3_6').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_6').css('-webkit-fill-color', '#000000');
                            $('.glow_3_6').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_3_6').css('cursor', 'pointer');

                        }, function() {
                            $('.glow_1_6').css('color', 'black');
                            $('.glow_1_6').css('-webkit-stroke-width', '0vmax');
                            $('.glow_1_6').css('-webkit-stroke-color', '#000000');
                            $('.glow_1_6').css('-webkit-fill-color', '#000000');
                            $('.glow_1_6').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_1_6').css('cursor', 'pointer');

                            $('.glow_2_6').css('color', 'black');
                            $('.glow_2_6').css('-webkit-stroke-width', '0vmax');
                            $('.glow_2_6').css('-webkit-stroke-color', '#000000');
                            $('.glow_2_6').css('-webkit-fill-color', '#000000');
                            $('.glow_2_6').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_2_6').css('cursor', 'pointer');

                            $('.glow_3_6').css('color', 'black');
                            $('.glow_3_6').css('-webkit-stroke-width', '0vmax');
                            $('.glow_3_6').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_6').css('-webkit-fill-color', '#000000');
                            $('.glow_3_6').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_3_6').css('cursor', 'pointer');
                        })
                    });
                    $(function() {
                        $('.title_date_7').hover(function() {
                            $('.glow_1_7').css('color', 'black');
                            $('.glow_1_7').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_1_7').css('-webkit-stroke-color', '#000000');
                            $('.glow_1_7').css('-webkit-fill-color', '#000000');
                            $('.glow_1_7').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_1_7').css('cursor', 'pointer');

                            $('.glow_2_7').css('color', 'black');
                            $('.glow_2_7').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_2_7').css('-webkit-stroke-color', '#000000');
                            $('.glow_2_7').css('-webkit-fill-color', '#000000');
                            $('.glow_2_7').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_2_7').css('cursor', 'pointer');

                            $('.glow_3_7').css('color', 'black');
                            $('.glow_3_7').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_3_7').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_7').css('-webkit-fill-color', '#000000');
                            $('.glow_3_7').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_3_7').css('cursor', 'pointer');

                        }, function() {
                            $('.glow_1_7').css('color', 'black');
                            $('.glow_1_7').css('-webkit-stroke-width', '0vmax');
                            $('.glow_1_7').css('-webkit-stroke-color', '#000000');
                            $('.glow_1_7').css('-webkit-fill-color', '#000000');
                            $('.glow_1_7').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_1_7').css('cursor', 'pointer');

                            $('.glow_2_7').css('color', 'black');
                            $('.glow_2_7').css('-webkit-stroke-width', '0vmax');
                            $('.glow_2_7').css('-webkit-stroke-color', '#000000');
                            $('.glow_2_7').css('-webkit-fill-color', '#000000');
                            $('.glow_2_7').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_2_7').css('cursor', 'pointer');

                            $('.glow_3_7').css('color', 'black');
                            $('.glow_3_7').css('-webkit-stroke-width', '0vmax');
                            $('.glow_3_7').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_7').css('-webkit-fill-color', '#000000');
                            $('.glow_3_7').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_3_7').css('cursor', 'pointer');
                        })
                    });
                    $(function() {
                        $('.title_date_8').hover(function() {
                            $('.glow_1_8').css('color', 'black');
                            $('.glow_1_8').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_1_8').css('-webkit-stroke-color', '#000000');
                            $('.glow_1_8').css('-webkit-fill-color', '#000000');
                            $('.glow_1_8').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_1_8').css('cursor', 'pointer');

                            $('.glow_2_8').css('color', 'black');
                            $('.glow_2_8').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_2_8').css('-webkit-stroke-color', '#000000');
                            $('.glow_2_8').css('-webkit-fill-color', '#000000');
                            $('.glow_2_8').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_2_8').css('cursor', 'pointer');

                            $('.glow_3_8').css('color', 'black');
                            $('.glow_3_8').css('-webkit-stroke-width', '3.75vmax');
                            $('.glow_3_8').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_8').css('-webkit-fill-color', '#000000');
                            $('.glow_3_8').css('text-shadow', '0px 0px 10px #000000');
                            $('.glow_3_8').css('cursor', 'pointer');

                        }, function() {
                            $('.glow_1_8').css('color', 'black');
                            $('.glow_1_8').css('-webkit-stroke-width', '0vmax');
                            $('.glow_1_8').css('-webkit-stroke-color', '#000000');
                            $('.glow_1_8').css('-webkit-fill-color', '#000000');
                            $('.glow_1_8').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_1_8').css('cursor', 'pointer');

                            $('.glow_2_8').css('color', 'black');
                            $('.glow_2_8').css('-webkit-stroke-width', '0vmax');
                            $('.glow_2_8').css('-webkit-stroke-color', '#000000');
                            $('.glow_2_8').css('-webkit-fill-color', '#000000');
                            $('.glow_2_8').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_2_8').css('cursor', 'pointer');

                            $('.glow_3_8').css('color', 'black');
                            $('.glow_3_8').css('-webkit-stroke-width', '0vmax');
                            $('.glow_3_8').css('-webkit-stroke-color', '#000000');
                            $('.glow_3_8').css('-webkit-fill-color', '#000000');
                            $('.glow_3_8').css('text-shadow', '0px 0px 0px #000000');
                            $('.glow_3_8').css('cursor', 'pointer');
                        })
                        
                        
                        function setPageBottom(id, percentagemDesktop, percentagemMobile) {{
                document.getElementById(id).style.bottom =
                    -(document.getElementById(id).offsetHeight
                        - ((window.innerWidth <= 1023) ? percentagemMobile : percentagemDesktop)
                        * window.innerHeight)+"px"

               }
            setPageBottom('content_2', 0.07, 0.22);
            window.addEventListener("resize", () => setPageBottom('content_2', 0.07, 0.22));}
                        
                        
                        
                        
                    });
                    
                    
                },             
);


/* para abrir o primeiro post */
    
$('#post_1_link').click(
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
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    $('#post_7').css('display', 'none')
                    $('#post_8').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_1_link').css('width', '60%')
                    
                    $('#editorial_button').css('display', 'none')
                    $('#about_button').css('display', 'none')
                    $('#editorial_button_2').css('display', 'flex')
                    $('#about_button_2').css('display', 'flex')
                    $('#close_button').css('display', 'none')
                    
                    
                    $('#left_side2').css('width', '100%')
                    $('#background_2').css('width', '100%')
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#content_2').css('display', 'none')
                    $('#filler').css('display', 'none')
                    
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
    $('#post_2_link').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#background').css('width', '100%')
                    
                   
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_2_content').css('display', 'block')
                    
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
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
                    
                    
                    $('#left_side2').css('width', '100%')
                    $('#background_2').css('width', '100%')
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#content_2').css('display', 'none')
                    $('#filler').css('display', 'none')
                    
                    
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
    $('#post_3_link').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#background').css('width', '100%')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_3_content').css('display', 'block')
                    
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
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
                    
                    $('#left_side2').css('width', '100%')
                    $('#background_2').css('width', '100%')
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#content_2').css('display', 'none')
                    $('#filler').css('display', 'none')
                    
                    
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
    $('#post_4_link').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#background').css('width', '100%')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_4_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
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
                    
                    $('#left_side2').css('width', '100%')
                    $('#background_2').css('width', '100%')
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#content_2').css('display', 'none')
                    $('#filler').css('display', 'none')
                    
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
    $('#post_5_link').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    
                    $('#background').css('width', '100%')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    
                    $('#post_5_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    $('#post_7').css('display', 'none')
                    $('#post_8').css('display', 'none')
                    
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
    $('#post_6_link').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#background').css('width', '100%')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_6_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
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
    
    
// PARA ABRIR POST DO MENU B
    
//para  abrir primeiro post B

$('#post_1_B_link').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#left_side2').css('width', '100%')
                    $('#background').css('width', '100%')
                    $('#background_2').css('width', '100%')
                    $('#background_2').css('height', '100vh')
                    $('#background_2').css('transition', '0s')
                    
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    
                   $('#post_1_B_content').css('display', 'block')
                   
                    $('#arrow').css('display', 'none')
                    $('#left_side').css('display', 'none')
                    $('#filler').css('display', 'none')
                    
                    $('#parts').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    $('#post_7').css('display', 'none')
                    $('#post_8').css('display', 'none')
                    
                    $('#post_2_B').css('display', 'none')
                    $('#post_3_B').css('display', 'none')
                    $('#post_4_B').css('display', 'none')
                    
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_1_B_link').css('width', '60%')
                    
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
    
    
//para  abrir segundo post B

$('#post_2_B_link').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#left_side2').css('width', '100%')
                    $('#background').css('width', '100%')
                    $('#background_2').css('width', '100%')
                    $('#background_2').css('height', '100vh')
                    $('#background_2').css('transition', '0s')
                    
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    
                   $('#post_2_B_content').css('display', 'block')
                    $('#arrow').css('display', 'none')
                    $('#left_side').css('display', 'none')
                    $('#filler').css('display', 'none')
                    
                    $('#parts').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    $('#post_7').css('display', 'none')
                    $('#post_8').css('display', 'none')
                    
                    $('#post_1_B').css('display', 'none')
                    $('#post_3_B').css('display', 'none')
                    $('#post_4_B').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_2_B_link').css('width', '60%')
                    
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
    
//para  abrir terceiro post B

$('#post_3_B_link').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#left_side2').css('width', '100%')
                    $('#background').css('width', '100%')
                    $('#background_2').css('width', '100%')
                    $('#background_2').css('height', '100vh')
                    $('#background_2').css('transition', '0s')
                    
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    
                   $('#post_3_B_content').css('display', 'block')
                    $('#arrow').css('display', 'none')
                    $('#left_side').css('display', 'none')
                    $('#filler').css('display', 'none')
                    
                    $('#parts').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    $('#post_7').css('display', 'none')
                    $('#post_8').css('display', 'none')
                    
                    
                    $('#post_1_B').css('display', 'none')
                    $('#post_2_B').css('display', 'none')
                    $('#post_4_B').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_3_B_link').css('width', '60%')
                    
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
   
    
//para  abrir quarto post B

$('#post_4_B_link').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css('marginLeft', '100%')
                    $('#right_side').css('width', '0vw')
                    $('#left_side').css('width', '100%')
                    $('#left_side2').css('width', '100%')
                    $('#background').css('width', '100%')
                    $('#background_2').css('width', '100%')
                    $('#background_2').css('height', '100vh')
                    $('#background_2').css('transition', '0s')
                    
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    
                   $('#post_4_B_content').css('display', 'block')
                    $('#arrow').css('display', 'none')
                    $('#left_side').css('display', 'none')
                    $('#filler').css('display', 'none')
                    
                    $('#parts').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    $('#post_7').css('display', 'none')
                    $('#post_8').css('display', 'none')
                    
                    
                    $('#post_1_B').css('display', 'none')
                    $('#post_2_B').css('display', 'none')
                    $('#post_3_B').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_4_B_link').css('width', '60%')
                    
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
    
    
    
/* para mudar para pt */
$('#text_pt_link').click(
                function(){
                    $('#text_pt').css('display', 'block')
                    $('#text_eng').css('display', 'none')
                    $('#text_eng_link').css('font-family', 'NHaasGrotesk-Roman')
                    $('#text_pt_link').css('font-family', 'NHaasGrotesk-Medium')
                    $('.post_1_link_2').css('display', 'block')
                    $('.post_1_link_1').css('display', 'none')   
                },             
 );

/* para mudar para eng */
$('#text_eng_link').click(
                function(){
                    $('#text_eng').css('display', 'block')
                    $('#text_pt').css('display', 'none')
                    $('#text_pt_link').css('font-family', 'NHaasGrotesk-Roman')
                    $('#text_eng_link').css('font-family', 'NHaasGrotesk-Medium')
                    $('.post_1_link_1').css('display', 'block')
                    $('.post_1_link_2').css('display', 'none')          
                },             
 );




/* posts quinto issue */
/* voltar homepage 5ºI */ 
    $('#menu_back_5').click(
                function(){
                    $(window).scrollTop(0);
                    $('#background_5').css('display', 'grid') 
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    $('#post_7').css('display', 'none')
                    $('#post_8').css('display', 'none')
                    
                    
            
                    $('#left_side').css('width', '100%')
                    
                    
                    
                    
                    
                    $('#menu_issues').css('display', 'block')
                    $('#menu_back_5').css('display', 'none')
                    
                    $('.subtitle_buttons_5').css('display', 'none')
                    $('#right_side_5').css('marginLeft', '92%')
                    $('#right_side').css('width', '8vw')
                    $('#close_button').css('display', 'none')
                    $('#header_info').css('display', 'flex')
                    $('#editorial').css('display', 'none')
                    $('#about').css('display', 'none')
                    
                     },             
 );
/* post1 5ºI */
$('#preview_post_1').click(
                function(){
                    $(window).scrollTop(0);
                    $('#background_5').css('display', 'none') 
                    $('#post_1').css('display', 'block')
                    
                    
            
                    $('#left_side').css('width', '100%')
                    
                    
                    $('#post_1_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back_5').css('display', 'block')
                    
                    $('#post_1_link').css('width', '60%')
                    
                    
                    
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
/* post2 5ºI */
$('#preview_post_2').click(
                function(){
                    $(window).scrollTop(0);
                    $('#background_5').css('display', 'none') 
                    $('#post_2').css('display', 'block')
                    
                    
            
                    $('#left_side').css('width', '100%')
                    
                    
                    $('#post_2_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back_5').css('display', 'block')
                    
                    $('#post_2_link').css('width', '60%')
                    
                    
                    
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
/* post2 5ºI */
$('#preview_post_3').click(
                function(){
                    $(window).scrollTop(0);
                    $('#background_5').css('display', 'none') 
                    $('#post_3').css('display', 'block')
                    
                    
            
                    $('#left_side').css('width', '100%')
                    
                    
                    $('#post_3_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back_5').css('display', 'block')
                    
                    $('#post_2_link').css('width', '60%')
                    
                    
                    
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
/* post2 5ºI */
$('#preview_post_4').click(
                function(){
                    $(window).scrollTop(0);
                    $('#background_5').css('display', 'none') 
                    $('#post_4').css('display', 'block')
                    
                    
            
                    $('#left_side').css('width', '100%')
                    
                    
                    $('#post_4_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back_5').css('display', 'block')
                    
                    $('#post_2_link').css('width', '60%')
                    
                    
                    
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
/* post2 5ºI */
$('#preview_post_5').click(
                function(){
                    $(window).scrollTop(0);
                    $('#background_5').css('display', 'none') 
                    $('#post_5').css('display', 'block')
                    
                    
            
                    $('#left_side').css('width', '100%')
                    
                    
                    $('#post_5_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back_5').css('display', 'block')
                    
                    $('#post_2_link').css('width', '60%')
                    
                    
                    
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
/* post2 5ºI */
$('#preview_post_6').click(
                function(){
                    $(window).scrollTop(0);
                    $('#background_5').css('display', 'none') 
                    $('#post_6').css('display', 'block')
                    
                    
            
                    $('#left_side').css('width', '100%')
                    
                    
                    $('#post_6_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back_5').css('display', 'block')
                    
                    $('#post_2_link').css('width', '60%')
                    
                    
                    
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
/* post2 5ºI */
$('#preview_post_7').click(
                function(){
                    $(window).scrollTop(0);
                    $('#background_5').css('display', 'none') 
                    $('#post_7').css('display', 'block')
                    
                    
            
                    $('#left_side').css('width', '100%')
                    
                    
                    $('#post_7_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back_5').css('display', 'block')
                    
                    $('#post_2_link').css('width', '60%')
                    
                    
                    
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
/* post2 5ºI */
$('#preview_post_8').click(
                function(){
                    $(window).scrollTop(0);
                    $('#background_5').css('display', 'none') 
                    $('#post_8').css('display', 'block')
                    
                    
            
                    $('#left_side').css('width', '100%')
                    
                    
                    $('#post_8_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back_5').css('display', 'block')
                    
                    $('#post_2_link').css('width', '60%')
                    
                    
                    
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

    $('.title_date_1_B').click(
    // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
    
);
    $('.title_date_2_B').click(
    // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
    
);
    $('.title_date_3_B').click(
    // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
    
);
    $('.title_date_4_B').click(
    // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
    
);
    $('#menu_back').click(
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
    
$(document).ready(function() {
        $(open_call).scroll(function(event) {
            let scroll = $(this).scrollTop();
            let opacity = 1 - (scroll / 100);
            if (opacity > -20) {
                $('.arrow_call').css('opacity', opacity);
            }
        });
    });

$('#blue_bar').click(
                function(){
                    $('#right_side').css({height:'100vh'});
                    $('#right_side_5').css({height:'100vh'});
                    $('#right_side').css({marginTop:'0vh'});
                    $('#right_side_5').css({marginTop:'0vh'});
                    $('.hiatus').css({display:'block'});
                    $('#editorial').css({display:'block'});
                    
                },             
 );
$('#close_bar').click(
                function(){
                    $(window).scrollTop(0);
                    $('#right_side').css({height:'0vh'});
                    $('#right_side_5').css({height:'0vh'});
                    $('#right_side').css({marginTop:'100vh'});
                    $('#right_side_5').css({marginTop:'100vh'});
                    $('.hiatus').css({display:'none'});
                },             
 );
    
//clicar no about us
function* toggleAboutUs() {
  while (true) {
    yield () => $('#about_us_logo').css('display', 'block');
    yield () => $('#about_us_logo').css('display', 'none');
  }
}
const toggleAboutUsGen = toggleAboutUs();
$('#hiatus').click(() => toggleAboutUsGen.next().value());

//clicar no close about us
$('#close_about').click(
                function(){
                    $('#about_us_logo').css('display', 'none')
                    $('#hiatus_about_mobile').css('display', 'none')
                }, 
               

); 
//clicar no close call
$('#close_call').click(
                function(){
                    $('#open_call').css('display', 'none')
                }, 
               

); 
    
//clicar no about
$('.about_button_m').click(
                function(){
                    $('#right_side').scrollTop(0);
                    $('#right_side_5').scrollTop(0);
                    $('#editorial').css('display', 'none')
                    $('#about').css('display', 'block')
                },             
 );



//clicar no editorial
 $('.editorial_button_m').click(
                function(){
                    $('#right_side').scrollTop(0);
                    $('#right_side_5').scrollTop(0);
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
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_1_link').css('width', '100%')
                    
                    
                    //   para issue 6
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#content_2').css('display', 'none')
                    $('#filler').css('display', 'none')
                    
                    
                       
                },             
 );
//post 2
    $('.title_date_2').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_2_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_2_link').css('width', '100%')
                    
                    
                    //   para issue 6
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#content_2').css('display', 'none')
                    $('#filler').css('display', 'none')
                    
                       
                },             
 );
//post 3
    $('.title_date_3').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_3_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_3_link').css('width', '100%')
                    
                    //   para issue 6
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#content_2').css('display', 'none')
                    $('#filler').css('display', 'none')
                    
                       
                },             
 );
//post 4
    $('.title_date_4').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_4_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_4_link').css('width', '100%')
                    
                    
                    
                    //   para issue 6
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#content_2').css('display', 'none')
                    $('#filler').css('display', 'none')
                    
                       
                },             
 );
//post 5
    $('.title_date_5').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_5_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_5_link').css('width', '100%')
                    
                    
                    //   para issue 6
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#content_2').css('display', 'none')
                    $('#filler').css('display', 'none')
                    
                       
                },             
 );

//post 6
    $('.title_date_6').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_6_content').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_6_link').css('width', '100%')
                    
                    
                    //   para issue 6
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#content_2').css('display', 'none')
                    $('#filler').css('display', 'none')
                    
                       
                },             
 );

    
$('#menu_back').click(
                
    
                function(){
                    $(window).scrollTop(0);
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 0)')
                    $('#arrow').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '77vh')
                    $('.menu_posts_guest4').css('margin-top', '56vh')
                    
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
                    
                    //                    textos bilingues
                    $('.post_1_link_2').css('display', 'none')
                    $('.post_1_link_1').css('display', 'block')
                    $('#text_pt_link').css('font-family', 'NHaasGrotesk-Roman')
                    $('#text_eng_link').css('font-family', 'NHaasGrotesk-Medium')
                    $('#text_pt').css('display', 'none')
                    $('#text_eng').css('display', 'block')
                    
                    //  issue 6 part 2
                    
                    $('#left_side').css('display', 'flex')
                    $('#content_2').css('display', 'flex')
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 0)')
                    $('#filler').css('display', 'block')
                    $('#parts').css('display', 'flex')
                    
                    $('#post_1_B_content').css('display', 'none')
                    $('#post_2_B_content').css('display', 'none')
                    $('#post_3_B_content').css('display', 'none')
                    $('#post_4_B_content').css('display', 'none')
                    
                    $('#post_1_B').css('display', 'block')
                    $('#post_2_B').css('display', 'block')
                    $('#post_3_B').css('display', 'block')
                    $('#post_4_B').css('display', 'block')
                    
                    $('#post_1_B_link').css('width', '80%')
                    $('#post_2_B_link').css('width', '80%')
                    $('#post_3_B_link').css('width', '80%')
                    $('#post_4_B_link').css('width', '80%')
                    
                    
                     
                },  
    
    
 );
    
    

/* para mudar para pt */
$('#text_pt_link').click(
                function(){
                    $('#text_pt').css('display', 'block')
                    $('#text_eng').css('display', 'none')
                    $('#text_eng_link').css('font-family', 'NHaasGrotesk-Roman')
                    $('#text_pt_link').css('font-family', 'NHaasGrotesk-Medium')
                    $('.post_1_link_2').css('display', 'block')
                    $('.post_1_link_1').css('display', 'none')   
                },             
 );

/* para mudar para eng */
$('#text_eng_link').click(
                function(){
                    $('#text_eng').css('display', 'block')
                    $('#text_pt').css('display', 'none')
                    $('#text_pt_link').css('font-family', 'NHaasGrotesk-Roman')
                    $('#text_eng_link').css('font-family', 'NHaasGrotesk-Medium')
                    $('.post_1_link_1').css('display', 'block')
                    $('.post_1_link_2').css('display', 'none')          
                },             
 );

//para o quinto issue
//post 1 5ºI
    $('#preview_post_1').click(
                function(){
                    $(window).scrollTop(0);
                    $('#background_5').css('display', 'none')
                    $('#post_1').css('display', 'block')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_1_content').css('display', 'block')
                    $('#arrow').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    $('#post_7').css('display', 'none')
                    $('#post_8').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back_5').css('display', 'block')
                    
                    $('#post_1_link').css('width', '100%')
                    
                       
                },             
 );
//post 2 5ºI
    $('#preview_post_2').click(
                function(){
                    $(window).scrollTop(0);
                    $('#background_5').css('display', 'none')
                    $('#post_2').css('display', 'block')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_2_content').css('display', 'block')
                    $('#arrow').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    $('#post_7').css('display', 'none')
                    $('#post_8').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back_5').css('display', 'block')
                    
                    $('#post_2_link').css('width', '100%')
                    
                       
                },             
 );
    
//post 3 5ºI
    $('#preview_post_3').click(
                function(){
                    $(window).scrollTop(0);
                    $('#background_5').css('display', 'none')
                    $('#post_3').css('display', 'block')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_3_content').css('display', 'block')
                    $('#arrow').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    $('#post_7').css('display', 'none')
                    $('#post_8').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back_5').css('display', 'block')
                    
                    $('#post_3_link').css('width', '100%')
                    
                       
                },             
 );
    
    //post 4 5ºI
    $('#preview_post_4').click(
                function(){
                    $(window).scrollTop(0);
                    $('#background_5').css('display', 'none')
                    $('#post_4').css('display', 'block')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_4_content').css('display', 'block')
                    $('#arrow').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    $('#post_7').css('display', 'none')
                    $('#post_8').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back_5').css('display', 'block')
                    
                    $('#post_4_link').css('width', '100%')
                    
                       
                },             
 );
    
    //post 5 5ºI
    $('#preview_post_5').click(
                function(){
                    $(window).scrollTop(0);
                    $('#background_5').css('display', 'none')
                    $('#post_5').css('display', 'block')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_5_content').css('display', 'block')
                    $('#arrow').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    $('#post_7').css('display', 'none')
                    $('#post_8').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back_5').css('display', 'block')
                    
                    $('#post_5_link').css('width', '100%')
                    
                       
                },             
 );
    
    //post 6 5ºI
    $('#preview_post_6').click(
                function(){
                    $(window).scrollTop(0);
                    $('#background_5').css('display', 'none')
                    $('#post_6').css('display', 'block')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_6_content').css('display', 'block')
                    $('#arrow').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_7').css('display', 'none')
                    $('#post_8').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back_5').css('display', 'block')
                    
                    $('#post_6_link').css('width', '100%')
                    
                       
                },             
 );
    
    //post 7 5ºI
    $('#preview_post_7').click(
                function(){
                    $(window).scrollTop(0);
                    $('#background_5').css('display', 'none')
                    $('#post_7').css('display', 'block')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_7_content').css('display', 'block')
                    $('#arrow').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    $('#post_8').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back_5').css('display', 'block')
                    
                    $('#post_7_link').css('width', '100%')
                    
                       
                },             
 );
    
    //post 8 5ºI
    $('#preview_post_8').click(
                function(){
                    $(window).scrollTop(0);
                    $('#background_5').css('display', 'none')
                    $('#post_8').css('display', 'block')
                    
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    
                    $('#post_8_content').css('display', 'block')
                    $('#arrow').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    $('#post_7').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back_5').css('display', 'block')
                    
                    $('#post_8_link').css('width', '100%')
                    
                       
                },             
 );
    
    
$('#menu_back_5').click(
                function(){
                    $(window).scrollTop(0);
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 0)')
                    $('#arrow').css('display', 'block')
                    $('.menu_posts_guest').css('margin-top', '77vh')
                    $('.menu_posts_guest4').css('margin-top', '56vh')
                    
                    $('#post_1_content').css('display', 'none')
                    $('#post_2_content').css('display', 'none')
                    $('#post_3_content').css('display', 'none')
                    $('#post_4_content').css('display', 'none')
                    $('#post_5_content').css('display', 'none')
                    $('#post_6_content').css('display', 'none')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    $('#post_7').css('display', 'none')
                    $('#post_8').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'flex')
                    $('#menu_back_5').css('display', 'none')
                    $('#background_5').css('display', 'grid')
                    

                    $('#post_1_link').css('width', '80%')
                    $('#post_2_link').css('width', '80%')
                    $('#post_3_link').css('width', '80%')
                    $('#post_4_link').css('width', '80%')
                    $('#post_5_link').css('width', '80%')
                    $('#post_6_link').css('width', '80%')
                    $('#post_7_link').css('width', '80%')
                    $('#post_8_link').css('width', '80%')
                    
                    //                    textos bilingues
                    $('.post_1_link_2').css('display', 'none')
                    $('.post_1_link_1').css('display', 'block')
                    $('#text_pt_link').css('font-family', 'NHaasGrotesk-Roman')
                    $('#text_eng_link').css('font-family', 'NHaasGrotesk-Medium')
                    $('#text_pt').css('display', 'none')
                    $('#text_eng').css('display', 'block')
                  },             
 ); 
//para issue 6 part 2   
//post 1
    $('.title_date_1_B').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#left_side').css('display', 'none')
                    
                    $('#post_1_B_content').css('display', 'block')
                    $('#arrow').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#post_2_B').css('display', 'none')
                    $('#post_3_B').css('display', 'none')
                    $('#post_4_B').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_1_B_link').css('width', '100%')
                    
                    
                    //   para issue 6
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#parts').css('display', 'none')
                    
                    
                
                },             
 );
 //post 2   
    $('.title_date_2_B').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#left_side').css('display', 'none')
                    
                    $('#post_2_B_content').css('display', 'block')
                    $('#arrow').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#post_1_B').css('display', 'none')
                    $('#post_3_B').css('display', 'none')
                    $('#post_4_B').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_2_B_link').css('width', '100%')
                    
                    
                    //   para issue 6
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#parts').css('display', 'none')
                    
                
                },  
//post 3
 );$('.title_date_3_B').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#left_side').css('display', 'none')
                    
                    $('#post_3_B_content').css('display', 'block')
                    $('#arrow').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#post_1_B').css('display', 'none')
                    $('#post_2_B').css('display', 'none')
                    $('#post_4_B').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_3_B_link').css('width', '100%')
                    
                    
                    //   para issue 6
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#parts').css('display', 'none')
                    
                
                },      
        
//post 4
 );$('.title_date_4_B').click(
                function(){
                    $('#left_side').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#left_side').css('display', 'none')
                    
                    $('#post_4_B_content').css('display', 'block')
                    $('#arrow').css('display', 'none')
                    $('.menu_posts_guest').css('margin-top', '32vh')
                    $('.menu_posts_guest4').css('margin-top', '32vh')
                    $('#post_1').css('display', 'none')
                    $('#post_2').css('display', 'none')
                    $('#post_3').css('display', 'none')
                    $('#post_4').css('display', 'none')
                    $('#post_5').css('display', 'none')
                    $('#post_6').css('display', 'none')
                    
                    $('#post_1_B').css('display', 'none')
                    $('#post_2_B').css('display', 'none')
                    $('#post_3_B').css('display', 'none')
                    
                    $('#menu_issues').css('display', 'none')
                    $('#menu_back').css('display', 'block')
                    
                    $('#post_4_B_link').css('width', '100%')
                    
                    
                    //   para issue 6
                    $('#left_side2').css('backgroundColor', 'rgba(200, 200, 200, 1)')
                    $('#parts').css('display', 'none')
                    
                
                },             
 );
    
}    
