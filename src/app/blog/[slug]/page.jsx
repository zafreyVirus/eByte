import styles from "./singlePostPage.module.css";
import Image from "next/image";

function SinglePostPage({params}) {
  console.log(params)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
        className={styles.img}
        src="/about.png" alt="" fill/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
          className={styles.avatar}
          src="/noavatar.png" alt="" 
          width={50}
          height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Fraser Msusa</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>

        <div className={styles.content}>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, ipsam? Ratione impedit similique commodi et excepturi hic culpa suscipit quaerat voluptates, quae sunt ullam dolorum ea qui dolore sed repellat. 
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage
