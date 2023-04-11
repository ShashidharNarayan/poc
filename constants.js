"use strict";

module.exports = {
    API: {
        SPLASHSCREEN_ESPOT_POLICIES: `${process.env.titan_host}:443/wps/wcm/connect/mobile_jew_content_lib/sa_pagecomponents/policies`,
        SPLASHSCREEN_STORE_SUPPORTED_CURRENCIES: `${process.env.WCSHost}/wcs/resources/store/10151/configuration?q=byConfigurationIds&responseFormat=json&configurationId=com.ibm.commerce.foundation.supportedCurrencies&langId=-1`,
        SPLASHSCREEN_LOG: `${process.env.titan_host}:443/wps/wcm/connect/mobile_jew_content_lib/sa_pagecomponents/splashscreen`,
        HOMESCREEN: `${process.env.titan_host}:443/wps/wcm/connect/mobile_jew_content_lib/sa_home/sa_pagecomponents/homescreen`,
        HOMESCREEN_SLOT_DETAILS : `${process.env.titan_host}:443/wps/wcm/connect/mobile_jew_content_lib/sa_home/sa_pagecomponents/`,
        PDP_PROMISES_LOG: `${process.env.titan_host}:443/wps/wcm/connect/mobile_jew_content_lib/sa_pagecomponents/pdp_promises`,
        HOME_LANDING_PAGE: `${process.env.titan_host}:443/wps/wcm/connect/mobile_jew_content_lib/sa_template/sa_pagecomponents/tgh_nl`,
        GOLD_RATE: `${process.env.WCSHost}:443/wcs/resources/store/${process.env.store_id}/util/getValues?name=`,
        EMI_DETAILS: `${process.env.WCSHost}:443/wcs/resources/store/${process.env.store_id}/payment/@self/getEMIDetails`,
        HAMBURGER_MENU: `${process.env.titan_host}:443/wps/wcm/connect/mobile_jew_content_lib/sa_pagecomponents/menu`,
        STORE_LOCATOR_SUGGEST_CITY: `${process.env.WCSHost}:443/wcs/resources/store/${process.env.store_id}/citySuggest/byCityName`,
        STORE_LOCATOR_SEARCH_STORES: `${process.env.WCSHost}:443/wcs/resources/store/${process.env.store_id}/storelocator/byCityOrZip`,
        STORE_LOCATOR_IA_PAGES: `${process.env.IAHost}:443/tanishq/storelocator/index_app.php`,
        BRAND_STORY: `${process.env.titan_host}:443/wps/wcm/connect/mobile_jew_content_lib/sa_brandstory/sa_pagecomponents/`,
    },
    PATH: {
        SPLASHSCREEN_ESPOT_POLICIES: "/splashscreen/espotpolicies",
        SPLASHSCREEN_STORE_SUPPORTED_CURRENCIES: "/splashscreen/storesupportedcurrencies",
        SPLASHSCREEN_LOG: "/splashscreen/log",
        HOMESCREEN: "/homescreen",
        HOMESCREEN_SLOT_DETAILS: "/homescreen/{slotName}",
        SPLASHSCREEN_LOGIN_METHOD: "/splashscreen/loginmethod",
        SPLASHSCREEN_VISITOR_ID: "/splashscreen/visitorid",
        PDP_PROMISES_LOG: "/homescreen/pdp_promises",
        HOME_LANDING_PAGE: "/ghs/tgh_nl",
        SPLASHSCREEN_CONFIG: "/splashscreen/config",
        GOLD_RATE: "/goldrate",
        EMI_DETAILS: "/emidetails",
        HAMBURGER_MENU: '/hamburgermenu',
        STORE_LOCATOR_SUGGEST_CITY: "/storeLocator/suggestCity",
        STORE_LOCATOR_SEARCH_STORES: "/storeLocator/searchStores",
        STORE_LOCATOR_IA_PAGES: "/storeLocator/index_app",
        PRODUCT_MGMT_LOADESPOT: "/espot/loadEspot",
        BRAND_STORY: "/brandstory/{slotid}",
    }

};