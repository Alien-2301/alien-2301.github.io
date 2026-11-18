import { useEffect, useState } from 'react'

// one coloured piece of text
type Token = {
  text: string
  className?: string
}

// one line in the editor
type Line = {
  indent: boolean
  tokens: Token[]
}

// THE CODE TO TYPE. Edit this to change what appears.
const codeLines: Line[] = [
  {
    indent: false,
    tokens: [
      { text: 'const', className: 'c-muted' },
      { text: ' developer = {' },
    ],
  },
  {
    indent: true,
    tokens: [
      { text: 'fields: ', className: 'c-key' },
      { text: '[' },
      { text: '"Full-Stack"', className: 'c-str' },
      { text: ', ' },
      { text: '"Data-Science"', className: 'c-str' },
      { text: ', ' },
      { text: '"AI-ML"', className: 'c-str' },
      { text: '],' },
    ],
  },
  {
    indent: true,
    tokens: [
      { text: 'studying: ', className: 'c-key' },
      { text: '"BSc CS @ SIM–UOL"', className: 'c-str' },
      { text: ',' },
    ],
  },
  {
    indent: false,
    tokens: [{ text: '}' }],
  },
]

// count every character once, so we know when to stop
let totalChars = 0
for (const line of codeLines) {
  for (const token of line.tokens) {
    totalChars = totalChars + token.text.length
  }
}

const TYPING_SPEED = 45 // milliseconds per character

export function TypingCode() {
  // how many characters are typed so far
  const [typed, setTyped] = useState(0)

  // after each render, wait a bit, then type one more character
  useEffect(() => {
    if (typed >= totalChars) {
      return // finished, so stop
    }

    const timer = setTimeout(() => {
      setTyped(typed + 1)
    }, TYPING_SPEED)

    // cleanup: cancel the timer if the component disappears
    return () => clearTimeout(timer)
  }, [typed])

  // used while drawing, to know how many characters are left to show
  let remaining = typed
  let cursorShown = false

  return (
    <div className="code-body">
      {codeLines.map((line, lineIndex) => (
        <p key={lineIndex} className={line.indent ? 'indent' : ''}>
          {line.tokens.map((token, tokenIndex) => {
            // split this token into the typed part and the not-yet-typed part
            const shown = token.text.slice(0, remaining)
            const hidden = token.text.slice(shown.length)
            remaining = remaining - shown.length

            const isLastToken =
              lineIndex === codeLines.length - 1 &&
              tokenIndex === line.tokens.length - 1

            // put the cursor right after the last typed character
            let showCursor = false
            if (!cursorShown && remaining === 0 && (hidden !== '' || isLastToken)) {
              showCursor = true
              cursorShown = true
            }

            return (
              <span key={tokenIndex} className={token.className}>
                {shown}
                {showCursor && <span className="cursor"></span>}
                <span className="c-hidden">{hidden}</span>
              </span>
            )
          })}
        </p>
      ))}
    </div>
  )
}