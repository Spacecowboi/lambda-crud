'use strict';

const dynamoose = require('dynamoose');

//define schema
const peopleSchmea = new dynamoose.Schema({
    id: Number,
    name: String,
    style: String,
    village: String,
});

//create model
const peopleModel = dynamoose.model('people-table', peopleSchmea);

exports.handler = async (event) => {
    console.log('HERE IS THE EVENT OBJECT', event);
    // TODO implement

    // peopleModel.query('name').contains('naruto').exec();
    let results = await peopleModel.scan().exec()

    const response = {
      statusCode: 200,
      body: JSON.stringify(results),
    };
    return response;
  };
  