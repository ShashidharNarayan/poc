const ApiManger = require("/opt/nodejs/services/apimanager/apiManager");
const { API } = require("../constants");
const { log } = require("/opt/nodejs/services/utils/logger");

async function loadHomeScreen() {
    const data = await ApiManger.apiCall(
        API.HOMESCREEN,
        "GET",
        null
    );
    return data;
}

async function loadHomePage(slotName) {
    const data = await ApiManger.apiCall(
        API.HOMESCREEN_SLOT_DETAILS + slotName,
        "GET",
        null
    );
    return data;
}

async function loadPdpPromisesLog() {
    const data = await ApiManger.apiCall(
        API.PDP_PROMISES_LOG,
        "GET",
        null
    );
    return data;
}

async function loadHomeLandingPage() {
    const data = await ApiManger.apiCall(
        API.HOME_LANDING_PAGE,
        "GET",
        null
    );
    return data;
}

async function getGoldRate(event) {
    const data = await ApiManger.apiCall(
        API.GOLD_RATE + event.queryStringParameters.name,
        "GET",
        null
    );
    return data;
}

async function getEmiDetails() {
    const data = await ApiManger.apiCall(
        API.EMI_DETAILS,
        "GET",
        null
    );
    return data;
}

async function suggestCity({ queryStringParams }) {
  let URL = API.STORE_LOCATOR_SUGGEST_CITY;
  if (queryStringParams && Object.keys(queryStringParams).length) {
    URL = URL + "?" + new URLSearchParams(queryStringParams).toString();
  }
  return await ApiManger.apiCall(URL, "GET");
}

async function searchStores({ queryStringParams }) {
  let URL = API.STORE_LOCATOR_SEARCH_STORES;
  if (queryStringParams && Object.keys(queryStringParams).length) {
    URL = URL + "?" + new URLSearchParams(queryStringParams).toString();
  }
  return await ApiManger.apiCall(URL, "GET");
}

async function storeLocatorIAPages({ body }) {
    let URL = API.STORE_LOCATOR_IA_PAGES;
    const params = new URLSearchParams();
    
    params.append('username', process.env.IAUserName);
    params.append('passcode', process.env.IAPassCode);
    params.append('storeid', body.storeid);

    return await ApiManger.apiCall(URL, "POST", { "Content-Type": "application/x-www-form-urlencoded" }, params);
}

async function hamburgerMenu() {
  let URL = API.HAMBURGER_MENU;
  const data = await ApiManger.apiCall(
      URL,
      "GET"
  );
  return data;
}

async function loadEspot(body) {
    console.log('loadEspot body--->', typeof (body.urlToLoad));
    let URL = `${process.env.titan_host}${body.urlToLoad}`;
    console.log('request--->', URL);
    const data = await ApiManger.apiCall(
        URL,
        "GET",
        null
    );
    console.log('response loadEspot--->', data);
    return data;
}

async function brandStory(pathParams) {
    let URL = API.BRAND_STORY + pathParams.slotid;
    const data = await ApiManger.apiCall(
        URL,
        "GET",
        null
    );
    return data;
}

module.exports = {
    loadHomeScreen,
    loadHomePage,
    loadPdpPromisesLog,
    loadHomeLandingPage,
    getGoldRate,
    getEmiDetails,
    suggestCity,
    searchStores,
    storeLocatorIAPages,
    hamburgerMenu,
    loadEspot,
    brandStory
};
