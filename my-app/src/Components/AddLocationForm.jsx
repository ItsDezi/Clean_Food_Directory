/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState, useContext } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {useForm} from "react-hook-form";
import classNames from "classnames";
import InputField from './InputField';
import '../styles/FormTest.css';
import { FormControl, Tab, Tabs, Form } from 'react-bootstrap';
import CoordinatesInput from './CoordinatesInput';
import AddressInput from './AddressInput';
import { template } from '../formDatatemplate';
import { FormContext } from '../Contexts/FormContext';
//import Button from 'react-bootstrap/Button';

import Places from './Places';
function AddLocationForm() {
  //const { data, updateData } = useContext(FormContext); // Access context
  const [findBy, setfindBy] = useState("address");
  const [place, setPlace] = useState({geometry: {coordinates:[0,0]}});
  const [validated, setValidated] = useState(false);

  const TabComponents = () => {
      return (
        <>
      <Places setPlace = {ting}/>
      <CoordinatesInput place = {place.geometry.coordinates} setPlace={ting2}/>
      
      </>
  )
  };
  function ting(x) {
    setPlace(x);
    console.log("tingy", x);
  }
  function ting2(x) {
    setPlace(x);
    console.log("tingy2", x);
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div noValidate validated={validated} className="container form-container mt-2">
      <Form className="add-location-form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Location name</Form.Label>
          <Form.Control required type="text" placeholder="Marthas fresh eggs" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Text className="text-muted">
            If it has no formal name, just add what they have and where it is.
            (i.e. Eggs in Boston)
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Search for the location or find it on the map if there is no official address.</Form.Label>
        <TabComponents/>
        </Form.Group>

        <Form.Group className='py-4'>
          <Form.Label>Email</Form.Label>
          <Form.Control id='email' type="email" placeholder="marthasEggs@organic.com" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control id='phoneNumber' type="phone" placeholder="123-456-7890" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control id='description' type="textarea" as="textarea" placeholder="" />
        </Form.Group>

        <Form.Group className='form-checkbox'>
          <Form.Check label="Parking available" id='parkingAvailable' type="checkbox" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Website</Form.Label>
          <Form.Control id='websiteURL' type="url" placeholder="www.marthaeggs.com" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Instagram</Form.Label>
          <Form.Control id='instagramHandle' type="url" placeholder="@eggs_by_martha" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Facebook</Form.Label>
          <Form.Control id='facebookURL' type="url" placeholder="www.facebook.com/eggs_by_martha" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Youtube</Form.Label>
          <Form.Control id='youtubeLink' type="url" placeholder="www.youtube.com/eggs_by_martha" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Twitter</Form.Label>
          <Form.Control id='twitterLink' type="url" placeholder="@eggTweets" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Tik Tok</Form.Label>
          <Form.Control id='tiktokLink' type="url" placeholder="@marthasTikToks" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Additional Links</Form.Label>
          <Form.Control id='additionalLinks' type="url" placeholder="www.yelp.com/eggs_by_martha" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Your name</Form.Label>
          <Form.Control id='contributor_name' type="name" placeholder="John Doe" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Your email</Form.Label>
          <Form.Control id='contributor_email' type="email" placeholder="contributor@example.com" />
        </Form.Group>

          <Form.Control id='submit_btn' type="submit" />
      </Form>
    </div>
  );
}

export default AddLocationForm;