import React, { Component } from "react";
import { FormBtn as DeleteBtn } from "../../components/Form";
import API from "../../utils/API.js";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Card, CardBody } from "../../components/Card";
import "./Saved.css";
class Saved extends Component {
    state = {
        articles: [],
    };

    componentDidMount() {
        this.saveArticle();
      }
    deleteArticle = id => {
        API.deleteArticle(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6 sm-12">
                        <h1>Saved Articles</h1>
                        {this.state.articles.length ? (
                            <Card>
                                {this.state.articles.map(article => (
                                    <CardBody key={article._id}>
                                        <Link to={"/saved/:id" + article._id}>

                                        </Link>
                                        <DeleteBtn onClick={() => this.deleteArticle(article._id)} children='Delete' />
                                    </CardBody>
                                ))}
                            </Card>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}