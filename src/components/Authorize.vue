<template>
  <div>
    <p>Congrats, you have been authorized.</p>
    <p>Logged in as {{display_name}}</p>
    <router-link to="/">Return Home</router-link>
  </div>
</template>

<script>
export default {
  name: "Authorize",
  created: function() {
    console.log("Authorize created");
  },
  data() {
    debugger;

    let hash2Obj = location.hash
      .split("&")
      .map(el => el.split("="))
      .reduce((pre, cur) => {
        pre[cur[0]] = cur[1];
        return pre;
      }, {});
    let accessCode = hash2Obj["#access_token"];
    //let searchUri = "search/" + accessCode;
    // let authorizedHome = "/#" + accessCode;
    this.$router.push({ path: `/#${accessCode}`});
    return {
      display_name: "test authorize"
    };
  },
  methods: {}
};
</script>