'use strict';

$(function(){

    $(window).scroll(function() {

        if($(window).scrollTop() >= 1) {
            $(".navigationn").css({
                backgroundColor: "#212529",
            })
        } else {
            $(".navigationn").css({
                backgroundColor: "transparent",
            })
        }

    })


    let modBut = $('.modBut')
    let modalParent = $('.modalParent')
    let modalParent2 = $('.modalParent2')
    let modalParent3 = $('.modalParent3')
    let modalParent4 = $('.modalParent4')
    let modalParent5 = $('.modalParent5')
    let modalParent6 = $('.modalParent6')
    let imigs = $('.imigs')
    let imigs2 = $('.imigs2')
    let imigs3 = $('.imigs3')
    let imigs4 = $('.imigs4')
    let imigs5 = $('.imigs5')
    let imigs6 = $('.imigs6')
    
    modBut.click(function(){

    modalParent.css({
        display: 'none',
        
    })
    modalParent2.css({
        display: 'none',
    })
    modalParent3.css({
        display: 'none',
    })
    modalParent4.css({
        display: 'none',
    })
    modalParent5.css({
        display: 'none',
    })
    modalParent6.css({
        display: 'none',
    })
   })
   

   imigs.click(function(){
    modalParent.css({
        display: 'block',
    })
   
   })
   imigs2.click(function(){
    modalParent2.css({
        display: 'block',
    })
   
   })
   imigs3.click(function(){
    modalParent3.css({
        display: 'block',
    })
   
   })

   imigs4.click(function(){
    modalParent4.css({
        display: 'block',
    })
    
   

   })

   imigs5.click(function(){
    modalParent5.css({
        display: 'block',
    })
    
    })

   imigs6.click(function(){
    modalParent6.css({
        display: 'block',
    })

    })

    

    if($(window).width() < 768) {

        imigs.click(function() {

            modalParent.css({
                display: 'none',
            })

           
        })

        imigs2.click(function() {

            modalParent2.css({
                display: 'none',
            })

           
        })

        imigs3.click(function() {

            modalParent3.css({
                display: 'none',
            })

           
        })

        imigs4.click(function() {

            modalParent4.css({
                display: 'none',
            })
    
           
        })
    
        imigs5.click(function() {
    
            modalParent5.css({
                display: 'none',
            })
    
           
        })
    
        imigs6.click(function() {
    
            modalParent6.css({
                display: 'none',
            })
    
           
        })
    }




let moon = $('.fa-moon');
let darkMode = false;

moon.click(function () {
    darkMode = !darkMode; // Toggle mode

    if (darkMode) {
        $('body').css({ backgroundColor: '#212529' });
        $('.parentServices h1, .parentServices2 h3, .portfolioDiv1 h1, .modalParent h1, .modalParent2 h1, .modalParent3 h1, .modalParent4 h1, .modalParent5 h1, .modalParent6 h1, .imgDivs h4, .aboutParent1 h1, .div2 h3, .div3 h3, .teamH1, .parentTeam h4, .parentTeam p, .fa-twitter, .fa-facebook, .fa-linkedin').css({ color: 'white' });
        $('.modalParent, .modalParent2, .modalParent3, .modalParent4, .modalParent5, .modalParent6, .imgDivs').css({ backgroundColor: '#212529' });
    } else {
        $('body').css({ backgroundColor: 'white' });
        $('.parentServices h1, .parentServices2 h3, .portfolioDiv1 h1, .modalParent h1, .modalParent2 h1, .modalParent3 h1, .modalParent4 h1, .modalParent5 h1, .modalParent6 h1, .imgDivs h4, .aboutParent1 h1, .div2 h3, .div3 h3, .teamH1, .parentTeam h4, .parentTeam p, .fa-twitter, .fa-facebook, .fa-linkedin').css({ color: 'black' });
        $('.modalParent, .modalParent2, .modalParent3, .modalParent4, .modalParent5, .modalParent6, .imgDivs').css({ backgroundColor: 'white' });
    }
});

})

