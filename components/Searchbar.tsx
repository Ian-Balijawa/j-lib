import s from "@/css/search.module.css";
import { Button } from "./Button";

export const Searchbar = () => {
  return (
    <div className={s.container}>
      <input
        className={s.input}
        placeholder="Search Job, Company or keywords"
      />
      <input className={s.input} placeholder="Select Location" />
      <input className={s.input} placeholder="Employment Type" />
      <div>
        <Button>Search</Button>
      </div>
    </div>
  );
};
