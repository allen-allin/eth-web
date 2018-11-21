<template>
    <div class="home">

        <div class="game-card" @click="go('random?eth=0.3')">0.3Eth</div>
        <div class="game-card" @click="go('random?eth=3')">3Eth</div>
        <div class="game-card" @click="go('guess')">Guess</div>
    </div>
</template>

<script>
    export default {
    	data() {
    		return {}
    	},
    	computed: {

    	},
    	methods: {
    		go(link) {
                this.$router.push(link)
    		}
    	},
    }
</script>

<style lang="scss" scoped>
    .home {
    	background: black;
    	color: white;
        display: flex;
        justify-content: center;
        margin-top: -150px;
        padding-bottom: 100px;
        >div {
            width: 300px;
            height: 400px;
            margin: 0 50px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 8px;
            transition: all 0.3s;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
                border-color: white;
            }
        }
    }
    .cont {
    	padding-top: 140px;
    	width: 100vw;
    	> .countdowns {
            padding-top: 150px;
            justify-content: center;
    		display: flex;
    		> div {
                font-size: 40px;
    			display: flex;
    			flex-direction: column;
    			align-items: center;
    			justify-content: space-around;
    			background-color: rgba(0, 0, 0, 0.1);
    			border: 5px solid rgba(255, 255, 255, 0.3);
    			width: 100px;
    			height: 130px;
    			border-radius: 30px;
                margin: 0 5px 0 5px;
                padding: 15px 0;
                >.time-type {
                    font-size: 16px;
                }
    		}
    	}
    }
</style>

