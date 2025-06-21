import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="d-flex flex-column vh-100">
      {/* Header test */}
      <Navbar bg="dark" variant="dark" className="px-3">
        <Button variant="outline-light" onClick={() => setCollapsed(!collapsed)}>
          ☰
        </Button>
        <Navbar.Brand className="ms-3">Welcome to Vijai CodingMania.com</Navbar.Brand>
      </Navbar>

      {/* Main Body */}
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
            <Nav className="flex-column pt-3">
              <Nav.Link href="#">🏠 {collapsed ? '' : 'Home'}</Nav.Link>
              <Nav.Link href="#">📁 {collapsed ? '' : 'Projects'}</Nav.Link>
              <Nav.Link href="#">⚙️ {collapsed ? '' : 'Settings'}</Nav.Link>
            </Nav>
          </Col>

          {/* Main Content */}
          <Col className="p-4">
            <h2>Welcome</h2>
            <p>This is the main content area. You can add more components here.</p>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-2">
        <small>© 2025 My App. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
