
import Claws from './Claws';

module.exports.hello = (event, context, callback) => {
  const claws = new Claws();
  callback(null, claws.pinch());
};
