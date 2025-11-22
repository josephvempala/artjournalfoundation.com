import Link from "next/link";
import withLayout from "@/components/layout";


const TermsAndConditionsPage = () => {
  return (
    <>
      {/* Page Header Start */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/page-header-bg.webp)",
          }}
        ></div>
        <div className="page-header-bubble">
          <img src="/assets/images/shapes/page-header-bubble.png" alt="" />
        </div>
        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link prefetch={false} href="/">Home</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>Terms and Conditions</li>
            </ul>
            <h2>Terms and Conditions</h2>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      <div className="wpo-case-details-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-lg-12">
              <div className="wpo-case-details-wrap">
                <div className="wpo-case-details-text">
                  <div className="tab-content">
                    <div id="Description" className="tab-pane active">
                      <div className="row">
                        <div className="col-12">
                          <div className="wpo-case-content">
                            <div className="wpo-case-text-top">
                              <h2>Terms and Conditions</h2>

                              <div className="case-b-text">
                                <p>
                                  This document lays out the Terms and
                                  Conditions which shall be applicable to Art
                                  Journal Foundation, the brand name of
                                  Elevating Art Private Limited (hereinafter to
                                  be referred to as Company). The word User
                                  refers to the person who can access the Art
                                  Journal Foundation website, owned by the
                                  Company, and shall include both singular and
                                  plural. Reference to masculine shall include
                                  the feminine and neuter gender.
                                </p>
                                <p>
                                  The Company is incorporated under the
                                  Companies Act, 2013, having its registered
                                  office at 21153 Ferns Residency, Bengaluru,
                                  Karnataka – 560102.{" "}
                                </p>
                              </div>
                              <div className="case-bb-text">
                                <h3>1. User terms </h3>
                                <p>
                                  1.1 The following terms and conditions define
                                  your use of www.artjournalfoundation.in. By
                                  accessing either directly or through a
                                  hyperlink, the website, registering for and/
                                  or purchasing, included but not limited to,
                                  subscriptions services/ paid services,
                                  resources from the website, or by continuing
                                  to use this website, you are agreeing to be
                                  bound by the terms and conditions mentioned
                                  herein.{" "}
                                </p>
                                <p>
                                  1.2 The User shall not use this website or its
                                  contents for any illegal or unauthorized
                                  purpose nor violate any existing laws in force
                                  in your jurisdiction or India.{" "}
                                </p>
                                <p>
                                  1.3 The subscriptions services/ paid services/
                                  resources provided on the website are either
                                  free to access or are available on a paid
                                  basis. Any questions/ queries may be mailed to{" "}
                                  <a href="mailto:artjournalfoundation@gmail.com">
                                    artjournalfoundation@gmail.com
                                  </a>
                                  .{" "}
                                </p>
                                <p>
                                  1.4 These terms and conditions were last
                                  updated in July 2022.{" "}
                                </p>
                              </div>
                              <div className="case-bb-text">
                                <h3>2. Intellectual Property Rights </h3>
                                <p>
                                  2.1. The content/ resources on this website
                                  are either the property of the Company or a
                                  third-party contributor (after a formal
                                  consent from the third-party contributor) and
                                  the User may retrieve and display the contents
                                  of the website on a computer screen, print
                                  individual pages on paper and store such pages
                                  in electronic form on disk (but not on any
                                  server or other storage device connected to an
                                  external network) for his own personal,
                                  educational, or non-commercial purposes.
                                </p>
                                <p>
                                  2.2. Certain content on the website is used
                                  under license from third parties (hereinafter
                                  to be called ‘third-party content’) and will
                                  be marked with the copyright notice of those
                                  third parties. Some of the third-party content
                                  will be subject to additional restrictions –
                                  the relevant copyright notice will make it
                                  clear where that is the case. The User must
                                  comply with such restrictions. Every effort
                                  has been made to trace all the copyright
                                  holders, but if any have been inadvertently
                                  overlooked, the Company will be pleased to
                                  make the necessary acknowledgements at the
                                  first opportunity.{" "}
                                </p>
                                <p>
                                  2.3. In case the contributor/ third party who
                                  is an artist/ art practitioner/ theorist/ art
                                  historian has agreed to contribute his work to
                                  another website/ party as well, the Company
                                  does not need approval from the website/ party
                                  to display the work on the Art Journal
                                  Foundation website.{" "}
                                </p>
                                <p>
                                  2.4. The User may not (without prior written
                                  permission, through an email, from the
                                  Company):{" "}
                                </p>
                                <ul>
                                  <li>
                                    redistributes any of the content/ resources
                                    or supply it to other parties (including but
                                    not limited to using it as part of any
                                    library, archive, intranet or similar
                                    service); ii. cut, erase, delete or in any
                                    other way remove the copyright or trademark
                                    notice or watermark from any copies of the
                                    content;{" "}
                                  </li>
                                  <li>
                                    cut, erase, delete or in any other way
                                    remove the copyright or trademark notice or
                                    watermark from any copies of the content;{" "}
                                  </li>
                                  <li>
                                    create a database in electronic or
                                    structured manual form by systematically
                                    downloading and storing all or any of the
                                    content;
                                  </li>
                                  <li>
                                    modify, reproduce or in any way commercially
                                    exploit any of the content, except as
                                    expressly set out above.{" "}
                                  </li>
                                </ul>
                              </div>
                              <div className="case-bb-text">
                                <h3>3. Limitation of warranty </h3>
                                <p>
                                  3.1. The Company will use its reasonable skill
                                  and care in making the website available to
                                  the User at all times with accurate
                                  information which is free of any computer
                                  virus and/ or other malware, and in ensuring
                                  its continuing availability except when Net
                                  connectivity problems may arise and the
                                  Company does not give the User any other
                                  warranties and insists that the User employ
                                  all necessary precaution and care in accessing
                                  and using the website, with respect to the
                                  safety, accuracy, or the availability of the
                                  content.{" "}
                                </p>
                              </div>
                              <div className="case-bb-text">
                                <h3>4. Limitation of liability </h3>
                                <p>
                                  4.1. The Company is not liable for any losses
                                  that the User may incur as a result of usage/
                                  non-usage of any free content that is
                                  available on the website.{" "}
                                </p>
                                <p>
                                  4.2. With regard to the subscriptions
                                  services/ paid services, the User agrees that
                                  their exclusive remedy (in respect of any
                                  claim for breach of contract, negligence or
                                  otherwise) shall be limited to the Company
                                  taking reasonable steps to correct the
                                  relevant lapse or error in subscriptions
                                  services/ paid services or, at the option of
                                  the User, a refund of the amount the User has
                                  paid to the Company to receive the relevant
                                  subscriptions services/ paid services less any
                                  reasonable allowance for the receipt of the
                                  functioning service or value of resources.{" "}
                                </p>
                                <p>
                                  4.3. The Company does not accept any liability
                                  for any loss of profits, loss of business or
                                  business opportunity, loss of goodwill or
                                  reputation, business interruption, loss or
                                  corruption of data or programs or any other
                                  type of indirect or consequential loss
                                  whatsoever, arising from the User’s access to
                                  and use of the website and/ or of any purchase
                                  of the subscriptions services/ paid services
                                  nor for its being unable to fulfill any
                                  particular order due to the non-availability
                                  of the subscriptions services/ paid services.{" "}
                                </p>
                                <p>
                                  4.4. In no event will the Company be liable
                                  for any losses or damages whatsoever arising
                                  out of, or in connection with, any
                                  unauthorized use of the website and/or of any
                                  material published on them and/or of any
                                  services.{" "}
                                </p>
                              </div>
                              <div className="case-bb-text">
                                <h3>5. Modifications and Variations </h3>
                                <p>
                                  5.1. The Company is continually seeking to
                                  improve the website and services offered, and
                                  reserves the right, at its discretion, to make
                                  changes to any part of the website. We will
                                  ensure that any changes with respect to
                                  subscriptions services/ paid services will not
                                  decrease the functionality of those services.{" "}
                                </p>
                                <p>
                                  5.2. The Terms and Conditions of this website
                                  shall be amended with respect to any changes
                                  in free services or content as a result of
                                  policy of updation and the improving of the
                                  website for any security, legal, regulatory or
                                  other reasons. The Company shall give the User
                                  notice of any changes or additions or
                                  deletions or amendments and the User is
                                  requested to keep himself updated of any and
                                  all such changes by reading and understanding
                                  the Terms and Conditions. If the User does not
                                  agree to be bound by any of those changes,
                                  then he shall not use the website any further
                                  after receiving such notice of any change,
                                  addition, deletion, or amendment. Such changes
                                  will not affect any contract that relates to
                                  ongoing subscriptions services/ paid services
                                  that the User has with the Company at the time
                                  of the changes.{" "}
                                </p>
                              </div>
                              <div className="case-bb-text">
                                <h3>6. Links </h3>
                                <p>
                                  6.1. The website contains links to other
                                  websites and resources (either directly or
                                  through frames) and, where possible, the
                                  Company shall make clear where such links are
                                  being made.{" "}
                                </p>
                                <p>
                                  6.2. The Company is not responsible for the
                                  content or otherwise of these independent
                                  third-party websites and shall not be held
                                  liable for the availability or content of
                                  these outside resources for any damages,
                                  losses or otherwise incurred by the User.{" "}
                                </p>
                              </div>
                              <div className="case-bb-text">
                                <h3>7. General </h3>
                                <p>
                                  7.1. With respect to the free content/
                                  resources of the website, there is no specific
                                  time limit applying to the User’s access and
                                  use of the website. However, the Company
                                  reserves the right to suspend or terminate
                                  such access and use by the User of the free
                                  parts of the website at any time with or
                                  without notice.{" "}
                                </p>
                                <p>
                                  7.2. The User may not assign, make a
                                  sub-license or otherwise transfer the rights
                                  and privileges that this website grants to the
                                  User through their use, access and otherwise
                                  of this website.{" "}
                                </p>
                                <p>
                                  7.3. Failure by either party to exercise any
                                  right or remedy under this agreement
                                  established between the User and the Company
                                  by these Terms and Conditions does not
                                  constitute a waiver of that right or remedy.
                                  In any case, the User agrees to comply with
                                  the terms and conditions of this website.{" "}
                                </p>
                              </div>
                              <div className="case-bb-text">
                                <h3>
                                  8. Subscriptions services/ Paid services{" "}
                                </h3>
                                <p>
                                  8.1. The Company offers some services
                                  (subscriptions services/ paid service) for
                                  which it charges a fee. Details of these
                                  services are included in the relevant sections
                                  of the website.{" "}
                                </p>
                                <p>
                                  8.2. The User must provide the Company with
                                  valid, accurate and complete registration
                                  information, including name, age, contact
                                  number, email address, and payment details (as
                                  per the selected payment mode). On
                                  registration, the User will create a username
                                  and password of his own choice. It is the
                                  User’s responsibility to update the Company of
                                  any changes to that information by emailing{" "}
                                  <a href="mailto:artjournalfoundation@gmail.com">
                                    artjournalfoundation@gmail.com
                                  </a>
                                  .{" "}
                                </p>
                                <p>
                                  8.3. The Company shall try to process the said
                                  subscriptions services/ paid services promptly
                                  but does not guarantee that any subscriptions
                                  services/ paid services will be available to
                                  the User by any specified time.{" "}
                                </p>
                                <p>
                                  8.4 Any subscriptions service/ paid services
                                  must be solely used by the User. The Company
                                  reserves the right to monitor usage of the
                                  subscriptions services/ paid services using
                                  the data shared by the User at the time of
                                  registration. In the event that the User
                                  allows unauthorized users to access any
                                  subscriptions services/ paid services by using
                                  the User’s given personal information then,
                                  without prejudice to its other rights and
                                  remedies, the Company reserves the right to
                                  charge the User an amount equal to the charges
                                  which would have been payable had each
                                  unauthorized user subscribed for the
                                  subscriptions services/ paid services
                                  themselves.{" "}
                                </p>
                                <p>
                                  8.5 In case the User is unable to attend any
                                  paid event/ use any paid service, this cannot
                                  be transferred to any other user. Also, no
                                  refund shall be made by the Company in such
                                  case. The User is entitled to the certificate
                                  of completion for any course/ workshop/ event
                                  organized by the Company only if he attends
                                  the event for the complete duration or fulfils
                                  the requirements of the course as per the
                                  deadline specified.{" "}
                                </p>
                                <p>
                                  8.6 If the Company reasonably believes that
                                  the User’s personal information is being used
                                  in any way which is not permitted by these
                                  Terms and Conditions, the Company reserves the
                                  right to suspend access rights immediately on
                                  giving notice to the User and to block his
                                  access to the website until the issue has been
                                  resolved. The Company may terminate any
                                  existing right(s) and duty(ies) emanating from
                                  the Terms and Conditions of the website by
                                  giving notice to the User if they are in
                                  breach of these Terms and Conditions, and in
                                  such case, is not obliged to refund the User
                                  any fees.
                                </p>
                                <p>
                                  8.7 The Company may terminate this agreement
                                  established between the User and the Company
                                  by these Terms and Conditions if it
                                  discontinues a subscriptions services/, paid
                                  services, in which case it will give the User
                                  reasonable notice and the User is entitled to
                                  a refund of that part of any fee which relates
                                  to the unexpired period of the relevant
                                  service.{" "}
                                </p>
                                <p>
                                  8.8 The subscriptions services/ paid services
                                  of the User will renew each month on the day
                                  that he purchased it. For example, if the User
                                  subscribed on August 21, 2022, the
                                  subscriptions/ paid services will renew each
                                  month on the 21st (for monthly subscriptions
                                  services/ paid services) or on 21st August of
                                  the subsequent year (for annual subscriptions
                                  services/ paid services).{" "}
                                </p>
                                <p>
                                  8.9 The User is responsible for accessing the
                                  number of downloads that his subscriptions
                                  services/ paid services entitles him to. The
                                  User’s quota of downloads will not be carried
                                  forward to the next month / year, as per the
                                  subscriptions services/ paid services. The
                                  User can subscribe annually or monthly as per
                                  the availability of the service.{" "}
                                </p>
                              </div>
                              <div className="case-bb-text">
                                <h3>9. Privacy Policy </h3>
                                <p>
                                  9.1. By using the website or services, the
                                  User authorizes the Company to use the User’s
                                  information.{" "}
                                </p>
                                <p>
                                  9.2. Information that is collected or
                                  received: When you register with the website,
                                  you shall provide the Company with your valid,
                                  accurate and complete personal information
                                  required for registration, including, name,
                                  age, contact number, email address, and
                                  payment details. The Company may also receive
                                  the User’s personal information from external
                                  applications that the User may use to access
                                  the website or the Company may receive the
                                  User’s personal information through web
                                  technologies including cookies, web beacons,
                                  log files, among others.{" "}
                                </p>
                                <p>
                                  9.3. How the User’s personal information is
                                  used: The Company shall use any and all
                                  personal information provided by the User to
                                  enhance and improve the User’s experience on
                                  the website. The Company may also track with
                                  the help of third-party providers, the User’s
                                  personal information, including passive
                                  information, to improve the analytics and
                                  marketing of the website.{" "}
                                </p>
                                <p>
                                  9.4. How can the User protect his privacy:
                                  According to the existing laws in force, the
                                  User shall be informed prior to every action
                                  and prompted to make a choice and the User can
                                  choose to share with or withhold any personal
                                  information from the Company. The User will
                                  also be notified of cookies and other web
                                  technologies that the website is using and the
                                  User can, if he so chooses, disable the
                                  cookies and other such web technologies. Once
                                  the User terminates his account, any and all
                                  personal information stored with the website
                                  shall be deleted within reasonable time. The
                                  Company does not store payment details,
                                  including credit/ debit card number, name,
                                  CVV, PIN, validity period of card, etc. under
                                  the existing laws in force.
                                </p>
                                <p>
                                  9.5. If the User believes that there has been
                                  any breach of security such as the disclosure,
                                  theft, or unauthorized use of the User’s
                                  personal information, they must notify the
                                  Company immediately by emailing{" "}
                                  <a href="mailto:artjournalfoundation@gmail.com">
                                    artjournalfoundation@gmail.com
                                  </a>
                                  . The Company shall, on written notification,
                                  suspend the subscriptions services/ paid
                                  services of the User to prevent further misuse
                                  or harm to the User’s personal information.{" "}
                                </p>
                                <p>
                                  9.6. In case of any request to access and
                                  disclose your personal information by the
                                  government or other legal authorities, the
                                  Company shall submit to the legal procedures
                                  according to existing laws in force and notify
                                  the User in writing at the registered email
                                  address within 24 hours of having received any
                                  such request.{" "}
                                </p>
                                <p>
                                  9.7. Any and all access to third-party
                                  operators on the website shall lie solely with
                                  the discretion of the User and the Company
                                  does not have any liability arising out of or
                                  relating to the User’s use of third-party
                                  operators on the website.{" "}
                                </p>
                                <p>
                                  9.8. No fiduciary relationship has been
                                  created between the User and the Company by
                                  means of this website and its usage or access.{" "}
                                </p>
                              </div>
                              <div className="case-bb-text">
                                <h3>
                                  10. Online order process and formation of
                                  contract{" "}
                                </h3>
                                <p>
                                  10.1. The contract between the Company and the
                                  User is made under the following technical
                                  steps:{" "}
                                </p>
                                <ul>
                                  <li>
                                    The User must register or must already have
                                    registered on the website and have provided
                                    all required and relevant details for any
                                    subscriptions/ paid services. The User’s
                                    data will be treated by the Company in
                                    accordance with the aforementioned Privacy
                                    Policy.{" "}
                                  </li>
                                  <li>
                                    The User will pay through the payment
                                    channels provided as per the service
                                    requirement or possibly, in the future, give
                                    their payment details and the Company (or an
                                    agent on the Company’s behalf) will process
                                    the payment during the course of securing
                                    the User’s order.{" "}
                                  </li>
                                  <li>
                                    If the payment is successful, the User will
                                    receive a confirmation of the payment on the
                                    registered email address. At this point,
                                    there will be a binding contract between the
                                    Company and the User.{" "}
                                  </li>
                                  <li>
                                    The language of communication, including
                                    that of contract and of notification, if
                                    any, shall be English.{" "}
                                  </li>
                                </ul>
                                <p>
                                  10.2. Cancellation for any subscriptions
                                  services/ paid services{" "}
                                </p>
                                <ul>
                                  <li>
                                    Any subscriptions services/ paid services,
                                    once registered for, cannot be cancelled. In
                                    severe cases of absenteeism, the Company
                                    shall possibly share relevant resources. No
                                    refund shall be provided in any such case.{" "}
                                  </li>
                                  <li>
                                    The cancelation policy for subscriptions
                                    services/ paid services shall hold true for
                                    individuals or even organizations.{" "}
                                  </li>
                                </ul>
                              </div>
                              <div className="case-bb-text">
                                <h3>10.3. Contact us</h3>
                                <p>
                                  Any queries concerning, the website, the
                                  application, Terms and Conditions the
                                  services, or anything related to Art Journal
                                  Foundation may be mailed to{" "}
                                  <a href="mailto:artjournalfoundation@gmail.com">
                                    artjournalfoundation@gmail.com
                                  </a>{" "}
                                </p>
                              </div>
                              <div className="case-bb-text">
                                <h3>11. Disputes </h3>
                                <p>
                                  11.1. Any and all disputes arising out of any
                                  part of these Terms and Conditions, except
                                  subscriptions, paid services as stated in
                                  Clause 4.2. of Limitations of Liability, shall
                                  be governed by the laws of India and shall be
                                  subject to the jurisdiction of the courts at
                                  Bengaluru, Karnataka, India.{" "}
                                </p>
                              </div>
                              <p>Effective Date: July, 2022 </p>
                              <p>
                                Website covered:{" "}
                                <a href="/" target="_blank">
                                  www.artjournalfoundation.com{" "}
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withLayout(TermsAndConditionsPage);
