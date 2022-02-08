![Mark Watson](./assets/banner_updated.jpg)

[![webpage](./assets/myWebpage.png)](https://flickering.herokuapp.com)  [![github](./assets/PNG_github_commits_logo.png)](https://github.com/Mark33Mark/flickering)  

# USYD-FSF Unit 23 - Project 3  
 
## MERN: Flickering

### Table of Contents  
  
   1. [Project Description](#1-description)
   2. [Application Features](#2-features)
   3. [Installation](#3-installation)
   4. [Usage](#4-usage)
   5. [Credits](#5-credits)
   6. [License](#6-license)
   7. [Repository Status](#7-github-repo-status)
   8. [Contribute](#8-how-to-contribute)
   9. [Tests](#9-tests)
   10. [Checklist](#10-checklist)

---

### 1. Description  

**What is this project?**  

*  An emotion tracking application developed using the MERN stack.
   
   [Live application:  flickering.herokuapp.com](https://flickering.herokuapp.com)  

**Why this project?**  

* The 2017 Gallup Negative Experience Index—a snapshot of the world’s emotional state drawn from 154,000 people in 145 countries—recorded its highest-ever levels of stress, sadness, anger, worry and physical pain. In a disruptive economy, the disrupted feel ever more vulnerable, as the pace of radical change increases while their ability to plan for and react to it decreases.  

* For many people, this is an increasingly anxious, unhappy and lonely world. Complex transformations—societal, technological and work-related—are having a profound impact on people’s lived experiences.  According to the World Economic Forum’s Global Risks Report 2019: “A common theme is psychological stress related to a feeling of lack of control in the face of uncertainty.”  

* Noting that mental health problems now impact over 700 million people worldwide, the Global Risks Report contends that the human cost of global risks like —declining psychological and emotional well-being—represents a significant threat with corrosive effects on social cohesion and politics.  


**What problem does this project solve?**  

* Mood tracking is therapy. It can help you prevent the early symptoms of mental health issues like depression, panic attacks, and bipolar disorders. However, this doesn’t mean that it’s only for those with mental health problems.  

* Keeping a mood diary lets you become more aware of the feelings you have and the things that cause them. When you understand yourself, you are better able to determine how to become happier.

*  Some reasons for mood tracking:  
   *  Identify / label your triggers.  
   *  By actively tracking mood, you are present with yourself / mindful and able to honestly check-in.  This process is more likely to help you pin point your triggers or at least have something to discuss with your support network.  
   *  Help manage your mood swings.  
   * The process of doing something to monitor your emotions helps develop a strategy, in turn giving you a sense of control as it should help you to see the emotional impact of your choices – whether they are choices in or out of your control.  
   *  Mood tracking can be an important trigger, prompt for you to be positive about your life and wellbeing.  
   *  Keep informed by having a record of mood over a period of time can be a good tool for your support network to help you.  


**Lessons learnt?**  

*  Time management - a lot of features for this 1st concept had to be abandoned.  Some of those features included a feel good / brag wall for the user to have images that spark positive emotions.  A lot of time was lost exploring existing packages to achieve this feature.  The outcome of a number of days of exploration is that there isn't an off the shelf package.  

*  React is a great technology for the efficient production of commercially available web based applications.  The structural nature of React mean you can work quickly and expediency in any commercial produce is a critical criteria for commercial success.

* Mongoose DB, once you have learnt the syntax, is an excellent way for storing and retrieving data.  Object based data management is liberating compared to the rigid rules of SQL alternatives.

---

### 2. Features  

* Minimalism.  Upon logging in, the user is immediately taken to the 5 question survey.  On submitting the survey, they are taken to a summary of their response with the facility to add a note.  

* Should the user prefer to go directly to their data dashboard, they can select "Notes" from the menu that opens an environment that has all their notes, a graph depicting the last 12 responses, and the facility to add notes.  

* Complies with Progressive Web Application requirements and therefore provides the user with the facility to install the app, improving usage / accessibility.

---

### 3. Installation

You are welcome to download the source code from [my Github repository](https://github.com/Mark33Mark/flickering)  

Once downloaded, you will need to install the dependencies with the following command in your terminal:  

```npm install```  


To run the application, type in the command line:

```npm start develop```  

Enjoy.  

---

### 4. Usage  

The code can be downloaded from [my Github repository](https://github.com/Mark33Mark/flickering) for all assets created for the project.  

You can modify the code as you need.

---

### 5. Credits  

*  React online documentation,
*  Stack Overflow forums - huge gratitude to all the developers that give their time to answer questions on this forum.  
*  https://www.apollographql.com/blog/graphql/basics/graphql-vs-rest/
* Adrian Hajdin - JS Mastery - various resources from his work was referred to for the development of this application.  

---

### 6. License  

 The works in this repository are subject to:  

[![GitHub](https://img.shields.io/github/license/Mark33Mark/flickering)](doc/LICENSE.md)

---

### 7. Github repo status  
![tech stack](https://img.shields.io/badge/stack-MERN-green)
![GitHub top language](https://img.shields.io/github/languages/top/Mark33Mark/flickering)
![GitHub language count](https://img.shields.io/github/languages/count/Mark33Mark/flickering)
![GitHub last commit](https://img.shields.io/github/last-commit/Mark33Mark/flickering)
![GitHub commits in last month](https://img.shields.io/github/commit-activity/m/Mark33Mark/flickering)

---

### 8. How to Contribute  

 If you would like to contribute, please comply with the Contributor Covenant Code of Conduct:  

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](doc/code_of_conduct.md)

---

### 9. Tests  

* No unit tests have been written for this application.  

---

### 10. Checklist  

 All actions not checked are still to be completed:  

[x]  This application satisfies the following acceptance criteria:  
   *  Uss React for the front end.
   *  Uses GraphQL with a Node.js and Express.js server.  
   *  Uses MongoDB and the Mongoose ODM for the database.  
   *  Uses queries and mutations for retrieving, adding, updating, and deleting data.  
   *  Is deployed using Heroku (with data).  
   *  Has a polished UI.  
   *  Is responsive.  
   *  Is interactive (i.e. accepts and respond to user input).  
   *  Includes authentication (JWT).  
   *  Protects sensitive API key information on the server.  
   *  Has a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, high-quality comments, etc.).  
   *  Has a high-quality README (with unique name, description, technologies used, screenshot, and link to deployed application).  

[x]  Application has an Apollo Server, using GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.  
[x]  Uses an Apollo Server and apply it to the Express.js server as middleware.  
[x]  Includes schema settings for resolvers and typeDefs as outlined in the homework instructions.  
[x]  Is an installable PWA application.
[x]  Application is deployed to Heroku [flickering.herokuapp.com](https://flickering.herokuapp.com).  
[x]  Application loads with no errors.  
[x]  User experience is intuitive and easy to navigate.  
[x]  User interface style is clean and polished.  
[x]  Application resembles the mock-up functionality provided in the homework instructions.  
[x]  GitHub repository contains application code.
[x]  Application is deployed to GitHub Pages: [Github location: https://github.com/Mark33Mark/flickering](https://github.com/Mark33Mark/flickering)  
[x]  Application loads with no errors.  
[x]  Github repository contains application code: [Github location: https://github.com/Mark33Mark/flickering](https://github.com/Mark33Mark/flickering)  
[x]  Repository has a unique name.  
[x]  Repository follows best practices for file structure and naming conventions.  
[x]  Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.  
[x]  Repository contains multiple descriptive commit messages.  
[x]  Repository contains quality README file with description, screenshot, and link to deployed application: [Github location: https://github.com/Mark33Mark/flickering](https://github.com/Mark33Mark/flickering).  

---

[Back to the top](#usyd-fsf-unit-23---project-3)  
