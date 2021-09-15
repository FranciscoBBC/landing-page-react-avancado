export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: LogoProps
}

export type SectionAbout = {
  title: string
  description: string
  image: LogoProps
}

export type Tech = {
  title: string
  techIcons: {
    icon: {
      url: string
      name: string
    }
    title: string
  }[]
}

export type Concepts = {
  title: string
  concepts: {
    title: string
  }[]
}

export type Models = {
  title: string
  models: {
    title: string
    subtitle: string
    description: string
  }[]
}

export type Agenda = {
  title: string
  description: string
}

export type Pricing = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type AboutUs = {
  title: string
  authors: {
    photo: {
      url: string
    }
    name: string
    role: string
    socialLinks: {
      title: string
      url: string
    }[]
    description: string
  }[]
}

export type Reviews = {
  title: string
  reviews: {
    name: string
    text: string
    photo: {
      url: string
    }
  }[]
}

export type Faq = {
  title: string
  questions: {
    question: string
    answer: string
  }[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAbout
  sectionTech: Tech
  sectionConcepts: Concepts
  sectionModels: Models
  sectionAgenda: Agenda
  pricingBox: Pricing
  sectionAboutUs: AboutUs
  sectionReviews: Reviews
  sectionFaq: Faq
}
