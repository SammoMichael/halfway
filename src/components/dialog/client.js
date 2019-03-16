// Twilio Credentials
require('dotenv').load();
const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_TOKEN
);

console.log(client);
const send = () => {
    client.messages
        .create({
            from: '+19412601706',
            body: 'hello world!',
            to: '+16462991038'
        })
        .then(message => console.log(message.sid));
};
send();