package com.adactinpom.org;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage {
	
	public static WebDriver driver;
	@FindBy(xpath = "//*[@id=\"location\"]/option[7]")
	private WebElement Location;
	
	@FindBy(xpath = "//*[@id=\"hotels\"]/option[3]")
	private WebElement Hoption;
	
	@FindBy(xpath = "//*[@id=\"room_type\"]/option[5]")
	private WebElement Rtype;
	
	@FindBy(xpath = "//*[@id=\"room_nos\"]/option[3]")
	private WebElement room;
	
	@FindBy(xpath = "//*[@id=\"adult_room\"]/option[3]")
	private WebElement aroom;
	
	@FindBy(xpath = "//*[@id=\"child_room\"]/option[5]")
	private WebElement croom;
	
	@FindBy(id = "Submit")
	private WebElement submit;
	
	@FindBy(id = "radiobutton_0")
	private WebElement radio;
	
	public WebElement getRadio() {
		return radio;
	}

	public void setRadio(WebElement radio) {
		this.radio = radio;
	}

	public WebElement getConti() {
		return conti;
	}

	public void setConti(WebElement conti) {
		this.conti = conti;
	}

	@FindBy(id = "continue")
	private WebElement conti;

	
	
	

	public RegisterPage(WebDriver driver2) {
		this.driver=driver2;
		PageFactory.initElements(driver, this);
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getLocation() {
		return Location;
	}

	public WebElement getHoption() {
		return Hoption;
	}

	public WebElement getRtype() {
		return Rtype;
	}

	public WebElement getRoom() {
		return room;
	}

	public WebElement getAroom() {
		return aroom;
	}

	public WebElement getCroom() {
		return croom;
	}

	public WebElement getSubmit() {
		return submit;
	}
	
	
	
	
	

}



   