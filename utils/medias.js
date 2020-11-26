export function getStrapiMedia(url) {
  // Check if URL is a local path
  if (url.startsWith('/')) {
    // Prepend Strapi address
    // console.log(process)
    return `https://back.tatchi.fr${url}`
  }
  // Otherwise return full URL
  return url
}
