<template>
    <div>
        home test
        <form @submit.prevent="postdata">
            <input type="text " v-model="name">
            <input type="text " v-model="age">
            <input type="text " v-model="experience">
            <input type="text " v-model="score">
            <input type="text " v-model="skills">
            <button type="submit"> POST</button>
        </form>
    </div>
</template>


