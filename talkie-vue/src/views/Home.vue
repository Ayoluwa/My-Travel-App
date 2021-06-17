<template>
  <div class="home">
    <div id="fontcheck">
      <h1>All Destinations</h1>
    </div>
    <div class="destinations">

      <div v-for="destination in destinations" :key="destination.name">
        <router-link :to="{name: 'DestinationDetails', params: { slug: destination.slug } }">
          <h1>{{ destination.name }}</h1>
        </router-link>
        <figure>
          <router-link :to="{name: 'DestinationDetails', params: { slug: destination.slug } }">   
            <img 
              :src="require(`@/assets/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>

    </div>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";

export default {
  name: 'Home',
  components: {}, 
  data () {
    return {
      destinations: store.destinations
    };
  }
};
</script>

<style scoped>

#fontcheck h1 {
  text-decoration: hotpink;

}

.home {
  max-width: 1400px;
  margin:0 auto;
}
img {
  max-width: 200px;
}
.destinations {
  display: flex;
  justify-content: space-between;
}

a {
  color: lightseagreen;
  text-decoration: none;
}

a.hover,
a:visited {
  text-decoration: underline;
}


</style>
