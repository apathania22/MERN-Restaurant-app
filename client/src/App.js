import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import CreateRestaurant from "./components/CreateRestaurant";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <RestaurantList />} />
        <Route exact path="/create" render={() => <CreateRestaurant />} />
      </Switch>
    </div>
  );
}

export default App;
