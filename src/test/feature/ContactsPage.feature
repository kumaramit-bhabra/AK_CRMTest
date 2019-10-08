Feature: To validate contents of Contacts Page and the functionality associated with it

  Background:
    Given user has launched the browser and entered the URL
    And Enters the Username and Password
    And Click on Login Button
    Then User clicks on New Contacts link

    Scenario: Validate the user is able to create a new Contact
      Given User is on the New Contact Page
      And enters the information for new contact
      Then new contact should be created
