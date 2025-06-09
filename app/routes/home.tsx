import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Menu from "~/components/painting/menu/menu";
import Logo from "~/components/logo/logo";
import Layout from "~/components/layout/layout";
import Footer from "~/components/footer/footer";
import UserList from "~/components/userlist/userList";
import Button from "~/components/button/Button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}



export default function Home() {
  return <>
  <header>
    <nav>
      <Logo />
      <Menu/>
    </nav>
    </header>
    <Layout title="новини">
<Welcome />
<Button text="Кнопка" />
<Button text="Кнопка два" />
</Layout>
    <Footer />
    <UserList />
   </>;
}
