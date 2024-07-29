Feature: Generate lbs individual

Background: 
    Given I enter in to the login from page
    And I login with the valid username
    And I should be successfully logged in

Scenario: Generate lbs individual for employee 
    When I search for employees and generate LBS for each
    Then I should see the confirmation message

    