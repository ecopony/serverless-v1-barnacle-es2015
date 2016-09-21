import Claws from '../../src/Claws';

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    const claws = new Claws();
    expect(claws.pinch()).toEqual({ message: 'OUCH!' });
  });
});
