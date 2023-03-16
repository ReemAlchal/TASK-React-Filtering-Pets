import pets from "../petsData";
import PetItem from "./PetItem";
import { useState } from "react";
import App from "../App";

function PetsList() {
  const [query, setQuery] = useState("");
  const [type, settype] = useState("");
  const petList = pets
    .filter((pet) => pet.name.toLowerCase().includes(query))
    .filter((pet) => {
      if (type == "") {
        return true;
      }
      return pet.type == type;
    })
    .map((pet) => <PetItem pet={pet} key={pet.id} />);
  function SearchBar(x) {
    setQuery(x.target.value);
  }
  function PetSelector(x) {
    settype(x.target.value);
  }
  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={SearchBar}
                  value={query}
                />
              </div>
              <br />
              Type:
              <select
                onChange={PetSelector}
                className="form-select"
                value={type}
              >
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
