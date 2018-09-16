/*
Introduction to Requests with ES6
To make asynchronous event handling easier, promises were introduced in JavaScript in ES6:

Mozilla Development Network: Promises
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

A promise is an object that handles asynchronous data. A promise has three states:

- pending : when a promise is created or waiting for data.
- fulfilled : the asynchronous operation was handled successfully.
- rejected : the asynchronous operation was unsuccessful.

The great thing about promises is that once a promise is fulfilled or rejected, you can chain an additional method 
to the original promise.
In this lesson, we will explain how to use fetch(), which uses promises to handle requests. Then, we will simplify 
requests using async and await.

We'll use the Datamuse API for GET requests and Rebrandly URL Shortener API for POST requests.*/


/*
fetch() GET Requests I
The first type of requests we’re going to tackle are GET requests using fetch()

MDN: Fetch API.
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

The fetch() function:
- Creates a request object that contains relevant information that an API needs.
- Sends that request object to the API endpoint provided.
- Returns a promise that ultimately resolves to a response object, which contains the status of the promise with 
  information the API sent back.
In the next exercise we’ll go over the boilerplate code for using fetch() and walk through what each step does!*/

//fetch() GETs:

fetch('htttp://api-to-call/endpoint').then(response => {        //sends request

    if (response.ok) {                                          // converts response object to JSON
        return response.json();                                 //
    }                                                           //

    throw new Error('Request failed!');                         // handles errors
},  networkError => console.log(networkError.message)           //

).then(jsonResponse => {                                        // handles success
    return jsonResponse;                                        //
});                                                             //


//EXAMPLE 1: fetch() GET Request 
//using JS Promise:
// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';


// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;      //Builds endpoint URL with query string.
  fetch(endpoint).then ((response) => {
    if(response.ok) {                               //formerly used "renderJsonResponse(response);"
      return response.json();                       //the next .then function chained to this will recieve a Promise with JSON data.
    }
    throw new Error('Request failed!');             //raises exception if the request failed.
  }, (networkError) => {	                            //Separate the success callback function and the error callback function with a comma. The error callback function will also be an arrow function that takes one parameter, networkError.
    console.log(networkError.message);
  }).then (jsonResponse =>{							//add another .then functin to add code to use the information returned with the Promise to manipulate the webpage.
    renderResponse(jsonResponse);
  });
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);



//fetch() POSTs:

fetch('htttp://api-to-call/endpoint', {        //sends request
    method: 'POST',                            //
    body: JSON.stringify({id: '200'})          //

}).then (response => {                         // THE .THEN FUNCTION APPENDS AFTER THE END OF FETCH!!!!

    if (response.ok) {                         // converts response
        return response.json();                //
    }                                          //

    throw new Error('Request failed!');                         // handles errors
},  networkError => console.log(networkError.message)           //

).then(jsonResponse => {                                        // handles success
    return jsonResponse;                                        //
});                                                             //


//EXAMPLE 2: fetch() POST Request
/*
fetch() POST Requests II
We are going to reconstruct the code from the previous exercise step-by-step until we have written a complete POST 
request using fetch() and .then().

1. Call the fetch() function, pass it the URL below as a string as its first argument, and pass it an empty object ({}) 
as its second argument.
    https://api-to-call.com/endpoint
We’re calling fetch() and providing an endpoint. In the next step we’ll fill in the empty object with the necessary information.

2. The settings object you passed to the fetch() function will contain two properties: method, with a value of 'POST', 
and body, with a value of JSON.stringify({id: '200'}).

This second argument determines that this request is a POST request and what information will be sent to the API.

3. Chain a .then() method to the fetch() function and pass it the success callback function as its first parameter. 
Pass in response as an argument for the callback function. Leave the code block of the callback function empty for now.
The code inside .then() will execute when the promise returned from fetch() is resolved.

4. Inside the callback function's code block, check the ok property of the response object inside of a conditional statement. 
In the code block of the conditional statement, return response.json().
When returned, this information will be passed on to the next .then() callback function.

5. Below the curly braces of the conditional statement, create a new error with this code:
throw new Error('Request failed!');
This error will be raised if we get back some status error.

6. Create the failure callback function. This function takes a single parameter, networkError. Separate the first callback 
function from the second with a comma. This function is still inside of the .then() method.
In the code block of the function you just made, log networkError.message to the console.

7. Chain another .then() method to the end of the first .then() method.
In the new .then() method, create an arrow callback function that takes jsonResponse as its parameter.
Then in the code block return jsonResponse.

The purpose of this step is to view the JSON that was returned from the previous .then().
*/

fetch('https://api-to-call.com/endpoint', {
  method: 'POST', 
  body: JSON.stringify({id: '200'})
	}).then (response => {
  	if(response.ok) {
  		return response.json();
		}
	  throw new Error('Request failed!');
	}, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => {
  	return jsonResponse();
});



//EXAMPLE 3: fetch() POST Request using API key
/*
This will make the POST request by providing the endpoint and the object containing all the necessary information. 
The request returns a Promise which will either be resolved or rejected. If the promise resolves, you can use that 
information and the 'ok' status.
*/

//In main.js:
// Information to reach API
const apiKey = '71e19d919df64cc8ab7c7f23f243ec19';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});  //The reason for creating data is to prepare the information needed to send in the body.
  fetch(url, {
    method: 'POST',
    headers: {
  		'Content-type': 'application/json',
  	'apikey': apiKey
		},
    body: data
  }).then (response => {
    if(response.ok) {
  		// renderJasonResponse(response);
      return response.json();
    }
    throw new Error('Request failed!');
  }, (networkError =>{
    	console.log(networkError.message);
  	})
).then (jsonResponse =>{
   renderResponse(jsonResponse);
  }
)};

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);



//In helperFuncitons.js:
// Manipulates responseField to render a formatted and appropriate message
const renderResponse = (res) => {
    // Displays either message depending on results
    if(res.errors){
      responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {  
      responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
    }
  }
  
  // Manipulates responseField to render an unformatted response
  const renderRawResponse = (res) => {
    // Displays either message depending on results
    if(res.errors){  
      responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {
      // Adds line breaks for JSON
      let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
      structuredRes = `<pre>${structuredRes}</pre>`;
      responseField.innerHTML = `${structuredRes}`;
    }
  }
  
  // Renders the JSON that was returned when the Promise from fetch resolves.
  const renderJsonResponse = (response) => {
    // Creates an empty object to store the JSON in key-value pairs
    let rawJson = {}
    for(let key in response){
      rawJson[key] = response[key]
    }
    // Converts JSON into a string and adding line breaks to make it easier to read
    rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n")
    // Manipulates responseField to show the returned JSON.
    responseField.innerHTML = `<pre>${rawJson}</pre>`
  }
  

