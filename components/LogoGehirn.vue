<template>
    <div>
        <img src="/assets/images/GehirnGod.png" alt="Gehirn-Logo">
    </div>

    <div>
        <Button multiboton="Access the courses &#x27A4" clase="button-tertiary" size="tiny-Height"
            sizeW="large-Width"></Button>
    </div>

    <div class="text-container">
        <p>
        <h1>Free Software Gehirn <br> Research Group</h1>
        </p>
    </div>

    <div class="text-container">
        <p>
        <h3>Helping found your way in Research and a Quick way to <br> develop your projects with Free Software</h3>
        </p>
    </div>

    <div class="contact-button">
        <Button multiboton="Contact Us!" clase="button" size="small-Height" sizeW="UltraMedium-Width"></Button>
    </div>


</template>

<script setup lang="ts">

</script>

<style scoped>
img {
    width: 319px;
    height: 358px;
    margin-top: 125px;
}

.text-container {
    margin-top: 15px;
    text-align: center;
}

h1 {
    font-size: 7.2rem;
    color: transparent;
    background: linear-gradient(to bottom right, #2B4353 20.5%, #F0EDED 100%);
    background-clip: text;
    -webkit-background-clip: text;
}

h3 {
    font-size: 2rem;
    color: transparent;
    background: linear-gradient(to bottom right, gray 20.5%, #C857A3 100%);
    background-clip: text;
    -webkit-background-clip: text;
}

.contact-button
{
    margin-top: 32px;
}
</style>