// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("testdata.json", 
            function (res) {

          
              var message = "Marks are:";
              var message1 = res.Maths;
              var message2 = res.WP;
              message = message+message1+message2;
              }
              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);
