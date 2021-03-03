import Head from "next/head";
import styles from "../styles/Dashboard.module.css";
import PetCardLost from "../components/lost/PetCardLost";
import Navbar from "../components/navbar/Navbar";

export default function perdidos() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Perdidos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Navbar />
        {/* <h1 className={styles.want__adopt__title}>
          Estoy Perdido/a ¿Me Ayudas?
        </h1> */}
        <div className={styles.pet__cards__container}>
          <PetCardLost
            title={"Firulais_1"}
            sex={"Macho"}
            age={"15 años"}
            castrated={"SI"}
            address={"x-x-x-x, Uruguay"}
            thumbnail={
              "https://images.unsplash.com/photo-1599676691468-89cdd72b715b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=616&q=80"
            }
            whatsapp={"59899876765"}
            status={"Perdido"}
          />
          <PetCardLost
            title={"Gato"}
            sex={"Macho"}
            age={"5 años"}
            castrated={"NO"}
            address={"x-x-x-x, Uruguay"}
            thumbnail={
              "https://images.unsplash.com/photo-1612126258173-85375840a9ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"
            }
            whatsapp={"59899876765"}
            status={"Perdido"}
          />
          <PetCardLost
            title={"Gata"}
            sex={"Hembra"}
            age={"1 años"}
            castrated={"NO"}
            address={"x-x-x-x, Uruguay"}
            thumbnail={
              "https://images.unsplash.com/photo-1580784355694-0d5295dcc007?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }
            whatsapp={"59899876765"}
            status={"Perdido"}
          />
          <PetCardLost
            title={"Perra"}
            sex={"Hembra"}
            age={"2 años"}
            castrated={"SI"}
            address={"x-x-x-x, Uruguay"}
            thumbnail={
              "https://images.unsplash.com/photo-1507145569372-d69bae8bc9a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80"
            }
            whatsapp={"59899876765"}
            status={"Perdido"}
          />
        </div>
      </div>
    </div>
  );
}