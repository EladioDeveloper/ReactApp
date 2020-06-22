import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import Moment from "react-moment";

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({ comments }) {
  const commentList = comments.map((comment) => {
    return (
      <li key={comment.id}>
        {comment.comment}
        <br />
        <br />
        -- {comment.author}, ,{" "}
        {<Moment format="MMM DD, YYYY">{comment.date}</Moment>}
        <br />
        <br />
      </li>
    );
  });

  return (
    <div>
      <h4>Comments</h4>
      <ul className="list-unstyled">{commentList}</ul>
    </div>
  );
}

const DishDetail = (props) => {
  const dish = props.dish;
  if (!dish) return null;
  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        <RenderDish dish={dish} />
      </div>
      <div className="col-12 col-md-5 m-1">
        <RenderComments comments={dish.comments} />
      </div>
    </div>
  );
};

export default DishDetail;
