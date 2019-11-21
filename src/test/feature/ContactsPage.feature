Feature: To validate contents of Contacts Page and the functionality associated with it

  Background:
    Given user has launched the browser and entered the URL
    And Enters the "amitbhabra" and "Testdirector_1"
    And Click on Login Button
    Then User clicks on New Contacts link

  Scenario Outline: Validate the user is able to create a new Contact
    Given User is on the New Contact Page
    And enters the "<firstName>" and "<lastName>" for new contact
    Then new contact should be created

    Examples:
      | firstName | lastName  |
      | tester123 | tester123 |
      | tester345 | tester345 |
      | tester678 | tester678 |
      | tester901 | tester901 |