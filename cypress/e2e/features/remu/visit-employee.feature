Feature: Visit employee

Background: 
    Given I enter in to the login from page
    And I login with the valid username
    And I should be successfully logged in

Scenario: Visit employee
    When I search for employees 
    Then I should see the vacations 