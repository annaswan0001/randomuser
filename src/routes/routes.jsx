import React from "react";

const Events = React.lazy(() => {
  return import("../views/Events/Events");
});
const News = React.lazy(() => {
  return import("../views/News/News");
});
const Chat = React.lazy(() => {
  return import("../views/Chat/Chat.jsx");
});
const Meetings = React.lazy(() => {
  return import("../views/Meetings/Mettings");
});
const Users = React.lazy(() => {
  return import("../views/Users/Users");
});
const Home = React.lazy(() => {
  return import("../views/Home/Home");
});

//imagine that our chat is a big project and use React.Lazy for code spliting

const routes = [
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/chat",
    component: Chat,
  },
  {
    path: "/meetings",
    component: Meetings,
  },
  {
    path: "/events",
    component: Events,
  },
  {
    path: "/",
    component: Home,
  },
];

export default routes;
