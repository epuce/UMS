module.exports = {
    outputDir: './../public',
    runtimeCompiler: true,
    css: {
        loaderOptions: {
          scss: {
            additionalData: `
                @import "~@/assets/variables.scss";
                @import "~@/assets/main.scss";
            `
          },
        }
    }
}