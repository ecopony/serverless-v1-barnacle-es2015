
class Claws {
  constructor() {
    this.state = {
      open: true,
    };
  }

  pinch = () => {
    const result = 'OUCH!';
    return {
      message: result,
    };
  }
}

export default Claws;
