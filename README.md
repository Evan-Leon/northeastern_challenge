# Northeastern - Media Cloud

Dear Northeastern Media Cloud team,

Thank you for considering my application for the Web Application Developer role. This is the README with my project overview.

# Overview
The goal of this exercise is to allow a user to type queries against four possible platforms (Online News, Reddit Submissions, Tweets, and YouTube Videos) while having the relevant keywords and tokens highlighted in real-time. Once a user selects which platform to search against, that platform's corresponding tokens will get highlighted as they type queries. It should be easy to add more platforms as long as the tokens & keywords are defined.  

# Research Options

### Custom JavaScript Solution
It is possible to implement this without relying on libraries. By using Javascript query selectors and event listeners, I could select the textarea and as the user is typing I would be listening for keywords or symbols. Once found, these tokens would then be wrapped in a 'mark' html tag or wrapped in another html tag and given a new class name for custom CSS styling. One example of a similar implementation can be found [here](https://codepen.io/brianmearns/pen/YVjZWw)

Although this would be a very lightweight and customizable solution, I decided against it because I felt that it would be more bug-free and efficient to go with an existing JavaScript library. Furthermore it would be quite a process to maintain the raw text in an unmutated fashion. I felt that using a native JavaScript solution would involve more code to make basic things work, and would not play as nice with React.  

### Draft.js & Slate.js  
These two options seem to be popular solutions for text styling and formatting. Draft.js appears to have emerged first and was used for Facebook Messenger text formatting, but seems to have been abandoned when Slate.js emerged as a better solution. Something that was good about these solutions is that they have lots of functionalities and they work well with React. However, although they do appear to have live syntax highlighting, the main focus of these libraries appears to be rich text formatters, specifically for manual formatting like making text bold or italic. Additionally, they are pretty heavy-weight solutions with many features, which is not necessary for this specific exercise.

### WINNER: Prism.js
Prism.js is designed for code syntax highlighting, similar to that of many IDEs. The nature of this exercise is very similar to highlighting code based on syntax, except that users are writing queries with their own custom syntax depending on the platform. Prism.js allows for custom languages, which is perfect as I could create a "language" for each of the syntaxes specified. Additionally, Prism.js is relatively lightweight and is commonly used in other applications as a third party plug-in. Such was the case with [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor), an npm package that offers a no frills textarea/ text-editor that is easy to use with React and is made to easily interact with Prism.js (the suggested text highlight plugin). Utilizing the Prism.js highlight function and monkey patching new languages onto the Prism language library was the perfect combination

# Navigating the project
* The bulk of the code can be found in:
    * App.js

# Colors
* Based on the exercise document, the following tokens are color coded:  
    * Online News: OR or AND and NOT not \* \" \~ \( \)
    * Reddit: +  |  -  \"  \(  \)
    * Tweets: or  OR  -  #  \"  \(  \)
    * Youtube: | - 

# Deployment
This search query formatter was deployed on heroku, so users can access it publicly. You can play with this formatter [here](https://northeastern-exercise.herokuapp.com/)

# Running Locally
In order to run this project, you need Node.js installed. With the proper installations, you should be able to run the app via `npm run start` in the project root directory. 

# Future Considerations
Ideally, it would not be the end user’s responsibility to learn different search syntaxes based on different sources. The application should have one query syntax with instructions for the user, and the application can be responsible for translating to the syntax that specific APIs expect. For example, a user would input `massachusetts OR connecticut` regardless, but if searching Reddit, the app would translate this to `massachusetts|connecticut` on sending to the APIs. Alternatively, the user interface can consist of buildable query blocks like follows:
```
children OR kids
AND
school OR
    camp OR classes
    AND
    summer
```
This is a bit harder to visualize and could get very messy for large queries, but it is a possible solution that eliminates a user's need to write different query syntaxes. 