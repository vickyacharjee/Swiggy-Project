// import User from "./User";
import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"John Doe",
            location:"idk",
            image:null
        }
    }
    async componentDidMount(){
        const data=await fetch('https://api.github.com/users/vickyacharjee');
        const json=await data.json();
        console.log(json);
        this.setState({
            name:json.name,
            location:json.location,
            image:json.avatar_url
        })
    }
    componentDidUpdate(){
        console.log("updated");
    }
    componentWillUnmount(){
        console.log('will unmount');   
    }
    render(){
        return(
           <div className="bg-gray-50">
                
                <h1 className="text-center">Made By: <b>{this.state.name}</b>
                <h2 className="m-3 font-serif"><a className="p-1  bg-red-300 rounded-md" href="http://www.github.com/vickyacharjee" target="_blank" rel="noopener noreferrer">connect</a> and get the source code</h2>
                </h1>
                <h1 className="text-center">Location: <b> {this.state.location}</b> </h1>
                
                <img className="m-auto rounded-lg" src={this.state.image} alt="image" />

           </div>     
        )
    }
}
export default About;

export const AdditionalContent = () => {
    return (
      <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">React Project Setup from Scratch</h1>
        <p className="text-gray-700">
          This is an online food delivery web app, seamlessly accessing live APIs from Swiggy to offer a comprehensive experience for both food and grocery delivery (Instamart). The app comes packed with essential features such as adding items into the cart, industry-standard billing, checking online status, search functionality, and much more to ensure a user-friendly and efficient experience.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            ✅ <strong>Deep dive into JSX and other core React features:</strong> 
            Understanding how JSX transforms into real DOM elements, exploring how React efficiently handles rendering, and mastering component-based architecture for building dynamic and maintainable UIs.
          </li>
          <li>
            ✅ <strong>Understanding Tailwind CSS basics and setting it up:</strong> 
            Learning the fundamentals of Tailwind CSS for utility-first styling, configuring the framework in your project, and creating responsive and beautiful designs effortlessly.
          </li>
          <li>
            ✅ <strong>Deep Dive into all the important React Hooks:</strong> 
            An in-depth exploration of React Hooks such as `useState`, `useEffect`, `useContext`, and more, to handle component state, manage side effects, and enable better functionality and cleaner code.
          </li>
          <li>
            ✅ <strong>Exploring the React Routing World:</strong> 
            Discovering how to set up and use `react-router-dom` to create seamless navigation between pages, implement nested routes, and protect routes for authenticated users.
          </li>
          <li>
            ✅ <strong>Playing with Live API data, and handling it effectively:</strong> 
            Fetching and managing data from live APIs like Swiggy for food and grocery delivery, understanding data handling patterns, and gracefully dealing with loading states, errors, and performance optimization.
          </li>
          <li>
            ✅ <strong>Functional Vs Class-Based Components:</strong> 
            Comparing and contrasting the functional and class-based approaches to building components, understanding lifecycle methods versus hooks, and deciding when to use each paradigm for optimal performance.
          </li>
          <li>
            ✅ <strong>A Deep dive into Redux && Redux Toolkit:</strong> 
            Mastering state management with Redux, exploring the powerful features of Redux Toolkit to simplify code, and learning how to structure a scalable global state for complex applications.
          </li>
          <li>
            ✅ <strong>Testing our App using Jest:</strong> 
            Writing reliable and comprehensive tests for your React components using Jest and React Testing Library, ensuring your app is bug-free and behaves as expected across various scenarios.
          </li>
        </ul>
      </div>
    );
  };
  
  





