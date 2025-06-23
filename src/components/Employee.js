    import React, { useEffect, useState } from 'react';
    import { fetchUsers } from '../services/userService';
    import UtilExportToExcel from '../util/UtilExportToExcel';
    import UtilDataPagination from '../util/UtilDataPagination';
    import UtilDataPaginations from '../util/UtilDataPaginations';
import Pgtest from './Pgtest';
    
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
         <UtilDataPaginations data={users} headerdata="Test  List" itemsPerPage={2} />
          <UtilExportToExcel data={users} />         
        </div>
      );
    }

    export default Employee;
