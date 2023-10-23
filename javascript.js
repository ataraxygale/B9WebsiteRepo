
//document calls the HTML document
//addEventListener tells it to work once its argument is done (DOMContentLoaded)
//DOMContentLoaded makes it only work after HTML is done loading/parsing (similar to defer)
////you can't use DOMContentLoaded without addEventListener since it is the event
////it's not a property it's an action called


document.addEventListener('DOMContentLoaded', function() {
    //puts the Hello World message in the JSMessage ID <p> from index.html
    var message = document.getElementById('JSMessage');

    //innerText is for displaying on websites, console log is for console text
    message.innerText = "Hello, World!";

  });


