export interface CmsCampo {
  nome: string
  identificador: string
  tipo: string
  valor: unknown
}

export interface CmsPageData {
  id: number
  titulo: string
  slug: string
  status: string
  campos: CmsCampo[]
}

export interface CmsHomeApiResponse {
  success: boolean
  data: CmsPageData
  message?: string
}

export interface HomeModuleItem {
  title: string
  subtitle: string
  description: string
  imageUrl: string
}

export interface HomeEmpresaItem {
  label: string
  iconUrl: string
}

export interface HomeProcessoItem {
  title: string
  description: string
}

export interface HomeFaqItem {
  question: string
  answer: string
}

export interface HomePageContent {
  hero: {
    title: string
    description: string
    imageUrl: string
  }
  modules: HomeModuleItem[]
  paraQuemE: {
    title: string
    backgroundUrl: string
    items: HomeEmpresaItem[]
  }
  benefits: {
    title: string
    description: string
    backgroundUrl: string
    steps: HomeProcessoItem[]
  }
  faq: {
    title: string
    subtitle: string
    backgroundUrl: string
    footerText: string
    items: HomeFaqItem[]
  }
}
