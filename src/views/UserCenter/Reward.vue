<template>
    <div class="reward">
        <h4>邀请奖励</h4>
        <div class="money">
            <h5>您当前的余额：</h5>
            <h4>ETH: 0.00</h4>
        </div>
        <div class="bottom">
            <h4>邀请奖励</h4>
            <h5>即将拿到的奖励： * ETH</h5>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.reward {
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


