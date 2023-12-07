
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blogs Page',
    description: 'This is Blog Page',
}

export default function BlogLayout({
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
