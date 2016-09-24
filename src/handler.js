import Alexa from 'alexa-sdk';

const pinchHandlers = {
  WhatsMyColorIntent() { this.emit(':tell', 'Miles Miles from Tomorrowland'); },
};

module.exports.hello = (event, context, _) => {
  const alexa = Alexa.handler(event, context);
  alexa.registerHandlers(pinchHandlers);
  alexa.execute();
};
