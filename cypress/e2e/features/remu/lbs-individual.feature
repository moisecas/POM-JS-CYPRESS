Feature: Generate lbs individual

Background: 
    Given I enter in to the login from page
    And I login with the valid username
    And I should be successfully logged in

Scenario: Generate lbs individual for employee 
    When I search for the employee and select them
    Then I enter their record to generate their individual LBS

    