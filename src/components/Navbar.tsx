import * as React from "react"
import { Menu, X, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Wargames", href: "/wargames/" },
    { name: "Rules", href: "/rules/" },
]

interface NavbarProps {
    pathname: string
}

export default function Navbar({ pathname }: NavbarProps) {
    const [open, setOpen] = React.useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-950/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <a href="/" className="group flex items-center gap-3 no-underline">
                    <img src="/favicon.svg" alt="OverTheWire" className="w-9" />
                    <div className="flex flex-col">
                        <span className="text-base font-semibold tracking-tight text-white">
                            OverTheWire
                        </span>
                        <span className="hidden text-[10px] leading-tight text-neutral-500 sm:block">
                            We're hackers, and we are good-looking.
                        </span>
                    </div>
                </a>

                <div className="hidden items-center gap-1 md:flex">
                    {navItems.map((item) => {
                        const isActive = pathname.startsWith(item.href)
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative rounded-md px-4 py-2 text-sm font-medium no-underline transition-all duration-200",
                                    isActive
                                        ? "bg-white/10 text-white"
                                        : "text-neutral-400 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                {item.name}
                                {isActive && (
                                    <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                                )}
                            </a>
                        )
                    })}
                </div>

                <div className="hidden items-center gap-1 md:flex">
                    <a
                        href="/information/donate"
                        className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-neutral-400 no-underline transition-all duration-200 hover:bg-white/5 hover:text-emerald-400"
                    >
                        <Heart className="h-3.5 w-3.5" />
                        Donate
                    </a>
                    <a
                        href="/information/chat"
                        className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-neutral-400 no-underline transition-all duration-200 hover:bg-white/5 hover:text-cyan-400"
                    >
                        <MessageCircle className="h-3.5 w-3.5" />
                        Help
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
                                        href="/"
                                        className="flex items-center gap-3 no-underline"
                                        onClick={() => setOpen(false)}
                                    >
                                        <img src="/favicon.svg" alt="OverTheWire" className="h-8 w-8 rounded-lg" />
                                        <span className="text-base font-semibold text-white">
                                            OverTheWire
                                        </span>
                                    </a>
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col gap-1 px-3 py-4">
                                {navItems.map((item) => {
                                    const isActive = pathname.startsWith(item.href)
                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className={cn(
                                                "flex items-center rounded-lg px-4 py-3 text-sm font-medium no-underline transition-all duration-200",
                                                isActive
                                                    ? "bg-white/10 text-white"
                                                    : "text-neutral-400 hover:bg-white/5 hover:text-white"
                                            )}
                                        >
                                            {item.name}
                                            {isActive && (
                                                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                            )}
                                        </a>
                                    )
                                })}
                            </div>

                            <Separator className="bg-white/10" />

                            <div className="flex flex-col gap-1 px-3 py-4">
                                <a
                                    href="/information/donate"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-neutral-400 no-underline transition-all duration-200 hover:bg-white/5 hover:text-emerald-400"
                                >
                                    <Heart className="h-4 w-4" />
                                    Donate
                                </a>
                                <a
                                    href="/information/chat"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-neutral-400 no-underline transition-all duration-200 hover:bg-white/5 hover:text-cyan-400"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    Help
                                </a>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}
