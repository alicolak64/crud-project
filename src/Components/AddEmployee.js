import { Button, Form } from "react-bootstrap"

const AddEmployee = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          required
        />
      </Form.Group>

      <br />

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email"
          required
        />
      </Form.Group>

      <br />

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter Address"
          rows={3}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Phone"
        />
      </Form.Group>

      <br />
      <br />

      <div className="d-grid gap-2">
        <Button variant="success" type="submit" size="lg" >
          Add New Employee
        </Button>
      </div>



    </Form>

  )
}

export default AddEmployee