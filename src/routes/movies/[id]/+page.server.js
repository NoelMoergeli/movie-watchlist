import db from '$lib/db.js';
import { error, redirect } from '@sveltejs/kit';

export async function load({ params }) {
	const movie = await db.getMovie(params.id);
	
	if (!movie) {
		throw error(404, 'Filmdetails nicht gefunden');
	}
	
	return {
		movie
	};
}

export const actions = {
	delete: async ({ params }) => {
		try {
			await db.deleteMovie(params.id);
			throw redirect(303, '/movies');
		} catch (err) {
			if (err.status === 303) {
				throw err;
			}
			console.error('Fehler beim Löschen des Films:', err);
			return {
				error: 'Fehler beim Löschen des Films'
			};
		}
	}
};

