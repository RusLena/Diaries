import React from "react";
// import { FaTrashAlt, FaEdit } from "react-icons/fa";
import "./index.css";

const EntryList = ({ entries, onEdit, onDelete }) => {
  return (
    <div className="list">
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className='heading'>Title</th>
              <th className='heading'>Description</th>
              <th className='heading'>Date</th>
              <th className='heading'>Actions</th>
            </tr>
          </thead>
          <tbody>
          {entries && entries.map((entry, index) => (
  entry && <tr key={index}>
    <td className="large-cell">{entry.title}</td>
    <td className="larger-cell">{entry.description}</td>
    <td className="small-cell">{entry.date}</td>
    <td className="small-cell">
    <button
            type="button"
            className="small-cell-button"
            onClick={() => onEdit(index)}
          >
            Edit
          </button>
      <button
            type="button"
            className="small-cell-delete-btn"
            onClick={() => onDelete(index)}
          >
           Delete
          </button>
    </td>
  </tr>
))}

          </tbody>
        </table>
      </div>
      </div>
    );
};

export default EntryList;
