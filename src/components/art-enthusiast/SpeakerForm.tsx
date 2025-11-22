"use client";
import IntlTelInput from "@/components/IntlTelInput";
import TurnstileWidget from "@/components/Turnstile";

const SpeakerForm = () => {
  return (
    <div className="student-art-form">
      <form method="POST" action="/api/forms">
        <input type="hidden" name="formName" value="art-enthusiast-speaker" />
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

          <div className="col-xl-6">
            <div className="form-input-box">
              <label>
                Place <span className="req">*</span>
              </label>
              <input type="text" placeholder="Place" name="place" required />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="form-input-box">
              <label>
                Upload your CV<span className="req">*</span>
              </label>
              <input
                type="file"
                className="form-control"
                name="submission_file"
                id="submission_file"
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="form-input-box">
              <TurnstileWidget />
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

export default SpeakerForm;
