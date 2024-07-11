import React from "react";
import {Link} from "react-router-dom"
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
  } from "reactstrap";
import SearchForm from "./SearchForm";


const Companies = ({companyList}) => {
    console.log("Props received in Companies:", companyList)
    return(
        <>
        <SearchForm />
        <section className="col-md-4">
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                    Companies
                    </CardTitle>
                <CardText className="text-center">
                    Below is a list of all the companies in our database. Pick one and see what jobs are being offered!
                </CardText>
                <ListGroup>
                    {companyList.map(company => (
                    <Link 
                    to={`companies/${company.handle}`} 
                    // to={isDrink(item.id) ? `/drinks/${item.id}` : `snacks/${item.id}`} 
                    key={company.handle}>
                        <ListGroupItem>{company.name}</ListGroupItem>
                    </Link>
                    ))}
                </ListGroup>
                </CardBody>
            </Card>
        </section>
        </>
    )
}

export default Companies;