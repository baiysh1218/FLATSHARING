import styles from "./ui/index.module.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <div className={styles.logo}>
          <span>flat</span>
          <span>Sharing</span>
        </div>
        <div className={styles.links}>
          <ul>
            <li>How it works</li>
            <li>Brose aprtments</li>
            <li>Cort</li>
          </ul>
        </div>
        <div className={styles.auth_buttons}>
          <button>Sign In</button>
          <button>Join Now</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
