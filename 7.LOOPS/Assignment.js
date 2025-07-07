// 1.
// let products = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"];
// let list0 = "";

//   for (let i = 0; i < products.length; i++) {
//     list0 += `<li> ${products[i]} </li>`;
//   }
// document.getElementById("productList").innerHTML = list0;

// // // 2.
//  let prices = [1000, 2000, 3000, 1500];
//   let tableContent = "";

//   for (let i = 0; i < prices.length; i++) {
//     let discount = prices[i] * 0.10;
//     let discountedPrice = prices[i] - discount;

  //   tableContent += "<tr><td>₹" + prices[i] + "</td><td>₹" + discountedPrice.toFixed(2) + "</td></tr>";
  // }

  // document.getElementById("priceTableBody").innerHTML = tableContent;

// //3.
//  let products0 = [{ name: "Shirt", price: 500, category: "Clothing" },
//     { name: "Watch", price: 1200, category: "Accessories" }];

//   let htmlContent = "";

//   for (let i = 0; i < products0.length; i++) {
//     htmlContent += `
//       <div class="card">
//         <h3>${products0[i].name}</h3>
//         <p><strong>Price:</strong> ₹${products0[i].price}</p>
//         <p><strong>Category:</strong> ${products0[i].category}</p>
//       </div>`;
//   }
// document.getElementById("productContainer").innerHTML = htmlContent;

// 4.
// let objects=[{name:"watch",quantity:2,price:1500},
//   {name:"shirt",quantity:1,price:1000}];

// for(e=0;e<objects.length;e++){
//   let total = objects[e].quantity * objects[e].price;
//   productTableBody.innerHTML+=`<tr>
//          <td>${e + 1}</td>
//          <td>${objects[e].name}</td>
//          <td>${objects[e].quantity}</td>
//          <td>₹${objects[e].price}</td>
//          <td>₹${total}</td>
//        </tr>`;

// }

// // 5.
// let arrayofproducts=[
// { name: "Keyboard", stock: 3 },
// { name: "Mouse", stock: 0 },
// { name: "Charger", stock: 2 }
// ];
// for(i=0;i<arrayofproducts.length;i++){

// }




// // 6.
// let g=10;
// let result="";
// while (g>=1) {
//     result+=g+"<br>";
//     g--;
// }
// document.getElementById("countdown").innerHTML = result;

// 7.
// let productnames=["laptop","mobile","camera","watch","computer"];
// let res="";
// for(let i=0;i<productnames.length;i++){
//     res+=productnames[i]+"<br>";
//     if(productnames[i]=="camera"){
//         res+="'Camera' found. Stopping the loop.<br>";
//         break;
//     }

// }
// document.getElementById("output").innerHTML = res;

// 8.
// let cart = [499, 299, 1299, 999];
// let total = 0;
// let b=0;
// while (i<cart.length){
//     total+=cart[i];
//     b++;
// }
// document.getElementById("total").innerHTML = "Total: ₹"+total;


//  10.
//  let products2 = ["Laptop", "Mobile", "Camera", "Shoes", "Watch", "Earphones"];
//   let d = 0;
//   let list = "";
//   while (d < 3 && d < products2.length) {
//     list += `<li>${products2[d]}</li>`;
//     d++;
//   }
//   document.getElementById("productList2").innerHTML = list;

// 11.
// // let items0=prompt("Enter items:");
// // let a=0;

// // 12.
// let cart0 = [];
//     do {
//       if (cart0.length === 0) {
//         console.log("Cart is empty");
//       }
//     } while (false);

// 13.

// print the star
for(i=0;i<5;i++){ 
  
    document.write("*"+"<br>")
 
}
for(let k=1;k<=5;k++){
   let str="";
   for(let j=1;j<=k;j++){
    str +="* ";
   }  
   console.log(str);

  }


for(let k=1;k<=5;k++){
   let str=" ";
   for(let j=1;j<=k;j++){
    str +=j;
    if(j!==k){
      str+=" ,";
    }
   }  
   console.log(str);

  }
