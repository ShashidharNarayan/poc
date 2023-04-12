'use strict';
const { loadHomeScreen, loadHomePage, loadPdpPromisesLog, loadHomeLandingPage, getGoldRate, getEmiDetails,
searchStores, suggestCity, storeLocatorIAPages, hamburgerMenu, loadEspot, brandStory }  = require("./services/homescreen")
const { storeSupportedCurrencies, espotPolicies, logsplashScreen, 
getLoginMethods, updateVisitorId, getConfig } = require("./services/splashScreen");
const { getJsonErrorResponse, logBuilder } = require("/opt/nodejs/services/utils/util");
const { log } = require("/opt/nodejs/services/utils/logger");
const { PATH } = require("./constants");

module.exports.homescreen = async (event, context) => {
  // log("PRE-PRODUCTION","PRE-PRODUCTION API CALL CONTEXT --->"+ JSON.stringify(context));
  log("PRE-PRODUCTION","PRE-PRODUCTION API CALL EVENT LOGS --->"+ JSON.stringify(event));
  // log("PRE-PRODUCTION","MUID ---> "+ event.headers.muid + " MODEL ---> "+ event.headers.model + " DEVICE TIME ---> "+ event.headers.devicetime);
  let startTime = Date.now();
  const useLogger = (event.stageVariables && event.stageVariables.useLogger) ? event.stageVariables.useLogger : process.env.useLogger;
  let logs = {};
  let apiResponse;
  try {
    const method = event.httpMethod;
    const path = event.path;
    const pathParams = event.pathParameters && event.pathParameters.slotName;
    const pathParameters = event.pathParameters;
    const body = JSON.parse(event.body)
    const queryStringParams = event.queryStringParameters;
   
    if (method === "GET" && (path === PATH.HOMESCREEN)) {
      apiResponse = await loadHomeScreen(event);
    } else if(method === "GET" && path === PATH.PDP_PROMISES_LOG) {
      apiResponse = await loadPdpPromisesLog();
    } else if(method === "GET" && path === PATH.HOME_LANDING_PAGE) {
      apiResponse = await loadHomeLandingPage();
    } else if (method === "GET" && path === PATH.SPLASHSCREEN_ESPOT_POLICIES) {
      apiResponse = await espotPolicies();
    } else if (method === "GET" && path === PATH.SPLASHSCREEN_STORE_SUPPORTED_CURRENCIES) {
      apiResponse = await storeSupportedCurrencies();
    } else if (method === "GET" && path === PATH.SPLASHSCREEN_LOG) {
      apiResponse = await logsplashScreen();
    } else if(method === "GET" && event.resource === PATH.HOMESCREEN_SLOT_DETAILS) {
      apiResponse = await loadHomePage(pathParams);
    } else if (method === "GET" && path === PATH.SPLASHSCREEN_LOGIN_METHOD) {
      apiResponse = await getLoginMethods();
    } else if (method === "POST" && path === PATH.SPLASHSCREEN_VISITOR_ID) {
      apiResponse = await updateVisitorId(body);
    } else if (method === "GET" && path === PATH.SPLASHSCREEN_CONFIG) {
      apiResponse = await getConfig();
    } else if(method === "GET" && path === PATH.GOLD_RATE) {
      apiResponse = await getGoldRate(event);
    } else if(method === "GET" && path === PATH.EMI_DETAILS) {
      apiResponse = await getEmiDetails(event);
    } else if (method === 'GET' && path == PATH.STORE_LOCATOR_SUGGEST_CITY) {
      apiResponse = await suggestCity({ queryStringParams });
    } else if (method === 'GET' && path == PATH.STORE_LOCATOR_SEARCH_STORES) {
      apiResponse = await searchStores({ queryStringParams });
    } else if (method === "POST" && path == PATH.STORE_LOCATOR_IA_PAGES) {
      apiResponse = await storeLocatorIAPages({ body });
    } else if (method === 'GET' && path == PATH.HAMBURGER_MENU) {
      apiResponse = await hamburgerMenu();
    } else if (method === "POST" && path === PATH.PRODUCT_MGMT_LOADESPOT) {
      apiResponse = await loadEspot(body);
    } else if(method === "GET" && (event.resource === PATH.BRAND_STORY)) {
      apiResponse = await brandStory(pathParameters);
    }
    
    logs = apiResponse && apiResponse.data && apiResponse.data.log || {};
    Object.keys(logs).length && delete apiResponse.data.log;
    let resp;
    if (apiResponse) {
      resp = (path != PATH.STORE_LOCATOR_IA_PAGES) ? JSON.stringify(apiResponse.data) : apiResponse.data;
    }
    return {
      statusCode: apiResponse.status,
      body: resp,
    };
  } catch (err) {
    logs.error = JSON.stringify(err); 
    return getJsonErrorResponse(err.code);
  } finally {
    logs.request_time = Date.now() - startTime;
    if (apiResponse && apiResponse.data) {
      logs.response = JSON.stringify(apiResponse.data);
    }
    if (useLogger) {
      logBuilder({ event, logs, context });
    }
  }

};