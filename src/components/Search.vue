<template>
<div>
  <div>
    <p>Congrats, you have been authorized.</p>
    <p>Logged in as {{access_token}}</p>
    <router-link to="/">Return Home</router-link>
  </div>
  <div id="loggedIn" v-show="loggedIn">
      <p>Music for your Mood</p>
      <p>This is a playlist based on {{query}}</p>
      <form v-on:submit.prevent="getPlaylist">
        <p>I'm feeling like...<input type="text" v-model.lazy="query" placeholder="something"><button type="submit">Go</button></p>
      </form>
      <ul v-if="results && results.length > 0">
       <li v-for="result in results">
         <p>{{playlists.items.name}}</p>
         <p>{{playlists.items.tracks}}</p>
       </li>
      </ul>
    </div> 
</div>   
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  created: function() {
    console.log("Search created");
  },
  data() {
    debugger;
    let loggedIn = this.$route.params.access_token ? true : false;
    return {
      results: null,
      errors: [],
      query: "",
      mustLogin: true,
      loggedIn: loggedIn,
      access_token: this.$route.params.access_token
    };
  },
  methods: {
    getPlaylist: function() {
      // API call
      debugger;
      let config = {
        headers: {
          Authorization: "Bearer " + this.access_token
        }
      };
      let bodyParameters = {
        q: this.query,
        type: "playlist"
      };
      axios
        .get("https://api.spotify.com/v1/search", bodyParameters,config)
        .then(response => {
          this.results = response.data;
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  }
};
</script>