$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:ContactsPage.feature");
formatter.feature({
  "name": "To validate contents of Contacts Page and the functionality associated with it",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate the user is able to create a new Contact",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.step({
  "name": "user has launched the browser and entered the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LandingPageTest.setUp()"
});
formatter.result({
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
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d78.0.3904.108)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LATITUDE_E7240\u0027, ip: \u0027192.168.10.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51516}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 27db47739ee1bf98df35b4b8e72ba8e3\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.submit(RemoteWebElement.java:88)\r\n\tat com.qa.Pages.LandingPage.clickLoginBttn(LandingPage.java:59)\r\n\tat com.qa.TestPages.LandingPageTest.clickLoginBttnTest(LandingPageTest.java:57)\r\n\tat ✽.Click on Login Button(file:ContactsPage.feature:6)\r\n",
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
  "keyword": "Scenario Outline"
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
formatter.step({
  "name": "user has launched the browser and entered the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LandingPageTest.setUp()"
});
formatter.result({
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
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d78.0.3904.108)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LATITUDE_E7240\u0027, ip: \u0027192.168.10.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51608}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0ed730f2bc4ec8e173e3d1d8536703e2\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.submit(RemoteWebElement.java:88)\r\n\tat com.qa.Pages.LandingPage.clickLoginBttn(LandingPage.java:59)\r\n\tat com.qa.TestPages.LandingPageTest.clickLoginBttnTest(LandingPageTest.java:57)\r\n\tat ✽.Click on Login Button(file:ContactsPage.feature:6)\r\n",
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
  "keyword": "Scenario Outline"
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
