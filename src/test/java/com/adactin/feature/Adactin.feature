Feature: Testing Booking functionality on adactin application

Background:
Given the User is logged in 
And goes to landing page


@RegressionTest
Scenario Outline: User checking the login function using valid username and valid password 
	Given User launch the application                   
    When User enter valid username "<username>" in the username field
    And User enter valid password "<password>" in the password field
    And User click on login button
    Then User confirms that it navigates to the homepage
    
    Examples:
    |Username|Password|
    |111|AAA|
    |222|BBB|
    |333|CCC|
    |PavithraN|Pavi@2426|
    
    
 @smokeTest
   Scenario: User checks the search function hotel
	And User already logged in and is in booking page
	When User selects the Location  in the location field
	And User selects the Hoteloption  in the hotel field
	And User selects the Roomtype in the roomtype field
	And User selects the room in the room field
	And User selects the Adults room in the adults field
	And User selects the child room in the child field
	And User Clicks on submit button 
	Then User Confirms that the search is carried out successfully
	When User clicks on radio button to agree to terms and conditions
	And User clicks on continue button
	Then The user confirms the confirmation is successfull
	
@SanityTest	
	Scenario: User checks the booking function using valid credentials
	And the page is already partially autopopulated and the rest dropdown to be filled
    When User enters the firstname "<PavithraN>" in the firstname field
	And User enters the lastname "<lakshmi>" in the lastname field
	And User enters the address "<No.5/3 Raman Avenue flats>" in the address field
	And User enters the valid Credit card number "<2345678881234567>" field
	And User selects the card type "<VISA>" in the cardtype field
	And User selects the card expiry date "<cardexpirydate>" in date field
	And User selects the card expiry year "<2>" in the year field
	And User enters the valid Cvv number "<2020>" in the number field
	And User clicks on book now button
	And User clicks on logout button
	Then User is logged out and is navigated back to login page 
	
