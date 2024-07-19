Feature: Navigate to LBS Masive

Background: 
    Given I enter in to the login from page
    And I login with the valid username
    And I should be successfully logged in

Scenario: Open the payment page
    When I go to the payments advanced tools section lbs masive
    Then I should be loaded into the lbs masive