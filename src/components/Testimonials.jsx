export default function Testimonials() {
  const testimonials = [
    { name: 'Amit Shah', role: 'CTO, TechNova', message: 'SoftSell made license resale effortless!' },
    { name: 'Sara Lee', role: 'Manager, CodeWave', message: 'Quick payments and amazing support.' },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Testimonials</h2>
        <div className="row">
          {testimonials.map((t, i) => (
            <div className="col-md-6" key={i}>
              <blockquote className="blockquote">
                <p>"{t.message}"</p>
                <footer className="blockquote-footer mt-2">{t.name} <cite>{t.role}</cite></footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
