import React, { Component } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import '../css/StyleLink.css';

export class ListEmployeeComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            employees: []
        }
    }
    
    componentDidMount(){
        EmployeeService.getAllEmployees().then ((res) =>{
            console.log(res.data);
            this.setState({employees : res.data});
        })
    }

    deleteEmployee(empId){
        EmployeeService.deleteEmployee(empId).then(res =>{
            this.setState({employees:this.state.employees.filter(employee => employee.empId !== empId)});
        })
    }

    updateEmployee(empId){
            
    }

    render(){
        return(
            <>
                <h2 className =  "text-center">Employees List</h2>
                <div className="row">
                    <table className="table table-striped table-inverse">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Employee Name</th>
                                <th>Employee Salary</th>
                                <th>Employee Location</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                              {
                                this.state.employees.map(
                                    employee =>
                                    <tr key={employee.empId}>
                                        <td>{employee.empName}</td>
                                        <td>{employee.empSal}</td>
                                        <td>{employee.empLoc}</td>
                                        <td>
                                        <button type="button" className="btn btn-success" style={{marginRight:"10px"}}>
                                           <Link to={"/updateemployee/" + employee.empId} className="stylelink">
                                                update
                                            </Link>
                                        </button>
                                        <button className="btn btn-danger" onClick={()=>this.deleteEmployee(employee.empId)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                              }
                            </tbody>
                    </table>
                </div>
            </>
        )
    }

}