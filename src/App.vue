<script setup lang="ts">
import { onMounted } from 'vue';

import { supabase } from './http/supabase';
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore()

onMounted(() => {

  supabase.auth.getSession().then((session) => {
    if(session.data.session?.user){
      userStore.isAuth = true
    }
    console.log(userStore.isAuth)
    
  })
  
  supabase.auth.onAuthStateChange((event, _session) => {
    if (event === 'SIGNED_OUT') {
      userStore.isAuth = false
    }else if(event === 'SIGNED_IN'){
      userStore.isAuth = true
    }
  })
})
</script>

<template>
  <component :is="$route.meta.layout || 'div'">
    <router-view />
  </component>
</template>