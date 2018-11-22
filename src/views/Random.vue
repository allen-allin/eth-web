<template>
    <div class="wrapper">
        <div class="left">
            <div class="users">
                <div class="user" v-for="(user,idx) in users" :key="idx"> 
                    {{idx + 1}}.&nbsp;&nbsp;{{user + idx}}     
                </div>
            </div>
            <div class="join">Join</div>
        </div>
        <div class="right">
            <h3>Win</h3>
            <div class="winner" v-for="(winner,idx) in winners" :key="idx">
                {{idx + 1}}.&nbsp;&nbsp;{{winner + idx}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            type: '',
            users: new Array(23).fill('USERNAME'),
            winners: new Array(23).fill('WINNER')
        }
    },
    created() {
        this.type = this.$router.history.current.query.eth
    }
}
</script>
<style lang="scss" scoped>
    .wrapper {
        background: black;
        display: flex;
        justify-content: center;
        margin-top: -100px;
        padding-bottom: 100px;
        >div {
            // background: white;
            height: 600px;
            transition: all 0.3s;
            padding: 30px;
            color: rgba(255,255,255,0.7);
            border: 2px solid rgba(255,255,255,0.5);
            &:hover {
                border-color: white;
            }
        }
        .left {
            margin-right: 20px;
            width: 800px;
            display: flex;
            overflow: auto;
            align-items: center;
            .users {
                flex: 3;
                display: flex;
                flex-wrap: wrap;
                height: 100%;
                overflow: auto;
                >div {
                    width: 120px;
                    height: 50px;
                    margin-left: 50px;
                    line-height: 50px;
                    &:hover {
                        color: white;
                    }
                }
            }
            .join {
                opacity: 0.5;
                height: 150px;
                width: 150px;
                border-radius: 50%;
                background: red;
                font-size: 48px;
                line-height: 150px;
                color: white;
                cursor: pointer;
                transition: all 0.3s;
                &:hover {
                    font-size: 60px;
                    opacity: 1;
                }
            }
        }
        .right {
            width: 400px;
            overflow: auto;
            >h3 {
                margin-bottom: 20px;
            }
            >.winner {
                height: 40px;
                line-height: 40px;
                &:hover {
                    color: white;
                }
            }
        }
    }
</style>


