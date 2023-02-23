Feature: All

  Scenario: Shows a list of people in an organisation
    Given the selected organisation is "ACME"
    When the user visits the "Home" page
    Then the "ACME" heading should be visible
    And the following list of people should be visible
      | name          |
      | Anita N Smith |
      | Jeremy Tamsin |
      | Yarik Aina    |
      | Juliet Boban  |
      | Mao Josie     |
      | Ebba Titus    |
