import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/userService';

function Employee() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(err => setError(err.message));
  }, []);
console.log(users);
  if (error) return <div className="alert alert-danger">{error}</div>;
  if (users.length === 0) return <div>Loading...</div>;

  return (
    <>
     <div className="container">
      <h2 className="mb-4">Member List</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark" style={{ backgroundColor: '#007bff', color: 'white' }} >
          <tr>
            <th style={{width:"100px", backgroundColor: '#007bff', color: 'white'}}>Actions</th>
            <th  style={{ backgroundColor: '#007bff', color: 'white' }}>ID</th>
            <th  style={{ backgroundColor: '#007bff', color: 'white' }}>User Name</th>
            <th  style={{ backgroundColor: '#007bff', color: 'white' }}>User User Name</th>
            <th  style={{ backgroundColor: '#007bff', color: 'white' }}>User Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(member => (
            

            <tr key={member.id}>
              <td> <div>
              <button className="btn btn-sm btn-outline-primary me-2" >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button className="btn btn-sm btn-outline-danger" >
                      <i className="bi bi-trash"></i>
                    </button></div> </td>
               <td>{member.id}</td>
               <td>{member.name}</td>
              <td>{member.username}</td>
              
              <td>{member.email}</td>
             
              {/* <td>{member.role}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

</>);
}

export default Employee;
