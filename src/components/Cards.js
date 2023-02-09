import React from "react";
import { OverlayTrigger, Tooltip, Button, Card } from "react-bootstrap";

function Cards(props) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Pridėti prekę
    </Tooltip>
  );
  return (
    <Card style={{ width: "15rem" }} className="mb-3">
      {/* <Card.Id>{props.id}</Card.Id> */}
      <Card.Header>{props.name}</Card.Header>
      <Card.Body>
        <OverlayTrigger
          placement="right"
          delay={{ show: 150, hide: 100 }}
          overlay={renderTooltip}
        >
          <Button
            id="button-tooltip"
            variant="outline-success"
            size="sm"
            style={{ border: 0 }}
          >
            <i class="fa-solid fa-plus" />
          </Button>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  );
}

export default Cards;
