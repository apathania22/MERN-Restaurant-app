import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  IconButton,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

export default function Restaurant(props) {
  console.log(props.restaurant._id);
  const { name, description, _id } = props.restaurant;

  return (
    <div>
      <Container>
        <Card
          className="root"
          variant="outlined"
          style={{ marginTop: 35, background: "lightgray" }}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              {name}:{description}
              <IconButton
                onClick={() => {
                  props.delete(_id);
                }}
                style={{ float: "right" }}
              >
                <Delete style={{ color: "red" }} />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
