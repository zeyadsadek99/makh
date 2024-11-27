<template>
  <!-- lg:p-40 -->
  <section class="p-2 sm:p-6 flex items-center justify-center text-center">
    <div
      class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-[68px] items-center max-lg:w-full"
    >
      <!-- Top Left Div -->
      <div
        class="flex flex-col items-center justify-center w-full lg:w-[450px] h-[350px] bg-[#ECF2F3] rounded-[24px] mx-auto"
      >
        <img
          src="../public/images/fi_4693410.png"
          alt="Image 1"
          class="w-24 h-24 sm:w-28 sm:h-28 object-cover mb-4"
        />
        <p
          class="text-center text-[28px] sm:text-[32px] font-semibold leading-[35.71px] tracking-[0.1px]"
        >
          {{ $t("governmentServices") }}
        </p>
      </div>

      <!-- Top Right Div -->
      <div
        class="flex flex-col items-center justify-center w-full lg:w-[450px] h-[350px] bg-[#ECF2F3] rounded-[24px] mx-auto"
      >
        <img
          src="../public/images/fi_3976631.png"
          alt="Image 2"
          class="w-24 h-24 sm:w-28 sm:h-28 object-cover mb-4"
        />
        <p
          class="text-center text-[28px] sm:text-[32px] font-semibold leading-[35.71px] tracking-[0.1px]"
        >
          {{ $t("educationalServices") }}
        </p>
      </div>

      <!-- Bottom Left Div -->
      <div
        class="flex flex-col items-center justify-center w-full lg:w-[450px] h-[350px] bg-[#ECF2F3] rounded-[24px] mx-auto"
      >
        <img
          src="../public/images/fi_5639609.png"
          alt="Image 3"
          class="w-24 h-24 sm:w-28 sm:h-28 object-cover mb-4"
        />
        <p
          class="text-center text-[28px] sm:text-[32px] font-semibold leading-[35.71px] tracking-[0.1px]"
        >
          {{ $t("generalServices") }}
        </p>
      </div>

      <!-- Bottom Right Div -->
      <div
        class="flex flex-col items-center justify-center w-full lg:w-[450px] h-[350px] bg-[#ECF2F3] rounded-[24px] mx-auto"
      >
        <img
          src="../public/images/fi_4187272.png"
          alt="Image 4"
          class="w-24 h-24 sm:w-28 sm:h-28 object-cover mb-4"
        />
        <p
          class="text-center text-[28px] sm:text-[32px] font-semibold leading-[35.71px] tracking-[0.1px]"
        >
          {{ $t("marketingServices") }}
        </p>
      </div>
    </div>
  </section>
</template>
