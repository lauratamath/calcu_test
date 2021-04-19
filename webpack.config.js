module.exports = {
	mode: 'development',
	devServer: {
		contentBase: 'dist'
	},
	module: {
		rules: [
			{
				test: /.(jsx?)$/,
        		use: ['babel-loader'],
			},
		]
	}
}
