import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
const PostSummary = ({ id, title, history, linkUrl, match, text }) => {
  return (
    <div onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <Card>
        <Card.Header as="h5">Featured {id}</Card.Header>
        <Card.Body>
          <Card.Title>{title.toUpperCase()}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary">READ MORE</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default withRouter(PostSummary);
