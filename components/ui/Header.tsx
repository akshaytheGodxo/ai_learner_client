import Link from "next/link";
import Image from "next/image";


export default function Header() {
    return (
        <>
            <nav className="bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        
                        {/* Logo */}
                        <div className="flex items-center">
                        <div className="shrink-0">
                            <Link href="/">
                            <Image 
                                src="/cat.png"        
                                alt="Logo"
                                width={100}             
                                height={100}
                            />
                            </Link>
                        </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <Link 
                                    href="/" 
                                    className="text-white px-3 py-2 hover:bg-white hover:text-black rounded-lg"
                                >
                                    Home
                                </Link>
                                <Link 
                                    href="/quiz" 
                                    className="text-white px-3 py-2 hover:bg-white hover:text-black rounded-lg"
                                >
                                    Quiz
                                </Link>
                                <Link
                                    href="/stats" 
                                    className="text-white px-3 py-2 hover:bg-white hover:text-black rounded-lg"
                                >
                                    Performance
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
