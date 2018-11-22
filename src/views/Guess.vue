<template>
    <div class="wrapper">
        <div class="content">
            <div class="left">
                <div class="item" v-for="(item,idx) in blocks" :key="idx">
                    <span>{{idx + 1}}.&nbsp;&nbsp;{{item.value}} </span>
                    <span>{{item.height}}</span>
                </div>
            </div>
            <div class="right">
                <h2>Luck Number</h2>
                <h1>9</h1>
            </div>
        </div>

        <div class="bottom">
            <div class="big" @click="currNum = 'big';dialogVisible = true">big</div>
            <div class="center">
                <div v-for="n in 10" :key="n" @click="currNum = n"> {{n}} </div>
            </div>
            <div class="small" @click="currNum = 'small'; dialogVisible = true">small</div>
        </div>

        <el-dialog title="投注" :visible.sync="dialogVisible" width="30%">
            <div class="dialog-content">
                <div>
                    投注内容： {{currNum}}
                </div>
                <div>
                    投注金额： <el-input-number v-model="money"  :min="1" label="描述文字"></el-input-number>
                    <el-button-group>
                        <el-button >1/4</el-button>
                        <el-button >1/2</el-button>
                        <el-button >MAX</el-button>
                    </el-button-group>
                </div>
                <div>
                    已选金额： <el-button>0.00ETH</el-button>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">投注</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            blocks: new Array(7).fill({
                value: '0x00000000000000000000000dmlmlvdui',
                height: 640324
            }),
            dialogVisible: false,
            currNum: 0,
            money: 1
        }
    }
}
</script>
<style lang="scss" scoped>
.wrapper {
    background: black;
    margin-top: -100px;
    padding-bottom: 100px;

    .content {
        margin: 0 auto;
        width: 1200px;
        height: 370px;
        transition: all 0.3s;
        padding: 30px;
        color: rgba(255, 255, 255, 0.7);
        border: 2px solid rgba(255, 255, 255, 0.5);
        &:hover {
            border-color: white;
        }
        display: flex;
        > .right {
            width: 300px;
            > h1 {
                margin-top: 80px;
                font-size: 88px;
            }
        }
        > .left {
            flex: 1;
            overflow: auto;
            padding-right: 10px;
            border-right: 2px solid rgba(255, 255, 255, 0.5);
            > div {
                padding-right: 30px;
                height: 40px;
                line-height: 40px;

                display: flex;
                justify-content: space-between;
                &:hover {
                    color: white;
                }
            }
        }
    }
    .bottom {
        margin: 0 auto;
        width: 1200px;
        display: flex;
        margin-top: 50px;
        justify-content: space-bewteen;
        align-items: flex-end;
        > .big,
        > .small {
            width: 200px;
            height: 200px;
            font-size: 48px;
            cursor: pointer;
            color: rgba(255, 255, 255, 0.5);
            border: 2px solid rgba(255, 255, 255, 0.5);
            line-height: 200px;
            border-radius: 20px;
            &:hover {
                color: white;
            }
        }
        > .center {
            width: calc(100% - 400px);
            display: flex;
            flex-wrap: wrap;
            border: none;
            > div {
                width: 80px;
                height: 80px;
                line-height: 80px;
                margin-left: 40px;
                margin-right: 40px;
                margin-bottom: 15px;
                cursor: pointer;
                border: 2px solid rgba(255, 255, 255, 0.5);
                color: rgba(255, 255, 255, 0.5);
                font-size: 36px;
                border-radius: 50%;
                &:hover {
                    color: white;
                }
            }
        }
    }
    .dialog-content {
        text-align: left;
        padding-left: 30px;
        >div {
            margin-top: 20px;
        }
    }
}
</style>


