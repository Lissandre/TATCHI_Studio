<template>
  <div>
    <ProjectTopInfo :project="project" />
    <ProjectPlayer :motion-id="project.motion_id" />
    <ProjectMedias :medias="project.medias" />
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, params }) {
    return {
      project: await $strapi.findOne('motions', params.slug),
    }
  },
}
</script>
