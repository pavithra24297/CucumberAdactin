$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Booking functionality on adactin application",
  "description": "",
  "id": "testing-booking-functionality-on-adactin-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8899300,
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
  "duration": 478201600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefintion.goes_to_landing_page()"
});
formatter.result({
  "duration": 38500,
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
  "duration": 33000,
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
  "duration": 75785700,
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
  "duration": 1748200,
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
  "duration": 936500,
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
  "duration": 1277500,
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
  "duration": 15752800,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.adactinpom.org.BaseClass2.dropDownSelection(BaseClass2.java:159)\r\n\tat com.adactin.stepdefintion.StepDefintion.user_selects_the_card_type_in_the_cardtype_field(StepDefintion.java:255)\r\n\tat ✽.And User selects the card type \"\u003cVISA\u003e\" in the cardtype  field(src/test/java/com/adactin/feature/Adactin.feature:46)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "duration": 220700,
  "status": "passed"
});
});