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
      | name               |
      | Anita N Smith      |
      | Jeremy Tamsin      |
      | Yarik Aina         |
      | Juliet Boban       |
      | Mao Josie          |
      | Ebba Titus         |
      | Carson Rodriguez   |
      | Itzel Leonard      |
      | Paulina Rice       |
      | Damon Ross         |
      | Rhys Wolfe         |
      | Mathias Rowland    |
      | Cosme Calvo        |
      | Marshall Schaefer  |
      | Bentley French     |
      | Harper Guerra      |
      | Inés Ferrer        |
      | Aurora Cantu       |
      | Cayden Smith       |
      | Drake Collins      |
      | Ricardo Crespo     |
      | Mara Welch         |
      | Slade Logan        |
      | Jovany Coffey      |
      | Jaydon Dennis      |
      | Daniel Santiago    |
      | Arnav Lam          |
      | Dax Joyce          |
      | Aitor Peña         |
      | Marcos Durán       |
      | Damon Kaufman      |
      | Ifigenia Serrano   |
      | Arturo Marín       |
      | Carolina Velasquez |
      | Nehemiah Murphy    |
      | Marco Marks        |
      | Leandro Ortiz      |
      | Armando Mejia      |
      | Alberto Gregory    |
      | Amirah Sheppard    |
      | Chaim Hawkins      |
      | Makenna Lucas      |
      | Dorian Osborne     |
      | Lucía Cambil       |
      | Eduvigis Fernández |
      | Aaron Wise         |
      | Dayanara Rosario   |
      | Amya Greene        |
      | Marin Terrell      |
      | Jamie Ashley       |
      | Dominique Burke    |
      | Ascensión Cortés   |
      | Darien Novak       |

  Scenario: Use search box to filter people by name
    When the user visits the "Home" page
    And they type "b" in the "Search by name" input
    And the following list of people should be visible
      | name            |
      | Juliet Boban    |
      | Ebba Titus      |
      | Bentley French  |
      | Alberto Gregory |
      | Dorian Osborne  |
      | Lucía Cambil    |
      | Dominique Burke |
    And they type "b" in the "Search by name" input
    And the following list of people should be visible
      | name          |
      | Ebba Titus    |
    When they clear the "Search by name" input
    And they type "ANI" in the "Search by name" input
    And the following list of people should be visible
      | name            |
      | Anita N Smith   |
      | Daniel Santiago |