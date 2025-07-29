<!-- Appfooter.vue -->
<template>
    <v-footer class="bg-custom-dark text-white footer-border pa-4">
      <v-container fluid class="pa-0">
       <v-row class="d-flex mb-6">
         <v-col cols="4" class="text-center text-sm-left mb-2 mb-sm-0 me-auto">
           
           <p class="text-body-2 mb-1 conference-title">
             1st International Conference on Enforcement,
             <br>
             Law & Integrity 2026 (ICELIn26)
           </p>
           <p class="text-body-2 mb-1">
             Enforcement, Leadership And Management University(ELMU)
           </p>
         </v-col>
 
         <v-col cols="4" class="text-center mb-2 mb-sm-0 me-auto align-self-center">
           <h4 class="text-subtitle-1 mb-1 d-none d-sm-block">Follow Us</h4>
           <div>
             <v-btn
               v-for="item in socialItems"
               :key="item.title"
               :href="item.href"
               :title="item.title"
               icon
               variant="text"
               density="compact"
               class="mx-1 social-link-custom"
               target="_blank"
               rel="noopener noreferrer"
             >
               <v-icon :icon="item.icon" size="18"></v-icon>
             </v-btn>
           </div>
           <div class="mt-2">
             <v-btn variant="text" density="compact" color="white" :href="'https://elmu.edu.my/'" target="_blank" class="mx-1">Home</v-btn>
             <v-btn variant="text" density="compact" color="white" :href="'https://elmu.edu.my/about'" target="_blank" class="mx-1">About</v-btn>
             <v-btn variant="text" density="compact" color="white" :href="'https://elmu.edu.my/study'" target="_blank" class="mx-1">Services</v-btn>
           </div>
         </v-col>
         
         <v-col cols="4" class="text-center text-sm-right mb-2 mb-sm-0 me-auto align-self-center">
           <p class="text-body-2 mb-1">
             Phone: +60176063615
             <v-icon small left>mdi-phone</v-icon> 
           </p>
           <p class="text-body-2 mb-0">
             Email: <a href="mailto:icelin@elmu.edu.my" target="_blank" rel="noopener noreferrer" class="text-decoration-none text-white">icelin@elmu.edu.my</a>
             <v-icon small left>mdi-email</v-icon>
           </p>
         </v-col>
       </v-row>
 
       <v-divider class="my-2 bg-white-divider"></v-divider>
 
       <v-row no-gutters>
         <v-col class="text-center text-caption">
            &copy; {{ new Date().getFullYear() }} ELMU University. All rights reserved.
            <br class="d-sm-none"> <span class="d-none d-sm-inline"> | </span> Built by: Research Innovation And Graduate Studies Department
         </v-col>
       </v-row>
      </v-container>
   </v-footer>
</template>

<script setup>
const socialItems = [
  {
    title: 'Facebook',
    icon: 'mdi-facebook',
    href: '#',
  },
  {
    title: 'Twitter',
    icon: 'mdi-twitter',
    href: '#',
  },
  {
    title: 'LinkedIn',
    icon: 'mdi-linkedin',
    href: '#',
  },
];
</script>

<style scoped>
.bg-custom-dark {
  background-color: #121e39 !important;
}

.footer-border {
  border-bottom: 6px solid #FF0000 !important;
  border-top: none !important;
}

.text-white {
  color: white !important;
}

.v-footer .v-btn {
  color: white !important;
  opacity: 0.9;
}

.v-footer .v-btn:hover {
  opacity: 1;
}

.v-footer p, .v-footer h4, .v-footer .text-caption {
  color: rgba(255, 255, 255, 0.9) !important;
}

.v-footer h4 {
  color: white !important;
}

.social-link-custom .v-icon {
  color: white !important;
  opacity: 0.9;
  transition: opacity .2s ease-in-out;
}

.social-link-custom:hover .v-icon {
  opacity: 1;
}

.bg-white-divider {
  background-color: rgba(255, 255, 255, 0.3) !important;
  border-color: rgba(255, 255, 255, 0.3) !important;
}

.conference-title {
  font-weight: 500;
  line-height: 1.4;
  color: white !important;
}

.v-footer p {
  line-height: 1.5;
  margin-bottom: 0.5rem !important;
}
</style>