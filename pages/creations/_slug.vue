<template>
  <div>
    <ProjectTopInfo :project="project" />
    <ProjectPlayer :motion-id="project.motion_id" />
    <ProjectMedias v-if="project.medias.length > 0" :medias="project.medias" />
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
