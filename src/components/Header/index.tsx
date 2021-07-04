import format from "date-fns/format";
import ptBr from 'date-fns/locale/pt-BR';
import styles from "./styles.module.scss";


export default function Header() {
   const currentData = format(new Date, "EEEEEE, d MMMM", {
      locale: ptBr
   })
   return (
      <header className={styles.headerContainer}>
         <img src="/logo.svg" alt="Podcaster" />

         <p>O melhor para você ouvir</p>

         <span>{currentData}</span>
      </header>
   );
}