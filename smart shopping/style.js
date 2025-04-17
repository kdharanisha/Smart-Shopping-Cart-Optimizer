// Cart and Price Tracking Logic
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
      alert('Item added to cart!');
    });
  });
  
  document.querySelectorAll('.track-price').forEach(button => {
    button.addEventListener('click', function() {
      alert('Price tracking activated for this product!');
    });
  });
  
  document.querySelectorAll('.apply-coupon').forEach(button => {
    button.addEventListener('click', function() {
      alert('Coupon applied successfully!');
    });
  });
  