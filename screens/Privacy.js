import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import logo from '../images/logo_white.png';
import back from '../images/back.png';
export default function Privacy({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={{justifyContent: 'center', flex: 1, marginRight: '35%'}}>
          <Image
            source={logo}
            style={{width: 200, height: 40, alignSelf: 'center'}}
          />
        </View>
        <TouchableOpacity
          style={{justifyContent: 'center', flex: 1, marginLeft: 10}}
          onPress={() => navigation.navigate('Profile')}>
          <Image source={back} style={{width: 30, height: 20}} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          marginTop: '5%',
          color: '#38393b',
        }}>
        Privacy Policy
      </Text>
      <ScrollView
        style={{
          paddingHorizontal: '7%',
          paddingVertical: '5%',
          height: '100%',
          marginTop: '3%',
        }}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.text2}>
          YOUR USE OF OUR SERVICES IS SUBJECT TO THIS PRIVACY POLICY AND THE
          APPLICABLE TERMS AND CONDITIONS OF SERVICE. BY USING OUR SERVICES, YOU
          ARE ACCEPTING THE PRACTICES SET OUT IN THIS PRIVACY POLICY AND THE
          APPLICABLE TERMS AND CONDITIONS OF SERVICE.
        </Text>
        <Text style={styles.text}>
          This Privacy Policy discloses the privacy practices of TrueGets,.
          (“TrueGets,” “us,” “our,” or “we”) with respect to your information
          collected, stored, disclosed and used by TrueGets, its subsidiaries
          and corporate affiliates, through our Services, including our Websites
          and Applications (as defined in the Terms and Conditions of Service or
          Agreement).
        </Text>
        <Text style={styles.text3}>
          If we decide to change our Privacy Policy, we will post those changes
          to this page and any other places we deem appropriate so that you are
          aware of what personal information we collect, how we use it, and
          under what circumstances, if any, we disclose it. The effective date
          of this Privacy Policy is noted below. We reserve the right to modify
          this Privacy Policy at any time, so please review it frequently. If we
          make material changes to this Privacy Policy, we will notify you here,
          or by other means, such as e-mail, at our discretion. Your continued
          use of any portion of our Services following the posting of the
          updated Privacy Policy will constitute your acceptance of the changes.{'\n'}
          1. What Personal Information We Collect and How We Collect It {'\n'}2. How
          and Why We Use Your Personal Information {'\n'}3. Mobile Push Notifications{'\n'}
          4. If Information Is Not Provided {'\n'}5. Disclosure of Your Personal
          Information {'\n'}6. Third-Party Advertising {'\n'}7. Age Restrictions {'\n'}8. Custom
          Audience {'\n'}9. Security {'\n'}10. “Do Not Track” Signals {'\n'}11. Links to or Access
          from Other Sites {'\n'}12. Choice/Opt-Out {'\n'}13. Updating / Deleting Your
          Personal Information {'\n'}14. Retention and Storage of Your Personal
          Information {'\n'}15. Contact Us {'\n'}16. Dispute Resolution {'\n'}17. Effective Date
          {'\n'}1. What Personal Information We Collect and How We Collect It In order
          to provide our Services, we collect information about you that, alone
          or in combination with other information, can be used to identify you
          as an individual (“personal information”). What personal information
          we collect and process depends on how and why you interact with us. •
          Personal Information You Provide. {'\n'}When you register for an account or
          subscribe to any of our Services, we collect a variety of information
          about you, including your contact information such as your name, email
          address, contact number, mailing address, date of birth, dating
          preferences, etc. When you sign up for our Services, you may provide
          us with answers to our proprietary questionnaire (our Compatibility
          Quiz), which we use to build a personality profile for you and to
          match you with other compatible singles. You may also choose to
          provide us with your photo(s) which may contain personal information.
          By providing us photo(s) you agree that we may make them available to
          your matches and users of TrueGets’s Services. We may also collect
          your name, contact information (such as your email), and a copy of
          your correspondences with us, if you contact us. If you are a Premium
          Member, you will also be able to communicate with your matches via
          video chat in selected countries. If you use the video chat feature,
          you acknowledge and agree that the matches with whom you choose to
          video chat will have access to video of you. Furthermore, TrueGets
          uses a third-party service provider to enable the video chat feature,
          and you agree that TrueGets will transfer your IP address and profile
          ID to this service provider strictly for the purpose of providing the
          service. To process purchases, we may require your name, address,
          phone number, email address and payment information, including but not
          necessarily limited to credit or debit card information and associated
          account information. If you would like us to delete such payment
          information from our systems, you may contact us as described under
          the “Contacting Us” section below. {'\n'}Sensitive Information. During the
          registration process and while updating your profile, you may provide
          us with personal information that is considered “sensitive” in your
          jurisdiction, including but not limited to, religious beliefs,
          ethnicity and political views. This information is only used by us to
          provide the services to you. By providing this information, you agree
          to TrueGets’s storing, processing, and use of such data for the
          purposes stated above. You may change update your information by
          accessing your profile at any time or select the “prefer not to
          specify” option in response to any questions requesting such
          information. {'\n'}Surveys. We may periodically conduct voluntary member
          surveys. We encourage our members to participate in such surveys
          because they provide us with important information regarding the
          improvement of our Services. You may also volunteer for certain
          surveys that we may offer to our users, and any additional rules
          regarding the conduct of such surveys will be disclosed to you prior
          to your participation. We do not link the survey responses to any
          personal information, and all responses are anonymous. {'\n'}• Personal
          Information We Automatically Collect. {'\n'}When you access or or use our
          Services, we automatically collect information about how you access
          and use our Websites and Services. The information we collect includes
          your IP address, browser type, Internet service provider (ISP),
          referring/exit pages, platform type, date/time stamp, and number of
          clicks. If you use a mobile device to access or download any of our
          Services, we may also collect device information (such as your mobile
          device ID, model and manufacturer), operating system, and version
          information. While this information taken together could be considered
          personal information, we do not use this information to personally
          identify you. We use this information in the aggregate to analyze
          trends, administer our Servicess, prevent fraud, understand how users
          interact with our Services, and gather demographic information to
          tailor our visitors’ experience on our Services, show them content
          that we think they might be interested in, and display the content
          according to their preferences. We do not share this information with
          third parties. The technologies we use to automatically collect data
          from you may include: 1. Cookies & Web Tracking.{'\n'} We use “cookies” to
          keep track of some types of information while you are accessing or
          using our Services. Cookies are very small files placed on your
          computer, and they allow us to count the number of visitors to our
          Websites and distinguish repeat visitors from new visitors. They also
          allow us to save user preferences and track user trends. We rely on
          cookies for the proper operation of our Websites; therefore if your
          browser is set to reject all cookies, the website will not function
          properly. Some cookies are automatically erased after the end of the
          browser session (these are “session cookies”), whereas other cookies
          are stored for a predetermined amount time or permanently in your
          browser, before they erase themselves (these are “temporary" or
          "permanent" cookies).While a cookie may distinguish your device, it
          will not name you. Almost every website uses cookie technology. {'\n'}You
          can find more details about the cookies and pixels that we use for the
          Websites here and for the Applications here. We have listed the name
          of each cookie, as well as the intended purpose of the cookie and
          other important information. What kind of cookies does TrueGets use?{'\n'}
          Strictly necessary cookies {'\n'}We use certain cookies to make sure that
          our website and our Service is easy, secure and safe to use. Without
          these cookies, services that you have asked for (such as a secure
          website and Service), would not be possible. This category of cookies
          includes:{'\n'} o Cookies that identify or authenticate our users to ensure
          that our Service is secure; {'\n'}o Cookies that temporarily store certain
          user entries ;{'\n'} o Cookies that store certain user preferences (such as
          your language choices). {'\n'}Analytics cookies {'\n'}We use analytics cookies to
          record usage data about our users (e.g. which users have visited which
          of our subpages, etc.) and to evaluate this information statistically.{'\n'}
          Third Party Advertising Cookies / Third Party Pixel / Third Party
          Tracking We also allow third parties to collect our users' data
          through advertising cookies or pixels placed on our website. These
          cookies allow us and other third parties to provide you with
          interest-based advertising that is based on an analysis of your usage
          behavior (e.g., which banner ads you have clicked on, which subpages
          you have visited, etc.) on the internet and our Services. {'\n'}How can you
          deactivate or erase our cookies? {'\n'}You can deactivate cookies on your
          device via your browser settings; and you can erase any cookies
          already stored on your device at any time in your browser. Please
          note, however, that if you choose to deactivate or remove cookies,
          doing so may prevent certain features on our website from working
          properly and therefore affect your experience on our website. In
          addition, you may not be able to use all the features of our Service
          if you deactivate or remove cookies. For additional information and
          opt-out instructions for interest-based advertising, please review our
          Third Party Advertising section below. {'\n'}2. Web Beacons. {'\n'}“Web beacons”
          (also known as “clear gifs” and “pixel tags”) are small transparent
          graphic images that are often used in conjunction with cookies in
          order to further personalize our website for our users and to collect
          a limited set of information about our visitors. We may also use web
          beacons in email communications in order to understand the behavior of
          our customers. {'\n'}3. Web Analytics. {'\n'}We collect and use statistical
          information about your use of our Services to make it more
          user-friendly, to understand our market share, to conduct other market
          research and to make sure that we display relevant advertisements for
          you. To this end, we work with various authorized service providers;
          and we use analytics tools in our website. However, these tools will
          not use your IP address, or (if they do), they will shorten it
          immediately after collection (which means that it will be less clearly
          be linked to your device). These tools will also generate user
          profiles by using analytic cookies or by evaluating log files; however
          these user profiles will not be linked to your real world information
          and will not name you. {'\n'}4. Promotional e-mails. {'\n'}Promotional e-mail
          messages we send you may contain code that enables our database to
          track your usage of the e-mails, including whether the e-mail was
          opened and what links (if any) were clicked. If you would rather not
          receive promotional e-mails from us, please see the section below
          labeled “Choice/Opt-Out.” {'\n'}• Personal Information We Receive from
          Others. {'\n'}In addition to information you provide us directly, and that
          we collect automatically, we also may receive personal information
          from: {'\n'}o Fraud-detection and credit-reference agencies to correct our
          records and help prevent and detect fraud; {'\n'}o Sources that are
          available to the public, which we might combine with information that
          we collect from you directly; and {'\n'}o A family member or someone else
          acting on your behalf. {'\n'}We encourage users to refer a friend to our
          Singles Service by sending us a friend’s name and email address. We
          will keep this information in our database, and send that person a
          one-time e-mail containing your name and inviting them to visit our
          site. This e-mail will also include instructions on how to remove
          their information from our database. If you refer a friend, you agree
          that you will not abuse this feature by entering names and addresses
          of those who would not be interested in TrueGets’s Services. For some
          of our Services, you may also give gift memberships to your friends,
          in which case we will use your friends’ e-mail address that you
          provide in order to deliver the gift. {'\n'}2. How and Why We Use Your
          Personal Information {'\n'}We use information that we collect about you or
          that you provide to us, including any personal information, to: {'\n'}•
          Provide and secure our Services; {'\n'}• Establish and manage user accounts,
          such as your “My Profile”; {'\n'}• Display the public fields of your profile
          to your matches, including recent login date, user name, photos,
          videos, and other profile content; {'\n'}• Provide customer support,
          troubleshoot issues, manage our Services, and respond to requests,
          questions, and comments; {'\n'}• Process transactions; {'\n'}• Communicate with
          you about our Services, including order confirmation, refund and
          renewal processing, notifying of matches for our Singles Service,
          Service announcements and administrative messages; {'\n'}• Communicate with
          you regarding promotions, including newsletters, new product
          offerings, special discounts, event notifications, special third-party
          offers; {'\n'}• Conduct market and consumer research and trend analyses; {'\n'}•
          Enable posting on our blogs, forums, and other public communications;
          {'\n'}• Perform accounting, auditing, billing, reconciliation, and
          collection activities; {'\n'}• Prevent, detect, identify, investigate, and
          respond to potential or actual claims, liabilities, prohibited
          behavior, and criminal activity; {'\n'}• Comply with and enforce legal
          requirements, agreements, and policies; {'\n'}• Achieve purposes for which
          we provide specific notice at the time of collection; and {'\n'}• For any
          other purpose with your consent. {'\n'}One of the methods we use to
          communicate with you in connection with TrueGets’s Services may be by
          telephone or text message (including to any wireless number you may
          provide to us). For example, you may sign up for a text messaging
          service (“SMS Verification”) which enables TrueGets to verify your
          phone number via a confirmed text message and display such
          verification in your public account (as a security measure for your
          matches’ benefit). If you would rather not receive telephone calls or
          text messages from us, you may change or delete your number from your
          account preferences page(s), or ask to be removed from our contact
          list if you receive a call or text message from us. You may also
          opt-out of the SMS Verification service at any time. Please note that
          we or one of our service providers may contact you by telephone in
          connection with an outstanding and past due balance on your account.
          Opting out of receiving telephone calls will not opt you out of
          receiving calls related to an outstanding balance. {'\n'}In addition to the
          uses outlined above, by accessing or using our Services, you agree to
          allow us to anonymously use the information from you and your
          experiences to continue our research into successful relationships.
          This research, conducted by psychologists and behavior research
          scientists, may be published in academic journals. However, all of
          your responses will be kept anonymous, and no personal information
          will be published. {'\n'}3. Mobile Push Notifications {'\n'}We will send you push
          notifications if you choose to receive them for purposes of receiving
          notice of matches for our Singles Service, letting you know when
          someone has sent you a message, or for other Service-related matters.
          If you wish to opt-out from receiving these types of communications
          you may turn them off at the device level. {'\n'}4. If Information is Not
          Provided {'\n'}If you do not provide us with the personal information we
          request, this may limit our ability to fulfil the applicable purpose
          for collection and the services we are able to provide you. For
          example, we may not be able to consider or process your payment, match
          you with other users or provide a particular service you have
          requested. {'\n'}5. Disclosure of Your Personal Information {'\n'}In general we
          may share personal information we collect: {'\n'}• With current and future
          organizations that are part of our network of organizations for the
          purposes described in this Privacy Policy, including with your
          consent; {'\n'}• With affiliated and unaffiliated service providers who help
          us perform and deliver our Services, subject to confidentiality
          agreements, including: customer care agents; technology assistants;
          service fulfillment; form processing; website management and hosting;
          information technology and security; email and newsletter delivery;
          advertisement partners and corporate sponsors; auditing; collection
          agencies; and credit card processing; {'\n'}• With the appropriate
          authorities if we believe disclosure is necessary and appropriate to
          prevent physical, financial, or other harm, injury, or loss, including
          to protect against fraud or credit risk; {'\n'}• With legal, governmental,
          or judicial authorities as instructed or required by those authorities
          and applicable laws, or in relation to a legal activity, such as in
          response to a subpoena or investigation of suspected illicit or
          illegal activities, or where we believe in good faith that users may
          be engaged in illicit or illegal activities, or where we are bound by
          contract or law to enable a network partner to comply with applicable
          laws; {'\n'}• With necessary third parties in connection with, or during
          negotiations for, an acquisition, merger, asset sale, or other similar
          business transfer that involves all or substantially all of our assets
          or functions where personal information is transferred or shared as
          part of the business assets; {'\n'}• With your consent or at your direction,
          such as when you choose to share information or publicly post content
          and reviews (for example, social media posts); and {'\n'}• With persons of
          your choosing and at your discretion, should the Services you are
          subscribed to allow that functionality. In addition, TrueGets may
          disclose personal information as follows. {'\n'}• To Your Matches. As an
          integral part of providing the TrueGets Service, we will disclose your
          profile information (including, but not limited to, last login date,
          whether you are currently online, your compatibility score) to your
          matches. Photos and other profile information posted by you will be
          available to subscribers that are matched with you. We never share
          your contact information with your matches. {'\n'}• To Comply with Valid
          Legal Requests. You acknowledge and agree that we may disclose
          information you provide if required to do so by law, or if we, in our
          sole discretion, believe that disclosure is reasonable to (1) comply
          with the law, requests or orders from law enforcement, or any legal
          process (whether or not such disclosure is required by applicable
          law); (2) protect or defend TrueGets’s, or a third party’s, rights or
          property; or (3) protect someone’s health or safety, such as when harm
          or violence against any person (including you) is threatened. {'\n'}• To
          Protect Abuse Victims. Notwithstanding any other provision of this
          Privacy Policy or our Terms and Conditions of Service, we reserve the
          right, but have no obligation, to disclose any information that you
          submit to the Services, if in our sole opinion, we suspect or have
          reason to suspect, that the information involves a party who may be
          the victim of abuse in any form. Abuse may include, without
          limitation, elder abuse, child abuse, spousal abuse, neglect, or
          domestic violence. Information may be disclosed to authorities that
          we, in our sole discretion, deem appropriate to handle such
          disclosure. Appropriate authorities may include, without limitation,
          law enforcement agencies, child protection agencies, or court
          officials. You hereby acknowledge and agree that we are permitted to
          make such disclosure. {'\n'}• To Trusted Third Parties By Us. We may share
          your information with third parties, but not in a manner that would
          reveal your identity. We may share your personal information,
          sometimes in conjunction with non-identifying information, with
          service providers that may be associated with us to perform functions
          on our behalf. For example, outsourced customer care agents or
          technology assistants may need access to your information to perform
          services for you. Your information will be treated as private and
          confidential by such service providers and not used for any other
          purpose than we authorize. {'\n'}• To Transfer As a Result of Sale of
          Business. As we develop our business, we may buy or sell assets and,
          depending on the transaction, your personal information may be one of
          the transferred assets. In the event that we are acquired by another
          company, your personal information may be part of the assets
          transferred to the acquiring party. If this occurs, you will be
          notified if there are any material changes to the way your personal
          information is collected or used. {'\n'}• To other Locales. We process all
          information, including your personal information, via our servers and
          networks located in the United States and Germany. Additionally, some
          of our service providers may be located in other jurisdictions. By
          using our services and expressly assenting to this privacy policy, you
          have consented to the transfer of your personal information solely for
          the purpose of providing you the services for which you have
          registered or to which you have subscribed. We take all reasonable
          steps to ensure that all overseas recipients will not hold, use or
          disclose your personal information inconsistently with applicable law.
          {'\n'}6. Third-Party Advertising We may use third-party advertising agencies
          or other service providers to serve ads on our website on behalf of
          TrueGets. These companies may employ cookies or pixels to measure
          advertising effectiveness. Any information that these third parties
          collect via cookies and pixels is anonymous. Some of these third-party
          advertising agencies may be members of the Digital Advertising
          Alliance , which offers you the option to opt out of ad targeting from
          its member agencies by following the procedures listed here or for
          applications, access the AppChoices website here. We will only share
          your information with third parties in the ways defined in this
          Privacy Policy. {'\n'}7. Age Restrictions We only accept registrations to
          our Services from users who are 18 years or older (or the age of
          majority in applicable jurisdictions), and any information we may
          receive from users we believe to be under the age of 18 will be purged
          from our database. If you believe that we may have collected any such
          personal information through our Services, please notify us as
          specified below. {'\n'}8. Custom Audience We may also use services provided
          by third-party platforms (such as social networking and other
          websites) to serve targeted advertisements on such platforms to you or
          others, and we may provide a hashed version of your email address or
          other information to the platform provider for such purposes. To
          opt-out of the use of your information for such purposes, please email
          us at connect@truegets.com. {'\n'}9. Security We store information in a
          combination of electronic storage facilities, paper-based files and
          other records. While we cannot guarantee your personal information is
          completely secure at all times, we have administrative,
          organizational, technical, and physical security measures in place to
          help protect against the loss, misuse and alteration of the
          information collected and processed. These measures include the use of
          firewalls, digital certificates, Security Socket Layer (SSL)and
          encryption technology during credit card transactions and
          administrative access to site data, as well as other proprietary
          security measures which are applied to all repositories and transfers
          of user information. {'\n'}10. “Do Not Track” Signals We do not process or
          respond to web browsers’ “do not track” signals or other similar
          transmissions that indicate a request to disable online tracking of
          users who use or visit our Websites. You may, however, disable certain
          tracking as discussed above (e.g., by disabling cookies). Please
          consult the “Help” section of your internet browser for more
          information. {'\n'}11. Links to or Access from Other Sites You may be able
          to access your account or content of your account from third party
          websites, such as social networking sites (e.g., Facebook), by way of
          various applications. These services will authenticate your identity
          and provide you with the option to share certain personal information
          with us such as your name and email address to pre-populate our
          registration form. The privacy policies and practices of such sites in
          connection with information you disclose on such sites may differ from
          the practices of TrueGets as set forth in this Privacy Policy. We are
          not responsible for the privacy policies or practices or the content
          of any other websites that may provide access to, or be linked to or
          from, our Services, including that of any social networking sites.
          Please be aware that, should you choose to use the Facebook or Apple
          login feature for your TrueGets account, you should not permit other
          persons to use your Facebook or Apple accounts or give other persons
          your login information for those websites. (See also Terms &
          Conditions, Section 2(e) (“Exclusive Use”).) {'\n'}12. Choice/Opt-Out{'\n'} You
          may use the following options for removing your information from our
          e-mail database if you wish to opt out of receiving promotional
          emails. {'\n'}1. Click on the "unsubscribe" link on the bottom of the
          e-mail; {'\n'}2. Send mail to the following postal address letting us know
          which promotional e-mails you wish to opt-out of: TrueGets, Office
          195, Sector 104 Gurgaon,Haryana India {'\n'}3. For the TrueGets Singles
          Service, select our Help link from your account home page and search
          our FAQ's to find the answer you are looking for, or send us an e-mail
          and our Customer Care agents will be happy to assist you; or 4. For
          any Services that allow you to control which e-mails you receive, go
          to the Notifications page, and uncheck the undesired promotions. {'\n'}13.
          Updating / Deleting Your Personal Information {'\n'}TrueGets provides users
          the following options to access, change, correct, update or delete
          information previously submitted to us. {'\n'}1. Certain information (such
          as match settings, billing account/ payment method, and email address
          updates) may be updated by logging in to your account and updating
          directly. {'\n'}2. TrueGets requires that some personal information updates
          (such as date of birth changes) be processed by our customer care
          group for verification purposes and to protect other members. In order
          to make such personal information updates, please contact Customer
          Care at this link for further assistance. {'\n'}3. To request deletion of
          your personal account information, please access our FAQ’s and follow
          the process under the relevant account deletion FAQ. Requests for
          personal information deletion will be processed promptly. {'\n'}14.
          Retention and Storage of Your Personal Information We retain your
          personal information for as long as necessary to fulfill the
          purpose(s) for which it was collected and to comply with applicable
          laws, and your consent to such purpose(s) remains valid after
          termination of your relationship with us. Except for information
          required for accounting or record-keeping purposes, we will
          automatically delete your personal information after 24 months of
          inactivity in a Basic Membership (as defined in the Agreement) unless
          we have a valid reason to retain such information. Your personal
          information may be processed and stored outside of the jurisdiction or
          country in which you reside by us, an affiliate or an unaffiliated
          service provider for the purposes set out in this Privacy Policy and,
          under the laws of these other jurisdictions, in certain circumstances
          foreign courts, law enforcement agencies or regulatory agencies may be
          entitled to access your personal information. {'\n'}15. Contacting Us {'\n'}If you
          have any questions about this Privacy Policy or our privacy practices
          , you can contact us by writing to: TrueGets 195, Street 3 Sector 104
          Gurgaon, HR {'\n'}Or you can reach us by email at: connect@truegets.com. {'\n'}16.
          Dispute Resolution If you have an unresolved privacy or data use
          concern that we have not addressed satisfactorily, please contact us
          at the address or email address listed above. Contact for More
          Information or Questions? If you have any questions about this section
          or about exercising your rights described above, you can contact us by
          mailing us at: TrueGets,.{'\n'} 195, Sector 104, Gurgaon HR {'\n'}Or you can reach
          us by email at: connect@truegets.com. {'\n'}18. Effective Date This privacy
          statement was last revised on May , 2021. Copyright © 2021 TrueGets,.
          All Rights Reserved. TRUEGETS, and other marks, colors, and images are
          registered and common law trademarks of TrueGets. Other trademarks and
          brands are the property of their respective owners.
        </Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ff389c',
    height: 70,
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  text: {
    alignSelf: 'center',
    fontSize: 18,
    marginTop: '4%',
    lineHeight: 25,
    letterSpacing: 0.1,
  },
  text2: {
    alignSelf: 'center',
    fontSize: 18,
    marginTop: '4%',
    lineHeight: 25,
    letterSpacing: 0.1,
    fontWeight: 'bold',
    color: '#38393b',
  },
  text3: {
    alignSelf: 'center',
    fontSize: 18,
    marginTop: '4%',
    lineHeight: 25,
    letterSpacing: 0.1,
    marginBottom:'10%'
  },
});
