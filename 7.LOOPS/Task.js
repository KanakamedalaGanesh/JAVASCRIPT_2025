// // 1.
// let products = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"];
// let list0 = "";

//   for (let i = 0; i < products.length; i++) {
//     list0 += "<li>" + products[i] + "</li>";
//   }

//   document.getElementById("productList").innerHTML = list0;

// // 2.
//  let prices = [1000, 2000, 3000, 1500];
//   let tableContent = "";

//   for (let i = 0; i < prices.length; i++) {
//     let discount = prices[i] * 0.10;
//     let discountedPrice = prices[i] - discount;

//     tableContent += "<tr><td>₹" + prices[i] + "</td><td>₹" + discountedPrice.toFixed(2) + "</td></tr>";
//   }

//   document.getElementById("priceTableBody").innerHTML = tableContent;

// // // 3.
//  let products0 = [{ name: "Shirt", price: 500, category: "Clothing" },
//     { name: "Watch", price: 1200, category: "Accessories" }
//   ];

//   let htmlContent = "";

//   for (let i = 0; i < products0.length; i++) {
//     htmlContent += `
//       <div class="card">
//         <h3>${products0[i].name}</h3>
//         <p><strong>Price:</strong> ₹${products0[i].price}</p>
//         <p><strong>Category:</strong> ${products0[i].category}</p>
//       </div>
//     `;
//   }
// document.getElementById("productContainer").innerHTML = htmlContent;

// // 4.
//   let items = [
//     { name: "Pen", quantity: 2, price: 10 },
//     { name: "Notebook", quantity: 3, price: 50 },
//     { name: "Bag", quantity: 1, price: 500 }
//   ];

//   let tableRows = "";
//   for (let i = 0; i < items.length; i++) {
//     let total = items[i].quantity * items[i].price;
//     tableRows += `
//       <tr>
//         <td>${i + 1}</td>
//         <td>${items[i].name}</td>
//         <td>${items[i].quantity}</td>
//         <td>₹${items[i].price}</td>
//         <td>₹${total}</td>
//       </tr>
//     `;
//   }
// document.getElementById("productTableBody").innerHTML = tableRows;

// 6.
let i=10;
let result="";
while (i>=1) {
    result+=i+"<br>";
    i--;
}
document.getElementById("countdown").innerHTML = result;

// 7.
let productnames=["laptop","mobile","camera","watch","computer"];
let res="";
for(let i=0;i<productnames.length;i++){
    res+=productnames[i]+"<br>";
    if(productnames[i]=="camera"){
        res+="'Camera' found. Stopping the loop.<br>";
        break;
    }

}
document.getElementById("output").innerHTML = res;

// 8.
// let cart = [499, 299, 1299, 999];
// let total = 0;
// let b=0;
// while (i<cart.length){
//     total+=cart[i];
//     b++;
// }
// document.getElementById("total").innerHTML = "Total: ₹"+total;

// 9.
// let products1 = [
//     { name: "Laptop", stock: 10 },
//     { name: "Mobile", stock: 5 },
//     { name: "Camera", stock: 0 }, 
//     { name: "Shoes", stock: 12 },
//     { name: "Watch", stock: 3 }
//   ];

//   let c = 0;
//   let output = "";

//   while (c < products1.length) {
//     if (products1[c].stock === 0) {
//       output += `${products1[c].name} is out of stock. Stopping.<br>`;
//       break;
//     }

//     output += `${products1[c].name} - Stock: ${products1[c].stock}<br>`;
//     i++;
//   }

//   document.getElementById("productList1").innerHTML = output;

//  10.
 let products2 = ["Laptop", "Mobile", "Camera", "Shoes", "Watch", "Earphones"];
  let d = 0;
  let list = "";
  while (d < 3 && d < products2.length) {
    list += `<li>${products2[d]}</li>`;
    d++;
  }
  document.getElementById("productList2").innerHTML = list;


// // 12.
// let cart0 = [];
//     do {
//       if (cart0.length === 0) {
//         console.log("Cart is empty");
//       }
//     } while (false);

// 13.
