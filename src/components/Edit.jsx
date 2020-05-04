import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Edit extends Component{
    constructor(props) {
        super(props);
        this.state = {
            employee: {}
        };
      }
    
      componentDidMount() {
        axios.get('https://localhost:44317/api/Employee/'+this.props.match.params.id)
          .then(res => {
            this.setState({ employee: res.data });
            console.log(this.state.employee);
          });
      }
    
      onChange = (e) => {
        const state = this.state.employee
        state[e.target.name] = e.target.value;
        this.setState({employee:state});
      }
    
      onSubmit = (e) => {
        e.preventDefault();
    
        const { id, name, email, salary, designation, experience, contactNumber, department } = this.state.employee;
    
        axios.put('https://localhost:44317/api/Employee/'+this.props.match.params.id, { id, name, email, salary, designation, experience, contactNumber, department })
          .then((result) => {
              console.log("Result is",result.data);
            this.props.history.push("/Show/"+this.props.match.params.id)
          });
      }
    
      render() {
        return (
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Edit Employees
                </h3>
              </div>
              <div className="panel-body">
                <h4><Link to={`/Show/${this.state.employee.id}`}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Employee List</Link></h4>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>ID:
                    <input type="int" className="form-control" name="id" value={this.state.employee.id} onChange={this.onChange} placeholder="ID" />
                    </label>
                    </div>
                <div className="form-group">
                    <label>FirstName:
                    <input type="text" className="form-control" name="name" value={this.state.employee.name } onChange={this.onChange} placeholder="FirstName" />
                    </label>
                </div>
                <div className="form-group">
                    <label>Email:
                    <input type="email" className="form-control" name="email" value={this.state.employee.email } onChange={this.onChange} placeholder="Email" />
                    </label>
                </div>
                <div className="form-group">
                    <label>Salary:
                    <input type="text" className="form-control" name="salary" value={this.state.employee.salary } onChange={this.onChange} placeholder="Salary" />
                    </label>
                </div>
                <div className="form-group">
                    <label>Designation:
                    <input type="text" className="form-control" name="designation" value={this.state.employee.designation } onChange={this.onChange} placeholder="Designation" />
                    </label>
                </div>
                <div className="form-group">
                    <label>Experience:
                    <input type="number" className="form-control" name="experience" value={this.state.employee.experience } onChange={this.onChange} placeholder="Experience" />
                    </label>
                </div>
                <div className="form-group">
                    <label>ContactNumber:
                    <input type="text" className="form-control" name="contactNumber" value={this.state.employee.contactNumber } onChange={this.onChange} placeholder="ContactNumber" />
                    </label>
                </div>
                <div className="form-group">
                    <label>Department:
                    <input type="text" className="form-control" name="department" value={this.state.employee.department } onChange={this.onChange} placeholder="Department" />
                    </label>
                </div>
                  <button type="submit" className="button-field">Submit</button>
                </form>
              </div>
            </div>
            </div>
        );
    }
}

export default Edit;