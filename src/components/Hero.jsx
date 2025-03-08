import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function Hero() {
    return (
        <div className="text-center min-h-screen flex flex-col justify-center relative">
            <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                    Hi, my name is <span className="text-purple-500">Hasan</span>
                </h1>
                <h2 className="text-3xl md:text-5xl mb-8">
                    I'm a{' '}
                    <TypeAnimation
                        sequence={[
                            'Full Stack Developer',
                            2000,
                            'React Developer',
                            2000,
                            'Mobile Developer',
                            2000,
                            'Backend Developer',
                            2000,
                        ]}
                        wrapper="em"
                        speed={50}
                        className="text-purple-500"
                        repeat={Infinity}
                    />
                </h2>
                <div className="mb-8 text-xl">
                    <p className="mb-4 animate-fadeIn">Specializing in:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            'React',
                            'React Native',
                            'Next.js',
                            'NestJS',
                            'MongoDB',
                            'Prisma',
                            'JavaScript',
                            'TypeScript',
                            'Node.js',
                            'Tailwind CSS'
                        ].map((skill, index) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-purple-200/10 rounded-full hover:bg-purple-500/20 transition-all cursor-default"
                                style={{
                                    opacity: 1,
                                    animation: `fadeIn 0.5s ease forwards`,
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <br />
                <button className="px-8 py-3 bg-purple-500 rounded-full text-lg hover:bg-purple-600 transition-colors animate-bounce">
                    Let me show You...
                </button>
            </div>

        </div>
    )
}

export default Hero 