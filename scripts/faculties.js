function createFacultyCard(name, affiliation, imageSrc, personalPage, needShortendAffliation) {
  const card = document.createElement("div");
  const max_affiliation_length = 60;
  const shortenedAffiliation = needShortendAffliation ? affiliation.length > max_affiliation_length ? affiliation.substring(0, max_affiliation_length) + "..." : affiliation : affiliation;
  card.className = "col-md-3 mb-4";
  card.innerHTML = `
        <div class="card faculty-card">
            <div class="card-img-container">
                <a href="${personalPage}" target="_blank">
                    <div class="square-image">
                        <img src="${imageSrc}" class="card-img-top" alt="${name}">
                    </div>
                </a>
            </div>
            <div class="card-body">
                <h5 class="card-title"><a href="${personalPage}" target="_blank">${name}</a></h5>
                <p class="card-text">${shortenedAffiliation}</p>
            </div>
        </div>
    `;
  return card;
}

// Function to add faculty cards to a section
function addFacultyCards(sectionId, facultyData) {
  const section = document.getElementById(sectionId);
  const row = document.createElement("div");
  const needShortendAffliation = window.innerWidth < 1000; 

  // row.className = "row";
  row.className = "row row-cols-2 row-cols-md-3 row-cols-lg-4";
  facultyData.forEach((data) => {
    const card = createFacultyCard(
      data.name,
      data.affiliation,
      data.imageSrc,
      data.personalPage,
      needShortendAffliation
    );
    row.appendChild(card);
  });
  section.appendChild(row);
}

const keynoteData = [
 //{
 //   name: "Karan Girotra",
 //   affiliation: "Cornell University",
 //   imageSrc: "imgs/karan-girotra.jpg",
 //   personalPage: "https://tech.cornell.edu/people/karan-girotra/",
 // },
 // {
 //   name: "Kamalini Ramdas",
 //   affiliation: "London Business School",
 //   imageSrc: "imgs/kamalini-ramdas.avif",
 //   personalPage:
 //     "https://www.london.edu/faculty-and-research/faculty-profiles/r/ramdas-k#",
 // }, 
  {
    name: "Christopher S. Tang",
    affiliation: "UCLA Anderson School of Management",
    imageSrc: "imgs/christang.jpg",
    personalPage:
      "https://www.anderson.ucla.edu/faculty-and-research/decisions-operations-and-technology-management/faculty/tang",
  },
  {
    name: "Jun Li",
    affiliation: "Michigan Ross",
    imageSrc: "imgs/junli.aspx",
    personalPage:
      "https://michiganross.umich.edu/faculty-research/faculty/jun-li",
  },
];

const organizingFacultyData = [
  {
    name: "Jing Wu",
    affiliation: "CUHK Business School (Workshop Chair)",
    imageSrc: "imgs/jingwu2.jpg",
    personalPage: "https://www.jingwulab.org/",
  },
  {
    name: "Hsiao-hui Lee",
    affiliation: "National Chengchi University",
    imageSrc: "imgs/hsiaohuili2.png",
    personalPage:
      "https://mis2.nccu.edu.tw/en/Faculty/Faculty_01/Hsiao-Hui-Lee-11933204",
  },
  {
    name: "Weiming Zhu",
    affiliation: "HKU Business School",
    imageSrc: "imgs/weimingzhu.jpeg",
    personalPage: "https://www.hkubs.hku.hk/people/weiming-zhu/",
  },
];

const workshopFacultyData = [
  {
    name: "Kashish Arora",
    affiliation: "Indian School of Business",
    imageSrc: "imgs/kashish.png",
    personalPage: "https://kashisharora.info/",
  },

  {
    name: "Sidika Candogan",
    affiliation: "NUS Business School",
    imageSrc: "imgs/sidika.jpg",
    personalPage: "https://bizfaculty.nus.edu.sg/faculty-details/?profId=732",
  },
  {
    name: "Vivek Choudhary",
    affiliation: "NTU Business School",
    imageSrc: "imgs/vivek.png",
    personalPage: "https://sites.google.com/view/vkchoudhary",
  }, 

  //{
  //  name: "Hao-Chun Chuang",
  //  affiliation: "National Chengchi University",
  //  imageSrc: "imgs/haochunchuang.jpg",
  //  personalPage: "https://imba.nccu.edu.tw/en/faculty/IMBAFaculty/Howard_Hao_Chun_Chuang",
  //}, 
  {
    name: "Hongyan Dai",
    affiliation: "Central University of Finance and Economics",
    imageSrc: "imgs/Hongyan Dai.png",
    personalPage: "https://bs.cufe.edu.cn/info/1063/1926.htm",
  },
  
  {
    name: "Sarang Deo",
    affiliation: "Indian School of Business",
    imageSrc: "imgs/deo.jpg",
    personalPage: "https://www.isb.edu/en/research-thought-leadership/faculty/faculty-directory/sarang-deo.html",
  },

  {
    name: "Shuai Hao",
    affiliation: "Southern University of Science and Technology",
    imageSrc: "imgs/shuaihao.jpg",
    personalPage: "",
  },
  
  {
    name: "Kejia Hu",
    affiliation: "Oxford University Saïd Business School",
    imageSrc: "imgs/kejiahu.jpg",
    personalPage: "https://www.kejiahu.com/",
  },
  
  //{
  //  name: "Shenyang Jiang",
  //  affiliation: "Tongji University Advanced Institute of Business",
  //  imageSrc: "imgs/shenyangjiang.jpg",
  //  personalPage: "https://aib.tongji.edu.cn/e7/d1/c18709a255953/page.htm",
  //},

  {
    name: "Jussi Keppo",
    affiliation: "NUS Business School",
    imageSrc: "imgs/jussikeppo.jpg",
    personalPage: "https://bizfaculty.nus.edu.sg/faculty-details/?profId=314",
  }, 
  
  {
    name: "Sang Won Kim",
    affiliation: "KAIST College of Business",
    imageSrc: "imgs/kim.jpg",
    personalPage: "https://www.business.kaist.edu/faculty/sk2559",
  }, 
  {
    name: "Hanwei Li",
    affiliation: "CityUHK College of Business",
    imageSrc: "imgs/hanweili.jpg",
    personalPage: "https://www.cb.cityu.edu.hk/ms/about-us/faculty-and-staff/prof-li-hanwei",
  },
  {
    name: "Wenzheng Mao",
    affiliation: "Tongji University Advanced Institute of Business",
    imageSrc: "imgs/wenzhengmao.jpg",
    personalPage: "https://aib.tongji.edu.cn/d5/ee/c17222a185838/page.htm",
  },
  {
    name: "Liu Ming",
    affiliation: "CUHK (Shenzhen) School of Management and Economics",
    imageSrc: "imgs/liuming.jpg",
    personalPage: "https://jdlab.cuhk.edu.cn/en/content/4057",
  },
 {
    name: "Ying Rong",
    affiliation: "SJTU Antai College of Economics and Management",
    imageSrc: "imgs/yingrong.gif",
    personalPage: "https://www.acem.sjtu.edu.cn/en/faculty/rongying.html",
  },
  {
    name: "Yiwei Shen",
    affiliation: "HKUST Business School",
    imageSrc: "imgs/yiweishen.jpg",
    personalPage: "https://isom.hkust.edu.hk/faculty-and-staff/directory/yiwenshen",
  },
  
  //{
  //  name: "Bhavani Uppari",
  //  affiliation: "SMU Lee Kong Chian School of Business",
  //  imageSrc: "imgs/bhavaniu.jpeg",
  //  personalPage: "https://faculty.smu.edu.sg/profile/bhavani-shanker-uppari-1296",
  //},
  
  //{
  //  name: "Jingqi Wang",
  //  affiliation: "CUHK (Shenzhen) School of Management and Economics",
  //  imageSrc: "imgs/jingqiwang.jpg",
  //  personalPage: "https://myweb.cuhk.edu.cn/wangjingqi",
  //},
  {
    name: "Chun Wang",
    affiliation: "Tsinghua University",
    imageSrc: "imgs/Chun Wang.png",
    personalPage: "https://www.sem.tsinghua.edu.cn/en/info/1219/3672.htm",
  },
  
  {
    name: "Yulan Wang",
    affiliation: "PolyU Business School",
    imageSrc: "imgs/amanda.png",
    personalPage: "https://www.polyu.edu.hk/lms/people/academic-staff/yulan-wang/",
  },
  {
    name: "Xiaole Wu",
    affiliation: "Fudan University School of Management",
    imageSrc: "imgs/xiaolewu.jpg",
    personalPage: "https://www.fdsm.fudan.edu.cn/En/preview.html?UID=012083",
  },

  {
    name: "Liang Xu",
    affiliation: "SMU Lee Kong Chian School of Business",
    imageSrc: "imgs/liangxu.jpg",
    personalPage: "https://business.smu.edu.sg/faculty/profile/6566/xu-liang",
  },

  {
    name: "Yuxiao Ye",
    affiliation: "Tianjin University College of Management and Economics",
    imageSrc: "imgs/yuxiaoye.JPG",
    personalPage: "http://come.tju.edu.cn/info/1585/6212.htm",
  }, 
  
  {
    name: "Renyu Zhang",
    affiliation: "CUHK Business School",
    imageSrc: "imgs/renyuzhang.jpg",
    personalPage: "https://www.bschool.cuhk.edu.hk/staff/zhang-philip-renyu/",
  },
  
  //{
  //  name: "Huan Zheng",
  //  affiliation: "SJTU Antai College of Economics and Management",
  //  imageSrc: "imgs/huanzheng.gif",
  //  personalPage: "https://www.acem.sjtu.edu.cn/en/faculty/zhenghuan.html",
  //},
  
  {
    name: "Weihua Zhou",
    affiliation: "Zhejiang University School of Management",
    imageSrc: "imgs/weihuazhou.jpg",
    personalPage: "https://person.zju.edu.cn/whzhou",
  },
  
];

const workshopParticipantData = [
  {
    name: "Jie Peng",
    affiliation: "Tongji University Advanced Institute of Business",
    imageSrc: "imgs/jiepeng.jpeg",
    personalPage: "",
  },
];

// Add faculty cards to respective sections
addFacultyCards("keynote", keynoteData);
addFacultyCards("organizing-faculty", organizingFacultyData);
addFacultyCards("workshop-faculty", workshopFacultyData);
//addFacultyCards("workshop-participants", workshopParticipantData);
