package com.qa.Base;

import org.openqa.selenium.Capabilities;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.BrowserType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariDriver;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class TestBase
{
    public static Properties prop;
    public static WebDriver driver;


    public TestBase()
    {
        try
        {
            System.out.println("This is to determine the very first call");
            prop = new Properties();
            FileInputStream inputStream = new FileInputStream("src//main//java//com//qa//config//config.properties");
            prop.load(inputStream);
        }
        catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        catch (IOException e) {
            e.printStackTrace();
        }

    }

    public static void initialization() throws MalformedURLException
    {
        System.out.println("In Initialization method");
        String browserName = prop.getProperty("browser");

        if(browserName.equals("chrome"))
        {
            System.setProperty("webdriver.chrome.driver","C:\\Users\\Admin\\Documents\\Drivers\\chromedriver.exe");
            //driver = new ChromeDriver();
            DesiredCapabilities cap = new DesiredCapabilities();
            cap.setBrowserName(BrowserType.CHROME);
            driver = new RemoteWebDriver(new URL("http://192.168.99.100:4444/wd/hub"),cap);
        }

        if(browserName.equals("firefox"))
        {
            System.setProperty("webdriver.gecko.driver","C:\\Users\\Admin\\Documents\\Drivers\\geckodriver.exe");
            driver = new FirefoxDriver();
        }

        if(browserName.equals("safari"))
        {
            driver = new SafariDriver();
        }

        if(browserName.equals("IE"))
        {

        }
        driver.get(prop.getProperty("URL"));
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
    }
}
