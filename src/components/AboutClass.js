import React  from "react"

class UserClass extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            userInfo : {
                name:"user",
                location:"vadakara"
            }
        }
 
        // this.state = {
        //     count:0,
            
        // }
    }
    
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/jeevamk")
        const json = await data.json();

        this.setState({
            userInfo:json,
        })
        console.log(json);

    }

    
    render() {
        const { name, location } =this.state.userInfo
        // const {count} =this.state;

        return(
            <div className="count-countainer">

                {/* <h3>count:{count}</h3>
                <button className="btn-count" onClick={()=>{
                this.setState({count:this.state.count + 1})
                }}>count increase</button> */}
                <h3>{name}</h3>
                <h4>{location}</h4>
            </div>
        )
    }
}

export default UserClass;