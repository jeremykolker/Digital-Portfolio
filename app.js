// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! \\

// JEREMY KOLKERS UNIT 1 PROJECT JS CODE! \\

// MY WEBPAGE PORTFOLIO \\


$(() => {
   
// create an index of the image beings used in our slideshow \\
    let currentImgIndex = 0
// declare a variable that keeps track of our photos \\
    const numOfImages = $('.slideshow-images').children().length - 1

    // NEXT BUTTON \\
    $('.next').on('click', () => {
        $('.slideshow-images').children().eq(currentImgIndex).css('display', 'none')

        if (currentImgIndex < numOfImages) {
            currentImgIndex++
        } else {
            currentImgIndex = 0
        }

        $('.slideshow-images').children().eq(currentImgIndex).css('display', 'block')
    })

    // PREVIOUS BUTTON \\
    $('.previous').on('click', () => {
        $('.slideshow-images').children().eq(currentImgIndex).css('display', 'none')

        if (currentImgIndex > 0) {
            currentImgIndex--
        } else {
            currentImgIndex = numOfImages
        }

        $('.slideshow-images').children().eq(currentImgIndex).css('display', 'block')
    })

    // ATTACH A CLICK EVENT TOGGLE FUNCTION THAT FINDS + DISPLAYS THE SELECTED .SECTION & HIDES EVERYTHING ELSE \\
     // SELECT ALL THE .SECTION HEADERS \\
    //  ATTACH CLICK FUNCTION \\
    $('.section h2').click(function() {
        //  ACCESS THE PARENT ELEMENT OF THE CLICKED SECTION \\
        //  ACCESS THAT ELEMENTS CHILD (WITH CLASS OF .CONTENT USING FIND METHOD  \\
        //  TOGGLE THE .CONTENT ELEMENTS USING FADE-TOGGLE METHOD \\
        $(this).parent().find('.content').fadeToggle()
        //  ACCESS UNUSED SECTIONS WITH .NOT METHOD \\
        //  .FIND THE CHILD ELEMENTS WITH A CLASS OF CONTENT \\
        //  USE FADEOUT() METHOD TO HIDE LEFTOVER CONTENT ELEMENTS \\ 
        $('.section').not($(this).parent()).find('.content').fadeOut()
        
      })
     
      

})










// JEREMY KOLKERS UNIT 1 PROJECT JS CODE! \\

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! \\