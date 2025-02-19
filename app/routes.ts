import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about","routes/about.tsx"),
    ...prefix("countries", [ // prefix  allows to nest routes
        index("routes/countries.tsx"),
        route(":countryName", "routes/country.tsx"),
])

] satisfies RouteConfig;
