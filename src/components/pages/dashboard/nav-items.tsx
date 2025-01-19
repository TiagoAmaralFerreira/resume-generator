"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navItems } from "@/mocks/menu"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavItems = () => {
    const pathName = usePathname()
    return (
        <nav className="w-full flex flex-col gap-2 px-2 py-4">
            {navItems.map((item, index) => {
                const isActive = pathName === item.path
                return (
                    <Link href={item.path} key={index}>
                        <Button
                            variant="ghost"
                            className={cn(
                                "w-full gap-2 justify-start",
                                isActive && "bg-accent"
                            )}>
                            <item.icon size={16} />
                            {item.label}
                        </Button>
                    </Link>
                )
            })}
        </nav>
    )
}