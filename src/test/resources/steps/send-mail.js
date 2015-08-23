var form  = require("form");

var base;

World(function () {
  var loading = $(".loading").withCss("display", "block");
  // This base expression always returns the scope we're working on: The main window unless a modal is visible and a loding is visible
  base = $(":root").unless(".modal:visible").add(".modal:visible").unless(loading);
});

Given(/^I fail/, function() {
  throw "Some error";
});

Given(/^I'm at sample app/, function() {
  browser.get(config.baseUrl);
});

Given(/^an email with (.*?) "(.*?)" exists$/, function(field, value) {
  // todo
});


Given(/^an email with (.*?) "(.*?)" exists under "(.*?)"$/, function(field, value, section) {
  // todo
});


Given(/^an email with (.*?) "(.*?)" doesn't exist$/, function(field, value) {
  // todo
});


Given(/^an email with (.*?) "(.*?)" doesn't exist under "(.*?)"$/, function(field, value, section) {
  // todo
});

When(/^I click on button "(.*?)"$/, function(btnLabel) {
  clickOnButton(btnLabel);
});

When(/^I fill:$/, function(datatable) {
  var values = datatable.rowsHash();

  for (var prop in values) {
    var val = values[prop];
    var colName = prop;
    form.fillFld(colName,val);
  }
});

Then(/^I navigate to section "(.*?)"$/, function(section) {
  var menu = base.find("#folders li").withText(section);
  menu.click();
});


Then(/^I should see an email with:$/, function(datatable) {
  var values = datatable.rowsHash();
  var rows = base.find("table tr");

  for (var prop in values) {
    var val = values[prop];
    var colName = "." + prop;

    var elem = rows.find(colName).withText(val);
    expect(elem).to.have.size(1);
  }
});

When(/^I click on the email with:$/, function(datatable) {
  var values = datatable.rowsHash();
  for (var prop in values) {
    var val = values[prop];
    var colName = "." + prop;

    var elem = base.find(colName).withText(val);
    elem.click();
  }
});

When(/^I delete an email with Subject "(.*?)"$/, function(subject) {
  clickOnEmailWithSubject(subject);
  clickOnButton("delete");
});

When(/^I move an email with Subject "(.*?)" to "(.*?)"$/, function(subject, section) {
  clickOnEmailWithSubject(subject);
  clickOnButton("move");
  var menuElem = $(".move-to-selector ul li").withText("later");
  menuElem.click();
});


function clickOnEmailWithSubject(subject) {
  var elem = $(".mailSubject, .Subject").withText(subject);
  elem.click();
}

function clickOnButton(btnLabel) {
  var btn = $("button").withText(btnLabel);
  btn.click();
}
