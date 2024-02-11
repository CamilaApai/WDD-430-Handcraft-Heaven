document.cookie = '';

const elementsWithX = Array.from(document.querySelectorAll('*')).filter(element => element.textContent.trim() === 'X');

elementsWithX.forEach(element => {
  element.addEventListener('click', () => {
    // Close the parent div when the element is clicked
    const parentDiv = element.parentElement;
    parentDiv.style.display = 'none';

});
element.style.float = 'right';
element.style.cursor = "pointer";
element.style.userSelect = "none";



});

const gridElements = Array.from(document.querySelectorAll('main > div'));
let btags = [];
let shoppingCarts = [];

// Iterate over each <div> element
gridElements.forEach(div => {
  // Select the <b> tag within the current <div> element
  const bTag = div.querySelector('b');
  const cart = div.querySelector('img:nth-child(6)')
  btags.push(bTag);
  shoppingCarts.push(cart);
});

// Add an event listener to each non-null <b> tag
btags.forEach(bTag => {
  // Check if the bTag is not null
  if (bTag) {
    // Add an event listener to the bTag
    bTag.addEventListener('click', (event) => {
      // Function to execute when <b> tag is clicked
      //alert('Link clicked: ' + bTag.textContent);
        document.cookie = `artist=${bTag.textContent}`;
      location.reload();
        

      
      // Prevent the default behavior of the <b> tag (e.g., navigating to the href)
      event.preventDefault();
    });
  }
});

//alert(shoppingCarts);
// Add an event listener to each non-null <b> tag
shoppingCarts.forEach(c => {
  // Check if the bTag is not null
  if (c) {
    //alert(c);

    // Add an event listener to the bTag
    c.addEventListener('click', (event) => {
      // Function to execute when <b> tag is clicked
      alert('ShoppingCart ');
      
      // Prevent the default behavior of the <b> tag (e.g., navigating to the href)
      event.preventDefault();
    });
  }
});

