import React from 'react';
import {Redirect} from "react-router";

export class FormPassword extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            sicretNums: '12345',
            inputSMS: ''
        }
    }
    onSubmitHandle = (e) => {
        e.preventDefault();
        if (this.state.sicretNums === this.state.inputSMS) {
            this.setState({redirect: true})
        } else if (this.state.sicretNums !== this.state.inputSMS) {
            console.log(this.state.sicretNums);
            console.log(this.state.inputSMS);
            this.setState({redirect: false})
        }
    }


    changeInputHandler = event => {
        event.persist();
        this.setState(prev => ({...prev, ...{
                [event.target.name]: event.target.value
            }}))
    }

    render() {

        const {redirect, sicretNums, inputSMS} = this.state;
        if (redirect) {
            return <Redirect to={`/cardList`} />;
        }

        return (

            <form onSubmit={this.onSubmitHandle}>

                <div className="form-group">

                    <label htmlFor="inputLogin">Code from SMS</label>
                    <h2>{sicretNums}</h2>
                </div>

                <div className="form-group">

                    <label htmlFor="inputSMS">Enter code from SMS</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputSMS"
                        value={this.state.inputSMS}
                        required
                        name="inputSMS"
                        onChange={this.changeInputHandler}
                        autoFocus
                    />

                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => {
                        if (sicretNums !== inputSMS) {
                            alert('Your password is incorrect!')
                            this.setState({inputSMS: ''})
                        }
                    }}
                >
                    Submit
                </button>

            </form>

        )
    }
}