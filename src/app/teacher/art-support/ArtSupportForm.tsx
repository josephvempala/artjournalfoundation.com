"use client";
import IntlTelInput from "../../../components/IntlTelInput";
import TurnstileWidget from "../../../components/Turnstile";

const ArtSupportForm = () => {
  return (
    <div className="student-art-form">
      <form method="POST" action="/api/forms">
        <input type="hidden" name="formName" value="teacher-art-support" />
        <div className="row">
          <div className="col-xl-6">
            <div className="form-input-box">
              <label>
                Name <span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                name="teacher_name"
                required
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="form-input-box">
              <label>
                Number of years of Teaching <span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="Number of years of teaching"
                name="no_of_years"
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
                Subject Expertise <span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="Subject Expertise"
                name="subject_expertise"
                required
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="form-input-box">
              <label>
                Examiner for any Board <span className="req">*</span>
              </label>
              <select name="examiner_status" required>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
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

export default ArtSupportForm;
