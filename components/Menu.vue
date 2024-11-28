<template>
  <Menu>
    <MenuButton>Options</MenuButton>
    <MenuItems>
      <!-- Use the `active` state to conditionally style the active item. -->
      <MenuItem
        v-for="link in links"
        :key="link.path"
        as="template"
        v-slot="{ active }"
      >
        <a
          :href="link.path"
          :class="{
            'bg-blue-500 text-white': active,
            'bg-white text-black': !active,
          }"
        >
          {{ link.label }}
        </a>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const links = [
  { path: "/", label: "home" },
  { path: "/government", label: "governmentServices" },
  { path: "/marketing", label: "marketingServices" },
  { path: "/learning", label: "educationalServices" },
  { path: "/public", label: "generalServices" },
  { path: "/about-us", label: "aboutUs" },
  { path: "/call-us", label: "contactUs" },
];
</script>
