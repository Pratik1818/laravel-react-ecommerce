// src/components/LoginForm.js

import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../assets/styles/login.css";

const Login = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={5}>
          <div className="login-card p-4 shadow-sm">
            <h2 className="mb-4 login-title">Login</h2>
            <Form>
              <Form.Group controlId="formUserId" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="User Id"
                  className="form-control-lg custom-input"
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-4">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="form-control-lg custom-input"
                />
              </Form.Group>

              <Button
                variant="danger"
                type="submit"
                className="w-100 py-2 fw-bold login-button"
              >
                Login
              </Button>

              <div className="text-center mt-3">
                <a href="/forgot-password" className="forgot-link">
                  Forgot password?
                </a>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
