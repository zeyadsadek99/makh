<template>
  <div class="px-4 sm:px-8 lg:px-24">
    <!-- Contact Section -->
    <section
      class="flex flex-col lg:flex-row items-center justify-between gap-8 py-10 sm:py-16 lg:py-20 relative"
    >
      <!-- Right -->
      <div
        class="w-[690px] flex flex-col items-center lg:items-start gap-6 rounded-3xl border bg-[#F5F4F4] p-6 lg:p-8"
      >
        <!-- First Paragraph -->
        <div
          class="max-w-[150px] text-center rounded-[20px] p-2 border border-[#04142424]"
        >
          <h2 class="sm:text-md font-bold text-[#6B6D70]">
            {{ $t("contactTitle") }}
          </h2>
        </div>

        <!-- Second Paragraph -->
        <div class="max-w-[487px] max-lg:text-center">
          <p class="text-custom-black text-[42px] leading-[1.4] font-bold">
            {{ $t("contactDescription") }}
          </p>
        </div>

        <!-- Form -->
        <Form
          :validation-schema="validationSchema"
          @submit="submitForm"
          class="flex flex-col gap-5 w-full"
        >
          <!-- Name and Mobile Number -->
          <div class="flex flex-col lg:flex-row gap-4">
            <div>
              <Field
                id="name"
                name="name"
                type="text"
                class="lg:w-[300px] w-full h-12 px-4 border border-gray-300 rounded-[28px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                :placeholder="$t('namePlaceholder')"
              />
              <ErrorMessage
                name="name"
                class="text-red-500 relative start-2 text-sm"
              />
            </div>
            <div>
              <Field
                id="mobile"
                name="mobile"
                type="text"
                class="lg:w-[300px] w-full h-12 px-4 border border-gray-300 rounded-[28px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                :placeholder="$t('mobilePlaceholder')"
              />
              <ErrorMessage
                name="mobile"
                class="text-red-500 relative start-2 text-sm"
              />
            </div>
          </div>

          <!-- Message -->
          <div>
            <Field
              id="message"
              name="message"
              as="textarea"
              class="lg:w-[615px] w-full h-[206px] p-3 border border-gray-300 rounded-[28px] focus:outline-none focus:ring-2 focus:ring-blue-400"
              :placeholder="$t('messagePlaceholder')"
            />
            <ErrorMessage
              name="message"
              class="text-red-500 relative start-2 text-sm"
            />
          </div>

          <!-- Send Button and WhatsApp -->
          <div
            class="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <!-- Submit Button -->
            <button
              type="submit"
              class="w-[183px] bg-custom-gradient text-white px-4 py-2 h-14 font-bold rounded-[31px] hover:from-blue-700"
            >
              {{ $t("send") }}
            </button>

            <!-- WhatsApp Section -->
            <div class="flex items-center gap-2">
              <a href="https://wa.me/+201098055402" target="_blank">
                <nuxt-icon name="Vector1" filled />
              </a>
              <a
                href="https://wa.me/+201098055402"
                target="_blank"
                class="text-sm text-blue-500"
              >
                2521 555 221 <span> +966 </span>
              </a>
            </div>
          </div>
        </Form>
      </div>

      <!-- Left -->
      <div
        class="lg:relative lg:end-0 lg:top-20 lg:w-[450px] h-auto text-center"
      >
        <img
          src="../public/images/Frame 1171277826.png"
          alt="Contact Us"
          class="w-full max-w-full lg:max-w-[450px] rounded-lg mx-auto"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  defineRule,
  Form,
  Field,
  ErrorMessage,
  useForm,
  configure,
} from "vee-validate";
import { required, email, min } from "@vee-validate/rules";
import { ref } from "vue";
import * as yup from "yup";
import { useI18n } from "vue-i18n";

// Define validation rules
defineRule("required", required);
defineRule("min", min);
defineRule("email", email);

const { t } = useI18n();

// Configure VeeValidate to use localized messages
configure({
  generateMessage: (ctx) => t(ctx.rule.name, { field: ctx.field }),
});

// Validation Schema
const validationSchema = yup.object({
  name: yup.string().required(t("required", { field: t("name") })),
  mobile: yup
    .string()
    .matches(/^[0-9]{7,15}$/, "Mobile number must be 7-15 digits")

    .required(t("required", { field: t("mobile") })),
  message: yup.string().required(t("required", { field: t("message") })),
});

// Form Model
const form = ref({
  name: "",
  mobile: "",
  message: "",
});

// Submit Function
const submitForm = (values, { resetForm }) => {
  console.log("Form submitted with:", values);
  // Clear form after submission
  Object.keys(form.value).forEach((key) => {
    form.value[key] = "";
  });
  resetForm();
};
</script>
