import React, { Component } from "react";
import {FormBtn as SaveBtn} from "../../components/Form";
import API from "../../utils/API.js";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { Card, CardBody } from "../../components/Card";

class Home extends Component {
    state = {
        articles: [],
        topic: "",
        start_date: "",
        end_date: ""
    };

    componentDidMount() {
        this.searchArticles();
    }

    searchArticles = () => {
        API.getArticles()
            .then(res => {
                this.setState({ articles: res.data })
                console.log(this.state.articles)
            })
            .catch(err => console.log(err));
    };

    deleteArticle = id => {
        API.deleteArticle(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.topic && this.state.start_date && this.state.end_date) {
            API.saveArticle({
                topic: this.state.topic,
                start_date: this.state.start_date,
                end_date: this.state.end_date
            })
                .then(res => this.loadArticles())
                .catch(err => console.log(err));
        }
    };


    render() {
        return (

            <Container>
                <h1>Search Form</h1>
                <Row>
                    <Col size="md-6">

                        <form>
                            <Input
                                value={this.state.topic}
                                onChange={this.handleInputChange}
                                name="topic"
                                placeholder="topic (required)"
                            />
                            <Input
                                value={this.state.start_date}
                                onChange={this.handleInputChange}
                                name="start_date"
                                placeholder="start_date (required)"
                            />
                            <Input
                                value={this.state.end_date}
                                onChange={this.handleInputChange}
                                name="end_date"
                                placeholder="end_date (required)"
                            />
                            <FormBtn
                                disabled={!(this.state.start_date && this.state.end_date && this.state.topic)}
                                onClick={this.handleFormSubmit}
                            >
                                Search
                            </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <h1>Results</h1>
                        {this.state.articles.length ? (
                            <Card>
                                {this.state.articles.map(article => (
                                     <CardBody key={article._id}>
                                        <Link to={"/articles/" + article._id}>

                                        </Link>
                                        <SaveBtn onClick={() => this.saveArticle(article._id)} />
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

export default Home;    