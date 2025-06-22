    import React, { useEffect, useState } from 'react';
    import { fetchUsers } from '../services/userService';
    import UtilExportToExcel from '../util/UtilExportToExcel';
    import UtilDataPagination from '../util/UtilDataPagination';
    import UtilDataPaginations from '../util/UtilDataPaginations';
    
    function Employee() {
      const [users, setUsers] = useState([]);
      const [error, setError] = useState('');

      useEffect(() => {
        fetchUsers()
          .then(setUsers)
          .catch(err => setError(err.message));
      }, []);

      const filterUserData = users.map(({ id, name,username,email,age,phone,website }) => ({ id, name,username,email,age,phone,website }));

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
          {/* <UtilDataPagination data={filterUserData} headerdata="Users List" itemsPerPage={5} /> */}
         <UtilDataPaginations />
          <UtilExportToExcel data={users} />
        </div>
      );
    }

    export default Employee;
