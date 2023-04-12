const { PUT_ITEM } = require("/opt/nodejs/services/repository/database");
require("dotenv").config();

async function updateUser(body) {
    let { logonId, visitorId } = body;
    let params = {
        TableName: process.env.table_name,
        Key: {
            logonId: logonId
        },
        UpdateExpression: 'SET #visitorId =:visitorIdVal',
        ExpressionAttributeNames: {
            '#visitorId': 'visitorId'
        },
        ConditionExpression: 'logonId = :logonIdVal',
        ExpressionAttributeValues: {
            ':visitorIdVal': visitorId,
            ':logonIdVal': logonId
        }
    };
    return await PUT_ITEM(params);
}

module.exports = { updateUser }