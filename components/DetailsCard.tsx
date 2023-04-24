import s from "@/css/card-details.module.css";

import Image from "next/image";
import React, { FC } from "react";

interface CardProps {
  children: React.ReactNode;
}

export const CardDetailsContainer: FC<CardProps> = ({ children }) => {
  return <div className={s.card_container}>{children}</div>;
};

export const CardDetails = () => {
  return (
    <div className={s.card}>
      <div className={s.card_header}>
        <div className={s.flex}>
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
        <div className={s.icon}>
          <p className={s.p}>Save Job</p>
          <Image src={"/logo.png"} alt="company-logo" width={20} height={20} />
        </div>
      </div>
      <div className={s.card_body}>
        <p className={s.p_body}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis,
          veniam laudantium neque voluptates, iure non similique illum
          voluptatibus illo, nobis obcaecati. Nulla deleniti minima sapiente
          velit harum, reprehenderit molestiae obcaecati quisquam! Voluptas
          doloremque voluptate accusantium natus ex nihil consectetur, illo unde
          earum excepturi debitis, perspiciatis labore autem. Similique, ut
          voluptatibus.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Nobis eligendi placeat voluptates sapiente impedit. Distinctio
          perferendis facilis id dolorem vitae doloribus odio consequuntur
          laborum esse ipsum voluptatum magni quibusdam repudiandae facere eos
          animi reiciendis amet nam quas reprehenderit, numquam libero.
        </p>

        <div className={s.job_tags}>
          {Array.from({ length: 3 }).map((_, idx) => {
            return (
              <p key={idx.toString()} className={s.tag}>
                Full-Time
              </p>
            );
          })}
        </div>
      </div>
      <div className={s.card_footer}>
        <div className={s.flex}>
          <p className={s.initials}>TBD</p>
          <p className={s.type}>Full-Time</p>
        </div>
        <div className={s.flex}>
          <button className={s.btnSecondary}>View Details</button>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};
