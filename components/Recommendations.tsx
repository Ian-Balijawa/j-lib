import "@/css/recommendations.css";
import Image from "next/image";

export const Recommendations = () => {
  return (
    <div className="rec_container">
      {Array.from({ length: 30 }).map((card) => (
        <Pill />
      ))}
    </div>
  );
};

const Pill = () => {
  return (
    <div className="bg">
      <Image src="/logo.png" alt="company-logo" width={30} height={50} />
      <div className="body">
        <div className="header">
          <p>Mobile...</p>
          <p>$135k - $145k</p>
        </div>
        <div className="footer">
          <p>GETTR, US</p>
          <p>Fulltime</p>
        </div>
      </div>
    </div>
  );
};
