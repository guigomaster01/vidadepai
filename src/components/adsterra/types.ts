export type AdsterraBannerSize =
	| '160x300'
	| '160x600'
	| '300x250'
	| '320x50'
	| '468x60'
	| '728x90';

export interface AdsterraBannerConfig {
	key: string;
	width: number;
	height: number;
	format: 'iframe';
	scriptUrl: string;
	name: string;
	description: string;
	recommendedPlacement: string;
}

export interface AdsterraNativeConfig {
	scriptUrl: string;
	containerId: string;
	name: string;
	description: string;
}
