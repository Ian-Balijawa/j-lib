import s from "@/css/recommendationsHeader.module.css";
import { Button } from "./Button";

export const RecommendationsHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p className={s.p}>Latest Job Posts</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "40%",
        }}
      >
        <div className={s.see_al} />
        <div>
          <Button>Recommended For You</Button>
        </div>
        <div className={s.see_all}>
          <p>See all</p>
        </div>
      </div>
    </div>
  );
};
