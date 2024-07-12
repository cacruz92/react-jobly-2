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


const Companies = ({list, category}) => {
    
    return(
        <>
        <SearchForm />
        <section className="col-md-4">
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                    <h1>{category}</h1>
                    </CardTitle>
                <CardText className="text-center">
                    Below is a list of all the {category} in our database. Pick one and see what jobs are being offered!
                </CardText>
                <ListGroup>
                    {category === "Companies" ? (
                        list.map(company => (
                            <Link 
                            to={`${category.toLowerCase()}/${company.handle}`} 
                            key={company.handle}>
                                <ListGroupItem>{company.name}</ListGroupItem>
                            </Link>
                        ))
                    ):(
                        list.map(job => (
                            <Link 
                            to={`${category.toLowerCase()}/${job.title}`} 
                            key={job.id}>
                                <ListGroupItem>{job.title}</ListGroupItem>
                            </Link>
                        ))
                    )
                }
                </ListGroup>
                </CardBody>
            </Card>
        </section>
        </>
    )
}

export default Companies;