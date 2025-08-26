<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gresta Studio</title>
    @vite('resources/css/app.css')
    <link rel="icon" href="{{ asset('gresta mini.png') }}" type="image/png">
</head>
<body class="bg-gray-900 text-white font-sans">

    <!-- Navbar -->
    <header class="bg-gray-800/80 backdrop-blur sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
            <div class="flex items-center space-x-3">
                <img src="{{ asset('gresta.png') }}" alt="Gresta" class="h-10 w-auto">
                <span class="text-2xl font-bold text-sky-400"></span>
            </div>
            <nav class="space-x-6 hidden md:flex">
                <a href="{{ route('games') }}" class="hover:text-sky-400">Games</a>
                <a href="#contact" class="hover:text-sky-400">Contact</a>
            </nav>
            <a href="{{ route('register') }}" class="bg-sky-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-sky-700">Play Now</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-b from-gray-900 to-black h-screen flex flex-col items-center justify-center text-center px-6">
        <img src="{{ asset('gresta.png') }}" alt="Gresta Logo" class="h-32 w-auto mb-6">
        <h2 class="text-5xl md:text-6xl font-extrabold text-sky-400">Welcome to Gresta Studio</h2>
        <p class="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">We create immersive worlds and epic adventures. Play, explore, and experience the magic of Gresta games.</p>
        <div class="mt-8">
            <a href="#games" class="bg-sky-600 px-6 py-3 rounded-xl font-semibold hover:bg-sky-700">Discover Games</a>
        </div>
    </section>

    <!-- Games Section -->
    <section id="games" class="py-20 bg-gray-900">
        <div class="max-w-7xl mx-auto px-6">
            <h3 class="text-3xl font-bold text-center mb-12 text-sky-400">Our Games</h3>
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Game Card -->
                <div class="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
                    <img src="https://via.placeholder.com/400x250" alt="Game 1" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h4 class="text-xl font-semibold text-sky-300">Game Title 1</h4>
                        <p class="text-gray-400 mt-2">An epic adventure filled with magic and mystery.</p>
                        <a href="#" class="mt-4 inline-block text-sky-400 hover:underline">Play Now →</a>
                    </div>
                </div>
                <div class="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
                    <img src="https://via.placeholder.com/400x250" alt="Game 2" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h4 class="text-xl font-semibold text-sky-300">Game Title 2</h4>
                        <p class="text-gray-400 mt-2">Battle against enemies in futuristic arenas.</p>
                        <a href="#" class="mt-4 inline-block text-sky-400 hover:underline">Play Now →</a>
                    </div>
                </div>
                <div class="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
                    <img src="https://via.placeholder.com/400x250" alt="Game 3" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h4 class="text-xl font-semibold text-sky-300">Game Title 3</h4>
                        <p class="text-gray-400 mt-2">Survive the apocalypse in this thrilling adventure.</p>
                        <a href="#" class="mt-4 inline-block text-sky-400 hover:underline">Play Now →</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-800">
        <div class="max-w-5xl mx-auto px-6 text-center">
            <h3 class="text-3xl font-bold mb-6 text-sky-400">About Gresta</h3>
            <p class="text-gray-300 leading-relaxed">At Gresta Studio, we are passionate about crafting interactive experiences that captivate and inspire players around the world. Our team of designers, developers, and storytellers work together to bring imagination to life.</p>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-900">
        <div class="max-w-5xl mx-auto px-6 text-center">
            <h3 class="text-3xl font-bold mb-6 text-sky-400">Get in Touch</h3>
            <p class="text-gray-400 mb-8">Have questions or want to collaborate? Reach out to us!</p>
            <a href="mailto:contact@gresta.com" class="bg-sky-600 px-6 py-3 rounded-xl font-semibold hover:bg-sky-700">Email Us</a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 py-6 text-center text-gray-400 text-sm">
        © 2025 Gresta Studio. All rights reserved.
    </footer>

</body>
</html>
