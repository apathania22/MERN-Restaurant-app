import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import Restaurant from "./Restaurant";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function RestaurantList() {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    let getData = async () => {
      try {
        const data = await axios.get("/api/restaurants/");
        if (data.data.length > 0) {
          setRestaurant(data.data);
        }
      } catch (err) {
        alert(err);
      }
    };
    getData();
  }, []);

  const deleteHandler = async (id) => {
    if (window.confirm("Are you Sure")) {
      const deleteData = await axios.delete("/api/restaurants/" + id);

      const filteredData = restaurant.filter((el) => el._id !== id);
      setRestaurant(filteredData);
    }
  };

  const renderRestaurant = restaurant.map((res, id) => {
    return <Restaurant key={id} restaurant={res} delete={deleteHandler} />;
  });

  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Restaurant App
          </Typography>
        </Toolbar>
      </AppBar>
      <NavLink to="/create">
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: 35, textDecoration: "none" }}
        >
          Create
        </Button>
      </NavLink>
      {renderRestaurant}
    </div>
  );
}

export default RestaurantList;
