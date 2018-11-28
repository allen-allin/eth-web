<template>
    <div class="deposit">
        <h4>存款</h4>
        <div class="money">
            <h5>您当前的余额：</h5>
            <h4>ETH: 0.00</h4>
        </div>
        <div class="eth-address">
            <div class="left">
                <h4>您的以太坊存款地址</h4>
                <h5>0x00000000000000000000000</h5>
                <h5>最低存款额为0.01ETH</h5>
            </div>
            <div class="right">
                二维码
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.deposit {
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
    .eth-address {
        border: 2px solid #ddd;
        border-radius: 8px;
        padding: 20px 40px;
        margin-top: 70px;
        display: flex;
        justify-content: space-between;
        .right {
            width: 160px;
            height: 160px;
            border: 1px solid ;
        } 
    }
}
</style>


