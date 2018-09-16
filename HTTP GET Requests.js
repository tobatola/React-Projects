/*
HTTP Requests
One of JavaScript's greatest assets is its non-blocking properties, or that it is an asynchronous language.

Websites, like newspaper websites, take advantage of these non-blocking properties to provide a better user 
experience. Generally, a site's code is written so that users don't have to wait for a giant image to load before being 
allowed to read the actual article—rather, that text is rendered first and then the image can load in the background.

JavaScript uses an event loop to handle asynchronous function calls. When a program is run, function calls are made and 
added to a stack. The functions that make requests that need to wait for servers to respond then get sent to a separate 
queue. Once the stack has cleared, then the functions in the queue are executed.

Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and how to 
handle asynchronous events. We'll be exploring one system of technologies called Asynchronous JavaScript and XML, or AJAX.

To read more about the event loop, read the MDN documentation:

MDN Documentation: Event Loop

*/

//Example:
console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, -10);
console.log('Second message!');

/*
XHR GET Requests I
Asynchronous JavaScript and XML (AJAX), enables requests to be made after the initial page load. Initially, AJAX was used only 
for XML formatted data, now it can be used to make requests that have many different formats.

MDN Documentation: Extensible Markup Language (XML).

Similarly, the XMLHttpRequest (XHR) API, named for XML, can be used to make many kinds of requests and supports other forms of 
data.

Remember, we use GET to retrieve data from a source. Take a look at the boilerplate code in the diagram to see how to make an 
XHR GET request.

We’ll construct this template from scratch in a different exercise and walk through what each step does.//#endregion

XMLHttpRequest GET:
const xhr = new XMLHttpRequest();                   // Creates a new
const url = 'http://api-to-call.com/endpoint;       // object.

xhr.responseType = 'json';                          // 
xhr.onreadystatechange = () => {                    // Handles
    if (shr.readyState ===XMLHttpRequest.DONE) {    // Response.
        //CODE TO EXECUTE WITH RESPONSE             // 
    }
};

xhr.open('GET', url);       // Opens request and
xhr.send();                 // sends object.

A BASIC XHR GET Request (JSON):
*/
const xhr = new XMLHttpRequest();                   // Request Object - xhr is standard VAR name
const url = 'https://api-to-call.com/endpoint';     // Destination URL

xhr.responseType = 'json';

xhr.onreadystatechange = () => {                    // Checks to see if request has finished running
  if(xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};

xhr.open('GET', url);                               // Creates a new request
xhr.send();                                         // Triggers sending of request



// EXAMPLE: Website that returns rhyming words!  Has 3 elements: submission field, submit button, response field.

// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = (`${url}${queryParams}${wordQuery}`);

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
  	if (xhr.readyState === XMLHttpRequest.DONE) {
  	  renderResponse(xhr.response);
	}
  }    

  xhr.open('GET', endpoint);
  xhr.send();
};

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);



// EXAMPLE 2: ADDING QUERY STRING Website that returns rhyming words and  Has 4 elements: word, topic, submit button, response field.

// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';
const additionalParams = '&topics=';                // The "&"" character is used to separate our parameters. The = character joins the key 'topics' to a value.

// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');        //Added additional topic field.
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;      //Added query string code to endpoint request.
  
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

// Listen for click on submit button
submit.addEventListener('click', displaySuggestions);




