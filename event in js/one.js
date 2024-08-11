document.addEventListener('DOMContentLoaded', (event) =>{//line sets up an event listener for the DOMContentLoaded event. 
    // Get references to the button and the paragraph elements
    const button = document.getElementById('myButton');
    const displayText = document.getElementById('myParagraph');
  
    // Check if the button and displayText elements exist
    if (button && displayText) {
      // Add a click event listener to the button
      button.addEventListener('click', () => {
        // Change the text of the paragraph when the button is clicked
        displayText.textContent = 'Button Clicked!';
        console.log("sucess");
      });
    } else {
      console.error('Button or displayText element not found in the DOM');
    }
  });
  