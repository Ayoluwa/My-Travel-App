<template>
  <nav id="nav">
    <p id="logo">The Vue School Travel App</p>

   <ul class="nav-links">
      <li class="links">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li
        v-for="destination in destinations"
        :key="destination.name"
        class="links"
      >
      <router-link 
        :to="{
          name: 'DestinationDetails', 
          params: { slug: destination.slug }
        }"
      >
        {{ destination.name }}
      </router-link>
      </li>

    </ul>

  </nav>  
</template>

<script>
import store from "@/store";
export default {
  data () {
    return {
      destinations: store.destinations
    };
  }
}; 

</script>

<style>

#nav {
  display: flex;
}

.nav-links {
  display: flex;
  text-align: center;
}

#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}

#logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
  text-align: right;
  
}

#nav a.i-love-her {
  color: red;
  text-decoration: underline;
}
</style>