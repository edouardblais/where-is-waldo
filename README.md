# About

My take on the classic game Where's Waldo! 
Built with Javascript, HTML and CSS, this web app uses a BaaS, specifically Firebase, acting as a backend for the web app.

Check it out live: https://waldo-3e003.firebaseapp.com/

# Goals and details

This web app is my first project with a real backend. To get my feet wet in the backend world, I am using Firebase, a BaaS, to provide the necessary database for this project.
Firebase also provides the hosting services for this app. 

More specifically, the database contains the data about the positions of the hidden characters for each image. 
This data is fetched at the start of each game to allow for a comparison between the user's clicking position on the image and the actual positions of the characters.

When the user has found all characters, he is prompted to add his score to the leaderboard. If he does so, his score is added to the database. 
All scores for each image are fetched, sorted and displayed when the user consults the leaderboard. 

This app was the perfect project to discover the world of fullstack web applications. The emphasis of this project was thus to discover how a BaaS like Firebase can provide a backend service for an app 
through the integration of such a service for one of my own projects.

# Next steps

The obvious next step would be to build a similar project with a proper backend. This project constitutes a great first step towards this goal. 

Minimal styling was added to this project, as the emphasis was put on the functionalities of it. 

Finally, no unit tests were written for this project, though the app's functionalities sure were "home" tested along the building process. 
Adding proper unit tests would then be another good feature to develop.







