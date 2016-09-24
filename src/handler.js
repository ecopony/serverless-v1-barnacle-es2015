import Alexa from 'alexa-sdk';
import Messages from './Messages';

const handlers = {
  WhatsMyColorIntent() { this.emit(':tell', Messages.welcomeMessage); },
};

module.exports.hello = (event, context, _) => {
  const alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
