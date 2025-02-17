<script>
	import { page } from '$app/stores'
	import { afterNavigate } from '$app/navigation'
	var path = $state($page.url.pathname)
	let { children, data } = $props()
	var user = $state(data.user)
	const menu = $derived([
		{ label: 'Kezdőoldal', href: '/' },
		{ label: 'Könyvek', href: '/konyvek' },
		{ label: user?.id ? 'Kijelentkezés' : 'Regisztráció / Bejelentkezés', href: '/login' },
	])
	afterNavigate(() => {
		path = $page.url.pathname
		user = data.user
  	})
</script>
<div>
{#each menu as item}
    {#if item.href === path || item.href + '/login' === path}
		<a class="ui small blue button" href={item.href}>{item.label}</a>
	{:else}
		<a class="ui small button" href={item.href}>{item.label}</a>
	{/if}
{/each}
</div>
{@render children()}