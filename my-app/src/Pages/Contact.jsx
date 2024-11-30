/* eslint-disable react/react-in-jsx-scope */
import { Form } from "react-bootstrap";
import { uploadContact } from "../Services/apiService";
import { useState } from 'react';
import emailjs from "@emailjs/browser";
function Contact () {
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [ nameError, setNameError ] = useState();
  const [ emailError, setEmailError ] = useState();
  const [ messageError, setMessageError ] = useState();

  const [ formData, setFormData ] = useState({
      contact_name: "",
      contact_email: "",
      contact_message: ""
  })

  const handleChange = (e) =>{
    //e.preventDefault();
    //console.log(e.target.value);
    //validate();
    console.log(e);
    const attribute = e.target.id;
    console.log(formData);
    //setFormData((prevFormData) => ({ ...prevFormData.location, [e.target.id]:(e.target.value) }));
    setFormData({ ...formData, 
        [e.target.id]:(e.target.value)
      });

  }
  const databaseUpload = async (e) => {
    //e.preventDefault();
    //e.stopPropagation();
    uploadContact(formData);
  }
  const handleEmail = async (e) => {
    //e.preventDefault();
    setLoading(true);
    //cUxjyl7gcIoJV58wn
    //template_15jnwdc
    //service_t0n3iuq
    emailjs.send(
      `${process.env.REACT_APP_EMAIL_SERVICE}`,
      `${process.env.REACT_APP_EMAIL_TEMPLATE}`,
      {
        from_name: formData.contact_name,
        to_name: "Julien",
        from_email: formData.contact_email,
        to_email: 'juliend290@yahoo.com',
        message:formData.contact_message,
      },
      `${process.env.REACT_APP_EMAIL_KEY}`,
    ).then(() => {
      setLoading(false);
      alert("Thank you! We'll get back to you as soon as possible.");
      // setForm({
      //   name: '',
      //   email: '',
      //   message: '',
      // })
    }, (error) =>{
      setLoading(false);
      console.log("error!",error.message);
      alert("An error occurred while sending the message. You can reach me at Juliend290@yahoo.com.");
    })
  }
  const validate = () => {
    if(!formData.contact_name)
    {
      setIsValid(false);
      setNameError("Please enter a valid name.");
      return false;
    }
    else if(!formData.contact_email || !formData.contact_email.includes("@"))
    {
      setIsValid(false);
      setEmailError("Please enter a valid email.");
      setNameError();
      setMessageError();
      return false;
    }
    else if(!formData.contact_message)
      {
        setIsValid(false);
        setMessageError("Please enter a message.");
        setNameError();
        setEmailError();
        return false;
      }
    setNameError();
    setEmailError();
    setMessageError();
    setIsValid(true);
    return true;
  }
    const handleSubmit = async (event) => {
      event.preventDefault();
        if(validate() === true)
        {
        handleEmail();
        databaseUpload();
        }
    }

    return (
        <div className="container form-container" >
        <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Your name</Form.Label>
          <Form.Control id='contact_name' type="name" placeholder="John Doe" onChange={(e) => {handleChange(e)}} style={{ border: !nameError ? '1px solid gray' : '2px solid red' }}/>
          <Form.Text style={{ color: isValid ? 'white':'red'}}>{nameError}</Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Your email</Form.Label>
          <Form.Control id='contact_email' type="email" placeholder="johnDoe@example.com" onChange={(e) => {handleChange(e)}} style={{ border: !emailError ? '1px solid gray' : '2px solid red' }}/>
          <Form.Text style={{ color: isValid ? 'white':'red'}}>{emailError}</Form.Text>

        </Form.Group>

        <Form.Group>
          <Form.Label>Your message</Form.Label>
          <Form.Control id='contact_message' type="textarea" as="textarea" placeholder="I've found an issue with this feature..." onChange={(e) => {handleChange(e)}} style={{ border: !messageError ? '1px solid gray' : '2px solid red' }}/>
          <Form.Text style={{ color: isValid ? 'white':'red'}}>{messageError}</Form.Text>
        </Form.Group>

        <Form.Control id='submit_btn' type="submit" />

        </Form>
        </div>
    )
}
export default Contact;