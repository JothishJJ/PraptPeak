import { Sparkles } from "lucide-react";

export default function Footer() {
    return (
        <footer className="container mx-auto px-4 py-8 mt-16 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <Sparkles className="h-6 w-6 text-purple-600" />
                    <span className="text-xl font-bold">Prapt<span className="text-purple-600">Peak</span></span>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Terms</a>
                    <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Privacy</a>
                    <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Help</a>
                    <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
                    © 2025 PraptPeek. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
