import UserClass from "./AboutClass";
import React from "react";



class About extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <UserClass name={"jeevamk"} location={"vadakara"} />
            </div>
        )
    }
}

export default About;