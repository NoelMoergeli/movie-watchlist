import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		
		const movie = {
			title: formData.get('title'),
			year: parseInt(formData.get('year')),
			length: formData.get('length')
		};

		const posterUrl = formData.get('poster');
		if (posterUrl && posterUrl.trim()) {
			movie.poster = posterUrl;
		}

		try {
			await db.createMovie(movie);
			throw redirect(303, '/movies');
		} catch (error) {
			if (error.status === 303) {
				throw error;
			}
			console.error('Fehler beim Erstellen des Films:', error);
			return {
				error: 'Fehler beim Speichern des Films'
			};
		}
	}
};

