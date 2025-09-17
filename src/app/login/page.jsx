"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const [showPwd, setShowPwd] = useState(false);
    const [loading, setLoading] = useState(false);
    const [sending, setSending] = useState(false);
    const router = useRouter();

    const onLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            (e.target).reset();
            router.push("/dashboard");
        }, 1500);
    };


    return (
        <main className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 min-h-screen flex items-center justify-center py-12 px-4 relative overflow-hidden">
            {/* Floating elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-float" />
                <div className="absolute top-32 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-30 animate-float" style={{ animationDelay: "1s" }} />
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-300 rounded-full opacity-25 animate-float" style={{ animationDelay: "2s" }} />
                <div className="absolute top-40 right-1/3 w-8 h-8 bg-blue-300 rounded-full opacity-30 animate-float" style={{ animationDelay: "0.5s" }} />
                <div className="absolute bottom-40 right-10 w-14 h-14 bg-purple-300 rounded-full opacity-20 animate-float" style={{ animationDelay: "1.5s" }} />
            </div>

            <div className="max-w-md w-full relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden card-hover animate-bounce-in">
                    {/* Header */}
                    <div className="login-gradient p-8 text-center">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                            <span className="text-3xl">🔐</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Selamat Datang!</h1>
                        <p className="text-white/90">Silahkan masuk kedalam aplikasi</p>
                    </div>

                    {/* Form */}
                    <div className="p-8">
                        <form className="space-y-6" onSubmit={onLogin}>
                            <div className="animate-slide-up">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Username
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="nama@email.com"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 input-focus transition-all duration-300 hover:border-blue-300"
                                />
                            </div>

                            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPwd ? "text" : "password"}
                                        required
                                        placeholder="Masukkan password Anda"
                                        className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 input-focus transition-all duration-300 hover:border-blue-300"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPwd((s) => !s)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        aria-label="Toggle password"
                                    >
                                        {/* simple eye icon */}
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {showPwd ? (
                                                <>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                                </>
                                            ) : (
                                                <>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </>
                                            )}
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-70 cursor-pointer"
                                >
                                    {loading ? "⏳ Memproses..." : "🚀 Masuk"}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            {/* Forgot Password Modal */}

        </main>
    );
}
