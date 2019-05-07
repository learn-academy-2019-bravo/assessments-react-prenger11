# React Assessments

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs) - False

- React is a modern, efficient answer to complex UI applications - TRUE

- React is a full stack framework for modern web applications - TRUE

- React is a flexible library that plays the role of V in an MVC framework-FALSE


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
 <!-- "smart"(logic) components contain all functions and doing the meat of the work while "dumb"(display) components basically just pass through or call on something simple. For the dumb component we just need it to show up on the screen, the smart one will tell everything what to do.
  -->

 //Googled Answer
 Now, your dumb components should contain only enough javascript/react code in order to work in your app. The dumb components' single responsibility is to control the HTML composition, or presentation, of the component. This is why some people call it a presentation component. To continue keeping things simple: your smart components should do everything else that is related to that specific component, and the specific responsibility of that component, that is not related to the actual HTML of that component. This includes things like:  Mapping state to the properties of the presentation component
 Mapping action dispatchers to the properties of the presentation component
 Creating any custom state, event handlers, or other muck.
 Other business logic for the component that is needed to get it to respond and interact appropriately
 Whatever other code is needed to ensure that a proper 'viewModel', or finite set of properties, is passed to the presentation component in order for that presentational component to display and function correctly.
 To summarize, we should have business logic in one file (smart components) that generate a single object (props) that is passed to their HTML template counterpart (dumb component) in order to render a fully functioning component.

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
 yarn add... creates and runs a reaction file. It is updating the browser.

 //Googled Answer
 In general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project.

This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.


#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Component{
      constructor(props){
        super(props)
        this.state = {
          recipes:
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}

        }
      }

      render() {
        let recipes = this.state.recipes.map(function(recipe)) => {
          return(
              <li key={index}> {recipe.name} </li>
            })
          return (
            <div>
            <ul>
              {recipes}
            </ul>
            </div>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
button, checkbox, image

 //Googled Answer


 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
Its used as a variable.

 //Googled Answer
Javascript object that holds information that influences the output of render, and is managed within the component.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
Component state us used to pass down to the children and props would be used for the parent to call on from childre. (River Upstream comparison)

 //Googled Answer
 This is the 'functional' aspect of React. All data (almost) flows downwards. Since the prop is owned by the parent, only the parent should change it. Ideally, children should be stateless. That's not possible in practice (see forms documentation on the React site). 2. You can either feed it in at the top, which is a recommended practice, or you can store it in separate objects. One popular approach is Flux, which uses singleton objects called Stores. This is part of a larger architectural pattern.


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
