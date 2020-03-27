package com.adactin.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationReader {
	public static Properties P;
	public  ConfigurationReader() throws IOException {
		File f = new File("C:\\Users\\admin\\eclipse-workspace\\CucumberAdactin\\src\\test\\java\\com\\adactin\\properties\\Configuration.properties");
		FileInputStream fis = new FileInputStream(f);
		P=new Properties();
		P.load(fis);
		}
	public String getBrowserlaunch() {
		String browserlaunch = P.getProperty("browserlaunch");
        return browserlaunch;
	}
	
	public String getUrl() {
		String url = P.getProperty("url");
		return url;

	}
	

}
