// var request = require('request')
// var amount = document.getElementById('amount').value
// var email =  document.getElementById('email').value
// var phone =  document.getElementById('phonenumber').value
// var fullname = document.getElementById('fullname').value

function option (amount, email, phone, fullname){
  var options = {
  'method': 'POST',
  'url': 'https://topups.reloadly.com/topups',
  'headers': {
    'Authorization': 'Bearer eyJraWQiOiIwMDA1YzFmMC0xMjQ3LTRmNmUtYjU2ZC1jM2ZkZDVmMzhhOTIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDI4MSIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHkuYXV0aDAuY29tLyIsImh0dHBzOi8vcmVsb2FkbHkuY29tL3NhbmRib3giOmZhbHNlLCJodHRwczovL3JlbG9hZGx5LmNvbS9wcmVwYWlkVXNlcklkIjoiMTAyODEiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJhdWQiOiJodHRwczovL3RvcHVwcy1oczI1Ni5yZWxvYWRseS5jb20iLCJuYmYiOjE2MzU0NjU3NTEsImF6cCI6IjEwMjgxIiwic2NvcGUiOiJzZW5kLXRvcHVwcyByZWFkLW9wZXJhdG9ycyByZWFkLXByb21vdGlvbnMgcmVhZC10b3B1cHMtaGlzdG9yeSByZWFkLXByZXBhaWQtYmFsYW5jZSByZWFkLXByZXBhaWQtY29tbWlzc2lvbnMiLCJleHAiOjE2NDA2NTMzNTEsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6IjQwNDI2YmM0LTU5ZWUtNDRjNy05YjhkLTEyNjA2MGQxMmZjYSIsImlhdCI6MTYzNTQ2NTc1MSwianRpIjoiYjBmNmFkZjUtODNiZS00Y2FjLWFiZWYtYTUyNmZkMjJmMDJkIn0.NBPImdc_uIb9R5fpbUIL8JENDIf-Z3iy56Tv75noQg0',
    'Accept': 'application/com.reloadly.topups-v1+json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "operatorId": "341",
    "amount": amount,
    "useLocalAmount": false,
    "customIdentifier": "thanks" + fullname + " for using glectric inc. here is your Top-up",
    "recipientEmail": email,
    "recipientPhone": {
      "countryCode": "NG",
      "number": phone
    },
    "senderPhone": {
      "countryCode": "NG",
      "number": "09063286907"
    }
  })
};
}




 module.exports = option




//  request(options, function (error, response) {
//  if(error){
//    console.log(error)
//  }else{
//    console.log(response)
//  }
// });

