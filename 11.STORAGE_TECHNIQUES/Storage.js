 function Reg(){
         const username = document.getElementById("RegUsername").value;
         const email = document.getElementById("RegEmail").value;
         const password = document.getElementById("RegPassword").value;

         if(username && password){
            localStorage.setItem("storedUsername",username);
            localStorage.setItem("storedPassword",password);
            document.getElementById("Message").innerText="Registered Successfully!";
         }
         else {
            document.getElementById("Message").innerText="Please fill all fields!";
         }
      }


      function Login(){
        const username = document.getElementById("LogUsername").value;
        const password = document.getElementById("LogPassword").value;
        const storedUsername = localStorage.getItem("storedUsername");
        const storedPassword = localStorage.getItem("storedPassword");

            if(username === storedUsername && password === storedPassword){
                document.getElementById("Message").innerText="Login Successful!";
                }
            else{
                  document.getElementById("Message").innerText="Invalid Credentials!";
                }        
      }