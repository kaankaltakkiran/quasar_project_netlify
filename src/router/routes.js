const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "prodcuts", component: () => import("pages/ProductPage.vue") },
      { path: "contact", component: () => import("pages/ContactPage.vue") },
      { path: "deneme", component: () => import("pages/DenemePage.vue") },
      { path: "persons", component: () => import("pages/PersonPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
