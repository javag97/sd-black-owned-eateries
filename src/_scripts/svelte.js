import { run } from './helpers'
import Restaurant from './restaurant.svelte';

run('[data-restaurants]', (target) => new Restaurant({ target }))

