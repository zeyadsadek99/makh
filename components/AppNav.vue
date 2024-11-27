<template>
  <div class="bg-custom-green relative flex flex-col gap-2">
    <!-- Switch Language -->
    <div class="flex end-36 py-4 z-10 w-24 h-6 px-16 absolute">
      <!-- Dropdown Button -->
      <div
        @click="toggleDropdown"
        class="flex gap-3 items-center text-white rounded-lg font-bodyFont cursor-pointer"
      >
        <!-- Icon -->
        <img src="../public/images/Icon (1).png" alt="" />
        <!-- Current Language -->
        <span class="text-[#7C7C7C]">
          {{ $i18n.locale === "ar" ? "عربي" : "English" }}
        </span>
        <!-- Dropdown Icon -->
        <font-awesome-icon
          icon="fa-solid fa-angle-down"
          style="color: #c8c8c8"
        />
      </div>

      <!-- Dropdown List -->
      <div
        v-if="dropdownOpen"
        class="absolute end-0 mt-2 bg-custom-white rounded-lg shadow-lg w-30 z-50"
      >
        <nuxt-link
          :to="switchLocalePath('en')"
          class="flex items-center px-4 py-2 text-sm text-black hover:bg-gray-100"
          @click="toggleDropdown"
        >
          English
        </nuxt-link>
        <nuxt-link
          :to="switchLocalePath('ar')"
          class="flex items-center px-4 py-2 text-sm text-black hover:bg-gray-100"
          @click="toggleDropdown"
        >
          عربي
        </nuxt-link>
      </div>
    </div>
    <!-- Navbar -->
    <nav
      class="flex items-end relative justify-between mt-7 px-4 lg:px-20 py-2 bg-custom-green border-b border-custom-gray"
    >
      <div class="flex gap-6 items-end">
        <!-- Logo -->
        <div class="flex gap-4">
          <img
            src="/images/Vector.png"
            alt="Logo"
            class="h-16 w-8 lg:h-20 lg:w-12"
          />
        </div>

        <!-- (small screen) -->
        <button
          class="absolute top-8 lg:hidden text-custom-gray hover:text-blue-300 text-4xl end-4"
          @click="toggleMobileMenu"
        >
          ☰
        </button>

        <!-- Links -->
        <div
          :class="[
            mobileMenuOpen ? 'flex absolute top-20 end-1 ' : 'hidden   ',
            'lg:flex lg:gap-6 items-end lg:items-center lg:px-0   flex-col  lg:flex-row',
          ]"
        >
          <nuxt-link
            v-for="(link, index) in navLinks"
            :key="index"
            :to="localePath(link.path)"
            :class="[
              ' hover:text-blue-400 font-bodyFont text-base py-2 lg:py-0',
              $route.path === localePath(link.path)
                ? 'text-[#272526] font-bold'
                : 'text-[#6B6D70] font-normal',
            ]"
          >
            {{ $t(link.label) }}
          </nuxt-link>
        </div>
      </div>

      <!-- Buttons  -->
      <div class="hidden lg:flex items-end gap-5">
        <div
          class="py-2 px-0.5"
          :class="{
            'left-[70px]': $i18n.locale === 'ar',
            'right-[22px]': $i18n.locale === 'en',
          }"
        >
          <img
            src="/public/images/search-normal.png"
            class="w-5 h-5"
            :class="{
              'left-8': $i18n.locale === 'ar',
              'right-4': $i18n.locale === 'en',
            }"
          />
        </div>
        <button
          @click="login"
          class="bg-custom-gradient text-[#FAFAFA] px-9 py-5 rounded-[31px] hover:bg-gray-300 font-bodyFont text-base leading-[17.86px] font-bold"
        >
          {{ $t("login") }}
        </button>
      </div>
    </nav>

    <!-- Section  -->
    <div class="bg-custom-green px-20 sm:px-8 lg:px-20">
      <section
        class="flex relative flex-col-reverse lg:flex-row items-center justify-center gap-8 py-12"
      >
        <div
          class="w-[full] lg:w-[667px] max-lg:items-center flex flex-col gap-10 lg:pl-8 max-lg:text-center"
        >
          <!-- Title -->
          <h1
            class="text-3xl sm:text-4xl lg:text-5xl lg:leading-[64px] font-bold text-black"
          >
            {{ $t("heroTitle") }}
          </h1>
          <!-- Paragraph -->
          <p
            class="text-[#6B6D70] text-base sm:text-xl lg:text-3xl lg:leading-[46px] font-normal"
          >
            {{ $t("heroDescription") }}
          </p>
          <!-- Search -->
          <div
            class="relative w-[414px] h-16 flex items-center rounded-lg mx-auto lg:mx-0"
          >
            <input
              type="text"
              :placeholder="$t('searchPlaceholder')"
              class="w-full h-full border border-gray-300 px-4 pl-12 py-2 rounded-2xl focus:outline-none focus:ring-2 text-base focus:ring-blue-400"
            />
            <div class="relative end-20 w-28 h-11">
              <!-- Search bar -->
              <div
                class="absolute z-10 start-0 top-1/2 transform -translate-y-1/2"
              >
                <img src="/public/images/12.png" class="w-4 h-4" />
              </div>
              <!-- Button -->
              <button
                class="absolute top-1/2 transform -translate-y-1/2 bg-custom-gradientt text-white py-1 rounded-lg hover:bg-blue-600 w-20 text-end px-3 end-5"
              >
                {{ $t("searchButton") }}
              </button>
            </div>
          </div>
        </div>

        <!-- Image Section -->
        <div class="w-full lg:w-1/2 flex justify-center align-bottom items-end">
          <img
            src="../public/images/image 2.png"
            alt="Big Visual"
            class="w-full max-w-md lg:max-w-lg h-auto rounded-lg"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const dropdownOpen = ref(false);

// Toggle dropdown visibility
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

// Change locale and close dropdown

const { locale, t } = useI18n();
const currentLocale = locale.value;

const navLinks = [
  { path: "/", label: "home" },
  { path: "/government", label: "governmentServices" },
  { path: "/marketing", label: "marketingServices" },
  { path: "/learning", label: "educationalServices" },
  { path: "/public", label: "generalServices" },
  { path: "/about-us", label: "aboutUs" },
  { path: "/call-us", label: "contactUs" },
];

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>
