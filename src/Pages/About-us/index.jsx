import React from "react";
import "./index.css";
import img from "src/Assets/Images/business meeting.png";
import img1 from "src/Assets/Images/mission.png";
import img2 from "src/Assets/Images/value.png";
import img3 from "src/Assets/Images/vision.png";
import img4 from "src/Assets/Images/Financial transparency.png";
import img5 from "src/Assets/Images/bar.png";
import img6 from "src/Assets/Images/Vector1.png";
import img7 from "src/Assets/Images/Vector2.png";
import img8 from "src/Assets/Images/Vector3.png";
import img9 from "src/Assets/Images/Vector4.png";
import img10 from "src/Assets/Images/Vector5.png";
import img11 from "src/Assets/Images/Vector6.png";
import img12 from "src/Assets/Images/Vector7.png";
import img13 from "src/Assets/Images/Vector8.png";
import img14 from "src/Assets/Images/Vector9.png";
import img15 from "src/Assets/Images/chart.png";
import img16 from "src/Assets/Images/frame.png";

const index = () => {
  return (
    <>

      <div className="container holder">
        <img src={img} className="img-holder" alt="meeting" />

      </div>


      <div className="pageholder ">
        <div className="page" >
          <div>
            <div className="img-outline">
              <img src={img1} className="img-mission" alt="mission" />
            </div>
            <div className="text-outline">
              <div className="text">
                <p>
                  Our mission is to integrate medical and wellness social networking, patient advocacy, and access to
                  Major EHR Systems into a platform that connects patients living with complex diseases to high-quality
                  healthcare providers and resources.</p><br />
                <p>
                  Our goal is to empower patients to take charge of their health by
                  providing the tools and resources they need to become informed and engaged advocates. By
                  fostering collaboration and partnership among patients, healthcare providers, and policymakers, we
                  aim to improve healthcare outcomes for all.
                </p>
              </div></div>

          </div>
          <div>
            <div>
              <img src={img2} className="img-value" alt="core-value" />
            </div>
            <div className="text-outline1"> <div className="text1">
              <div>
                <h3>Patient-Centered Care</h3>
                <p>
                  We are committed to providing our users with the highest level of patient-centered care, respecting their individual needs, and helping them to make informed decisions about
                  their health and wellness.
                </p>
              </div><br />

              <div><h3>Innovation</h3>
                <p>We believe in innovation and continuous improvement to provide the most
                  comprehensive and reliable resources to our users. We will always seek out the latest technology and healthcare trends to stay ahead of the curve.</p>
              </div><br />

              <div><h3>Integrity</h3>
                <p>We hold ourselves to the highest ethical standards and are dedicated to providing our
                  users with accurate and reliable information. We will always act with honesty, transparency, and
                  respect.</p></div><br />

              <div><h3>Social Responsibility</h3>
                <p>We are committed to being a responsible and contributing member of
                  society. As a global non-profit, we will prioritize our users' needs over profits and will invest our
                  resources back into the community.
                </p></div><br />

              <div>
                <h3>Collaboration</h3>
                <p>We understand that complex diseases require a collaborative approach, and we
                  strive to foster partnerships with healthcare providers, patient advocacy groups, and other
                  stakeholders to ensure the best outcomes for our users.
                </p>
              </div><br />

              <div>
                <h3>Professionalism</h3>
                <p>We pride ourselves on maintaining a professional and respectful environment
                  for our users, partners, and employees. We will always operate with the utmost professionalism,
                  following industry standards and regulations.</p>
              </div><br />

            </div>
            </div>

          </div>

          <div>
            <div>
              <img src={img3} className="img-vision" alt="" />
            </div>
            <div className="text-outline">
              <div className="text">
                <p>Our aim is to empower patients to take control of their health, collaborate with healthcare providers
                  and policymakers, and improve the quality of life for all those affected by complex diseases.</p>
                <p>Our vision is to create a world where patients living with complex diseases have access to high-quality healthcare providers and resources, regardless of geographic location or financial status.
                </p>
                <p>We strive to be a global non-profit leader in the integration of major EHR systems, providing
                  innovative medical and wellness social networking platforms and patient advocacy services.</p>
              </div>

            </div>

          </div>


        </div>
        <br />

        <div className="img-chart">

          <img src={img4} className="img-finance" alt="financial transparency" />
        </div>

        <div className="page-holder2">
          <div className="Revenue">
            <div className="text3">
              <h2>Revenue Generation</h2>
            </div>

            <div className="text4">
              <h4>Our revenue is generated through the following business activities.</h4>
            </div>
          </div>
          <div className="Gen-Rev">
            <div>
              <ul className="grid">
                <img src={img6} className="grid1" alt="tag1" />
                <li className="grid2">Donation</li>
              </ul>
              <ul className="grid">
                <img src={img7} className="grid1" alt="tag2" />
                <li className="grid2">Licensing Fees</li>
              </ul>
              <ul className="grid">
                <img src={img8} className="grid1" alt="tag3" />
                <li className="grid2">Research Partnerships</li>
              </ul>
              <ul className="grid">
                <img src={img9} className="grid1" alt="tag4" />
                <li className="grid2">Data Analytics</li>
              </ul>
              <ul className="grid">
                <img src={img10} className="grid1" alt="tag5" />
                <li className="grid2">Consulting Services</li>
              </ul>
              <ul className="grid">
                <img src={img11} className="grid1" alt="tag6" />
                <li className="grid2">Advertising and Sponsorship</li>
              </ul>
              <ul className="grid">
                <img src={img12} className="grid1" alt="tag7" />
                <li className="grid2">Patient Advocacy Services</li>
              </ul>
              <ul className="grid">
                <img src={img13} className="grid1" alt="tag8" />
                <li className="grid2">Subscription Fees</li>
              </ul>
              <ul className="grid">
                <img src={img14} className="grid1" alt="tag9" />
                <li className="grid2">Booking Fees</li>
              </ul>




            </div>
            <div className="bar-chart">
              <img src={img5} alt="bar-chart" />
            </div>
          </div>


        </div>

        <div className="streams">
          <h2>Projected Revenue Streams</h2>
          <img src={img15} alt="chart" />
        </div>
      </div>

      <div className="frame-holder">
        <div className="frame"><img src={img16} alt="frame" />
        </div>

        <div className="page-text">
          <h4 className="txt">iHealth and Wellness Foundation, Inc.</h4>

          <h6 className="txt2">Terms of Service </h6>
          <div className="txt3">
            <p>We connect patients with complex diseases to high-quality medical and wellness providers and
              resources through an integrated platform, empowering patients to take charge of their health while
              fostering collaboration among all stakeholders to improve healthcare outcomes.</p>


            <p>using this website, you agree to the following terms and conditions:</p>

            <p>Content: All content provided on this website is for informational purposes only.
              We do not provide medical advice, diagnosis, or treatment. You should always consult
              your healthcare provider before making any healthcare decisions. We make no warranties,
              express or implied, regarding the accuracy, completeness, or reliability of any content on this website.
              We reserve the right to modify or remove any content at any time without prior notice.

              Use of Information: The information on this website is intended to be used as
              a resource to connect patients with complex diseases and health and wellness providers.
              Any information obtained through this website should not be used for commercial purposes.
              You agree to use the website only for lawful purposes and in compliance with all applicable
              laws and regulations. You agree not to use the website in any way that could damage, disable, overburden,
              or impair the website or interfere with any other party's use and enjoyment of the website. By using our website,
              you agree to indemnify and hold us harmless from any claims arising out of your use of the website.</p>

            <p>Protecting your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website. By using our website, you agree to the terms of this Privacy Policy.
              We collect personal information such as your name and email address when you sign up for our services. We use this information to provide you with the services you have requested and to communicate with you about our services. We do not share your personal information with third parties, except when required by law or when necessary to provide you with the services you have requested. We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We may use cookies to collect information about your use of our website. This information is used to improve our website and to provide you with a more personalized experience. You can choose to disable cookies in your web browser, but this may limit your use of our website. We may also use third-party services, such as Google Analytics, to analyze website traffic and usage.
              These third-party services
              may collect and use your information in accordance with their own privacy policies.</p>

            <p>Use of Services

              You agree that you won’t do any of the following things:

              Use, display, mirror, or frame the Services, or any individual element within the Services, iHealth and Wellness (the “Organization”)’s name, any iHealth and Wellness (the “Organization”) trademark, logo, or other proprietary information (including through the use of meta tags or the like), or the layout and design of any page or form contained on a page, without our express written consent;

              Attempt to access or search the Services or Content or download Content from the Services through the use of any engine, software, tool, agent, device or mechanism (including spiders, robots, crawlers, data mining tools or the like) other than the software and/or search agents provided by iHealth and Wellness (the “Organization”) or other generally available third-party web browsers;

              Send any unsolicited or unauthorized advertising, promotional materials, email, junk mail, spam, chain letters or other form of solicitation.

              Use the Services or Content, or any portion thereof, for any commercial purpose or for the benefit of any third party or in any manner not permitted by these Terms;

              Attempt to interfere in any way with the Services or the networks or network security hosting the Services, or attempt to use the Services to gain unauthorized access to any other computer system;

              Collect or store any personally identifiable information from the Services from other users of the Services without their express permission;

              Impersonate or misrepresent your affiliation with any person or entity;

              Violate any applicable law or regulation; or

              Encourage or enable any other third party or individual to do anything listed above.

              Although we’re not obligated to monitor access to or use of the Services or Content or to review or edit any Content, we have the right to do so for the purpose of operating the Services, to ensure compliance with these Terms, and to comply with applicable law or other legal requirements. We reserve the right, but are not obligated, to remove or disable access to any Content, at any time and without notice, including, but not limited to, if we, at our sole discretion, consider any Content to be objectionable or in violation of these Terms. We have the right to investigate violations of these Terms or conduct that affects the Services. We may
              also consult and cooperate with law enforcement authorities to prosecute users who violate the law.</p>
          </div>

        </div >
      </div >

    </>

  )

};

export default index;
