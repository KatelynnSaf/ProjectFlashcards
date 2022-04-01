import React, { useEffect, useState } from "react";
import { createDeck } from "../../utils/api/index";
import Navbar from "../Display/Navbar";
import { useHistory} from "react-router-dom";
  


function CreateDeck() {
  const history = useHistory();
  const [deck, setDeck] = useState([]);


  const changeNameHandler = (event) => {
    setDeck({...deck, name: event.target.value})
}

  const changeDescHandler = (event) => {
    setDeck({...deck, description: event.target.value})
}

const submitFormHandler = async (event) => {
  event.preventDefault();
  console.log("submitting form...")
  await createDeck(deck);
  history.push(`/`)
}

const cancelHandler = async (event) => {
  event.preventDefault();
  history.push(`/`)
}

  return (
    <div>
      <Navbar deck={deck} navType="Create Deck" />
      <h1>Create Deck</h1>

      <form onSubmit={submitFormHandler} >
        
        <div class="form-group">
          <label>
            <h4>Name</h4>
          </label>
          <input
            class="form-control"
            name="name"
            id="name"
            type="text"
            placeholder="Deck Name"
            value={deck.name}
            onChange={changeNameHandler}
          />
        </div>
        
        <div class="form-group">
          <label>
            <h4>Description</h4>
          </label>
          <textarea
            class="form-control"
            name="description"
            id="description"
            rows="6"
            placeholder="Brief description of deck."
            value={deck.description}
            onChange={changeDescHandler}
          ></textarea>
        </div>

          <button type="button" class="btn btn-secondary mr-2" onClick={cancelHandler}>
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
      </form>
  
    </div>
  );
}

export default CreateDeck;
