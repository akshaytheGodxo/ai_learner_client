import Link from "next/link";

export default function Header() {
    return (
        <>
            <nav className="bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="flex-shrink-0 text-white text-xl font-bold">
                                <Link href="/">Logo</Link>
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
                                    href="/about" 
                                    className="text-white px-3 py-2 hover:bg-white hover:text-black rounded-lg"
                                >
                                    About
                                </Link>
                                <Link 
                                    href="/contact" 
                                    className="text-white px-3 py-2 hover:bg-white hover:text-black rounded-lg"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
