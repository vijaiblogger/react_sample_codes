import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Settings from './components/Settings';
import EmployeeSVJ from './services/userService';
import Members from './components/Members';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globaltheme/blue.css';
import Employee from './components/Employee';
import Pgtest from './components/Pgtest';
import EmployeeListingExample   from './components/EmployeeListingExample';
//import ExportToExcel from './components/ExcelExport';
import ExcelExport from './components/ExcelExport';
import PopupEditDelete from './util/PopupEditDelete';

// import UtilPagingAndSorting from './util/UtilPagingAndSorting';
import UtilPagingAndSorting from './util/UtilPagingAndSorting';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
function App(props) {

   
  
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="d-flex flex-column vh-100">
      {/* Header */}
      <Navbar bg="dark" variant="dark" className="px-3">
        <Button variant="outline-light" onClick={() => setCollapsed(!collapsed)}>
           <i className="bi bi-list"></i>
        </Button>
        <Navbar.Brand className="ms-3">Welcome to Vijai CodingMania.com</Navbar.Brand>
      </Navbar>


      {/* Main Body */}
          <Router>
      <Container fluid className="flex-grow-1">
        <Row className="h-100">
          {/* Left Sidebar */}
          <Col
            xs={collapsed ? 1 : 2}
            className={`bg-light border-end transition-all p-0 ${
              collapsed ? 'text-center' : ''
            }`}
            style={{ transition: 'width 0.3s' }}
          >
            
        <Nav className="flex-column pt-3" >
          <NavLink to="/" end className="nav-link" activeClassName="active"><i className="bi bi-house-door-fill me-2"></i>{collapsed ? '' : 'Home'}</NavLink>
          <NavLink to="/projects" className="nav-link" activeClassName="active"> <i className="bi bi-file-earmark-code me-2"></i>{collapsed ? '' : 'Projects'}</NavLink>
          <NavLink to="/settings" className="nav-link" activeClassName="active"><i className="bi bi-gear me-1"></i> {collapsed ? '' : 'Settings'}</NavLink>
          <NavLink to="/aboutUs" className="nav-link" activeClassName="active"><i className="bi bi-info-circle-fill"></i>  {collapsed ? '' : 'About Us'}</NavLink>
          <NavLink to="/contactUs" className="nav-link" activeClassName="active"> <i className="bi bi-telephone-fill me-2"></i> {collapsed ? '' : 'Contact Us'}</NavLink>
          <NavLink to="/members" className="nav-link" activeClassName="active"><i class="bi bi-person-circle"></i> {collapsed ? '' : 'Members'}</NavLink>
          <NavLink to="/employee" className="nav-link" activeClassName="active"><i class="bi bi-person-circle"></i> {collapsed ? '' : 'Employee'}</NavLink>
          <NavLink to="/excelExport" className="nav-link" activeClassName="active"><i class="bi bi-person-circle"></i> {collapsed ? '' : 'Export Employee'}</NavLink>
        <NavLink to="/EmployeeListingExample" className="nav-link" activeClassName="active"><i class="bi bi-person-circle"></i> {collapsed ? '' : 'Employee Lists'}</NavLink>
        <NavLink to="/PopupEditDelete" className="nav-link" activeClassName="active"><i class="bi bi-person-circle"></i> {collapsed ? '' : ' PopupEditDelete'}</NavLink>
       <NavLink to="/pgtest" className="nav-link" activeClassName="active"><i class="bi bi-person-circle"></i> {collapsed ? '' : ' pgtest'}</NavLink>
       {/* <NavLink to="/utilPagingAndSorting" className="nav-link" activeClassName="active"><i class="bi bi-person-circle"></i> {collapsed ? '' : ' UtilPagingAndSorting'}</NavLink> */}
       
        </Nav>
          </Col>
          {/* Main Content */}
          <Col className="p-4">
          <Routes>            
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/settings" element={<Settings />} />   
            <Route path="/contactUs" element={<Contact />} />   
            <Route path="/aboutUs" element={<About />} />   
            <Route path="/employee" element={<Employee />} />   
            <Route path="/members" element={<Members />} />   
            <Route path="/excelExport" element={<ExcelExport />} />  
            <Route path="/employeeListingExample" element={<EmployeeListingExample />} /> 
            <Route path="/pgtest" element={<Pgtest />} />  
            <Route path="/popupEditDelete" element={<PopupEditDelete />} />   
            {/* <Route path="/utilPagingAndSorting" element={<UtilPagingAndSorting data={props.users} itemsPerPage={4} />} />  */}
            
                           
          </Routes>
          </Col>
        </Row>
      </Container>
      </Router>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-2">
        <small>© 2025 My App. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
