<script>
	import { page } from '$app/stores'
	import { afterNavigate } from '$app/navigation'
	var path = $state($page.url.pathname)
	let { children } = $props()
	const menu = [
		{ label: 'Kezdőoldal', href: '/' },
		{ label: 'Könyvek', href: '/konyvek' },
		{ label: 'Ki- és bejelentkezés', href: '/login' }
	]
	afterNavigate(() => {
		path = $page.url.pathname
  	})
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