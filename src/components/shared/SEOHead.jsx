import { Helmet } from 'react-helmet-async';
import { SEO_IMAGE } from '../../config';

export function SEOHead({
  title,
  description,
  keywords,
  jsonLd,
  image = SEO_IMAGE,
  imageAlt = 'Taxera - registration, tax, and compliance services',
  canonical = 'https://taxera.in',
  robots = 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
  siteName = 'Taxera',
}) {
  const normalizedKeywords = Array.isArray(keywords)
    ? keywords.join(', ')
    : typeof keywords === 'string'
      ? keywords
      : '';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {normalizedKeywords && <meta name="keywords" content={normalizedKeywords} />}
      <meta name="robots" content={robots} />
      <meta name="author" content="Taxera" />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:alt" content={imageAlt} />}
      {image && <meta property="og:image:width" content="1200" />}
      {image && <meta property="og:image:height" content="630" />}
      {image && <meta name="twitter:image" content={image} />}
      {image && <meta name="twitter:image:alt" content={imageAlt} />}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {jsonLd && Array.isArray(jsonLd) ? (
        jsonLd.map((ld, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
        ))
      ) : jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
