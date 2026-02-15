import * as React from "react"
import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ConnectionInfoProps {
    className?: string
    username?: string
    password?: string
    url?: string
}

export function ConnectionInfo({
    className,
    username,
    password,
    url,
}: ConnectionInfoProps) {

    const copyToClipboard = React.useCallback((text: string) => {
        navigator.clipboard.writeText(text)
    }, [])

    return (
        <Card className={cn("w-full mb-6", className)}>
            <CardHeader className="pb-3">
                <CardTitle>Level Access</CardTitle>
                <CardDescription>
                    Use these credentials to access the level.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                {username && (
                    <div className="grid gap-2">
                        <Label htmlFor="username">Username</Label>
                        <div className="flex items-center space-x-2">
                            <Input
                                id="username"
                                value={username}
                                readOnly
                                className="font-mono bg-muted"
                            />
                            <CopyButton text={username} />
                        </div>
                    </div>
                )}
                {password && (
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="flex items-center space-x-2">
                            <Input
                                id="password"
                                value={password}
                                readOnly
                                className="font-mono bg-muted"
                            />
                            <CopyButton text={password} />
                        </div>
                    </div>
                )}
                {url && (
                    <div className="grid gap-2">
                        <Label htmlFor="url">URL</Label>
                        <div className="flex items-center space-x-2">
                            <Input
                                id="url"
                                value={url}
                                readOnly
                                className="font-mono bg-muted"
                            />
                            <CopyButton text={url} />
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

function CopyButton({ text }: { text: string }) {
    const [hasCopied, setHasCopied] = React.useState(false)

    const onCopy = React.useCallback(() => {
        navigator.clipboard.writeText(text)
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }, [text])

    return (
        <Button
            size="icon"
            variant="outline"
            className="h-10 w-10 shrink-0"
            onClick={onCopy}
        >
            <span className="sr-only">Copy</span>
            {hasCopied ? (
                <Check className="h-4 w-4" />
            ) : (
                <Copy className="h-4 w-4" />
            )}
        </Button>
    )
}
