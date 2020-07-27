import React, { Fragment, Component } from "react";
import Header from "./../components/template/Header";
import Container from "./../components/template/Container";
import BeerService from "./../services/BeersService";
import $ from 'jquery';

import "./../assets/js/jquery.dataTables.min.js"
import "./../assets/css/jquery.dataTables.min.css"
import "./../assets/css/bootstrap.min.css";
import "./../assets/css/dashboard.css";

export default class ListBeeers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            page: 1,
            sizePerPage: 50
        };
        this._beerService = new BeerService();
    }


    componentDidMount() {
        const accessToken = localStorage.getItem(CONSTANTS.APP_LOCALSTORAGE_PARAM_TOKEN);
        this._beerService
            .findAllPaginate(
                accessToken,
                this.state.page,
                this.state.sizePerPage
            )
            .then(beers => {
                this.setState({ beers });
                $('#datatable').DataTable();
            });
    }

    renderBeers() {
        return this.state.beers.map(beer => {
            return (
                <tr key={beer.id}>
                    <td><img className="image-beer" src={beer.image_url} /></td>
                    <td>{beer.id}</td>
                    <td>{beer.name}</td>
                    <td className="text-justify">{beer.description}</td>
                    <td>{beer.abv}</td>
                    <td>{beer.ebc}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Container title="Beers" isDisplaySidebar={true}>
                    <div className="table-responsive">
                        <table id="datatable" className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Abv</th>
                                    <th>Ebc</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.renderBeers()}
                            </tbody>
                        </table>
                    </div>

                </Container>
            </Fragment>
        );
    }
}