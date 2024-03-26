<template>
    <header>
        <ul>
            <li><img src="/assets/images/Prisma.png" alt=""></li>
            <li>About us</li>
            <li>Projects</li>
            <li>Resources</li>
            <li>Contact</li>
        </ul>
        <div class="Buttons-container">
            <Button :multiboton=texto class="Button" size="small-Height" sizeW="small-Width">

            </Button>
            <Button multiboton="Sing-Up" clase="button-secoundary" size="small-Height" sizeW="small-Width">

            </Button>
        </div>

    </header>
</template>

<script setup lang="ts">
const texto = "Login"
</script>

<style scoped>
ul {
    justify-content: center;
    align-items: center;
    list-style: none;
    display: flex;
    padding-top: 32px;
    gap: 54px;
    font-size: 1.8rem;
}

header .Buttons-container {
    display: flex;
    justify-content: space-between;
    padding-top: 32px;
    gap: 54px;
}

header
{
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
}
</style>