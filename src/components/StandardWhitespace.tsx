import React, {ReactNode} from "react";
import styles from "./standardWhitespace.module.scss";

interface StandardWhitespaceProps {
  className?: string;
  children: ReactNode;
}

const StandardWhitespace: React.FC<StandardWhitespaceProps> = ({className = "", children}) => {
  return (
    <div className={className}>
      <div className={styles.wrapper}>
        {children}
      </div>
    </div>
  );
};

export default StandardWhitespace;