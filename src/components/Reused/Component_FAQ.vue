<template>
  <v-container fluid>
    <h4 class="text-h4 text-center mb-2">Frequently Asked Questions</h4>
    <p class="text-body-1 text-center text-medium-emphasis mb-8">
      Find answers to commonly asked questions about our products and services.
    </p>
    
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-expansion-panels
          v-model="panel"
          variant="accordion"
          class="faq-panels"
        >
          <v-expansion-panel
            v-for="item in FAQ_Data"
            :key="item.id"
            :value="item.id"
            class="faq-panel"
          >
            <v-expansion-panel-title
              class="text-h6 font-weight-medium pa-6"
              collapse-icon="mdi-chevron-down"
              expand-icon="mdi-chevron-down"
            >
              {{ item.title }}
            </v-expansion-panel-title>
            
            <v-expansion-panel-text class="pa-6 pt-0">
              <div class="text-body-1 text-medium-emphasis">
                {{ item.description }}
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FAQ_Data } from './FAQ_Data';

export default defineComponent({
  name: 'Component_FAQ',
  data() {
    return {
      panel: [],
      FAQ_Data,
    };
  }
});
</script>

<style scoped>
.faq-panels {
  border-radius: 8px;
  overflow: hidden;
}

.faq-panel {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.faq-panel:last-child {
  border-bottom: none;
}

.v-expansion-panel-title {
  min-height: 68px;
}

.v-expansion-panel-title:hover {
  background-color: rgba(0, 0, 0, 0.04);
}
</style>