<template>
  <v-container class="faq-container">
    <v-row>
      <v-col cols="12">
        <h1 class="main-title">Frequently Asked Questions</h1>
        <p class="subtitle text-center">Find answers to common questions about the conference</p>
      </v-col>

      <v-col cols="12">
        <div class="search-container mb-6">
          <v-text-field
            v-model="searchQuery"
            placeholder="Search questions..."
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            clearable
            density="comfortable"
            class="search-field"
          />
        </div>

        <v-expansion-panels variant="accordion" class="faq-accordion">
          <v-expansion-panel
            v-for="(category, index) in filteredCategories"
            :key="index"
            class="category-panel"
          >
            <v-expansion-panel-title class="category-title red-bottom-border" color="elmubackground">
              <div class="d-flex align-center">
                <v-icon :icon="category.icon" start class="category-icon"></v-icon>
                <span class="category-name">{{ category.title }}</span>
              </div>
            </v-expansion-panel-title>
            
            <v-expansion-panel-text class="category-content">
              <v-list class="faq-list">
                <v-list-item
                  v-for="(faq, faqIndex) in category.items"
                  :key="faqIndex"
                  class="faq-item"
                >
                  <v-expansion-panels variant="accordion">
                    <v-expansion-panel class="question-panel">
                      <v-expansion-panel-title class="question-title">
                        <v-icon icon="mdi-help-circle-outline" start class="question-icon"></v-icon>
                        <span class="question-text">{{ faq.question }}</span>
                      </v-expansion-panel-title>
                      
                      <v-expansion-panel-text class="answer-text">
                        <div v-html="faq.answer"></div>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-list-item>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="12" class="contact-section">
        <v-card color="elmubackground" class="contact-card red-bottom-border">
          <v-card-text class="contact-content">
            <v-icon icon="mdi-email-outline" color="primary" class="contact-icon"></v-icon>
            <h3 class="contact-title">Still have questions?</h3>
            <p class="contact-text">
              Contact us at <a href="mailto:icelin@elmu.edu.my" class="contact-link">icelin@elmu.edu.my</a>
              and we'll respond as soon as possible.
            </p>
            <v-btn
              class="contact-button"
              color="primary"
              to="/contact"
              size="large"
            >
              Contact Us
              <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <SponsorsBanner/>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useHead } from '@unhead/vue'

useHead({
  title: 'FAQ | ICELIn 2026 Conference',
  meta: [
    {
      name: 'description',
      content: 'Find answers to frequently asked questions about registration, fees, paper submission, and more for the ICELIn 2026 Conference.'
    },
    {
      property: 'og:title',
      content: 'FAQ | ICELIn 2026 Conference'
    },
    {
      property: 'og:description',
      content: 'Get answers to common questions about the ICELIn 2026 Conference, including registration and participation details.'
    },
    {
      property: 'og:url',
      content: 'https://icelin.my/faq'
    },
    {
      name: 'twitter:title',
      content: 'FAQ | ICELIn 2026 Conference'
    },
    {
      name: 'twitter:description',
      content: 'Frequently asked questions about the ICELIn 2026 Conference.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://icelin.my/faq'
    }
  ]
})

const searchQuery = ref('');

