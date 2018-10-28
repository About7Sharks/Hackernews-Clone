<template>
        <b-navbar toggleable="md" type="dark" variant="info">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

           <router-link to="/">Popular Posts</router-link>
            <b-collapse is-nav id="nav_collapse">
              <b-navbar-nav>
                <!-- <b-nav-item ><router-link to="https://about7sharks.com/posts">Socks Posts</router-link></b-nav-item> -->
                <b-nav-item ><router-link to="/new">New Posts</router-link></b-nav-item>

              </b-navbar-nav>
            </b-collapse>
          </b-navbar>

</template>

<script>
export default {
    name:'navbar'
}
</script>

<style scoped>
ul li{
  list-style-type: none;
}
a{
  color: black;
  padding: 5px;
  padding-left: 50px;
  text-decoration: none;
}
</style>
