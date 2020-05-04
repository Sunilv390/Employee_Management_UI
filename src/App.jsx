import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      emp: []
    }
  }

  componentDidMount() {
    axios.get('https://localhost:44317/api/Employee')
    .then(res => {
      this.setState({
        emp: res.data
      })
      console.log(this.state.emp);
    })
  }

  render() {
    return(
      <div className="container">
        <h2 className="header-title">Employee Management Portal</h2>
        <h4><Link to="/Create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true">
        </span>Add Employee</Link></h4>
        <table className="table table-stripe">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>ContactNumber</th>
            </tr>
          </thead>
          <tbody>
            {this.state.emp.map(employee =>
            <React.Fragment key={employee.id}>
              <tr>
                <td><Link to={`/Show/${employee.id}`}>{employee.id}</Link></td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.contactNumber}</td>
              </tr>
              </React.Fragment>
              )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;