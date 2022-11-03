import React, { Component } from "react";
import NavBarComponent from "./NavBar";

export default class HeaderComponent extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <header>
                    <NavBarComponent />
                </header>
            </div>
        )
    }
}