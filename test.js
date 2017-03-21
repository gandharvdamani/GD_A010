// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.getElementById("add")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("num1.json", 
            function (res) {
              var message = "Marks are: ";
               var message1= res.Maths + res.WP;
              message += message1;
              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
