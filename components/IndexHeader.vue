<template>
  <h1 class="name">
    <span>Mohamed Shrief</span>
  </h1>
  <h1 class="title">Junior Frontend & Backend Developer</h1>

  <p class="tagline">I'm always longing to work with an experienced team to learn
    from and add to them.</p>
</template>


<style lang="scss" scoped>
.name,
.title {
  letter-spacing: -0.4px;
  font-weight: 700;
  white-space: pre-wrap;
}

.name {
  font-size: 2rem;
  line-height: 2.5rem;
  color: var(--vp-home-hero-name-color);

  @media (min-width: 640px) {
    line-height: 3.5rem;
    font-size: 3rem;
  }

  @media (min-width: 960px) {
    line-height: 4rem;
    font-size: 3.5rem;
  }
}

.name span {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}


.title {
  line-height: 1.5rem;
  font-size: 1rem;

  @media (min-width: 640px) {
    line-height: 2.5rem;
    font-size: 2rem;
  }

  @media (min-width: 960px) {
    line-height: 3rem;
    font-size: 2.5rem;
  }
}

.tagline {
  white-space: pre-wrap;
  color: var(--vp-c-text-2);
}
</style>