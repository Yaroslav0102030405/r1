import { useState, useEffect } from "react";

import type { Route } from "./+types/home";
import  Welcome  from "../welcome/welcome";
import Menu from "~/components/painting/menu/menu";
import Logo from "~/components/logo/logo";
import Layout from "~/components/layout/layout";
import Footer from "~/components/footer/footer";
import UserList from "~/components/userlist/userList";
import Button from "~/components/button/Button";
import Dropdown from "~/components/dropdown/dropdown";
import Greeting from "~/components/greeting/greeting";
import Form from "~/components/form/form";
import ColorPicker from "~/components/coloroPicker/colorPicker";
import Modal from "~/components/modal/modal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

type ColorOption = {
  label: string;
  color: string;
};

const colors: ColorOption[] = [
  { label: "red", color: "#DE3163" },
  { label: "reddsd", color: "#CCCCFF" },
  { label: "reddsds", color: "#9FE2BF" },
];

  type Theme = "light" | "dark"

export default function Home() {
  const [click, setClick] = useState<number>(0)
  const message: string[] = ["Повідомлення 1", "Повідомлення 2"]
 const [theme, setTheme] = useState<Theme>("light")

 const toggleTheme = () => {
  setTheme(prevTheme => prevTheme === "light" ? "dark": "light")
 }

 const [modal, setModal] = useState<boolean>(false)

  const toggleModal = () => {
    setModal(prev => !prev)
  }

  return <>
  <main className={theme}>
  <header>
    <button onClick={toggleModal}  type="button">Відкрити модалку</button>
   {modal &&  <Modal onClose={toggleModal}>
    <button onClick={toggleModal}  type="button">Відкрити модалку</button>
    </Modal>}
    <ColorPicker options={colors} />
         <button onClick={toggleTheme}>Toggle Click</button>
    <nav>
      <Form />
      <Logo click={click} setClick={setClick} />
      <Dropdown />
      {/* <Greeting isLoader={true} /> */}
      <Greeting message={message} />
      <Menu/>
    </nav>
    </header>
    <Layout title="новини">
<Welcome click={click} setClick={setClick}  />
<Button text="Кнопка" />
<Button text="Кнопка два" />
</Layout>
    <Footer />
    <UserList />
    </main>
   </>;
}
