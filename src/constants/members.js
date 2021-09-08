import { Images } from "./images";

const Designation = {
  FACULTY_ADVISOR: 'Faculty-Advisor',
  CONVENER: 'Convener',
  CO_CONVENER: 'Co-Convener',
  TECHNICAL: 'Technical Team',
  ALUMINI: 'Alumini Interaction Team',
  CULTURAL: 'Cultural and Outreach Team',
};

const Members = [
  {
    designation: Designation.FACULTY_ADVISOR,
    img: Images.FACULTY1_ASHWINI_KUMAR,
    name: 'Aswini Kumar Sharma',
    fb: 'https://www.facebook.com',
    insta: 'https://www.instagram.com',
  },
];

const MemberSection = {
};
Members.map((member) => {
  if (
    MemberSection[member.designation] &&
    MemberSection[member.designation].length
  )
    MemberSection[member.designation].push(member);
  else MemberSection[member.designation] = [member];
});

export { MemberSection };
