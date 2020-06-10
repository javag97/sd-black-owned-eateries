<script>
  import RestaurantItem from './restaurant-item.svelte'

  let restaurants = []

  export async function getRestaurantJson() {
    const response = await fetch('/api/restaurant.json')
    const data = await response.json()
    restaurants = data
    console.dir(response);
    console.dir(data)
    return data;
  }
  getRestaurantJson()

</script>


<section class="flex flex-wrap items-end">
		{#each restaurants as restaurant}
      <RestaurantItem restaurant={restaurant}/>
    {/each}
</section>



