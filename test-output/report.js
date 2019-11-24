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
  "name": "enters the \"tester678\" and \"tester678\" for new contact",
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
  "status": "passed"
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
  "status": "passed"
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