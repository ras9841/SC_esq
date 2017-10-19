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
      <li> JD, 1984 </li>
      <li> Note Editor Duke Law Journal </li>
    </ul>
    Wake Forest University
    <ul>
      <li> BA (History), 1980 </li>
      <li> Phi Beta Kappa </li>
    </ul>
    Albion High School
    <ul>
      <li>Graduating class of '76</li>
      <li>Alumni Association Member</li>
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
    Albion Area
    <ul>
      <li> Albion Central School District Board of Education (past) </li>
      <li> Albion Elks Club (present) </li>
      <li> Albion Lions Club (present) </li>
      <li> Albion Rotary Club President & Director (past) </li>
      <li> Albion Youth Basketball & Baseball Coach (present) </li>
      <li> Village of Albion Historic Preservation Commission Chairperson (present) </li>
    </ul>
  </div>
  <div>
    Orleans County and New York State
    <ul>
      <li> Orleans County Youth Board (past) </li>
      <li> Orleans County Attorney for the Child Panel (present) </li>
      <li> Orleans County Bar Association (present) </li>
      <li> Orleans County Bar Association President (present) </li>
      <li> New York State Bar Association (present) </li>
      <li> New York State House of Delegates (past) </li>
      <li> American Bar Association (present) </li>
      <li> Eight Judicial District Grievance Committee (past) </li>
      <li> Surrogate Decision-Making Committee (past) </li>
    </ul>
  </div>
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
      caption: "Sandy Church, Esq",
      subcaption: "2017 Candidate for Orleans County Judge"
    }
  },
  {
    title: "Education",
    content: education(),
    image: {
      src: "sandy_profile.jpg",
      caption: "Sandy Church, Esq",
      subcaption: "2017 Candidate for Orleans County Judge"
    }
  },
  {
    title: "Local Experience",
    content: local_exp(),
    image: {
      src: "sandy_profile.jpg",
      caption: "Sandy Church, Esq",
      subcaption: "2017 Candidate for Orleans County Judge"
    }
  },
  {
    title: "Local Involvement",
    content: loc_inv(),
    image: {
      src: "sandy_profile.jpg",
      caption: "Sandy Church, Esq",
      subcaption: "2017 Candidate for Orleans County Judge"
    }
  },
  {
    title: "Awards and Endorsements",
    content: awards_endor(),
    image: {
      src: "sandy_profile.jpg",
      caption: "Sandy Church, Esq",
      subcaption: "2017 Candidate for Orleans County Judge"
    }
  }
];

export default stepper_data;
