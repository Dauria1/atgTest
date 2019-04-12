# atgTest

Front end interview task

## Running the Application Locally

- First run npm i to install all the dependencies for the applcation
- Next, make sure you have some sort of CORS browser add-on, as the API will otherwise return a CORS error upon request
- Then, you type in Game Type you would like to see and will be show a grid of different races and the start times of said races
- Upon clicking one of you will be then shown the starts of said race along with the information requried in the assignment (number, rider names, horse name)
- Clicking one of these 'Cards' will reveal a bit of extra information as well

## Linter

- To run the linter, all you do is run npm lint

## A bit of commentary

- With this project I focused more on the functionality of everything, showcasing I can make things work. I can use a standard async Redux system (although my naming conventions could be a bit better)

- The application uses a mix of redux and react hooks (a great one for forms), a typical API wrapper for http requests, thunk for asynchronous redux, a bash script for creating components on the fly, styled-components for reusability and easier styling (in my opinion)

- I did make a conscious to skip tests for this task as I'm not super solid with redux / thunk testing, so rather than fumbling around with it I decided to focus more on the functionality
