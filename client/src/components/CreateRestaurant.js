import React, { useState } from "react";
import { FormControl, Container, Button, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import "./CreateRestaurant.css";
import axios from "axios";

export default function CreateRestaurant() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const addRestaurant = async (e) => {
    e.preventDefault();
    const newRestaurant = {
      name,
      description,
    };
    const postData = await axios.post("/api/restaurants", newRestaurant);
    alert("Restaurant Added");
    setName("");
    setDescription("");
  };

  return (
    <div>
      <Container className="container" maxWidth="sm">
        <h3>Add a Restaurant</h3>
        <form onSubmit={addRestaurant}>
          <FormControl fullWidth={true}>
            <TextField
              label="Name of Restaurant"
              variant="standard"
              required={true}
              onChange={handleNameChange}
              value={name}
            />
            <TextField
              label="Description"
              variant="standard"
              required={true}
              onChange={handleDescriptionChange}
              value={description}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 10 }}
              type="submit"
            >
              <Add />
              Create
            </Button>
          </FormControl>
        </form>
      </Container>
    </div>
  );
}
