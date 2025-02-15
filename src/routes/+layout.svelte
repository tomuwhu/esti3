<script>
	let { children } = $props()
	const menu = [
		{ label: 'Kezdőoldal', href: '/' },
		{ label: 'Ki- és bejelentkezés', href: '/login' }
	]
</script>
<div>
{#each menu as item}
	<a class="ui small green button" href={item.href}>{item.label}</a>
{/each}
</div>
{@render children()}