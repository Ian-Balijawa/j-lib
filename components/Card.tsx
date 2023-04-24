import s from "@/css/card.module.css";

import Image from "next/image";
import { Button } from "@/components/Button";
import React, { FC } from "react";

interface CardProps {
  children: React.ReactNode;
}

export const CardContainer: FC<CardProps> = ({ children }) => {
  return <div className={s.card_container}>{children}</div>;
};

export const Card = () => {
  return (
    <div className={s.card}>
      <div className={s.card_header}>
        <Image src={"/logo.png"} alt="company-logo" width={80} height={80} />
        <div>
          <p className={s.job_title}>Backend Developer</p>
          <div className={s.job_specifics}>
            {Array.from({ length: 5 }).map((_, idx) => {
              return <p key={idx.toString()}>FrontEnd</p>;
            })}
          </div>
        </div>
      </div>
      <div className={s.card_body}>
        <p className={s.p_body}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
          eligendi placeat voluptates sapiente impedit. Distinctio perferendis
          facilis id dolorem vitae doloribus odio consequuntur laborum esse
          ipsum voluptatum magni quibusdam repudiandae facere eos animi
          reiciendis amet nam quas reprehenderit, numquam libero.
        </p>

        <div className={s.job_tags}>
          {Array.from({ length: 3 }).map((_, idx) => {
            return (
              <div key={idx.toString()} className={s.tag}>
                <Image
                  className={s.img}
                  src="/logo.png"
                  alt="tag"
                  width={20}
                  height={20}
                />
                <p>Fulltime</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={s.card_footer}>
        <p>
          ${95}k - ${110}k
        </p>
        <Button>View Details</Button>
      </div>
    </div>
  );
};
