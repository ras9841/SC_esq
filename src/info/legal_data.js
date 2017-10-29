import React from 'react';
import FontIcon from 'material-ui/FontIcon';

const orleans_cc = () => (
  <div>
    The jurisdiction of this Court includes felony crimes and pistol permits.
    I have been involved in hundreds of felony cases in several positions:
    <ul>
      <li>
        Assistant District Attorney: responsibilities included
        felony prosecutions and Grand Jury presentations.
      </li>
      <li>
        Orleans County Public Defender: responsibilities include representing
        indigent defendants in felony prosecutions, administering the office, and
        supervising three assistants and two staff members. As part of this role,
        I work with the County Legislature, the Chief Administrative Officer, and the New York
        State Office of Indigent Legal Services to coordinate indigent defense in
        Orleans County.
      </li>
      <li>
        Member of the panel monitoring defendants’ progress in Drug Court.
      </li>
      <li>
        Representing applicants for pistol permits.
      </li>
    </ul>
  </div>
);

const orleans_fc = () => (
  <div>
    The jurisdiction of the Court includes child abuse and neglect, child custody,
    child support, paternity, adoption, Persons in Need of Supervision (PINS) and
    other types of cases involving children.  I have been involved in hundreds of family law cases,
    involving
    <ul>
      <li>
        Attorney for Child Panel (formerly called Law Guardian): appointed
        to represent children in many cases of every type
      </li>
      <li>
        Representing parents and other family members in cases involving their children
      </li>
      <li>
        Representing the Albion Central School District in prosecuting truants
      </li>
    </ul>
  </div>
);

const orleans_sc = () => (
  <div>
    The jurisdiction of this Court includes primarily Estates. In this area, I have
    <ul>
      <li>Represented litigants in numerous estate proceedings</li>
      <li>Served as a Guardian ad Litem, representing people with disabilities or whereabouts unknown when appointed by the Court</li>
    </ul>
  </div>
);

const supreme_court = () => (
    <div>
      This Court has jurisdiction over civil cases. My experience includes
      <ul>
        <li>Representing parents and children in divorce cases</li>
        <li>Being appointed by the Court to serve as a Referee in foreclosure actions</li>
        <li>
          Serving as a Court Evaluator to investigate and report on people who allegedly
          need a guardian to protect their interests
        </li>
      </ul>
    </div>
);

const county_ref = () => (
  <div>
    Worked for Judges in Orleans and Genesee Counties in County, Family,
    Surrogate’s and Supreme Courts.  Responsibilities included legal research,
    drafting decisions, conducting settlement conferences and presiding over
    child custody cases.
  </div>
);

const legal_data = [
  {
    name: "Orleans County Court",
    icon: <FontIcon className="material-icons">account_balance</FontIcon>,
    details: orleans_cc()
  },
  {
    name: "Orleans County Family Court",
    icon: <FontIcon className="material-icons">people</FontIcon>,
    details: orleans_fc()
  },
  {
    name: "Orleans County Surrogate’s Court",
    icon: <FontIcon className="material-icons">home</FontIcon>,
    details: orleans_sc()
  },
  {
    name: "Supreme Court",
    icon: <FontIcon className="material-icons">gavel</FontIcon>,
    details: supreme_court()
  },
  {
    name: "Court Attorney/Referee",
    icon: <FontIcon className="material-icons">work</FontIcon>,
    details: county_ref()
  }
];

export default legal_data;
