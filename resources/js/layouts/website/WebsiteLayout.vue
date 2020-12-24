<template>
    <main
        id="website-layout"
    >
        <slot />
    </main>
</template>

<script>
    export default {
        name: "WebsiteLayout",
        metaInfo() {
            return {
                title: 'CT Barbers',
                meta: [
                    {
                        name: 'description',
                        content: 'CT Barbers - Gentlemen\'s barbers in Longton, Stoke on Trent',
                    }
                ]
            }
        },
    }
</script>
