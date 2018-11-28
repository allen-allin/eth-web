<template>
    <div class="withdraw">
        <h4>提现</h4>
        <div class="money">
            <h5>您当前的余额：</h5>
            <h4>ETH: 0.00</h4>
        </div>
        <div class="bottom">
            <div>
                ETH的数量： <el-input></el-input>
            </div>
            <div>
                以太坊地址： <el-input></el-input>
            </div>
            <el-button type="primary">确定</el-button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.withdraw {
    h4 {
        font-size: 28px;
        font-weight: 500;
        margin: 15px 0;
    }
    h5 {
        font-size: 18px;
        font-weight: 500;
        margin: 15px 0;
    }
    .bottom {
        border: 2px solid #ddd;
        border-radius: 8px;
        padding: 20px 40px;
        margin-top: 70px;
        >div {
            margin-bottom: 20px;
        }
    }
}
</style>

