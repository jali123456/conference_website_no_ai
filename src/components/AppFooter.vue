<!-- Appfooter.vue -->
<template>
    <v-footer class="bg-custom-dark text-white footer-border pa-6">
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

           <div class="footer-logo-strip">
             <img :src="mainLogo" alt="Conference Logo" class="footer-logo" />
             <img :src="pertanikaLogo" alt="Pertanika Logo" class="footer-logo" />
             <img :src="scopusLogo" alt="Scopus Logo" class="footer-logo" />
           </div>
         </v-col>
 
         <v-col cols="4" class="text-center mb-2 mb-sm-0 me-auto align-self-center">
           <h4 class="text-h6 mb-2 d-none d-sm-block">Follow Us</h4>
           <div>
             <v-btn
               v-for="item in socialItems"
               :key="item.title"
               :href="item.href"
               :title="item.title"
               icon
               variant="text"
               density="comfortable"
               class="mx-4 social-link-custom"
               target="_blank"
               rel="noopener noreferrer"
             >
               <v-icon :icon="item.icon" size="26"></v-icon>
             </v-btn>
           </div>
           <div class="mt-2">
             <v-btn variant="text" density="comfortable" color="white" :href="'https://elmu.edu.my/'" target="_blank" class="mx-1">Home</v-btn>
             <v-btn variant="text" density="comfortable" color="white" :href="'https://elmu.edu.my/about'" target="_blank" class="mx-1">About</v-btn>
             <v-btn variant="text" density="comfortable" color="white" :href="'https://elmu.edu.my/study'" target="_blank" class="mx-1">Services</v-btn>
           </div>
         </v-col>
         
         <v-col cols="4" class="text-center text-sm-right mb-2 align-self-center">
           <!-- <p class="text-body-2 mb-1">
             Phone: +60193978679
             <v-icon small left>mdi-phone</v-icon> 
           </p> -->
           <v-row class="align-center justify-center justify-sm-end">
          <v-icon size="default" class="me-2">mdi-email</v-icon>
          <span class="text-body-2">
            Email: <a href="mailto:icelin@elmu.edu.my" target="_blank" rel="noopener noreferrer" class="text-decoration-none text-break text-white">icelin@elmu.edu.my</a>
          </span>
          </v-row>
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
import mainLogo from '@/assets/logo.png'
import pertanikaLogo from '@/assets/footerLogo/Pertanika_logo.png'
import scopusLogo from '@/assets/footerLogo/Scopus_logo.svg'

const socialItems = [
  {
    title: 'Facebook',
    icon: 'mdi-facebook',
    href: 'https://www.facebook.com/people/ICELIn/61582930324491/',
  },
  {
    title: 'instagram',
    icon: 'mdi-instagram',
    href: 'https://www.instagram.com/icelin.2026/',
  },
  {
    title: 'LinkedIn',
    icon: 'mdi-linkedin',
    href: 'https://www.linkedin.com/in/icelin-elmu-635a42390/',
  },
];
</script>

<style scoped>
.bg-custom-dark {
  background-color: #121e39 !important;
}

.v-footer {
  font-size: 1.05rem;
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
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.4;
  color: white !important;
}

.footer-logo-strip {
  margin-top: 0.5rem;
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.footer-logo {
  height: 38px;
  width: auto;
  object-fit: contain;
  filter: brightness(1.1);
}

@media (min-width: 600px) {
  .footer-logo-strip {
    justify-content: flex-start;
  }
}

.v-footer p {
  font-size: 1.02rem;
  line-height: 1.6;
  margin-bottom: 0.5rem !important;
}

.v-footer .text-caption {
  font-size: 0.95rem !important;
}
</style>