let shop = document.getElementById('shop');
let shopItemsData = [{
  id:'aaa',
  name :'Casual Shirt',
  price : 45,
  desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing',
  img :'images/img-1.jpg'
},
{ id:'bbb',
name :'Casual Shirt for woman',
price : 35,
desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing',
img :'images/img-2.jpg'},
{ id:'ccc',
name :'Casual Shirt',
price : 55,
desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing',
img :'images/img-3.jpg'},
{ id:'ddd',
name :' Shirt for Man',
price : 45,
desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing',
img :'images/img-4.jpg'}]

let generateShop = ()=> {
  return shop.innerHTML = shopItemsData.map((item )=>{ 
   return `
      <div class="item">

  <img src="images/img-1.jpg" alt="">
  <div class="details">
    <h3> Casual Shirt</h3>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
    <div class="price-quantity">
      <h2> $45</h2>
      <div class="buttons">
        <i class="bi bi-dash-lg"></i>
        <div class="quantity">0</div>
        <i class="bi bi-plus-lg"></i>
      </div>
    </div>

  </div>

</div> `
 } ) }

generateShop();