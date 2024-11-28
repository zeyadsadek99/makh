<template>
  <section class="p-4 sm:p-6 lg:p-8 flex justify-center px-36 bg-custom-green">
    <div
      class="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 w-full max-w-[1200px]"
    >
      <!-- Text and Buttons -->
      <div class="flex flex-col gap-4 w-full lg:w-1/2 max-lg:text-center">
        <!-- Title -->
        <div class="mb-4">
          <h1
            class="text-lg mb-6 sm:text-6xl leading-[50px] text-[#041424] font-bold"
          >
            {{ $t("downloadAppNow") }}
          </h1>
          <h2 class="text-base leading-10 sm:text-[42px] text-custom-black">
            {{ $t("enjoyFastAndEasyExperience") }}
          </h2>
        </div>

        <!-- Description -->
        <div class="mb-8 max-lg:justify-center tracking-wide relative start-3">
          <div class="flex gap-2 items-center max-lg:justify-center">
            <nuxt-icon name="Symbol" filled />

            <p
              class="text-sm sm:text-[18px] leading-7 text-custom-black font-medium font-customFont"
            >
              {{ $t("getReliablePerformance") }}
            </p>
          </div>
          <div class="flex gap-2 items-center max-lg:justify-center">
            <nuxt-icon name="Symbol" filled />

            <!-- <font-awesome-icon
              icon="fa-solid fa-check"
              style="color: #0c5adb"
            /> -->

            <p
              class="text-sm sm:text-[18px] leading-7 text-custom-black font-medium font-customFont"
            >
              {{ $t("customDesign") }}
            </p>
          </div>
        </div>

        <!-- Download    -->
        <div
          class="flex flex-col sm:flex-row justify-center lg:justify-start gap-6"
        >
          <img
            src="../public/images/mobil-app-banner-button-shape1.png.png"
            alt="Button 1"
            class="w-[150px] sm:w-[186px] h-[40px] sm:h-[52px] rounded-lg"
          />
          <img
            src="../public/images/mobil-app-banner-button-shape2.png.png"
            alt="Button 2"
            class="w-[150px] sm:w-[186px] h-[40px] sm:h-[52px] rounded-lg"
          />
        </div>
      </div>

      <!-- Phone Image -->
      <div class="relative mx-auto w-[600px] h-[660.78px]">
        <NuxtImg
          src="../public/images/iphone-12-mini--blue@2x.png"
          alt="App Display"
          class="absolute top-[78.13px] w-[520px] h-[660.78px] rounded-lg"
          :class="{
            'rotate-[25.78deg]': $i18n.locale !== 'ar',
          }"
        />
      </div>
    </div>
  </section>
</template>
