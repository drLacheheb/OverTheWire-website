import * as React from "react"
import { Menu, Heart, MessageCircle, Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { cn, formatPath } from "@/lib/utils"

interface NavbarProps {
    pathname: string
}

export default function Navbar({ pathname }: NavbarProps) {
    const [open, setOpen] = React.useState(false)

    // Helper to check if a link is active
    const isLinkActive = (href: string) => {
        const formattedHref = formatPath(href);
        return pathname.startsWith(formattedHref);
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-950/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <a href={formatPath("/")} className="group flex items-center gap-3 no-underline">
                    <img src={formatPath("/favicon.svg")} alt="OverTheWire" className="w-9" />
                    <div className="flex flex-col">
                        <span className="text-base font-semibold tracking-tight text-white">
                            OverTheWire
                        </span>
                        <span className="hidden text-xs leading-tight text-neutral-500 sm:block">
                            We're hackers, and we are good-looking.
                        </span>
                    </div>
                </a>

                {/* Left/Center Links: Rules & Help */}
                <div className="hidden items-center gap-1 md:flex">
                    <a
                        href={formatPath("/rules/")}
                        className={cn(
                            "inline-flex items-center gap-2 rounded-md px-4 py-2 text-base font-medium no-underline transition-all duration-200",
                            isLinkActive("/rules/")
                                ? "bg-white/10 text-amber-400"
                                : "text-neutral-400 hover:bg-white/5 hover:text-amber-400"
                        )}
                    >
                        <Book className="h-4 w-4" />
                        Rules
                    </a>
                    <a
                        href={formatPath("/chat")}
                        className={cn(
                            "inline-flex items-center gap-2 rounded-md px-4 py-2 text-base font-medium no-underline transition-all duration-200",
                            isLinkActive("/chat")
                                ? "bg-white/10 text-cyan-400"
                                : "text-neutral-400 hover:bg-white/5 hover:text-cyan-400"
                        )}
                    >
                        <MessageCircle className="h-4 w-4" />
                        Help
                    </a>
                </div>

                {/* Right Links: Donate */}
                <div className="hidden items-center gap-1 md:flex">
                    <a
                        href={formatPath("/donate")}
                        className={cn(
                            "inline-flex items-center gap-2 rounded-md px-4 py-2 text-base font-medium no-underline transition-all duration-200",
                            isLinkActive("/donate")
                                ? "bg-white/10 text-emerald-400"
                                : "text-neutral-400 hover:bg-white/5 hover:text-emerald-400"
                        )}
                    >
                        <Heart className="h-4 w-4" />
                        Donate
                    </a>
                </div>

                <div className="flex md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-neutral-400 hover:bg-white/10 hover:text-white"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className="w-72 border-r border-white/10 bg-neutral-950 p-0"
                        >
                            <SheetHeader className="border-b border-white/10 px-6 py-5">
                                <SheetTitle>
                                    <a
                                        href={formatPath("/")}
                                        className="flex items-center gap-3 no-underline"
                                        onClick={() => setOpen(false)}
                                    >
                                        <img src={formatPath("/favicon.svg")} alt="OverTheWire" className="h-8 w-8 rounded-lg" />
                                        <span className="text-base font-semibold text-white">
                                            OverTheWire
                                        </span>
                                    </a>
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col gap-1 px-3 py-4">
                                <a
                                    href={formatPath("/rules/")}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium no-underline transition-all duration-200",
                                        isLinkActive("/rules/")
                                            ? "bg-white/10 text-amber-400"
                                            : "text-neutral-400 hover:bg-white/5 hover:text-amber-400"
                                    )}
                                >
                                    <Book className="h-5 w-5" />
                                    Rules
                                </a>
                                <a
                                    href={formatPath("/chat")}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium no-underline transition-all duration-200",
                                        isLinkActive("/chat")
                                            ? "bg-white/10 text-cyan-400"
                                            : "text-neutral-400 hover:bg-white/5 hover:text-cyan-400"
                                    )}
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    Help
                                </a>
                            </div>

                            <Separator className="bg-white/10" />

                            <div className="flex flex-col gap-1 px-3 py-4">
                                <a
                                    href={formatPath("/donate")}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium no-underline transition-all duration-200",
                                        isLinkActive("/donate")
                                            ? "bg-white/10 text-emerald-400"
                                            : "text-neutral-400 hover:bg-white/5 hover:text-emerald-400"
                                    )}
                                >
                                    <Heart className="h-5 w-5" />
                                    Donate
                                </a>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}
