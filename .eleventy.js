module.exports = function(eleventyConfig) {
    
    eleventyConfig.setTemplateFormats([
      "md",
      "css",
      "png",
      "jpg",
      "liquid"
    ]);

    return {
        dir: {
            layouts: "_layouts"
        }    
    }

  };