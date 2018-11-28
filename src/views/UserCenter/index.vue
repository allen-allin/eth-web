<template>
	<div class="user-center">
		<el-row class="wrapper">
			<el-col class="menu">
				<el-menu default-active="Deposit">
					<el-submenu
					 v-for="(sub,subIdx) in menus"
					 :key="subIdx"
					 :index="sub.index"
					>
						<template slot="title">
							<span>{{sub.label}}</span>
						</template>
						<el-menu-item-group v-if="sub.children">
							<el-menu-item
							 v-for="item in sub.children"
							 :index="item.index"
							 :key="item.index"
							 @click.native="currView = item.index"
							>{{item.label}}</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-col>

			<el-col class="content">
                <keep-alive>
                    <component :is="currView"></component>
                </keep-alive>
				
			</el-col>

		</el-row>
	</div>
</template>
<script>
	import Deposit from "./Deposit.vue";
	import Reward from "./Reward.vue";
	import Record from "./Record.vue";
	import WithDraw from "./WithDraw.vue";
	export default {
		data() {
			return {
				currView: "Deposit",
				menus: [
					{
						label: "财政",
						index: "1",
						children: [
							{ label: "存款", index: "Deposit" },
							{ label: "提现", index: "WithDraw" },
							{ label: "邀请奖励", index: "Reward" },
							{ label: "财务记录", index: "Record" }
						]
					}
				]
			};
		},
		components: {
			Deposit,
			Reward,
			Record,
			WithDraw
		}
	};
</script>
<style lang="scss" scoped>
	.menu {
		border-right: solid 1px #e6e6e6;
	}
	.el-menu {
		border: none;
	}
	.user-center {
		height: 500px;
	}
	.wrapper {
		height: 100%;
		display: flex;
		> .menu {
			width: 200px;
		}
		> .content {
			flex: 1;
			text-align: left;
			padding: 0 60px;
		}
	}
</style>


