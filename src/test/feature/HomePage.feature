Feature: To test the Home Page content and Layout and the functionality associated with it

  Background:
    Given user has launched the browser and entered the URL
    And Enters the "amitbhabra" and "Testdirector_1"
    And Click on Login Button

  Scenario: Check the title of the Home Page
    Then Home Page should be displayed

  Scenario: Logged in User details are getting displayed
    Then Logged in User name should be displayed

  Scenario: Validate the Calendar link is enabled and user Click on it
    Then User clicks on Calendar Link

  Scenario: Validate the Companies link is enabled and user Click on it
    Then User clicks on Companies Link

  Scenario: Validate the Contacts link is enabled and user Click on Contacts Link
    Then User clicks on Contacts Link

  Scenario: Validate the Deals link is enabled and user Click on Deals Link
    Then User clicks on Deals Link

  Scenario: Validate the Contacts link is enabled and user is able to Click on New Contacts Link
    Then User clicks on New Contacts link