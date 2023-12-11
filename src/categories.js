import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export function Categories(){
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("/api/category/")
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);
    return(
        <ListGroup>
        {data &&
          data.map((c) => (
            <ListGroupItem>
                {c.name}
            </ListGroupItem>
          ))}
          
        </ListGroup>
    );
}