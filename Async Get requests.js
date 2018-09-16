/*
We’re going to take what you’ve learned about chaining Promises and make it simpler 
using functionality introduced in ES8: async and await. You read that right, you did the hard part already, 
now it’s time to make it easier.

The structure for this request will also be slightly different. Notice the new keywords async and await, 
as well as the try and catch statements.
*/

//General Async Get Format:
async function getData() {
    try{
        const response = await fetch('https://api-to-call/endpoint');   //sends request
        if (response.ok) {
            const jsonResponse = await response.json();                 // handles response if successful
                renderJsonResponse(response);                           //
        }
        throw new Error('Request failed!');                             // handles reponse if failed
    } catch (error) {                                                   //
        console.log(error);                                             //
    }                                                                   //

}

//BUILDING ASYNC GET REQS
/*
PART 1:
1. In main.js, create an arrow function using the async keyword and save it to a const getData.
The async keyword will ensure that the function returns a promise.

2. In the code block for getData, we should add a try statement with an empty code block.
Below the try statement's code block, add a catch(error) statement.
The code in the try block will send a request and handle the response. The catch statement will then take care of an error 
if it is thrown.

3. Inside the catch code block, log error to the console.
Since this exercise is an example, we’re using console.log() to view the error. Generally, developers create a more 
sophisticated way of handling the error, like redirecting their users to another page, but logging is fine for us at the moment.

4. Now we have to consider what to do inside of the code block of the try statement. We should start by using the await keyword 
before calling fetch(). Pass in the following URL, as a string, to the function as its first argument:

https://api-to-call.com/endpoint
We’ll have to save the returned promise in a variable called response using the const keyword. response will save the the response 
of endpoint once that information has been sent back.

5. Under response, create a conditional statement that checks if the ok property of the response object evaluates to a truthy value.

6. Inside the code block of the conditional statement, await the resolution of calling the .json() method on response.
Save the returned object to a variable called jsonResponse using the keyword const.
Since .json() is an asynchronous method we have to await until the promise status is resolved. Then we store the value to know what 
data the JSON holds.

7. Return jsonResponse directly below the code you wrote in the previous step.
Normally, we'd want to use the information from jsonResponse in a different manner. In this exercise, we're practicing how to 
write the boilerplate code.

8. Below the conditional statement, throw a new Error. The message the error should raise is ‘Request failed!’.

PART 2:
1. Under the comment "AJAX function", create a new arrow function called getSuggestions() using the async keyword.
You'll be coding inside the arrow function of const getSuggestions for the remainder of this exercise.

2. Inside the code block of the async arrow function, create a const variable named wordQuery and assign it inputField.value.

3. Create another const called endpoint, assign it value of a string that is url, queryParams, and wordQuery concatenated 
in that order.

4. Add a try statement with an empty code block. Outside the code block for try, add a catch(error) statement with a code block 
that logs error to the console.

5. Inside the try code block, using const, create a variable named response and assign it to await the result of calling fetch() 
with an argument of endpoint.

6. Below the variable response from the previous step, create a conditional statement that the checks if the ok property of the 
response evaluates to a truthy value.
Inside the code block of the conditional statement, await response.json() and save it to a variable called jsonResponse using the 
const keyword.

7. Call the function renderRawResponse() and pass in jsonResponse. Then, run the code.
In the response field, type in a word and click the submit button on the web page.
You should now see an array of objects that contain nouns that describe the word you typed in!
You can view the purpose of the renderRawResponse helper function at public/helperFunctions.js.

8. Now that you can see the body of response, you should clean it up to display on the webpage.
Delete renderRawResponse(jsonResponse) and replace it with renderResponse(jsonResponse). Run the code. Then type in another word 
and click the submit button.
Great, now you have an organized list of words and you finished your GET request!
You can view the purpose of renderResponse function at public/helperFunctions.js.
*/

//In Main.js:
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try {
    const response = await fetch(endpoint);
    if(response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);				//Remember - don't use 'Request Failed!' text with the catch function...
  }
  
};

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

//In helperFunction.js:
// Formats response to look presentable on webpage
const renderResponse = (res) => {
    // Handles if res is falsey
    if(!res){
      console.log(res.status);
    }
    // In case res comes back as a blank array
    if(!res.length){
      responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
      return;
    }
  
    // Creates an empty array to contain the HTML strings
    let wordList = [];
    // Loops through the response and caps off at 10
    for(let i = 0; i < Math.min(res.length, 10); i++){
      // creating a list of words
      wordList.push(`<li>${res[i].word}</li>`);
    }
    // Joins the array of HTML strings into one string
    wordList = wordList.join("");
  
    // Manipulates responseField to render the modified response
    responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
    return
  }
  
  // Renders response before it is modified
  const renderRawResponse = (res) => {
    // Takes the first 10 words from res
    let trimmedResponse = res.slice(0, 10);
    // Manipulates responseField to render the unformatted response
    responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
  }
  
  // Renders the JSON that was returned when the Promise from fetch resolves.
  const renderJsonResponse = (res) => {
    // Creates an empty object to store the JSON in key-value pairs
    let rawJson = {};
    for(let key in response){
      rawJson[key] = response[key];
    }
    // Converts JSON into a string and adding line breaks to make it easier to read
    rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
    // Manipulates responseField to show the returned JSON.
    responseField.innerHTML = `<pre>${rawJson}</pre>`;
  }
  