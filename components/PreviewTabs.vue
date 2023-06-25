<template>
  <div class="tabs">
    <div class="tab">
      <input type="radio" id="tab-1" checked name="tab-group">
      <label for="tab-1">Main</label>
      <div class="content">
        <p>Browsing the main page's, while choosing some prints, then we navigate
          to Poem & Poet page. And now, we've some prints ready to customize for
          our order.</p>
        <video controls preload="metadata" playsinline
          poster="../public/adeeb_overview/poster.png">
          <source src="../public/adeeb_overview/main.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="tab">
      <input type="radio" id="tab-2" name="tab-group">
      <label for="tab-2">Guest</label>
      <div class="content">
        <p>As a normal Guest/Customer, we start customizing our selected prints'
          colors and font, and checking some
          random pieces.</p>
        <p>After that we enter our information to submit the order, and follow the
          process on history page.
        </p>
        <video controls preload="metadata" playsinline
          poster="../public/adeeb_overview/poster.png">
          <source src="../public/adeeb_overview/guest.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="tab">
      <input type="radio" id="tab-3" name="tab-group">
      <label for="tab-3">Partner</label>
      <div class="content">
        <p>Give partners & special customers to sign up, to review their past
          orders, and make bulk orders fast and easy. </p>
        <video controls preload="metadata" playsinline
          poster="../public/adeeb_overview/poster.png">
          <source src="../public/adeeb_overview/partner.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  position: relative;
  min-height: 45rem;
  clear: both;
  margin-bottom: 1rem;
}

video {
  max-width: 65rem;
  width: 100%;
  height: 100%;
}

.tab {
  float: left;
}

.tab label {
  border-color: var(--vp-c-white);
  color: var(--vp-c-white);
  background-color: #161618;
  padding: 10px;
  margin-left: -1px;
  position: relative;
  left: 1px;
}

.tab [type="radio"] {
  opacity: 0;
}

.content {
  position: absolute;
  top: 1.5rem;
  left: 0;
  border-color: var(--vp-c-white);
  color: var(--vp-c-white);
  background: #161618;
  right: 0;
  bottom: 0;
  padding: 0 1rem;
  overflow: hidden;
}

.content>* {
  opacity: 0;
  transform: translateX(-100%);
  transition: all 0.5s ease;
}

[type="radio"]:focus~label {
  outline: 2px solid blue;
}

[type="radio"]:checked~label {
  border-color: var(--vp-c-white);
  outline: none;
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
  z-index: 2;
}

[type="radio"]:checked~label~.content {
  z-index: 1;
}

[type="radio"]:checked~label~.content>* {
  opacity: 1;
  transform: translateX(0);
}
</style>