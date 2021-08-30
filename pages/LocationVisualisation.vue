<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <BreadCrumb :breadcrumb-list="breadcrumbList" />
      </v-col>
      <v-col class="pb-0">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ activeLocation.name }}
        </h1>
      </v-col>

      <v-col cols="12">
        <div
          id="NetworkGraph"
          style="border: 1px #0000001f solid; background-color: #fff"
        />
      </v-col>

      <v-col v-show="selectedPerson !== null" class="mb-5 pt-0" cols="12">
        <v-card outlined>
          <v-card-title> {{ getSelectedPerson.name }} </v-card-title>
          <v-card-text>
            <span>
              Race:
              <span style="color: black">{{ getSelectedPerson.race }} </span
              ><br />
              Age:
              <span style="color: black">{{ getSelectedPerson.age }} </span
              ><br />
              Gender:
              <span style="color: black">{{ getSelectedPerson.gender }} </span
              ><br />
              Sexuality:
              <span style="color: black"
                >{{ getSelectedPerson.sexuality }} </span
              ><br />
              Profession:
              <span style="color: black"
                >{{ getSelectedPerson.profession }} </span
              ><br />
              Status:
              <span style="color: black">{{ getSelectedPerson.status }} </span
              ><br />
            </span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import BreadCrumb from "~/components/BreadCrumb";

export default {
  name: "LocationsVisualisation",
  components: {
    BreadCrumb,
  },
  data: () => ({
    breadcrumbList: [
      {
        text: "Home",
        disabled: false,
        to: "/",
      },
      {
        text: "",
        disabled: true,
      },
    ],
    peopleHeaders: [
      {
        text: "Id",
        value: "id",
      },
      {
        text: "Name",
        value: "name",
      },
      {
        text: "Status",
        value: "status",
      },
      {
        text: "Parents",
        value: "parents",
      },
      {
        text: "Siblings",
        value: "siblings",
      },
    ],
    d3: null,
  }),
  computed: {
    ...mapState({
      activeLocation: (state) => state.locations.activeLocation,
      selectedPerson: (state) => state.locations.selectedPerson,
    }),
    ...mapGetters({
      getSelectedPerson: "locations/getSelectedPerson",
    }),
  },
  async mounted() {
    await this.getLocationById(this.$route.query.id);
    this.breadcrumbList[1].text = this.activeLocation.name;
    this.d3 = require("d3");
    this.generateNetworkGraph();
  },
  methods: {
    ...mapActions({
      getLocationById: "locations/getLocationById",
    }),
    ...mapMutations({
      setSelectedPerson: "locations/setSelectedPerson",
    }),
    drag(simulation) {
      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }
      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }
      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return this.d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    },
    clickStarted(event, clickedNode) {
      console.log("started", event);
      console.log(clickedNode);
      this.setSelectedPerson(clickedNode.id);
    },
    clickEnd(event, d) {
      event.append("circle").attr("fill", "black");
      console.log("ended", event);
      console.log(d);
    },
    generateNetworkGraph() {
      const width = 800;
      const height = 500;
      const data = JSON.parse(JSON.stringify(this.activeLocation.graph_data));
      const links = data.links;
      const nodes = data.nodes;

      const simulation = this.d3
        .forceSimulation(nodes)
        .force(
          "link",
          this.d3
            .forceLink(links)
            .id((d) => d.id)
            .distance((d) => d.value)
        )
        .force("charge", this.d3.forceManyBody())
        .force("x", this.d3.forceX())
        .force("y", this.d3.forceY());

      const svg = this.d3
        .select("#NetworkGraph")
        .append("svg")
        .attr("viewBox", [-width / 2, -height / 2, width, height]);

      const link = svg
        .append("g")
        .attr("stroke-opacity", 0.8)
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke-width", 2.5)
        .attr("distance", (d) => d.value)
        .attr("stroke", (d) => d.color);

      const node = svg
        .append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", 5)
        .attr("fill", (n) => n.color)
        .call(this.drag(simulation))
        .on("click", this.clickStarted);

      node.append("title").text((d) => d.id);

      simulation.on("tick", () => {
        link
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);
        node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      });
    },
  },
};
</script>
