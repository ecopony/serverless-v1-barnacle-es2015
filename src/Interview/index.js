import Question from '../Question';

class Interview {
  constructor() {
    this.currentQuestion = 0;
    this.questions = [];
    this.questions.push(new Question('Hey are you cool?'));
  }
}

export default Interview;
