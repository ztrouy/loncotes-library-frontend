import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getPatron } from "../../data/patronsData";

export default function PatronDetails() {
  const { id } = useParams();

  const [patron, setPatron] = useState(null);

  //add useEffect here to get the ticket details from the API
  useEffect(() => {
    getPatron(id).then(setPatron);
  }, []);

  if (!patron) {
    return null;
  }

  return (
    <div className="container">
      <h2 className="mt-3">{`${patron.firstName} ${patron.lastName}`}</h2>
      <Table>
        <tbody>
          <tr>
            <th scope="row">Address</th>
            <td>{patron.address}</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td>{patron.email}</td>
          </tr>
          <tr>
            <th scope="row">Balance</th>
            <td>
                {patron.balance.toLocaleString("en-US", {style: "currency", currency: "USD"})}
            </td>
          </tr>
          <tr>
            <th scope="row">Active Member?</th>
            <td>
              {patron.isActive ? "Active" : "Not Active"}
            </td>
          </tr>
        </tbody>
      </Table>
      <h5>Checkouts</h5>
      {patron.checkouts?.length ? (
        <Table>
          <thead>
            <tr>
              <th>Material</th>
              <th>Checkout Date</th>
              <th>Return Date</th>
              <th>Late Fee</th>
              <th>Paid?</th>
            </tr>
          </thead>
          <tbody>
            {patron.checkouts.map((co) => (
              <tr key={`checkout-${co.id}`}>
                <td>
                  {co.material.materialName}
                </td>
                <td>{co.checkoutDate?.split("T")[0]}</td>
                <td>{co.returnDate?.split("T")[0] || "N/A"}</td>
                <td>{co.lateFee?.toLocaleString("en-US", {style: "currency", currency: "USD"}) || "N/A"}</td>
                <td>
                    {co.lateFee ? (
                        co.paid ? "Yes" : "No"
                    ) : ("N/A")}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No checkouts for this patron</p>
      )}
    </div>
  );
}
