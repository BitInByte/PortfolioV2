<template>
  <section>
    <g-link
      v-for="project in $page.projects.edges"
      :key="project.node.id"
      :to="`/project/${project.node.id}`"
    >
      <div>
        <g-image :src="project.node.image"></g-image>
        <p>{{ project.node.title }}</p>
      </div>
    </g-link>
  </section>
</template>

<page-query>
query {
  projects: allProject(sortBy: "projectNr", order: DESC) {
    edges {
      node {
        id
        image {
            type
        }
        title
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  mounted() {
    console.log('Projects: ', this.$page.projects);
  },
};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-template-rows: minmax(min-content, max-content);
  align-content: start;
  justify-items: center;
  height: 100%;
  //overflow-y: scroll;
  gap: 1rem;

  & div {
    width: 20rem;
    height: 20rem;
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    animation: fade 0.5s forwards;
    cursor: pointer;

    &:hover > img {
      transform: scale(1.5);
    }

    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    & p {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 1rem;
      background-color: rgba($color: #000000, $alpha: 0.75);
      color: #ffffff;
    }
  }
}
</style>
