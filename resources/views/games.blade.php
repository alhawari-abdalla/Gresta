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
                <a href="{{ route("welcome") }}">
                    <img src="{{ asset('gresta.png') }}" alt="Gresta" class="h-10 w-auto">
                </a>
            </div>
            <nav class="space-x-6 hidden md:flex">
                <a href="{{ route('games') }}" class="hover:text-sky-400">Games</a>
                <a href="#contact" class="hover:text-sky-400">Contact</a>
            </nav>
            <a href="{{ route('register') }}" class="bg-sky-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-sky-700">Play Now</a>
        </div>
    </header>
    <section class="bg-gray-900 py-16 relative">
        <!-- Section Title -->
        <h1 class="text-4xl md:text-5xl font-extrabold text-sky-400 text-center mb-12">
            Our Games
        </h1>

        @auth
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                @foreach ($games as $items)
                <div class="group bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-sky-600/40 hover:scale-[1.03] transition duration-300">

                    <!-- Game Thumbnail -->
                    <div class="relative">
                        <img src="https://via.placeholder.com/400x250" alt="{{$items->title}}" class="w-full h-56 object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                    </div>

                    <!-- Game Info -->
                    <div class="p-6">
                        <h4 class="text-2xl font-semibold text-sky-300 group-hover:text-sky-400 transition">
                            {{$items->title}}
                        </h4>

                        <p class="text-gray-400 mt-2 text-sm line-clamp-3">
                            {{$items->description}}
                        </p>

                        <!-- Platform -->
                        <p class="mt-3 text-sm font-medium text-gray-300">
                            <span class="text-sky-400">Platform:</span> {{$items->platform}}
                        </p>

                        <!-- Downloads -->
                        <p class="mt-1 text-sm text-gray-400">
                            <span class="text-sky-400">Downloads:</span> {{ number_format($items->downloads) }}
                        </p>

                        <!-- Buttons -->
                        <div class="mt-5 flex items-center justify-between">
                            <a href="{{route('game.download' , $items->id)}}" class="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-xl transition">
                                Download
                            </a>
                            <a href="#" class="px-4 py-2 border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-gray-900 rounded-xl transition">
                                Play Now
                            </a>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
        @endauth

        @guest
        <!-- Guest Message -->
        <div class="max-w-3xl mx-auto px-6 text-center mt-16">
            <h3 class="text-2xl md:text-3xl font-bold text-sky-400">
                Please
                <a href="{{ route('login') }}" class="underline hover:text-sky-300">log in</a>
                to view our games.
            </h3>
        </div>
        @endguest
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
