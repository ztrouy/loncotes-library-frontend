import { useEffect, useState } from "react";
import { Button, Input, Label, Table } from "reactstrap";
import { getMaterials, removeMaterial } from "../../data/materialsData";
import { Link } from "react-router-dom";
import { getMaterialTypes } from "../../data/materialTypesData.js";
import { getGenres } from "../../data/genresData.js";

export default function MaterialList() {
  const [materials, setMaterials] = useState([]);
  const [genreId, setGenreId] = useState(0);
  const [materialTypeId, setMaterialTypeId] = useState(0);
  const [genres, setGenres] = useState([]);
  const [materialTypes, setMaterialTypes] = useState([]);

  useEffect(() => {
    getMaterials().then(setMaterials);
    getMaterialTypes().then(setMaterialTypes);
    getGenres().then(setGenres)
  }, []);

  useEffect(() => {
    getMaterials({materialTypeId: materialTypeId, genreId: genreId}).then(setMaterials)
  }, [genreId, materialTypeId, genres, materialTypes])

  const handleRemove = (id) => {
    removeMaterial(id).then(() =>{
      getMaterials().then(setMaterials)
    })
  }

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4 className="mt-3">Materials</h4>
        <Link to="/materials/create">Add</Link>
        <div>
          <Input
            name="materialType"
            type="select"
            value={materialTypeId}
            onChange={(e) => {
              setMaterialTypeId(parseInt(e.target.value));
            }}
          >
            <option value="0" key={"mt-0"}>Choose a Material Type</option>
            {materialTypes.map((mt) => (
              <option value={mt.id} key={`mt-${mt.id}`}>{mt.name}</option>
            ))}
          </Input>
        </div>
        <div>
          <Input
            name="genre"
            type="select"
            value={genreId}
            onChange={(e) => {
              setGenreId(parseInt(e.target.value));
            }}
          >
            <option value="0" key={"g-0"}>Choose a Genre</option>
            {genres.map((g) => (
              <option value={g.id} key={`g-${g.id}`}>{g.name}</option>
            ))}
          </Input>
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th></th>
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
                <Link to={`${m.id}`}>Details</Link>
              </td>
              <td>
                <Button onClick={() => handleRemove(m.id)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
