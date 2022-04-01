import React from "react";
import { Fragment } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import ViewDeck from "./Display/ViewDeck";
import CreateDeckButton from "./Deck/CreateDeckButton";
import CreateDeck from "./Deck/CreateDeck";
import DeckList from "./Deck/DeckList";
import StudyDeck from "./Deck/StudyDeck";
import EditDeck from "./Deck/EditDeck";
import AddCard from "./Card/AddCard";
import EditCard from "./Card/EditCard";
import { Route, Switch } from "react-router-dom";

function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path={`/`}>
            <CreateDeckButton />
            <DeckList />
          </Route>

          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route path="/decks/:deckId/study">
            <StudyDeck />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route path="/decks/:deckId/">
            <ViewDeck />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default Layout;
