<template>
  <footer class="bg-custom-gradient1 text-white py-12 px-4 sm:px-8 lg:px-20">
    <div
      class="flex flex-col relative lg:flex-row justify-between items-center gap-12"
    >
      <!-- Logo -->
      <div class="flex w-full lg:w-[323px] justify-center items-center">
        <img src="../public/images/23.png" alt="Logo" class="h-36 w-[91px]" />
      </div>

      <!-- Middle (Two Columns) -->
      <div
        class="flex flex-row gap-24 lg:gap-12 lg:mx-auto relative lg:end-28 pr-2 items-start w-[auto]"
      >
        <!-- Column 1 -->
        <div class="flex flex-col gap-4 w-full lg:w-[200px]">
          <nuxt-link
            v-for="(link, index) in navLinks"
            :key="index"
            :to="localePath(link.path)"
            class="text-white hover:text-blue-400 text-base font-bodyFont"
          >
            {{ $t(link.label) }}
          </nuxt-link>
        </div>

        <!-- Column 2 -->
        <div class="flex flex-col gap-4 w-full lg:w-[200px]">
          <nuxt-link
            to="/government"
            class="text-white hover:text-blue-400 text-base font-bodyFont"
          >
            {{ $t("privacyPolicy") }}
          </nuxt-link>
          <nuxt-link
            to="/government"
            class="text-white hover:text-blue-400 text-base font-bodyFont"
          >
            {{ $t("termsOfService") }}
          </nuxt-link>
          <nuxt-link
            to="/government"
            class="text-white hover:text-blue-400 text-base font-bodyFont"
          >
            {{ $t("careers") }}
          </nuxt-link>
          <nuxt-link
            to="/government"
            class="text-white hover:text-blue-400 text-base font-bodyFont"
          >
            {{ $t("support") }}
          </nuxt-link>
        </div>
      </div>

      <!-- Right -->
      <div
        class="flex lg:absolute lg:end-0 flex-col lg:flex-row h-full pl-2 items-end gap-2 mt-8 lg:mt-0"
      >
        <div class="flex flex-col items-start justify-center h-12">
          <h3 class="text-sm">{{ $t("appDownload") }}</h3>
          <h4 class="text-xs">{{ $t("exclusiveDiscounts") }}</h4>
        </div>
        <div class="flex flex-col lg:flex-row gap-3">
          <img
            src="../public/images/mobil-app-banner-button-shape1.png.png"
            alt="Footer Image 1"
            class="h-12 w-36"
          />
        </div>
        <div class="flex flex-col lg:flex-row gap-3">
          <img
            src="../public/images/mobil-app-banner-button-shape2.png.png"
            alt="Footer Image 2"
            class="h-12 w-36"
          />
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center text-sm mt-8 border-t border-gray-300 pt-4">
      <p>{{ $t("copyrightText") }}</p>
    </div>
  </footer>
</template>

<script setup>
const navLinks = [
  { path: "/", label: "home" },
  { path: "/government", label: "governmentServices" },
  { path: "/marketing", label: "marketingServices" },
  { path: "/learning", label: "educationalServices" },
  { path: "/public", label: "generalServices" },
  { path: "/about-us", label: "aboutUs" },
  { path: "/call-us", label: "contactUs" },
];
</script>
