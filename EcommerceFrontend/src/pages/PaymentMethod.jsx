import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { CreditCard, Wallet, Trash2, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AddPaymentMethod from "./AddPaymentMethod";

function PaymentMethodsDashboard() {
  const [methods, setMethods] = useState([
    { id: 1, type: "Credit Card", details: "**** **** **** 1234" },
    { id: 2, type: "UPI", details: "john@upi" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    type: "",
    details: "",
    cardholder: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (form.type && form.details) {
      setMethods([...methods, { id: Date.now(), ...form }]);
      setForm({ type: "", details: "", cardholder: "", expiry: "", cvv: "" });
      setShowModal(false);
    }
  };

  const handleDelete = (id) => {
    setMethods(methods.filter((m) => m.id !== id));
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Payment Methods</h2>
        {methods.length > 0 && (
          <Button
            variant="primary"
            className="d-flex align-items-center"
            onClick={() => setShowModal(true)}
          >
            <Plus size={18} className="me-2" /> Add Payment Method
          </Button>
        )}
      </div>

      <AnimatePresence>
        {methods.length > 0 ? (
          <div className="row">
            {methods.map((method) => (
              <motion.div
                className="col-md-4 mb-3"
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                layout
              >
                <Card className="shadow-sm border-0 h-100 payment-card">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="mb-3">
                      {method.type.toLowerCase().includes("card") ? (
                        <CreditCard size={32} className="text-primary mb-2" />
                      ) : (
                        <Wallet size={32} className="text-success mb-2" />
                      )}
                      <h5 className="fw-semibold">{method.type}</h5>
                      <p className="text-muted mb-0">{method.details}</p>
                    </div>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="d-flex align-items-center"
                      onClick={() => handleDelete(method.id)}
                    >
                      <Trash2 size={16} className="me-2" /> Remove
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-5 bg-light rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Wallet size={48} className="text-secondary mb-3" />
            <h5 className="fw-semibold">No saved payment methods</h5>
            <p className="text-muted">
              Add a payment method to make checkout faster.
            </p>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              <Plus size={18} className="me-2" /> Add Payment Method
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">
            <i className="bi bi-credit-card-2-front me-2 text-primary"></i> Add
            Payment Method
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddPaymentMethod form={form} handleChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <motion.div whileHover={{ scale: 1.05 }} style={{ display: "flex", gap: "10px" }}>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="success" onClick={handleAdd}>
              Save Method
            </Button>
          </motion.div>
        </Modal.Footer>
      </Modal>

      <style>{`
        .payment-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 20px rgba(0,0,0,0.15);
          transition: all 0.3s;
        }
      `}</style>
    </div>
  );
}

export default PaymentMethodsDashboard;
