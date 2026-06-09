import { writable, derived } from 'svelte/store';
import { translations, type Lang } from '$lib/i18n/translations';

export const lang = writable<Lang>('ja');

export const t = derived(lang, ($lang) => translations[$lang]);
