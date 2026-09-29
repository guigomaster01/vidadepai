// Global configuration for Vida de Pai
export const SITE_TITLE = 'Vida de Pai | Paternidade Real, Dicas e Família';
export const SITE_DESCRIPTION = 'O portal definitivo para o pai contemporâneo: dicas práticas sobre criação de filhos, rotinas, desenvolvimento infantil, saúde, finanças e vida a dois.';
export const SITE_URL = 'https://vidadepai.com.br';
export const AUTHOR_NAME = 'Equipe Vida de Pai';
export const CONTACT_EMAIL = 'contato@vidadepai.com.br';

// Google AdSense Configuration
// Substitua pelo seu ID de publicador quando for aprovado (ex: ca-pub-1234567890123456)
export const ADSENSE_CLIENT_ID = import.meta.env.PUBLIC_ADSENSE_ID || 'ca-pub-XXXXXXXXXXXXXXXX';

// Categorias principais do blog
export const CATEGORIES = [
	{ name: 'Primeiros Meses', slug: 'primeiros-meses', color: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300' },
	{ name: 'Educação & Limites', slug: 'educacao-e-limites', color: 'bg-blue-500/10 text-blue-700 dark:text-blue-300' },
	{ name: 'Saúde & Sono', slug: 'saude-e-sono', color: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300' },
	{ name: 'Finanças & Futuro', slug: 'financas-e-futuro', color: 'bg-amber-500/10 text-amber-700 dark:text-amber-300' },
	{ name: 'Tempo de Qualidade', slug: 'tempo-de-qualidade', color: 'bg-rose-500/10 text-rose-700 dark:text-rose-300' },
];
