<Card>
    <CardImg width="100%" src={dish.image} alt={dish.name} />
     <CardBody>
         <CardTitle>{dish.name}</CardTitle>
         <CardText>{dish.description}</CardText> 
     </CardBody>   
 </Card>

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
            <CardText>{dish.comments[0].comment}</CardText>
        </CardBody>
    </Card>
</div>
</div>