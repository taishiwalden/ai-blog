interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Taishi Walden', // Site author
	title: 'Bot Banter: A Gen Z Take on AI', // Site title.
	description: 'Join us for humorous insights, quirky tech trends, and a fresh perspective on AI through the eyes of the digital-native generation.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
