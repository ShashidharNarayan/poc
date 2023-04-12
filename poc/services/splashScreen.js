const ApiManger = require("/opt/nodejs/services/apimanager/apiManager");
const { API } = require("../constants");
const { updateUser } = require("./user");

async function espotPolicies() {
    const data = await ApiManger.apiCall(
        API.SPLASHSCREEN_ESPOT_POLICIES,
        "GET"
    );
    return data;
}
async function storeSupportedCurrencies() {
    let URL = API.SPLASHSCREEN_STORE_SUPPORTED_CURRENCIES;
    const data = await ApiManger.apiCall(
        URL,
        "GET"
    );
    return data;
}

async function logsplashScreen() {
    const data = await ApiManger.apiCall(
        API.SPLASHSCREEN_LOG,
        "GET"
    );
    return data;
}

async function getLoginMethods() {
    let isTataNeuEnabled = JSON.parse(process.env.IS_TATANUE_ENABLED);
    let isNeuCoinEnabled = JSON.parse(process.env.isNeuCoinEnabled);
     let cipherKey = process.env.cipherKey;
    let schemes = process.env.TANISHQ_SCHEMES;
    let TanishqSchemes = [];
    schemes.split("_").forEach((scheme, index) => {
        TanishqSchemes.push({ tabIndex: index, tabIdentifier: scheme })
    });
    return {
        data: { isTataNeuEnabled, isNeuCoinEnabled, cipherKey, TanishqSchemes }
    };
}

async function updateVisitorId(user) {
    await updateUser(user);
    return { data: { message: "SUCCESS" } };
}

async function getConfig() {
    let keyToEncrypt = process.env.keyToEncrypt;
    let showLiveChat = process.env.showLiveChat;
    let manulCoachMarkFlag = process.env.manulCoachMarkFlag;
    return {
        data: { keyToEncrypt, showLiveChat, manulCoachMarkFlag }
    };
}

module.exports = {
    storeSupportedCurrencies, logsplashScreen, espotPolicies, getLoginMethods, updateVisitorId, getConfig
};
