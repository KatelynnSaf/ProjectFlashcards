import React from "react";
import { Link } from "react-router-dom";

function Navbar({ deck, navType }) {
  //console.log("deck param",deck, navType)

  if (navType === "Create Deck") {
    return (
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">
              <span class="oi oi-home" /> Home
            </Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {navType}
          </li>
        </ol>
      </nav>
    );
  } else if (navType === "View") {
    return (
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">
              <span class="oi oi-home" /> Home
            </Link>
          </li>
          <li class="breadcrumb-item">
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
        </ol>
      </nav>
    );
  } else {
    return (
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">
              <span class="oi oi-home" /> Home
            </Link>
          </li>
          <li class="breadcrumb-item">
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {navType}
          </li>
        </ol>
      </nav>
    );
  }
}

export default Navbar;
