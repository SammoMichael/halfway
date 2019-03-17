import React, { Component } from 'react'


async function quickstart(
    projectId = 'YOUR_PROJECT_ID' // Your GCP Project Id
) {
    // Imports the Google Cloud client library
    const {
        Translate
    } = require('@google-cloud/translate');

    // Instantiates a client
    const translate = new Translate({
        projectId
    });

    // The text to translate
    const text = 'Hello, world!';

    // The target language
    const target = 'ru';

    // Translates some text into Russian
    const [translation] = await translate.translate(text, target);
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
}
export class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = { languages: [], dialog: '', response: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchLocations = this.searchLocations.bind(this);
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
        const response = document.getElementsByClassName('response');
        e.preventDefault()
        this.setState({[response]: e.target.value})
        }
    searchLocations() {
        
    }

    render() {
    return (
        <form className="dialogue-form">
            
            <label>
                <textarea 
                    name="dialog"
                    className="dialog"
                    onChange={this.handleChange}
                    placeholder="say something" 
                    value={this.state.dialog}
                    // rows ="3"
                    // cols ="100"
                />
                <textarea 
                    name="response"
                    className="response"
                    // onChange={this.handleChange}
                    placeholder="replies will display here" 
                    value={this.state.response}
                    // rows ="5"
                    // cols ="100"
                />
                <button 
                className="submit-button"
                onClick={this.handleSubmit} />
            </label>
        </form>
    )
  }
}

export default Dialog
