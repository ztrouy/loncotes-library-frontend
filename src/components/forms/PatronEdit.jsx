import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom/dist";
import { getPatron, updatePatron } from "../../data/patronsData";

export default function PatronEdit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [patron, setPatron] = useState(null);
  const [patronAddress, setPatronAddress] = useState("")
  const [patronEmail, setPatronEmail] = useState("")

  useEffect(() => {
    getPatron(id).then(patronObj => {
        setPatron(patronObj)
        setPatronAddress(patronObj.address)
        setPatronEmail(patronObj.email)
    });
  }, []);

  const submit = () => {
    const patronUpdate = {
      id: patron.id,
      address: patronAddress,
      email: patronEmail
    };

    updatePatron(patronUpdate).then(() => {
      navigate(`/patrons/${id}`);
    });
  };

  return patron == null ? null : (
    <div className="container">
      <h2 className="mt-3">Update Patron</h2>
      <h5 className="my-3">{`${patron.firstName} ${patron.lastName}`}</h5>
      <Form>
        <FormGroup>
          <Label htmlFor="patronAddress">Address</Label>
          <Input
            type="text"
            placeholder="Address"
            name="materialName"
            value={patronAddress}
            onChange={(e) => {
              setPatronAddress(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="patronEmail">Email</Label>
          <Input
            type="text"
            placeholder="Email"
            name="patronEmail"
            value={patronEmail}
            onChange={(e) => {
              setPatronEmail(e.target.value);
            }}
          />
        </FormGroup>
        <Button onClick={submit}>Submit</Button>
      </Form>
    </div>
  );
}
