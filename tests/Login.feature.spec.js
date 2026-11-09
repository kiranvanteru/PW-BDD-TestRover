// Generated from: tests\features\Login.feature
import { test } from "playwright-bdd";

test.describe('verify login', () => {

  test('verify login with valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('user is on login page', null, { page }); 
    await When('user enters valid username', null, { page }); 
    await And('user enters valid password', null, { page }); 
    await And('user clicks on login button', null, { page }); 
    await Then('user should be navigated to the home page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\Login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user is on login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When user enters valid username","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And user enters valid password","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And user clicks on login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then user should be navigated to the home page","stepMatchArguments":[]}]},
]; // bdd-data-end