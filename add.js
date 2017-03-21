// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("num1.json", 
            function (res) {
              var message = "Addition is : ";
               var message1= res.num1 + res.num2;
              message += message1;
              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  document.querySelector("button1")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("num1.json", 
            function (res) {
              var message = "Subtraction is : ";
               var message1= res.num1 - res.num2;
              message += message1;
              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);
