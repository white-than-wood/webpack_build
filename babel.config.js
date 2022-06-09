module.exports = {
	presets: [[
		"@babel/preset-env", {
		  //esm是否转译为其他JSModule
			modules: false,
			//是否启用core-js,加入polyfill兼容老旧版浏览器原生不支持的新功能
			useBuiltIns: false
		}
	], [
		"@babel/preset-react", {
      runtime: "automatic"
		}
	]]
};