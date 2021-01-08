exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allContactsJson {
        edges {
          node {
            id
            slug
            template
            logo_image
            background_image
            video_link
            videoblock_bg
            title
            description
            download_link
            download_icon
            site_link
            show_facebook_icon
            show_instagram_icon
            facebook_link
            instagram_link
            facebook_icon
            instagram_icon
            phone
            phone_icon
            watermark
            watermark_image
            copyright
          }
        }
      }
    }
  `)

  if (results.error) {
    console.error('Something went wrong!')
    return
  }

  results.data.allContactsJson.edges.forEach(edge => {
    const product = edge.node

    createPage({
      path: `/${product.slug}/`,
      component: require.resolve(`./src/templates/${product.template}.js`),
      context: {
        slug: product.slug,
        logo_image: product.logo_image,
        background_image: product.background_image,
        video_link: product.video_link,
        videoblock_bg: product.videoblock_bg,
        title: product.title,
        description: product.description,
        download_link: product.download_link,
        download_icon: product.download_icon,
        site_link: product.site_link,
        show_facebook_icon: product.show_facebook_icon,
        show_instagram_icon: product.show_instagram_icon,
        facebook_link: product.facebook_link,
        instagram_link: product.instagram_link,
        facebook_icon: product.facebook_icon,
        instagram_icon: product.instagram_icon,
        phone: product.phone,
        phone_icon: product.phone_icon,
        watermark: product.watermark,
        watermark_image: product.watermark_image,
        copyright: product.copyright
      }
    })
  });
}