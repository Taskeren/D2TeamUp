<script setup lang="ts">
import { get_destiny2_teams, type TeamInfo } from '@/heyboxapi'
import { reactive, ref } from 'vue'

const refresh_text = ref("刷新")
const refresh_disabled = ref(false)

var teams: TeamInfo[] = reactive([])

function refresh() {
  refresh_text.value = "更新中……"
  refresh_disabled.value = true

  get_destiny2_teams()
    .then((resp) => {
      const team_list = resp.data.result.team_list
      console.log(team_list)

      // clear array
      teams.length = 0
      teams.push(...team_list)
    })
    .catch((error) => {
      console.error(error)
      window.alert('Error! Find more details in Console.')
    })
    .finally(() => {
      refresh_text.value = "刷新"
      refresh_disabled.value = false
    })
}

function copy(code: string) {
  navigator.clipboard.writeText(code)
  console.log(`Clipboard updated to ${code}`)
}
</script>

<template>
  <div class="m-4 flex flex-wrap items-center justify-center">
    <div id="control" class="m-2 box-border h-32 w-48 bg-purple-400 flex items-center justify-center">
      <button :disabled="refresh_disabled" @click="refresh" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-600">{{ refresh_text }}</button>
    </div>
    <div v-for="team in teams" :key="team.link_id" @click="copy(team.copy_text)" class="m-2 p-2 h-32 w-48 bg-purple-400 bg-opacity-50 flex items-center justify-center drop-shadow rounded-sm cursor-pointer">
      <div class="absolute top-0 left-0 text-sm">{{ team.copy_text }}</div>
      <div class="absolute bottom-0 right-0 text-sm">{{ team.create_str }}</div>
      <div class="p-2 font-bold text-justify">{{ team.content_text }}</div>
    </div>
  </div>
  <div class="fixed bottom-0 text-white text-center">
    <p>2023 &copy; <a href="https://github.com/Taskeren/D2TeamUp" target="_blank">Taskeren/D2TeamUp</a></p>
    <p>数据来源小黑盒</p>
  </div>
</template>
