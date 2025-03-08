import React from 'react'

function About() {
    return (
        <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-16 font-mono min-h-screen">
            <div className="max-w-4xl mx-auto bg-[#1E1E1E] rounded-lg shadow-xl overflow-hidden">
                <div className="flex items-center px-3 py-2 bg-[#252526] text-gray-400 text-xs sm:text-sm">
                    <div className="flex space-x-1 sm:space-x-2 mr-2 sm:mr-4">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span>About /&gt;</span>
                </div>

                <div className="p-3 sm:p-6 text-gray-300 overflow-auto relative text-xs sm:text-sm">
                    {/* Line Numbers - Hidden on very small screens */}
                    <div className="hidden xs:flex xs:flex-col absolute left-0 top-0 bottom-0 w-8 sm:w-12 items-end pr-1 sm:pr-3 text-gray-600 pt-3 sm:pt-6 select-none bg-[#1E1E1E]">
                        {Array.from({ length: 38 }, (_, i) => (
                            <div key={i} className="leading-5 sm:leading-6 h-5 sm:h-6">{String(i + 1).padStart(2, '0')}</div>
                        ))}
                    </div>

                    {/* Code Content */}
                    <div className="xs:ml-8 sm:ml-12">
                        <div className="min-h-5 sm:min-h-6 py-0.5 break-words">
                            <span className="text-purple-400">class</span> <span className="text-yellow-300">Hasan</span> {"{"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-2 sm:pl-4 break-words">
                            <span className="text-green-400">// A dedicated software developer with expertise in full-stack development</span>
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-2 sm:pl-4 break-words">
                            <span className="text-green-400">// Team player with a problem-solving mindset and passion for continuous learning</span>
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-2 sm:pl-4 break-words">
                            <span className="text-purple-400">constructor</span>() {"{"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-4 sm:pl-8 break-words">
                            <span className="text-purple-400">this</span>.<span className="text-blue-400">name</span> = <span className="text-green-500">'Hasan'</span>
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-8 sm:pl-12 break-words">
                            <span className="text-purple-400">this</span>.<span className="text-blue-400">location</span> = <span className="text-green-500">'Iraq, Basra'</span>
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-8 sm:pl-12 break-words">
                            <span className="text-purple-400">this</span>.<span className="text-blue-400">email</span> = <span className="text-green-500">'hassan.21.adnan@gmail.com'</span>
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-4 sm:pl-4 break-words">
                            {"}"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-4 sm:pl-4 break-words">
                            <span className="text-yellow-400">workExperience</span>() {"{"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-8 sm:pl-12 break-words">
                            <span className="text-purple-400">return</span> [
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-12 sm:pl-12 break-words">
                            {"{"} <span className="text-green-500">'2023-2024'</span>: <span className="text-green-500">'Internship at Basra Oil Company - Basra, Iraq'</span> {"},"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-12 sm:pl-12 break-words">
                            {"{"} <span className="text-green-500">'DEVHOUSE'</span>: <span className="text-green-500">'CMC Application - App for Iraqi Ministry of Communications'</span> {"},"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-12 sm:pl-12 break-words">
                            {"{"} <span className="text-green-500">'DEVHOUSE'</span>: <span className="text-green-500">'E-Store - E-commerce platform for marketing mobile devices'</span> {"},"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-12 sm:pl-12 break-words">
                            {"{"} <span className="text-green-500">'DEVHOUSE'</span>: <span className="text-green-500">'Almasa.IO - Educational cognitive platform at Timeskoya Palace'</span> {"},"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-12 sm:pl-12 break-words">
                            {"{"} <span className="text-green-500">'DEVHOUSE'</span>: <span className="text-green-500">'FastFood App - Food delivery app for restaurants'</span> {"},"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-12 sm:pl-12 break-words">
                            {"{"} <span className="text-green-500">'DEVHOUSE'</span>: <span className="text-green-500">'Grand Millennium Restaurant AI Dashboard'</span> {"}"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-8 sm:pl-12 break-words">
                            ]
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-4 sm:pl-4 break-words">
                            {"}"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-4 sm:pl-4 break-words">
                            <span className="text-yellow-400">education</span>() {"{"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-8 sm:pl-12 break-words">
                            <span className="text-purple-400">return</span> [
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-12 sm:pl-12 break-words">
                            {"{"} <span className="text-green-500">'2020-2024'</span>: <span className="text-green-500">'AL-BASRA UNIVERSITY, College of Computer Science and Information Technology'</span> {"}"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-8 sm:pl-12 break-words">
                            ]
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-4 sm:pl-4 break-words">
                            {"}"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-4 sm:pl-4 break-words">
                            <span className="text-yellow-400">technicalSkills</span>() {"{"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-8 sm:pl-12 break-words">
                            <span className="text-purple-400">return</span> [
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-12 sm:pl-12 flex flex-wrap break-words">
                            <span className="inline-block text-green-500 mr-1">'React'</span>,
                            <span className="inline-block text-green-500 mr-1">'React Native'</span>,
                            <span className="inline-block text-green-500 mr-1">'NextJS'</span>,
                            <span className="inline-block text-green-500 mr-1">'Express'</span>,
                            <span className="inline-block text-green-500 mr-1">'NestJS'</span>,
                            <span className="inline-block text-green-500 mr-1">'JavaScript'</span>,
                            <span className="inline-block text-green-500 mr-1">'TypeScript'</span>,
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-12 sm:pl-12 flex flex-wrap break-words">
                            <span className="inline-block text-green-500 mr-1">'Material UI'</span>,
                            <span className="inline-block text-green-500 mr-1">'PostgreSQL'</span>,
                            <span className="inline-block text-green-500 mr-1">'TypeORM'</span>,
                            <span className="inline-block text-green-500 mr-1">'MongoDB'</span>,
                            <span className="inline-block text-green-500 mr-1">'ERP Systems'</span>,
                            <span className="inline-block text-green-500 mr-1">'Odoo'</span>,
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-8 sm:pl-12 break-words">
                            ]
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-4 sm:pl-4 break-words">
                            {"}"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-4 sm:pl-4 break-words">
                            <span className="text-yellow-400">languages</span>() {"{"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-8 sm:pl-12 break-words">
                            <span className="text-purple-400">return</span> [
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-12 sm:pl-12 flex flex-wrap break-words">
                            <span className="inline-block text-green-500 mr-1">'English'</span>,
                            <span className="inline-block text-green-500 mr-1">'Arabic'</span>
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-8 sm:pl-12 break-words">
                            ]
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 pl-4 sm:pl-4 break-words">
                            {"}"}
                        </div>
                        <div className="min-h-5 sm:min-h-6 py-0.5 break-words">
                            {"}"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About 