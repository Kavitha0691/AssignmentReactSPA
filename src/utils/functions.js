export const getImageUrl = (img_url) => {
    return new URL(`../assets/${img_url}`, import.meta.url).href;
  };
  