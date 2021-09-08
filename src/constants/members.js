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

  // {
  //   name: 'Jogesh Gurjar',
  //   fb: 'https://www.facebook.com/jogesh.gurjar.12',
  //   insta: 'https://www.instagram.com/jogesh_08',
  //   img: Images.JOGESH_GURJAR,
  //   designation: 'Head (Cultural and Outreach team)',
  // },
  // {
  //   name: 'Dhruv Grover',
  //   fb: 'https://www.facebook.com/dhruv.grover.50/',
  //   insta: 'https://www.instagram.com/dhruv.grover.50/',
  //   img: Images.DHRUV_GROVER,
  //   designation: 'Executive Member (Alumni Interaction Cell)',
  // },
  // {
  //   name: 'Roman Deore ',
  //   fb: 'https://www.facebook.com/roman.deore ',
  //   insta: 'https://www.instagram.com/romandeore?r=nametag ',
  //   img: Images.DEORE_ROMAN,
  //   designation: 'Co-convener',
  // },
  // {
  //   name: 'Sarvesh Raut',
  //   fb: 'https://www.facebook.com/profile.php?id=100008867118073',
  //   insta: 'https://www.instagram.com/sarvesh_r.07/',
  //   img: Images.SARVESH_OMPRAKASH,
  //   designation: 'Technical team member',
  // },
  // {
  //   name: 'Punit Agarwal',
  //   fb: 'https://www.facebook.com/9795981977',
  //   insta: 'https://www.instagram.com/Punit17541',
  //   img: Images.PUNIT_AGRAWAL,
  //   designation: 'M.tech(Chemical Engineering)',
  // },
  // {
  //   name: 'Prakhar Pratap Singh',
  //   fb: 'https://www.facebook.com/profile.php?id=100056996066849',
  //   insta: 'https://www.instagram.com/47018240423',
  //   img: Images.PRAKHAR_PRATAP_SINGH,
  //   designation: 'Webdeveloper',
  // },
  // {
  //   name: 'Pankaj Yadav',
  //   fb: 'https://www.facebook.com/yaduvanshi.rao.37/',
  //   insta: 'https://www.instagram.com/_prince._.yadav_/',
  //   img: Images.PANKAJ_YADAV,
  //   designation: 'Executive-- Cultural and Outreach team',
  // },
  // {
  //   name: 'Aryaman Behera',
  //   fb: 'https://www.facebook.com/aryaman.behera',
  //   insta: 'https://www.instagram.com/aryaman._.titan/',
  //   img: Images.ARYAMAN_BEHERA,
  //   designation: 'Head of Alumni Talks',
  // },
  // {
  //   name: 'Shreyansh Saxena',
  //   fb: 'https://www.facebook.com/shreyansh.saxena.543/',
  //   insta: 'https://www.instagram.com/shreyansh4016/',
  //   img: Images.SHREYANSH_SAXENA,
  //   designation: 'Executive',
  // },
  // {
  //   timestamp: '2021-08-13T09:35:32.039Z',
  //   name: 'Abhay Ahire',
  //   fb: 'https://www.facebook.com/abhay.ahire.1297/',
  //   insta: 'https://www.instagram.com/abhaymadhukarahire/',
  //   img: Images.AHIRE_ABHAY_MADHUKAR,
  //   designation: 'Webdeveloper',
  // },
  // {
  //   name: 'Rakshit  Awasthi',
  //   fb: ' ',
  //   insta: 'https://www.instagram.com/0xr4ksh1t',
  //   img: Images.RAKSHIT_AWASTHI,
  //   designation: 'Technical Team',
  // },
  // {
  //   name: 'Aayush Agarwal',
  //   fb: 'https://www.facebook.com/aayush.phenomenal.351756',
  //   insta: 'https://www.instagram.com/r._ayush',
  //   img: Images.AAYUSH_AGARWAL,
  //   designation: 'Member of Technical Team ',
  // },
  // {
  //   name: 'Vijay Golani',
  //   fb: 'https://www.facebook.com/vijay.golani.581',
  //   insta: 'https://www.instagram.com/vijaygolani2112',
  //   img: Images.VIJAY_GOLANI,
  //   designation: 'Executive alumni interaction group',
  // },
  // {
  //   name: 'Meda Radheesh Sharma',
  //   fb: 'https://www.facebook.com/radheesh.sharma.3',
  //   insta: ' ',
  //   img: Images.VIJAY_GOLANI,
  //   designation: 'Alumni interaction',
  // },
  // {
  //   name: 'Abhinav Agarwal',
  //   fb: 'https://www.facebook.com/abhinav.aggarwal.370/',
  //   insta: 'https://www.instagram.com/__abhinav_agarwal__/',
  //   img: Images.ABHINAV_AGARWAL,
  //   designation: 'Webdeveloper',
  // },
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
