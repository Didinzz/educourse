"use client";

import { useRef, useState } from "react";
import { FaGlobe, FaGraduationCap, FaLanguage, FaPaperclip, FaTrophy, FaUser, FaUsers, FaWpforms } from "react-icons/fa6";

export default function PendaftaranPage() {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const [biodataInfo, setBiodataInfo] = useState(null);
    const [buktiInfo, setBuktiInfo] = useState(null);

    const handleFile = (file, setInfo) => {
        if (!file) {
            setInfo(null);
            return;
        }
        const sizeMB = (file.size / 1024 / 1024).toFixed(2);
        setInfo({ name: file.name, sizeMB });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulasi proses submit. Hubungkan ke aksi nyata (fetch/axios) sesuai kebutuhan.
        setTimeout(() => {
            // Reset form dan state file
            formRef.current?.reset();
            setBiodataInfo(null);
            setBuktiInfo(null);
            setLoading(false);
            // tidak menampilkan modal / alert, sesuai permintaan
        }, 1200);
    };

    return (
        <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 min-h-screen">
            {/* Navbar */}
            <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-40 animate-fade-in">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center animate-pulse-slow">
                                <span className="text-white font-bold text-lg">E</span>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                EduCourse
                            </span>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Beranda</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Kursus</a>
                        </div>
                        <button className="md:hidden" aria-label="Buka menu">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <header className="relative overflow-hidden">
                <div className="gradient-bg py-20">
                    {/* Floating Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-float" />
                        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-30 animate-float" style={{ animationDelay: "1s" }} />
                        <div className="absolute bottom-20 left:1/4 left-1/4 w-12 h-12 bg-green-300 rounded-full opacity-25 animate-float" style={{ animationDelay: "2s" }} />
                        <div className="absolute top-20 right-1/3 w-8 h-8 bg-blue-300 rounded-full opacity-30 animate-float" style={{ animationDelay: "0.5s" }} />
                    </div>

                    <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                        <div className="flex items-center justify-center space-x-4 mb-4">
                            <FaGraduationCap className="text-5xl md:text-6xl text-white" />
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-bounce-in">Pendaftaran Kursus Online</h1>
                        </div>
                        <p className="text-xl text-white/90 mb-8 animate-slide-up">
                            Bergabunglah dengan ribuan siswa dan tingkatkan kemampuan bahasa Anda bersama instruktur terbaik
                        </p>
                        <div className="flex justify-center space-x-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                                <span className="text-white font-semibold">✨ 50+ Kursus</span>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center">
                                <FaTrophy className="text-lg text-yellow-500 mr-1" />
                                <span className="text-white font-semibold"> Sertifikat Resmi</span>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center">
                                <FaUsers className="text-lg text-blue-900 mr-2" />
                                <span className="text-white font-semibold"> Instruktur Ahli</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Separator */}
                <div className="relative">
                    <svg className="w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25" fill="#FFFFFF"
                        />
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5" fill="#FFFFFF"
                        />
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            fill="#FFFFFF"
                        />
                    </svg>
                </div>
            </header >

            {/* Main Content */}
            <div className="py-12">
                <div className="max-w-4xl mx-auto px-4">
                    {/* Form Container */}
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden card-hover animate-slide-up">
                        {/* Form Header */}
                        <div className="gradient-bg p-8 text-center">
                            <div className="flex items-center justify-center mb-2">
                                <FaWpforms className="mr-2 text-3xl text-white" />
                                <h2 className="text-3xl font-bold text-white mb-2"> Formulir Pendaftaran</h2>
                            </div>
                            <p className="text-white/90">Lengkapi data diri Anda untuk memulai perjalanan belajar</p>
                        </div>

                        {/* Form */}
                        <div className="p-8">
                            <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
                                {/* Informasi Pribadi */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 animate-fade-in">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <FaUser className="mr-2" /> Informasi Pribadi
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Nama Lengkap */}
                                        <div>
                                            <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                                                Nama Lengkap *
                                            </label>
                                            <input
                                                id="nama"
                                                name="nama"
                                                required
                                                type="text"
                                                placeholder="Masukkan nama lengkap Anda"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
                                            />
                                        </div>

                                        {/* Nomor Telepon */}
                                        <div>
                                            <label htmlFor="nomor" className="block text-sm font-medium text-gray-700 mb-2">
                                                Nomor Telepon *
                                            </label>
                                            <input
                                                id="nomor"
                                                name="nomor"
                                                required
                                                type="tel"
                                                placeholder="08xxxxxxxxxx"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="mt-6">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            required
                                            type="email"
                                            placeholder="nama@email.com"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
                                        />
                                    </div>
                                </div>

                                {/* Pilihan Kursus */}
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <FaGlobe className="mr-2 text-blue-400" /> Pilihan Kursus
                                    </h3>

                                    <div>
                                        <label htmlFor="bahasa" className="block text-sm font-medium text-gray-700 mb-2">
                                            Bahasa yang Dipilih *
                                        </label>
                                        <select
                                            id="bahasa"
                                            name="bahasa"
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300 bg-white"
                                            defaultValue=""
                                        >
                                            <option value="">Pilih bahasa yang ingin dipelajari</option>
                                            <option value="english">🇺🇸 Bahasa Inggris</option>
                                            <option value="mandarin">🇨🇳 Bahasa Mandarin</option>
                                            <option value="japanese">🇯🇵 Bahasa Jepang</option>
                                            <option value="korean">🇰🇷 Bahasa Korea</option>
                                            <option value="french">🇫🇷 Bahasa Prancis</option>
                                            <option value="german">🇩🇪 Bahasa Jerman</option>
                                            <option value="spanish">🇪🇸 Bahasa Spanyol</option>
                                            <option value="arabic">🇸🇦 Bahasa Arab</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Upload Dokumen */}
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <FaPaperclip className="mr-2" /> Upload Dokumen
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Upload Identitas */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Identitas Diri *</label>
                                            <input
                                                id="biodata"
                                                name="biodata"
                                                type="file"
                                                required
                                                accept=".pdf,.doc,.docx"
                                                className="hidden"
                                                onChange={(e) => handleFile(e.target.files?.[0], setBiodataInfo)}
                                            />
                                            <label
                                                htmlFor="biodata"
                                                className={[
                                                    "flex items-center justify-center w-full px-4 py-8 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 group",
                                                    biodataInfo ? "border-green-500 bg-green-50" : "border-green-300 hover:border-green-500 hover:bg-green-50",
                                                ].join(" ")}
                                            >
                                                <div className="text-center">
                                                    <svg className="mx-auto h-10 w-10 text-green-400 mb-3 group-hover:text-green-600 transition-colors"
                                                        fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                    </svg>

                                                    {!biodataInfo ? (
                                                        <span className="text-sm text-gray-600 group-hover:text-green-700">
                                                            📄 Klik untuk upload identitas<br />
                                                            <span className="text-xs">(PDF, DOC, DOCX)</span>
                                                        </span>
                                                    ) : (
                                                        <span className="text-sm text-green-700">
                                                            ✅ File terpilih:<br />
                                                            <span className="font-medium">{biodataInfo.name}</span><br />
                                                            <span className="text-xs text-gray-500">({biodataInfo.sizeMB} MB)</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </label>
                                        </div>

                                        {/* Upload Bukti Pembayaran */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Bukti Pembayaran *</label>
                                            <input
                                                id="buktiPembayaran"
                                                name="buktiPembayaran"
                                                type="file"
                                                required
                                                accept="image/*,.pdf"
                                                className="hidden"
                                                onChange={(e) => handleFile(e.target.files?.[0], setBuktiInfo)}
                                            />
                                            <label
                                                htmlFor="buktiPembayaran"
                                                className={[
                                                    "flex items-center justify-center w-full px-4 py-8 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 group",
                                                    buktiInfo ? "border-blue-500 bg-blue-50" : "border-blue-300 hover:border-blue-500 hover:bg-blue-50",
                                                ].join(" ")}
                                            >
                                                <div className="text-center">
                                                    <svg className="mx-auto h-10 w-10 text-blue-400 mb-3 group-hover:text-blue-600 transition-colors"
                                                        fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>

                                                    {!buktiInfo ? (
                                                        <span className="text-sm text-gray-600 group-hover:text-blue-700">
                                                            💳 Klik untuk upload bukti pembayaran<br />
                                                            <span className="text-xs">(JPG, PNG, PDF)</span>
                                                        </span>
                                                    ) : (
                                                        <span className="text-sm text-blue-700">
                                                            ✅ File terpilih:<br />
                                                            <span className="font-medium">{buktiInfo.name}</span><br />
                                                            <span className="text-xs text-gray-500">({buktiInfo.sizeMB} MB)</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit */}
                                <div className="pt-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                                    <button
                                        onClick={() => window.location.href = "/notifikasi"}
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-70 cursor-pointer"
                                    >
                                        {loading ? "⏳ Memproses..." : "🚀 Daftar Sekarang"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}