const faqCategories = [
  {
    title: "Registration & Fees",
    icon: "mdi-account-cash",
    items: [
      {
        question: "What are the registration deadlines?",
        answer: `<ul>
          <li><strong>Early Bird Registration:</strong> From 2 January 2026 - 15 June 2026</li>
          <li><strong>Regular Registration:</strong> Ends on 15 July 2026</li>
        </ul>`
      },
      {
        question: "What does the registration fee include?",
        answer: `The registration fee provides full access to:
        <ul>
          <li>Forum sessions and parallel presentations</li>
          <li>Conference kit</li>
          <li>Certificate of participation</li>
          <li>Conference gala dinner</li>
        </ul>`
      },
      {
        question: "Is there a one-day pass available?",
        answer: "Currently, one-day registration is not offered. All participants must register for the full conference."
      },
      {
        question: "Do students receive any special rates or discounts?",
        answer: "At present, no separate student rates are offered. All attendees must register according to their participant category."
      },
      {
        question: "What payment methods are accepted?",
        answer: `We accept payments via:
        <ol>
          <li>Online banking</li>
          <li>Telegraphic transfer (for international participants)</li>
        </ol>
        Payment instructions will be provided after abstract acceptance or during registration.`
      },
      {
        question: "Can I get an official receipt for my payment?",
        answer: "Yes. An official receipt will be issued once the payment is confirmed. Please allow up to 7 working days for processing."
      }
    ]
  },
  {
    title: "Paper Submission",
    icon: "mdi-file-document-outline",
    items: [
      {
        question: "How do I submit my abstract?",
        answer: `Abstracts must be submitted through the official EasyChair system available on the <a href="/call-for-abstracts">ICELIn26 website</a> or by scanning the QR code provided in the conference brochure.`
      },
      {
        question: "What is the abstract format and word limit?",
        answer: `Abstracts should not exceed 250 words, the ideal format is between 200-250 words and must be submitted in English. The submission should include:
        <ul>
          <li>Title</li>
          <li>Author(s),affiliation(s),Institution(s),Country</li>
          <li>Abstract body (no tables, images, or figures)</li>
          <li>Keywords (3–5)</li>
        </ul>
        Templates and detailed guidelines are available on the <a href="/downloads"> website</a>.`

      },
      {
        question: "How many abstracts can I submit?",
        answer: "Each participant may submit one (1) abstract as the presenting author. However, co-authorship in other submissions is allowed."
      },
      {
        question: "When will I be notified if my abstract is accepted?",
        answer: "Authors will be notified of their abstract acceptance by 15 April 2026 via email from icelin@elmu.edu.my. Please ensure your email address is accurate during submission and check your inbox (including the spam folder) regularly."
      },
      {
        question: "What are the presentation formats available?",
        answer: `ICELIn26 accepts two presentation types:
        <ul>
          <li>Oral Presentation</li>
          <li>Poster Presentation</li>
        </ul>`
      },
      {
        question: "Is there a full paper submission after abstract acceptance?",
        answer: "Yes. Authors of accepted abstracts will be invited to submit a full paper for consideration in the SCOPUS-indexed journal publication or conference proceedings with ISBN. Detailed instructions will be shared via email."
      }
    ]
  },
  {
    title: "Conference Program & Presentation",
    icon: "mdi-calendar-clock",
    items: [
      {
        question: "When will the detailed conference program be available?",
        answer: "The full program, including panel discussions and parallel presentations, will be released by 1st July 2026. It will be available on the ICELIn26 website and emailed to all registered participants."
      },
      {
        question: "What is the format of presentations and time allocation?",
        answer: "Presentations will be conducted in-person. Each presenter will be allocated 10 minutes for the presentation and 5 minutes for Q&A."
      },
      {
        question: "Can I present virtually?",
        answer: "At this time, all presentations must be made physically at the venue. No virtual presentation options are available."
      },
      {
        question: "Will technical equipment be provided?",
        answer: "Yes. Each session room will be equipped with a laptop, projector, microphone, and pointer. Presenters are strongly encouraged to submit their presentation slides at least 2 weeks before the conference to icelin@elmu.edu.my. Additionally, please bring a backup copy on a USB drive."
      },
      {
        question: "How will parallel sessions be organised?",
        answer: "Parallel sessions will be grouped by thematic sub-topics under the main conference themes. Each session will have a designated moderator and timekeeper."
      },
      {
        question: "What are the guidelines for poster presentations?",
        answer: "Posters should be printed in A1 size (594mm x 841mm), in portrait orientation. Presenters are responsible for bringing their printed posters and setting them up at the allocated area on the first day of the conference."
      },
      {
        question: "Will I be assigned a time slot to present my poster?",
        answer: "Yes. A dedicated poster session will be scheduled in the program. Presenters are expected to stand by their posters to engage with attendees and answer questions during that time."
      }
    ]
  },
  {
    title: "General & Technical Support",
    icon: "mdi-help-circle",
    items: [
      {
        question: "Who can I contact if I need help with registration or payment issues?",
        answer: "For any issues related to registration or payment, please email us at icelin@elmu.edu.my. Our secretariat team will respond within 1–2 working days."
      },
      {
        question: "I submitted my abstract but haven't received confirmation. What should I do?",
        answer: "Please check your spam or junk mail folder. If you still haven't received anything within 3 working days, contact us via email at icelin@elmu.edu.my."
      },
      {
        question: "I require accessibility assistance at the venue. Who should I inform?",
        answer: "If you require any accessibility arrangements, please contact us at least 2 weeks before the conference so we can make the necessary arrangements."
      },
      {
        question: "Will printing services be available at the venue?",
        answer: "No, printing services will not be available at the venue. Participants are advised to prepare and bring all necessary materials (including printed copies of presentations or posters, if required) prior to the conference."
      },
      {
        question: "What language will the conference be conducted in?",
        answer: "The main language of the conference is English. However, selected sessions may be conducted in Bahasa Malaysia, especially for parallel sessions based on presenter preference."
      }
    ]
  }
];

