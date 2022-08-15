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




    let moon = $('.fa-moon') 

    moon.click(function(){
        $('body').css({
            backgroundColor: '#212529',
        })
        $('.parentServices h1').css({
            color: 'white',
        })
        $('.modalParent').css({
            backgroundColor: '#212529',
        })
        $('.modalParent2').css({
            backgroundColor: '#212529',
        })
        $('.parentServices2 h3').css({
            color: 'white',
        })
        $('.portfolioDiv1 h1').css({
            color: 'white',
        })
        $('.modalParent h1').css({
            color: 'white',
        })
        $('.modalParent2 h1').css({
            color: 'white',
        })
        $('.modalParent3').css({
            backgroundColor: '#212529',
        })
        $('.modalParent4 ').css({
            backgroundColor: '#212529',
        })
        $('.modalParent5').css({
            backgroundColor: '#212529',
        })
        $('.modalParent6').css({
            backgroundColor: '#212529',
        })
        $('.modalParent3 h1').css({
            color: 'white',
        })
        $('.modalParent4 h1').css({
            color: 'white',
        })
        $('.modalParent5 h1').css({
            color: 'white',
        })
        $('.modalParent6 h1').css({
            color: 'white',
        })
        $('.imgDivs').css({
            backgroundColor: 'black ',
        })
        $('.imgDivs h4').css({
            color: 'white',
        })
        $('.aboutParent1 h1').css({
            color: 'white',
        })
        $('.div2 h3').css({
            color: 'white',
        })
        $('.div3 h3').css({
            color: 'white',
        })
        $('.teamH1').css({
            color: 'white',
        })
        $('.parentTeam h4').css({
            color: 'white',
        })
        $('.parentTeam p').css({
            color: 'white',
        })
        $('.fa-twitter').css({
            color: 'white',
        })
        $('.fa-facebook').css({
            color: 'white',
        })
        $('.fa-linkedin').css({
            color: 'white',
        })


        moon.click(function(){
            $('body').css({
                backgroundColor: 'white',
            })
            $('.parentServices h1').css({
                color: 'black',
            })
            $('.parentServices2 h3').css({
                color: 'black',
            })
            $('.portfolioDiv1 h1').css({
                color: 'black',
            })
            $('.imgDivs').css({
                backgroundColor: 'white ',
            })
            $('.imgDivs h4').css({
                color: 'black',
            })
            $('.modalParent').css({
                backgroundColor: 'white',
            })
            $('.modalParent2').css({
                backgroundColor: 'white',
            })
            $('.modalParent3').css({
                backgroundColor: 'white',
            })
            $('.modalParent4').css({
                backgroundColor: 'white',
            })
            $('.modalParent5').css({
                backgroundColor: 'white',
            })
            $('.modalParent6').css({
                backgroundColor: 'white',
            })
            $('.modalParent3 h1').css({
                color: 'black',
            })
            $('.modalParent h1').css({
                color: 'black',
            })
            $('.modalParent2 h1').css({
                color: 'black',
            })
            $('.modalParent4 h1').css({
                color: 'black',
            })
            $('.modalParent5 h1').css({
                color: 'black',
            })
            $('.modalParent6 h1').css({
                color: 'black',
            })
            $('.aboutParent1 h1').css({
                color: 'black',
            })
            $('.div2 h3').css({
                color: 'black',
            })
            $('.div3 h3').css({
                color: 'black',
            })
            $('.fa-twitter').css({
                color: 'black',
            })
            $('.fa-facebook').css({
                color: 'black',
            })
            $('.fa-linkedin').css({
                color: 'black',
            })
            $('.teamH1').css({
                color: 'black',
            })
            $('.parentTeam p').css({
                color: 'black',
            })
            $('.parentTeam h4').css({
                color: 'black',
            })
        })


    })
})

