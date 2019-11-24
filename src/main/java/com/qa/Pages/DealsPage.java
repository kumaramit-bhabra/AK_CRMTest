package com.qa.Pages;

import com.qa.Base.TestBase;
import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

public class DealsPage extends TestBase
{

    public boolean userOnDealsPage()
    {
        boolean dealsPgVal = false;
        dealsPgVal = driver.findElement(By.xpath(prop.getProperty("dealsPgDealHdr"))).isDisplayed();
        return dealsPgVal;
    }

    public void enterDealDetails(DataTable dataTable)
    {
        List<String> credentials = dataTable.asList();
        System.out.println(credentials.size());

        driver.findElement(By.xpath(prop.getProperty("dealsPgTitle"))).sendKeys(credentials.get(0));
        driver.findElement(By.xpath(prop.getProperty("dealsPgClntLup"))).sendKeys(credentials.get(1));
        driver.findElement(By.xpath(prop.getProperty("dealsPgPrContact"))).sendKeys(credentials.get(2));
        driver.findElement(By.xpath(prop.getProperty("dealsPgAmt"))).sendKeys(credentials.get(3));
        driver.findElement(By.xpath(prop.getProperty("dealsPgPrb"))).sendKeys(credentials.get(4));
        driver.findElement(By.xpath(prop.getProperty("dealsPgComm"))).sendKeys(credentials.get(5));

    }

    public void enterDealDetailsForMultRecAndSave(DataTable dataTable)
    {
         //-----------Implementation by using List Header information present------------
        List<String> list = dataTable.asList();
        System.out.println(list.size());

        for(int i=6; i<list.size(); i=i+6)
        {
            if (i > 0)
            {
                driver.findElement(By.xpath(prop.getProperty("dealsPgTitle"))).clear();
                driver.findElement(By.xpath(prop.getProperty("dealsPgClntLup"))).clear();
                driver.findElement(By.xpath(prop.getProperty("dealsPgPrContact"))).clear();
                driver.findElement(By.xpath(prop.getProperty("dealsPgAmt"))).clear();
                driver.findElement(By.xpath(prop.getProperty("dealsPgPrb"))).clear();
                driver.findElement(By.xpath(prop.getProperty("dealsPgComm"))).clear();
            }
            driver.findElement(By.xpath(prop.getProperty("dealsPgTitle"))).sendKeys(list.get(i));
            driver.findElement(By.xpath(prop.getProperty("dealsPgClntLup"))).sendKeys(list.get(i+1));
            driver.findElement(By.xpath(prop.getProperty("dealsPgPrContact"))).sendKeys(list.get(i+2));
            driver.findElement(By.xpath(prop.getProperty("dealsPgAmt"))).sendKeys(list.get(i+3));
            driver.findElement(By.xpath(prop.getProperty("dealsPgPrb"))).sendKeys(list.get(i+4));
            driver.findElement(By.xpath(prop.getProperty("dealsPgComm"))).sendKeys(list.get(i+5));


            driver.findElement(By.xpath(prop.getProperty("dealsPgSaveBttn"))).submit();

            WebDriverWait wait = new WebDriverWait(driver,30);
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@value='Create Event']")));

            WebElement eleDeals = driver.findElement(By.xpath("//a[@title = 'Deals']/following-sibling::ul"));
            JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
            javascriptExecutor.executeScript("arguments[0].style.visibility='visible';", eleDeals);
            driver.findElement(By.xpath(prop.getProperty("newDealsLink"))).click();

        }

        /* -----------Implementation by using Map with Header information present------------

        List<Map<String, String>> list = dataTable.asMaps(String.class, String.class);

        for(int i=0; i<list.size(); i++)
        {
            if (i > 0)
            {
                driver.findElement(By.xpath(prop.getProperty("dealsPgTitle"))).clear();
                driver.findElement(By.xpath(prop.getProperty("dealsPgClntLup"))).clear();
                driver.findElement(By.xpath(prop.getProperty("dealsPgPrContact"))).clear();
                driver.findElement(By.xpath(prop.getProperty("dealsPgAmt"))).clear();
                driver.findElement(By.xpath(prop.getProperty("dealsPgPrb"))).clear();
                driver.findElement(By.xpath(prop.getProperty("dealsPgComm"))).clear();
            }
            driver.findElement(By.xpath(prop.getProperty("dealsPgTitle"))).sendKeys(list.get(i).get("Title"));
            driver.findElement(By.xpath(prop.getProperty("dealsPgClntLup"))).sendKeys(list.get(i).get("Company"));
            driver.findElement(By.xpath(prop.getProperty("dealsPgPrContact"))).sendKeys(list.get(i).get("Primary Contact"));
            driver.findElement(By.xpath(prop.getProperty("dealsPgAmt"))).sendKeys(list.get(i).get("Amount"));
            driver.findElement(By.xpath(prop.getProperty("dealsPgPrb"))).sendKeys(list.get(i).get("Probability"));
            driver.findElement(By.xpath(prop.getProperty("dealsPgComm"))).sendKeys(list.get(i).get("Commission"));


            driver.findElement(By.xpath(prop.getProperty("dealsPgSaveBttn"))).submit();

            WebDriverWait wait = new WebDriverWait(driver,30);
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@value='Create Event']")));

            WebElement eleDeals = driver.findElement(By.xpath("//a[@title = 'Deals']/following-sibling::ul"));
            JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
            javascriptExecutor.executeScript("arguments[0].style.visibility='visible';", eleDeals);
            driver.findElement(By.xpath(prop.getProperty("newDealsLink"))).click();
            driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS);

        }*/

    }

    public void clickOnSaveBttnToCreateDeal()
    {
        driver.findElement(By.xpath(prop.getProperty("dealsPgSaveBttn"))).submit();
    }

    /*public boolean validateNewContactCreation()
    {
        boolean newContactCreated = false;
        //newContactCreated = driver.findElement(By.xpath(prop.getProperty("contPgConHdr"))).isDisplayed();
        newContactCreated = driver.findElement(By.xpath(prop.getProperty("contPgContDet")+"'"+valFirstName+" "+valLastName+"')]")).isDisplayed();
        driver.findElement(By.xpath(prop.getProperty("contactsLink"))).click();
        newContactCreated = driver.findElement(By.xpath(prop.getProperty("contPgContNameContactsTbl")+"'"+valFirstName+" "+valLastName+"']")).isDisplayed();
        return newContactCreated;
    }*/


}
