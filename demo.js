'use strict';
(function() {

  // let date = new Date(1000);
  // display(date.toString());

  // display(date.getUTCHours());

  let date1 = new Date(2020, 3, 25, 12, 1, 30, 50);
  let date2 = new Date(2020, 3, 25, 12, 1, 30, 55);

  // display(date1.toString());
  // display(date2 - date1); // 5

  function checkPasswordComplexity(password) {
    // let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$', 'gi');
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/gi
    return regex.test(password);
  }

  // display(checkPasswordComplexity('Stronger1'));

  function findAlerts(logData) {
    let regex = /ERROR(.*?):(.*?);/g;

    let result = regex.exec(logData);
    while (result !== null) {
      display(result[1]);
      display(result[2]);
      display('-------------------------------');
      result = regex.exec(logData);
    }

    // displayRegexArray(regex.exec(logData));
    // displayRegexArray(regex.exec(logData));
  }

  let logData = 'INFO:Ok;ERROR(HIGH):Something broke;ERROR(LOW):Something fishy;';
  let result = findAlerts(logData);

  //  display(result[0]);
  //  display(result.index);
  //  display(result.input);

})();