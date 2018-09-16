/*
As with the other GET and POST requests that you’ve been making, an async POST request requires more information. 
Take a look at the diagram.

We still have the same structure of using try and catch as before. 
But, in the fetch() call, we now have to include an additional argument that contains more information like method and body.

STANDARD FORMAT FOR ASYNC POST: */
const getData = async () => {
    try {
        const response = await fetch('https://api-to-call.com/endpoint', {
            method: 'POST',
            body: JSON.stringify({id: '200'})
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error('Request Failed!');
    } catch (error) {
        console.log(error);
    }
}
/*  EXERCISE 1+2 TO BUILD A POST REQUEST:
1. At the top of main.js create an async arrow function and save it to a const getData().
The async keyword will ensure that the function returns a promise.

2. In the code block for getData, we should add a try statement with an empty code block.
In case things go wrong, we need to some code to handle that. Below the try code block, add a 
catch statement and pass in error as an argument.
Then, in the catch statement code block, log error to the console.

3. We now have to consider what we want to do inside of the try code block. Since we are making a POST request, 
we should start by using the await keyword before calling the fetch() function.
We will have to save the returned promise in a variable called response using the const keyword.

4. In the fetch() call that we just made, pass in the following URL to the function as a string for the first argument:
https://api-to-call.com/endpoint
Then as our second argument, let’s pass in an empty object for now.

5. Let’s now fill in the request options in our second argument.
First, add the method property and the value is 'POST'. Then we have to include a body property and the value 
is JSON.stringify({id: 200}).
Remember to separate the properties with a comma.

6. After the code block of response, we should create an if statement that checks the ok property of the response object.
Inside the code block of the conditional statement, await the resolution of calling the .json() method on response. 
Save the returned object to a variable called jsonResponse using the keyword const.

7. Now that we have what we want, we should return jsonResponse directly below the code written in the previous step.
Like with previous boilerplate exercises, we're practicing writing code. Normally, we would want to do more beyond this 
step of returning jsonResponse.

8. Below the if conditional, throw a new Error() with the message 'Request failed!'

*/

//Exercise 1 code:
const getData = async () => {
    try {
      const response = await fetch('https://api-to-call.com/endpoint', {
        method: 'POST',
        body: JSON.stringify({id: 200})
      })
      if(response.ok){
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      throw new Error('Request failed!');
    } catch(error) {
      console.log(error);
    }
  }

/*
Exercise 2: async POST requests with an API:
In this exercise, you'll need to retrieve your Rebrandly API key to access the Rebrandly API.

1. At the top of main.js, assign apiKey to your Rebrandly API key.

2. Under the comment "AJAX functions", create a new arrow function and assign it to a const shortenUrl() using the async 
keyword.

3. Inside the code block of the arrow function of shortenUrl create two consts:
One named urlToShorten and assign it inputField.value.
The other named data and assign it the value of calling JSON.stringify() and passing in {destination: urlToShorten}.
Please note, we will be working inside shortenUrl() for the remainder of the exercise.

4. Add a try statement and leave the code block empty for now. After the try code block, create a catch statement and pass 
in error.
In the code block of catch(error), log error to the console.

5. Inside the try code block, using const, create a variable named response and assign it to await the value of calling 
calling fetch().

6. In the fetch() call, pass in url as the first argument and an empty object as the second argument.
In that empty object you just created. It will have the following three properties:
method with a value of 'POST'
body with a value of data
headers with a value of the object below:
{
'Content-type': 'application/json',
'apikey': apiKey
}

7. Below the variable response from the previous step, create a conditional statement that the checks if the ok property of 
response evaluates to a truthy value.

8. Inside the code block of the conditional statement, await response.json() and save it to a variable called jsonResponse 
using the const keyword.

9. Call the function renderRawResponse() and pass in jsonResponse. Then, run the code.
In the response field, you can paste in a URL and click the shorten button.
You should now see an object containing all the information the Rebrandly API sent back!
You can view the purpose of the renderRawResponse() helper function at public/helperFunctions.js.

10. Now it’s time to clean up the response sent back.
Delete renderRawResponse(jsonResponse) and replace it with renderResponse(jsonResponse). Run the code. Then paste in the 
URL again and click the shorten button.
Notice the formatted response.
Great job using Rebrandly to shorten your URL!

You can view the purpose of the renderRawResponse() helper function at public/helperFunctions.js.
*/

//In main.js:
// information to reach API
const apiKey = '71e19d919df64cc8ab7c7f23f243ec19';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
				'apikey': apiKey
      }
    })
    if(response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch(error) {
    console.log(error);
  }
};

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);


//In helperFunctions.hjs:
// information to reach API
const apiKey = '71e19d919df64cc8ab7c7f23f243ec19';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
				'apikey': apiKey
      }
    })
    if(response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch(error) {
    console.log(error);
  }
};

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

