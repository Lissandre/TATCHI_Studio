<template>
  <div>
    <ProjectTopInfo :project="project" />
    <ProjectPlayer :motion-id="project.motion_id" />
    <ProjectMedias :medias="project.medias" v-if="project.medias.length > 0" />
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, params, error, redirect }) {
    const project = await $strapi.findOne('motions', params.slug).catch(() => {
      error({ statusCode: 404, message: 'Not found' })
    })
    return {
      project,
    }
  },
}
</script>
