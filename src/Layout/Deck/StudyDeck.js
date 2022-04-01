import React, { useEffect, useState } from "react";
import Navbar from "../Display/Navbar";
import { readDeck } from "../../utils/api/index";
import { useParams, Link, useHistory } from "react-router-dom";

function StudyDeck() {
  // read deck from API and set as param
  const [deck, setDeck] = useState([]);
  const [cards, setCards] = useState([]);
  const deckId = useParams().deckId;
  const history = useHistory();
  const [cardIndex, setCardIndex] = useState(0);
  const [cardAnswer, setCardAnswer] = useState(false);

  //console.log("deckid",deckId, "cardId",cardId)

  useEffect(() => {
    async function loadDecks() {
      try {
        const response = readDeck(deckId);
        const decksFromAPI = await response;
        setDeck(decksFromAPI);
        setCards(decksFromAPI.cards);
      } catch (error) {
        console.log("Load deck error: ", error);
      }
    }
    loadDecks();
  }, [deckId]);

  //console.log(cards[cardIndex])

  const flipHandler = (event) => {
    if (cardAnswer === true) {
      setCardAnswer(false);
    } else {
      setCardAnswer(true);
    }
  };

  const nextCardHandler = (event) => {
    if (cardIndex + 1 === cards.length) {
      if (
        window.confirm(
          "You've reached the end of this deck. Restart cards? Or click 'cancel' to return to the home page."
        )
      ) {
        console.log("reset index");
        setCardIndex(0);
        setCardAnswer(false);
        console.log("card index", cardIndex);
      } else {
        history.push("/");
      }
    } else {
      setCardIndex(cardIndex + 1);
      setCardAnswer(false);
    }
  };

  // if there are less than 3 cards, redirect to create a card 
  if (cards.length < 3) {
    return (
      <div>
        <Navbar deck={deck} navType="Study" />
        <h1>Study: {deck.name}</h1>
        <p />
        <h2>Not enough cards.</h2>
        <p>You need at least 3 cards to study.</p>

        <Link to={`/decks/${deck.id}/cards/new`}>
          <button type="button" class="btn btn-primary">
            Add Cards
          </button>
        </Link>
      </div>
    );
  } 
  // shows the back of the card
  else {
    if (cardAnswer) {
      return (
        <div>
          <Navbar deck={deck} navType="Study" />
          <h1>Study: {deck.name}</h1>
          <p />
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Card {cardIndex + 1} of {cards.length}
              </h5>
              <p class="card-text">{cards[cardIndex].back}</p>
              <button
                type="button"
                class="btn btn-secondary mr-2"
                onClick={flipHandler}
              >
                Flip
              </button>
              <button
                type="button"
                class="btn btn-primary mr-2"
                onClick={nextCardHandler}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      );
    }
    // shows the front of the card
    return (
      <div>
        <Navbar deck={deck} navType="Study" />
        <h1>Study: {deck.name}</h1>
        <p />

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              Card {cardIndex + 1} of {cards.length}
            </h5>
            <p class="card-text">{cards[cardIndex].front}</p>
            <button
              type="button"
              class="btn btn-secondary mr-2"
              onClick={flipHandler}
            >
              Flip
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default StudyDeck;
