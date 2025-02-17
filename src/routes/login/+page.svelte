<script >
	import { enhance } from '$app/forms';
	
	let { data } = $props();
</script>

<h1>Kedves {data.user.username}!</h1>
<p>Üdvözlöm a könyvtárban!</p>
<form method='post' action='?/logout' use:enhance>
	<button class="ui red button">Kijelentkezés</button>
</form>
