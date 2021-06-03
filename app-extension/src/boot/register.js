import { boot } from "quasar/wrappers";
import VuePlugin from "quasar-ui-plugin.auth/src/index.js";

export default boot(({ app, router }) => {
  app.use(VuePlugin);

  let { routes } = router.options;
  let routeData = routes.find((r) => r.path === "/");

  const currentRoutes = routeData.children.map((route) => route.path);

  const newRoutes = [
    {
      path: "/login",
      component: () => import("quasar-ui-plugin.auth/src/components/Auth"),
    },
  ];

  routeData.children = [];
  for (let route of newRoutes) {
    if (!currentRoutes.includes(route.path)) {
      routeData.children.push(route);
    }
  }
  console.log("madalo ato routeData", routeData);
  router.addRoute(routeData);
});
