import { ExternalLink } from "@/components/external-link";
import { LanguagesLicensesAndSkills } from "./LanguagesLicensesAndSkills";
import styles from "./index.module.css";

export const PageContent = () => (
  <>
    <div className={styles.intro}>
      <h1>Michael Coleman</h1>
      <p className={styles.tagline}>Full Stack Engineer · MBA · CFP</p>
      <p className={styles.bio}>
        I&apos;m a Full Stack Engineer, MBA, and Certified Financial Planner
        based in Portland, ME. I&apos;ve built software at{" "}
        <ExternalLink destination="https://www.betterment.com">
          Betterment
        </ExternalLink>
        ,{" "}
        <ExternalLink destination="https://www.ml.com">
          Merrill Lynch
        </ExternalLink>
        , and{" "}
        <ExternalLink destination="https://www.equitymultiple.com">
          EquityMultiple
        </ExternalLink>
        , and received my MBA from Rice University.
      </p>
    </div>
    <LanguagesLicensesAndSkills />
  </>
);
