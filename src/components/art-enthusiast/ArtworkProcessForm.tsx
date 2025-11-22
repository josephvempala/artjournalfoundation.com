"use client";
import TurnstileWidget from "@/components/Turnstile";
import IntlTelInput from "@/components/IntlTelInput";

const ArtworkProcessForm = () => {
  return (
    <div className="student-art-form">
      <form method="POST" action="/api/forms">
        <input type="hidden" name="formName" value="artwork-process" />
        <div className="row">
          <div className="col-xl-6">
            <div className="comment-form__input-box">
              <label>
                Name of the Artist <span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                name="artist_name"
                required
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="form-input-box">
              <label>
                Email ID <span className="req">*</span>
              </label>
              <input
                type="email"
                placeholder="Email address"
                name="email_id"
                required
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="form-input-box">
              <label>
                Phone Number <span className="req">*</span>
              </label>
              <IntlTelInput />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="form-input-box">
              <input
                type="checkbox"
                className="form-check-input"
                id="same-address"
                required
              />
              <label className="form-check-label" htmlFor="same-address">
                I hereby give my consent to the Art Journal Foundation to
                publish
              </label>
              <label className="form-check-label" htmlFor="same-address">
                my work on their Website/Social media accounts.
              </label>
            </div>
          </div>
        </div>
        <TurnstileWidget />
        <div className="row">
          <div className="col-xl-12">
            <div className="form-input-box">
              <button type="submit" className="thm-btn form-input-box-btn">
                Submit <i className="fa fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ArtworkProcessForm;
