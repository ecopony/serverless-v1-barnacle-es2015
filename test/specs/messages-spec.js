import Messages from '../../src/Messages';

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    expect(Messages.welcomeMessage).toEqual('Welcome to the Powerful Power Animal Determiner');
  });
});
