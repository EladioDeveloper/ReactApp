import React, {Component} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

class DishDetail extends  Component{
    constructor(props){
        super(props);

        this.state = {
            dishes: props.dish
        };

    }

    render() {
        var dish = this.state.dishes;
        const comments = dish.comments.map((comment) => {
            return(
                <div key={comment.id} className="li">
                    <li>{comment.comment}</li>
                    <li>---{comment.author}</li>
                </div>
            );
        })
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
                                {comments}
                            </CardBody>
                        </Card>
                    </div>
                </div>
            );
        }
}
   
export default DishDetail;