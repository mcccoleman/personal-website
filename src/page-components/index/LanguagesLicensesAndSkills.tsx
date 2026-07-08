import {
  languagesAndTechnologies,
  licensesAndSkills,
  constructList,
} from "./utils";
import styles from "./index.module.css";

export const LanguagesLicensesAndSkills = () => (
  <div className={styles.skills}>
    <div className={styles.skillGroup}>
      {constructList(languagesAndTechnologies)}
    </div>
    <div className={styles.skillGroup}>
      {constructList(licensesAndSkills)}
    </div>
  </div>
);
