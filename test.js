// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
  var name =
       document.getElementById("name").value;
      document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("num1.json", 
            function (res) {
          if (name===res.student1){
               var message = "Marks are: ";
               var message1= res.Maths;
               var message2= res.WP;
              message= message+ message1+message2;
          }
              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
        });
        
      });
          
