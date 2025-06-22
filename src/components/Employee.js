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

      const handleEdit = (user) => {
        alert(`Editing user: ${user.name} (ID: ${user.id})`);
      };

      const handleDelete = (id) => {
        // Filter out the deleted user from state
        const confirmed = window.confirm("Are you sure you want to delete this user?");
        if (confirmed) {
          setUsers(users.filter(user => user.id !== id));
        }
      };

      if (error) return <div className="alert alert-danger">{error}</div>;
      if (users.length === 0) return <div>Loading...</div>;

      return (
        <div className="container">
          <h2 className="mb-4 text-center">Employee List</h2>
          <table className="table table-bordered table-striped">
            <thead className="bg-primary text-white">
              <tr >
                <th style={{ backgroundColor: '#007bff', color: 'white', width: "100px"  }}>Actions</th>
                <th style={{ backgroundColor: '#007bff', color: 'white' }}>ID</th>
                <th style={{ backgroundColor: '#007bff', color: 'white' }}>Full Name</th>
                <th style={{ backgroundColor: '#007bff', color: 'white' }}>Username</th>
                <th style={{ backgroundColor: '#007bff', color: 'white' }}>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map(member => (
                <tr key={member.id}>
                  <td>
                    <div>
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => handleEdit(member)}
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(member.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                  <td>{member.id}</td>
                  <td>{member.name}</td>
                  <td>{member.username}</td>
                  <td>{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    export default Employee;
