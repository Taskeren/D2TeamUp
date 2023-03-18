import axios, { type AxiosResponse } from 'axios'

export async function get_destiny2_teams(): Promise<AxiosResponse<HeyBoxResponse<SearchTeamResult>>> {
  return axios.get('https://destiny2-teams.nitu2003.workers.dev/')
}

export interface HeyBoxResponse<T> {
  status: string,
  msg: string,
  version: string,
  result: T
}

export interface SearchTeamResult {
  game_info: { game_icon: string, game_name: string, appid: string },
  color: string,
  team_list: TeamInfo[],
  setting_list: {
    wait_list: {
      add_timestamp: string,
      key: string,
      desc: string
    }[],
    copy_text_title: string,
    settings_list: {
      setting_key: string,
      options: {
        key: string,
        desc: string
      }[],
      title: string
    }[],
    chatSwitch: boolean,
    modes_list: {
      add_timestamp: string,
      setting_key: string,
      options: {
        add_timestamp: string,
        icon: string,
        key: string,
        desc: string
      }[],
      title: string
    }[],
    acc_display_switch: boolean
  }[]
}

export interface TeamInfo {
  other_copy_text: string,
  media_list: any[],
  tags: { color: string, desc: string }[],
  wait: number,
  other_copy_title: string,
  chat_info: any,
  create_str: string,
  link_id: number,
  is_full: boolean,
  content_text: string,
  is_join: false,
  user: User,
  is_my_link: boolean,
  icons: [],
  need_teammate: number,
  teams: User[],
  is_expired: boolean,
  copy_text: string,
  has_chat: number
}

export interface User {
  username: string,
  userid: string,
  avatar_decoration: {
    src_type: string,
    src_url: string
  },
  state: number,
  avatar: string,
  avartar: string,
  level_info: {
    level: number
  }
}