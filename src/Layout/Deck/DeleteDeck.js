import React from "react";
import { deleteDeck } from "../../utils/api/index";
import { useHistory } from "react-router-dom";

function DeleteDeck({ deck }) {
  const history = useHistory();

  const deleteHandler = () => {
    if (window.confirm("Are you sure you want to delete this deck?")) {
      deleteDeck(deck.id);
      window.location.reload();
    }
  };

  return (
    <button type="button" class="btn btn-danger" onClick={deleteHandler}>
      Delete
    </button>
  );
}

export default DeleteDeck;
