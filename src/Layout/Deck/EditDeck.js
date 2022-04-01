import React, {useEffect, useState} from "react";
import Navbar from "../Display/Navbar"
import { readDeck, updateDeck } from "../../utils/api/index";
import { useParams, useHistory } from "react-router-dom";

function EditDeck( ) {
  const history = useHistory();
  // read the selected single deck from API and set as param
  const deckId = useParams().deckId;
  const [deck, setDeck] = useState([]);

  useEffect(() => {
      async function readDecks() {
        try {
        const response = readDeck(deckId);
        const decksFromAPI = await response;
        setDeck(decksFromAPI);
      }
     catch (error) {
      console.log("Read deck error: ", error)
    }
  }
    readDecks();
  }, [deckId]);


  const changeNameHandler = (event) => {
    setDeck({...deck, name: event.target.value})
}

  const changeDescHandler = (event) => {
    setDeck({...deck, description: event.target.value})
}

  const cancelHandler = async (event) => {
    event.preventDefault();
    history.push(`/decks/${deck.id}`)
  }

  const submitFormHandler = async (event) => {
    event.preventDefault();
    console.log("submitting form...", deck)
    await updateDeck(deck);
    history.push(`/decks/${deck.id}`)
  }
  

    return (
    <div>
      
    <Navbar deck={deck} navType="Edit Deck" />
    <h1>Edit Deck</h1><p/>

    <form onSubmit={submitFormHandler} >
        
        <div class="form-group">
          <label>
            <h4>Name</h4>
          </label>
          <textarea
            class="form-control"
            name="name"
            id="name"
            value={deck.name}
            onChange={changeNameHandler}
          ></textarea>
        </div>
        
        <div class="form-group">
          <label>
            <h4>Description</h4>
          </label>
          <textarea
            class="form-control"
            name="description"
            id="description"
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

    )
  

}

export default EditDeck;