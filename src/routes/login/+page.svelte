<script >
	import { enhance } from '$app/forms';
	
	let { data } = $props();
</script>

<h1>Hi, {data.user.username}!</h1>
<p>Your user admin is {data.user.admin}.</p>
<form method='post' action='?/logout' use:enhance>
	<button class="ui red button">Sign out</button>
</form>
