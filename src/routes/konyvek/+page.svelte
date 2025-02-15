<script>
    var { data } = $props()
    var books = data.books
    
</script>

<h1 class="ui header">Könyvek</h1>

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