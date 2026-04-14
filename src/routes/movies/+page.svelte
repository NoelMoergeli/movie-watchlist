<script>
    import MovieCard from '$lib/components/MovieCard.svelte';

    let { data } = $props();
    let movies = data.movies;
</script>

<div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <p class="text-muted fst-italic mb-0">Daten und Bilder generiert mit Beispieldaten</p>
        <a href="/movies/create" class="btn btn-primary">+ Neuer Film</a>
    </div>

    <div class="row g-4">
        {#each movies as movie}
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <MovieCard {movie} />
            </div>
        {/each}
    </div>
</div>