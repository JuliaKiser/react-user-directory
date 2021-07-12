import styles from "./PageHeader.module.css";

const PageHeader = (props) => {
  return (
    <div className={styles.container}>
      <hr />
      <h1>{props.title}</h1>
    </div>
  );
};

export default PageHeader;