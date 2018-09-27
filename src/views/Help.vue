<template>
    <div class="help">
        <Const></Const>
        <div class="cont">
            <div class="faqs">
                <ul>
                    <div v-for="(faq,idx) in faqs" :key="idx">
                        <li class="q">
                            <span>
                                {{ faq.q }}
                            </span>
                            <i class="el-icon-circle-plus-outline"  @click="handleClick(idx)"></i>
                        </li>
                        <li :class="{'a': currLi !== idx}" >
                            {{ faq.a }}
                        </li>
                    </div>

                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import Const from '@/components/Constellation'
    export default {
    	data() {
    		return {
                currLi: '',
    			faqs: new Array(20).fill({
    					q: '市场是什么?',
    					a:
    						'It is a website (market.gemera.io) with the information of each one of the emeralds stored in a safety vault of safe deposit box companies worldwide and ready to be redeemed with GEMERAs. The information of the emeralds includes name, characteristics, price in GEMERAs, and certification, as well as a 360° video, photographs from different angles and traceability decentralized records from the origin of the gemstones.'
                    })
    		}
    	},
    	mounted() {},
    	methods: {
    		handleClick(idx) {
    			this.currLi = this.currLi === idx ? '' : idx
    		}
    	},
    	components: { Const }
    }
</script>

<style lang="scss" scoped>
    .help {
    	background: black;
    	height: 100vh;
    	color: white;
    }
    .cont {
    	z-index: 99;
    	.faqs {
    		width: 80%;
    		margin: 0 auto;
    		padding-top: 180px;
    		> ul {
    			width: 100%;
    			height: 75vh;
                z-index: 99;
                overflow: auto;
    			background: #0e0e0c -webkit-gradient(
    					linear,
    					left top,
    					left bottom,
    					from(#0e0e0e),
    					to(#272323)
    				) no-repeat;
    			padding: 25px;
    			li {
    				background: #1f1f1f4f;
    				z-index: 99;
    				line-height: 1.4;
    				text-align: left;
    				padding: 12px 44px 12px 24px;
    				box-shadow: inset 0 1px 10px -1px rgba(16, 16, 16, 0.8);
    				border: 1px solid #544c4c;
    				border-radius: 5px;
    				font-weight: 700;
                    list-style: none;
                    overflow: hidden;
                    transition: all 0.2s;
                    margin-bottom: 15px;
                }
                .q {
                    
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    i {
                        cursor: pointer;
                    }
                }
                .active-a {

                }
                .a {
                    height: 0;
                    padding-top: 0;
                    padding-bottom: 0;
                    border-width: 0;
                    opacity: 0;
                    color: transparent;
                }
    		}
    	}
    }
</style>


