import React from 'react';
import ChipArray from '../ChipArray'

let at_a_glance = () => (
  <div>
    Hello!
    <p>
    I am Sanford (Sandy) A. Church, the Republican Candidate for Orleans County Court Judge.
    My family has been a part of the Orleans County community for years, and my office at
    3 East Bank Street, Albion NY has been in the family for five generations.
    </p>
    <p>
    I started practicing law in 1985 and have been part of the Orleans County Bar
    Association for over 15 years. During my 32 years in the area, I have worked
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
    title: "Community Involvement",
    content: `
      Albion Central School District Board of Education (past),
      Albion Elks Club (present),
      Albion Lions Club (present),
      Albion Rotary Club President & Director (past),
      Albion Youth Basketball & Baseball Coach (present),
      Village of Albion Historic Preservation Commission Chairperson (present),
      Orleans County Youth Board (past)

      Orleans County Attorney for the Child Panel (present),
      Orleans County Bar Association (present),
      Orleans County Bar Association President (present),
      New York State Bar Association (present),
      New York State House of Delegates (past),
      American Bar Association (present)
      Eight Judicial District Grievance Committee (past)
      Surrogate Decision-Making Committee (past)
    `,
    image: {
      src: "sandy_profile.jpg",
      caption: "Sandy Church, Esq",
      subcaption: "2017 Candidate for Orleans County Judge"
    }
  },
  {
    title: "Awards and Endorsements",
    content: `
      Awards:
        Orleans County Youth Board, past member and Eileen Heye Adult Volunteer
        Albion Rotary Club, past president and recipient of Paul Harris Award
      Endorsements:
      Hon. James P. Punch Kevin Allen, Esq.
      James Bell, Esq.	Joanne Best, Esq Conrad Cropsey, Esq.
      John Gavenda, Esq. Dana Graber, Esq. Edward Grabowski, Esq. Doug Heath, Esq. Tom Mack, Esq. Lance Mark, Esq
      Jeff Martin, Esq. Andrew Meier, Esq.	Michael O’Keefe, Esq. Nathan Pace, Esq. David Schubel, Esq.
    `,
    image: {
      src: "sandy_profile.jpg",
      caption: "Sandy Church, Esq",
      subcaption: "2017 Candidate for Orleans County Judge"
    }
  }
];

export default stepper_data;
