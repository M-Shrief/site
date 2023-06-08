---
layout: doc
title: Home
head:
  - - meta
    - name: author
    - content: Mohamed Shrief
  - - meta
    - name: description
      content: Junior Backend & Frontend Developer for the Web.
  - - meta
    - name: keywords
      content:
        Web Development Backend Frontend JavaScript TypeScript Vuejs Vite Nodejs
        Express.js
aside: false
---

<script setup>
  import IndexHeader from './components/IndexHeader.vue';
  import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';

  function copyToClipboard() {
  // Get the text field
  var copyText = document.getElementById("mail");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  copyText.textContent = 'Copied mail to Clipboard'
  }
</script>

<IndexHeader />

<VPButton tag="a" size="medium" theme="brand" text="Resume" href="https://raw.githubusercontent.com/M-Shrief/M-Shrief/main/mohamed-resume.pdf"/>

## Current skills

- JavaScript & TypeScript
- NodeJS and Express.JS
- VueJS + (Pinia and vue-router)
- Used Postgres, MySQL and MongoDB.
- CSS & SCSS.
- Docker's basics

### Working to add:

- Git Workflow.
- solid ground on Algorithms and Data Structures.
- Solid ground on OOP & design patterns.
- Unit/Component/E2E Testing using Cypress and Jest.
- Network Basics, in-depth knowledge about HTTP(s) and TCP/IP basics.
- HTTP RESTFUL (especially interceptors).
- Deep dive in Databases (PostgreSQL & Redis).
- WebSockets
- Nginx & API gateway
- Using SSR in frontend.
- Basic knowledge about Architecture and Design
- Docker

## Looking to be

- Consistent.
- Doing priorities first.
- Dedicated to deadlines.
- Very flexible but very clear.
- Putting no cognitive load on users.
- Developing and Deploying with security always in mind.

## I respect having

- An ethical environment
- Anti toxic positivity/negativity people
- Meaningful work
