package com.adactin.stepdefintion;

import static org.testng.Assert.assertEquals;

import java.io.IOException;
import java.sql.Driver;

import org.junit.runner.Runner;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.BrowserType;

import com.Automation.pom.LoginPage;
import com.adactin.helper.FileReaderManager;
import com.adactin.helper.PageObjectManager;
import com.adactin.runner.AdactinRunner;
import com.adactinpom.org.BaseClass2;
import com.adactinpom.org.BookingPage;
import com.adactinpom.org.RegisterPage;
import com.adactinpom.org.SigninPage;
import com.aventstack.extentreports.gherkin.model.Background;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import sun.security.krb5.Realm;

public class StepDefintion extends BaseClass2  {
	public static WebDriver driver=AdactinRunner.driver;
	public static PageObjectManager pom = new PageObjectManager(driver);
	
	@Before
	public void beforeHooks(Scenario scenario) {
		 String name = scenario.getName();
		 System.out.println("Scenario name: "+name);

	}
	
	@After
	public void afterHooks(Scenario scenario){
		String status = scenario.getStatus();
        System.out.println("     Status: "+status);
    //	if (scenario.isFailed()) {
		//TakesScreenshot()
		
	}
	
	

	@Given("^the User is logged in$")
	public void the_User_is_logged_in()  {
	   
	}

	@Given("^goes to landing page$")
	public void goes_to_landing_page() {
	}

	
	
	@Given("User launch the application")
	public void user_launch_the_application() throws IOException, InterruptedException {
		String url = FileReaderManager.getInstance().crInstance().getUrl();
		getUrl(url);
		Thread.sleep(2000);
	//driver = browserLaunch("chrome");
	//driver.get("https://adactin.com/HotelApp/");

	}
	
	@When("^User enter valid username \"([^\"]*)\" in the username field$")
	public void user_enter_valid_username_in_the_username_field(String arg1) throws Throwable {
		skeys(pom.getSp().getUsername(), "PavithraN");
		Thread.sleep(2000);
		
	}
  	//skeys(pom.getSp().getUsername(), "PavithraN");
		//SigninPage sp = new SigninPage(driver);
		//skeys(sp.getUsername(), "PavithraN");
		
	@When("^User enter valid password \"([^\"]*)\" in the password field$")
	public void user_enter_valid_password_in_the_password_field(String arg1) {
	
		skeys(pom.getSp().getPassword(),"Pavi@2426" );
		
		//SigninPage sp = new SigninPage(driver);
		//skeys(sp.getPassword(), "Pavi@2426");
	
	}
	 @When("^User click on login button$")
	public void user_click_on_login_button()   {
		ck(pom.getSp().getLogin());
		//SigninPage sp = new SigninPage(driver);
		//ck(sp.getLogin());
	    
	}

	@Then("^User confirms that it navigates to the homepage$")
	public void user_confirms_that_it_navigates_to_the_homepage() {
	}

	@Given("^User already logged in and is in booking page$")
	public void user_already_logged_in_and_is_in_booking_page()   {
	     
	     
	}

	@When("^User selects the Location  in the location field$")
	public void user_selects_the_Location_in_the_location_field()   {
		ck(pom.getRp().getLocation());
		//RegisterPage rp = new RegisterPage(driver);
		//ck(rp.getLocation());
	     
	     
	}

	@When("^User selects the Hoteloption  in the hotel field$")
	public void user_selects_the_Hoteloption_in_the_hotel_field()   {
		ck(pom.getRp().getHoption());
		//RegisterPage rp = new RegisterPage(driver); 
		//ck(rp.getHoption()); 
	}

	@When("^User selects the Roomtype in the roomtype field$")
	public void user_selects_the_Roomtype_in_the_roomtype_field()   {
		ck(pom.getRp().getRtype());
		//RegisterPage rp = new RegisterPage(driver);
		//ck(rp.getRtype());
	     
	}

	@When("^User selects the room in the room field$")
	public void user_selects_the_room_in_the_room_field()   {
		ck(pom.getRp().getRoom());
		//RegisterPage rp = new RegisterPage(driver);
		//ck(rp.getRoom());
	     
	}

	@When("^User selects the Adults room in the adults field$")
	public void user_selects_the_Adults_room_in_the_adults_field()   {
		ck(pom.getRp().getAroom());
	     
		//RegisterPage rp = new RegisterPage(driver); 
		//ck(rp.getAroom());
	}

	@When("^User selects the child room in the child field$")
	public void user_selects_the_child_room_in_the_child_field()   {
		
		ck(pom.getRp().getCroom());
		//RegisterPage rp = new RegisterPage(driver); 
		//ck(rp.getCroom());
	     
	}

	@When("^User Clicks on submit button$")
	public void user_Clicks_on_submit_button()   {
		ck(pom.getRp().getSubmit());
		
		//RegisterPage rp = new RegisterPage(driver); 
		//ck(rp.getSubmit());
	     
	     
	}

