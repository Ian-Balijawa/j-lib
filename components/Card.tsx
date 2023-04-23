import "@/css/card.css";

import Image from "next/image";
import { Button } from "@/components/Button";
import React, { FC } from "react";

interface CardProps {
  children: React.ReactNode;
}

export const CardContainer: FC<CardProps> = ({ children }) => {
  return <div className="card_container">{children}</div>;
};

export const Card = () => {
  return (
    <div className="card">
      <div className="card_header">
        <Image src={"/logo.png"} alt="company-logo" width={80} height={80} />
        <div>
          <p className="job_title">Full Stack Engineer</p>
          <div className="job_specifics">
            {Array.from({ length: 5 }).map((el) => {
              return <p>FrontEnd</p>;
            })}
          </div>
        </div>
      </div>
      <div className="card_body">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
          eligendi placeat voluptates sapiente impedit. Distinctio perferendis
          facilis id dolorem vitae doloribus odio consequuntur laborum esse
          ipsum voluptatum magni quibusdam repudiandae facere eos animi
          reiciendis amet nam quas reprehenderit, numquam libero.
        </p>

        <div className="job_tags">
          {Array.from({ length: 3 }).map((tag) => {
            return (
              <div className="tag">
                <Image src="/logo.png" alt="tag" width={20} height={20} />
                <p>Fulltime</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="card_footer">
        <p>
          ${95}k - ${110}k
        </p>
        <Button>View Details</Button>
      </div>
    </div>
  );
};
