package com.adactin.helper;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.adactinpom.org.BookingPage;
import com.adactinpom.org.RegisterPage;
import com.adactinpom.org.SigninPage;

public class PageObjectManager {
	
	public static WebDriver driver;
	
	public static SigninPage sp;
	public static RegisterPage rp;
	public static BookingPage bp;
	
	public PageObjectManager(WebDriver ldriver) {
		this.driver=ldriver;
		//PageFactory.initElements(driver, this);
	}
	public static SigninPage getSp() {
		sp=new SigninPage(driver);
		return sp;
	}
	public static RegisterPage getRp() {
		rp=new RegisterPage(driver);
		return rp;
	}
	public static BookingPage getBp() {
		bp=new BookingPage(driver);
		return bp;
	}
	
	
	
	
	
	
	

}
