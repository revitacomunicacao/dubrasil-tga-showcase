import type { ReactNode } from "react"

const TAGLINE_RE =
  /^(Gestão empresarial|Implantação com método|Conformidade que protege|Informação estruturada|Mais que sistema)/

function isBulletList(lines: string[]) {
  return lines.length > 0 && lines.every((l) => l.startsWith("✔"))
}

function isOrderedListBlock(lines: string[]) {
  return lines.length > 1 && !lines.some((l) => l.startsWith("✔"))
}

/** Converte texto do CMS no mesmo markup usado antes no FAQ estático. */
export function renderFaqAnswer(text: string): ReactNode {
  const blocks = text
    .split(/\r\n\r\n|\n\n/)
    .map((b) => b.trim())
    .filter(Boolean)

  return (
    <>
      {blocks.map((block, blockIndex) => {
        const lines = block.split(/\r\n|\n/).map((l) => l.trim()).filter(Boolean)
        const isFirst = blockIndex === 0
        const isTagline = lines.length === 1 && TAGLINE_RE.test(lines[0])

        if (isBulletList(lines)) {
          return (
            <ul key={blockIndex} className="mt-4 space-y-1">
              {lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          )
        }

        if (isOrderedListBlock(lines)) {
          return (
            <ol key={blockIndex} className="mt-4 list-decimal pl-5 space-y-1">
              {lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
          )
        }

        if (lines.length > 1) {
          return (
            <div key={blockIndex} className={isFirst ? "" : "mt-4"}>
              {lines.map((line, i) => (
                <p key={i} className={i > 0 ? "mt-4" : ""}>
                  {line}
                </p>
              ))}
            </div>
          )
        }

        return (
          <p
            key={blockIndex}
            className={
              isTagline
                ? "mt-4 text-[20px] font-medium text-foreground/80"
                : isFirst
                  ? ""
                  : "mt-4"
            }
          >
            {lines[0]}
          </p>
        )
      })}
    </>
  )
}
