import React from 'react'
import '../../data/assets/styles/style1.css';
import { graphql } from 'gatsby';

export const query = graphql`
  query($slug: String!) {
    contactsJson(slug: { eq: $slug }) {
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
`

const temp1 = ({ data }) => {
  const product = data.contactsJson

  return <section style={{
    backgroundSize: 'cover',
    padding: 20,
    backgroundImage: `url(${product.background_image})`
  }}>
    <div className="logo_block" id="logo_block">
      <img src={product.logo_image} className="logo" alt="logo" />
    </div>
    <div id="main_block" style={{
      backgroundSize: 'cover',
      margin: 'auto',
      backgroundImage: `url(${product.videoblock_bg})`
    }}>
      <div className="video_block" id="video_block">
        <iframe src={product.video_link} allowFullScreen id="video" title="video"></iframe>
      </div>
      <div className="text_block">
        <h1 className="title">
          {product.title}
        </h1>
        <p className="description">
          {product.description && Array.isArray(product.description) && product.description.length > 1?
            product.description.map((item, index) => {
              return <li key={index}>{item}</li>
            }): product.description[0]
          }
        </p>
      </div>
    </div>
    <div className="download_block">
      <a href={product.download_link} id="download_link">
        <img src={product.download_icon} alt="download" className="download_button" />
      </a>
    </div>
    <div className="contacts_block">
      <img src={product.watermark_image} alt="watermark" className="watermark" id="watermark" />
      <div className="copy_block">
        <p className="contacts">Visit our <a href={product.site_link} className="site_link" id="site_link">Website</a> <span id="follow_cta">and follow us</span>
          <a href={product.facebook_link} id="fb_link"><img src={product.facebook_icon} alt="facebook" className="fb_link" /></a>
          <a href={product.instagram_link} id="instagram_link"><img src={product.instagram_icon} alt="instagram" className="insta_link" /></a>
        </p>
        <p className="phone">
          <a href={`tel:${product.phone}`} id="phone_link">
            {product.phone}
            <img src={product.phone_icon} className='phone_icon' alt="phone" />
          </a>
        </p>
        <p className="copyright" id="copyright">
          {product.copyright}
        </p>
      </div>
    </div>
  </section>
}

export default temp1