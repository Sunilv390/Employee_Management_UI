import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

class Show extends Component{

    constructor(props){
        super(props);
        this.state = {
            employee: {}
        };
    }

    componentDidMount(){
        axios.get('https://localhost:44317/api/Employee/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                employee: res.data
            });
            console.log(this.state.employee);
        });
    }

    delete(id){
        console.log(id);
        axios.delete('https://localhost:44317/api/Employee/'+id)
        .then((result) => {
            this.props.history.push("/")
        });
    }

    render(){
        return(
            <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.employee.id}
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Employees List</Link></h4>
            <dl>
              <dt>Name:</dt>
              <dd>{this.state.employee.name}</dd>
              <dt>Email:</dt>
              <dd>{this.state.employee.email}</dd>
              <dt>Salary:</dt>
              <dd>{this.state.employee.salary}</dd>
              <dt>Designation:</dt>
              <dd>{this.state.employee.designation}</dd>
              <dt>Experience:</dt>
              <dd>{this.state.employee.experience}</dd>
              <dt>ContactNumber:</dt>
              <dd>{this.state.employee.contactNumber}</dd>
              <dt>Department:</dt>
              <dd>{this.state.employee.department}</dd>
            </dl>
            <Link to={`/Edit/${this.state.employee.id}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.employee.id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
        )
    }
}

export default Show;