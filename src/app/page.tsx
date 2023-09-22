import styles from "./page.module.css";
import WithApollo from "./components/WithApollo";
import BookList from "./components/BookList";

export default function Home() {
  return (
    <main className={styles.main}>
      <WithApollo>
        <BookList />
      </WithApollo>
    </main>
  );
}
