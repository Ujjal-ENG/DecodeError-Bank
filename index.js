const loginBtn = document.getElementById("login");
const depostiBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

loginBtn.addEventListener("click", () => {
  //login button event handler
  const loginArea = document.getElementById("submitInvisible");
  loginArea.style.display = "none";
  const tranArea = document.getElementById("transaction-area");
  tranArea.style.display = "block";
});

depostiBtn.addEventListener("click", () => {
  // console.log("I am Deposit Clicked")
  let value = document.getElementById("depositInput").value;
  let intValue = parseInt(value);

  let currentAmount = document.getElementById("currentDeposit").innerText;
  let intCurrentAmount = parseInt(currentAmount);

  let currentBalance = document.getElementById("currentBalance").innerText;
  let intCurrentBalance = parseInt(currentBalance);


  let result = intValue + intCurrentAmount;
  let strResult = String(result);
  document.getElementById("currentDeposit").innerText = strResult;

  let balnce = intCurrentBalance + intValue;
  let strBalnce = String(balnce);
  document.getElementById("currentBalance").innerText = strBalnce;
  
  document.getElementById("depositInput").value = ""
  
});

withdrawBtn.addEventListener("click", () => {

  let value = document.getElementById("withdrawInput").value;

  console.log(value);

  let currentBalance = document.getElementById("currentBalance").innerText;

  let currentWithdraw = document.getElementById("currentWithdraw").innerText;

 

  let intCurrentBalance = parseInt(currentBalance);
  let intValue = parseInt(value)

  console.log(intCurrentBalance)
  
  let intCurrentWithdraw = parseInt(currentWithdraw) + intValue;
  document.getElementById("currentWithdraw").innerText = String(intCurrentWithdraw)

  console.log(intCurrentWithdraw)

  let currentAmount = intCurrentBalance - intCurrentWithdraw
console.log(currentAmount)
  
  let result = String(currentAmount)
  document.getElementById("currentBalance").innerText = result
  document.getElementById("withdrawInput").value = ""
});
