<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css';
	import { page } from '$app/state';

	let { children } = $props();

	const isActive = (path: string) => page.url.pathname === path;
	const isStartsWith = (path: string) => page.url.pathname.startsWith(path);
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<div class="container">
		<a class="navbar-brand" href="/">ScreenStack</a>

		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link {isActive('/') ? 'active fw-bold text-warning' : ''}" href="/">
					Home
				</a>
			</li>

			<li class="nav-item">
				<a
						class="nav-link {isStartsWith('/movies') ? 'active fw-bold text-warning' : ''}"
						href="/movies"
				>
					Movies
				</a>
			</li>
		</ul>
	</div>
</nav>

{@render children()}

<style>
	.nav-link {
		transition: all 0.2s ease;
	}

	.nav-link:hover {
		color: #ffc107 !important;
	}

	.nav-link.active {
		border-bottom: 2px solid #ffc107;
	}
</style>