"use client"
import { useState, useEffect } from "react";
import { Sparkles, Search, ArrowRight } from "lucide-react";

export default function AIPreview() {

    const [searchQuery, setSearchQuery] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [typedText, setTypedText] = useState('');
    const [currentExampleIndex, setCurrentExampleIndex] = useState(0);

    const exampleQueries = [
        "Explain the latest advances in large language models",
        "How does quantum computing work?",
        "Compare transformer vs. LSTM architectures",
        "What are the ethical implications of AI in healthcare?"
    ];

    // Typing animation effect
    useEffect(() => {
        if (!isTyping) return;

        const currentExample = exampleQueries[currentExampleIndex];

        if (typedText.length < currentExample.length) {
            const timeout = setTimeout(() => {
                setTypedText(currentExample.substring(0, typedText.length + 1));
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setTypedText('');
                setCurrentExampleIndex((currentExampleIndex + 1) % exampleQueries.length);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [typedText, isTyping, currentExampleIndex, exampleQueries]);

    return (
        <>
            <div className="relative max-w-3xl mx-auto mb-16 group">
                <div className="absolute inset-0 bg-purple-500 opacity-5 rounded-xl blur-xl group-hover:opacity-10 transition-all duration-300"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
                    <div className="flex items-center p-4 border-b border-gray-100 dark:border-gray-700">
                        <Search className="h-5 w-5 text-gray-400 mr-3" />
                        <input
                            type="text"
                            className="w-full bg-transparent border-none outline-none text-lg placeholder-gray-400"
                            placeholder={exampleQueries[currentExampleIndex]}
                            value={searchQuery || typedText}
                            onChange={(e) => {
                                setIsTyping(false);
                                setSearchQuery(e.target.value);
                            }}
                            onFocus={() => setIsTyping(false)}
                        />
                        <button className="ml-3 p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="p-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                        <div className="flex items-start space-x-4 animate-fade-in">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <Sparkles className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1">
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4 mb-2 animate-pulse"></div>
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2 mb-2 animate-pulse"></div>
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-5/6 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
