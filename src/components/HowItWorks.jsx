export default function HowItWorks() {
  const steps = [
    { title: 'Upload License', icon: '📤' },
    { title: 'Get Valuation', icon: '💰' },
    { title: 'Get Paid', icon: '🏦' },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4">How It Works</h2>
        <div className="row">
          {steps.map((step, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <div className="display-4">{step.icon}</div>
                  <h5 className="card-title mt-3">{step.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
