import React  from "react"

class UserClass extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            count:0,
            
        }
    }
    
    
    render() {
        const {name, location} =this.props;
        const {count} =this.state;

        return(
            <div className="count-countainer">
                <h3>count:{count}</h3>
                <button className="btn-count" onClick={()=>{
                this.setState({count:this.state.count + 1})
                }}>count increase</button>
                <h1>Name:{name}</h1>
                <h2>Place:{location}</h2>
            </div>
        )
    }
}

export default UserClass;