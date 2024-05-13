import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { getAvailableMaterials } from "../../data/materialsData";
import { useNavigate } from "react-router-dom";

export default function BrowseList() {
  const navigate = useNavigate();
  
    const [materials, setMaterials] = useState([]);

  useEffect(() => {
    getAvailableMaterials().then(setMaterials);
  }, []);

  const handleCheckout = (id) => {
    navigate(`/materials/${id}/checkout`)
  }

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4 className="mt-3">Available Materials</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {materials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                <Button onClick={() => handleCheckout(m.id)}>Checkout</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
