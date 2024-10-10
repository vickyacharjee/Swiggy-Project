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
           <div className="about-card">
                <h1>Name: {this.state.name}</h1>
                <h1>Location: {this.state.location}</h1>
                <img src={this.state.image} alt="image" />
           </div>     
        )
    }
}
export default About;


