import axios from "axios";
import { useState } from "react";

function TableData() {
  // const app = require("axios")
  // var [data, setdata] = useState("");
  // setdata = app.get('http://localhost:3000/getAnimals', (req, res)=>{
  //   console.log("sent")
  // });

  return (
    <>
      <div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2>Animals Data</h2>
                </div>
                <div class="col-sm-6">
                  <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Animal Detail</span></a>
                </div>
              </div>
            </div>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Type</th>
                  <th>Breed Name</th>
                  <th>Lifespan</th>
                  <th>Common color</th>
                  <th>Hair color</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                
                <tr>
                  <td></td>
                  <td>Thomas Hardy</td>
                  <td>thomashardy@mail.com</td>
                  <td>89 Chiaroscuro Rd, Portland, USA</td>
                  <td>(171) 555-2222</td>
                  <td> NA for now</td>
                  <td>
                    <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                    <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                  </td>
                </tr>
                
              </tbody>
            </table>
            
          </div>
        </div>
      </div>
      {/* <!-- Edit Modal HTML --> */}
      <div id="addEmployeeModal" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4 class="modal-title">Add Entry</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <label>Name</label>
                  <input type="text" class="form-control" required></input>
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input type="email" class="form-control" required></input>
                </div>
                <div class="form-group">
                  <label>Address</label>
                  <textarea class="form-control" required></textarea>
                </div>
                <div class="form-group">
                  <label>Phone</label>
                  <input type="text" class="form-control" required></input>
                </div>
              </div>
              <div class="modal-footer">
                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"></input>
                <input type="submit" class="btn btn-success" value="Add"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Edit Modal HTML --> */}
      <div id="editEmployeeModal" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4 class="modal-title">Edit Employee</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <label>Name</label>
                  <input type="text" class="form-control" required></input>
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input type="email" class="form-control" required></input>
                </div>
                <div class="form-group">
                  <label>Address</label>
                  <textarea class="form-control" required></textarea>
                </div>
                <div class="form-group">
                  <label>Phone</label>
                  <input type="text" class="form-control" required></input>
                </div>
              </div>
              <div class="modal-footer">
                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"></input>
                <input type="submit" class="btn btn-info" value="Save"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Delete Modal HTML --> */}
      <div id="deleteEmployeeModal" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4 class="modal-title">Delete Employee</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div class="modal-body">
                <p>Are you sure you want to delete these Records?</p>
                <p class="text-warning"><small>This action cannot be undone.</small></p>
              </div>
              <div class="modal-footer">
                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"></input>
                <input type="submit" class="btn btn-danger" value="Delete"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );

}
export default TableData;