import axios from "axios";

class EmployeeService{

    getAllEmployees(){
        return axios.get("http://localhost:8080/employee/listemployees");
    }

    createEmployee(employee){
        return axios.post("http://localhost:8080/employee/saveemployee",employee);
    }

    deleteEmployee(id){
        return axios.delete("http://localhost:8080/employee/deleteemployee/"+id);
    }

    updateEmployee(employee,id){
        return axios.put("http://localhost:8080/employee/updateemployee/"+id,employee);
    } 

    getEmployee(id){
        return axios.get("http://localhost:8080/employee/findemployee/"+id);
    }

}

export default new EmployeeService();