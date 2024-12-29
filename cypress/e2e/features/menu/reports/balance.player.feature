Feature: Donwload report balance player

Background:
    Given I enter in to the login from page 
    And I login with the valid username 
    And I should be successfully logged in

Scenario: Generate and download the player balance report
    Given I navigate to the Reports section
    When apply the desired filters 
    Then the report should be downloaded successfully in the selected format


