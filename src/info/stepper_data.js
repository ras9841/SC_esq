import React from 'react';
import ChipArray from '../ChipArray'

let at_a_glance = () => (
  <div>
    Hello!
    <p>
    I'm Sanford (Sandy) A. Church, the Republican Candidate for Orleans County Court Judge.
    My family has been a part of the Orleans County community for decades, and my office inspect
    in Albion on East Bank Street has been in the family for five generations. I live in Albion
    with Diane, my wife of 29 years, and my dog Daisy. My two children, Ben and Molly, grew
    up in Albion and are both Albion High School graduates.
    </p>
    <p>
    I started practicing law in 1985 and have been part of the Orleans County Bar
    Association for over 15 years. During my 32 years working in the area, I have served
    in each of the of the Courts that the County Court Judge presides.
    </p>
  </div>
);

let education = () => (
  <div>
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

let local_exp = () => {
  let data = [
    "County Court", "Assistant District Attorney", "Public Defender",
    "Drug Treatment Court", "Pistol Permits", "Court Attorney", "Integrated Domestic Violence",
    "Family Court", "Law Guardian", "Adult Parties", "School Attorney", "Court Referee",
    "Surrogate’s Court", "Supreme Court", "Court Evaluator"
  ];
  return (
    <div>
      <ChipArray data={data}/>
    </div>
  );
}

let loc_inv = () => (
  <div>
    <div>
    Albion
    <ul>
      <li> Board of Education Member (past) </li>
      <li> Elks Club Member (present) </li>
      <li> Lions Club Member (present) </li>
      <li> Rotary Club President & Director (past) </li>
      <li> Youth Basketball & Baseball Coach (present) </li>
      <li> Village Historic Preservation Commission Chairperson (present) </li>
    </ul>
  </div>
  <div>
    Orleans County
    <ul>
      <li> Youth Board Member (past) </li>
      <li> Attorney for the Child Panel (present) </li>
      <li> Bar Association Member (present) </li>
      <li> Bar Association President (present) </li>
      <li> Surrogate Decision-Making Committee (past) </li>
    </ul>
  </div>
  <div>
    New York State
    <ul>
      <li> Bar Association Member (present) </li>
      <li> House of Delegates Member (past) </li>
      <li> Eight Judicial District Grievance Committee (past) </li>
    </ul>
  </div>
  <div>
    United States
    <ul>
      <li> American Bar Association (present) </li>
    </ul>
  </div>
  <div style={{height: "5px"}}></div>
  </div>
);

let awards_endor = () => (
  <div>
    <div>
    Awards
    <ul>
      <li> Orleans County Youth Board: Eileen Heye Adult Volunteer </li>
      <li> Albion Rotary Club: Paul Harris Award </li>
    </ul>
    </div>
    <div>
      Recent Endorsements
      <ul>
        <li>Hon. James P. Punch</li>
        <li>Attorneys (Esq): Kevin Allen, James Bell,	Joanne Best, Conrad Cropsey,
       John Gavenda, Dana Graber, Edward Grabowski, Doug Heath, Tom Mack, Lance Mark,
       Jeff Martin, Andrew Meier, Michael O’Keefe, Nathan Pace, David Schubel</li>
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
    title: "Local experience",
    content: local_exp(),
    image: {
      src: "sandy_profile.jpg",
      caption: "Sanford Church, Esq",
      subcaption: "2017 Candidate for Orleans County Judge"
    }
  },
  {
    title: "Local involvement",
    content: loc_inv(),
    image: {
      src: "sandy_profile.jpg",
      caption: "Sanford Church, Esq",
      subcaption: "2017 Candidate for Orleans County Judge"
    }
  },
  {
    title: "Awards and endorsements",
    content: awards_endor(),
    image: {
      src: "sandy_profile.jpg",
      caption: "Sanford Church, Esq",
      subcaption: "2017 Candidate for Orleans County Judge"
    }
  }
];

export default stepper_data;
