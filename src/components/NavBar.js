import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../css/NavBar.css';

export default class NavBarComponent extends Component{
    click = false;

    constructor(props){
        super(props);
        this.state = {

        }
    }

    handleClick = () =>{
        this.click = true;
    }

    render(){
        return(
            <div className="container-fluid">
                <nav className="navbar">
                    <NavLink exact to ="/" className="nav-logo">
                        EMS
                    </NavLink>
                    <ul className={this.click ? "nav-menu active" : "nav-menu"}>
                        <NavLink
                         exact to= "/" activeClassName="active"
                         className= "nav-links"
                            onClick = {this.handleClick}>
                                Home
                        </NavLink>
                        <NavLink
                         exact to= "/listemployee" activeClassName="active"
                         className= "nav-links"
                            onClick = {this.handleClick}>
                                ListEmployees
                        </NavLink>
                        <NavLink
                         exact to= "/addemployee" activeClassName="active"
                         className= "nav-links"
                            onClick = {this.handleClick}>
                                AddEmployee
                        </NavLink>
                    </ul>
                </nav>
            </div>
        )
    }
}