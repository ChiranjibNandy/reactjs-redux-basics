import React from "react";
import { connect } from "react-redux";
import {render} from "react-dom";

import { User } from '../components/User';
import { Main } from '../components/Main';
import { setUserName } from '../actions/userActions';

class App extends React.Component { //A smart component(container) 
    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Recmach_In_The_New_State")}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		user : state.userReducer,
		math : state.mathReducer
	}
};

const mapDispathToProps = (dispath) => {
	return {
		setName : (name) => {
			dispath(setUserName(name));
		}
	}
};

export default connect(mapStateToProps,mapDispathToProps)(App);