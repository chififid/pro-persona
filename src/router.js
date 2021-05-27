import { createRouter, createWebHistory } from "vue-router";
import ChooseDirectory from "./components/chooseDirectory/ChooseDirectory";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/choose-directory",
      name: "chooseDirectory",
      component: ChooseDirectory,
    },
  ],
});

export default router;
