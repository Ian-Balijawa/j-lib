import s from "@/css/sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.alert}>
        <p className={s.p}>Create Job Alert</p>
        <p className={s.p}>
          Increase your opporunites to get chance for new jobs
        </p>
        <input className={s.input} placeholder="Type Your Email" />
        <button className={s.btn}>Create Job Alert</button>
      </div>
      <div className={s.check_container}>
        {Array.from({ length: 10 }).map((_, idx) => {
          return (
            <div key={idx.toString()} className={s.check}>
              <input
                className={s.input}
                type="checkbox"
                id="application-services"
              />
              <label htmlFor="application-services">Application Services</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
