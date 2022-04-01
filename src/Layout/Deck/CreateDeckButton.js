import React from "react";
import { Link } from "react-router-dom";

function CreateDeckButton() {
  return (
    <div className="CreateDeckButton">
     <Link to={`/decks/new`}>
     <button type="button" class="btn btn-secondary"><i class="fa fa-plus"></i> Create Deck</button>
     </Link>
     <p/>
    </div>
  );
}

export default CreateDeckButton;
