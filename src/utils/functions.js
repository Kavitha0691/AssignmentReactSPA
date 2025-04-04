export const getImageUrl = (img_url) => {
    return new URL(`./src/assets/${img_url}`, import.meta.url).href;
  };
  