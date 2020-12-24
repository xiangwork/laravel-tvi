<template>
    <div
        class=" flex flex-col min-h-screen min-w-screen"
        style="background: #323232"
    >

        <!-- Content Section -->
        <section class="flex flex-1 flex-col items-center justify-center p-8 text-white">
            <div class="relative text-center" >
                <h1
                    class="
                        flex flex-row font-semibold items-center px-8 py-4 relative rounded-lg text-center text-3xl tracking-wide
                        sm:text-6xl
                    "
                >
                    CT Barbers
                </h1>
                <h2
                    class="
                        flex flex-row font-semibold items-center justify-center relative round text-mono-400 text-lg tracking-wide
                        sm:text-3xl
                    "
                >
                    Coming Soon...
                </h2>
            </div>
            <ul class="flex flex-row flex-wrap font-bold justify-center pt-4 px-4 space-x-6 text-white text-underline tracking wide md:text-lg">
                <li>
                    <a
                        class="hover:text-mono-400"
                        href="https://www.instagram.com/ct.barbers/"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Instagram"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="4" y="4" width="16" height="16" rx="4" />
                            <circle cx="12" cy="12" r="3" />
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Index",
        layout: 'website-layout'
    }
</script>

<style scoped>
    .skewed-logo-bg {
        --tw-rotate: -18deg;
        --tw-skew-y: 12deg
    }
</style>
