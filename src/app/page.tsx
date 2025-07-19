"use client";

import type { NextPage } from 'next';
import Head from 'next/head';

// Helper component for Icons to avoid repeating SVG props
const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

const ShoppingCartIcon = () => (
  <Icon>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </Icon>
);

const UserIcon = () => (
  <Icon>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </Icon>
);

const StarIcon = ({ className }: { className: string }) => (
    <svg
        className={className}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);


const Page: NextPage = () => {
  const products = [
    {
      id: 1,
      name: 'Kemeja Batik "Parang"',
      price: 'Rp 450.000',
      image: 'https://images.unsplash.com/photo-1559318361-d433457a0a33?q=80&w=1974&auto=format&fit=crop',
      description: 'Kemeja batik tulis asli dengan motif Parang klasik, simbol kekuatan dan kesinambungan.'
    },
    {
      id: 2,
      name: 'Tenun Ikat Sumba',
      price: 'Rp 1.200.000',
      image: 'https://images.unsplash.com/photo-1620756236232-ff41a7235986?q=80&w=1964&auto=format&fit=crop',
      description: 'Kain tenun ikat asli dari Sumba, ditenun dengan tangan dan pewarna alami.'
    },
    {
      id: 3,
      name: 'Keris Pusaka Miniatur',
      price: 'Rp 750.000',
      image: 'https://images.unsplash.com/photo-1621761191350-2a835a013a4a?q=80&w=2070&auto=format&fit=crop',
      description: 'Miniatur keris pusaka dengan detail ukiran tangan yang indah, simbol warisan budaya.'
    },
    {
      id: 4,
      name: 'Kopi Gayo Aceh Premium',
      price: 'Rp 150.000',
      image: 'https://images.unsplash.com/photo-1511920183353-3c712b79c278?q=80&w=1974&auto=format&fit=crop',
      description: 'Biji kopi Arabika Gayo pilihan, menawarkan aroma dan cita rasa khas dataran tinggi Aceh.'
    },
  ];

  const testimonials = [
    {
      name: 'Andi Pratama',
      role: 'Pecinta Budaya',
      avatar: `https://i.pravatar.cc/150?u=a042581f4e29026704d`,
      comment: 'Kualitas produknya luar biasa! Saya bangga memakai batik dari sini. Terasa sekali nilai budayanya. Ini baru namanya karya anak bangsa yang sesungguhnya.'
    },
    {
      name: 'Siti Lestari',
      role: 'Pengusaha Kuliner',
      avatar: `https://i.pravatar.cc/150?u=a042581f4e29026705d`,
      comment: 'Saya beli Kopi Gayo untuk kafe saya, dan pelanggan sangat suka. Aromanya mantap, rasanya otentik. Pengiriman juga cepat dan aman. Recommended!'
    },
    {
      name: 'Budi Santoso',
      role: 'Kolektor Seni',
      avatar: `https://i.pravatar.cc/150?u=a042581f4e29026706d`,
      comment: 'Tenun Sumba yang saya terima melebihi ekspektasi. Detailnya sangat halus dan warnanya hidup. Benar-benar sebuah mahakarya. Terima kasih!'
    }
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Head>
        <title>Nusantara Kirana - Wujud Cinta Tanah Air</title>
        <meta name="description" content="Toko online produk-produk terbaik Indonesia, dari batik hingga kopi. Wujud nyata cinta tanah air." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-red-800 tracking-wider">
            Nusantara<span className="text-gray-600">Kirana</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-red-800 transition-colors">Beranda</a>
            <a href="#produk" className="text-gray-600 hover:text-red-800 transition-colors">Produk</a>
            <a href="#tentang" className="text-gray-600 hover:text-red-800 transition-colors">Tentang Kami</a>
            <a href="#kontak" className="text-gray-600 hover:text-red-800 transition-colors">Kontak</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-red-800 transition-colors">
              <ShoppingCartIcon />
            </button>
            <button className="text-gray-600 hover:text-red-800 transition-colors">
              <UserIcon />
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] text-white flex items-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1587922546307-ce5324788837?q=80&w=2070&auto=format&fit=crop" 
            alt="Pengrajin Batik Indonesia" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              Warisan Budaya, Kebanggaan Bangsa
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              Temukan keindahan produk asli Indonesia. Setiap pembelian adalah dukungan bagi pengrajin lokal dan wujud cinta tanah air.
            </p>
            <a href="#produk" className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
              Lihat Koleksi
            </a>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="produk" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-red-800 mb-2">Karya Terbaik Nusantara</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Kami memilih secara khusus produk-produk berkualitas tinggi yang merepresentasikan kekayaan budaya dan alam Indonesia.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                  <img src={product.image} alt={product.name} className="w-full h-56 object-cover"/>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 h-16">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-red-800">{product.price}</span>
                      <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors text-sm">
                        Beli
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="tentang" className="py-20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1518732714860-b62714ce0c59?q=80&w=2070&auto=format&fit=crop" 
                alt="Peta Indonesia" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-red-800 mb-4">Misi Kami: Dari Indonesia, Untuk Dunia</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Nusantara Kirana lahir dari rasa cinta dan bangga terhadap Indonesia. Kami percaya bahwa produk-produk lokal kita memiliki kualitas dan cerita yang layak mendunia.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Misi kami adalah menjadi jembatan antara para pengrajin, petani, dan seniman berbakat di seluruh pelosok negeri dengan Anda, para pecinta kualitas dan keindahan. Setiap produk yang Anda beli turut memberdayakan ekonomi lokal dan melestarikan warisan budaya bangsa.
              </p>
              <a href="#" className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-md transition-colors">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-red-800 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Apa Kata Mereka?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.name} className="bg-white text-gray-800 p-8 rounded-lg shadow-xl text-center">
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto -mt-16 border-4 border-white"/>
                            <p className="mt-6 mb-4 italic">"{testimonial.comment}"</p>
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400" />)}
                            </div>
                            <h4 className="font-bold text-lg">{testimonial.name}</h4>
                            <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section id="kontak" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Jadilah Bagian dari Gerakan Ini</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Daftarkan email Anda untuk mendapatkan info terbaru tentang koleksi eksklusif, cerita pengrajin, dan penawaran spesial.
                </p>
                <form className="max-w-md mx-auto flex">
                    <input 
                        type="email" 
                        placeholder="Alamat email Anda" 
                        className="w-full px-4 py-3 rounded-l-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700"
                    />
                    <button type="submit" className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-r-md transition-colors">
                        Daftar
                    </button>
                </form>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NusantaraKirana</h3>
              <p className="text-gray-400">Merayakan kekayaan budaya dan alam Indonesia melalui produk-produk pilihan.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Jelajahi</h3>
              <ul className="space-y-2">
                <li><a href="#produk" className="text-gray-400 hover:text-white">Produk Baru</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Koleksi Terlaris</a></li>
                <li><a href="#tentang" className="text-gray-400 hover:text-white">Cerita Kami</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Dukungan</h3>
              <ul className="space-y-2">
                <li><a href="#kontak" className="text-gray-400 hover:text-white">Hubungi Kami</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Kebijakan Privasi</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                {/* Placeholder for social icons */}
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} NusantaraKirana. Dibuat dengan ❤️ di Indonesia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;