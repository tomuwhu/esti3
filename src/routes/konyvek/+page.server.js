import { getallbooks, addbook, deletebook } from "$lib/server";

export async function load(event) {
    const books = await getallbooks();   
    return { books, user: event.locals.user }
}

export const actions = {
    addbook: async (event) => {
        const formData = await event.request.formData();
        const cim = formData.get('cim');
        const szerzo = formData.get('szerzo');
        const borito = formData.get('borito');
        const link = formData.get('link');
        const leiras = formData.get('leiras');
        var id = await addbook(cim, szerzo, borito, link, leiras);
        return { success: true };
    },
    deletebook: async (event) => {
        const formData = await event.request.formData();
        const id = formData.get('id');
        await deletebook(id);
        return { success: true };
    }
}