Feature: Check the Landing Page Layout and title

#  @Before
#  Scenario: User has launched the browser and entered the URL
#  Given user has launched the browser and entered the URL

@SmokeTest
  Scenario: Check the Landing Page Layout and options that are getting displayed
    Then Landing Page having title should be displayed
    And Options for UN and Password should be displayed and enabled
    And Login button should be enabled

@SmokeTest
#  Without Examples keyword
 Scenario: Operator is able to enter the username and Password
   Then Enters the "amitbhabra" and "Testdirector_1"
   And Click on Login Button

# With Examples keyword
  Scenario Outline: Operator is able to enter the username and Password
    Then Enters the "<UserName>" and "<Password>"
    And Click on Login Button
      Examples:
      | UserName   | Password       |
      | amitbhabra | Testdirector_1 |
      | naveenk    | test@123       |

#    @After
#    Scenario: Close the browser
#      Then Closes the browser