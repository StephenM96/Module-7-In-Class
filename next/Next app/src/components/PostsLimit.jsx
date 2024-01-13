'use client'
import { useRouter, usePathname, useSearchParams } from "next/navigation"

export default function PostsLimit(defaultLimit) {
    const searchParams = useSearchParams() //next.js hook for search parameters
    const router = useRouter() //next.js hook for client side navigation
    const pathname = usePathname() // next.js hook for current URL path

    const limit = searchParams.has('limit') ?
        searchParams.get('limit') : defaultLimit

    const handleChangeLimit = (e) => {
        router.replace(pathname + '?limit=' + e.target.value)
    }

    return (
        <label className="PostsLimit">Number of Posts:
            <select onChange={handleChangeLimit} value={limit}>
                <option>5</option>
                <option>10</option>
                <option>20</option>
            </select>
        </label>
    )
}