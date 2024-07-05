import { faDeleteLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export default function Table(props) {
    const supprimer = (id)=>{
        props.setdata(props.data.filter((elem,index)=>{
            return index != id;
        }))
    }
  return (
    <div class="table-responsive">
      <table class="table table-light">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((elem,index) => {
            return (
              <tr>
                <td>{elem}</td>
                <td>
                  <FontAwesomeIcon icon={faTrash} className="text-dark" onClick={()=>{supprimer(index)}}/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
