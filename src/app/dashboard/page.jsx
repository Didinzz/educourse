"use client";

import { useState } from "react";
import { FaArrowUp, FaCalendarAlt, FaCog, FaHome } from "react-icons/fa";
import { FaCertificate, FaChartLine, FaClock, FaFire, FaFlag, FaFlagUsa, FaGlobe, FaLanguage, FaMedal, FaStar, FaToriiGate, FaTrophy, FaUsers } from "react-icons/fa6";

export default function DashboardPage() {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 min-h-screen">
            {/* Sidebar */}
            <aside
                className={[
                    "fixed left-0 top-0 h-full w-64 gradient-bg text-white transform transition-transform duration-300 z-40",
                    openSidebar ? "translate-x-0" : "-translate-x-full",
                    "lg:translate-x-0",
                ].join(" ")}
            >
                <div className="p-6">
                    {/* Logo */}
                    <div className="flex items-center space-x-3 mb-8">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center animate-pulse-slow">
                            <span className="text-white font-bold text-lg">E</span>
                        </div>
                        <span className="text-xl font-bold">EduCourse</span>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-2">
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-white/20 backdrop-blur-sm">
                            <span className="text-lg"><FaHome className="text-lg" /></span>
                            <span className="font-medium">Dashboard</span>
                        </a>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                            <span className="text-lg"><FaLanguage className="text-2xl" /></span>
                            <span className="font-medium">Kursus Bahasa</span>
                        </a>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                            <span className="text-lg"><FaCalendarAlt className="text-lg" /></span>
                            <span className="font-medium">Jadwal</span>
                        </a>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                            <span className="text-lg"><FaCog className="text-xl" /></span>
                            <span className="font-medium">Pengaturan</span>
                        </a>
                    </nav>
                </div>

                {/* User Profile */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/20">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xl">👨‍🎓</span>
                        </div>
                        <div>
                            <div className="font-semibold">Taufik</div>
                            <div className="text-sm text-white/70">Premium Member</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Menu Button */}
            <button
                aria-label="Toggle sidebar"
                onClick={() => setOpenSidebar((s) => !s)}
                className="lg:hidden fixed top-4 left-4 z-50 bg-white rounded-lg p-2 shadow-lg"
            >
                {/* Hamburger */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Main Content */}
            <div className="lg:ml-64 min-h-screen">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-30 animate-slide-down">
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                                <p className="text-gray-600">Selamat datang kembali, Taufik! 👋</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                {/* Profile */}
                                <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Profil">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">AR</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="p-6 space-y-8">
                    {/* Welcome Section */}
                    <section className="welcome-gradient rounded-2xl p-8 text-white relative overflow-hidden animate-bounce-in">
                        <div className="relative z-10">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-3xl font-bold mb-2">Selamat Datang, Taufik! 🎉</h2>
                                    <p className="text-white/90 text-lg mb-4">
                                        Hari ini adalah hari yang tepat untuk belajar sesuatu yang baru
                                    </p>
                                    <div className="flex items-center space-x-6">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold">3</div>
                                            <div className="text-sm text-white/80">Kursus Aktif</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold">85%</div>
                                            <div className="text-sm text-white/80">Progress</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold">12</div>
                                            <div className="text-sm text-white/80">Sertifikat</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float">
                                        <span className="text-6xl">🎓</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative */}
                        <div className="absolute top-4 right-4 text-white/20 text-3xl animate-float">✨</div>
                        <div className="absolute bottom-4 left-4 text-white/20 text-2xl animate-float" style={{ animationDelay: "1s" }}>
                            🌟
                        </div>
                    </section>

                    {/* Stats Cards */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 card-hover animate-slide-up">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Total Kursus</p>
                                    <p className="text-2xl font-bold text-gray-800">15</p>
                                </div>
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"><FaLanguage className="text-blue-600 text-2xl" /></div>
                            </div>
                            <div className="mt-4 flex items-center text-green-600 text-sm">
                                <FaArrowUp className="mr-1" />
                                <span>+2 bulan ini</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 card-hover animate-slide-up" style={{ animationDelay: "0.1s" }}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Jam Belajar</p>
                                    <p className="text-2xl font-bold text-gray-800">124</p>
                                </div>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center"><FaClock className="text-green-600 text-2xl" /></div>
                            </div>
                            <div className="mt-4 flex items-center text-green-600 text-sm">
                                <FaArrowUp className="mr-1" />
                                <span>+15 jam minggu ini</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 card-hover animate-slide-up" style={{ animationDelay: "0.2s" }}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Sertifikat</p>
                                    <p className="text-2xl font-bold text-gray-800">12</p>
                                </div>
                                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center"><FaCertificate className="text-yellow-600 text-2xl" /></div>
                            </div>
                            <div className="mt-4 flex items-center text-green-600 text-sm">
                                <FaArrowUp className="mr-1" />
                                <span> Naik 3 bulan ini</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 card-hover animate-slide-up" style={{ animationDelay: "0.3s" }}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Peringkat</p>
                                    <p className="text-2xl font-bold text-gray-800">#5</p>
                                </div>
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center"><FaMedal className="text-purple-600 text-2xl" /></div>
                            </div>
                            <div className="mt-4 flex items-center text-green-600 text-sm">
                                <span>↗️ Naik 2 posisi</span>
                            </div>
                        </div>
                    </section>

                    {/* Current Courses Progress */}
                    <section className="bg-white rounded-2xl p-8 card-hover animate-slide-up" style={{ animationDelay: "0.4s" }}>
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                            <span className="mr-3"><FaChartLine className="text-blue-600" /></span> Progress Kursus Bahasa Aktif
                        </h3>

                        <div className="space-y-6">
                            {/* Inggris */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white text-lg"><FaFlagUsa className="text-white text-lg" /></span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Bahasa Inggris</h4>
                                        <p className="text-sm text-gray-600">Beginner Level</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-semibold text-gray-800">85%</div>
                                    <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                                        <div className="progress-bar h-2 rounded-full" style={{ width: "85%" }} />
                                    </div>
                                </div>
                            </div>

                            {/* Jepang */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white text-lg"><FaToriiGate className="text-white text-lg" /></span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Bahasa Jepang</h4>
                                        <p className="text-sm text-gray-600">Intermediate Level</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-semibold text-gray-800">72%</div>
                                    <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                                        <div className="progress-bar h-2 rounded-full" style={{ width: "72%" }} />
                                    </div>
                                </div>
                            </div>

                            {/* Mandarin */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white text-lg"><FaLanguage className="text-white text-2xl" /></span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Bahasa Mandarin</h4>
                                        <p className="text-sm text-gray-600">Advanced Level</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-semibold text-gray-800">91%</div>
                                    <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                                        <div className="progress-bar h-2 rounded-full" style={{ width: "91%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Available Courses */}
                    <section className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-gray-800 flex items-center">
                                <span className="mr-3"><FaGlobe className="text-blue-600" /></span> Kursus Bahasa Tersedia
                            </h3>
                            <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">Lihat Semua →</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Course 1 */}
                            <div className="bg-white rounded-xl overflow-hidden card-hover animate-scale-in">
                                <div className="course-gradient-1 p-6 text-white text-center flex flex-col items-center">
                                    <FaToriiGate className="text-4xl mb-3" />
                                    <h4 className="font-bold text-lg">Bahasa Jepang</h4>
                                    <p className="text-sm text-white/80">Beginner Level</p>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-gray-600 flex items-center"><FaClock className="mr-1"/> 3 bulan</span>
                                        <span className="text-sm text-gray-600 flex items-center"><FaUsers className="mr-2" /> 24 siswa</span>
                                    </div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <div className="flex"><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-gray-300" /></div>
                                            <span className="text-sm text-gray-600 ml-1">(4.8)</span>
                                        </div>
                                        <span className="text-lg font-bold text-blue-600">Rp 750K</span>
                                    </div>
                                    <button className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-orange-500 transition-all duration-300 transform hover:scale-105">
                                        Daftar Sekarang
                                    </button>
                                </div>
                            </div>

                            {/* Course 2 */}
                            <div className="bg-white rounded-xl overflow-hidden card-hover animate-scale-in" style={{ animationDelay: "0.1s" }}>
                                <div className="course-gradient-2 p-6 text-gray-800 text-center flex flex-col items-center">
                                    <div className="text-4xl mb-3"><FaLanguage /></div>
                                    <h4 className="font-bold text-lg">Bahasa Korea</h4>
                                    <p className="text-sm text-gray-600">Intermediate Level</p>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-gray-600 flex items-center"><FaClock className="mr-1" /> 4 bulan</span>
                                        <span className="text-sm text-gray-600 flex items-center"><FaUsers className="mr-2" /> 18 siswa</span>
                                    </div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <div className="flex"><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-gray-300" /></div>
                                            <span className="text-sm text-gray-600 ml-1">(4.9)</span>
                                        </div>
                                        <span className="text-lg font-bold text-blue-600">Rp 850K</span>
                                    </div>
                                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                                        Daftar Sekarang
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Schedule & Achievements */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Upcoming Schedule */}
                        <div className="bg-white rounded-2xl p-8 card-hover animate-slide-left" style={{ animationDelay: "0.8s" }}>
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                <span className="mr-3"><FaCalendarAlt className="text-blue-600"/></span> Jadwal Mendatang
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold">19</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-800">Bahasa Inggris</h4>
                                        <p className="text-sm text-gray-600">Hari ini • 19:00 - 21:00 WIB</p>
                                    </div>
                                    <button className="text-blue-600 hover:text-blue-800 font-medium">Join</button>
                                </div>

                                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold">20</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-800">Bahasa Jepang</h4>
                                        <p className="text-sm text-gray-600">Besok • 20:00 - 22:00 WIB</p>
                                    </div>
                                    <button className="text-green-600 hover:text-green-800 font-medium">Remind</button>
                                </div>

                                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold">22</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-800">Bahasa Mandarin</h4>
                                        <p className="text-sm text-gray-600">Sabtu • 09:00 - 11:00 WIB</p>
                                    </div>
                                    <button className="text-purple-600 hover:text-purple-800 font-medium">Remind</button>
                                </div>
                            </div>
                        </div>

                        {/* Achievement */}
                        <div className="bg-white rounded-2xl p-8 card-hover animate-slide-right" style={{ animationDelay: "1s" }}>
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                <span className="mr-3"><FaTrophy className="text-yellow-600" /></span> Pencapaian Terbaru
                            </h3>

                            <div className="space-y-4">
                                <div className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg text-white text-center flex flex-col items-center">
                                    <div className="text-3xl mb-2"><FaMedal /></div>
                                    <div className="font-semibold">Selamat!</div>
                                    <div className="text-sm">Anda telah menyelesaikan 3 kursus bahasa bulan ini!</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-blue-50 rounded-lg text-center flex flex-col items-center">
                                        <div className="text-2xl mb-2"><FaFire className="text-orange-500" /></div>
                                        <div className="text-sm font-medium text-gray-800">Streak 15 Hari</div>
                                    </div>

                                    <div className="p-4 bg-green-50 rounded-lg text-center flex flex-col items-center">
                                        <div className="text-2xl mb-2"><FaStar className="text-yellow-500" /></div>
                                        <div className="text-sm font-medium text-gray-800">Level Master</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
