import { useState, useEffect } from "react";
import axios from "axios";

function TableData() {


  const [animals, setAnimals] = useState([])
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  const [span, setSpan] = useState("");
  const [hair, setHair] = useState("");
  const url = 'http://localhost:4000/getAnimals';

  useEffect(() => {
    axios.get(url).then((response) => {
      setAnimals(response.data)
      console.log(response)

    })
  }, [url])


  const update = (animal_id) => {
    axios.put(`http://localhost:4000/update/${animal_id}`, {
      type: type,
      breed: breed,
      span: span,
      hair: hair
    }).then(() => {
      console.log("Edited")
    })
  }

  const add = () => {
    axios.post('http://localhost:4000/insert', {
      type: type,
      breed: breed,
      span: span,
      hair: hair

    }).then(() => {
      console.log("done adding")
    })
  };

  const remove = (animal_id) => {
    axios.delete(`http://localhost:4000/delete/${animal_id}`);
  }

  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Animals Data</h2>
                </div>
                <div className="col-sm-6">
                  <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Animal Detail</span></a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Type</th>
                  <th>Breed Name</th>
                  <th>Lifespan</th>
                  <th>Hair color</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  animals.map((item) => {
                    return (
                      <tr key={item.animal_id}>
                        <td>{item.animal_id}</td>
                        <td>{item.animal_type}</td>
                        <td>{item.breed_name}</td>
                        <td>{item.life_span}</td>
                        <td>{item.hair_color}</td>
                        <td>
                          <a href="#editEmployeeModal" onClick={() => { update(item.animal_id) }} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                          <a href="#deleteEmployeeModal" onClick={() => { remove(item.animal_id) }} className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                        </td>
                      </tr>
                    );
                  })
                }

              </tbody>
            </table>

          </div>
        </div>
      </div>
      {/* <!-- Add Modal HTML --> */}
      <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Add Entry</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Animal Type</label>
                  <input type="text" onChange={(e) => { setType(e.target.value) }} className="form-control" required></input>
                </div>
                <div className="form-group">
                  <label>Breed Name</label>
                  <input type="text" onChange={(e) => { setBreed(e.target.value) }} className="form-control" required></input>
                </div>
                <div className="form-group">
                  <label>Average Life span</label>
                  <input onChange={(e) => { setSpan(e.target.value) }} type="number" step="any" min="0" className="form-control" required></input>
                </div>
                <div className="form-group">
                  <label>Hair Color</label>
                  <input onChange={(e) => { setHair(e.target.value) }} type="text" className="form-control" required></input>
                </div>
              </div>
              <div className="modal-footer">
                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"></input>
                <button onClick={() => { add() }} className="btn btn-success" value="Add">submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Edit Modal HTML --> */}
      <div id="editEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Edit Record</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Animal Type</label>
                  <input type="text" className="form-control" required></input>
                </div>
                <div className="form-group">
                  <label>Breed Name</label>
                  <input type="text" className="form-control" required></input>
                </div>
                <div className="form-group">
                  <label>Average life span</label>
                  <input type="number" step="any" min="0" className="form-control" required></input>
                </div>
                <div className="form-group">
                  <label>Hair color</label>
                  <input type="text" className="form-control" required></input>
                </div>
              </div>
              <div className="modal-footer">
                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"></input>
                <input type="submit" className="btn btn-info" value="Save"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Delete Modal HTML --> */}
      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Delete Record</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this Record?</p>
                <p className="text-warning"><small>This action cannot be undone.</small></p>
              </div>
              <div className="modal-footer">
                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"></input>
                <input type="submit" className="btn btn-danger" value="Delete"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );

}
export default TableData;