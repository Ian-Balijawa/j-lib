import "@/css/home.css";

import { Searchbar } from "@/components/Searchbar";
import { CardDetails, CardDetailsContainer } from "@/components/DetailsCard";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <div style={{ lineHeight: "5px" }}>
        <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
          Let's Find your Dream Job
        </p>
        <p style={{ color: "#989798" }}>Sunday,23 April</p>
        <Searchbar />
      </div>
      <div className="section">
        <Sidebar />
        <CardDetailsContainer>
          {Array.from({ length: 15 }).map((card) => (
            <CardDetails />
          ))}
        </CardDetailsContainer>
      </div>
    </>
  );
}
