
import React from 'react';

// Sample data - Replace this with real API data or props
const members = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Member' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Moderator' },
];

const Members = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Member List</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Post ID</th>
            <th>User Id</th>
            <th>User comment</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member.id}>
              <td>{member.postId}</td>
              <td>{member.userId}</td>
              <td>{member.comment}</td>
              {/* <td>{member.role}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
