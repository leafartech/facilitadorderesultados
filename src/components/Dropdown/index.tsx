import { PlusSmallIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface DropdownProps {
    title: string
    text: string
    second?: boolean
    href?: string
}

export default function Dropdown({ text, title, second, href }: DropdownProps) {
    const [isActived, setIsActived] = useState<boolean>(false)

    return (
        <div className="w-full">
            <div className={`w-full rounded border-b-2 ${second ? '' : 'border-my bg-gray-50'} px-4 py-3 cursor-pointer`} onClick={e => setIsActived(!isActived)}>
                <h4 className="text-xl flex justify-between font-medium">
                    {title}
                    <PlusSmallIcon className="h-5 w-5" />
                </h4>
                <div className={`py-3 ${second ? 'text-white/80' : 'text-gray-600'} ${isActived ? 'block' : 'hidden'}`}>
                    <p className="text-sm">
                        {text}
                        {href && (
                            <>
                                <br />
                                <a href={href} className="underline">link de compra</a>
                            </>
                        )}
                    </p>
                </div>
            </div>
        </div>
    )
}