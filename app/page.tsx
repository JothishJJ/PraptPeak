import React from 'react';
import { Search, Zap, MessageSquare, ChevronRight } from 'lucide-react';
import AIPreview from '@/components/aiPreview';
import Header from '@/components/header';
import Footer from '@/components/footer';

const HomePage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">

      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Research with AI-powered intelligence</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12">Get accurate, real-time answers with sources from across the web</p>

          <AIPreview />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-transform transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-300">Get answers in seconds with our optimized AI research engine</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-transform transform hover:scale-105">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MessageSquare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Conversational</h3>
              <p className="text-gray-600 dark:text-gray-300">Ask follow-up questions naturally, like talking to a research assistant</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-transform transform hover:scale-105">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Search className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cited Sources</h3>
              <p className="text-gray-600 dark:text-gray-300">Every answer is backed by reliable sources from across the web</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Start researching with InsightAI today</h2>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-transform transform hover:scale-105 flex items-center justify-center">
                Get Started <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-transform transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
