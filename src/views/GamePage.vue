<script>
export default {
    data() {
        return {
            bins: [
                { id: 1, color: "Red", image: "/bins/red.png", bin: "non-recyclable" },
                { id: 2, color: "Yellow", image: "/bins/yellow.png", bin: "plastic" },
                { id: 3, color: "Green", image: "/bins/green.png", bin: "glass" },
                { id: 4, color: "Blue", image: "/bins/blue.png", bin: "paper" },
                { id: 5, color: "Black", image: "/bins/black.png", bin: "food" },
            ],
            trash: [], 
            currentTrashIndex: 0, 
            correctMoves: 0,
            isError: false,
            isSuccess: false,
        };
    },
    computed: {
        currentTrash() {
            return this.trash[this.currentTrashIndex];
        },
    },
    methods: {
        generateTrash() {
            const allTrash = [
                { id: 1, src: '/black/coffee_bean.png', bin: "food" },
                { id: 2, src: '/black/condiments.png', bin: "food" },
                { id: 3, src: '/black/fish_bone.png', bin: "food" },
                { id: 4, src: '/black/fruit.png', bin: "food" },
                { id: 5, src: '/black/pizza.png', bin: "food" },
                { id: 6, src: '/black/spices.png', bin: "food" },
                { id: 7, src: '/blue/birthday_card.png', bin: "paper" },
                { id: 8, src: '/blue/calendar.png', bin: "paper" },
                { id: 9, src: '/blue/magazine.png', bin: "paper" },
                { id: 10, src: '/blue/newspaper.png', bin: "paper" },
                { id: 11, src: '/blue/notepad.png', bin: "paper" },
                { id: 12, src: '/blue/paper.png', bin: "paper" },
                { id: 13, src: '/green/glass_bottle.png', bin: "glass" },
                { id: 14, src: '/green/glass_crack.png', bin: "glass" },
                { id: 15, src: '/green/glass_jar.png', bin: "glass" },
                { id: 16, src: '/green/light_bulb.png', bin: "glass" },
                { id: 17, src: '/green/vial.png', bin: "glass" },
                { id: 18, src: '/green/vitamin.png', bin: "glass" },
                { id: 19, src: '/red/cutlery.png', bin: "non-recyclable" },
                { id: 20, src: '/red/diaper.png', bin: "non-recyclable" },
                { id: 21, src: '/red/medicine.png', bin: "non-recyclable" },
                { id: 22, src: '/red/tape.png', bin: "non-recyclable" },
                { id: 23, src: '/red/toothbrush.png', bin: "non-recyclable" },
                { id: 24, src: '/red/wipes.png', bin: "non-recyclable" },
                { id: 25, src: '/yellow/bucket.png', bin: "plastic" },
                { id: 26, src: '/yellow/can.png', bin: "plastic" },
                { id: 27, src: '/yellow/milk.png', bin: "plastic" },
                { id: 28, src: '/yellow/mineral_water.png', bin: "plastic" },
                { id: 29, src: '/yellow/plastic_bag.png', bin: "plastic" },
                { id: 30, src: '/yellow/shampoo.png', bin: "plastic" },
            ];

            const bins = ["food", "paper", "glass", "non-recyclable", "plastic"];

            // Собираем минимум по одному предмету для каждого типа мусора
            const initialTrash = bins.map(bin => {
                const items = allTrash.filter(item => item.bin === bin);
                return items[Math.floor(Math.random() * items.length)];
            });

            // Добавляем оставшиеся 5 случайных предметов, независимо от типа
            const remainingTrash = [];
            while (remainingTrash.length < 5) {
                const randomItem = allTrash[Math.floor(Math.random() * allTrash.length)];
                if (!remainingTrash.includes(randomItem) && !initialTrash.includes(randomItem)) {
                    remainingTrash.push(randomItem);
                }
            }

            // Объединяем и перемешиваем весь мусор
            const combinedTrash = [...initialTrash, ...remainingTrash];
            this.trash = combinedTrash.sort(() => Math.random() - 0.5);
        },

        handleDrop(bin) {
            if (this.currentTrash && this.currentTrash.bin === bin.bin) {
                this.correctMoves++;
                this.isError = false;

                if (this.currentTrashIndex < this.trash.length - 1) {
                    this.currentTrashIndex++;
                } else {
                    this.isSuccess = true;
                }
            } else {
                this.isError = true;
                this.correctMoves = 0;
            }
        },
        reloadPage() {
            this.correctMoves = 0;
            this.isError = false;
            this.isSuccess = false;
            this.currentTrashIndex = 0;
            this.generateTrash();
        },
    },
    mounted() {
        this.generateTrash(); // Вызываем функцию generateTrash при загрузке компонента
    },
};
</script>

<template>
    <div class="bg-game-photo bg-cover bg-center h-screen flex justify-center items-center relative">
        <div class="flex flex-col items-center gap-14">
            <div>
                <div v-if="currentTrash" draggable="true" @dragstart="handleDragStart" class="cursor-grab">
                    <img :src="currentTrash.src" :alt="currentTrash.bin" class="w-32" />
                </div>
            </div>

            <!-- Bins Area -->
            <div class="flex gap-4 w-11/12">
                <div v-for="bin in bins" :key="bin.id" @drop.prevent="handleDrop(bin)" @dragover.prevent
                    class="flex flex-col items-center">
                    <img :src="bin.image" :alt="bin.color" />
                </div>
            </div>

        </div>

        <!-- Error Modal -->
        <div v-if="isError" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div class="bg-white p-6 pt-14 rounded-lg shadow-lg text-center flex flex-col justify-center items-center gap-4">
                <img src="/wrong.png" class="w-28 absolute translate-y-20">
                <p class="text-red-500 font-bold">You have disposed of the item in the wrong container!</p>
                <router-link to="/instruction" class="text-blue-500">Click to find more information</router-link>
                <button @click="reloadPage" class=" bg-blue-600 text-white py-2 px-4 rounded-md w-full hover:bg-blue-700">
                    Reload the game
                </button>
            </div>
        </div>

        <!-- Success Modal -->
        <div v-if="isSuccess" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div class="bg-white p-6 pt-14 rounded-lg shadow-lg text-center flex flex-col items-center gap-4">
                <img src="/correct.png" class="w-28 absolute translate-y-20">
                <p class="text-green-500 font-bold">Congratulations! You have successfully completed the game!</p>
                <button @click="reloadPage" class="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                    Play Again
                </button>
            </div>
        </div>
    </div>
</template>