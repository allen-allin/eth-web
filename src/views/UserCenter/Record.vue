<template>
	<div class="record">
		<h4>财务记录</h4>
		<div class="table-wrapper">
			<el-table
			 :data="tableData"
			 style="width: 100%"
			>
				<el-table-column
                 v-for="(col,idx) in cols"
                 :key="idx"
				 :prop="col.prop"
				 :label="col.label"
				>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>
<script>
	export default {
        data() {
            return {
                tableData: [
                    {time: '2018-09-22',type: '投注',money: '0.10' ,remark: '已完成'},
                    {time: '2018-09-22',type: '投注',money: '0.10' ,remark: '已完成'},
                    {time: '2018-09-22',type: '投注',money: '0.10' ,remark: '已完成'},
                    {time: '2018-09-22',type: '投注',money: '0.10' ,remark: '已完成'},
                    {time: '2018-09-22',type: '投注',money: '0.10' ,remark: '已完成'},
                ],
                cols: [
                    {label: '时间',prop: 'time'},
                    {label: '种类',prop: 'type'},
                    {label: '金额',prop: 'money'},
                    {label: '备注',prop: 'remark'},
                ]
            }
        }
    };
</script>
<style lang="scss" scoped>
	.record {
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
	}
</style>


