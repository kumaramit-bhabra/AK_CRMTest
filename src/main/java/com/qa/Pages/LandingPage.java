package com.qa.Pages;

import com.qa.Base.TestBase;
import org.openqa.selenium.By;


public class LandingPage extends TestBase
{

    public LandingPage()
    {
        super();
    }

    public boolean landingPageTitle()
    {
        String title = driver.getTitle();
        boolean titleValidation = false;

        if (title.equals(prop.get("landingPageTitle")))
        {
            titleValidation = true;
        }
        return titleValidation;
    }

    public boolean optionForUNAndPW()
    {
        boolean textBoxForUn = false;
        boolean textBoxForPW = false;
        boolean overAllResult = false;

        textBoxForUn = driver.findElement(By.xpath(prop.getProperty("userNameTextBox"))).isEnabled();
        textBoxForPW = driver.findElement(By.xpath(prop.getProperty("passwordTextBox"))).isEnabled();
        if(textBoxForUn && textBoxForPW)
            overAllResult = true;

        return overAllResult;
    }

    public boolean isLoginBttnEnabled()
    {
        boolean loginBttnEnabled = false;
        loginBttnEnabled = driver.findElement(By.xpath(prop.getProperty("loginBttn"))).isEnabled();
        return  loginBttnEnabled;
    }

    public void entersUserNameAndPW(String userName, String passWord)
    {
        driver.findElement(By.xpath(prop.getProperty("userNameTextBox"))).sendKeys(userName);
        driver.findElement(By.xpath(prop.getProperty("passwordTextBox"))).sendKeys(passWord);

        //driver.findElement(By.xpath(prop.getProperty("userNameTextBox"))).sendKeys(prop.getProperty("username"));
        //driver.findElement(By.xpath(prop.getProperty("passwordTextBox"))).sendKeys(prop.getProperty("password"));
    }

    public HomePage clickLoginBttn()
    {
        driver.findElement(By.xpath(prop.getProperty("loginBttn"))).submit();
        return new HomePage();
    }
}
