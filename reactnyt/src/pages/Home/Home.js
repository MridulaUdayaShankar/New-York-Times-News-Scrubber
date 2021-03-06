import React, { Component } from "react";
import { FormBtn as SaveBtn } from "../../components/Form";
import API from "../../utils/API.js";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { Card, CardBody } from "../../components/Card";
import "./Home.css";

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

    // ===================Gustavo&Lena===================
// CHANGE SAVE ARTICLE IN HANDLEFORMSUBMIT FUNCTION--
    saveArticle = (titl, lin) => {
      const obj = {
        title: titl,
        link: lin
        // ^Thats not a typo, LEAVE IT.
      }
      console.log(obj)
      API.saveArticle(obj)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };




    // ==================================================


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
                <Row>
                    <Col size="md-6">
                        <h3>Search Form</h3>
                        <form>
                            <Input
                                value={this.state.topic}
                                onChange={this.handleInputChange}
                                name="topic"
                                placeholder="topic"
                            />
                            <Input
                                value={this.state.start_date}
                                onChange={this.handleInputChange}
                                name="start_date"
                                type="date"
                                placeholder="start_date"
                            />
                            <Input
                                value={this.state.end_date}
                                onChange={this.handleInputChange}
                                name="end_date"
                                type="date"
                                placeholder="end_date"
                            />
                            <FormBtn
                                disabled={!(this.state.start_date && this.state.end_date && this.state.topic)}
                                onClick={this.handleFormSubmit}
                                children = 'Search'
                            >
                            </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <h3>Results</h3>
                        {this.state.articles.length ? (
                            <Card>
                                {this.state.articles.map(article => (
                                    <CardBody key={article._id}>
                                        <Link to={"/articles/" + article._id}>{article.headline.main}
                                        </Link>
                                        <SaveBtn onClick={ () => this.saveArticle(article.headline.main, article.web_url)} children='Save' />
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
