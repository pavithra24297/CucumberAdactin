package com.adactin.baseclass;

import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.google.common.io.FileBackedOutputStream;

public class BaseClass1{
	public static WebDriver driver;

	public static WebDriver browserLaunch(String Browerlaunch) {
		try {
			if (Browerlaunch.equalsIgnoreCase("Chrome")) {
				System.setProperty("webdriver.chrome.driver",
						"C:\\Users\\admin\\eclipse-workspace\\SeleniumProject1\\Driver\\chromedriver.exe");
				driver = new ChromeDriver();
			}
			driver.manage().window().maximize();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return driver;

	}

	public static void getUrl(String Url) {
		try {
			driver.get(Url);

		} catch (Exception e) {
		}
	}

	public static void getCurrentUrl(String CurrentUrl) {
		try {
			driver.getCurrentUrl();

		} catch (Exception e) {
		}
	}

	public static void navigateto(String Url) {
		try {
			driver.navigate().to("");
		} catch (Exception e) {
		}
	}

	public static void navigateback(String Url) {
		try {
			driver.navigate().back();
		} catch (Exception e) {
		}
	}

	public static void navigateforward(String Url) {
		try {
			driver.navigate().forward();

		} catch (Exception e) {
		}
	}

	public static void navigaterefresh(String Url) {
		try {
			driver.navigate().refresh();

		} catch (Exception e) {
		}
	}

	public static void alert() {
		try {
			Alert simple = driver.switchTo().alert();
			simple.accept();
		} catch (Exception e) {

		}
	}

	public void salert() {
		try {
			Alert confirm = driver.switchTo().alert();
			confirm.accept();
			Alert confirm2 = driver.switchTo().alert();
			confirm2.dismiss();
		} catch (Exception e) {
		}
	}

	public void Palert() {
		try {
			Alert Prompt = driver.switchTo().alert();
			Prompt.accept();
			Alert prom2 = driver.switchTo().alert();
			prom2.sendKeys("welcome");
			prom2.accept();
			driver.switchTo().defaultContent();

		} catch (Exception e) {
		}
	}

	public void isenabled() {
		try {
			isenabled();
		} catch (Exception e) {
		}
	}

	public void isdisplayed() {
		try {
			isdisplayed();

		} catch (Exception e) {
		}
	}

	public void isselected() {
		try {
			isselected();

		} catch (Exception e) {
		}
	}

	public static void screenshot(Object fileUtils, Object srcfile, Object file) throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File srcname = ts.getScreenshotAs(OutputType.FILE);
		File desfile = new File("C:\\Users\\admin\\eclipse-workspace\\SeleniumProject1\\screenshot\\image.png");
		FileUtils.copyFile(srcname, desfile);
	}

	public static void dropDownSelection(WebElement element, String option, String input) {

		Select s = new Select(element);

		if (option.equals("index")) {
			int parseInt = Integer.parseInt(input);
			s.selectByIndex(parseInt);

		} else if (option.equals("value")) {
			s.selectByValue(input);
		}
	}

	public static void action(WebElement element) {
		Actions ac = new Actions(driver);
		ac.moveToElement(element).build().perform();
		ac.click();
	}

	public static void frame(String element) {

		driver.switchTo().frame(element);

	}

	public static void windows(String element) {
		try {
			driver.getWindowHandle();
		} catch (Exception e) {
		}
	}

	public static void getTitle() {
		try {
			driver.getTitle();
		} catch (Exception e) {
		}
	}

	public static void getText() {
		try {
			driver.get(null);
		} catch (Exception e) {
		}
	}

	public static void dragdrop(WebElement drag, WebElement drop) {
		try {
			Actions ac = new Actions(driver);
			ac.dragAndDrop(drag, drop).build().perform();
		} catch (Exception e) {
		}
	}

	public void implicitwait(int seconds) {
		try {
			driver.manage().timeouts().implicitlyWait(seconds, TimeUnit.SECONDS);
		} catch (Exception e) {
		}
	}

	public static void expliclitwait(int seconds, WebElement element) {
		try {
			WebDriverWait wait = new WebDriverWait(driver, seconds);
			wait.until(ExpectedConditions.visibilityOf(element));
		} catch (Exception e) {
		}
	}

		public static void robot(WebElement element) {
		try {
			Actions ac = new Actions(driver);
			ac.contextClick(element).build().perform();
			Robot rt = new Robot();
			rt.keyPress(KeyEvent.VK_DOWN);
			rt.keyRelease(KeyEvent.VK_DOWN);
			rt.keyPress(KeyEvent.VK_ENTER);
			rt.keyRelease(KeyEvent.VK_ENTER);

		} catch (Exception e) {
		}

	}

	public static void sendkeys(String element) {
		try {
			sendkeys("element");

		} catch (Exception e) {
		}
	}

	public static void ck(WebElement element) {
		try {
			ck(element);
		} catch (Exception e) {
		}

	}

	public static void windows(WebElement element) {
		try {
			Set<String> el = driver.getWindowHandles();
			driver.switchTo().window("").getTitle();

		} catch (Exception e) {
		}
	}

     public static void scroll(WebElement element) {
     try {
     JavascriptExecutor js=(JavascriptExecutor)driver;	
     } catch (Exception e) {
     }
    }
}

