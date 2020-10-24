// использую class-component
import React, {Component} from 'react';
import {Redirect} from "react-router";

export class FormHandle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }
    onSubmitHandle = (e) => {
        e.preventDefault();
        this.setState({
            redirect: true,
        })
    }

    render() {
        const {redirect} = this.state;
        if (redirect) {
            return <Redirect to={`/formPassword`} props={this.state.sicretNums}/>;
        }
        return (
            <form onSubmit={this.onSubmitHandle}>
            <div className="form-group">

                <label htmlFor="inputLogin">Login</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputLogin"
                    required
                    minLength="3"
                    maxLength="20"
                />

                <small id="loginHelp" className="form-text text-muted">We'll never share your login with anyone
                    else.</small>
            </div>

            <div className="form-group">

                <label htmlFor="inputPassword">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    required
                    minLength="3"
                    maxLength="20"
                />

            </div>

            <div className="form-group form-check">

                <input
                    type="checkbox"
                    className="form-check-input"
                    id="check"
                />
                <label className="form-check-label" htmlFor="check">Check me out</label>

            </div>


            <button
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>

        </form>

        )
    }
}
