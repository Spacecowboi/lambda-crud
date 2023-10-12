'use strict';

const dynamoose = require('dynamoose');

exports.handler = async (event) => {
    console.log('HERE IS THE EVENT OBJECT', event);
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from readPeople!'),
    };
    return response;
  };
  