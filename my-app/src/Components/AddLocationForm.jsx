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
import Places from './Places';
function AddLocationForm() {
  //const { data, updateData } = useContext(FormContext); // Access context
  const [findBy, setfindBy] = useState("address");
  const [place, setPlace] = useState({geometry: {coordinates:[0,0]}});

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
  return (
    <div className="container form-container mt-2">
      <Form className="add-location-form">
        <Form.Group>
          <Form.Label>Location name</Form.Label>
          <Form.Control type="text" placeholder="Marthas fresh eggs" />
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
          <Form.Control id='websiteURL' type="URL" placeholder="www.marthaeggs.com" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Instagram</Form.Label>
          <Form.Control id='instagramHandle' type="URL" placeholder="@eggs_by_martha" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Facebook</Form.Label>
          <Form.Control id='facebookURL' type="URL" placeholder="www.facebook.com/eggs_by_martha" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Youtube</Form.Label>
          <Form.Control id='youtubeLink' type="URL" placeholder="www.youtube.com/eggs_by_martha" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Twitter</Form.Label>
          <Form.Control id='twitterLink' type="URL" placeholder="@eggTweets" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Tik Tok</Form.Label>
          <Form.Control id='tiktokLink' type="URL" placeholder="@marthasTikToks" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Additional Links</Form.Label>
          <Form.Control id='additionalLinks' type="URL" placeholder="www.yelp.com/eggs_by_martha" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default AddLocationForm;