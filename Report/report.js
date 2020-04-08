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
  "duration": 583600,
  "status": "passed"
});
formatter.before({
  "duration": 1336600,
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
  "duration": 1099949400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 40900,
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
  "duration": 5597742700,
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
  "duration": 2858607800,
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
  "duration": 301364100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_click_on_login_button()"
});
formatter.result({
  "duration": 8031016400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_confirms_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 99500,
  "status": "passed"
});
formatter.after({
  "duration": 91400,
  "status": "passed"
});
formatter.after({
  "duration": 396000,
  "status": "passed"
});
formatter.before({
  "duration": 111500,
  "status": "passed"
});
formatter.before({
  "duration": 103300,
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
  "duration": 38100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 27900,
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
  "duration": 2373126600,
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
  "duration": 2440045300,
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
  "duration": 137758600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_click_on_login_button()"
});
formatter.result({
  "duration": 7112143200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_confirms_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 23500,
  "status": "passed"
});
formatter.after({
  "duration": 88300,
  "status": "passed"
});
formatter.after({
  "duration": 71900,
  "status": "passed"
});
formatter.before({
  "duration": 108800,
  "status": "passed"
});
formatter.before({
  "duration": 122000,
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
  "duration": 26200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 26900,
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
  "duration": 3292476700,
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
  "duration": 2225829400,
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
  "duration": 134719700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_click_on_login_button()"
});
formatter.result({
  "duration": 8712918600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_confirms_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 22100,
  "status": "passed"
});
formatter.after({
  "duration": 74100,
  "status": "passed"
});
formatter.after({
  "duration": 170300,
  "status": "passed"
});
formatter.before({
  "duration": 97700,
  "status": "passed"
});
formatter.before({
  "duration": 68700,
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
  "duration": 27000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 25800,
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
  "duration": 2486995400,
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
  "duration": 2142742800,
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
  "duration": 499476000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_click_on_login_button()"
});
formatter.result({
  "duration": 8509524600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_confirms_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 82000,
  "status": "passed"
});
formatter.after({
  "duration": 751400,
  "status": "passed"
});
formatter.after({
  "duration": 42200,
  "status": "passed"
});
formatter.before({
  "duration": 116500,
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
  "duration": 25600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 28800,
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
  "duration": 101000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_Location_in_the_location_field()"
});
formatter.result({
  "duration": 277865200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_Hoteloption_in_the_hotel_field()"
});
formatter.result({
  "duration": 152443300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_Roomtype_in_the_roomtype_field()"
});
formatter.result({
  "duration": 149078900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_room_in_the_room_field()"
});
formatter.result({
  "duration": 101879700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_Adults_room_in_the_adults_field()"
});
formatter.result({
  "duration": 94311200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_child_room_in_the_child_field()"
});
formatter.result({
  "duration": 91530000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_Clicks_on_submit_button()"
});
formatter.result({
  "duration": 8238053800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_Confirms_that_the_search_is_carried_out_successfully()"
});
formatter.result({
  "duration": 28100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_clicks_on_radio_button_to_agree_to_terms_and_conditions()"
});
formatter.result({
  "duration": 5246789800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_clicks_on_continue_button()"
});
formatter.result({
  "duration": 6974743400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.the_user_confirms_the_confirmation_is_successfull()"
});
formatter.result({
  "duration": 27000,
  "status": "passed"
});
formatter.after({
  "duration": 148900,
  "status": "passed"
});
formatter.before({
  "duration": 129500,
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
  "duration": 40900,
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
  "duration": 38800,
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
  "duration": 240757300,
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
  "duration": 149658600,
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
  "duration": 196099900,
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
  "duration": 181028400,
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
  "duration": 216959000,
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
  "duration": 178755400,
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
  "duration": 212821500,
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
  "duration": 112316100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_clicks_on_book_now_button()"
});
formatter.result({
  "duration": 5102384600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_clicks_on_logout_button()"
});
formatter.result({
  "duration": 6446194600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_is_logged_out_and_is_navigated_back_to_login_page()"
});
formatter.result({
  "duration": 18864400,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[]\u003e but was:\u003c[   ]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.adactin.stepdefintion.StepDefintion.user_is_logged_out_and_is_navigated_back_to_login_page(StepDefintion.java:315)\r\n\tat ✽.Then User is logged out and is navigated back to login page(src/test/java/com/adactin/feature/Adactin.feature:52)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 137900,
  "status": "passed"
});
});