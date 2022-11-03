//import axios from "axios";
import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empId : this.props.match.params.id,
            empName: '',
            empSal: '',
            empLoc: '',
        }

        this.changeEmpNameHandler = this.changeEmpNameHandler.bind(this);
        this.changeEmpSalHandler = this.changeEmpSalHandler.bind(this);
        this.changeEmpLocHandler = this.changeEmpLocHandler.bind(this)

        this.updateEmployee = this.updateEmployee.bind(this)
    }

    componentDidMount(){
        EmployeeService.getEmployee(this.state.empId).then((res) =>{
            let employee = res.data;
            this.setState({
                empName: employee.empName,
                empSal: employee.empSal,
                empLoc: employee.empLoc,
            })
        })
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            empName: this.state.empName,
            empSal: this.state.empSal,
            empLoc: this.state.empLoc
        }
        console.log('employee =>' + JSON.stringify(employee))
        EmployeeService.updateEmployee(employee,this.state.empId).then(res => {
            alert("employee updated successfully....")
        })
        this.props.history.push("/listemployee");
    }

    cancel(){
        alert("leaving with out saving.....")
    }

    changeEmpNameHandler(event){
        this.setState({empName:event.target.value})
    }

    changeEmpSalHandler(event){
        this.setState({empSal:event.target.value})
    }

    changeEmpLocHandler(event){
        this.setState({empLoc:event.target.value})
    }

    render() {
        return (
            <div>
                <br ></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2>Edit Employee</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                  <label >Employee Name</label>
                                  <input type="text" name="empName" id="" className="form-control" placeholder="Enter EmpName" 
                                   value={this.state.empName} onChange={this.changeEmpNameHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Employee Sal</label>
                                  <input type="text" name="empSal" id="" className="form-control" placeholder="Enter EmpSal" 
                                   value={this.state.empSal} onChange={this.changeEmpSalHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Employee Location</label>
                                  <input type="text" name="empLoc" id="" className="form-control" placeholder="Enter EmpLoc" 
                                   value={this.state.empLoc} onChange={this.changeEmpLocHandler} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={this.updateEmployee}>Update</button>
                                <button type="button" className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }

}
