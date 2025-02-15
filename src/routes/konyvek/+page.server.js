import { getallbooks, deletebook, addbook } from "$lib/server/db";

export async function load() {
    const books = await getallbooks();
    return { books }
}

export const actions = {
    deletebook: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');
        await deletebook(id);
    },
    addbook: async ({ request }) => {
        const formData = await request.formData();
        const cim = formData.get('cim');
        const szerzo = formData.get('szerzo');
        const leiras = formData.get('leiras');
        await addbook(cim, szerzo, leiras);
    }
}