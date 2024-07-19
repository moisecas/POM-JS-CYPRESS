Feature: Navigate to advance payment assistant

Background: 
    Given I enter in to the login from page
    And I login with the valid username
    And I should be successfully logged in

Scenario: Open the advance page 
    When I go to the payments assistant section advance
    Then I should be loaded onto the advance page 