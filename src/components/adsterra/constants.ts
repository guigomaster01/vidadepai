import type { AdsterraBannerConfig, AdsterraBannerSize, AdsterraNativeConfig } from './types';

/**
 * Configuração dos formatos de Banner do Adsterra para vidadepai.com.br
 */
export const ADSTERRA_BANNERS: Record<AdsterraBannerSize, AdsterraBannerConfig> = {
	'160x300': {
		key: '3394f74df18068e8d9fc59c2a3fab0df',
		width: 160,
		height: 300,
		format: 'iframe',
		scriptUrl: 'https://bicea.org/22/3394f74df18068e8d9fc59c2a3fab0df',
		name: 'Vertical Médio (160x300)',
		description: 'Banner vertical estreito ideal para colunas laterais ou menus.',
		recommendedPlacement: 'Barra lateral secundária ou conteúdo estreito.',
	},
	'160x600': {
		key: '39b4db51d58af2a246bebf6c6e11f4ab',
		width: 160,
		height: 600,
		format: 'iframe',
		scriptUrl: 'https://bicea.org/22/39b4db51d58af2a246bebf6c6e11f4ab',
		name: 'Skyscraper / Arranha-céu (160x600)',
		description: 'Banner vertical longo perfeito para barra lateral fixa (sticky).',
		recommendedPlacement: 'Barra lateral de artigos (desktop sticky).',
	},
	'300x250': {
		key: 'fd54d2871914c39e70afee0ffca608a2',
		width: 300,
		height: 250,
		format: 'iframe',
		scriptUrl: 'https://bicea.org/22/fd54d2871914c39e70afee0ffca608a2',
		name: 'Retângulo Médio (300x250)',
		description: 'Um dos formatos mais populares e com maior taxa de conversão.',
		recommendedPlacement: 'Barra lateral, entre parágrafos ou rodapé de artigos.',
	},
	'320x50': {
		key: '11fabf6291e64bb271c082034c7b5b92',
		width: 320,
		height: 50,
		format: 'iframe',
		scriptUrl: 'https://bicea.org/22/11fabf6291e64bb271c082034c7b5b92',
		name: 'Mobile Leaderboard (320x50)',
		description: 'Tamanho padrão otimizado para telas de smartphones.',
		recommendedPlacement: 'Topo ou rodapé em dispositivos móveis.',
	},
	'468x60': {
		key: '1f0631966ee42224ddcca77dcf4c50a1',
		width: 468,
		height: 60,
		format: 'iframe',
		scriptUrl: 'https://bicea.org/22/1f0631966ee42224ddcca77dcf4c50a1',
		name: 'Banner Clássico (468x60)',
		description: 'Formato horizontal intermediário para tablets e conteúdo.',
		recommendedPlacement: 'Entre seções ou acima de comentários.',
	},
	'728x90': {
		key: '6456e437cf00df8a8f5a9b265545bbc2',
		width: 728,
		height: 90,
		format: 'iframe',
		scriptUrl: 'https://bicea.org/22/6456e437cf00df8a8f5a9b265545bbc2',
		name: 'Leaderboard Desktop (728x90)',
		description: 'Banner horizontal de grande destaque para telas médias e grandes.',
		recommendedPlacement: 'Cabeçalho superior ou topo de páginas e posts.',
	},
};

/**
 * Configuração do Native Banner (Adsterra Native Async)
 */
export const ADSTERRA_NATIVE: AdsterraNativeConfig = {
	scriptUrl: 'https://bicea.org/21/149c0b9cc68a22520832ef3b31d3fd47',
	containerId: 'container-149c0b9cc68a22520832ef3b31d3fd47',
	name: 'Native Banner (4 imagens recomendadas)',
	description: 'Widget de recomendação nativa assíncrono que se integra ao layout.',
};

/**
 * Script do Popunder (Adsterra JS Sync)
 */
export const ADSTERRA_POPUNDER_SCRIPT = 'https://afders.org/1/7640b64b7f754f8966c1583caef723f3';

/**
 * Script da SocialBar (Adsterra JS Sync)
 */
export const ADSTERRA_SOCIALBAR_SCRIPT = 'https://bicea.org/14/99e106a6ddf9d50079199da263ec74cd';

/**
 * URL do Smartlink (Adsterra Direct Link)
 */
export const ADSTERRA_SMARTLINK_URL = 'https://arwf.org/4/d557feb5a30191bbeec81fc08b344c0d';
