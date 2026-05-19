import type {
  CmsCampo,
  CmsHomeApiResponse,
  CmsPageData,
  HomeEmpresaItem,
  HomeFaqItem,
  HomeModuleItem,
  HomePageContent,
  HomeProcessoItem,
} from "@/types/cms"
import { FALLBACK_HOME_CONTENT } from "@/lib/cms-fallbacks"

export const CMS_HOME_API_URL =
  "https://revitacomunicacao.com.br/admintga/api/pages/home"

function getCampoValor<T>(campos: CmsCampo[], identificador: string): T | undefined {
  const campo = campos.find((c) => c.identificador === identificador)
  return campo?.valor as T | undefined
}

function asString(val: unknown, fallback: string): string {
  if (typeof val === "string" && val.trim()) return val
  return fallback
}

function parseModules(raw: unknown, fallback: HomeModuleItem[]): HomeModuleItem[] {
  if (!Array.isArray(raw) || raw.length === 0) return fallback

  return raw.map((item, index) => {
    const fb = fallback[index] ?? fallback[0]
    const row = item as Record<string, string>
    return {
      title: asString(row.titulo, fb.title),
      subtitle: asString(row.subtitulo, fb.subtitle),
      description: asString(row.descricao, fb.description),
      imageUrl: asString(row["imagem-de-fundo"], fb.imageUrl),
    }
  })
}

function parseEmpresas(raw: unknown, fallback: HomeEmpresaItem[]): HomeEmpresaItem[] {
  if (!Array.isArray(raw) || raw.length === 0) return fallback

  return raw.map((item, index) => {
    const fb = fallback[index] ?? fallback[0]
    const row = item as Record<string, string>
    return {
      label: asString(row.tipo, fb.label),
      iconUrl: asString(row.icone, fb.iconUrl),
    }
  })
}

function parseProcessos(raw: unknown, fallback: HomeProcessoItem[]): HomeProcessoItem[] {
  if (!Array.isArray(raw) || raw.length === 0) return fallback

  return raw.map((item, index) => {
    const fb = fallback[index] ?? fallback[0]
    const row = item as Record<string, string>
    return {
      title: asString(row.titulo, fb.title),
      description: asString(row.descricao, fb.description),
    }
  })
}

function parseFaqs(raw: unknown, fallback: HomeFaqItem[]): HomeFaqItem[] {
  if (!Array.isArray(raw) || raw.length === 0) return fallback

  return raw.map((item, index) => {
    const fb = fallback[index] ?? fallback[0]
    const row = item as Record<string, string>
    return {
      question: asString(row.pergunta, fb.question),
      answer: asString(row.resposta, fb.answer),
    }
  })
}

export function parseHomePageData(data: CmsPageData): HomePageContent {
  const fb = FALLBACK_HOME_CONTENT
  const campos = data.campos ?? []

  return {
    hero: {
      title: asString(getCampoValor(campos, "titulo-3"), fb.hero.title),
      description: asString(getCampoValor(campos, "descricao-2"), fb.hero.description),
      imageUrl: asString(getCampoValor(campos, "imagem"), fb.hero.imageUrl),
    },
    modules: parseModules(getCampoValor(campos, "modulos"), fb.modules),
    paraQuemE: {
      title: asString(getCampoValor(campos, "titulo"), fb.paraQuemE.title),
      backgroundUrl: asString(
        getCampoValor(campos, "imagem-de-fundo"),
        fb.paraQuemE.backgroundUrl
      ),
      items: parseEmpresas(getCampoValor(campos, "empresas"), fb.paraQuemE.items),
    },
    benefits: {
      title: asString(getCampoValor(campos, "titulo-1"), fb.benefits.title),
      description: asString(getCampoValor(campos, "descricao"), fb.benefits.description),
      backgroundUrl: asString(
        getCampoValor(campos, "imagem-de-fundo-1"),
        fb.benefits.backgroundUrl
      ),
      steps: parseProcessos(getCampoValor(campos, "processos"), fb.benefits.steps),
    },
    faq: {
      title: asString(getCampoValor(campos, "titulo-2"), fb.faq.title),
      subtitle: asString(getCampoValor(campos, "descricao-1"), fb.faq.subtitle),
      backgroundUrl: asString(
        getCampoValor(campos, "imagem-de-fundo-2"),
        fb.faq.backgroundUrl
      ),
      footerText: asString(getCampoValor(campos, "texto-inferior"), fb.faq.footerText),
      items: parseFaqs(getCampoValor(campos, "perguntas-e-respostas"), fb.faq.items),
    },
  }
}

export async function fetchHomePageContent(): Promise<HomePageContent> {
  const response = await fetch(CMS_HOME_API_URL)

  if (!response.ok) {
    throw new Error(`CMS: falha ao carregar home (${response.status})`)
  }

  const json = (await response.json()) as CmsHomeApiResponse

  if (!json.success || !json.data) {
    throw new Error(json.message ?? "CMS: resposta inválida")
  }

  return parseHomePageData(json.data)
}

/** Título do Hero: linhas antes da última + destaque na última linha. */
export function parseHeroTitle(title: string) {
  const lines = title.split(/\r\n|\n/).map((l) => l.trim()).filter(Boolean)

  if (lines.length >= 2) {
    return {
      beforeAccent: lines.slice(0, -1).join(" "),
      accent: lines[lines.length - 1],
    }
  }

  const match = title.match(/^(.+?)\s*(Mais controle\.?)\s*$/i)
  if (match) {
    return { beforeAccent: match[1].trim(), accent: match[2].trim() }
  }

  return { beforeAccent: title, accent: "" }
}

/** Título Para quem é: prefixo claro + "controle e rotina" em destaque. */
export function parseParaQuemTitle(title: string) {
  const accent = "controle e rotina"
  const lower = title.toLowerCase()
  const idx = lower.indexOf(accent)

  if (idx === -1) {
    return { prefixBeforeBreak: title, prefixAfterBreak: "", accent: "" }
  }

  const prefix = title.slice(0, idx).trim()
  const accentText = title.slice(idx, idx + accent.length)

  const empresasIdx = prefix.toLowerCase().indexOf("empresas")
  if (empresasIdx !== -1) {
    const end = empresasIdx + "empresas".length
    return {
      prefixBeforeBreak: prefix.slice(0, end).trim(),
      prefixAfterBreak: prefix.slice(end).trim(),
      accent: accentText,
    }
  }

  return { prefixBeforeBreak: prefix, prefixAfterBreak: "", accent: accentText }
}

/** Título Benefits: texto leve + "bem implantado" em destaque. */
export function parseBenefitsTitle(title: string) {
  const accent = "bem implantado"
  const idx = title.toLowerCase().indexOf(accent)

  if (idx === -1) {
    return { light: title, accent: "" }
  }

  return {
    light: title.slice(0, idx).trim(),
    accent: title.slice(idx, idx + accent.length),
  }
}
