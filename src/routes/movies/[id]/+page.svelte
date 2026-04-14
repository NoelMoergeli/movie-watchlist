<script>
    import { page } from '$app/stores';

    let { data } = $props();
    let movie = data.movie;
    let showDeleteConfirm = $state(false);
</script>

<svelte:head>
    <title>{movie.title}</title>
</svelte:head>

<div class="container py-5">
    <div class="row">
        <div class="col-md-4">
            <img src={movie.poster} alt={movie.title} class="img-fluid rounded shadow" />
        </div>
        <div class="col-md-8">
            <h1 class="mb-3">{movie.title}</h1>

            <div class="mb-4">
                <h5>Informationen</h5>
                <p><strong>Jahr:</strong> {movie.year}</p>
                <p><strong>Dauer:</strong> {movie.length}</p>
            </div>

            {#if movie.actors && movie.actors.length > 0}
                <div class="mb-4">
                    <h5>Schauspieler</h5>
                    <ul>
                        {#each movie.actors as actor}
                            <li>{actor}</li>
                        {/each}
                    </ul>
                </div>
            {/if}

            <div class="mb-4 d-flex gap-2">
                <a href="/movies" class="btn btn-secondary">← Zurück zur Liste</a>
                <button
                    type="button"
                    class="btn btn-danger"
                    onclick={() => (showDeleteConfirm = true)}
                >
                    🗑 Löschen
                </button>
            </div>
        </div>
    </div>
</div>

{#if showDeleteConfirm}
    <div class="modal d-block" style="background-color: rgba(0, 0, 0, 0.5);">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Film löschen?</h5>
                    <button
                        type="button"
                        class="btn-close"
                        onclick={() => (showDeleteConfirm = false)}
                    ></button>
                </div>
                <div class="modal-body">
                    <p>Bist du sicher, dass du den Film "<strong>{movie.title}</strong>" löschen möchtest?</p>
                    <p class="text-muted">Diese Aktion kann nicht rückgängig gemacht werden.</p>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        onclick={() => (showDeleteConfirm = false)}
                    >
                        Abbrechen
                    </button>
                    <form method="POST" action="?/delete" style="display: inline;">
                        <button type="submit" class="btn btn-danger">Löschen</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    h1 {
        color: #0d6efd;
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1050;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-dialog-centered {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

