<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">Frequently Asked Questions</h1>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-expansion-panels>
              <v-expansion-panel
                v-for="(category, index) in faqCategories"
                :key="index"
              >
                <v-expansion-panel-title>
                  <div class="d-flex align-center">
                    <v-icon start class="mr-2">{{ category.icon }}</v-icon>
                    <span class="text-h6">{{ category.title }}</span>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-list>
                    <v-list-item
                      v-for="(faq, faqIndex) in category.items"
                      :key="faqIndex"
                      class="mb-4"
                    >
                      <v-card variant="outlined" class="w-100">
                        <v-card-title class="text-subtitle-1 font-weight-bold">
                          {{ faq.question }}
                        </v-card-title>
                        <v-card-text class="text-body-1">
                          {{ faq.answer }}
                        </v-card-text>
                      </v-card>
                    </v-list-item>
                  </v-list>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Contact for More Questions -->
      <v-col cols="12" class="mt-6">
        <v-card color="primary" class="text-center">
          <v-card-text class="text-white">
            <p class="text-h6 mb-3">Didn't find the answer you were looking for?</p>
            <p class="text-body-1">
              Contact us at <a href="mailto:info@conference.org" class="text-white text-decoration-underline">info@conference.org</a> or use our
              contact form, and we'll get back to you as soon as possible.
            </p>
            <v-btn
              class="mt-3"
              variant="outlined"
              color="white"
              to="/contact"
            >
              Contact Us
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const faqCategories = [
  {
    title: "Registration & Fees",
    icon: "mdi-account-cash",
    items: [
      {
        question: "What are the registration deadlines?",
        answer: "Early registration ends on May 15, regular registration ends on June 30, and late registration will be available until July 15."
      },
      {
        question: "Do students get a discount on registration fees?",
        answer: "Yes, students receive a 40% discount on registration fees. Valid student ID will be required at check-in."
      },
      {
        question: "Is there a one-day registration option?",
        answer: "Yes, one-day registration is available at a reduced rate. Please visit the Registration page for pricing details."
      },
      {
        question: "What does the registration fee include?",
        answer: "Registration includes access to all sessions, workshops, conference materials, lunches, coffee breaks, and the welcome reception."
      }
    ]
  },
  {
    title: "Paper Submission",
    icon: "mdi-file-document-outline",
    items: [
      {
        question: "What is the paper submission deadline?",
        answer: "The deadline for full paper submission is April 10. No extensions will be granted."
      },
      {
        question: "What format should I use for my paper?",
        answer: "Papers should be submitted in IEEE format, using either the LaTeX or Word template available on the Downloads page."
      },
      {
        question: "How long should my paper be?",
        answer: "Full papers should be 6-8 pages including figures and references. Extended abstracts are limited to 2 pages."
      },
      {
        question: "When will I be notified about acceptance?",
        answer: "Authors will be notified of acceptance decisions by May 15. Camera-ready papers will be due by June 1."
      }
    ]
  },
  {
    title: "Conference Schedule",
    icon: "mdi-calendar-clock",
    items: [
      {
        question: "When does the conference begin and end?",
        answer: "The main conference runs from August 10-12. Pre-conference workshops will be held on August 9."
      },
      {
        question: "Will there be recorded sessions available afterward?",
        answer: "Yes, all keynote speeches and selected sessions will be recorded and made available to registered participants for three months after the conference."
      },
      {
        question: "What is the time allocation for presentations?",
        answer: "Regular presentations are allocated 20 minutes (15 minutes presentation + 5 minutes Q&A). Keynote speeches are 45 minutes with 15 minutes for questions."
      }
    ]
  },
  {
    title: "Venue & Accommodation",
    icon: "mdi-map-marker",
    items: [
      {
        question: "Are there recommended hotels near the conference venue?",
        answer: "Yes, we have negotiated special rates with several hotels near the venue. See the Venue & Accommodation page for details and booking links."
      },
      {
        question: "Is there transportation between the hotels and the venue?",
        answer: "Shuttle service will be provided from partner hotels to the venue every morning and evening during the conference."
      },
      {
        question: "What dining options are available at the venue?",
        answer: "The venue has a cafeteria and several restaurants within walking distance. Lunch is included in the registration fee for all conference days."
      }
    ]
  },
  {
    title: "Virtual Participation",
    icon: "mdi-laptop",
    items: [
      {
        question: "Can I attend the conference virtually?",
        answer: "Yes, we offer a virtual attendance option. Virtual attendees will have access to livestreams of keynotes and selected sessions, as well as an online platform for networking."
      },
      {
        question: "How can I present my paper virtually?",
        answer: "Virtual presenters will be given a time slot and will present via our virtual conference platform. Technical guidelines will be sent to all virtual presenters."
      },
      {
        question: "Is there a discount for virtual attendance?",
        answer: "Yes, virtual attendance has a reduced registration fee. Please see the Registration page for details."
      }
    ]
  }
]
</script>

<style scoped>
.v-expansion-panels {
  background-color: transparent;
}
</style> 