import React, { useEffect, useState } from "react";
import { readCard, readDeck } from "../../utils/api/index";
import Navbar from "../Display/Navbar";
import { useParams } from "react-router-dom";
import Form from "./CardForm"

function EditCard() {
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState([]);
  const deckId = useParams().deckId;
  const cardId = useParams().cardId;

  useEffect(() => {
    async function readDecksAndCards() {
      try {
        const deckResponse = readDeck(deckId);
        const decksFromAPI = await deckResponse;

        const cardResponse = readCard(cardId);
        const cardsFromAPI = await cardResponse;

        setDeck(decksFromAPI);
        setCard(cardsFromAPI);
      } catch (error) {
        console.log("Read deck error: ", error);
      }
    }
    readDecksAndCards();
  }, [deckId, cardId]);

  //console.log("card", card.front);

  return (
    <div>
      <Navbar deck={deck} navType="Edit Card" />
      <h1>Edit Card</h1>

      <Form card={card} cardFront={card.front} cardBack={card.back} deck={deck} deckId={deckId} formType="Edit Card"/>

    </div>
  );
}

export default EditCard;
