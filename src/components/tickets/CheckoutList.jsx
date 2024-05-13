import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { getCheckouts, returnCheckout } from "../../data/checkoutsData";

export default function CheckoutList() {
  const [checkouts, setCheckouts] = useState([]);

  useEffect(() => {
    getCheckouts().then(setCheckouts);
  }, []);

  const handleReturn = (id) => {
    returnCheckout(id).then(() => {
        getCheckouts().then(setCheckouts)
    })
  }

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4 className="mt-3">Checkouts</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Material</th>
            <th>Patron</th>
            <th>Checkout Date</th>
            <th>Late Fee</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {checkouts.map((c) => (
            <tr key={`checkouts-${c.id}`}>
              <th scope="row">{c.id}</th>
              <td>{c.material.materialName}</td>
              <td>{`${c.patron.firstName} ${c.patron.lastName}`}</td>
              <td>{c.checkoutDate?.split("T")[0]}</td>
              <td>{c.lateFee?.toLocaleString("en-US", {style: "currency", currency: "USD"}) || "N/A"}</td>
              <td><Button onClick={() => handleReturn(c.id)}>Return</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
