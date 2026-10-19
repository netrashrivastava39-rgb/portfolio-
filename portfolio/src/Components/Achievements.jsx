function Achievements() {

  const achievements = [
    "100+ LeetCode Problems",
    "JEE Advanced Qualified",
    "JEE Main — 96.7 Percentile",
    "Technical Lead — Navrang 2026",
    "Member — Vikramaditya Vividh Kala Manch"
  ];


  return (
    <section className="section" id="achievements">

      <h2 className="section-title">
        Achievements
      </h2>

      <div className="achievement-list">

        {achievements.map((achievement) => (

          <div
            className="achievement-card"
            key={achievement}
          >
            {achievement}
          </div>

        ))}

      </div>

    </section>
  );
}

export default Achievements;