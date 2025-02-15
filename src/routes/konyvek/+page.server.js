import { getallbooks } from "$lib/server";

export async function load() {
    const books = await getallbooks();   
    return { books }
}
