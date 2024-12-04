/* eslint-disable react/react-in-jsx-scope */
import { FormControl, Tab, Tabs, Form, Row, Col } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useEffect, useState, useContext } from 'react';
//import { Context } from '../Contexts/formContext';
import { template } from '../formDatatemplate';
import { FormContext } from '../Contexts/FormContext';
import Places from './Places';

function AddressInput() {
  //const { data, updateData } = useContext(FormContext); // Access context data and update function
  const [place, setPlace] = useState();
  function ting(x) {
    setPlace(x);
    console.log("tingy", x);
  }
  return (
    <>
<Places setPlace = {ting}/>
    </>
  );
}

export default AddressInput;