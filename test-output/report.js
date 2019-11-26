$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:ContactsPage.feature");
formatter.feature({
  "name": "To validate contents of Contacts Page and the functionality associated with it",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate the user is able to create a new Contact",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on the New Contact Page",
  "keyword": "Given "
});
formatter.step({
  "name": "enters the \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\" for new contact",
  "keyword": "And "
});
formatter.step({
  "name": "new contact should be created",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "tester123",
        "tester123"
      ]
    },
    {
      "cells": [
        "tester345",
        "tester345"
      ]
    },
    {
      "cells": [
        "tester678",
        "tester678"
      ]
    },
    {
      "cells": [
        "tester901",
        "tester901"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters the \"amitbhabra\" and \"Testdirector_1\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.enterUNAndPWTest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.clickLoginBttnTest()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom tab crashed\n  (Session info: chrome\u003d78.0.3904.70)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LATITUDE_E7240\u0027, ip: \u0027169.254.114.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: /tmp/.com.google.Chrome.OKpY73}, goog:chromeOptions: {debuggerAddress: localhost:40311}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: bdc8a7112c58e3287ca96f27a0e...}\nSession ID: bdc8a7112c58e3287ca96f27a0e2f1e6\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.submit(RemoteWebElement.java:88)\r\n\tat com.qa.Pages.LandingPage.clickLoginBttn(LandingPage.java:59)\r\n\tat com.qa.TestPages.LandingPageTest.clickLoginBttnTest(LandingPageTest.java:60)\r\n\tat ✽.Click on Login Button(file:ContactsPage.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on New Contacts link",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTest.clickOnNewContactsLinkTest()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate the user is able to create a new Contact",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on the New Contact Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactsPageTest.validateUserOnContactsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters the \"tester123\" and \"tester123\" for new contact",
  "keyword": "And "
});
formatter.match({
  "location": "ContactsPageTest.enterContactInformationTest(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "new contact should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsPageTest.isNewContactCreatedTest()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters the \"amitbhabra\" and \"Testdirector_1\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.enterUNAndPWTest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.clickLoginBttnTest()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d78.0.3904.70)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LATITUDE_E7240\u0027, ip: \u0027169.254.114.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: /tmp/.com.google.Chrome.NknD3o}, goog:chromeOptions: {debuggerAddress: localhost:39543}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: 8bb29a0bbd5a5f431785bbc7510...}\nSession ID: 8bb29a0bbd5a5f431785bbc7510c540f\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.submit(RemoteWebElement.java:88)\r\n\tat com.qa.Pages.LandingPage.clickLoginBttn(LandingPage.java:59)\r\n\tat com.qa.TestPages.LandingPageTest.clickLoginBttnTest(LandingPageTest.java:60)\r\n\tat ✽.Click on Login Button(file:ContactsPage.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on New Contacts link",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTest.clickOnNewContactsLinkTest()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate the user is able to create a new Contact",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on the New Contact Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactsPageTest.validateUserOnContactsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters the \"tester345\" and \"tester345\" for new contact",
  "keyword": "And "
});
formatter.match({
  "location": "ContactsPageTest.enterContactInformationTest(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "new contact should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsPageTest.isNewContactCreatedTest()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters the \"amitbhabra\" and \"Testdirector_1\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.enterUNAndPWTest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.clickLoginBttnTest()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d78.0.3904.70)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LATITUDE_E7240\u0027, ip: \u0027169.254.114.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: /tmp/.com.google.Chrome.fMCRYR}, goog:chromeOptions: {debuggerAddress: localhost:41439}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: 5cb59a11645ced6c0f1f37bf72d...}\nSession ID: 5cb59a11645ced6c0f1f37bf72dd509b\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.submit(RemoteWebElement.java:88)\r\n\tat com.qa.Pages.LandingPage.clickLoginBttn(LandingPage.java:59)\r\n\tat com.qa.TestPages.LandingPageTest.clickLoginBttnTest(LandingPageTest.java:60)\r\n\tat ✽.Click on Login Button(file:ContactsPage.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on New Contacts link",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTest.clickOnNewContactsLinkTest()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate the user is able to create a new Contact",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on the New Contact Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactsPageTest.validateUserOnContactsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters the \"tester678\" and \"tester678\" for new contact",
  "keyword": "And "
});
formatter.match({
  "location": "ContactsPageTest.enterContactInformationTest(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "new contact should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsPageTest.isNewContactCreatedTest()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters the \"amitbhabra\" and \"Testdirector_1\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.enterUNAndPWTest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.clickLoginBttnTest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on New Contacts link",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTest.clickOnNewContactsLinkTest()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the user is able to create a new Contact",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on the New Contact Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactsPageTest.validateUserOnContactsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the \"tester901\" and \"tester901\" for new contact",
  "keyword": "And "
});
formatter.match({
  "location": "ContactsPageTest.enterContactInformationTest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new contact should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsPageTest.isNewContactCreatedTest()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:DealsPage.feature");
formatter.feature({
  "name": "To Test the Deals Page Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters the \"amitbhabra\" and \"Testdirector_1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPageTest.enterUNAndPWTest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.clickLoginBttnTest()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d78.0.3904.70)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LATITUDE_E7240\u0027, ip: \u0027169.254.114.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: /tmp/.com.google.Chrome.rT3wX0}, goog:chromeOptions: {debuggerAddress: localhost:39041}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: 168a2a931d82c5796491f34f75d...}\nSession ID: 168a2a931d82c5796491f34f75d2323e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.submit(RemoteWebElement.java:88)\r\n\tat com.qa.Pages.LandingPage.clickLoginBttn(LandingPage.java:59)\r\n\tat com.qa.TestPages.LandingPageTest.clickLoginBttnTest(LandingPageTest.java:60)\r\n\tat ✽.Click on Login Button(file:DealsPage.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on Deals New Deals Link",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageTest.dealLinksTest()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate that user is able to create a new Deal",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "user is on the Deals Page",
  "keyword": "Given "
});
formatter.match({
  "location": "DealsPageTest.user_is_on_the_Deals_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the details for the Deals",
  "rows": [
    {
      "cells": [
        "Mr.",
        "Testing Ltd",
        "Kumar amit",
        "100",
        "20",
        "10"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DealsPageTest.user_enters_the_details_for_the_Deals(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Clicks on Save button to create deal",
  "keyword": "And "
});
formatter.match({
  "location": "DealsPageTest.clicks_on_Save_button_to_create_deal()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters the \"amitbhabra\" and \"Testdirector_1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPageTest.enterUNAndPWTest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.clickLoginBttnTest()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d78.0.3904.70)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LATITUDE_E7240\u0027, ip: \u0027169.254.114.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: /tmp/.com.google.Chrome.bymJwe}, goog:chromeOptions: {debuggerAddress: localhost:36685}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: 7288945fe75e8d72f1ac808365f...}\nSession ID: 7288945fe75e8d72f1ac808365f3959f\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.submit(RemoteWebElement.java:88)\r\n\tat com.qa.Pages.LandingPage.clickLoginBttn(LandingPage.java:59)\r\n\tat com.qa.TestPages.LandingPageTest.clickLoginBttnTest(LandingPageTest.java:60)\r\n\tat ✽.Click on Login Button(file:DealsPage.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on Deals New Deals Link",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageTest.dealLinksTest()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate that user is able to create new Deals",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "user is on the Deals Page",
  "keyword": "Given "
});
formatter.match({
  "location": "DealsPageTest.user_is_on_the_Deals_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the details for the Deals and click on Save",
  "rows": [
    {
      "cells": [
        "Title",
        "Company",
        "Primary Contact",
        "Amount",
        "Probability",
        "Commission"
      ]
    },
    {
      "cells": [
        "Mr.",
        "Testing Ltd",
        "Kumar amit",
        "100",
        "20",
        "10"
      ]
    },
    {
      "cells": [
        "Mr.",
        "Testing Lt1",
        "Kumar amit",
        "100",
        "20",
        "10"
      ]
    },
    {
      "cells": [
        "Mr.",
        "Testing Lt2",
        "Kumar amit",
        "100",
        "20",
        "10"
      ]
    },
    {
      "cells": [
        "Mr.",
        "Testing Lt3",
        "Kumar amit",
        "100",
        "20",
        "10"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DealsPageTest.userEntersTheDetailsForTheDealsAndClickOnSave(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:HomePage.feature");
formatter.feature({
  "name": "To test the Home Page content and Layout and the functionality associated with it",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters the \"amitbhabra\" and \"Testdirector_1\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.enterUNAndPWTest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.clickLoginBttnTest()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check the title of the Home Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "Home Page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTest.validateTitleHomePageTest()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters the \"amitbhabra\" and \"Testdirector_1\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.enterUNAndPWTest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.clickLoginBttnTest()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Logged in User details are getting displayed",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Logged in User name should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTest.isUserNameDisplayedTest()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters the \"amitbhabra\" and \"Testdirector_1\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.enterUNAndPWTest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.clickLoginBttnTest()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Calendar link is enabled and user Click on it",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks on Calendar Link",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTest.calendarLinkTest()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters the \"amitbhabra\" and \"Testdirector_1\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.enterUNAndPWTest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.clickLoginBttnTest()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d78.0.3904.70)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LATITUDE_E7240\u0027, ip: \u0027169.254.114.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: /tmp/.com.google.Chrome.tePKUy}, goog:chromeOptions: {debuggerAddress: localhost:43487}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: 1dcb62e4d929f3809175e2008ed...}\nSession ID: 1dcb62e4d929f3809175e2008ed2d820\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.submit(RemoteWebElement.java:88)\r\n\tat com.qa.Pages.LandingPage.clickLoginBttn(LandingPage.java:59)\r\n\tat com.qa.TestPages.LandingPageTest.clickLoginBttnTest(LandingPageTest.java:60)\r\n\tat ✽.Click on Login Button(file:HomePage.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validate the Companies link is enabled and user Click on it",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks on Companies Link",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTest.companiesLinkTest()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters the \"amitbhabra\" and \"Testdirector_1\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.enterUNAndPWTest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.clickLoginBttnTest()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d78.0.3904.70)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LATITUDE_E7240\u0027, ip: \u0027169.254.114.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: /tmp/.com.google.Chrome.O6lap3}, goog:chromeOptions: {debuggerAddress: localhost:39415}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: 2d9bc3ffbf3891a6a7007cb1968...}\nSession ID: 2d9bc3ffbf3891a6a7007cb19689cee9\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.submit(RemoteWebElement.java:88)\r\n\tat com.qa.Pages.LandingPage.clickLoginBttn(LandingPage.java:59)\r\n\tat com.qa.TestPages.LandingPageTest.clickLoginBttnTest(LandingPageTest.java:60)\r\n\tat ✽.Click on Login Button(file:HomePage.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validate the Contacts link is enabled and user Click on Contacts Link",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks on Contacts Link",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTest.contactLinksTest()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters the \"amitbhabra\" and \"Testdirector_1\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.enterUNAndPWTest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.clickLoginBttnTest()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d78.0.3904.70)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LATITUDE_E7240\u0027, ip: \u0027169.254.114.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: /tmp/.com.google.Chrome.k69g22}, goog:chromeOptions: {debuggerAddress: localhost:45339}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: 28a08a0ddbd4e2aabbc17056830...}\nSession ID: 28a08a0ddbd4e2aabbc1705683048089\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.submit(RemoteWebElement.java:88)\r\n\tat com.qa.Pages.LandingPage.clickLoginBttn(LandingPage.java:59)\r\n\tat com.qa.TestPages.LandingPageTest.clickLoginBttnTest(LandingPageTest.java:60)\r\n\tat ✽.Click on Login Button(file:HomePage.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validate the Deals link is enabled and user Click on Deals Link",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks on Deals Link",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters the \"amitbhabra\" and \"Testdirector_1\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.enterUNAndPWTest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.clickLoginBttnTest()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d78.0.3904.70)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LATITUDE_E7240\u0027, ip: \u0027169.254.114.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: /tmp/.com.google.Chrome.iRcGSe}, goog:chromeOptions: {debuggerAddress: localhost:44279}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: 7acd82455ad75801f9dc77e78ef...}\nSession ID: 7acd82455ad75801f9dc77e78ef66b84\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.submit(RemoteWebElement.java:88)\r\n\tat com.qa.Pages.LandingPage.clickLoginBttn(LandingPage.java:59)\r\n\tat com.qa.TestPages.LandingPageTest.clickLoginBttnTest(LandingPageTest.java:60)\r\n\tat ✽.Click on Login Button(file:HomePage.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validate the Contacts link is enabled and user is able to Click on New Contacts Link",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks on New Contacts link",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTest.clickOnNewContactsLinkTest()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:LandingPage.feature");
formatter.feature({
  "name": "Check the Landing Page Layout and title",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check the Landing Page Layout and options that are getting displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Landing Page having title should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPageTest.homePageTitleTest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Options for UN and Password should be displayed and enabled",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.optionForLoginTest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login button should be enabled",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.isLoginBttnEnabledTest()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Operator is able to enter the username and Password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters the \"amitbhabra\" and \"Testdirector_1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPageTest.enterUNAndPWTest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.clickLoginBttnTest()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Operator is able to enter the username and Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enters the \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "amitbhabra",
        "Testdirector_1"
      ]
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Operator is able to enter the username and Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters the \"amitbhabra\" and \"Testdirector_1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPageTest.enterUNAndPWTest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.clickLoginBttnTest()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Operator is able to enter the username and Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters the \"naveenk\" and \"test@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPageTest.enterUNAndPWTest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.clickLoginBttnTest()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});