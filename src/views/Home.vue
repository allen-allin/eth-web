<template>
    <div class="home">
        <Const></Const>
        <div class="cont">
            <div class="countdowns">
                <div v-for="(item,idx) in counts" :key="idx">
                    <div class="time-num"> {{countdown(item.type)}} </div>
                    <div class="time-type"> {{item.text}} </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import Const from '@/components/Constellation'
    export default {
    	data() {
    		return {}
    	},
    	computed: {
    		counts() {
    			return ['d', 'h', 'm', 's'].map(v => ({
    				type: v,
    				text: this.$t('counts.' + v)
    			}))
    		}
    	},
    	methods: {
    		countdown(item) {
                const time = new Date()
    			return time.getMonth()
    		}
    	},

    	components: { Const }
    }
</script>

<style lang="scss" scoped>
    .home {
    	background: black;
    	height: 100vh;
    	color: white;
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

