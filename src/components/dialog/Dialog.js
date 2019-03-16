import React, { Component } from 'react'

export class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = { languages: [], dialog: '', response: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // const unirest = require('unirest')
    // unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-05-01?inboundpartialdate=2019-06-01")
    //     .header("X-RapidAPI-Key", "8f1774236cmsh7d5203464b386dcp1ced4cjsnd78e4dc5e2a8")
    //     .end(function (result) {
    //         console.log(result.status, result.headers, result.body);
    //     });
    handleChange(e) {
            let value, field;
            field = e.target.name;
            value = e.target.value
            // alert(stringify({ [field]: value }))
            this.setState({
                [field]: value
            });
        }

    handleSubmit(e) {

        }

    render() {
    return (
      <div>
        <form>
            
            <label>
                <textarea 
                    name="dialog"
                    className="dialog"
                    onChange={this.handleChange}
                    placeholder="say something" 
                    value={this.state.dialog}
                    rows ="3"
                    cols ="150"
                />
                <textarea 
                    name="response"
                    className="response"
                    onChange={this.handleChange}
                    placeholder="replies will display here" 
                    value={this.state.response}
                    rows ="5"
                    cols ="200"
                />

            </label>

        </form>
      </div>
    )
  }
}

export default Dialog
