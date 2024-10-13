import * as React from "react";
import styles from "./App.scss";
import { Input } from "vite-component-library-template";

export interface AppProperties {
  message: string;
  name: string;
}

const App: React.FunctionComponent<AppProperties> = ({ message, name }) => {
  return (
    <div className={styles.container}>
      <Input />
    </div>
  );
};

export default App;
