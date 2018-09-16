/*
XHR POST Requests I
Reminder: If you haven’t already signed up for an API Key from Rebrandly, please read this Rebrandly sign up guide.

Codecademy Articles: Rebrandly URL Shortener API .
Great! By this point you've signed up for an API key, and you know the essence of making a GET request. We will be 
making a POST request using the Rebrandly API.
https://www.codecademy.com/articles/rebrandly-signup

The major difference between a GET request and POST request is that a POST request requires additional information to 
be sent through the request. This additional information is sent in the body of the post request.

We are going to reconstruct the code from the GET REQUESTS exercise step-by-step until we have written a complete AJAX POST 
request.

Feel free to refer to the XHR POST diagram at any point while completing this exercise:
https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/XHR+POST+diagram.svg
*/

// EXAMPLE 1: A Basic GET post to an endpoint.

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

const data = JSON.stringify({id: '200'});  //JSON.stringify() converts a value to a JSON string. By converting the value to a string, we can then send the data to a server.

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
  if( xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
};

xhr.open('POST', url);
xhr.send(data);

// EXAMPLE 2: A Basic URL shortener.  
//***Uses and API with a key.***

// Information to reach API
const apiKey = '71e19d919df64cc8ab7c7f23f243ec19';                  //From rebrandly
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});         // We're including this information because the API expects to see an object with a key destination that has a value of a URL.
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);                                 // The renderRawResponse function can be viewed at public/helperFunctions.js.
    }
  }
  xhr.open('POST', url);                                            // To access the Rebrandly API, we need a header with two key-value pairs. 
  xhr.setRequestHeader('Content-type', 'application/json');         // In the header, you must include values for 'Content-type' and an 'apikey'.
  xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
}


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);



