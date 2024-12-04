/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import InputField from "./InputField";
import "../styles/FormTest.css";
import { FormControl, Tab, Tabs, Form } from "react-bootstrap";
import CoordinatesInput from "./CoordinatesInput";
import AddressInput from "./AddressInput";
import { template } from "../formDatatemplate";
import { FormContext } from "../Contexts/FormContext";
import { getCurrentDate } from "./GetCurrentDate";
import { uploadData } from "../Services/apiService";
import { motion } from "framer-motion";
import FloatingDiv from "./FloatingDiv";
import avocado from "../Assets/avocado.jpg";
import snapPea from "../Assets/snapPea.jpg";
import mushroom from "../Assets/mushroom.jpg";
import grapes from "../Assets/grapes.jpg";
import pumpkin from "../Assets/pumpkin.jpg";

//import Button from 'react-bootstrap/Button';
import Places from "./Places";
function AddLocationForm() {
  const [submitted, setSubmitted] = useState(false);
  //const { data, updateData } = useContext(FormContext); // Access context
  const [findBy, setfindBy] = useState("address");
  const [place, setPlace] = useState({ geometry: { coordinates: [0, 0] } });
  const [nameError, setNameError] = useState("");
  const [locationError, setLocationError] = useState();
  const [contributorNameError, setContributorNameError] = useState();
  const [contributorEmailError, setContributorEmailError] = useState();
  const [dbLoading, setDbLoading] = useState(false);

  const [formData, setFormData] = useState({
    location: {
      address: "",
      city: "",
      closeTimestamp: "",
      country: "",
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
      additionalLinks: "",
    },
    contributor: {
      contributor_name: "",
      contributor_email: "",
      contributed_on: "",
    },
  });
  const TabComponents = () => {
    return (
      <>
        <Places setPlace={ting} />
        <CoordinatesInput place={place.geometry.coordinates} setPlace={ting2} />
      </>
    );
  };
  useEffect(() => {
    //This useEffect is in place to ensure that the formData is updated everytime a new place is selected/entered
    setFormData({
      ...formData,
      location: {
        ...formData.location,
        latitude: place.geometry.coordinates[1],
        longitude: place.geometry.coordinates[0],
      },
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
    if (validateForm() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("validity check failed");
    } else {
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
      setDbLoading(true);
      uploadData(formData).then(
        (response) => {
          console.log("bloimp", response);
          if (response) {
            setDbLoading(false);
            console.log("dbLoading has been set to false");
          } else {
            alert(
              "An error occurred during submission. You can reach us at Juliend290@yahoo.com"
            );
          }
          console.log("dafuq?");
        },
        (error) => {
          alert(
            "An error occurred during submission. You can reach us at Juliend290@yahoo.com"
          );
          console.log(error);
        }
      );
      console.log("Heres da form data!", formData);
      setSubmitted(true);
    }
  };

  function validateForm() {
    if (!formData.location.name || formData.location.name.length <= 0) {
      setNameError("Please enter a name for the location.");
      setLocationError();
      setContributorEmailError();
      setContributorNameError();
      return false;
    } else if (
      !formData.location.latitude ||
      !formData.location.longitude ||
      formData.location.latitude == undefined ||
      formData.location.latitude === null ||
      formData.location.latitude == 0 ||
      formData.location.longitude == undefined ||
      formData.location.longitude == null ||
      formData.location.longitude == 0
    ) {
      setLocationError(
        "Please set a valid location either by inputting an address or clicking it on the map."
      );
      setNameError();
      setContributorEmailError();
      setContributorNameError();
      return false;
    } else if (
      !formData.contributor.contributor_name ||
      formData.contributor.contributor_name == undefined ||
      formData.contributor.contributor_name == null ||
      formData.contributor.contributor_name == "" ||
      formData.contributor.contributor_name.length == 0
    ) {
      setContributorNameError("Please enter your name.");
      setLocationError();
      setNameError();
      setContributorEmailError();
      return false;
    } else if (
      !formData.contributor.contributor_email ||
      formData.contributor.contributor_email == undefined ||
      formData.contributor.contributor_email == null ||
      formData.contributor.contributor_email == "" ||
      formData.contributor.contributor_email.length == 0
    ) {
      setContributorEmailError("Please enter your email.");
      setLocationError();
      setNameError();
      setContributorNameError();
      return false;
    } else {
      setLocationError();
      setNameError();
      setContributorEmailError();
      setContributorNameError();

      return true;
    }
  }
  const handleChange = (e) => {
    //e.preventDefault();
    //console.log(e.target.value);
    console.log(e);
    const attribute = e.target.id;
    console.log(formData);
    //setFormData((prevFormData) => ({ ...prevFormData.location, [e.target.id]:(e.target.value) }));
    setFormData({
      ...formData,
      location: {
        ...formData.location,
        [e.target.id]: e.target.value,
      },
    });
  };
  const handleContributorChange = (e) => {
    //e.preventDefault();
    //console.log(e.target.value);
    console.log(e);
    const attribute = e.target.id;
    console.log(formData);
    //setFormData((prevFormData) => ({ ...prevFormData.location, [e.target.id]:(e.target.value) }));
    setFormData({
      ...formData,
      contributor: {
        ...formData.contributor,
        [e.target.id]: e.target.value,
      },
    });
  };
  const handleParkingCheck = () => {
    const tmp = !formData.location.parkingAvailable;
    setFormData({
      ...formData,
      location: {
        ...formData.location,
        parkingAvailable: tmp,
      },
    });
  };
  return (
    <div className="contact-general-container">
      <div
        className="food-animation"
        style={{
          display: "inline-block",
          justifyItems: "center",
          marginTop: "15vh",
        }}
      >
        <FloatingDiv initx1={0} initx2={20} bgImg={avocado} />
        <div style={{height:'200px'}} />
        <FloatingDiv initx1={0} initx2={20} bgImg={snapPea} delay={0.3} />
        <div style={{height:'200px'}} />
        <FloatingDiv initx1={0} initx2={20} bgImg={mushroom} delay={0.6} />
        <div style={{height:'200px'}} />
        <FloatingDiv initx1={0} initx2={20} bgImg={pumpkin} delay={0.3} />
        <div style={{height:'200px'}} />
        <FloatingDiv initx1={0} initx2={20} bgImg={grapes} delay={0.6} />
      </div>
      <div>
        {submitted && !dbLoading ? (
          <div className="thank-you-container-container">
            <div className="thank-you-container">
              <h3>
                Thanks for your submission!
                <br /> Our team will review your information and make the
                details public if they are accurate and appropriate.
              </h3>
            </div>
          </div>
        ) : (
          <div className="container form-container mt-2">
            <Form className="add-location-form" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Location name (Required)</Form.Label>
                <Form.Control
                  id="name"
                  type="text"
                  placeholder="Marthas fresh eggs"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  style={{
                    border: !nameError ? "0.5px solid gray" : "2px solid red",
                  }}
                />
                <Form.Text style={{ color: !nameError ? "white" : "red" }}>
                  {nameError}
                  <br />
                </Form.Text>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Text className="text-muted">
                  If it has no formal name, just add what they have and where it
                  is. (i.e. Eggs in Boston)
                </Form.Text>
              </Form.Group>

              <Form.Group
                style={{
                  border: !locationError ? "0px solid gray" : "2px solid red",
                }}
              >
                <Form.Label>
                  Search for the location or find it on the map if there is no
                  official address.(Required)
                </Form.Label>
                <TabComponents />
                <Form.Text style={{ color: !locationError ? "white" : "red" }}>
                  {locationError}
                </Form.Text>
              </Form.Group>

              <Form.Group className="py-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  placeholder="marthasEggs@organic.com"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  id="phoneNumber"
                  type="phone"
                  placeholder="123-456-7890"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  id="description"
                  type="textarea"
                  as="textarea"
                  placeholder=""
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>

              <Form.Group className="form-checkbox">
                <Form.Check
                  label="Parking available"
                  id="parkingAvailable"
                  type="checkbox"
                  onChange={(e) => {
                    handleParkingCheck();
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Website</Form.Label>
                <Form.Control
                  id="websiteURL"
                  type="url"
                  placeholder="https://www.marthaeggs.com"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                  id="instagramHandle"
                  type="url"
                  placeholder="https://www.instagram.com/eggsbymartha"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Facebook Page</Form.Label>
                <Form.Control
                  id="facebookURL"
                  type="url"
                  placeholder="https://www.facebook.com/eggsbymartha"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Youtube</Form.Label>
                <Form.Control
                  id="youtubeLink"
                  type="url"
                  placeholder="https://www.youtube.com/eggs_by_martha"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Twitter</Form.Label>
                <Form.Control
                  id="twitterLink"
                  type="url"
                  placeholder="https://www.x.com/eggTweets"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Tik Tok</Form.Label>
                <Form.Control
                  id="tiktokLink"
                  type="url"
                  placeholder="https://www.tiktok.com/@marthasTikToks"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>

              {/* <Form.Group>
          <Form.Label>Additional Links</Form.Label>
          <Form.Control id='additionalLinks' type="url" placeholder="www.yelp.com/eggs_by_martha" onChange={(e) => {handleChange(e)}}/>
        </Form.Group> */}

              <Form.Group>
                <Form.Label>Your name(Required)</Form.Label>
                <Form.Control
                  id="contributor_name"
                  type="name"
                  placeholder="John Doe"
                  onChange={(e) => {
                    handleContributorChange(e);
                  }}
                  style={{
                    border: !contributorNameError
                      ? "0.5px solid gray"
                      : "2px solid red",
                  }}
                />
                <Form.Text
                  style={{ color: !contributorNameError ? "white" : "red" }}
                >
                  {contributorNameError}
                </Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Your email(Required)</Form.Label>
                <Form.Control
                  id="contributor_email"
                  type="email"
                  placeholder="contributor@example.com"
                  onChange={(e) => {
                    handleContributorChange(e);
                  }}
                  style={{
                    border: !contributorEmailError
                      ? "0.5px solid gray"
                      : "2px solid red",
                  }}
                />
                <Form.Text
                  style={{ color: !contributorEmailError ? "white" : "red" }}
                >
                  {contributorEmailError}
                </Form.Text>
              </Form.Group>

              <motion.button
                id="submit_btn"
                type="submit"
                style={{
                  width: "200px",
                  height: "50px",
                  color: "white",
                  borderRadius: "15px",
                  backgroundColor: "var(--primary)",
                }}
                title="Submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Submit
              </motion.button>
            </Form>
          </div>
        )}
      </div>
      <div
        className="food-animation"
        style={{
          display: "inline-block",
          justifyItems: "center",
          marginTop: "15vh",
        }}
      >
        <FloatingDiv initx1={20} initx2={0} bgImg={avocado} />
        <div style={{height:'200px'}} />
        <FloatingDiv initx1={20} initx2={0} bgImg={snapPea} delay={0.3} />
        <div style={{height:'200px'}} />
        <FloatingDiv initx1={20} initx2={0} bgImg={mushroom} delay={0.6} />
        <div style={{height:'200px'}} />
        <FloatingDiv initx1={20} initx2={0} bgImg={pumpkin} delay={0.3} />
        <div style={{height:'200px'}} />
        <FloatingDiv initx1={20} initx2={0} bgImg={grapes} delay={0.6} />
      </div>
    </div>
  );
}

export default AddLocationForm;
