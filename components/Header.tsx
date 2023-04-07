import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { BiArrowBack } from 'react-icons/bi'

interface HeaderProps {
    showBackArrow?: boolean
    label: string
}

const Header: React.FC<HeaderProps> = ({ showBackArrow, label }) => {
    const router = useRouter()

    const handleBack = useCallback(() => {
        router.back()
    }, [router])

    return (
        <div className="border-neutral-800 p-5">
            <div className="flex flex-row items-center gap-4">
                {showBackArrow && (
                    <BiArrowBack
                        onClick={handleBack}
                        color="white"
                        size={24}
                        className="cursor-pointer hover:opacity-70 transition"
                    />
                )}
                <h1 className="text-white text-xl px-2 font-semibold">
                    {label}
                </h1>
            </div>
        </div>
    )
}

export default Header
