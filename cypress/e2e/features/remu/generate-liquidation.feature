Feature: Generate liquidation 

Background:
     Given I am logged in and prepared to generate liquidation

Scenario: Generate liquidation for employees 
    When I complete the liquidation steps
    Then I should visualize the print liquidations button 