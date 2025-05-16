export default function WhyChooseUs() {
  const features = [
    { icon: '⚡', title: 'Fast Payouts', desc: 'Receive money in 24 hours.' },
    { icon: '🔒', title: 'Secure Deals', desc: 'Encrypted and safe transactions.' },
    { icon: '📞', title: '24/7 Support', desc: 'We’re always here for you.' },
    { icon: '📈', title: 'High Valuation', desc: 'Get the best price possible.' },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Why Choose Us</h2>
        <div className="row">
          {features.map((feature, i) => (
            <div className="col-md-6 mb-4" key={i}>
              <div className="card">
                <div className="card-body d-flex align-items-start">
                  <div className="display-5 me-3">{feature.icon}</div>
                  <div>
                    <h5>{feature.title}</h5>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
