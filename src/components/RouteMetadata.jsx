import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const siteUrl = 'https://marigoldschoolbehror.com'
const defaultImage = `${siteUrl}/logo.png`

const pageMetadata = {
  '/': {
    title: 'Marigold Secondary School Behror | Admissions Open 2027-28',
    description:
      'Discover Marigold Secondary School in Behror, Rajasthan. Quality education, experienced faculty and modern learning for Pre-Nursery to Grade 10. Admissions open for 2027-28.',
  },
  '/about-us': {
    title: 'About Marigold Secondary School | Behror',
    description:
      'Learn about Marigold Secondary School, Behror: our educational approach, values, campus and commitment to helping students grow academically and personally.',
  },
  '/admission-form': {
    title: 'Admission Form 2027-28 | Marigold School Behror',
    description:
      'Apply for admission at Marigold Secondary School, Behror for the 2027-28 academic session. Find the admission form and start your application.',
  },
  '/admission-policy': {
    title: 'Admission Policy | Marigold Secondary School Behror',
    description:
      'Review the admission policy for Marigold Secondary School in Behror, including eligibility, application requirements and the school’s selection process.',
  },
  '/admission-process': {
    title: 'Admission Process 2027-28 | Marigold School Behror',
    description:
      'Explore the admission process at Marigold Secondary School, Behror, including eligibility, entrance test information and how to apply for 2027-28.',
  },
  '/contact-us': {
    title: 'Contact Marigold Secondary School | Behror',
    description:
      'Contact Marigold Secondary School in Behror, Rajasthan for admissions, school enquiries and other information. Find our contact details and send us a message.',
  },
  '/curriculum': {
    title: 'School Curriculum | Marigold Secondary School Behror',
    description:
      'Explore the Marigold Secondary School curriculum in Behror, designed to build strong concepts, academic skills and well-rounded development from Pre-Nursery to Grade 10.',
  },
  '/discipline': {
    title: 'Rules and Discipline | Marigold School Behror',
    description:
      'Read the student rules and discipline guidelines at Marigold Secondary School, Behror, and learn how the school supports a respectful, safe learning environment.',
  },
  '/exam-result': {
    title: 'Exam Results | Marigold Secondary School Behror',
    description:
      'Find examination result information for students of Marigold Secondary School in Behror, Rajasthan.',
  },
  '/fees': {
    title: 'School Fees | Marigold Secondary School Behror',
    description:
      'View fee information for Marigold Secondary School, Behror. Contact the school for details about fee structure and payment-related enquiries.',
  },
  '/gallery': {
    title: 'School Gallery | Marigold Secondary School Behror',
    description:
      'See campus life, school events and student activities at Marigold Secondary School in Behror, Rajasthan.',
  },
  '/our-cofounder': {
    title: 'Our Co-founder | Marigold Secondary School Behror',
    description:
      'Meet the co-founder of Marigold Secondary School, Behror, and learn about the vision and leadership behind the school.',
  },
  '/our-founder': {
    title: 'Our Founder | Marigold Secondary School Behror',
    description:
      'Learn about the founder of Marigold Secondary School in Behror and the vision behind the school’s educational journey.',
  },
  '/our-history': {
    title: 'Our History Since 2000 | Marigold School Behror',
    description:
      'Discover the history of Marigold Secondary School, established in 2000, and its journey of supporting education and student growth in Behror.',
  },
  '/scholarships': {
    title: 'Scholarships | Marigold Secondary School Behror',
    description:
      'Learn about scholarships at Marigold Secondary School, Behror, including consideration of entrance test performance and previous academic records.',
  },
}

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
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={defaultImage} />
    </Helmet>
  )
}

export default RouteMetadata
