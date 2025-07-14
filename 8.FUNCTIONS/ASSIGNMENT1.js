// 1.

function fun1(){
    document.getElementById("Welcomemsg").innerText="Welcome to our Restaurant";
}
fun1()


// 2.
function fun2(customername){
  document.getElementById("greet").innerHTML=`Hello, ${customername}!`;
}



// 3.
function fun3(num){
document.getElementById("sqr").innerText=num**2;
}
fun3(8)


// 4.
function fun4(productname,price=100){
    document.getElementById("pname").innerHTML= `Product Name : ${productname}<br> 
     Price : ${price} Rs`;
}
fun4("Sunglasses")


// 5.
function fun5(name="Guest"){
    document.getElementById("Rgreet").innerHTML=`Hello ${name}!`;
}
fun5()


// 6.
function fun6(itemname,quantity,priceperunit){
   let totalbill=quantity*priceperunit;
    document.getElementById("DynamicBilling").innerHTML= `<div>
    <h4>Billing Details</h4>
    ItemName : ${itemname}<br>
    Quantity : ${quantity}<br>
    PricePerUnit : ${priceperunit}<br>
    TotalBill : ${totalbill}</div>`;
}
fun6('Shirt',2,1500)



// 7.
function fun7(item,price){
    document.getElementById("O1").innerHTML= `Item : ${item}<br>
    Price : ${price}Rs`;
}


// 8.
function fun8(amount,discountPercent=10){
 let finalamount=amount-discountPercent;
 document.getElementById("SmartDiscount").innerText="Final Amount is : "+finalamount;
}
fun8(1000)


// 9.
function fun9(cname,iname,quantity,priceperitem){
    let Totalprice=quantity*priceperitem;
    document.getElementById("Dcard").innerHTML= `<div class="container">
    <h3>Order Details</h3>
    CustomerName : ${cname} <br>
    ItemName : ${iname} <br>
    Quantity : ${quantity} <br>
    PricePerItem : ${priceperitem} <br>
    TotalPrice : ${Totalprice}<br>
    </div>`;
}
fun9('Ganesh','Smartwatch',2,1500)



// 10.
function fun10() {
    
}