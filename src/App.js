import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Form, button, FormGroup } from 'react-bootstrap';
import showpassword from "./showpass";
import { useForm } from "react-hook-form";
import { useState } from "react";

// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";


function App() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();

  return (
    <Container>
      <h4>React Hook Form</h4>
      <Form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <Form.Group className="mb-3 p-3">
          <Form.Label>Email addredd</Form.Label>
          <Form.Control {...register("email")} type="email" placeholder="Your email"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3 p-3">
          <Form.Label>Password</Form.Label>
          <Form.Control {...register("password")} type="password" placeholder="Your password" id="showpass"></Form.Control>
          <Form.Check type="checkbox" label="show password" className="mt-3" onClick={showpassword} />
        </Form.Group>

        <Form.Group className="mb-3 p-3">
          <Form.Label>type of member</Form.Label>
          <Form.Select>
            <option value="1" selected>new member</option>
            <option value="2">VIP</option>
            <option value="3">Admin</option>
          </Form.Select>

        </Form.Group>
        <Form.Group>
          <Form.Check {...register("remember")} type="checkbox" label="remember me" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Text>
            {data}
          </Form.Text>

        </Form.Group>
        <button type="submit" className="btn-danger">Submit</button>


      </Form>
    </Container >

  );
}


export default App;
