<script>
	let { form } = $props();
</script>

<svelte:head>
	<title>Neuen Film erfassen</title>
</svelte:head>

<div class="container py-5">
	<div class="row justify-content-center">
		<div class="col-md-6">
			<h1 class="mb-4">Neuen Film erfassen</h1>

			{#if form?.error}
				<div class="alert alert-danger alert-dismissible fade show" role="alert">
					{form.error}
					<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
				</div>
			{/if}

			<form method="POST" class="needs-validation">
				<div class="mb-3">
					<label for="title" class="form-label">Filmtitel <span class="text-danger">*</span></label>
					<input
						type="text"
						class="form-control"
						id="title"
						name="title"
						placeholder="z.B. Barbie"
						required
					/>
					<div class="invalid-feedback">
						Bitte geben Sie einen Filmtitel ein.
					</div>
				</div>

				<div class="mb-3">
					<label for="year" class="form-label">Veröffentlichungsjahr <span class="text-danger">*</span></label>
					<input
						type="number"
						class="form-control"
						id="year"
						name="year"
						placeholder="z.B. 2023"
						min="1900"
						max={new Date().getFullYear()}
						required
					/>
					<div class="invalid-feedback">
						Bitte geben Sie ein gültiges Jahr ein.
					</div>
				</div>

				<div class="mb-3">
					<label for="length" class="form-label">Dauer <span class="text-danger">*</span></label>
					<input
						type="text"
						class="form-control"
						id="length"
						name="length"
						placeholder="z.B. 114 Minuten"
						required
					/>
					<div class="invalid-feedback">
						Bitte geben Sie die Filmdauer ein.
					</div>
				</div>

				<div class="mb-3">
					<label for="poster" class="form-label">Poster-URL (optional)</label>
					<input
						type="url"
						class="form-control"
						id="poster"
						name="poster"
						placeholder="z.B. https://example.com/poster.jpg"
					/>
					<small class="form-text text-muted">
						Wenn keine URL angegeben wird, wird ein Platzhalterbild verwendet.
					</small>
				</div>

				<div class="d-flex gap-2">
					<button type="submit" class="btn btn-primary">Film speichern</button>
					<a href="/movies" class="btn btn-secondary">Abbrechen</a>
				</div>
			</form>
		</div>
	</div>
</div>

<style>
	h1 {
		color: #0d6efd;
	}

	.text-danger {
		color: #dc3545;
	}
</style>

