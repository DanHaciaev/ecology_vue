<template>
    <div class="flex flex-col items-center pt-16 bg-about-photo bg-cover bg-center h-screen">
        <h1 class="text-3xl font-bold" :class="bin.colorText">{{ bin.color }}</h1>
        <div class="flex gap-16 items-center mt-6">

            <img :src="bin.image" :alt="bin.color" class="w-80" />

            <div>
                <p class="text-2xl font-bold" :class="bin.colorText">Example</p>
                <div class="grid grid-cols-3 gap-4 mt-8">
                    <div v-for="(waste, index) in bin.wasteImages" :key="index" class="flex flex-col items-center px-8 py-2 rounded-30" :class="bin.bgClass">
                        <img :src="waste.src" :alt="waste.label" class="w-20 h-20 mb-2" />
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
                    image: '/bins/red.png',
                    bgClass: 'bg-red-back',
                    colorText: 'text-red-bin',
                    wasteImages: [
                        { src: '/red/cutlery.png', label: 'Plastic cutlery' },
                        { src: '/red/diaper.png', label: 'Diapers' },
                        { src: '/red/medicine.png', label: 'Blister packs' },
                        { src: '/red/tape.png', label: 'Scotch tape' },
                        { src: '/red/toothbrush.png', label: 'Toothbrush' },
                        { src: '/red/wipes.png', label: 'Wet wipes' },
                    ]
                },
                yellow: {
                    color: 'Yellow Bin - Plastic',
                    image: '/bins/yellow.png',
                    bgClass: 'bg-yellow-back',
                    colorText: 'text-yellow-bin',
                    wasteImages: [
                        { src: '/yellow/bucket.png', label: 'Plastic buckets' },
                        { src: '/yellow/can.png', label: 'Tin Cans' },
                        { src: '/yellow/milk.png', label: 'Milk cartons' },
                        { src: '/yellow/mineral_water.png', label: 'Plastic bottles' },
                        { src: '/yellow/plastic_bag.png', label: 'Bags' },
                        { src: '/yellow/shampoo.png', label: 'Shampoos' },
                    ]
                },
                green: {
                    color: 'Green Bin - Glass',
                    image: '/bins/green.png',
                    bgClass: 'bg-green-back',
                    colorText: 'text-green-bin',
                    wasteImages: [
                        { src: '/green/glass_bottle.png', label: 'Glass bottle' },
                        { src: '/green/glass_crack.png', label: 'Broken glass' },
                        { src: '/green/glass_jar.png', label: 'Glass jar' },
                        { src: '/green/light_bulb.png', label: 'Light bulb' },
                        { src: '/green/vial.png', label: 'Glass flask' },
                        { src: '/green/vitamin.png', label: 'Vitamin bottle' },
                    ]
                },
                blue: {
                    color: 'Blue Bin - Paper',
                    image: '/bins/blue.png',
                    bgClass: 'bg-blue-back',
                    colorText: 'text-blue-bin',
                    wasteImages: [
                        { src: '/blue/birthday_card.png', label: 'Greeting cards' },
                        { src: '/blue/calendar.png', label: 'Calendar' },
                        { src: '/blue/magazine.png', label: 'Magazine' },
                        { src: '/blue/newspaper.png', label: 'Newspaper' },
                        { src: '/blue/notepad.png', label: 'Notebook' },
                        { src: '/blue/paper.png', label: 'Colored paper' },
                    ]
                },
                black: {
                    color: 'Black Bin - Food waste',
                    image: '/bins/black.png',
                    bgClass: 'bg-black-back',
                    colorText: 'text-black-bin',
                    wasteImages: [
                        { src: '/black/coffee_bean.png', label: 'Coffee' },
                        { src: '/black/condiments.png', label: 'Seasonings' },
                        { src: '/black/fish_bone.png', label: 'Food bones' },
                        { src: '/black/fruit.png', label: 'Fruits' },
                        { src: '/black/pizza.png', label: 'Food' },
                        { src: '/black/spices.png', label: 'Spices' },
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