import { Images } from './images';

const Designation = {
  FACULTY_ADVISOR: 'Faculty-Advisor',
  CONVENER: 'Convener',
  CO_CONVENER: 'Co-Convener',
  TECHNICAL: 'Technical Team',
  ALUMINI: 'Alumini Interaction Team',
  CULTURAL: 'Cultural and Outreach Team',
  WEB_DEVELOPER: 'Web Development Team',
};

const Members = [
  {
    designations: [Designation.FACULTY_ADVISOR],
    img: Images.FACULTY1_ASHWINI_KUMAR,
    name: 'Aswini Kumar Sharma',
    fb: 'https://www.facebook.com',
    insta: 'https://www.instagram.com',
  },
  {
    designations: [Designation.CONVENER],
    img: Images.ANURAG_JAISWAL,
    name: 'Anurag Jaiswal',
    fb: 'https://www.facebook.com/anurag.jaiswal.50552',
    insta: 'https://www.instagram.com/anurag_0417',
  },
  {
    designations: [Designation.TECHNICAL, Designation.WEB_DEVELOPER],
    img: Images.AJAY_MATI,
    name: 'Ajaya Mati',
    fb: 'https://www.facebook.com/profile.php?id=100010825184962',
    insta: 'https://www.instagram.com/freee.guy/',
  },
  {
    designations: [Designation.WEB_DEVELOPER],
    img: Images.RUPESH_PRAJAPATI,
    name: 'Rupesh prajapati',
    fb: 'https://www.facebook.com/profile.php?id=100059645710185',
    insta: 'https://www.instagram.com/Ig_rupeshprajapati',
  },

  {
    designations: [Designation.CULTURAL],
    img: Images.JOGESH_GURJAR,
    name: 'Jogesh Gurjar',
    fb: 'https://www.facebook.com/jogesh.gurjar.12',
    insta: 'https://www.instagram.com/jogesh_08',
  },
  {
    designations: [Designation.ALUMINI],
    img: Images.DHRUV_GROVER,
    name: 'Dhruv Grover',
    fb: 'https://www.facebook.com/dhruv.grover.50/',
    insta: 'https://www.instagram.com/dhruv.grover.50/',
  },
  {
    designations: [Designation.CO_CONVENER],
    img: Images.DEORE_ROMAN,
    name: 'Roman Deore ',
    fb: 'https://www.facebook.com/roman.deore ',
    insta: 'https://www.instagram.com/romandeore?r=nametag ',
  },
  {
    designations: [Designation.TECHNICAL],
    img: Images.SARVESH_OMPRAKASH,
    name: 'Sarvesh Raut',
    fb: 'https://www.facebook.com/profile.php?id=100008867118073',
    insta: 'https://www.instagram.com/sarvesh_r.07/',
  },
  {
    designations: [Designation.TECHNICAL],
    img: Images.PUNIT_AGRAWAL,
    name: 'Punit Agarwal',
    fb: 'https://www.facebook.com/9795981977',
    insta: 'https://www.instagram.com/Punit17541',
  },
  {
    designations: [Designation.WEB_DEVELOPER],
    img: Images.PRAKHAR_PRATAP_SINGH,
    name: 'Prakhar Pratap Singh',
    fb: 'https://www.facebook.com/profile.php?id=100056996066849',
    insta: 'https://www.instagram.com/47018240423',
  },
  {
    designations: [Designation.CULTURAL],
    img: Images.PANKAJ_YADAV,
    name: 'Pankaj Yadav',
    fb: 'https://www.facebook.com/yaduvanshi.rao.37/',
    insta: 'https://www.instagram.com/_prince._.yadav_/',
  },
  {
    designations: [Designation.ALUMINI],
    img: Images.ARYAMAN_BEHERA,
    name: 'Aryaman Behera',
    fb: 'https://www.facebook.com/aryaman.behera',
    insta: 'https://www.instagram.com/aryaman._.titan/',
  },
  {
    designations: [Designation.TECHNICAL],
    img: Images.SHREYANSH_SAXENA,
    name: 'Shreyansh Saxena',
    fb: 'https://www.facebook.com/shreyansh.saxena.543/',
    insta: 'https://www.instagram.com/shreyansh4016/',
  },
  {
    designations: [Designation.WEB_DEVELOPER],
    img: Images.AHIRE_ABHAY_MADHUKAR,
    timestamp: '2021-08-13T09:35:32.039Z',
    name: 'Abhay Ahire',
    fb: 'https://www.facebook.com/abhay.ahire.1297/',
    insta: 'https://www.instagram.com/abhaymadhukarahire/',
  },
  {
    designations: [Designation.TECHNICAL],
    img: Images.RAKSHIT_AWASTHI,
    name: 'Rakshit  Awasthi',
    fb: ' ',
    insta: 'https://www.instagram.com/0xr4ksh1t',
  },
  {
    designations: [Designation.TECHNICAL],
    img: Images.AAYUSH_AGARWAL,
    name: 'Aayush Agarwal',
    fb: 'https://www.facebook.com/aayush.phenomenal.351756',
    insta: 'https://www.instagram.com/r._ayush',
  },
  {
    designations: [Designation.ALUMINI],
    img: Images.VIJAY_GOLANI,
    name: 'Vijay Golani',
    fb: 'https://www.facebook.com/vijay.golani.581',
    insta: 'https://www.instagram.com/vijaygolani2112',
  },
  {
    designations: [Designation.ALUMINI],
    img: Images.VIJAY_GOLANI,
    name: 'Meda Radheesh Sharma',
    fb: 'https://www.facebook.com/radheesh.sharma.3',
    insta: ' ',
  },
  {
    designations: [Designation.WEB_DEVELOPER],
    img: Images.ABHINAV_AGARWAL,
    name: 'Abhinav Agarwal',
    fb: 'https://www.facebook.com/abhinav.aggarwal.370/',
    insta: 'https://www.instagram.com/__abhinav_agarwal__/',
  },
];

const MemberSection = {};
Members.forEach((member) => {
  member.designations.forEach((designation) => {
    if (MemberSection[designation] && MemberSection[designation].length)
      MemberSection[designation].push(member);
    else MemberSection[designation] = [member];
  });
});

export { MemberSection, Designation };
