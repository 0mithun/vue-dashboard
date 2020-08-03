<template>
  <div class="home">
    <Header />
    <div class="container">
      <div class="spread">
        <h1 :class="{ dark: !isDarkMode, light: isDarkMode }">
          Traffic Overview
        </h1>
        <div
          class="toggle"
          :class="{ 'lght-box': isDarkMode, 'dark-box': !isDarkMode }"
        >
          <div ref="days" class="days" @click="toggleDays">Days</div>
          <div ref="weeks" class="weeks" @click="toggleWeeks">Weeks</div>
          <div ref="months" class="months" @click="toggleMonths">Months</div>
        </div>
      </div>
      <apexchart
        width="100%"
        type="area"
        :options="chartOptions"
        :series="series"
      ></apexchart>

      <iframe
        width="600"
        height="450"
        src="https://datastudio.google.com/embed/reporting/0165099a-d2f9-48a3-b731-1760913582ef/page/PsTaB"
        frameborder="0"
        style="border:0"
        allowfullscreen
        v-show="!isDarkMode"
      ></iframe>
      <iframe
        width="600"
        height="450"
        src="https://datastudio.google.com/embed/reporting/c11763ae-543b-42d2-8be3-78cdcf860251/page/PsTaB"
        frameborder="0"
        style="border:0"
        allowfullscreen
        v-show="isDarkMode"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  data() {
    return {
      chartOptions: {
        colors: ["#14f1d9", "#7b42f6"],
        legend: {
          labels: {
            colors: [this.$store.getters.isDarkMode ? "white" : "black"],
          },
          position: "top",
        },
        tooltip: {
          theme: "dark",
        },
        grid: {
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          type: "datetime",
        },
      },
      series: [
        {
          name: "Active users",
          data: [
            [new Date("january 1, 2020"), 30],
            [new Date("january 5, 2020"), 70],
            [new Date("january 10, 2020"), 55],
            [new Date("january 15, 2020"), 100],
            [new Date("january 20, 2020"), 200],
            [new Date("january 25, 2020"), 500],
            [new Date("january 28, 2020"), 150],
            [new Date("january 30, 2020"), 600],
          ],
        },
        {
          name: "New users",
          data: [
            [new Date("january 1, 2020"), 30],
            [new Date("january 5, 2020"), 500],
            [new Date("january 8, 2020"), 150],
            [new Date("january 12, 2020"), 55],
            [new Date("january 15, 2020"), 300],
            [new Date("january 20, 2020"), 200],
            [new Date("january 25, 2020"), 70],
            [new Date("january 30, 2020"), 600],
          ],
        },
      ],
    };
  },
  components: {
    Header,
    apexchart: VueApexCharts,
  },
  methods: {
    toggleDays() {
      this.$refs.days.style.color = "white";
      this.$refs.days.style.background = "#56ccf2";
      this.$refs.days.style.borderRadius = "4px";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.style.borderRadius = "none";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.style.borderRadius = "none";
    },
    toggleWeeks() {
      this.$refs.weeks.style.color = "white";
      this.$refs.weeks.style.background = "#56ccf2";
      this.$refs.weeks.style.borderRadius = "4px";

      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.style.borderRadius = "none";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.style.borderRadius = "none";
    },
    toggleMonths() {
      this.$refs.months.style.color = "white";
      this.$refs.months.style.background = "#56ccf2";
      this.$refs.months.style.borderRadius = "4px";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.style.borderRadius = "none";

      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.style.borderRadius = "none";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 15%;
}
.spread {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
}

h1.light {
  @include heading-3($white);
}

h1.dark {
  @include heading-3($black);
}

.toggle {
  @include medium-text;
  color: $dark-grey;
  height: 50px;
  width: 240px;
  border-radius: 6px;
  padding: 5px;
  display: flex;
  flex-wrap: nowrap;

  &:hover {
    cursor: pointer;
  }
}

@mixin toggle-settings {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.3%;
  height: 100%;
}

.days {
  @include toggle-settings;

  color: white;
  background: #56ccf2;
  border-radius: 4px;
}

.weeks {
  @include toggle-settings;
}

.months {
  @include toggle-settings;
}
</style>
