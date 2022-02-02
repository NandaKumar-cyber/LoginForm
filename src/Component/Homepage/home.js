import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>Home Page Component</h1>
            </div>
         );
    }
}
 
export default withRouter(Home);