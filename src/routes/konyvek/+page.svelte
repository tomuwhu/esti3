<script>
    var { data } = $props()
    var books = data.books
    var user = data.user
    var funkcio = $state(0)
</script>

<h1 class="ui header">Könyvek</h1>

{#if user?.admin == 1}
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
            <div class="ui divider"></div>
            <div class="meta">
                <a href={book.link}><img src={book.borito} alt={book.cim}></a>
            </div>
            <div class="description">
               {book.leiras}
            </div>
        </div>
    </div>
{/each}
</div>
{:else if funkcio == 1}
<div class="ui container">
    <form action="?/addbook" class="ui form" method="POST">
        <div class="ui">
        <div class="newbook">Új Könyv felvétele</div>
        <div class="ui input">
            <div class="ui label">Cím</div>
            <input type="text" name="cim">
        </div>
        <div class="ui divider"></div>
        <div class="ui input">
            <div class="ui label">Szerző</div>
            <input type="text" name="szerzo">
        </div>
        <div class="ui divider"></div>
        <div class="ui input">
            <div class="ui label">Borító</div>
            <input type="text" name="borito">
        </div>
        <div class="ui divider"></div>
        <div class="ui input">
            <div class="ui label">Link</div>
            <input type="text" name="link">
        </div>
        <div class="ui divider"></div>
        <div class="ui input">
            <div class="ui label">Leirás</div>
            <textarea id="mt1" type="text" name="leiras"></textarea>
        </div>
        <div class="ui divider"></div>
        <button class="ui red button">Könyv rögzítése</button>
        </div>
    </form>
</div>
{/if}

<style>
    div.cards {
        justify-content: center;
    }
    div.label {
        display: inline-block;
        min-width: 80px;
        text-align: left;
        font-size: 16px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        box-shadow: 1px 1px 3px  gray;
    }
    img {
        width: 250px;
        box-shadow: 1px 1px 5px black;
        border-radius: 7px;
    }
    textarea#mt1 {
        width: 340px;
        height: 250px;
    }
    div.description {
        font-size: 12px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-align: justify;
    }
    div.cards {
        display: inline-flex;
        margin: auto;
    }
    div.container {
        padding: 0px 0px 18px 0px;
        margin: auto;
        width: 550px;
        background-color: rgb(193, 242, 225);
        box-shadow: 1px 1px 5px black;
        border-radius: 10px;
    }
    div.newbook {
        font-size: 25px;
        margin-top:0px;
        margin-bottom: 20px;
        padding: 20px;
        border-radius: 10px;
        border:solid 1px black;
        background-color: aquamarine;
    }
</style>