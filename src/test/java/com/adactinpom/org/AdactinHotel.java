package com.adactinpom.org;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import com.adactin.baseclass.BaseClass1;

public class AdactinHotel extends BaseClass2 {

	public static void main(String[] args) throws InterruptedException {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\admin\\eclipse-workspace\\SeleniumProject1\\Driver\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://adactin.com/HotelApp/");
		Thread.sleep(2000);
		driver.manage().window().maximize();

		SigninPage sp = new SigninPage(driver);
		skeys(sp.getUsername(), "PavithraN");
		skeys(sp.getPassword(), "Pavi@2426");
		ck(sp.getLogin());

		RegisterPage rp = new RegisterPage(driver);
		ck(rp.getLocation());
		ck(rp.getHoption());
		ck(rp.getRtype());
		ck(rp.getRoom());
		ck(rp.getAroom());
		ck(rp.getCroom());
		ck(rp.getSubmit());
		ck(rp.getRadio());
		ck(rp.getConti());

		BookingPage BP = new BookingPage(driver);
		skeys(BP.getFname(), "PavithraN");
		skeys(BP.getLname(), "lakshmi");
		skeys(BP.getAddr(), "No.5/3 Raman Avenue flats");
		skeys(BP.getCnum(), "2345678881234567");
		dropDownSelection(BP.getCtype(), "value", "VISA");
		dropDownSelection(BP.getCmonth(), "value", "2");
		dropDownSelection(BP.getCyear(), "value", "2020");
		skeys(BP.getCcnum(), "2426");
		ck(BP.getBook());
		ck(BP.getLogout());

	}

}
