package com.qa.TestPages;

import com.qa.Base.TestBase;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.io.IOException;

public class LoginTestPage extends TestBase
{
 LoginTestPage loginTestPage;
    public LoginTestPage()
    {
        super();
    }

    @BeforeMethod
    public void setUp()
    {
        initialization();
        loginTestPage = new LoginTestPage();
    }

    @Test
    public void homePageTitle()
    {
        System.out.println("Hello world");
    }

    @AfterMethod
    public void tearDown()
    {
        driver.quit();
    }
}
