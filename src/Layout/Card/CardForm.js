import React, { useState } from "react";
import { createCard, updateCard } from "../../utils/api/index";
import { useHistory } from "react-router-dom";

function Form({ cardFront, cardBack, deck, deckId, formType }) {

  const history = useHistory();
  const [card, setCard] = useState([]);

  const changeFrontHandler = (event) => {
    setCard({ ...card, front: event.target.value });
  };

  const changeBackHandler = (event) => {
    setCard({ ...card, back: event.target.value });
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();

    // add card or update card
    if (formType === "Add Card") {
      await createCard(deckId, card);
    } else {
      await updateCard(card);
    }

    window.location.reload();
  };

  const cancelHandler = async (event) => {
    event.preventDefault();
    history.push(`/decks/${deck.id}`);
  };

  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <div class="form-group">
          <label>
            <h4>Front</h4>
          </label>
          <textarea
            class="form-control"
            name="front"
            id="front"
            value={cardFront}
            onChange={changeFrontHandler}
          ></textarea>
        </div>

        <div class="form-group">
          <label>
            <h4>Back</h4>
          </label>
          <textarea
            class="form-control"
            name="back"
            id="back"
            value={cardBack}
            onChange={changeBackHandler}
          ></textarea>
        </div>

        <button
          type="button"
          class="btn btn-secondary mr-2"
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
