<template>
  <a-dropdown
    :trigger="['click']"
    class="user-content"
  >
    <a
      class="ant-dropdown-link"
      @click.prevent
    >
      <a-avatar style="background-color: #87d068">
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
      {{userInfo().username}}
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu @click="onClick">
        <a-menu-item key="1">
          <lock-outlined />
          修改密码
        </a-menu-item>
        <a-menu-item key="2">
          <logout-outlined />
          退出系统
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {
  DownOutlined,
  UserOutlined,
  LockOutlined,
  LogoutOutlined,
} from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue'
import { EventBus } from '../../../Emit'
import { Router, useRouter } from 'vue-router'
import { useMainStore } from '@/store/index'
import API from '@/API/api'
import axiosHttpUtils from '@/Service/axiosUtils'
import Constants from '@/Constants'
export default defineComponent({
  components: {
    DownOutlined,
    UserOutlined,
    LockOutlined,
    LogoutOutlined,
  },
  setup() {
    let router: Router = useRouter()
    const store = useMainStore()
    const loginOut = () => {
      // store.dispatch('logOut', router)
      axiosHttpUtils(API.logoutApi).then((res) => {
        if (res.status == Constants.HTTP_SUCCESS_CODE) {
          router.push({
            name: 'login',
          })
          sessionStorage.clear()
        }
      })
    }
    const onClick: MenuProps['onClick'] = ({ key }) => {
      if (key == 2) {
        loginOut()
      }
    }
    const userInfo = () => {
      const user = sessionStorage.getItem('userInfo')
      return user ? JSON.parse(user) : {}
    }
    return {
      onClick,
      userInfo,
      router,
    }
  },
})
</script>
<style lang="scss" scoped>
.user-content {
  margin-right: 24px;
}
</style>