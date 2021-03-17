/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const autoprefixer = require("autoprefixer");
module.exports = {
	entry: [
		"./src/index.tsx",
		"./src/css/index.less"
	],
	plugins:[
		new MiniCssExtractPlugin({
			filename: "../public/style/style.css",
			chunkFilename: "../public/style/[id].css",
		}),
		new CssMinimizerPlugin(),
		autoprefixer
	],
	output:{
		path: path.resolve(__dirname, "./dist"),
		publicPath: "/public/",
		filename: "bundle.js"
	},
	watch:true,
	devServer: {
		historyApiFallback: true,
		port: 8081,
		open: true
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module:{
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: "/node_modules/"
			},
			{
				test: /\.less$/,
				use: [MiniCssExtractPlugin.loader,"css-loader", 
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[autoprefixer({
										overrideBrowserslist:[">.1%"]
									})],
								],
							},
						},
					}, "less-loader"],
			}
		],
	}
};