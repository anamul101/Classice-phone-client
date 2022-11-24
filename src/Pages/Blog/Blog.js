import React from 'react';

const Blog = () => {
    return (
        <div className='my-12'>
            <h1 className='text-4xl font-bold text-yellow-600 text-center lg:text-left mb-6'>Blog</h1>
            <div className="divider"></div>
            <div tabIndex={0} className="collapse collapse-plus border mb-4 border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                  1. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content"> 
                    <p>
                    <strong>Answer:</strong> There are four main types of state you need to properly manage in your React apps: 1. Local state 2. Global state 3. Server state 4. URL state .Local state is data we manage in one or another component. Global state is data we manage across multiple components. Data that comes from an external server that must be integrated with our UI state. Data that exists on our URLs, including the pathname and query parameters.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus mb-4 border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                2. How does prototypical inheritance work?
                </div>
                <div className="collapse-content"> 
                    <p>
                    <strong>Answer:</strong> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.It is a method by which an object can inherit the properties and methods of another object.Traditionally, in order to get and set the[[Prototype]]of an object, we use Object.getPrototypeOf and Object.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus mb-4 border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                3. What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content"> 
                    <p>
                    <strong>Answer:</strong> The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.For Test-Driven Development (TDD), you write unit tests before writing any implementation.This makes your implementation details in your code shorter and easier to understand.In this instance, the best time to write unit tests is immediately.For others, most developers write unit tests after the code's been written.

                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus mb-4s border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                4. React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content"> 
                    <p>
                    <strong>Answer:</strong> Vue provides higher customizability and hence is easier to learn than Angular or React.Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components.Hence, the transition to Vue from either of the two is an easy option.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;