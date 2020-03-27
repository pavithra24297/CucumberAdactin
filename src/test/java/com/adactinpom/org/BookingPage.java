package com.adactinpom.org;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookingPage {
	
	public static WebDriver driver;
	
	
	@FindBy(id = "first_name")
	private WebElement fname;
	
	@FindBy(id = "last_name")
	private WebElement lname;
	
	@FindBy(id = "address")
	private WebElement addr;
	
	@FindBy(id = "cc_num")
	private WebElement cnum;
	
	@FindBy(id = "cc_type")
	private WebElement ctype;
	
	@FindBy(id = "cc_exp_month")
	private WebElement cmonth;
	
	@FindBy(id = "cc_exp_year")
	private WebElement cyear;
	
	@FindBy(id = "cc_cvv")
	private WebElement ccnum ;
	
	@FindBy(id = "book_now")
	private WebElement book;
	
	@FindBy(xpath = "/html/body/table[2]/tbody/tr[1]/td[2]/a[4]")
	private WebElement logout;

	public BookingPage(WebDriver driver3) {
		this.driver=driver3;
		PageFactory.initElements(driver, this);
	}
	

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getFname() {
		return fname;
	}

	public WebElement getLname() {
		return lname;
	}

	public WebElement getAddr() {
		return addr;
	}

	public WebElement getCnum() {
		return cnum;
	}

	public WebElement getCtype() {
		return ctype;
	}

	public WebElement getCmonth() {
		return cmonth;
	}

	public WebElement getCyear() {
		return cyear;
	}

	public WebElement getCcnum() {
		return ccnum;
	}

	public WebElement getBook() {
		return book;
	}

	public WebElement getLogout() {
		return logout;
	}
	
	
	
	
	

}
