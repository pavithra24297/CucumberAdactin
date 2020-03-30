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
  "duration": 326131,
  "status": "passed"
});
formatter.before({
  "duration": 2075574,
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
  "duration": 295444752,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 526453,
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
  "duration": 3883055132,
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
  "duration": 2074802188,
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
  "duration": 537252,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_click_on_login_button()"
});
formatter.result({
  "duration": 508635,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_confirms_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 35097,
  "status": "passed"
});
formatter.after({
  "duration": 93952,
  "status": "passed"
});
formatter.after({
  "duration": 181963,
  "status": "passed"
});
formatter.before({
  "duration": 78833,
  "status": "passed"
});
formatter.before({
  "duration": 68573,
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
  "duration": 37796,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 106370,
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
  "duration": 2378873748,
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
  "duration": 2012327634,
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
  "duration": 899019,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_click_on_login_button()"
});
formatter.result({
  "duration": 4006441,
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
  "duration": 655501,
  "status": "passed"
});
formatter.after({
  "duration": 672780,
  "status": "passed"
});
formatter.before({
  "duration": 137148,
  "status": "passed"
});
formatter.before({
  "duration": 158206,
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
  "duration": 42117,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 63174,
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
  "duration": 2525892297,
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
  "duration": 2009259089,
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
  "duration": 1837995,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_click_on_login_button()"
});
formatter.result({
  "duration": 732174,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_confirms_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 55615,
  "status": "passed"
});
formatter.after({
  "duration": 214361,
  "status": "passed"
});
formatter.after({
  "duration": 112310,
  "status": "passed"
});
formatter.before({
  "duration": 1961644,
  "status": "passed"
});
formatter.before({
  "duration": 138768,
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
  "duration": 35637,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 53455,
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
  "duration": 2409247642,
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
  "duration": 1992402342,
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
  "duration": 942756,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_click_on_login_button()"
});
formatter.result({
  "duration": 656581,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_confirms_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 45356,
  "status": "passed"
});
formatter.after({
  "duration": 109070,
  "status": "passed"
});
formatter.after({
  "duration": 72353,
  "status": "passed"
});
formatter.before({
  "duration": 102051,
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
  "duration": 64794,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 26998,
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
  "duration": 69654,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_Location_in_the_location_field()"
});
formatter.result({
  "duration": 3132799,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_Hoteloption_in_the_hotel_field()"
});
formatter.result({
  "duration": 962733,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_Roomtype_in_the_roomtype_field()"
});
formatter.result({
  "duration": 915218,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_room_in_the_room_field()"
});
formatter.result({
  "duration": 1032388,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_Adults_room_in_the_adults_field()"
});
formatter.result({
  "duration": 1100421,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_selects_the_child_room_in_the_child_field()"
});
formatter.result({
  "duration": 1071264,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_Clicks_on_submit_button()"
});
formatter.result({
  "duration": 870402,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_Confirms_that_the_search_is_carried_out_successfully()"
});
formatter.result({
  "duration": 33477,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_clicks_on_radio_button_to_agree_to_terms_and_conditions()"
});
formatter.result({
  "duration": 1001070,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.user_clicks_on_continue_button()"
});
formatter.result({
  "duration": 1211111,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.the_user_confirms_the_confirmation_is_successfull()"
});
formatter.result({
  "duration": 36177,
  "status": "passed"
});
formatter.after({
  "duration": 92871,
  "status": "passed"
});
formatter.before({
  "duration": 109070,
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
  "duration": 26997,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 31857,
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
  "name": "User selects the card type \"\u003cVISA\u003e\" in the cardtype field",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User selects the card expiry date \"\u003ccardexpirydate\u003e\" in date field",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User selects the card expiry year \"\u003c2\u003e\" in the year field",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User enters the valid Cvv number \"\u003c2020\u003e\" in the number field",
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
  "duration": 38337,
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
  "duration": 4850385,
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
  "duration": 1131739,
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
  "duration": 1139838,
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
  "duration": 1032387,
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
  "duration": 5478889,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.adactinpom.org.BaseClass2.dropDownSelection(BaseClass2.java:160)\r\n\tat com.adactin.stepdefintion.StepDefintion.user_selects_the_card_type_in_the_cardtype_field(StepDefintion.java:254)\r\n\tat ✽.And User selects the card type \"\u003cVISA\u003e\" in the cardtype field(Adactin.feature:46)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ccardexpirydate\u003e",
      "offset": 35
    }
  ],
  "location": "StepDefintion.user_selects_the_card_expiry_date_in_date_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c2\u003e",
      "offset": 35
    }
  ],
  "location": "StepDefintion.user_selects_the_card_expiry_year_in_the_year_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c2020\u003e",
      "offset": 34
    }
  ],
  "location": "StepDefintion.user_enters_the_valid_Cvv_number_in_the_number_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefintion.user_clicks_on_book_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefintion.user_clicks_on_logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefintion.user_is_logged_out_and_is_navigated_back_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 100431,
  "status": "passed"
});
});