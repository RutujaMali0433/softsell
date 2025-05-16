export default function ContactForm() {
  return (
    <section className="py-5" id="contact">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Email" required />
          </div>
          <div className="col-12">
            <input type="text" className="form-control" placeholder="Company" />
          </div>
          <div className="col-12">
            <select className="form-select">
              <option>License Type</option>
              <option>Windows</option>
              <option>Adobe</option>
              <option>Office 365</option>
            </select>
          </div>
          <div className="col-12">
            <textarea className="form-control" placeholder="Message" rows="4" required></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
