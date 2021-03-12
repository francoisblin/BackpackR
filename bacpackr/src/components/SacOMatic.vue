<template>
  <div class="sacomatic">
    <p>Just answer few questions about your next trail</p>
      <div class="sacomaticform">
        <form class="pack-form">
          <label for="name">Name:</label>
          <input id="name">

          <label for="days">How many days will you walking ?</label>
          <input id="days">

          <label for="nights">How many nights will you sleep outside ?</label>
          <input id="nights">

          <label for="climate">Which kind of Climate will you walking through ?
            <input type="radio" id="oceanique" name="climate" value="oceanique">
            <label for="oceanique">Oceanique</label><br>
            <input type="radio" id="mediterranean" name="climate" value="mediterranean">
            <label for="mediterranean">Mediterranean</label><br>
            <input type="radio" id="continental" name="climate" value="continental">
            <label for="continental">Continental</label>
            <input type="radio" id="alps" name="climate" value="alps">
            <label for="alps">Alps</label>
          </label>

        </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'SacOMatic'
}
</script>

<style scoped>
p {
  font-size: 20px;
  font-style: italic;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
