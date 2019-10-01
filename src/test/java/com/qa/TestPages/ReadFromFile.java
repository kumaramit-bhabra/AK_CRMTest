package com.qa.TestPages;

import org.testng.annotations.BeforeMethod;

import java.io.FileInputStream;
import java.util.Properties;

public class ReadFromFile
{
    @BeforeMethod
    public void readFromFile()
    {
        try
        {
            Properties prop = new Properties();
            FileInputStream fis = new FileInputStream("C:\\Users\\Admin\\Documents");
            prop.load(fis);
            prop.getProperty("User Name");
            System.out.println("The user name is "+  prop.getProperty("User Name"));
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
    }
}
