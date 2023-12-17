const quantityInputs = document.querySelectorAll('input[type="number"]');


quantityInputs.forEach(input => {
  input.addEventListener('input', calculateTotal);
});


function calculateTotal() {
  let total = 0;

 
  quantityInputs.forEach(input => {
    const price = parseInt(input.previousElementSibling.lastElementChild.textContent);
    const quantity = parseInt(input.value);
    total += price * quantity;
  });


  document.getElementById('total').textContent = total;
}