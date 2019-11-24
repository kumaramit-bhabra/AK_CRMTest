Feature: To Test the Deals Page Functionality

  Background:
    #Given user has launched the browser and entered the URL
    Then Enters the "amitbhabra" and "Testdirector_1"
    And Click on Login Button
    And User clicks on Deals New Deals Link

  @SmokeTest @RegressionTest
  Scenario: Validate that user is able to create a new Deal
    Given user is on the Deals Page
    Then user enters the details for the Deals
      | Mr. | Testing Ltd   |  Kumar amit |  100  | 20 | 10  |
   And Clicks on Save button to create deal

  @RegressionTest
# This is to test the Datatable using Map
  Scenario: Validate that user is able to create new Deals
    Given user is on the Deals Page
    Then user enters the details for the Deals and click on Save
   | Title |  Company     | Primary Contact | Amount  | Probability | Commission  |
   | Mr.   | Testing Ltd  |  Kumar amit     |  100    | 20          | 10          |
   | Mr.   | Testing Lt1  |  Kumar amit     |  100    | 20          | 10          |
   | Mr.   | Testing Lt2  |  Kumar amit     |  100    | 20          | 10          |
   | Mr.   | Testing Lt3  |  Kumar amit     |  100    | 20          | 10          |
