import React, {Component} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import Moment from 'react-moment';

class DishDetail extends  Component{
    constructor(props){
        super(props);

        this.state = {
            comment: null
        };

    }

    renderComments(comment){
        var dish = this.props.dish;
       this.state.comment = dish.comments.map((comment) => {
            return(
                <div key={comment.id} className="list-unstyled">
                    <li>{comment.comment}</li>
            <li><p>---{comment.author}, {<Moment format="MMM DD, YYYY">{comment.date}</Moment>}
                    </p></li>
                </div>
            );
        }) 

    }
    render() {
        // Siempre usa const, y si vas a tener que cambiar el valor en algun momento, usas let. Evita usar var XD,
        const dish = this.props.dish;
        if(!dish) return null;
        this.renderComments(dish);
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText> 
                        </CardBody>   
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardBody>
                            <h4>Comments</h4>
                            {this.state.comment}
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}
   
export default DishDetail;