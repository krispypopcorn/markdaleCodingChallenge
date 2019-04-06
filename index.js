"use strict";

var print = console.log;
var emptyTable = document.querySelector("#addrTable");

$("#get").click(function() {
  printJson();
});
//n4VB9KQQSSKaS1Rw7RAyoodHysDnTaPEMM
function printJson() {
  let address = document.getElementById("addrInput").value;
  if (address === "") {
    print("EMPTY");
  } else {
    $.get(
      "https://api.blockcypher.com/v1/btc/test3/addrs/" + address + "/balance"
    )
      .then(function(d) {
        handleJson(d);
      })
      .catch(function(e) {
        window.alert("Please enter a Valid Address and try again!");
        console.log(e);
      });
  }
}

function handleJson(d) {
  showBalance(d);
}

function showBalance(d) {
  print(d);
  var addrTable = document.querySelector("#addrTable");

  var new_row = document.createElement("tr");

  const addr_col = document.createElement("th");
  const addr_text = document.createTextNode(d.address);
  addr_col.appendChild(addr_text);
  new_row.appendChild(addr_col);

  const balance_col = document.createElement("th");
  var bal = parseInt(d.balance, 10);
  bal *= 0.00000001;

  const balance_text = document.createTextNode(bal.toFixed(10));
  balance_col.appendChild(balance_text);
  new_row.appendChild(balance_col);

  const date_col = document.createElement("th");
  const date_text = document.createTextNode(new Date());
  date_col.appendChild(date_text);
  new_row.appendChild(date_col);

  addrTable.appendChild(new_row);
}

function transact() {
  let address = document.getElementById("addrInput").value;
  var newtx = {
    inputs: [{ addresses: [address] }],
    outputs: [
      { addresses: ["C1rGdt7QEPGiwPMFhNKNhHmyoWpa5X92pn"], value: 100000 }
    ]
  };
}