	@Then("^User Confirms that the search is carried out successfully$")
	public void user_Confirms_that_the_search_is_carried_out_successfully()   {
	     
	     
	}

	@When("^User clicks on radio button to agree to terms and conditions$")
	public void user_clicks_on_radio_button_to_agree_to_terms_and_conditions()   {
		ck(pom.getRp().getRadio());
		
		//RegisterPage rp = new RegisterPage(driver); 
		//ck(rp.getRadio());
	     
	     
	}

	@When("^User clicks on continue button$")
	public void user_clicks_on_continue_button()   {
		ck(pom.getRp().getConti());
		
		//RegisterPage rp = new RegisterPage(driver); 
		//ck(rp.getConti());

	     
	}

	@Then("^The user confirms the confirmation is successfull$")
	public void the_user_confirms_the_confirmation_is_successfull()   {
	     
	     
	}

	@Given("^the page is already partially autopopulated and the rest dropdown to be filled$")
	public void the_page_is_already_partially_autopopulated_and_the_rest_dropdown_to_be_filled()   {
	     
	     
	}

	@When("^User enters the firstname \"([^\"]*)\" in the firstname field$")
	public void user_enters_the_firstname_in_the_firstname_field(String arg1) throws Throwable {
   
		skeys(pom.getBp().getFname(),"PavithraN");
		
		//BookingPage BP = new BookingPage(driver);
		//skeys(BP.getFname(), "PavithraN");
	     
	}

	
	@When("^User enters the lastname \"([^\"]*)\" in the lastname field$")
	public void user_enters_the_lastname_in_the_lastname_field(String arg1) {
		skeys(pom.getBp().getLname(),"lakshmi" );
		
		//BookingPage BP = new BookingPage(driver);
		//skeys(BP.getLname(), "lakshmi");
	     
	     
	}

	@When("^User enters the address \"([^\"]*)\" in the address field$")
	public void user_enters_the_address_in_the_address_field(String arg1)   {
      skeys(pom.getBp().getAddr(), "No.5/3 Raman Avenue flats");		
		
		//BookingPage BP = new BookingPage(driver);
		//skeys(BP.getAddr(), "No.5/3 Raman Avenue flats");
	     
	}

	@When("^User enters the valid Credit card number \"([^\"]*)\" field$")
	public void user_enters_the_valid_Credit_card_number_field(String arg1){
	
		skeys(pom.getBp().getCnum(),"2345678881234567");
	}

  
		
		//BookingPage BP = new BookingPage(driver);
		//skeys(BP.getCnum(), "2345678881234567");
	     


	@When("^User selects the card type \"([^\"]*)\" in the cardtype field$")
	public void user_selects_the_card_type_in_the_cardtype_field(String arg1)   {
		dropDownSelection(pom.getBp().getCtype(), "value","VISA" );
		
		//BookingPage BP = new BookingPage(driver);
		//dropDownSelection(BP.getCtype(), "value", "VISA");
	     
	     
	}

	@When("^User selects the card expiry date \"([^\"]*)\" in date field$")
	public void user_selects_the_card_expiry_date_in_date_field(String arg1)   {
		dropDownSelection(pom.getBp().getCmonth(), "value", "2");
		
		//BookingPage BP = new BookingPage(driver);
		//dropDownSelection(BP.getCmonth(), "value", "2");
	     
	}

	@When("^User selects the card expiry year \"([^\"]*)\" in the year field$")
	public void user_selects_the_card_expiry_year_in_the_year_field(String arg1)   {
		dropDownSelection(pom.getBp().getCyear(), "value", "2020");
		
		
		//BookingPage BP = new BookingPage(driver);
		//dropDownSelection(BP.getCyear(), "value", "2020");
	     
	     
	}

	@When("^User enters the valid Cvv number \"([^\"]*)\" in the number field$")
	public void user_enters_the_valid_Cvv_number_in_the_number_field(String arg1)   {
		skeys(pom.getBp().getCcnum(), "2426");
		
		//BookingPage BP = new BookingPage(driver); 
		//skeys(BP.getCcnum(), "2426");
	     
	}

	@When("^User clicks on book now button$")
	public void user_clicks_on_book_now_button()  {
         ck(pom.getBp().getBook());
	}

	/*@When("^User clicks on book now button$")
	public void user_clicks_on_book_now_button()   {
		skeys(pom.getBp().getCcnum(), "2426");
		
		//BookingPage BP = new BookingPage(driver);
		//skeys(BP.getCcnum(), "2426");
	} */
	

	@When("^User clicks on logout button$")
	public void user_clicks_on_logout_button()   {
		ck(pom.getBp().getLogout());
		
		//BookingPage BP = new BookingPage(driver); 
		//ck(BP.getBook());
	     
	}

	@Then("^User is logged out and is navigated back to login page$")
	public void user_is_logged_out_and_is_navigated_back_to_login_page()   {
			}


}
