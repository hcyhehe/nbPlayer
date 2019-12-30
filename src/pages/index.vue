<template>
	<div class="index">
		<router-view class="child-view"></router-view>
		<van-tabbar v-model="active" active-color="#000" inactive-color="#888" @change="onChange">
			<van-tabbar-item icon="search">搜索</van-tabbar-item>
			<van-tabbar-item icon="fire-o">排行</van-tabbar-item>
		</van-tabbar>
	</div>
</template>


<script>
	export default {
    	name: 'index',
		data() {
			return {
				active: this.$store.state.tab,
			}
		},
		methods: {
			onChange(e){
				this.$store.state.tab = e
				if(e==0){
					this.$router.push({path:'/search'})
				}
				if(e==1){
					this.$router.push({path:'/rank'})
				}
			}
		},

		beforeRouteUpdate(to, from, next) {
			next()
		},

		mounted(){
			this.active = this.$store.state.tab
		}
	};
</script>

<style lang="scss">
.index{
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
}
</style>
