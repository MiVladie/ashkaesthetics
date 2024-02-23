/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `Ashk Aesthetics`,
		description: `Ashk Aesthetics Beauty Salon`,
		image: `src/assets/icons/favicon.ico`,
		siteUrl: `https://ashk-aesthetics.co.uk`
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-sitemap',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: './src/'
			},
			__key: 'src'
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					formats: [`auto`, `webp`],
					placeholder: `blurred`,
					quality: 100,
					breakpoints: [720, 1025, 1366, 1920],
					backgroundColor: `transparent`
				}
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Ashk Aesthetics`,
				short_name: `Ashk Aesthetics`,
				description: `Ashk Aesthetics Beauty Salon`,
				lang: `en`,
				display: `standalone`,
				icon: 'src/assets/icons/favicon.ico',
				start_url: `/`,
				background_color: `#D7C2A4`,
				theme_color: `#444444`
			}
		}
	]
};
