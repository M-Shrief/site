---
layout: doc
title: Projects
head:
  - - meta
    - name: author
    - content: Mohamed Shrief
  - - meta
    - name: description
      content:
        Current and past projects, for the Frontend and Backend, using
        JavaScript & TypeScript mainly
  - - meta
    - name: keywords
      content:
        Web Development Backend Frontend JavaScript TypeScript Vuejs Vite Nodejs
        Express.js Postgres MongoDB
aside: false
---

<script setup>
  import PreviewTabs from './components/PreviewTabs.vue';
</script>

# Projects

### “Adeeb أديب” (personal project) - Jan. 2023 – Present

It's concerned with Arabic literature. It assumes a business model that enables
you to order a specific piece of literature to be printed with especial colors
and font. Then it'll be delivered to the customer, with the ability for the
customer to follow up the process. And for special customers, it provides them
with the ability to make bulk orders fast and easy. And if they’re willing to
signup, they can review all of their past orders.

<PreviewTabs />

**My Role: Frontend & Backend development**

Built a single page application (SPA) that consumes a REST API, tech stack that

was used:

- Mainly **TypeScript**.

- Backend,
  [check repo](https://github.com/M-Shrief/Adeeb_ExpressTS 'github repo')

  - **Nodejs**, particularly using **Express.js**
  - **MongoDB**
  - _JWT Authentication_
  - _Centralized error handling_
  - ...and more.

- Frontend, [check repo](https://github.com/M-Shrief/Adeeb_Vue_TS 'github repo')

  - **Vuejs**
  - **Vite**
  - **Pinia**
  - **Vue-router**
  - _Vee-validate_
  - ...and more.

- **Currently working to:**
  - Use **Quasar** framework to make the frontend to render on the server (SSR),
    [check repo](https://github.com/M-Shrief/Adeeb_Quasar_SSR 'github repo').
  - Migrate the backend to use **Postgres** and **TypeORM**,
    [check repo](https://github.com/M-Shrief/Adeeb_ExpressTS_Postgres 'github repo').
  - Make the project more robust and resilient by tests, better data validation
    and error handling.
  - Improve tooling
  - Improve the authentication process and route guards.

<style>
video {
  max-width: 65rem;
  width: 100%;
  max-height: 35rem;
  height: 100%;
  margin: 1rem auto;
}

</style>
