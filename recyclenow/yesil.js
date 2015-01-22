/**
 * Method to handle input data. Parameter data is appended as new paragraph 
 * below the widget's form.
 * @param {Object} data The inputted text.
 */
function send(data)
{
  // Create a new paragraph for result
  var theNewParagraph = document.createElement('p');
  // Create text node for result
  var theText1 = document.createTextNode('Hello ' + data + '!');
  // Append the result text for result paragraph
  theNewParagraph.appendChild(theText1);
  // Show the result paragraph on the page
  document.getElementById("result").appendChild(theNewParagraph);	
}

function windowResized(data)
{
    if (window.widget.isrotationsupported) {
        window.widget.setDisplayPortrait();
    } 
}


window.onresize = windowResized;
windowResized()