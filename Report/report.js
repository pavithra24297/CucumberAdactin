$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
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
  "duration": 570000,
  "status": "passed"
});
formatter.before({
  "duration": 10997300,
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
  "duration": 898876200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 41900,
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
  "duration": 7645337800,
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
  "duration": 3032516800,
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
  "duration": 372033000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_click_on_login_button()"
});
formatter.result({
  "duration": 7108069200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_confirms_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 56600,
  "status": "passed"
});
formatter.after({
  "duration": 135300,
  "status": "passed"
});
formatter.after({
  "duration": 1532200,
  "status": "passed"
});
formatter.before({
  "duration": 137000,
  "status": "passed"
});
formatter.before({
  "duration": 57000,
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
  "duration": 37400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 36500,
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
  "duration": 2637431500,
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
  "duration": 2417757800,
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
  "duration": 206024100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_click_on_login_button()"
});
formatter.result({
  "duration": 7324093600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_confirms_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 34000,
  "status": "passed"
});
formatter.after({
  "duration": 84400,
  "status": "passed"
});
formatter.after({
  "duration": 67300,
  "status": "passed"
});
formatter.before({
  "duration": 127600,
  "status": "passed"
});
formatter.before({
  "duration": 129400,
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
  "duration": 43100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 30100,
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
  "duration": 2655937000,
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
  "duration": 2361606200,
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
  "duration": 188486000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_click_on_login_button()"
});
formatter.result({
  "duration": 7786828100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_confirms_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 68100,
  "status": "passed"
});
formatter.after({
  "duration": 103900,
  "status": "passed"
});
formatter.after({
  "duration": 65300,
  "status": "passed"
});
formatter.before({
  "duration": 279600,
  "status": "passed"
});
formatter.before({
  "duration": 172400,
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
  "duration": 42600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 66600,
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
  "duration": 4005865100,
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
  "duration": 2309788700,
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
  "duration": 1599744500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_click_on_login_button()"
});
formatter.result({
  "duration": 7146517900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_confirms_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 44900,
  "status": "passed"
});
formatter.after({
  "duration": 81900,
  "status": "passed"
});
formatter.after({
  "duration": 46000,
  "status": "passed"
});
formatter.before({
  "duration": 115100,
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
  "duration": 85200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 64100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User checks the search function hotel",
  "description": "",
  "id": "testing-booking-functionality-on-adactin-application;user-checks-the-search-function-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User already logged in and is in booking page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User selects the Location  in the location field",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User selects the Hoteloption  in the hotel field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User selects the Roomtype in the roomtype field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User selects the room in the room field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User selects the Adults room in the adults field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User selects the child room in the child field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User Clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User Confirms that the search is carried out successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User clicks on radio button to agree to terms and conditions",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "The user confirms the confirmation is successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefintion.user_already_logged_in_and_is_in_booking_page()"
});
formatter.result({
  "duration": 108100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_Location_in_the_location_field()"
});
formatter.result({
  "duration": 452993900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_Hoteloption_in_the_hotel_field()"
});
formatter.result({
  "duration": 115589800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_Roomtype_in_the_roomtype_field()"
});
formatter.result({
  "duration": 106474400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_room_in_the_room_field()"
});
formatter.result({
  "duration": 104318100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_Adults_room_in_the_adults_field()"
});
formatter.result({
  "duration": 104803200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_child_room_in_the_child_field()"
});
formatter.result({
  "duration": 102179200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_Clicks_on_submit_button()"
});
formatter.result({
  "duration": 6629793800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_Confirms_that_the_search_is_carried_out_successfully()"
});
formatter.result({
  "duration": 29000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_clicks_on_radio_button_to_agree_to_terms_and_conditions()"
});
formatter.result({
  "duration": 5205173200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_clicks_on_continue_button()"
});
formatter.result({
  "duration": 6657937900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.the_user_confirms_the_confirmation_is_successfull()"
});
formatter.result({
  "duration": 41800,
  "status": "passed"
});
formatter.after({
  "duration": 94100,
  "status": "passed"
});
formatter.before({
  "duration": 114500,
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
  "duration": 40000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 29900,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "User checks the booking function using valid credentials",
  "description": "",
  "id": "testing-booking-functionality-on-adactin-application;user-checks-the-booking-function-using-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "the page is already partially autopopulated and the rest dropdown to be filled",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User enters the firstname \"\u003cPavithraN\u003e\" in the firstname field",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "User enters the lastname \"\u003clakshmi\u003e\" in the lastname field",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User enters the address \"\u003cNo.5/3 Raman Avenue flats\u003e\" in the address field",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User enters the valid Credit card number \"\u003c2345678881234567\u003e\" field",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User selects the card type \"\u003cVISA\u003e\" in the cardtype  field",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User selects the card expiry month \"\u003c2\u003e\" in month field",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User selects the card expiry year \"\u003c2020\u003e\" in the year field",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User enters the valid Cvv number \"\u003c2426\u003e\" in the number field",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User clicks on book now button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User clicks on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User is logged out and is navigated back to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefintion.the_page_is_already_partially_autopopulated_and_the_rest_dropdown_to_be_filled()"
});
formatter.result({
  "duration": 44900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cPavithraN\u003e",
      "offset": 27
    }
  ],
  "location": "StepDefintion.user_enters_the_firstname_in_the_firstname_field(String)"
});
formatter.result({
  "duration": 410685200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clakshmi\u003e",
      "offset": 26
    }
  ],
  "location": "StepDefintion.user_enters_the_lastname_in_the_lastname_field(String)"
});
formatter.result({
  "duration": 263780200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cNo.5/3 Raman Avenue flats\u003e",
      "offset": 25
    }
  ],
  "location": "StepDefintion.user_enters_the_address_in_the_address_field(String)"
});
formatter.result({
  "duration": 520877800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c2345678881234567\u003e",
      "offset": 42
    }
  ],
  "location": "StepDefintion.user_enters_the_valid_Credit_card_number_field(String)"
});
formatter.result({
  "duration": 399580700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cVISA\u003e",
      "offset": 28
    }
  ],
  "location": "StepDefintion.user_selects_the_card_type_in_the_cardtype_field(String)"
});
formatter.result({
  "duration": 383314700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c2\u003e",
      "offset": 36
    }
  ],
  "location": "StepDefintion.user_selects_the_card_expiry_month_in_month_field(String)"
});
formatter.result({
  "duration": 452651500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c2020\u003e",
      "offset": 35
    }
  ],
  "location": "StepDefintion.user_selects_the_card_expiry_year_in_the_year_field(String)"
});
formatter.result({
  "duration": 631051100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c2426\u003e",
      "offset": 34
    }
  ],
  "location": "StepDefintion.user_enters_the_valid_Cvv_number_in_the_number_field(String)"
});
formatter.result({
  "duration": 1933368500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_clicks_on_book_now_button()"
});
formatter.result({
  "duration": 1092882400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_clicks_on_logout_button()"
});
formatter.result({
  "duration": 1145203800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_is_logged_out_and_is_navigated_back_to_login_page()"
});
formatter.result({
  "duration": 34748000,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[]\u003e but was:\u003c[   ]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.adactin.stepdefintion.StepDefintion.user_is_logged_out_and_is_navigated_back_to_login_page(StepDefintion.java:315)\r\n\tat ✽.Then User is logged out and is navigated back to login page(src/test/java/com/adactin/feature/Adactin.feature:52)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 151600,
  "status": "passed"
});
});