import { ReactNode } from "react";

interface MyLinkProps {
    path: string
    children: ReactNode
    id: boolean
}

export default function MyLink({ path, children, id }: MyLinkProps) {
    // const router = useRouter()
    
    return (
        <li>
            <a id={id ? "link_item" : ''} href={`#${path}`} className={`relative font-medium text-gray-600 text-sm hover:text-my`}>
                {children}
            </a>
        </li>
    )
}