import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import Moment from "react-moment";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
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

  renderComments(comments) {
    var commentList = comments.map((comment) => {
      return (
        <li key={comment.id}>
          {comment.comment}
          <br />
          <br />
          -- {comment.author},{" "}
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
  render() {
    // Siempre usa const, y si vas a tener que cambiar el valor en algun momento, usas let. Evita usar var XD,
    const dish = this.props.dish;
    if (!dish) return null;
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.dish.comments)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
