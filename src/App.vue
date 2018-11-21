<template>
    <div id="app">
        
        <div id="nav" :class="{nobg: $route.path === '/' || $route.path === '/help'}">
            <router-link to="/help"> {{$t('nav.help')}} </router-link>

            <el-popover placement="top-start" popper-class="invite" width="250" trigger="hover">
                <div class="invite-cont">
                    <p>
                        http://www.iceo.io/***?id=xxx
                    </p>
                    <p>
                        邀请人数: 10人 预计返利： 100
                    </p>
                </div>
                <span slot="reference"> {{$t('nav.invite')}} </span>
            </el-popover>
            <router-link to="/play">{{$t('nav.guess')}}</router-link>
            <img src="./assets/img/logo.svg" alt="" width="100" @click="$router.push('/')">
            <span @click="setLang"> en/zh </span>
            <div class="user" @click="showReg = true"> {{$t('nav.register')}} </div>
            <div class="user" @click="showLogin = true"> {{$t('nav.login')}} </div>

        </div>
        <Counter v-if="$route.path !== '/help'"></Counter>
        <div class="view">
            <router-view/>
        </div>
        
        <el-dialog title="登陆" :visible.sync="showLogin" width="350px" :model="loginForm">
            <div>
                <el-input style="margin-bottom: 20px" v-model="loginForm.username" placeholder="username"></el-input>
                <el-input style="margin-bottom: 20px" v-model="loginForm.password" placeholder="password"></el-input>
                <el-button type="primary" style="width: 100%;margin-bottom: 20px" @click="handleLogin">登录</el-button>
                <div @click="showLogin = false;showReset = true">忘记密码?</div>
            </div>
        </el-dialog>

        <el-dialog title="注册"  :visible.sync="showReg" width="500px" :model="regForm">
            <el-form label-position="left" label-width="100px">
                <el-form-item label="用户名">
                    <el-input v-model="regForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="regForm.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input v-model="regForm.password2"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" >
                    <div style="display: flex;">
                        <el-input v-model="regForm.email"></el-input>  <el-button type="primary" style="margin-left: 15px;">发送验证码</el-button>
                    </div>         
                </el-form-item>
                <el-form-item label="验证码">
                    <el-input v-model="regForm.code"></el-input>
                </el-form-item>
                <el-form-item label="邀请码">
                    <el-input v-model="regForm.invitationCode"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width: 100%" @click="handleReg">注册</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <el-dialog title="找回密码"  :visible.sync="showReset" width="500px" :model="resetForm">
            <el-form label-position="left" label-width="100px">
                <el-form-item label="邮箱" >
                    <div style="display: flex;">
                        <el-input v-model="resetForm.email"></el-input>  <el-button type="primary" style="margin-left: 15px;">发送验证码</el-button>
                    </div>         
                </el-form-item>
                <el-form-item label="验证码">
                    <el-input v-model="resetForm.code"></el-input>
                </el-form-item>
                <el-form-item label="新密码">
                    <el-input v-model="resetForm.password"></el-input>
                </el-form-item>
                
                <el-form-item label="确认密码">
                    <el-input v-model="resetForm.password2"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width: 100%" @click="handleReset">提交</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template> 

<script>
    import Vue from 'vue'
    import Counter from '@/components/Counter'
    export default {
    	data() {
    		return {
    			loginForm: {},
                regForm: {},
                resetForm: {},
    			showLogin: false,
    			showReg: false,
    			showReset: false
    		}
    	},
    	mounted() {},
    	methods: {
    		setLang() {
    			const locale = Vue.config.lang
    			Vue.config.lang = locale === 'zh' ? 'en' : 'zh'
            },
            handleReg() {
                console.log(this.regForm)
            },
            handleReset() {
                console.log(this.resetForm)
            },
            handleLogin() {
                console.log(this.loginForm)
            }
        },
        components: { Counter }
    }
</script>


<style lang="scss">
    #app {
    	font-family: 'Avenir', Helvetica, Arial, sans-serif;
    	-webkit-font-smoothing: antialiased;
    	-moz-osx-font-smoothing: grayscale;
    	text-align: center;
    	color: #2c3e50;
    }
    #nav {
    	position: fixed;
    	background: black;
    	width: 100vw;
    	color: white;
    	height: 140px;
    	line-height: 140px;
    	display: flex;
    	justify-content: space-around;
    	align-items: center;
    	* {
    		cursor: pointer;
    		font-weight: bold;
    		font-size: 16px;
    		width: 130px;
    	}
    	a {
    		// font-weight: bold;
    		color: rgba($color: white, $alpha: 0.8);
    		&.router-link-exact-active {
    			color: #2b9d53;
    		}
    		text-decoration: none;
    	}
    	// background: black;
    	z-index: 99;
    	.user {
    		background-color: rgba(255, 255, 255, 0.03);
    		border: 1px solid #14c700;
    		// margin-right: 20px;
    		width: 120px;
    		height: 45px;
    		line-height: 45px;
    		border-radius: 5px;
    	}
    }
    .view {
    	z-index: 9;
    }
    .nobg,
    .invite {
    	background: transparent !important;
    }
    .invite-cont {
    	color: white;
    }
</style>
