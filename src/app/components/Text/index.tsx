interface TextProps {
    bg: boolean
    main: string
    subtitle: string
}

export default function Text({ bg, main, subtitle}: TextProps) {
    return (
        <div className="text-center flex flex-col items-center justify-center">
            <h2 className={`font-bold text-3xl ${bg ? 'text-my' : 'text-gray-900'}`}>{main}</h2>
            <p className={`font-medium ${bg ? 'text-white' : 'text-my'}`}>{subtitle}</p>
        </div>
    )
}