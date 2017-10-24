import React from 'react';
import LegalExperience from '../LegalExperience'

let at_a_glance = () => (
  <div>
    Hello!
    <p>
    I'm Sanford (Sandy) A. Church, the Republican Candidate for Orleans County Court Judge.
    My family has been a part of the Orleans County community for decades. I am a fifth-generation
    attorney in Orleans County. I live in Albion with Diane, my wife of 29 years, and my dog Daisy. My two children, Ben and Molly, grew
    up in Albion and are both Albion High School graduates.
    </p>
    <p>
    I started practicing law in 1985. During my 32 years working in Orleans County,
    I have appeared in each of the of courts over which the County Court Judge presides.
    </p>
  </div>
);

let education = () => (
  <div className="longList">
    Duke University School of Law
    <ul>
      <li> Juris Doctor, 1984 </li>
      <li> Duke Law Journal, Note Editor </li>
    </ul>
    Wake Forest University
    <ul>
      <li> Bachelor of the Arts: History, 1980 </li>
      <li> Phi Beta Kappa, Member </li>
    </ul>
    Albion High School
    <ul>
      <li>Graduating class, 1976</li>
      <li>Alumni Association, Member</li>
    </ul>
  </div>
);

let local_exp = () => (
  <div>
    <div>
      I have worked as an Orleans County attorney for over 30 years, practiced
      law as Assistant District Attorney for the last four Orleans County District Attorneys,
      and served as the Orleans County Public Defender for the past 20 years. Additionally,
      I have maintained a private practice and have conducted research, drafted decisions, and
      conducted pretrial conferences as a Court Attorney for judges.
    </div>
    <br/>
    <div>
      I have experience in all Orleans County Courts.
    </div>
    <br/>
    <LegalExperience/>
  </div>
);

let loc_inv = () => (
  <div className="longList">
    <ul>
      <li>Albion Central School District Board of Education, past member</li>
      <li>Hospice of Orleans, past Board member for 9 years</li>
      <li>Village of Albion Historic Preservation Commission, current chairperson</li>
      <li>Orleans County Youth Board, past member and recipient of Eileen Heye Adult Volunteer Award</li>
      <li>Albion Lions Club, current member</li>
      <li>Albion Elks Lodge #1006, current member</li>
      <li>Albion Rotary Club, past president and Paul Harris Fellow</li>
      <li>Rotary 5th and 6th grade basketball program - ran program for over 20 years</li>
      <li>Albion Midget League Coach for 15 years</li>
    </ul>
  </div>
);

let prof_act = () => (
  <div className="longList">
    <ul>
      <li>Orleans County Attorney for the Child Panel, current member (over 15 years)</li>
      <li>Orleans County Bar Association, current member and past president</li>
      <li>New York State Bar Association, current member and past member of House of Delegates</li>
      <li>American Bar Association, current member</li>
      <li>Eighth Judicial District Grievance Committee, past member</li>
      <li>Surrogate Decision-Making Committee, current member</li>
      <li>Orleans County Point Person for Veterans Defense Program (New York State Defenders Association) (current)</li>
    </ul>
  </div>
);

let awards_endor = () => (
  <div>
    <div className="longList">
    Awards
    <ul>
      <li> Orleans County Youth Board: Eileen Heye Adult Volunteer </li>
      <li> Albion Rotary Club: Paul Harris Fellow </li>
    </ul>
    </div>
    <div className="longList">
      Recent Endorsements
      <ul>
        <li>Hon. James P. Punch</li>
        <li>Attorneys: Kevin Allen, James Bell,	Joanne Best, Conrad Cropsey,
       John Gavenda, Dana Graber, Edward Grabowski, Doug Heath, Tom Mack, Lance Mark,
       Jeff Martin, Andrew Meier, Michael O’Keefe, Nathan Pace, David Schubel</li>
       <li> Orleans County Republican Party </li>
      </ul>
    </div>
  </div>
);

const stepper_data = [
  {
    title: "At a glance",
    content: at_a_glance(),
    image: {
      src: "sandy_profile.jpg",
      caption: "Sanford Church, Esq",
      subcaption: "2017 Candidate for Orleans County Judge"
    }
  },
  {
    title: "Education",
    content: education(),
    image: {
      src: "sandy_profile.jpg",
      caption: "Sanford Church, Esq",
      subcaption: "2017 Candidate for Orleans County Judge"
    }
  },
  {
    title: "Legal experience",
    content: local_exp(),
    image: {
      src: "sandy_profile.jpg",
      caption: "Sanford Church, Esq",
      subcaption: "2017 Candidate for Orleans County Judge"
    }
  },
  {
    title: "Community service",
    content: loc_inv(),
    image: {
      src: "sandy_profile.jpg",
      caption: "Sanford Church, Esq",
      subcaption: "2017 Candidate for Orleans County Judge"
    }
  },
  {
    title: "Professional activities",
    content: prof_act(),
    image: {
      src: "sandy_profile.jpg",
      caption: "Sanford Church, Esq",
      subcaption: "2017 Candidate for Orleans County Judge"
    }
  },
  {
    title: "Endorsements",
    content: awards_endor(),
    image: {
      src: "sandy_profile.jpg",
      caption: "Sanford Church, Esq",
      subcaption: "2017 Candidate for Orleans County Judge"
    }
  }
];

export default stepper_data;
