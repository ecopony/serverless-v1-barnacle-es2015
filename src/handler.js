import Alexa from 'alexa-sdk';
import Interview from './Interview';
import Messages from './Messages';

const handlers = {
  WhatsMyColorIntent() {
    const interview = new Interview();
    this.attributes.interview = interview;
    this.emit(':ask', interview.questions[interview.currentQuestion].text, Messages.comeAgain);
  },
  NumberAnswerIntent() {
    this.emit(':tell',
      `You answered with the number ${this.event.request.intent.slots.number.value}.`);
  },
  'AMAZON.YesIntent': function () {
    this.emit(':tell', 'That is so great!');
  },
  'AMAZON.NoIntent': function () { this.emit(':tell', 'Well, OK.'); },
};

module.exports.hello = (event, context, _) => {
  const alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
