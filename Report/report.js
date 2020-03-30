$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Booking functionality on adactin application",
  "description": "",
  "id": "testing-booking-functionality-on-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "User checking the login function using valid username and valid password",
  "description": "",
  "id": "testing-booking-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enter valid username \"\u003cusername\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter valid password \"\u003cpassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User confirms that it navigates to the homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "testing-booking-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 17,
      "id": "testing-booking-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;1"
    },
    {
      "cells": [
        "111",
        "AAA"
      ],
      "line": 18,
      "id": "testing-booking-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;2"
    },
    {
      "cells": [
        "222",
        "BBB"
      ],
      "line": 19,
      "id": "testing-booking-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;3"
    },
    {
      "cells": [
        "333",
        "CCC"
      ],
      "line": 20,
      "id": "testing-booking-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;4"
    },
    {
      "cells": [
        "PavithraN",
        "Pavi@2426"
      ],
      "line": 21,
      "id": "testing-booking-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 287255,
  "status": "passed"
});
formatter.before({
  "duration": 1073964,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefintion.the_User_is_logged_in()"
});
formatter.result({
  "duration": 163953050,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 39417,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User checking the login function using valid username and valid password",
  "description": "",
  "id": "testing-booking-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enter valid username \"\u003cusername\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter valid password \"\u003cpassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User confirms that it navigates to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefintion.user_launch_the_application()"
});
formatter.result({
  "duration": 4135983020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 27
    }
  ],
  "location": "StepDefintion.user_enter_valid_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 2267211766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpassword\u003e",
      "offset": 27
    }
  ],
  "location": "StepDefintion.user_enter_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 132584025,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_click_on_login_button()"
});
formatter.result({
  "duration": 1107487616,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_confirms_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 50216,
  "status": "passed"
});
formatter.after({
  "duration": 98271,
  "status": "passed"
});
formatter.after({
  "duration": 3638734,
  "status": "passed"
});
formatter.before({
  "duration": 168465,
  "status": "passed"
});
formatter.before({
  "duration": 143087,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefintion.the_User_is_logged_in()"
});
formatter.result({
  "duration": 29697,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 43737,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User checking the login function using valid username and valid password",
  "description": "",
  "id": "testing-booking-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enter valid username \"\u003cusername\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter valid password \"\u003cpassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User confirms that it navigates to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefintion.user_launch_the_application()"
});
formatter.result({
  "duration": 2415863129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 27
    }
  ],
  "location": "StepDefintion.user_enter_valid_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 2129395071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpassword\u003e",
      "offset": 27
    }
  ],
  "location": "StepDefintion.user_enter_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 147441871,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_click_on_login_button()"
});
formatter.result({
  "duration": 831992453,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_confirms_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 40496,
  "status": "passed"
});
formatter.after({
  "duration": 180884,
  "status": "passed"
});
formatter.after({
  "duration": 246758,
  "status": "passed"
});
formatter.before({
  "duration": 798588,
  "status": "passed"
});
formatter.before({
  "duration": 156586,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefintion.the_User_is_logged_in()"
});
formatter.result({
  "duration": 30238,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 22138,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User checking the login function using valid username and valid password",
  "description": "",
  "id": "testing-booking-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enter valid username \"\u003cusername\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter valid password \"\u003cpassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User confirms that it navigates to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefintion.user_launch_the_application()"
});
formatter.result({
  "duration": 2454355195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 27
    }
  ],
  "location": "StepDefintion.user_enter_valid_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 2171113348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpassword\u003e",
      "offset": 27
    }
  ],
  "location": "StepDefintion.user_enter_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 121100875,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_click_on_login_button()"
});
formatter.result({
  "duration": 843138133,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_confirms_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 47516,
  "status": "passed"
});
formatter.after({
  "duration": 126889,
  "status": "passed"
});
formatter.after({
  "duration": 55615,
  "status": "passed"
});
formatter.before({
  "duration": 116090,
  "status": "passed"
});
formatter.before({
  "duration": 126348,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefintion.the_User_is_logged_in()"
});
formatter.result({
  "duration": 57235,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 29157,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User checking the login function using valid username and valid password",
  "description": "",
  "id": "testing-booking-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enter valid username \"\u003cusername\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter valid password \"\u003cpassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User confirms that it navigates to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefintion.user_launch_the_application()"
});
formatter.result({
  "duration": 2451621421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 27
    }
  ],
  "location": "StepDefintion.user_enter_valid_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 2154175607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpassword\u003e",
      "offset": 27
    }
  ],
  "location": "StepDefintion.user_enter_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 123161870,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_click_on_login_button()"
});
formatter.result({
  "duration": 949508050,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_confirms_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 27537,
  "status": "passed"
});
formatter.after({
  "duration": 118789,
  "status": "passed"
});
formatter.after({
  "duration": 71274,
  "status": "passed"
});
});