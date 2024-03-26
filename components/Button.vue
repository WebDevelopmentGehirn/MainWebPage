<template>
    <div>
        <button :class=clase :style="{width: sizeChangeWidth(sizeW == undefined ? 'small-Width':sizeW), height: sizeChangeHeight(size == undefined ? 'small-Height':size)}">{{multiboton}} </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    multiboton:{type:String,required:true},
    color:String,
    clase:String,
    size:String,
    sizeW:String

});

const sizeChangeHeight = (value:string) => 
{
    switch(value){
        case "tiny-Height": 
            return "26px"
            break;
        case "small-Height": 
            return "48px"
            break;
        case"medium-Height":
            return "60px"
            break;
        case "large-Height":
            return "77px"
            break;
    }
}
const sizeChangeWidth = (value:string) =>
{
    switch (value)
    {
        case "small-Width":
            return "79px"
            break;
        case "medium-Width":
            return "124px"
            break;
        case "UltraMedium-Width":
            return "136px"
            break;
        case "large-Width":
            return "173px"
            break;
        case "UltraLarge-Width":
            return "585px"
            break;
    }
}
</script>

<style scoped>
button
{
    display: flex;
    width: 50px;
    height: 50px;
    background: #7B3564;
    border-radius: 12px;
    border-style: none;
    justify-content: center;
    align-items: center;
}

button:hover
{
    border-style: solid;
}

.button-secoundary
{
    background: #2B4353;
}

.button-tertiary
{
    background: linear-gradient(to right,black 16.5%, #666666 63.5%);
    color: #F0F0F0;
    margin-top: 30px;
}


</style>