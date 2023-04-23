import "@/css/home.css";

import { Card, CardContainer } from "@/components/Card";
import { RecommendationsHeader } from "@/components/RecommendationsHeader";

export default function Home() {
  return (
    <>
      <div style={{ lineHeight: "5px" }}>
        <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
          Welcome to the Job Search Platform for the Experts
        </p>
        <p style={{ color: "#989798" }}>Sunday,23 April</p>
        <RecommendationsHeader />
      </div>
      <CardContainer>
        {Array.from({ length: 15 }).map((card) => (
          <Card />
        ))}
      </CardContainer>
    </>
  );
}
