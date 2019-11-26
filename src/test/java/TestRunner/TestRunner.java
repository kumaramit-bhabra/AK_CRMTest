package TestRunner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src//test//feature//",
        plugin = {"pretty", "html:test-output", "json:target/cucumber-reports/CucumberTestReport.json"},
        glue = {"com.qa.TestPages"},
        // tags = {"@SmokeTest, @RegressionTest"},  This will run tests where tag in feature file is SmokeTest or RegressionTest
        // tags = {"@SmokeTest", "@RegressionTest"}, // This will run tests where test case is having tags for SmokeTest and RegressionTest
        monochrome = true,
        dryRun = false
)
public class TestRunner {
}
