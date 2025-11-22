"use client";
import IntlTelInput from "@/components/IntlTelInput";
import TurnstileWidget from "@/components/Turnstile";

const ArtJournalForm = () => {
  return (
    <div className="student-art-form">
      <form
        method="POST"
        action="/api/forms"
        encType="multipart/form-data"
      >
        <input type="hidden" name="formName" value="student-art-journal" />
        <div className="row">
          <div className="col-xl-6">
            <div className="form-input-box">
              <label>
                Name of the Student <span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="Name of the student"
                name="student_name"
                required
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="form-input-box">
              <label>
                Name of the School <span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="Name of the school"
                name="student_school"
                required
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="form-input-box">
              <label>
                Title of the Artwork/Performance <span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="Title of the Artwork/Performance"
                name="student_artwork"
                required
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="form-input-box">
              <label>
                Year of Creation <span className="req">*</span>
              </label>
              <select name="creation_year" required>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="form-input-box">
              <label>
                Email Id of the Student <span className="req">*</span>
              </label>
              <input type="email" placeholder="Email ID" name="student_email" />
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
                Medium/Style/Genre <span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="Medium/Style/Genre"
                name="medium"
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="form-input-box">
              <label>Technique (For Visual Arts)</label>
              <input
                type="text"
                placeholder="Technique For Visual Arts"
                name="technique"
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="form-input-box">
              <label>
                Description <span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="Visual Arts Description"
                name="art_description"
                required
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="form-input-box">
              <label>Inspiration</label>
              <input type="text" placeholder="Inspiration" name="inspiration" />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="form-input-box">
              <label>Reflection</label>
              <input type="text" placeholder="Reflection" name="reflection" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="form-input-box">
              <label>Art Picture/Video Description</label>
              <input
                type="text"
                placeholder="Art Descritpion"
                name="art_description1"
              />
            </div>
          </div>

          <div className="col-xl-12">
            <div className="form-input-box">
              <label>Upload your Art Picture/Video</label>
              <input
                type="file"
                className="form-control"
                name="article_file1"
              />
            </div>
          </div>
          <hr />
          <div className="col-xl-12">
            <div className="form-input-box">
              <label>Art Picture/Video Description</label>
              <input
                type="text"
                placeholder="Art Descritpion"
                name="art_description2"
              />
            </div>
          </div>

          <div className="col-xl-12">
            <div className="form-input-box">
              <label>Upload your Art Picture/Video</label>
              <input
                type="file"
                className="form-control"
                name="article_file2"
              />
            </div>
          </div>
          <hr />

          <div className="col-xl-12">
            <div className="form-input-box">
              <label>Art Picture/Video Description</label>
              <input
                type="text"
                placeholder="Art Descritpion"
                name="art_description3"
              />
            </div>
          </div>

          <div className="col-xl-12">
            <div className="form-input-box">
              <label>Upload your Art Picture/Video</label>
              <input
                type="file"
                className="form-control"
                name="article_file3"
              />
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
                <a href="#">
                  By checking this box, you are agreeing to our Terms and
                  Conditions.
                </a>
              </label>
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

export default ArtJournalForm;
