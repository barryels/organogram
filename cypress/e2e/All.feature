Feature: All

  Scenario: Shows a list of people in an organisation
    When the user visits the "Home" page
    Then the "ACME" heading should be visible
    And the following list of teams should be visible
      | name                            |
      | No Lucks Given                  |
      | Agatha Crispy                   |
      | Baking Bad                      |
      | What's Louvre Got to Do With It |
      | We're On Mute                   |
      | Ambitious Bishes                |
      | Down for the Account            |
      | Slack Attack                    |
      | Mission Implausible             |
      | Watching Cat Videos At Work     |
      | Zoom-Crashing Pets              |
    And the following list of people should be visible
      | name          |
      | Anita N Smith |
      | Jeremy Tamsin |
      | Yarik Aina    |
      | Juliet Boban  |
      | Mao Josie     |
      | Ebba Titus    |
