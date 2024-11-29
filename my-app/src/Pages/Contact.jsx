/* eslint-disable react/react-in-jsx-scope */
import { Form } from "react-bootstrap";

function Contact () {

    const handleSubmit = () => {
        
    }

    return (
        <div className="container form-container" >
        <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Your name</Form.Label>
          <Form.Control id='name' type="name" placeholder="John Doe" onChange={(e) => {}}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Your email</Form.Label>
          <Form.Control id='email' type="email" placeholder="johnDoe@example.com" onChange={(e) => {}}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Your message</Form.Label>
          <Form.Control id='message' type="textarea" as="textarea" placeholder="I've found an issue with this feature..." onChange={(e) => {}}/>
        </Form.Group>

        <Form.Control id='submit_btn' type="submit" />

        </Form>
        </div>
    )
}
export default Contact;