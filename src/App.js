import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Form, button, FormGroup } from 'react-bootstrap';
import showpassword from "./showpass";
import { useForm } from "react-hook-form";
import { useState } from "react";
import './App.css';

// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";


function App() {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const [data, setData] = useState();

  return (
    <Container className="container">
      <h4>React Hook Form</h4>
      <Form className="cover-form" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <Form.Group className="mb-3 p-3">
          <Form.Label>Email addredd</Form.Label>
          <Form.Control {...register("email", {

            required: "required",
            pattern: {
              value: /\s+@\S+\.\s+/,
              message: "Email is can't access"
            },
          }

          )} type="email" placeholder="Your email">

          </Form.Control>
          <Form.Text className="text-danger">
            {errors.email?.message}

          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 p-3">
          <Form.Label>Password</Form.Label>
          <Form.Control {...register("password",
            {
              required: "required",
              minLength: {
                value: 8,
                message: "please write your password more than 8 charecter",
              }
            }
          )
          } type="password" placeholder="Your password" id="showpass">

          </Form.Control>
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
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

        <Form.Group className="form-group">
          <button type="submit" className="btn btn-info">Submit</button>
        </Form.Group>


      </Form>
    </Container >

  );
}


export default App;
