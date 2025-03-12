import {Page} from "@/model/Page";

export async function getPageDataFromLanguageAndSlug(language: string, slug: string): Promise<Page> {
	const data = await fetch(`http://127.0.0.1:4000/pages?locale=${language}&slug=${slug}`, {
		cache: "force-cache"
	});
	return await data.json();
}

export async function getAllPages(): Promise<Page[]> {
	const data = await fetch("http://127.0.0.1:4000/pages", {
		cache: "force-cache"
	});
	return await data.json();
}