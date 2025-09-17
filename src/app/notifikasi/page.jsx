export const metadata = { title: "EduCourse - Notifikasi" };

export default function NotifikasiPage() {
    return (
        <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 min-h-screen py-8">
            {/* Email Container */}
            <div className="max-w-2xl mx-auto px-4 relative">
                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-20 animate-float" />
                    <div
                        className="absolute top-32 right-20 w-12 h-12 bg-pink-300 rounded-full opacity-30 animate-float"
                        style={{ animationDelay: "1s" }}
                    />
                    <div
                        className="absolute bottom-20 left-1/4 w-10 h-10 bg-green-300 rounded-full opacity-25 animate-float"
                        style={{ animationDelay: "2s" }}
                    />
                    <div
                        className="absolute top-20 right-1/3 w-8 h-8 bg-blue-300 rounded-full opacity-30 animate-float"
                        style={{ animationDelay: "0.5s" }}
                    />
                </div>

                {/* Email Card */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden card-hover animate-bounce-in relative z-10">
                    {/* Header */}
                    <div className="success-gradient p-8 text-center relative">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                            <span className="text-4xl">🎉</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-3">Pendaftaran Berhasil!</h1>
                        <p className="text-white/90 text-lg">Selamat! Anda telah terdaftar di EduCourse</p>

                        {/* Decorative */}
                        <div className="absolute top-4 left-4 text-white/20 text-2xl animate-float">✨</div>
                        <div className="absolute top-6 right-6 text-white/20 text-xl animate-float" style={{ animationDelay: "1s" }}>
                            🌟
                        </div>
                        <div className="absolute bottom-4 left-8 text-white/20 text-lg animate-float" style={{ animationDelay: "0.5s" }}>
                            ⭐
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-8">
                        {/* Welcome Message */}
                        <div className="text-center animate-slide-up">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Halo, <span className="text-blue-600">Taufik!</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Terima kasih telah mendaftar di <strong>EduCourse</strong>. Pendaftaran Anda untuk kursus{" "}
                                <span className="font-semibold text-purple-600">Bahasa Inggris</span> telah berhasil diproses.
                            </p>
                        </div>

                        {/* Registration Details */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">📋 Detail Pendaftaran</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white rounded-lg p-4">
                                    <div className="text-sm text-gray-500 mb-1">ID Pendaftaran</div>
                                    <div className="font-semibold text-gray-800">#EDU-2024-001</div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <div className="text-sm text-gray-500 mb-1">Tanggal Daftar</div>
                                    <div className="font-semibold text-gray-800">15 Januari 2024</div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <div className="text-sm text-gray-500 mb-1">Kursus</div>
                                    <div className="font-semibold text-gray-800">🇺🇸 Bahasa Inggris</div>
                                </div>
                            </div>
                        </div>

                        {/* Schedule Information */}
                        <div className="gradient-bg rounded-xl p-6 text-white animate-slide-up" style={{ animationDelay: "0.4s" }}>
                            <h3 className="text-xl font-bold mb-4 flex items-center">📅 Jadwal Kursus Anda</h3>

                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                                <div className="grid md:grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl mb-2">📆</div>
                                        <div className="text-sm opacity-90">Mulai Kursus</div>
                                        <div className="font-bold">22 Januari 2024</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl mb-2">⏰</div>
                                        <div className="text-sm opacity-90">Waktu</div>
                                        <div className="font-bold">19:00 - 21:00 WIB</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl mb-2">📍</div>
                                        <div className="text-sm opacity-90">Platform</div>
                                        <div className="font-bold">Zoom Meeting</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                                <h4 className="font-semibold mb-3">📋 Jadwal Mingguan:</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span>Senin & Rabu</span>
                                        <span className="font-semibold">19:00 - 21:00 WIB</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Sabtu</span>
                                        <span className="font-semibold">09:00 - 11:00 WIB</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Instructor Info */}
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 animate-slide-up" style={{ animationDelay: "0.6s" }}>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">👨‍🏫 Instruktur Anda</h3>
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                    <span className="text-white text-2xl">👨‍💼</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Prof Dr.Didin Zakaria S.Kom., M.Kom., Ph.d</h4>
                                    <p className="text-gray-600 text-sm">Native Speaker • 8+ tahun pengalaman</p>
                                    <div className="flex items-center mt-1">
                                        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                                        <span className="text-sm text-gray-500 ml-2">(4.9/5)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Next Steps */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 animate-slide-up" style={{ animationDelay: "0.8s" }}>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">🚀 Langkah Selanjutnya</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-xs font-bold">1</span>
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-800">Bergabung dengan WhatsApp Group</div>
                                        <div className="text-sm text-gray-600">Link akan dikirim 1 hari sebelum kursus dimulai</div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-xs font-bold">2</span>
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-800">Download Materi Pembelajaran</div>
                                        <div className="text-sm text-gray-600">Akses ke portal pembelajaran akan aktif 3 hari sebelum kursus</div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-xs font-bold">3</span>
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-800">Siapkan Perangkat</div>
                                        <div className="text-sm text-gray-600">Pastikan koneksi internet stabil dan aplikasi Zoom terinstall</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons (tanpa modal) */}
                        <div className="grid md:grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: "1s" }}>
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl">
                                📅 Tambah ke Kalender
                            </button>
                            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 focus:ring-4 focus:ring-green-200 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl">
                                💬 Hubungi Support
                            </button>
                        </div>

                        {/* Important Notes */}
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl animate-slide-up" style={{ animationDelay: "1.2s" }}>
                            <div className="flex items-start">
                                <div className="text-yellow-400 text-xl mr-3">⚠️</div>
                                <div>
                                    <h4 className="font-semibold text-yellow-800 mb-2">Penting untuk Diingat:</h4>
                                    <ul className="text-sm text-yellow-700 space-y-1">
                                        <li>• Hadir tepat waktu untuk mendapatkan pengalaman belajar terbaik</li>
                                        <li>• Siapkan buku catatan dan alat tulis</li>
                                        <li>• Jika ada kendala, hubungi support 24/7</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-gray-50 p-6 text-center">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">E</span>
                            </div>
                            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                EduCourse
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                            Terima kasih telah mempercayai EduCourse untuk perjalanan belajar Anda
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
