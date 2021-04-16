
    $(document).ready(function () {
      var fadeTime = 300;
      /* Assign actions */
      $('.product-quantity input').change(function () {
        updateQuantity(this);
      });

      $('.product-removal button').click(function () {
        removeItem(this);
      });


      /* Recalculate cart */
      function recalculateCart() {
        var subtotal = 0;

        /* Sum up row totals */
        $('.product-details').each(function () {
          subtotal += parseInt($(this).children('.product-line-price').text());
        });

        /* Calculate totals */

        var total = subtotal;
        /* Update totals display */
        $('.totals-value').fadeOut(fadeTime, function () {
          $('#cart-subtotal').html(subtotal.toFixed(2));
          $('#cart-total').html(total+".000").css("color", "#f15e2c");
          if (total == 0) {
            $('.checkout').fadeOut(fadeTime);
          } else {
            $('.checkout').fadeIn(fadeTime);
          }
          $('.totals-value').fadeIn(fadeTime);
        });
      }


      /* Update quantity */
      function updateQuantity(quantityInput) {
        /* Calculate line price */
        var productRow = $(quantityInput).parent().parent();
        var price = parseFloat(productRow.children('.product-price').text());
        var quantity = $(quantityInput).val();
        var linePrice = price * quantity;

        /* Update line price display and recalc cart totals */
        productRow.children('.product-line-price').each(function () {
          $(this).fadeOut(fadeTime, function () {
            $(this).text(linePrice.toFixed(2));
            recalculateCart();
            $(this).fadeIn(fadeTime);
            $(this).text(linePrice + ".000").css("font-weight", "bold").css("color", "#f15e2c");
          });
        });
      }


      /* Remove item from cart */
      function removeItem(removeButton) {
        /* Remove row from DOM and recalc cart total */
        var productRow = $(removeButton).parent().parent().parent().parent();
        productRow.slideUp(fadeTime, function () {
          productRow.remove();
          recalculateCart();
        });
      }

    }); 

