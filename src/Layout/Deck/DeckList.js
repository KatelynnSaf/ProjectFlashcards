import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api/index";
import DeleteDeck from "./DeleteDeck"
import { Link } from "react-router-dom";

function DeckList() {

  // read deck from API and set as param
  const [decks, setDecks] = useState([]);

  useEffect(() => {
      async function loadDecks() {
        try {
        const response = listDecks();
        const decksFromAPI = await response;
        setDecks(decksFromAPI);
    
      }
     catch (error) {
      console.log("Load deck error: ", error)
    }
  }
    loadDecks();
  }, []);

  console.log("param",decks)

  return (
    <div>
      
      {decks.map((deck, index) => {
        return (
          <div class="card" key={index}>
            <div class="card-body">
            <div class="d-flex justify-content-between">
            <h5 class="card-title">{deck.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{deck.cards.length} cards</h6>
              </div>
            
            <p class="card-text">{deck.description}</p>

            <div class="d-flex justify-content-between">
              <div>

            <Link to={`/decks/${deck.id}`}>
            <button type="button" class="btn btn-secondary mr-2">
            <i class="fas fa-eye"></i> View
            </button>
            </Link>


            <Link to={`/decks/${deck.id}/study`}>
            <button type="button" class="btn btn-primary" >
            <i class="fas fa-book"></i>  Study
            </button>
            </Link>
            </div>

            <div>
            <DeleteDeck deck={deck} />
            </div>

            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeckList;
