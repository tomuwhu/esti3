<script>
	import { page } from '$app/stores'
	var path = $state($page.url.pathname)
	let { children } = $props()
	const menu = [
		{ label: 'Kezdőoldal', href: '/' },
		{ label: 'Könyvek', href: '/konyvek' },
		{ label: 'Ki- és bejelentkezés', href: '/login' }
	]
	const f = () => {
		setTimeout(() => {
			path = $page.url.pathname
		}, 100)
	}
</script>
<div>
{#each menu as item}
    {#if item.href === path}
		<a onclick={f} class="ui small blue button" href={item.href}>{item.label}</a>
	{:else}
		<a onclick={f} class="ui small button" href={item.href}>{item.label}</a>
	{/if}
{/each}
</div>
{@render children()}