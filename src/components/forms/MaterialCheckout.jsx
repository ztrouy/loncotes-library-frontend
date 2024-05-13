import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom/dist";
import { getMaterial } from "../../data/materialsData";
import { createCheckout } from "../../data/checkoutsData";

export default function MaterialCheckout() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [material, setMaterial] = useState(null)
  const [patron, setPatron] = useState(0);

  useEffect(() => {
    getMaterial(id).then(setMaterial)
  }, []);

  const submit = () => {
    const checkout = {
      materialId: id,
      patronId: patron
    };

    if (patron > 0) {
        createCheckout(checkout).then(newCheckout => {
            navigate(`/materials/${newCheckout.materialId}`)
        })
    } else {
        window.alert("Please input an actual Patron's Id!")
    }
    
  };

  return patron == null ? null : (
    <div className="container">
      <h2 className="mt-3">Checkout Material</h2>
      <h5 className="my-3">{material?.materialName}</h5>
      <Form>
        <FormGroup>
          <Label htmlFor="patronId">Patron Id</Label>
          <Input
            type="number"
            name="patronId"
            value={patron}
            onChange={(e) => {
              setPatron(e.target.value);
            }}
          />
        </FormGroup>
        <Button onClick={submit}>Submit</Button>
      </Form>
    </div>
  );
}
