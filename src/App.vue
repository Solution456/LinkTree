<script setup lang="ts">
import { onMounted } from 'vue';

import { supabase } from './http/supabase';
import { useUserStore } from "@/stores/userStore";
import { deleteCookieToken, getCookieToken } from './composables/Auth';

const userStore = useUserStore()

onMounted(() => {

  supabase.auth.getSession().then((session) => {
    if (session.data.session?.user) {
      
      userStore.isAuth = true
      userStore.User.id = session.data.session.user.id
    }

    else if(getCookieToken()){
      deleteCookieToken()
      userStore.isAuth = false
    }
      
  })

  supabase.auth.onAuthStateChange((event, _session) => {
    if (event === 'SIGNED_OUT') {
      userStore.isAuth = false
    } else if (event === 'SIGNED_IN') {
      userStore.isAuth = true
    }
  })
})
</script>

<template>
  <Suspense>
    <component :is="$route.meta.layout || 'div'">
      <router-view />
    </component>
  </Suspense>
</template>