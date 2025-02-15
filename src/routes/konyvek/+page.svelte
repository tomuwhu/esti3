<script>
    var { data } = $props()
    var books = data.books
    var user = data.user
    var funkcio = $state(0)
</script>

<h1 class="ui header">Könyvek</h1>

{#if user.admin == 1}
    {#if funkcio == 0}
        <button onclick={() => {funkcio = 1}} class="ui red button">Új könyv felvétele</button>
    {:else if funkcio == 1}
        <button onclick={() => {funkcio = 0}} class="ui blue button">Könyvek listája</button>
    {/if}
{/if}
<div class="ui divider"></div>
{#if funkcio == 0}
<div class="ui cards">
{#each books as book}
    <div class="ui card">
        <div class="content">
            <div class="header">{book.cim}</div>
            <div class="meta">
                <span class="date">{book.szerzo}</span>
            </div>
            <div class="description">
                <p>{book.leiras}</p>
            </div>
        </div>
    </div>
{/each}
</div>
{:else if funkcio == 1}
    <form action="?/addbook" class="ui form" method="POST">
        <div class="ui">
        <div class="ui input">
            <div class="ui label">Cim</div>
            <input type="text" name="cim">
        </div>
        <div class="ui divider"></div>
        <div class="ui input">
            <div class="ui label">Szerzo</div>
            <input type="text" name="szerzo">
        </div>
        <div class="ui divider"></div>
        <div class="ui input">
            <div class="ui label">Leiras</div>
            <input type="text" name="leiras">
        </div>
        <div class="ui divider"></div>
        <button class="ui button">Add book</button>
        </div>
    </form>
{/if}