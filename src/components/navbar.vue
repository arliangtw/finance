<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">
            <!-- <b-img src="favicon.ico" width=32 height=32 fluid ></b-img> -->
            <b-icon-graph-up  width=32 height=32 fluid />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#" 
                    @click.prevent="updateActiveViewName('financeProject')" 
                    v-bind:style="isItemA?activeStyle:''">投資配置</b-nav-item>

                <b-nav-item href="#" 
                    @click.prevent="updateActiveViewName('stockCompare')"   
                    v-bind:style="isItemB?activeStyle:''">股票績效</b-nav-item>

                <b-nav-item href="#" disabled>{{activeViewName}}</b-nav-item>                 
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'navbar',
    data: function() {
        return {
            activeViewName: this.view,
            isItemA:false,
            isItemB:false,
            activeStyle: {
               fontWeight:'800'
            }           
        }
    },
    props: ["view"], //從外部收到正在活動的viewName 
    mounted: function() {
        console.log('view:'+this.view);
        this.updateActiveViewName(this.view);
    },
    methods: {
        updateActiveViewName(name) {
            this.activeViewName = name;
            if (name === "financeProject") {
                this.isItemA = true;
                this.isItemB = false;
            }else if (name === "stockCompare") {
                this.isItemA = false;
                this.isItemB = true;
            }
            //vue的tag屬性只能用kebab-case，將資料拋向外層的update-view
            this.$emit('update-view',this.activeViewName);
         }
    },
}
</script>

<style>
    /* .navbar-dark .navbar-nav .nav-link {
        color: rgb(255, 255, 255);
    }    
    .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
        color: rgb(255, 255, 255);
    } */
   
</style>