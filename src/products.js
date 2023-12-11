import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, ListGroup, ListGroupItem } from "reactstrap";

export function Products (){
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("/api/product_details/2")
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);
    return(
        <ListGroup>
        {data &&
          data.map((p) => (
            <ListGroupItem>
              <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src={(p.image_url)}
  />
  <CardBody>
    <CardTitle tag="h5">
     {p.name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     {p.price}
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
                {(p.image_url)}
            </ListGroupItem>
          ))}
          
        </ListGroup>
    )
}