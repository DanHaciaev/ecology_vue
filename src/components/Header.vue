<template>
    <div class="flex justify-between items-center max-w-6xl m-auto py-2">
        <span class="font-kalnia text-4xl uppercase text-green-dark">Learn to protect nature!</span>
        <div class="flex gap-10 text-green-header font-medium font-montserrat">
            <router-link to="/" :class="{ 'text-red-500': $route.name === 'home' }">
                Home
            </router-link>
            <router-link to="/game" :class="{ 'text-red-500': $route.name === 'game' }">
                Game
            </router-link>
            <router-link to="/instruction"
                :class="{ 'text-red-500': $route.name === 'instruction' || $route.name === 'BinDetails' }">
                Instruction
            </router-link>
            <router-link to="/about" :class="{ 'text-red-500': $route.name === 'about' }">
                About
            </router-link>
        </div>
    </div>
</template>
