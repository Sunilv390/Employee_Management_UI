import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './css/Create.css';

class Create extends Component {
    constructor(){
        super();
        this.state = {  
            name: '',  
            email: '',  
            salary: '',  
            designation: '',  
            experience: '',  
            contactNumber: '',
            department: '',  
        }
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, email, salary, designation, experience, contactNumber, department } = this.state;

        axios.post('https://localhost:44317/api/Employee',{ name, email, salary, designation, experience, contactNumber, department })
        .then( (result) => {
            this.props.history.push("/")
        });
    }

    render(){
        const { name, email, salary, designation, experience, contactNumber, department } = this.state;

        return(
            <div className="outer-container">
                <div className="container">
                    <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Employees List</Link></h4>
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>FirstName:
                        <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="FirstName" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Email:
                        <input type="email" className="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Salary:
                        <input type="text" className="form-control" name="salary" value={salary} onChange={this.onChange} placeholder="Salary" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Designation:
                        <input type="text" className="form-control" name="designation" value={designation} onChange={this.onChange} placeholder="Designation" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Experience:
                        <input type="number" className="form-control" name="experience" value={experience} onChange={this.onChange} placeholder="Experience" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>ContactNumber:
                        <input type="number" className="form-control" name="contactNumber" value={contactNumber} onChange={this.onChange} placeholder="ContactNumber" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Department:
                        <input type="text" className="form-control" name="department" value={department} onChange={this.onChange} placeholder="Department" />
                        </label>
                    </div>
                    <button type="submit" className="button-field">Submit</button>
                    </form>
                </div>    
            </div>
        )
    }
}

export default Create;