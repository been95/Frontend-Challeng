const path = require('path');
module.exports ={
    entry:"./src/js/index.js",//자바스크립트에 진입점
    output:{
        filename:"bundle.js",
        path: parth.resolve(__dirname,"./dist"),
        clean: true
    },
    devtool:"source-map",
    mode:"development",
    optimization:{
        minmizer:{
            
        }
    }
}