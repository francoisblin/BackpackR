<template>
  <div class="flex flex-col content-center justify-center mx-auto">
    <h1 class="text-xl mx-auto">Just answer few questions about your next trail</h1>
        <form @submit.prevent="sendForm" class="shadow-lg bg-white max-w-xl justify-center content-center mt-4 mx-auto rounded-lg">
          <img class="w-full h-40 object-cover rounded-t-lg" src="../assets/joshua-earle--87JyMb9ZfU-unsplash.jpg" />
          <div class="p-4">

            <fieldset class="flex flex-col">
              <legend class="font-bold text-gray-800">What's your name ?</legend>
                <base-input
                  v-model="sac.name"
                  label="Name"
                  type="text"
                  error="This input has an error!"
                />
            </fieldset>

            <fieldset class="flex flex-col">
              <legend class="font-bold text-gray-800 mt-4">How long will you walking ?</legend>
                <base-input
                  v-model="sac.days"
                  label="Days"
                  type="number"
                />
            </fieldset>

            <fieldset class="flex flex-col">
              <legend class="font-bold text-gray-800 mt-4">How many nights will you spend in a tent ?</legend>
                <base-input
                  v-model="sac.nights"
                  label="Nights"
                  type="number"
                />
            </fieldset>

            <fieldset>
              <legend>Climate</legend>

              <p>Which kind of Climate will you walking through ?</p>
              <div>
                <BaseRadioGroup
                  v-model="sac.climate"
                  name="cimate"
                  :options="climateOptions"
                  vertical
                />
              </div>

            </fieldset>

            <fieldset>
              <legend>Season</legend>

              <p>Which kind of Climate will you walking through ?</p>
              <div>
                <BaseRadioGroup
                  v-model="sac.season"
                  name="season"
                  :options="seasonOptions"
                  vertical
                />
              </div>
            </fieldset>

            <fieldset>
              <legend>Persons</legend>

              <p>How many persons will be in this famous trail ?</p>
              <div>
                <BaseRadioGroup
                  v-model="sac.people"
                  name="Climate"
                  :options="personsOptions"
                  vertical
                />
              </div>
            </fieldset>

            <fieldset>
              <legend>What's your weight ?</legend>
                <base-input
                  v-model="sac.weight"
                  label="Weight"
                  type="number"
                />
            </fieldset>

            <fieldset>
              <legend>Profile</legend>

              <p>What's your profile of backpacking ?</p>
              <div>
                <BaseRadioGroup
                  v-model="sac.profile"
                  name="Profile"
                  :options="profileOptions"
                  vertical
                />
              </div>
            </fieldset>

            <button type="submit">
              Sign In
            </button>
          </div>
        </form>

        <pre>{{ sac }}</pre>

  </div>
</template>

<script>
export default {
  name: 'SacOMatic',
  data () {
    return {
      sac: {
        name: '',
        days: null,
        nights: null,
        climate: 'oceanique',
        season: 'summer',
        people: 1,
        weight: null,
        profile: 'light'
      },
      climateOptions: [
        { label: 'Oceanique', value: 'oceanique' },
        { label: 'mediterranean', value: 'mediterranean' },
        { label: 'mountain', value: 'mountain' },
        { label: 'continental', value: 'continental' }
      ],
      seasonOptions: [
        { label: 'Summer', value: 'summer' },
        { label: 'Fall', value: 'fall' },
        { label: 'Spring', value: 'spring' },
        { label: 'Winter', value: 'winter' }
      ],
      personsOptions: [
        { label: 'One', value: 1 },
        { label: 'Two', value: 2 },
        { label: 'Three or plus', value: 3 }
      ],
      profileOptions: [
        { label: 'Light', value: 'light' },
        { label: 'Medium', value: 'medium' },
        { label: 'Heavy', value: 'heavy' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
