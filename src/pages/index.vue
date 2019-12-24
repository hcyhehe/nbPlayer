<template>
  <div id="lbWallct">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
	</transition>
	<tFooter></tFooter>
  </div>
</template>


<script>
	import Vue from 'vue'
	import tFooter from '../components/footer/tfooter.vue';

	export default {
    name: 'index',
		data() {
			return {
				transitionName: 'slide-left'
			}
		},
		components: {
			tFooter
		},
		methods: {

		},

		beforeRouteUpdate(to, from, next) {
			let isBack = this.$router.isBack
			if(isBack) {
				this.transitionName = 'slide-right'
			} else {
				this.transitionName = 'slide-left'
			}
			this.$router.isBack = false
			next();
		},

		mounted() {

		}
	};
</script>

<style lang="scss">
	#lbWallct {
		flex: 1;
		display: flex;
		flex-direction: column;
		height: 100%;
		.child-view {
			position: absolute;
			width: 100%;
			transition: all .8s cubic-bezier(.55, 0, .1, 1);
			height: 100%;
		}
		.slide-left-enter,
		.slide-right-leave-active {
			opacity: 0;
			-webkit-transform: translate(50px, 0);
			transform: translate(50px, 0);
		}
		.slide-left-leave-active,
		.slide-right-enter {
			opacity: 0;
			-webkit-transform: translate(-50px, 0);
			transform: translate(-50px, 0);
		}
	}
</style>
