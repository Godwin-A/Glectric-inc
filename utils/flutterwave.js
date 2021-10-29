var paynow = function payNow(amount, email, phonenumber, fullname){
  FlutterwaveCheckout({
   public_key : 'FLWPUBK_TEST-8e6858868683e5fb3e1eda62f8b77765-X',
   tx_ref: 'RX1',
       amount: document.getElementById('amount').value,
       currency: 'NGN', 
       country: 'NG',
      
       customer : {
         email: document.getElementById('email').value,
         phonenumber :document.getElementById('phonenumber').value ,
         name: document.getElementById('fullname').value
       },
       callback : function(data){
         console.log(data)
       }
 });  
 }


 module.exports = paynow
 