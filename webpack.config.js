const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssLoaders = [
	{
		loader: 'css-loader',
		options: {
			importLoaders: 1
		}
	},
	{
		loader: 'postcss-loader',
		options: {
			sourceMap: true
		}
	}
];

const cssExtract = ExtractTextPlugin.extract({
	use: cssLoaders,
	fallback: 'vue-style-loader'
});

const lessExtract = ExtractTextPlugin.extract({
	use: cssLoaders.concat('less-loader'),
	fallback: 'vue-style-loader'
});

module.exports = {
	entry: {
		nenwy: path.resolve(__dirname, 'lib', 'index.js'),
		example: path.resolve(__dirname, 'examples', 'index.js')
	},

	mode: process.env.NODE_ENV || 'development',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		publicPath: 'dist'
		// library: 'Nenwy',
		// libraryTarget: 'umd'
	},

	module: {
		rules: [
			{
				test:/\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						'less': lessExtract,
						'css': cssExtract,
						'js': {
							loader: 'babel-loader'
						}
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				loader: lessExtract
			},
			{
				test: /\.css$/,
				loader: cssExtract
			},
			{
				test: /\.(png|jpe?g|gif|svg|ttf|woff2?|eot|otf|wav|mp3|obj|mtl)$/,
				loader: 'file-loader',
				options: {
					name: 'files/[path][name].[ext]?[hash]'
				}
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('[name].bundle.css')
	],

	devtool: '#eval-source-map'
};

if(process.env.NODE_ENV === 'production'){
	module.exports.devtool = '#source-map';
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		})
	]);
}
