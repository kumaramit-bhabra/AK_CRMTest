package com.qa.Pages;

import com.qa.Base.TestBase;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

public class HomePage extends TestBase
{
    public HomePage()
    {
        // super();
    }

    public boolean homePageTitle()
    {
        String pageTitle = driver.getTitle();
        boolean title = false;
        if(pageTitle.equals(prop.getProperty("homePageTitle")))
        {
            title = true;
        }
        return title;
    }

    public boolean userNameCheck()
    {
        boolean nameCheck = false;
        switchingFrame();
        String userName = driver.findElement(By.xpath(prop.getProperty("homePageUserName"))).getText();

        if(userName.contains(prop.getProperty("Name")))
        nameCheck = true;

        return nameCheck;
    }

    public ContactsPage clickOnContacts()
    {
        switchingFrame();
        System.out.println(driver.findElement(By.xpath(prop.getProperty("contactsLink"))).isEnabled());
        driver.findElement(By.xpath(prop.getProperty("contactsLink"))).click();
        return new ContactsPage();
    }

    public CalendarPage clickOnCalendar()
    {
        switchingFrame();
        driver.findElement(By.xpath(prop.getProperty("calendarLink"))).click();
        return new CalendarPage();
    }

    public CompaniesPage clickOnCompanies()
    {
        switchingFrame();
        driver.findElement(By.xpath(prop.getProperty("companiesLink"))).click();
        return new CompaniesPage();
    }

    public DealsPage clickOnDeals()
    {
        switchingFrame();
        driver.findElement(By.xpath(prop.getProperty("dealsLink"))).click();
        return new DealsPage();
    }

    public DealsPage clickOnNewDealsLink()
    {
        switchingFrame();
        WebElement eleDeals = driver.findElement(By.xpath("//a[@title = 'Deals']/following-sibling::ul"));
        JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
        javascriptExecutor.executeScript("arguments[0].style.visibility='visible';", eleDeals);
        driver.findElement(By.xpath(prop.getProperty("newDealsLink"))).click();
        return new DealsPage();
    }

    public ContactsPage clickOnNewContactsLink()
    {
        switchingFrame();
        WebElement ele = driver.findElement(By.xpath("//a[@title = 'Contacts']/following-sibling::ul"));
        JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
        javascriptExecutor.executeScript("arguments[0].style.visibility='visible';", ele);
        driver.findElement(By.xpath(prop.getProperty("newContactLink"))).click();
        return new ContactsPage();
    }

    public void switchingFrame()
    {
        driver.switchTo().frame("mainpanel");
    }
}
