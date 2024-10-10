import React from "react";

class UserClass extends React.Component{
    constructor(props){
        console.log(props.name+" constrcuctor called");
        super(props)
        this.state={
            count:0,
        }
    }
    componentDidMount(){
        console.log(this.props.name+'child componentMount');
    }
    render(){
        //destructuring the state variable this.state
        const {count}=this.state;
        return(
            <div className="user-card">
                <h3>count: {count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }} >increment</button>
                <h1>Class:Name {this.props.name}</h1>
                <h2>location:</h2>
                <h2>Contact</h2>
                {console.log(this.props.name+" render called")}
            </div>
        )
    }
}
export default UserClass;