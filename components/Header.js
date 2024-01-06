import Link from "next/link";
import styles from "@/components/Header.module.css";
import Container from "@/components/Container.js";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link className={styles.logo} href="/">
          AshtonMall
        </Link>
        <Link className={styles.setting} href="/setting">
          설정
        </Link>
      </Container>
    </header>
  );
}
