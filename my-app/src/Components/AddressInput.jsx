import { FormControl, Tab, Tabs, Form } from 'react-bootstrap';


function AddressInput() {
return(
<>
<Form.Group>
    <Form.Label>Address</Form.Label>
    <Form.Control type='address' placeholder='123 Main St.'></Form.Control>
</Form.Group>
</>
);
}
export default AddressInput;