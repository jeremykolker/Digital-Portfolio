// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! \\

// JEREMY KOLKERS UNIT 1 PROJECT JS CODE! \\

// MY WEBPAGE PORTFOLIO \\


$(() => {
// CREATE AN INDEX VARIABLE OF THE IMAGES IN OUR SLIDESHOW\\
// INTIAL IMAGE DISPLAYED HAS A VALUE OF 0 \\
let currentImgIndex = 0
// DECLARE A VARIABLE THAT CONTINUOUSLY KEEPS TRACK OF OUR POSITION IN THE SLIDESHOW AND THEN REPEATS ITSELF\\
const numOfImages = $('.slideshow-images').children().length - 1

    // THE NEXT BUTTON \\
    $('.next').on('click', () => {
        $('.slideshow-images').children().eq(currentImgIndex).css('display', 'none')
        
        if (currentImgIndex < numOfImages) {
            currentImgIndex++
        } else {
            currentImgIndex = 0
        }
        $('.slideshow-images').children().eq(currentImgIndex).css('display', 'block')

    })

        
    // THE PREVIOUS BUTTON \\
    $('.previous').on('click', () => {
        $('.slideshow-images').children().eq(currentImgIndex).css('display', 'none')

        if (currentImgIndex > 0) {
            currentImgIndex--
        } else {
            currentImgIndex = numOfImages
        }

        $('.slideshow-images').children().eq(currentImgIndex).css('display', 'block')
    })

   
    // ATTACH A CLICK EVENT TOGGLE FUNCTION THAT FINDS + DISPLAYS THE SELECTED SECTION & HIDES EVERYTHING ELSE \\
     // SELECT ALL THE .SECTION HEADERS \\
    //  ATTACH CLICK FUNCTION \\
    $('.section h2').click(function() {
        //  ACCESS THE PARENT ELEMENT USING FIND METHOD OF THE CLICKED SECTION \\
        //  ACCESS THAT ELEMENTS CHILD (WITH CLASS OF .CONTENT USING FIND METHOD  \\
        //  TOGGLE THE .CONTENT ELEMENTS USING FADE-TOGGLE METHOD \\
        $(this).parent().find('.content').fadeToggle()
        //  ACCESS UNUSED SECTIONS WITH .NOT METHOD \\
        //  .FIND THE CHILD ELEMENTS WITH A CLASS OF CONTENT \\
        //  USE FADEOUT() METHOD TO HIDE LEFTOVER CONTENT ELEMENTS \\ 
        $('.section').not($(this).parent()).find('.content').fadeOut()
        
      })
     
   

       
      $("a#aboutmenav").click(function() {
        $(".content").fadeToggle()
         
      })
      
      $("a#resumenav").click(function() {
        $(".section").fadeToggle()
       
        
      })

      $("a#projectsnav").click(function() {
        $("#projects").fadeToggle()
        
      })


          

})




// JEREMY KOLKERS UNIT 1 PROJECT JS CODE! \\

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! \\