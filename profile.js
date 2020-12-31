'use strict';

module.exports.get = (event, context, callback) => {
  console.log(context);
  console.log(event);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: event,
    }),
  };

  callback(null, response);
};

module.exports.post = (event, context, callback) => {
  console.log(context);
  console.log(event);  
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Password sent.',
    }),
  };

  callback(null, response);
};


const eventRouter = async event => {
  if (event.action == 'vehicles') {
    return InvokeLambda(VehicleMicroService.create(event))
  }
}
