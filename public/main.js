var form = document.getElementById('payform')

form.addEventListener('submit', payNow)


function payNow(e){
  e.preventDefault();

FlutterwaveCheckout({
 public_key : '*********************',
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



 

 