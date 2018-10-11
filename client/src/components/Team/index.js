import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import styles from "./index.css";

const Selector = () => (
  <div className={styles.Selector + " container"}>
    <NavLink strict activeClassName={styles.SelectorActive} to="/team">
      MANAGMENT TEAM
    </NavLink>
    <NavLink strict activeClassName={styles.SelectorActive} to="/team/growers">
      CANNABIS DREAM TEAM
    </NavLink>
  </div>
);

const TeamItem = ({ title, subtitle, body, image }) => (
  <div className={styles.TeamItem}>
    <div
      className={styles.TeamItemImage}
      style={{
        backgroundImage: image
          ? `url(${image})`
          : `url(${require("./images/blank.png")})`
      }}
    />
    <div className={styles.TeamItemContent + " container"}>
      <div className={styles.TeamItemTitle}>{title}</div>
      <div className={styles.TeamItemSubtitle}>{subtitle}</div>
      <div className={styles.TeamItemBody}>{body}</div>
    </div>
  </div>
);

const Consulting = () => (
  <div className="container">
    <TeamItem
      title="Tegan Adams"
      image={require("./images/tegan.png")}
      subtitle="CEO"
      body="Tegan is the CEO of New Maple holdings, a diversified cannabis company operating both as a cultivation partner with Northern Green Canada, and as the owner of a late stage application passed security near Toronto. Tegan's background is in agriculture, and she received both her BSc and MSc in agriculture & economics from the University of British Columbia. She started in the cannabis industry in 2014, helping with business, strategy and licensing for new applicants in both public and private marketplaces. After pitching and co-launching Canada's first university course on cannabis, she joined Eurofins scientific a Health Canada accredited laboratory which has completed close to 150 submissions. Working with New Maple, Tegan's focus will be on helping the company expand both locally and internationally through strategy and innovation.
"
    />
    <TeamItem
      title="Karim Nehme"
      image={require("./images/newmaple-12.jpg")}
      subtitle="President, Co-Founder and Member of the Board of Directors"
      body="Karim serves as both Director and President of New Maple’s operations. Karim has an MBA from the Schulich School of Business (with distinction) and his experience includes preparing bids for USD 20 billion + worth of projects with AECOM and implementing ISO 9001 standards for Charger Logistics’ North American operations."
    />
    <TeamItem
      title="Don-Shane Taylor"
      image={require("./images/newmaple-1.jpg")}
      subtitle="Operations Management, Co-Founder and Member of the Board of Directors"
      body="Don has over ten years of experience working in Canada’s medical cannabis space, including for the award-winning producer, MedReleaf, (TSE: LEAF).  As one of MedReleaf’s first security cleared personnel, Don helped set up their logistics department where he oversaw millions of dollars of orders on a monthly basis and trained dozens of staff including Health Canada auditors on the best cannabis production practices. As a member of the Board of Directors, Don brings his knowledge and reputation as a seed-to-sale specialist."
    />
    {/* <TeamItem title="Miki Batch" image={require("./images/newmaple-13.jpg")} subtitle="Business Development, Co-Founder and Member of the Board of Directors" body="After obtaining his HBA in Economics from the University of Toronto, Miki went on to gain international experience in the food and sanitation industry, primarily in the Caribbean and Europe. Having worked with highly regulated food service giants such as Costco and Hilton Hotels & Resorts, Miki now uses his skill set as a Director and heads New Maple’s Business Development division."/> */}
    <TeamItem
      title="Kam Aldabbagh"
      image={require("./images/newmaple-8.jpg")}
      subtitle="Director"
      body="Having graduated with an HBA in Marketing and Advertising from the University of Guelph, Kam went on to start a successful international trading company in Dubai called Mettco. Mettco is a parent company to multiple brands and franchises across the Middle East including ACE hardware and other construction supply companies.  With global experience in corporate development, he has established and sustained companies within the retail and supply-chain industries and has proven to be a valuable asset as a Director of New Maple."
    />
  </div>
);

const Growers = () => (
  <div className="container">
    <TeamItem
      title="Nadeem Khakwani"
      image={require("./images/newmaple-4.jpg")}
      subtitle="Cultivation and Cloning Lead"
      body="Nadeem is a trained ISO 9001 specialist and was security-cleared as a Responsible Person in Charge at one of Canada’s leading licensed producers. Among his past accomplishments, Nadeem was a flower-room lead who oversaw over twenty employees, 17,000 cannabis plants, and 5,000 cannabis clones at a time. "
    />
    <TeamItem
      title="Craig Coverley"
      image={require("./images/newmaple-3.jpg")}
      subtitle="Production Floor Lead"
      body="As former head grower at one of Canada’s first and leading Licensed Producers, Craig was instrumental in the management of the cultivation process, achieving a remarkable yield of 0.16 lb per sq. ft.With his valuable hands-on experience and extensive knowledge, Craig is widely regarded as a leader in cannabis growing methodologies."
    />
    <TeamItem
      title="Leo Sivak"
      image={require("./images/newmaple-2.jpg")}
      subtitle="Processing and Oil Extraction"
      body="Leo is a veteran of the Canadian cannabis industry and an expert in producing plant derivatives and oil extracts. Over the years, he has consulted for numerous cannabis companies and worked to develop an industry-leading CBD oil at one of Canada’s first licensed producers"
    />
    <TeamItem
      title="Joe Yu"
      image={require("./images/newmaple-5.jpg")}
      subtitle="Mother Room Lead"
      body="From flower cultivation to plant cloning, Joe has trained personnel in various roles along the cannabis production process. In a true demonstration of his skill and composure, Joe held the critical position of mother room lead at one of Canada’s most reputable licensed producers where he directly oversaw and maintained the health of hundreds of mother plants. "
    />
    <TeamItem
      title="Jack Yu"
      subtitle="Plant Cultivation Lead"
      body="Jack is an expert in hydroponic horticulture systems, having studied biology at the University of Toronto and managed his own hydroponic equipment store for several years. Jack was the original Master Grower at one of Canada’s first licensed producers where he designed and operated state-of-the-art grow rooms, producing thousands of kilograms of award-winning cannabis, which now sells for over $15 per gram. "
    />
    <TeamItem
      title="Rhonda Gerrits"
      subtitle="Quality Assurance and Alternate Person in Charge (APIC)"
      body="Rhonda is an instructor and external trainer at Conestoga College’s Institute of Food Processing Technology, where she provides students and companies with training on food safety, HACCP and GMP standards. Rhonda holds a Bachelor of Science in food science and microbiology from the University of Guelph and is certified in HACCP 1 & 2, as well as Canadian food labelling guidelines and environmental monitoring and aseptic techniques. She has worked in a variety of roles including as a researcher with the University of Guelph and as a food safety coordinator and SQF practitioner with Woolwich Dairy "
    />
    <TeamItem
      title="Henry Pfaff"
      image={require("./images/newmaple-14.jpg")}
      subtitle="Production Assistant and Quality Assurance"
      body="Henry has ten years of experience as a quality assurance officer, most recently working as a meat inspector with the Ontario Ministry of Agriculture. He is knowledgeable of HACCP systems and is very familiar with the Food Safety and Quality Act. He holds a Bachelor of Science from the University of British Columbia and has studied plant science at the University of Sydney as well as medical science and cell biology and genetics at Western University in London, Ontario."
    />
  </div>
);

const Team = () => (
  <div className={styles.Team}>
    <Selector />
    <Switch>
      <Route path="/team/growers" component={Growers} />
      <Route path="/team" component={Consulting} />
    </Switch>
  </div>
);

export default Team;
