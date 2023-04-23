import "@/css/RecommendationsHeader.css";
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
      <div>
        <p>Latest Job Posts</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "40%",
        }}
      >
        <div className="see_all" />
        <div>
          <Button>Recommended For You</Button>
        </div>
        <div className="see_all">
          <p>See all</p>
        </div>
      </div>
    </div>
  );
};
