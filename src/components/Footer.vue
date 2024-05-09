<template>
  <q-footer class="q-pa-md q-gutter-sm" elevated>
    <div class="row justify-center items-center">
      <div class="text-center">
        <p>Hakkımızda</p>
        <p>Tüm haklar Saklıdır Kaan Kaltakkıran @ 2024</p>
      </div>
      <div class="text-center">
        <p class="q-mx-lg">Sosyal Medya</p>
        <div class="social-links q-mx-lg">
          <a
            href="https://github.com/kaankaltakkiran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/bubbles/50/github.png"
              alt="github"
            />
          </a>
          <a
            href="https://www.facebook.com/?locale=tr_TR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/bubbles/50/facebook-new.png"
              alt="facebook-new"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/bubbles/50/instagram-new--v2.png"
              alt="instagram-new--v2"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/twitterx--v1.png"
              alt="twitterx--v1"
            />
          </a>
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script setup>
defineOptions({
  name: "AppFooter",
});
</script>

<style scoped>
/* Stil düzenlemelerini burada yapabilirsiniz */

.social-links a {
  color: #fff;
  margin-right: 10px;
}

.q-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1000; /* Eğer diğer elementler footer'ın üzerinde ise z-index değeri ayarlanabilir */
}
</style>
