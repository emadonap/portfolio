//Select the hamburger container element (the menu icon for mobile view)
let menu = document.querySelector('#hamburger');

//Select the dropdown box element (the mobile menu that appears when hamburger is clicked)
let dropdownbox = document.querySelector('#dropdownbox');

//Select the exit icon element (used to close the mobile menu)
let exiticon = document.querySelector('#exiticon');

//Select the anchor tags inside list items in the mobile navigation container
let allAchorTags = document.querySelectorAll('#navcon-mobile li a');

//Check if the hamburger container element exists in the DOM
if (menu) {
    //Add click event listener to the hamburger container
    menu.addEventListener('click', function() {
        //Show the dropdown box (mobile menu) and apply animation
        dropdownbox.style.display = 'flex';
        dropdownbox.classList.add('animate__bounceInDown');
    })
}

//Check if the exist icon element exists in the DOM
if (exiticon){
    //Add click event listener to the exit icon
    exiticon.addEventListener('click', function() {
        //Hide the dropdown box (close the mobile menu) and remove animation
        dropdownbox.style.display = 'none';
        dropdownbox.classList.remove('animate__bounceInDown');
    })
}

// Check if there are anchor tags inside the mobile navigation container
if(allAchorTags){
    //Loop through all achor tags and add event listener to each one
    allAchorTags.forEach(allAchorTags => {
        allAchorTags.addEventListener('click', function() {
            //Hide the dropdown box when an anchor tag isi clicked (close the menu)
            dropdownbox.style.display = 'none';
        })
    })
}