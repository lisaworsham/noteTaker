# Note Taker

The purpose of this website is to provide a notetaker app where the user can take notes, store them and then delete them once the task is done. It is to test how I can GET, POST and DELETE something server side with express. And it is deployed via Heroku.


## Prerequisites

Visual Studio Code was used to build. NodeJS and express was used.


## Process/What was Changed

I reviewed the provided the code and started with setting up the server with express then created the code for the html routes. Once those were defined, I moved on to the api routes. It required a GET, a POST and a DELETE requests and responses. Every note needed a unique ID so that the app would know which note to delete when a user would click the delete button, so I had to add that with UUID from npm. Once POST was done, I could move on to the DELETE. I saw that it required me to make a for loop so that it would go through and remove a note based off the unique id. 

## Review

This was pretty simple except for where I was stuck with the DELETE function. Adding console log's per my instructor's feedback, it allowed to pinpoint where in my code it was going wrong and allowed me to see I was missing a "." in JSON.stringify before. I'm going to need to go through and review some basics again to keep them fresh in my head too. 

- - -
© 2020 Lisa Worsham Services, Inc. All Rights Reserved.