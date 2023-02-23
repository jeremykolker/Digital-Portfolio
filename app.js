// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! \\

// JEREMY KOLKERS UNIT 1 PROJECT JS CODE! \\

// MY WEBPAGE PORTFOLIO \\


$(() => {
   
    // ATTACH A CLICK EVENT TOGGLE FUNCTION THAT FINDS + DISPLAYS THE SELECTED .SECTION & HIDES EVERYTHING ELSE \\
     // SELECT ALL THE .SECTION HEADERS \\
    //  ATTACH CLICK FUNCTION \\
    $('.section h2').click(function() {
        //  ACCESS THE PARENT ELEMENT OF THE CLICKED SECTION \\
        //  ACCESS THAT ELEMENTS CHILD (WITH CLASS OF .CONTENT USING FIND METHOD  \\
        //  TOGGLE THE .CONTENT ELEMENTS USING SLIDE-TOGGLE METHOD \\
        $(this).parent().find('.content').slideToggle();
        //  ACCESS UNUSED SECTIONS WITH .NOT METHOD \\
        //  FIND THE CHILD ELEMENTS WITH A CLASS OF CONTENT \\
        //  USE SLIDE UP METHOD TO HIDE LEFTOVER CONTENT ELEMENTS \\ 
        $('.section').not($(this).parent()).find('.content').slideUp();
        
      });
     
      

});










// JEREMY KOLKERS UNIT 1 PROJECT JS CODE! \\

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! \\