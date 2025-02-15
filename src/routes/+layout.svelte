<script>
	import { page } from '$app/stores'
	var path = $state($page.url.pathname)
	let { children } = $props()
	const menu = [
		{ label: 'Kezdőoldal', href: '/' },
		{ label: 'Ki- és bejelentkezés', href: '/login' }
	]
	setInterval(() => {
		path = $page.url.pathname
	}, 1000)

</script>
<div>
{#each menu as item}
    {#if item.href === path}
		<a class="ui small blue button" href={item.href}>{item.label}</a>
	{:else}
		<a class="ui small button" href={item.href}>{item.label}</a>
	{/if}
{/each}
</div>
{@render children()}