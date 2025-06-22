
import React from 'react';

// Sample data - Replace this with real API data or props
const members = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Member' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Moderator' },
];

const Members = () => {
  return (
    <div className="container my-2">
      <h2 className="mb-4 text-center">Member List</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email Id</th>
            <th>User Role</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member.id}>
                <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
            
              <td>{member.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
