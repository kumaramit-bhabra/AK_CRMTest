$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/feature/ContactsPage.feature");
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d78.0.3904.70)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LATITUDE_E7240\u0027, ip: \u0027169.254.114.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: /tmp/.com.google.Chrome.f3MVFV}, goog:chromeOptions: {debuggerAddress: localhost:41601}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: 69957ea3e058cc09ad5b6fadd5b...}\nSession ID: 69957ea3e058cc09ad5b6fadd5b23bf6\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.submit(RemoteWebElement.java:88)\r\n\tat com.qa.Pages.LandingPage.clickLoginBttn(LandingPage.java:59)\r\n\tat com.qa.TestPages.LandingPageTest.clickLoginBttnTest(LandingPageTest.java:60)\r\n\tat ✽.Click on Login Button(file:src/test/feature/ContactsPage.feature:6)\r\n",
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
  "name": "enters the \"tester345\" and \"tester345\" for new contact",
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
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d78.0.3904.70)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LATITUDE_E7240\u0027, ip: \u0027169.254.114.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: /tmp/.com.google.Chrome.Sb1N5D}, goog:chromeOptions: {debuggerAddress: localhost:44569}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: 99deceb23da334a54f8efacb081...}\nSession ID: 99deceb23da334a54f8efacb08117e7e\n*** Element info: {Using\u003dcss selector, value\u003dframe[name\u003d\u0027mainpanel\u0027],iframe[name\u003d\u0027mainpanel\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByCssSelector(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElements(By.java:441)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:878)\r\n\tat com.qa.Pages.HomePage.switchingFrame(HomePage.java:89)\r\n\tat com.qa.Pages.HomePage.clickOnNewContactsLink(HomePage.java:79)\r\n\tat com.qa.TestPages.HomePageTest.clickOnNewContactsLinkTest(HomePageTest.java:56)\r\n\tat ✽.User clicks on New Contacts link(file:src/test/feature/ContactsPage.feature:7)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@_name \u003d \u0027tester901 tester901\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.70)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LATITUDE_E7240\u0027, ip: \u0027169.254.114.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: /tmp/.com.google.Chrome.i9jjCH}, goog:chromeOptions: {debuggerAddress: localhost:38095}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: 925cc0e9bd54d028d768b0bdea7...}\nSession ID: 925cc0e9bd54d028d768b0bdea7c10a8\n*** Element info: {Using\u003dxpath, value\u003d//a[@_name \u003d \u0027tester901 tester901\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.qa.Pages.ContactsPage.validateNewContactCreation(ContactsPage.java:39)\r\n\tat com.qa.TestPages.ContactsPageTest.isNewContactCreatedTest(ContactsPageTest.java:29)\r\n\tat ✽.new contact should be created(file:src/test/feature/ContactsPage.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/feature/DealsPage.feature");
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
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Deals New Deals Link",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageTest.dealLinksTest()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Save button to create deal",
  "keyword": "And "
});
formatter.match({
  "location": "DealsPageTest.clicks_on_Save_button_to_create_deal()"
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
formatter.step({
  "name": "User clicks on Deals New Deals Link",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageTest.dealLinksTest()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
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
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/feature/HomePage.feature");
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
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d78.0.3904.70)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LATITUDE_E7240\u0027, ip: \u0027169.254.114.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: /tmp/.com.google.Chrome.xmGd3h}, goog:chromeOptions: {debuggerAddress: localhost:46419}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: 31649cf739f5f879228e3a1c73f...}\nSession ID: 31649cf739f5f879228e3a1c73fb5ddc\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.submit(RemoteWebElement.java:88)\r\n\tat com.qa.Pages.LandingPage.clickLoginBttn(LandingPage.java:59)\r\n\tat com.qa.TestPages.LandingPageTest.clickLoginBttnTest(LandingPageTest.java:60)\r\n\tat ✽.Click on Login Button(file:src/test/feature/HomePage.feature:6)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d78.0.3904.70)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LATITUDE_E7240\u0027, ip: \u0027169.254.114.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: /tmp/.com.google.Chrome.y7tNSb}, goog:chromeOptions: {debuggerAddress: localhost:39105}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: c593f4cc0d5264bdcf8799b3693...}\nSession ID: c593f4cc0d5264bdcf8799b36937c684\n*** Element info: {Using\u003dxpath, value\u003d//input[@placeholder \u003d \"Username\"]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.qa.Pages.LandingPage.entersUserNameAndPW(LandingPage.java:50)\r\n\tat com.qa.TestPages.LandingPageTest.enterUNAndPWTest(LandingPageTest.java:54)\r\n\tat ✽.Enters the \"amitbhabra\" and \"Testdirector_1\"(file:src/test/feature/HomePage.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageTest.clickLoginBttnTest()"
});
formatter.result({
  "status": "skipped"
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
  "status": "passed"
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
