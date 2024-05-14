Feature: Login Test

Scenario: Successful login
    Given I am a user with username "remPe"
    When I log in with the username "remPe"
    Then I should be successfully logged in



