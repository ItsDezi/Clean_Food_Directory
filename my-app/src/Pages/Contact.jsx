/* eslint-disable react/react-in-jsx-scope */
import { Form } from "react-bootstrap";
import { uploadContact } from "../Services/apiService";
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import '../styles/FormTest.css';
import avocado from '../Assets/avocado.jpg';
import snapPea from '../Assets/snapPea.jpg';
import mushroom from '../Assets/mushroom.jpg';
import FloatingDiv from "../Components/FloatingDiv";
import { emailjsSendContact } from "../Services/apiService";
function Contact () {
  const [notifLoading, setNotifLoading] = useState(false);
  const [dbLoading, setDbLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [ nameError, setNameError ] = useState();
  const [ emailError, setEmailError ] = useState();
  const [ messageError, setMessageError ] = useState();
  const [ submitted, setSubmitted ] = useState(false);


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
    setDbLoading(true);
    uploadContact(formData).then((response) => {
      console.log("bloimp",response);
      if(response)
      {
        setDbLoading(false);
        console.log("dbLoading has been set to false");
      }
      else
      {
        alert("An error occurred during submission. You can reach us at Juliend290@yahoo.com");
      }
      console.log("dafuq?");
  } , error => {
    alert("An error occurred during submission. You can reach us at Juliend290@yahoo.com");
      console.log(error);
    });
  }
  const handleEmail = async (e) => {
    //e.preventDefault();
    //cUxjyl7gcIoJV58wn
    //template_15jnwdc
    //service_t0n3iuq
emailjsSendContact(formData.contact_name, formData.contact_email, formData.contact_message ).then((response) => {
      console.log(response);
      if(response)
        {
          setNotifLoading(false);
        }
      console.log("dafuq?");
  });
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
        setSubmitted(true);
        //console.log("dbLoading", dbLoading);
        //console.log("notifLoading", notifLoading);
        }
    }

    return (
      <div className="contact-general-container">
                
        <div className="food-animation" style={{display:"inline-block", justifyItems:"center", marginTop:"15vh"}}>
        <FloatingDiv initx1={0} initx2={20} bgImg={avocado}/>

        <FloatingDiv initx1={0} initx2={20} bgImg={snapPea} delay={0.3} />

        <FloatingDiv initx1={0} initx2={20} bgImg={mushroom} delay={0.6} />
        </div>
        <div className="container form-container">
        <div>
      { submitted && !dbLoading && !notifLoading ? (
        <div >
        <div className="thank-you-container">
          <h3>Thanks for Reaching out!<br/> We'll get back to you as soon as possible.</h3>
        </div>
        </div>) : (
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

        <motion.button
        id='submit_btn' type="submit"
        style={{width:'200px', height:'50px',color:'white', borderRadius:'15px', backgroundColor:'var(--primary)'}}
        title="Submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Submit
          </motion.button>

        </Form>
        )}
        </div>
        </div>
        <div className="food-animation" style={{display:"inline-block", justifyItems:"center", marginTop:"15vh"}}>
        <FloatingDiv initx1={20} initx2={0} bgImg={avocado}/>

        <FloatingDiv initx1={20} initx2={0} bgImg={snapPea} delay={0.3} />

        <FloatingDiv initx1={20} initx2={0} bgImg={mushroom} delay={0.6} />
        </div>
        </div>
    )
}
export default Contact;