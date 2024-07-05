import React, { useState } from "react";
import Table from "./table";
import "./style.css";
function App() {
  const [data, setdata] = useState([]);
  const [name, setname] = useState("");
  const [resault, setresault] = useState("click on spin");
  const ajouter = (e) => {
    e.preventDefault();
    setdata([...data, name]);
    setname("");
  };
   function Spin () {
    if (data == "") {
      setresault("Add name!!");
    } else {
      setresault("...");
      setTimeout(() => {
        const id = Math.floor(Math.random() * data.length);
        setresault(data[id]);
      }, 1500);
    }

  };

  return (
    <div className="App">
      <div class="container">
        <h1 className="text-primary text-center bg-dark text-white">Random_N</h1>
        <form className="col-sm-8 col-md-6 mt-4 ">
          <div class="mb-3 row">
            <label for="inputName" class="col-9 col-form-label">
              Name :
            </label>
            <div class="col-8">
              <input
                type="text"
                class="form-control"
                name="inputName"
                id="inputName"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="mb-3 row">
            <div class="col-sm-12">
              <button
                type="submit"
                class="btn btn-dark m-auto float-right"
                onClick={(e) => {
                  ajouter(e);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </form>
        <div className="w-100 mb-5 ">
          <button
            className="btn btn-dark mb-5"
            style={{ float: "right" }}
            onClick={() => {
              Spin();
            }}
          >
            Spin
          </button>
        </div>
        <div className="alert alert-light mt-5 text-center fw-bold fs-3">
          {resault}
        </div>
        <Table data={data} setdata={setdata} />
      </div>
    </div>
  );
}

export default App;
