import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { pageMetadata, siteUrl } from '../seoMetadata'

const defaultImage = `${siteUrl}/logo.png`

function RouteMetadata() {
  const { pathname } = useLocation()
  const normalizedPath =
    pathname === '/' ? '/' : pathname.replace(/\/+$/, '').toLowerCase()
  const page = pageMetadata[normalizedPath]
  const canonicalUrl = `${siteUrl}${normalizedPath}`

  if (!page) {
    return (
      <Helmet>
        <title>Page Not Found | Marigold Secondary School</title>
        <meta
          name="description"
          content="The requested page could not be found on the Marigold Secondary School website."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
    )
  }

  if (page.noindex) {
    return (
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
    )
  }

  return (
    <Helmet>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={defaultImage} />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: page.title,
          description: page.description,
          inLanguage: 'en-IN',
          isPartOf: { '@id': `${siteUrl}/#website` },
          about: { '@id': `${siteUrl}/#school` },
        })}
      </script>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={defaultImage} />
    </Helmet>
  )
}

export default RouteMetadata
