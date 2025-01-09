<template>
    <div class="flex flex-col items-center pt-16 bg-about-photo bg-cover bg-center h-screen">
        <h1 class="text-3xl font-bold" :class="bin.colorText">{{ bin.color }}</h1>
        <div class="flex gap-16 items-center mt-6">

            <img :src="bin.image" :alt="bin.color" class="w-80" />

            <div>
                <p class="text-2xl font-bold" :class="bin.colorText">Example</p>
                <div class="grid grid-cols-3 gap-4 mt-8">
                    <div v-for="(waste, index) in bin.wasteImages" :key="index" class="flex flex-col items-center px-8 py-2 rounded-30" :class="bin.bgClass">
                        <img :src="waste.src" :alt="waste.label" class="w-16 mb-2" />
                        <span class="text-center text-white">{{ waste.label }}</span>
                    </div>
                </div>
            </div>


        </div>
        <router-link to="/instruction" class="mt-12 px-4 py-2 h-fit bg-blue-500 text-white rounded hover:bg-blue-600">
            Back to Home
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['color'], // Получаем параметр color
    data() {
        return {
            bins: {
                red: {
                    color: 'Red Bin - Non-Recyclable waste',
                    image: '/bins/red.webp',
                    bgClass: 'bg-red-back',
                    colorText: 'text-red-bin',
                    wasteImages: [
                        { src: '/red/cutlery.webp', label: 'Plastic cutlery' },
                        { src: '/red/diaper.webp', label: 'Diapers' },
                        { src: '/red/medicine.webp', label: 'Blister packs' },
                        { src: '/red/tape.webp', label: 'Scotch tape' },
                        { src: '/red/toothbrush.webp', label: 'Toothbrush' },
                        { src: '/red/wipes.webp', label: 'Wet wipes' },
                    ]
                },
                yellow: {
                    color: 'Yellow Bin - Plastic',
                    image: '/bins/yellow.webp',
                    bgClass: 'bg-yellow-back',
                    colorText: 'text-yellow-bin',
                    wasteImages: [
                        { src: '/yellow/bucket.webp', label: 'Plastic buckets' },
                        { src: '/yellow/can.webp', label: 'Tin Cans' },
                        { src: '/yellow/milk.webp', label: 'Milk cartons' },
                        { src: '/yellow/mineral_water.webp', label: 'Plastic bottles' },
                        { src: '/yellow/plastic_bag.webp', label: 'Bags' },
                        { src: '/yellow/shampoo.webp', label: 'Shampoos' },
                    ]
                },
                green: {
                    color: 'Green Bin - Glass',
                    image: '/bins/green.webp',
                    bgClass: 'bg-green-back',
                    colorText: 'text-green-bin',
                    wasteImages: [
                        { src: '/green/glass_bottle.webp', label: 'Glass bottle' },
                        { src: '/green/glass_crack.webp', label: 'Broken glass' },
                        { src: '/green/glass_jar.webp', label: 'Glass jar' },
                        { src: '/green/light_bulb.webp', label: 'Light bulb' },
                        { src: '/green/vial.webp', label: 'Glass flask' },
                        { src: '/green/vitamin.webp', label: 'Vitamin bottle' },
                    ]
                },
                blue: {
                    color: 'Blue Bin - Paper',
                    image: '/bins/blue.webp',
                    bgClass: 'bg-blue-back',
                    colorText: 'text-blue-bin',
                    wasteImages: [
                        { src: '/blue/birthday_card.webp', label: 'Greeting cards' },
                        { src: '/blue/calendar.webp', label: 'Calendar' },
                        { src: '/blue/magazine.webp', label: 'Magazine' },
                        { src: '/blue/newspaper.webp', label: 'Newspaper' },
                        { src: '/blue/notepad.webp', label: 'Notebook' },
                        { src: '/blue/paper.webp', label: 'Colored paper' },
                    ]
                },
                black: {
                    color: 'Black Bin - Food waste',
                    image: '/bins/black.webp',
                    bgClass: 'bg-black-back',
                    colorText: 'text-black-bin',
                    wasteImages: [
                        { src: '/black/coffee_bean.webp', label: 'Coffee' },
                        { src: '/black/condiments.webp', label: 'Seasonings' },
                        { src: '/black/fish_bone.webp', label: 'Food bones' },
                        { src: '/black/fruit.webp', label: 'Fruits' },
                        { src: '/black/pizza.webp', label: 'Food' },
                        { src: '/black/spices.webp', label: 'Spices' },
                    ]
                },
            },
        };
    },
    computed: {
        bin() {
            // Выбираем корзину по параметру color
            return this.bins[this.color.toLowerCase()] || {
                color: 'Unknown',
                image: '',
                description: 'No description available for this bin.',
                bgClass: 'bg-gray-100',
            };
        },
    },
};
</script>