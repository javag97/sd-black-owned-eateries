<script>
  import  RestaurantItem from './restaurant-item.svelte'

  let restaurants = []

  export async function getRestaurantJson() {
    const response = await fetch('/api/restaurant.json')
    console.log(response);
    const data = await response.json()
    console.log(data)
    restaurants = data

    return data;
  }
  getRestaurantJson()
  console.dir("test" + restaurants)

</script>


<section class="flex flex-wrap">
		{#each restaurants as restaurant}
      <RestaurantItem restaurant={restaurant}/>
    {/each}
</section>



