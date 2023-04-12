const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient();
const db = new AWS.DynamoDB();

const PUT_ITEM = async (params) => {
    const data = docClient.update(params)
        .promise()
        .catch((err) => { console.log(err); });
    return data;
};

const GET_ITEM = async (tableName, keys) => {
    const params = {
      TableName: tableName,
      Key: keys,
    };
    const data = await docClient
      .get(params)
      .promise()
      .catch((err) => {
        console.log("get error------", err);
        throw err;
      });
    return data?.Item;
  };

module.exports = { docClient, db, PUT_ITEM, GET_ITEM };