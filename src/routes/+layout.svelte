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
<div class="ui blue secondary pointing inverted menu">
{#each menu as item}
	<div   class="{ item.href == '/login' ? 'right' : 'left'} menu">
		<a class="{ item.href === path || item.href + '/login' === path ? 'active' : '' } item" 
			href="{ item.href }">{ item.label }</a>
	</div>
{/each}
</div>

{@render children()}
