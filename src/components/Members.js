
import React from 'react';
import UtilExportToExcel from '../util/UtilExportToExcel';
import UtilPagingAndSorting from '../util/UtilPagingAndSorting';
// Sample data - Replace this with real API data or props
const members = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Member' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Moderator' },
];

const Members = () => {
  return (
     <>
    <div className="container my-2">
      <h2 className="mb-4 text-center">Member List</h2>
      
    </div>
    <UtilPagingAndSorting data={members}/>
<UtilExportToExcel data={members} />

    </>
  );
};

export default Members;
