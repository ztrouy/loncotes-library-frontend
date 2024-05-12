import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { deactivatePatron, getPatrons } from "../../data/patronsData";

export default function PatronList() {
  const [patrons, setPatrons] = useState([]);

  useEffect(() => {
    getPatrons().then(setPatrons);
  }, []);

  const handleDeactivate = (patron) => {
    deactivatePatron(patron.id).then(() => {
      getPatrons().then(setPatrons)
    })
  }

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Patrons</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Active Status</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {patrons.map((p) => (
            <tr key={`patrons-${p.id}`}>
              <th scope="row">{p.id}</th>
              <td>{`${p.firstName} ${p.lastName}`}</td>
              <td>{p.address}</td>
              <td>{p.email}</td>
              <td>{p.isActive ? "Active" : "Inactive"}</td>
              <td>
                <Link to={`${p.id}`}>Details</Link>
              </td>
              <td>
                {p.isActive ? <Button onClick={() => handleDeactivate(p)}>Deactivate</Button> : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
