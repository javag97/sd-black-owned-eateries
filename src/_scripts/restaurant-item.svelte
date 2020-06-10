<script>
  export let restaurant;
</script>

<div class="pb-16 px-4 w-1/2 md:w-1/3 xl:w-1/4">
    <p class="text-sm font-mono uppercase font-medium">{restaurant.foodType}</p>
    <h2 class="text-2xl font-bold leading-tight">{restaurant.name}</h2>
    <p class="text-sm font-mono uppercase font-medium">{restaurant.neighborhood}</p>
    <p class="text-base py-2 leading-snug">{restaurant.address}<br>{restaurant.address2}</p>
    <a class="flex justify-center border border-black border-solid py-2 rounded" href="{restaurant.site}">Site</a>
</div>

