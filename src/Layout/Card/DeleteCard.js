import React from "react";
import { deleteCard } from "../../utils/api/index";

function DeleteCard({ card }) {

  const deleteHandler = () => {
    if (window.confirm("Are you sure you want to delete this card?")) {
      deleteCard(card.id);
      window.location.reload();
    }
  };

  return (
    <button type="button" class="btn btn-danger" onClick={deleteHandler}>
     <i class="fas fa-trash-alt"></i>
    </button>
  );
}

export default DeleteCard;
