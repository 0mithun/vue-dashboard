/* eslint-disable prettier/prettier */
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `                
            @import "@/global-styles/colors.scss";
            @import "@/global-styles/typography.scss";
        `,
      },
    },
  },
};
