const figlet = require('figlet'); // no need to write (./) for packages

figlet("Lionel Messi", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });