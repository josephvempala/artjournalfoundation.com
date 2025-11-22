"use client";
import IntlTelInput from "@/components/IntlTelInput";
import TurnstileWidget from "@/components/Turnstile";

const ArtPractitionerForm = () => {
  return (
    <div className="student-art-form">
      <form method="POST" action="/api/forms">
        <input type="hidden" name="formName" value="student-art-practitioner" />
        <div className="row">
          <div className="col-xl-6">
            <div className="form-input-box">
              <label>
                Name of the Student <span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                name="student_name"
                required
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="form-input-box">
              <label>
                Age (in years) <span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="Your age"
                name="student_age"
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
                name="student_email"
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
                Grade <span className="req">*</span>
              </label>
              <select name="student_grade" id="student_grade" required>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                <option value="Grade 4">Grade 4</option>
                <option value="Grade 5">Grade 5</option>
                <option value="Grade 6">Grade 6</option>
                <option value="Grade 7">Grade 7</option>
                <option value="Grade 8">Grade 8</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
              </select>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="form-input-box">
              <label>
                Curriculum <span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="Curriculum"
                name="curriculum"
                required
              />
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

export default ArtPractitionerForm;
