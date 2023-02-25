Feature: All

  Scenario: Shows a list of people and teams in an organisation
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
      | name               | title                 |
      | Anita N Smith      | CEO                   |
      | Jeremy Tamsin      | Executive Assistant   |
      | Yarik Aina         | CPO                   |
      | Juliet Boban       | Senior Talent Manager |
      | Mao Josie          | CFO                   |
      | Ebba Titus         | Finance Admin         |
      | Carson Rodriguez   | Finance Admin         |
      | Itzel Leonard      | New Business          |
      | Paulina Rice       | CTO                   |
      | Damon Ross         | Business Head         |
      | Rhys Wolfe         | Business Head         |
      | Mathias Rowland    | Product Owner         |
      | Cosme Calvo        | Product Owner         |
      | Marshall Schaefer  | Product Owner         |
      | Bentley French     | Designer              |
      | Harper Guerra      | Designer              |
      | Inés Ferrer        | Designer              |
      | Aurora Cantu       | Designer              |
      | Cayden Smith       | Designer              |
      | Drake Collins      | Designer              |
      | Ricardo Crespo     | Designer              |
      | Mara Welch         | Designer              |
      | Slade Logan        | Copywriter            |
      | Jovany Coffey      | Copywriter            |
      | Jaydon Dennis      | Copywriter            |
      | Daniel Santiago    | Copywriter            |
      | Arnav Lam          | Copywriter            |
      | Dax Joyce          | Copywriter            |
      | Aitor Peña         | Copywriter            |
      | Marcos Durán       | Developer             |
      | Damon Kaufman      | Developer             |
      | Ifigenia Serrano   | Developer             |
      | Arturo Marín       | Developer             |
      | Carolina Velasquez | Developer             |
      | Nehemiah Murphy    | Developer             |
      | Marco Marks        | Developer             |
      | Leandro Ortiz      | Developer             |
      | Armando Mejia      | Developer             |
      | Alberto Gregory    | Developer             |
      | Amirah Sheppard    | Developer             |
      | Chaim Hawkins      | Developer             |
      | Makenna Lucas      | Developer             |
      | Dorian Osborne     | Developer             |
      | Lucía Cambil       | Developer             |
      | Eduvigis Fernández | Developer             |
      | Aaron Wise         | Developer             |
      | Dayanara Rosario   | Developer             |
      | Amya Greene        | Developer             |
      | Marin Terrell      | Developer             |
      | Jamie Ashley       | Developer             |
      | Dominique Burke    | Developer             |
      | Ascensión Cortés   | Developer             |
      | Darien Novak       | Developer             |

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