 const passWordBox = document.getElementById("pass");
       const lenght = 12;
       const upper = "ABCDEFGHJKLMNQWERTYUIOPXZ";
       const lower = "abcdefghmnjklpoiuytrewqzx";
       const number = "0123456789";
       const symbol = "₩¥£€_/=÷×+@#$%^&*";
       const allChars = upper + lower + number + symbol;
       function createPassWord(){
           let passWord = "";
           passWord += upper[Math.floor(Math.random() * upper.length)];
           passWord += lower[Math.floor(Math.random()*lower.length)];
           passWord += number[Math.floor(Math.random()*number.length)];
           passWord += symbol[Math.floor(Math.random()*symbol.length)]; 
           while(lenght > passWord.length){
           passWord += allChars[Math.floor(Math.random()*allChars.length)];
               
           }
           passWordBox.value = passWord;
       }
   
   function copyPassWord(){
       passWordBox.select();
       document.execCommand("copy");
   }
