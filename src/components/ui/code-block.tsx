import * as React from "react"
import { Check, Copy } from "lucide-react"
import { Highlight, themes } from "prism-react-renderer"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    code?: string
}

export function CodeBlock({
    className,
    code,
    children,
    ...props
}: CodeBlockProps) {
    const [hasCopied, setHasCopied] = React.useState(false)

    const language = className?.replace("language-", "") || "text"

    // Derive code content from code prop or children
    const codeContent = React.useMemo(() => {
        if (code) return code
        if (typeof children === "string") return children.trim()
        return ""
    }, [code, children])

    const onCopy = React.useCallback(() => {
        navigator.clipboard.writeText(codeContent)
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }, [codeContent])

    return (
        <div className={cn("relative group mb-4", className)} {...props}>
            <Highlight
                theme={themes.vsDark}
                code={codeContent}
                language={language}
            >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                        className={cn("rounded-lg p-4 overflow-x-auto text-sm font-mono min-h-[3.5rem]", className)}
                        style={style}
                    >
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
            <Button
                size="icon"
                variant="ghost"
                className="absolute right-2 top-2 h-8 w-8 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={onCopy}
            >
                <span className="sr-only">Copy</span>
                {hasCopied ? (
                    <Check className="h-4 w-4" />
                ) : (
                    <Copy className="h-4 w-4" />
                )}
            </Button>
        </div>
    )
}
