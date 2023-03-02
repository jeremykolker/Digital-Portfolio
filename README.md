# Unit_1_Project 

Jeremy Kolker's Portfolio Website
A place to learn information about me, Jeremy Kolker, a newly burgeoning software developer.

-- HTML explanation: --

-An "accordian" style layout, without multiple sections compartmentalized into DIV elements and DIV elements within containers.

-The sections hide and expand it's contents upon selection.

-The header elements contain display titles that explain the theme of each section: "about me", "resume", etc.

-I then adapted and reintergrate the functionality of my original approach of hiding/displaying my div contents, by containing the webpages' div sections within a more modern looking navigation bar.
Each navbar link hides/shows the correlating objects' contents 

-Inside the 'About Me' section is a slideshow that represents experiences from my previous professions and a soft elevator pitch.

-Inside the 'Resume' section is a downloadable, clickable link to my resume.

-Inside the projects section is placeholder text that will eventually hold my GA and personal software engineering projects.

-Finally, symbol/iconographic hyperlinks to my social media and other relevant sources.


-- CSS explanation: --
-A lot of styling went into my seemingly simple visual layout. Emphasis on custom colors, shape/line texture, and flow of webpage objects. UX is super important and I wanted the user to experience a pleasant and easy to navigate space.

-I made a point to focus on responsive design capabilities. The result of our css @media screen styling enables this webpage to look sleek and consistent on a multitude of devices. 

**note** I sought to remove them, but it's possible there is some redundant CSS styling, especially when I compartmentalized divs inside divs inside containers and possibly fell down some css rabbitholes. If I had more time I'd experiment even more and streamline any existing redundancies.




-- jQuery/Javascript explanation: --
-Within my window onload function are several variables: 
    * numOfImages represents an ordered index of the slideshow photographs
    * currentImgIndex tracks the index value of the selected image

-There's also several functions used with multiple jQuery methods:
   
    * Next/previous functions that increments or decrements through our slideshow by accessing the child elements of the slideshow/image container and adjusting the correlating css styling to display the img tied to the current index position (and hide all else).
    
    * The other function is a click event function that finds/displays the selected sections and hide all else.
         -I accomplished this function with quite a few methods: a combination of the .parent .not & .find methods (to access the correct comparmentalized elements). Finally, the fadeToggle and fadOut methods are used to display or hide the section accessed elements.
    
    *The last three functions all display the hidden section content when the secton title is selected in the navbar/hides non-selected other objects.



Jeremy Kolker All Rights Reserved 2023 ©






