<template>
  <div class="flex flex-col mt-9 w-[335px] h-full rounded-2xl
              sm:flex-row sm:h-[459.6px] sm:w-[580px] text-gray-500">
    <!-- MOBILE-->
    <img class="sm:hidden w-full h-[279px] rounded-t-xl" src="@/assets/image-product-mobile.jpg" alt="Large picture of bottle of Gabrielle Chanel's perfume."/>

    <!-- DESKTOP   -->
    <img class="hidden sm:block w-1/2  h-full rounded-l-xl" src="@/assets/image-product-desktop.jpg" alt="Small picture of bottle of Gabrielle Chanel's perfume."/>


    <div class="bg-white h-[360px] flex flex-col justify-between rounded-b-lg py-5 px-3
                sm:rounded-none sm:rounded-r-xl sm:h-full sm:w-1/2 sm:py-10">
      <div class="ml-5 tracking-[.30em] text-gray-500 font-monseBold text-xs">PERFUME</div>

      <div class="text-3xl mx-5  font-frauncesBold text-black ">Gabrielle Essence Eau De Parfum</div>
      <div class="text-[14px] font-monseMedium mx-5">
        A floral, solar and voluptous interpretation composed by Olivier Polge, Perfumer-Creator for the house of
        CHANEL.
      </div>
      <div class="flex flex-row gap-5 items-center mx-5">
        <div class="text-3xl price font-frauncesBold">$149.99</div>
        <div class="text-xs line-through font-monseMedium ">$169.99</div>
      </div>
      <div class="text-center px-5">
        <button class="cart-button w-full rounded-md py-3">
          <span class="flex items-center justify-center gap-3 text-white font-bold text-sm">
          <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path
              d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
              fill="#FFF"/></svg>
            Add to Cart
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.price {
  color: hsl(158, 36%, 37%);
  font-weight: bolder;
}

.cart-button {
  background: hsl(158, 36%, 37%)
}
.cart-button:hover{
  background: #1a4031;
}
</style>