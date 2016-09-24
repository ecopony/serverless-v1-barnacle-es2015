
class Claws {
  constructor() {
    this.sessionAttributes = {
      something: 'something',
    };

    this.speechletResponse = {
      outputSpeech: {
        type: 'PlainText',
        text: 'Hey Arlo how is it going',
      },
      card: {
        type: 'Simple',
        title: 'Card Title',
        content: 'Hey Arlo how is it going',
      },
      reprompt: {
        outputSpeech: {
          type: 'PlainText',
          text: 'I am reprompting you',
        },
      },
      shouldEndSession: true,
    };
  }

  pinch = () => this.buildResponse(this.sessionAttributes, this.speechletResponse);

  buildResponse = (sessionAttributes, speechletResponse) => {
    const version = '1.0';

    return {
      version,
      sessionAttributes,
      response: speechletResponse,
    };
  }
}

export default Claws;
