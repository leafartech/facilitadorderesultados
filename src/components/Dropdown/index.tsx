import { PlusSmallIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface DropdownProps {
    title: string
    text: string
}

export default function Dropdown({ text, title }: DropdownProps) {
    const [isActived, setIsActived] = useState<boolean>(false)

    return (
        <div className="sm:max-w-xs w-full">
            <div className="w-full rounded border-b-2 border-my bg-gray-50 px-4 py-3 cursor-pointer" onClick={e => setIsActived(!isActived)}>
                <h4 className="text-xl flex justify-between font-medium">
                    {title}
                    <PlusSmallIcon className="h-5 w-5" />
                </h4>
                <div className={`py-3 text-gray-600 ${isActived ? 'block' : 'hidden'}`}>
                    <p className="text-sm">{text}</p>
                </div>
            </div>
        </div>
    )
}