const filteredCategories = computed(() => {
  if (!searchQuery.value) return faqCategories;
  
  const query = searchQuery.value.toLowerCase();
  return faqCategories.map(category => ({
    ...category,
    items: category.items.filter(faq => 
      faq.question.toLowerCase().includes(query) || 
      faq.answer.toLowerCase().includes(query)
    )
  })).filter(category => category.items.length > 0);
});
</script>

<style scoped>
.red-bottom-border {
  border-bottom: 4px solid red;
}

.faq-container {
  max-width: 1200px;
  padding: 24px 16px;
}

.main-title {
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: 700;
  text-align: center;
  color: #1976d2;
  margin-bottom: 8px;
}

.subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #616161;
  margin-bottom: 32px;
}

.search-container {
  max-width: 600px;
  margin: 0 auto;
}

.search-field {
  background-color: white;
  border-radius: 8px;
}

.faq-accordion {
  border-radius: 12px;
}

.category-panel {
  margin-bottom: 12px;
  border-radius: 12px !important;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.category-title {
  background-color: #f5f5f5;
  font-size: 1.1rem;
  font-weight: 600;
  min-height: 64px;
  padding: 0 20px;
}

.category-icon {
  color: #1976d2;
}

.category-name {
  font-size: clamp(1rem, 2vw, 1.1rem);
}

.category-content {
  padding: 8px 0;
  background-color: #fafafa;
}

.faq-list {
  background-color: transparent;
  padding: 0 8px;
}

.faq-item {
  padding: 0;
  margin-bottom: 8px;
}

.question-panel {
  border-radius: 8px !important;
  margin-bottom: 8px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.question-title {
  background-color: white;
  font-weight: 500;
  min-height: 56px;
  padding: 0 16px;
}

.question-icon {
  color: #1976d2;
  margin-right: 12px;
}

.question-text {
  font-size: clamp(0.95rem, 2vw, 1rem);
  line-height: 1.4;
}

.answer-text {
  background-color: white;
  padding: 16px !important;
  color: #424242;
  line-height: 1.7;
  font-size: clamp(0.875rem, 2vw, 0.95rem);
}

.answer-text :deep(ul),
.answer-text :deep(ol) {
  margin: 8px 0;
  padding-left: 24px;
}

.answer-text :deep(li) {
  margin-bottom: 6px;
}

.answer-text :deep(strong) {
  color: #1976d2;
  font-weight: 600;
}

.contact-section {
  margin-top: 40px;
}

.contact-card {
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  padding: 32px 16px;
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
  color: white !important;
}

.contact-icon {
  font-size: 48px;
  margin-bottom: 16px;
  color: white;
}

.contact-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.contact-text {
  font-size: 1rem;
  margin-bottom: 24px;
  line-height: 1.6;
}

.contact-link {
  color: white !important;
  text-decoration: underline;
  font-weight: 500;
}

.contact-button {
  font-weight: 500;
  letter-spacing: 0.5px;
  min-width: 160px;
}

/* Mobile optimizations */
@media (max-width: 600px) {
  .faq-container {
    padding: 16px 12px;
  }
  
  .category-title {
    min-height: 56px;
    padding: 0 12px;
  }
  
  .question-title {
    min-height: 48px;
    padding: 0 12px;
  }
  
  .question-icon {
    margin-right: 8px;
    font-size: 1rem;
  }
  
  .answer-text {
    padding: 12px !important;
  }
  
  .contact-card {
    padding: 24px 12px;
  }
  
  .contact-icon {
    font-size: 40px;
  }
  
  .contact-title {
    font-size: 1.3rem;
  }
  
  .contact-text {
    font-size: 0.9rem;
  }
}

@media (max-width: 400px) {
  .main-title {
    font-size: 1.5rem;
  }
  
  .subtitle {
    font-size: 0.9rem;
  }
  
  .category-name {
    font-size: 0.9rem;
  }
  
  .question-text {
    font-size: 0.85rem;
  }
}
</style>