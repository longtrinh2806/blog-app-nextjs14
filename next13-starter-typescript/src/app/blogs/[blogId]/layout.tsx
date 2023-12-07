
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog Detail',
    description: 'This is Blog Detail Page',
}

export default function ViewDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </ >
    )
}
