import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/pages/HomePage.vue";
import AboutPage from "./components/pages/AboutPage.vue";
import TechPage from "./components/pages/TechPage.vue";
import ProjectsPage from "./components/pages/ProjectsPage.vue";
import CommentsPage from "./components/pages/CommentsPage.vue";
import ContactPage from "./components/pages/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage, alias: "/home" },
    { path: "/about", component: AboutPage },
    { path: "/tech", component: TechPage },
    { path: "/projects", component: ProjectsPage },
    { path: "/comments", component: CommentsPage },
    { path: "/contact", component: ContactPage },
    { path: "/:notFound(.*)", redirect: "/" },
  ],
});

export default router;
