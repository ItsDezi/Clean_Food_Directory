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
import { getCurrentDate } from './GetCurrentDate';
import { uploadData } from '../Services/apiService';
//import Button from 'react-bootstrap/Button';
import Places from './Places';
function AddLocationForm() {
  //const { data, updateData } = useContext(FormContext); // Access context
  const [findBy, setfindBy] = useState("address");
  const [place, setPlace] = useState({geometry: {coordinates:[0,0]}});
  const [ error, setError ] = useState("");
  const [ formData, setFormData ] = useState({
    location: {
      address: "",
      city: "",
      closeTimestamp: "",
      country: "US",
      description: "",
      email: "",
      lastUpdated: "",
      latitude: "",
      longitude: "",
      name: "",
      notes: "",
      openTimestamp: "",
      parkingAvailable: false,
      phoneNumber: "",
      postalcode: "",
      state: "",
      timeZone: "",
      tiktokLink: "",
      youtubeLink: "",
      websiteURL: "",
      facebookURL: "",
      twitterLink: "",
      instagramHandle: "",
      additionalLinks: ""
    },
    contributor: {
      contributor_name: "",
      contributor_email: "",
      contributed_on: ""
    }
  })
  const TabComponents = () => {
      return (
        <>
      <Places setPlace = {ting}/>
      <CoordinatesInput place = {place.geometry.coordinates} setPlace={ting2}/>
      </>
  )
  };
  useEffect(() => {//This useEffect is in place to ensure that the formData is updated everytime a new place is selected/entered
    setFormData({ ...formData, 
      location: {
        ...formData.location,
        latitude:place.geometry.coordinates[1],
        longitude: place.geometry.coordinates[0]
      }
      });
  }, [place]);

  function ting(x) {
    setPlace(x);
    console.log("tingy", x);
  }
  function ting2(x) {
    setPlace(x);
    console.log("tingy2", x);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form);
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    //   console.log("validity check failed");
    // }
    if (validateForm === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("validity check failed");
    }
    else
    {
      // console.log("get that date yall!",getCurrentDate())
      // setFormData({ ...formData, 
      //   location: {
      //     ...formData.location,
      //     lastUpdated: getCurrentDate()
      //   },
      //   contributor: {
      //     ...formData.contributor,
      //     contributed_on: getCurrentDate()
      //   }
      //   });
      //complete submission here
      // fetch('http://localhost:8080/api/contribute', {
      //   method: 'POST', 
      //   headers: { "Content-Type": "application/json"},
      //   body: JSON.stringify(formData)
      // }).then(() => {
      //   console.log('new posting added')
      // })
      event.preventDefault();
      event.stopPropagation();
      uploadData(formData);
      console.log("Heres da form data!",formData);
    }
  }

  function validateForm() {
    if(formData.location.name.length <= 0)
    {
      setError("Please enter a name for the location!");
      return false;
    }
    else if(formData.location.latitude == undefined || formData.location.latitude == null || formData.location.latitude == 0 || formData.location.longitude == undefined || formData.location.longitude == null || formData.location.longitude == 0)
    {
      setError("Please set a valid location!");
      return false;

    }
    else if(formData.contributor.contributor_name == undefined || formData.contributor.contributor_name == null || formData.contributor.contributor_name == "" || formData.contributor.contributor_name.length == 0 )
    {
      setError("Please enter your name.");
      return false;

    }
    else if(formData.contributor.contributor_email == undefined || formData.contributor.contributor_email == null || formData.contributor.contributor_email == "" || formData.contributor.contributor_email.length == 0)
      {
        setError("Please enter your email.");
        return false;
      }
    else
    {
      return true;
    }
  }
  const handleChange = (e) =>{
    //e.preventDefault();
    //console.log(e.target.value);
    console.log(e);
    const attribute = e.target.id;
    console.log(formData);
    //setFormData((prevFormData) => ({ ...prevFormData.location, [e.target.id]:(e.target.value) }));
    setFormData({ ...formData, 
      location: {
        ...formData.location,
        [e.target.id]:(e.target.value)
      }
      });

  }
  const handleContributorChange = (e) =>{
    //e.preventDefault();
    //console.log(e.target.value);
    console.log(e);
    const attribute = e.target.id;
    console.log(formData);
    //setFormData((prevFormData) => ({ ...prevFormData.location, [e.target.id]:(e.target.value) }));
    setFormData({ ...formData, 
      contributor: {
        ...formData.contributor,
        [e.target.id]:(e.target.value)
      }
      });

  }
  const handleParkingCheck = () => {
    const tmp = !formData.location.parkingAvailable;
    setFormData({ ...formData, 
      location: {
        ...formData.location,
        parkingAvailable:(tmp)
      }
      });
  }
  return (
    <div className="container form-container mt-2">
      <Form className="add-location-form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Location name</Form.Label>
          <Form.Control id='name' required type="text" placeholder="Marthas fresh eggs" onChange={(e) => {handleChange(e)}}/>
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
          <Form.Control id='email' type="email" placeholder="marthasEggs@organic.com" onChange={(e) => {handleChange(e)}}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control id='phoneNumber' type="phone" placeholder="123-456-7890" onChange={(e) => {handleChange(e)}}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control id='description' type="textarea" as="textarea" placeholder="" onChange={(e) => {handleChange(e)}}/>
        </Form.Group>

        <Form.Group className='form-checkbox'>
          <Form.Check label="Parking available" id='parkingAvailable' type="checkbox" onChange={(e) => {handleParkingCheck()}}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Website</Form.Label>
          <Form.Control id='websiteURL' type="url" placeholder="www.marthaeggs.com" onChange={(e) => {handleChange(e)}}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Instagram</Form.Label>
          <Form.Control id='instagramHandle' type="text" placeholder="@eggs_by_martha" onChange={(e) => {handleChange(e)}}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Facebook Page</Form.Label>
          <Form.Control id='facebookURL' type="url" placeholder="www.facebook.com/eggs_by_martha" onChange={(e) => {handleChange(e)}}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Youtube</Form.Label>
          <Form.Control id='youtubeLink' type="url" placeholder="www.youtube.com/eggs_by_martha" onChange={(e) => {handleChange(e)}}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Twitter</Form.Label>
          <Form.Control id='twitterLink' type="text" placeholder="@eggTweets" onChange={(e) => {handleChange(e)}}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Tik Tok</Form.Label>
          <Form.Control id='tiktokLink' type="text" placeholder="@marthasTikToks" onChange={(e) => {handleChange(e)}}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Additional Links</Form.Label>
          <Form.Control id='additionalLinks' type="url" placeholder="www.yelp.com/eggs_by_martha" onChange={(e) => {handleChange(e)}}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Your name</Form.Label>
          <Form.Control id='contributor_name' type="name" placeholder="John Doe" onChange={(e) => {handleContributorChange(e)}}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Your email</Form.Label>
          <Form.Control id='contributor_email' type="email" placeholder="contributor@example.com" onChange={(e) => {handleContributorChange(e)}}/>
        </Form.Group>

          <Form.Control id='submit_btn' type="submit" />
      </Form>
    </div>
  );
}

export default AddLocationForm;