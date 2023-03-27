<script setup>
import namedchild from "./namedchild.vue"




</script>

<template>
    <div>
        <!-- Named or Multiple slot  -->
        <!-- <namedchild>
            <template v-slot:header>
                <h1>
                    This is header
                </h1>
            </template>
            <template #main>
                <h1>
                    This is main
                </h1>
            </template>
            <template #footer>
                <h1>
                    This is footer
                </h1>
            </template>
            </namedchild> -->

            <namedchild v-slot="slotProps">
                {{ slotProps }}
                <h1>Name:{{slotProps.nm}}</h1>
                <h1>Age:{{ slotProps.age }}</h1>
            </namedchild>
    </div>
</template>