import React, { useState, useEffect, useRef } from 'react'
import {
    EnvelopeIcon,
    MapPinIcon,
    CodeBracketIcon,
    CheckCircleIcon,
    XMarkIcon
} from '@heroicons/react/24/outline'

// Animated background component
const AnimatedBackground = () => {
    const techTerms = [
        '<hasan/>',
        'React',
        'JavaScript',
        'TypeScript',
        'Node.js',
        'CSS',
        'HTML',
        'MongoDB',
        'Express',
        'NextJS',
        'Git',
        'API',
        'JSON',
        'function()',
        'const dev = 💻',
        '{ code }',
        '=> {}',
        '<div>',
        'npm install',
        '$.ajax()',
        'npm run dev',
        'git push',
        'yarn add',
    ];

    // Create animated elements
    const [elements, setElements] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Adjust number of elements based on screen size
        const elementCount = windowWidth < 768 ? 15 : 30;

        // Create elements with random properties
        const newElements = Array.from({ length: elementCount }, (_, i) => ({
            id: i,
            text: techTerms[Math.floor(Math.random() * techTerms.length)],
            x: Math.random() * 100, // random x position (%)
            y: Math.random() * 100, // random y position (%)
            size: windowWidth < 768 ? Math.random() * 0.7 + 0.3 : Math.random() * 1 + 0.5, // smaller on mobile
            opacity: Math.random() * 0.4 + 0.1, // random opacity between 0.1 and 0.5
            speed: Math.random() * 50 + 30, // random animation duration between 30s and 80s
            delay: Math.random() * 5, // random animation delay
            direction: Math.random() > 0.5 ? 'normal' : 'reverse', // random direction
        }));

        setElements(newElements);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {elements.map(el => (
                <div
                    key={el.id}
                    className="absolute text-purple-300 whitespace-nowrap font-mono"
                    style={{
                        left: `${el.x}%`,
                        top: `${el.y}%`,
                        fontSize: `${el.size}rem`,
                        opacity: el.opacity,
                        animation: `float ${el.speed}s linear ${el.delay}s infinite ${el.direction}`,
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    {el.text}
                </div>
            ))}
        </div>
    );
};

// Multi-step form component
const ContactForm = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleFocus = (field) => {
        setFocusedField(field);
    };

    const handleBlur = () => {
        setFocusedField(null);
    };

    const validateStep = () => {
        const newErrors = {};

        if (currentStep === 1) {
            if (!formData.name.trim()) newErrors.name = 'Name is required';
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = 'Email is invalid';
            }
        } else if (currentStep === 2) {
            if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        } else if (currentStep === 3) {
            if (!formData.message.trim()) newErrors.message = 'Message is required';
            else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep()) {
            if (currentStep < 4) {
                setCurrentStep(prev => prev + 1);
            }
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep()) {
            // Here you would typically send the form data to your backend
            console.log('Form submitted:', formData);
            setIsSubmitted(true);
            setCurrentStep(5); // Move to thank you step
        }
    };

    const resetForm = () => {
        setCurrentStep(1);
        setFormData({ name: '', email: '', message: '', subject: '' });
        setIsSubmitted(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 md:p-4 animate-fadeIn overflow-auto">
            <AnimatedBackground />

            <div className="w-full max-w-3xl bg-gray-900 bg-opacity-90 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden relative z-10">
                <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-800">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Get in touch!</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Close form"
                    >
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>

                <div className="p-4 md:p-8">
                    {currentStep === 5 ? (
                        <div className="text-center py-6 md:py-10 space-y-4 md:space-y-6 animate-fadeIn">
                            <CheckCircleIcon className="h-16 md:h-20 w-16 md:w-20 text-green-500 mx-auto animate-bounce" />
                            <h3 className="text-xl md:text-2xl font-bold text-white">Thank you, {formData.name}!</h3>
                            <p className="text-lg md:text-xl text-gray-300">
                                Your message has been received. I'll get back to you soon at {formData.email}.
                            </p>
                            <button
                                onClick={resetForm}
                                className="mt-6 md:mt-8 bg-purple-600 hover:bg-purple-700 text-white py-2 md:py-3 px-6 md:px-8 rounded-full text-base md:text-lg transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="min-h-[300px]">
                            {currentStep === 1 && (
                                <div className="space-y-8 animate-fadeIn animate-slideInRight">
                                    <div className="text-left text-base md:text-xl text-white flex flex-col sm:flex-row sm:items-baseline gap-2">
                                        <span>Hi, my name is</span>
                                        <span className="relative inline-block mt-2 sm:mt-0">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('name')}
                                                onBlur={handleBlur}
                                                required
                                                placeholder=""
                                                className={`bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-gray-500 focus:border-purple-500'} outline-none px-2 w-full min-w-[120px] sm:w-40`}
                                            />
                                            <label
                                                className={`absolute left-2 transition-all duration-200 pointer-events-none ${formData.name || focusedField === 'name' ? 'text-xs -top-4 text-purple-400' : 'top-0'}`}
                                            >
                                                your name
                                            </label>
                                            {errors.name && (
                                                <span className="absolute text-xs text-red-500 left-0 -bottom-5">{errors.name}</span>
                                            )}
                                        </span>
                                    </div>

                                    <div className="text-left text-base md:text-xl text-white flex flex-col sm:flex-row sm:items-baseline gap-2">
                                        <span>and my email is</span>
                                        <span className="relative inline-block mt-2 sm:mt-0">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('email')}
                                                onBlur={handleBlur}
                                                required
                                                placeholder=""
                                                className={`bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-gray-500 focus:border-purple-500'} outline-none px-2 w-full min-w-[140px] sm:w-60`}
                                            />
                                            <label
                                                className={`absolute left-2 transition-all duration-200 pointer-events-none ${formData.email || focusedField === 'email' ? 'text-xs -top-4 text-purple-400' : 'top-0'}`}
                                            >
                                                your email
                                            </label>
                                            {errors.email && (
                                                <span className="absolute text-xs text-red-500 left-0 -bottom-5">{errors.email}</span>
                                            )}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {currentStep === 2 && (
                                <div className="space-y-6 animate-fadeIn animate-slideInRight">
                                    <div className="text-left text-base md:text-xl text-white">
                                        I'm reaching out about <span className="relative block mt-4">
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('subject')}
                                                onBlur={handleBlur}
                                                required
                                                placeholder=""
                                                className={`bg-transparent border-b ${errors.subject ? 'border-red-500' : 'border-gray-500 focus:border-purple-500'} outline-none px-2 w-full`}
                                            />
                                            <label
                                                className={`absolute left-2 transition-all duration-200 pointer-events-none ${formData.subject || focusedField === 'subject' ? 'text-xs -top-4 text-purple-400' : 'top-0'}`}
                                            >
                                                subject
                                            </label>
                                            {errors.subject && (
                                                <span className="absolute text-xs text-red-500 left-0 -bottom-5">{errors.subject}</span>
                                            )}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {currentStep === 3 && (
                                <div className="space-y-6 animate-fadeIn animate-slideInRight">
                                    <div className="text-left text-base md:text-xl text-white">
                                        <span className="relative block">
                                            <label className="block mb-2">My message:</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                placeholder="Type your message here..."
                                                className={`w-full h-32 md:h-40 bg-gray-800 text-white rounded p-2 focus:outline-none focus:ring-2 ${errors.message ? 'ring-1 ring-red-500' : 'focus:ring-purple-500'}`}
                                            />
                                            {errors.message && (
                                                <span className="block text-xs text-red-500 mt-1">{errors.message}</span>
                                            )}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {currentStep === 4 && (
                                <div className="space-y-4 md:space-y-6 animate-fadeIn animate-slideInRight">
                                    <div className="text-left text-base md:text-xl text-white">
                                        <h3 className="font-bold mb-4">Please confirm your details:</h3>
                                        <div className="bg-gray-800 rounded-lg p-3 md:p-4 space-y-2">
                                            <p><span className="text-gray-400">Name:</span> {formData.name}</p>
                                            <p><span className="text-gray-400">Email:</span> {formData.email}</p>
                                            <p><span className="text-gray-400">Subject:</span> {formData.subject}</p>
                                            <p className="mt-3 md:mt-4"><span className="text-gray-400">Message:</span></p>
                                            <p className="bg-gray-700 p-3 rounded mt-1 text-sm md:text-base break-words">{formData.message}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <div className="text-gray-400 text-sm md:text-base order-2 sm:order-1">
                                    STEP {currentStep}/4
                                </div>

                                <div className="flex gap-3 md:gap-4 order-1 sm:order-2">
                                    {currentStep > 1 && (
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 md:px-6 rounded-full text-sm md:text-base"
                                        >
                                            BACK
                                        </button>
                                    )}

                                    {currentStep < 4 ? (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 md:px-6 rounded-full text-sm md:text-base"
                                        >
                                            NEXT →
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 md:px-6 rounded-full text-sm md:text-base"
                                        >
                                            SUBMIT
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

// Main Contact component
function Contact() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 animate-fadeIn">Get In Touch</h2>
                <p className="text-lg md:text-xl text-gray-300 mb-10 md:mb-12 animate-fadeIn animation-delay-200">
                    I'm always open to new opportunities and interesting projects.
                    Feel free to reach out!
                </p>

                {!showForm ? (
                    <button
                        onClick={() => setShowForm(true)}
                        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full transition-all hover:shadow-lg hover:scale-105 animate-pulse duration-500 text-lg md:text-xl"
                    >
                        GET IN TOUCH
                    </button>
                ) : (
                    <ContactForm onClose={() => setShowForm(false)} />
                )}
            </div>

            {/* Contact Links Section */}
            <div className="max-w-3xl mx-auto mt-12 md:mt-16 pt-8 border-t border-gray-800">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-center animate-fadeIn">Other Ways to Connect</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="flex flex-col gap-4 animate-slideInUp animation-delay-500">
                        <a
                            href="https://www.linkedin.com/in/hasan-adnan-b6464a341"
                            className="text-purple-500 hover:text-purple-400 transition-colors transform hover:scale-105 flex items-center gap-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="w-6 h-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                                </svg>
                            </span>
                            Hasan Adnan
                        </a>
                        <a
                            href="https://github.com/hassan2-dev"
                            className="text-purple-500 hover:text-purple-400 transition-colors transform hover:scale-105 flex items-center gap-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="w-6 h-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </span>
                            hassan2-dev
                        </a>
                    </div>

                    <div className="flex flex-col gap-4 animate-slideInUp animation-delay-600">
                        <a
                            href="mailto:hassan.21.adnan@gmail.com"
                            className="text-purple-500 hover:text-purple-400 transition-colors transform hover:scale-105 flex items-center gap-2"
                        >
                            <EnvelopeIcon className="w-6 h-6" />
                            hassan.21.adnan@gmail.com
                        </a>
                        <a
                            href="https://www.instagram.com/0_h21"
                            className="text-purple-500 hover:text-purple-400 transition-colors transform hover:scale-105 flex items-center gap-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="w-6 h-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </span>
                            @0_h21
                        </a>
                    </div>

                    <div className="flex flex-col gap-4 animate-slideInUp animation-delay-700">
                        <div className="text-purple-500 flex items-center gap-2">
                            <MapPinIcon className="w-6 h-6" />
                            Iraq
                        </div>
                        <div className="text-purple-500 flex items-center gap-2">
                            <CodeBracketIcon className="w-6 h-6" />
                            Full-stack Developer
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideInUp {
                    from { 
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideInRight {
                    from { 
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.8s forwards;
                }
                
                .animate-slideInUp {
                    animation: slideInUp 0.8s forwards;
                }
                
                .animate-slideInRight {
                    animation: slideInRight 0.5s forwards;
                }
                
                .animation-delay-200 {
                    animation-delay: 0.2s;
                }
                
                .animation-delay-400 {
                    animation-delay: 0.4s;
                }
                
                .animation-delay-500 {
                    animation-delay: 0.5s;
                }
                
                .animation-delay-600 {
                    animation-delay: 0.6s;
                }
                
                .animation-delay-700 {
                    animation-delay: 0.7s;
                }
                
                .animate-pulse {
                    animation: pulse 2s infinite;
                }
                
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                
                .animate-bounce {
                    animation: bounce 2s infinite;
                }
                
                @keyframes float {
                    0% {
                        transform: translate(-50%, -50%);
                    }
                    50% {
                        transform: translate(-50%, calc(-50% - 15px));
                    }
                    100% {
                        transform: translate(-50%, -50%);
                    }
                }
                `}
            </style>
        </div>
    )
}

export default Contact 