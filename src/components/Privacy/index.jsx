import React, { Component } from "react";
import { Link } from "@reach/router";
import Header from '../Header';
import ReactHtmlParser from "react-html-parser";

import "./Privacy.scss";


export default class About extends Component {

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    render() {
        return (
            <div className="About">
                <Header text={this.props.text} />
                <div className="Privacy">

                    <br />
                    <br />
                    <br />
                    <h1>Privacy Policy</h1>
                    <div>
                        <p>Effective date: Febrary 18, 2020</p>
                        <p>TAKTIL LTD ("us", "we", or "our") operates EasyLang.app Context Extension (the "Service").</p>
                        <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
                        <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy,
terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from http://www.EasyLang.app</p>
                    </div>

                    <br />
                    <h2>Information Collection And Use</h2>

                    <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                    <br />
                    <h3>Types of Data Collected</h3>
                    <br />
                    <h4>Personal Data</h4>
                    <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
                    <ul>
                        <li>Email address</li>
                        <li>Cookies and Usage Data</li>
                    </ul>

                    <br />
                    <h4>Usage Data</h4>

                    <p>We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages you visit, the time and date of your visit, and other diagnostic data.</p>
                    <br />
                    <h4>Tracking &amp; Cookies Data</h4>
                    <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
                    <p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from an extension and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
                    <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use our Service.</p>
                    <p>Examples of Cookies we use:</p>
                    <ul>
                        <li><b>Session Cookies.</b> We use Session Cookies to operate our Service.</li>
                        <li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>
                        <li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>
                    </ul>
                    <br />
                    <br />



                    <h2>Registration and authentication</h2>

                    <p>
                        By registering or authenticating, Users allow this Application to identify them and give them access to dedicated services.
                    Depending on what is described below, third parties may provide registration and authentication services. In this case, this Application will be able to access some Data, stored by these third-party services, for registration or identification purposes.
                    Some of the services listed below may also collect Personal Data for targeting and profiling purposes; to find out more, please refer to the description of each service.
<br />
                        <br />
                        <h4>Google OAuth (Google LLC)</h4>

                        Google OAuth is a registration and authentication service provided by Google LLC and is connected to the Google network.
                        Personal Data processed: various types of Data as specified in the privacy policy of the service.
                    
                        Place of processing: United States – Privacy Policy. Privacy Shield participant.
<br />
                        <br />
                        <h4>Facebook Authentication (Facebook, Inc.)</h4>


                        Facebook Authentication is a registration and authentication service provided by Facebook, Inc. and is connected to the Facebook social network.
                        Personal Data processed: various types of Data as specified in the privacy policy of the service.
                    
                        Place of processing: United States – Privacy Policy. Privacy Shield participant.
</p>



                    <br />
                    <h2>Use of Data</h2>
                    <p>TAKTIL LTD uses the collected data for various purposes:</p>
                    <ul>
                        <li>To provide and maintain the Service</li>
                        <li>To notify you about changes to our Service</li>
                        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                        <li>To provide customer care and support</li>
                        <li>To provide analysis or valuable information so that we can improve the Service</li>
                        <li>To monitor the usage of the Service</li>
                        <li>To detect, prevent and address technical issues</li>
                    </ul>

                    <br />
                    <br />

                    <h2>Transfer Of Data</h2>
                    <p>Your information, including Personal Data, may be transferred to and maintained on computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                    <p>If you are located outside Belarus and choose to provide information to us, please note that we transfer the data, including Personal Data, to Belarus and process it there.</p>
                    <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                    <p>TAKTIL LTD Inc will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>

                    <br />
                    <h2>Disclosure Of Data</h2>

                    <h3>Legal Requirements</h3>
                    <br />
                    <p>TAKTIL LTD may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                    <ul>
                        <li>To comply with a legal obligation</li>
                        <li>To protect and defend the rights or property of TAKTIL LTD</li>
                        <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                        <li>To protect the personal safety of users of the Service or the public</li>
                        <li>To protect against legal liability</li>
                    </ul>

                    <br />
                    <br />

                    <h2>Security Of Data</h2>
                    <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

                    <br />
                    <h2>Service Providers</h2>
                    <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
                    <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

                    <br />
                    <h3>Analytics</h3>
                    <br />
                    <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
                    <h4>Google Analytics</h4>
                    <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>
                    <p>You can opt-out of having made your activity on the Service available to Google Analytics by switching off Google Analytics in EasyLang.app extension options page. This prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.</p>


                    <br />
                    <h2>Links To Other Sites</h2>
                    <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                    <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

                    <br />
                    <h2>Sharing of Personal Data</h2>
                    <p>We do not share personal data with any third parties except as in response to a law enforcement request.</p>

                    <br />
                    <h2>Children's Privacy</h2>
                    <p>Our Service does not address anyone under the age of 18 ("Children").</p>
                    <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>


                    <br />
                    <h2>Changes To This Privacy Policy</h2>
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                    <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
                    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>



                    <br />
                    <section id="footer">
                        <p className="copy">© 2020 TAKTIL LTD. All rights reserved.</p>
                    </section>


                </div >
                <footer className="get-started-footer">
                    <div className="footer-links">
                        <ul>
                            <li>
                                <Link
                                    to="about"
                                    className="footer-link"
                                    onClick={this.closeMenu}
                                >
                                    {this.props.text.About}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="products"
                                    className="footer-link"
                                    onClick={this.closeMenu}
                                >
                                    {this.props.text.Products}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="download"
                                    className="footer-link"
                                    onClick={this.closeMenu}
                                >
                                    {this.props.text.Download}
                                </Link>
                            </li>
                            <li>
                                <p>
                                    <a className="footer-mail" href="mailto:support@easylang.by">support@easylang.by</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        );
    }
};
