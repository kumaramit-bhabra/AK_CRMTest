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
  "status": "passed"
});
formatter.step({
  "name": "enters the \"tester123\" and \"tester123\" for new contact",
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
formatter.step({
  "name": "user has launched the browser and entered the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LandingPageTest.setUp()"
});
