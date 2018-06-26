import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class Home extends Component {
    state = {
        articles: [],
        topic: "",
        start_year: "",
        end_year: ""
    };

    componentDidMount() {
        this.searchArticles();
    }

    searchArticles = () => {
        API.search()
            .then(res =>
                this.setState({ articles: res.data})
            )
            .catch(err => console.log(err));
    };


    search = () => {
        
    }


}     