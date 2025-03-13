import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Sparkles className="h-8 w-8 text-purple-600" />
                    <span className="text-2xl font-bold">Prapt<span className="text-purple-600">Peak</span></span>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <a href="#" className="font-medium hover:text-purple-600 transition-colors">Features</a>
                    <a href="#" className="font-medium hover:text-purple-600 transition-colors">Pricing</a>
                    <a href="#" className="font-medium hover:text-purple-600 transition-colors">Documentation</a>
                    <a href="#" className="font-medium hover:text-purple-600 transition-colors">About</a>
                </nav>
                <div className="flex space-x-4">
                    <Link href="/login">
                        <button className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Login</button>
                    </Link>
                    <button className="px-4 py-2 text-sm font-medium bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Sign Up</button>
                </div>
            </div>
        </header>
    );
}
