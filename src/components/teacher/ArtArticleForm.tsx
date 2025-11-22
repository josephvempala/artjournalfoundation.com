"use client";
import IntlTelInput from "@/components/IntlTelInput";
import TurnstileWidget from "@/components/Turnstile";

const ArtArticleForm = () => {
  return (
    <div className="student-art-form">
      <form
        method="POST"
        action="/api/forms"
        encType="multipart/form-data"
      >
        <input type="hidden" name="formName" value="teacher-art-article" />
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
                Topic of the Article <span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="Topic of the Article"
                name="topic_name"
                required
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="form-input-box">
              <label>
                Upload your Article <span className="req">*</span>
              </label>
              <input type="file" className="form-control" name="article_file" />
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

export default ArtArticleForm;
