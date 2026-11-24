// Every fact on the site lives here. Checked against the CV, the published papers
// (PubMed 42344080; JCDR 2025;19(11)) and the MD dissertation records, November 2026.

export const SITE_URL = "https://drruchit.github.io/";
export const CV_URL = "/Dr-Ruchit-Nawal-CV.pdf";
export const EMAIL_USER = "ruchitnawal03";
export const EMAIL_DOMAIN = "gmail.com";

export const GLANCE = [
  { value: 2, label: "H.M. Patel Award sessions", sub: "IAPSM Gujarat Chapter, 2024 and 2026" },
  { value: 3, label: "Indexed publications", sub: "plus a conference abstract" },
  { value: 310, label: "Tobacco users screened", sub: "VELscope study, GCRI" },
  { value: 92, label: "TB deaths audited", sub: "nine Tuberculosis Units" },
  { value: 5, suffix: "+", label: "Years in practice", sub: "since internship in 2020" },
];

export const CHAPTERS = [
  {
    id: "valsad",
    n: "I",
    years: "2015 – 2021",
    place: "Valsad",
    title: "Learning medicine",
    role: "MBBS and internship · GMERS Medical College, Valsad",
    text: "I trained at GMERS Medical College, Valsad, under VNSGU, Surat. My internship at Civil Hospital, Valsad, ran into the first wave of COVID-19, and at its peak I served as a COVID surveillance officer at B.J. Medical College.",
    tags: ["MBBS", "Internship", "COVID-19 surveillance"],
  },
  {
    id: "gotri",
    n: "II",
    years: "2021",
    place: "Vadodara",
    title: "The second wave",
    role: "COVID Medical Officer · GMERS Medical College, Gotri",
    text: "From April to July 2021 I worked on the COVID front line through the second wave, including a month in the mucormycosis department.",
    tags: ["Front-line care", "Mucormycosis"],
  },
  {
    id: "rangpur",
    n: "III",
    years: "2021 – 2022",
    place: "Chhota Udepur",
    title: "A primary health centre",
    role: "Medical Officer, Class II · PHC Rangpur, Gujarat Health Services",
    text: "I ran primary care for the PHC area. It recorded no maternal or infant deaths, which earned the Best Medical Officer award from the Commissionerate, and the Taluka Health Officer named me a COVID Warrior.",
    tags: ["Best Medical Officer", "COVID Warrior", "Maternal and child health"],
  },
  {
    id: "vadodara",
    n: "IV",
    years: "2022 – 2023",
    place: "Vadodara",
    title: "Emergency rooms",
    role: "Resident Medical Officer · Bhailal Amin General Hospital, then Mishay Hospital",
    text: "At Bhailal Amin General Hospital I handled critical care and in-patient work-up. At Mishay Hospital I ran the emergency department: triage and stabilisation of acute cases, indoor care, and an OPD that kept moving.",
    tags: ["Emergency medicine", "Critical care", "Triage"],
  },
  {
    id: "bjmc",
    n: "V",
    years: "2023 – 2026",
    place: "Ahmedabad",
    title: "Community Medicine",
    role: "MD resident · B.J. Medical College, Gujarat University",
    text: "Three years of MD training in Community Medicine. Two of my studies were chosen for the H.M. Patel Award session of IAPSM's Gujarat Chapter, and my first-author paper was published in the Indian Journal of Community Medicine.",
    tags: ["Epidemiology", "R and SPSS", "Systematic review", "Qualitative research"],
  },
  {
    id: "now",
    n: "VI",
    years: "2026 →",
    place: "Ahmedabad",
    title: "Teaching, and what comes next",
    role: "Senior Resident · Department of Community Medicine, B.J. Medical College",
    text: "Back in the department where I trained, now teaching MBBS students under the NMC competency-based curriculum, with field practice and research alongside.",
    tags: ["Medical education", "Field practice", "Research"],
  },
];

export const VEL = {
  body: "At the Community Oncology department of The Gujarat Cancer and Research Institute, 310 tobacco users had a standard white-light oral examination, then a VELscope autofluorescence examination of the same mouth.",
  meta: [
    ["Design", "Cross-sectional diagnostic study, consecutive sampling"],
    ["When", "January to February 2024"],
    ["Who", "310 tobacco users; 96.8% men; mean age 42.3 years"],
  ],
  caveat: "Counts of lesions and areas of fluorescence change, not biopsy-confirmed diagnoses. The next step is histopathological correlation.",
  venue: "Presented at the 31st IAPSM Gujarat Chapter Conference, IIPH Gandhinagar, 2024 · Published in the Indian Journal of Community Medicine, 2026",
  doi: "https://doi.org/10.4103/ijcm.ijcm_473_25",
  pubmed: "https://pubmed.ncbi.nlm.nih.gov/42344080/",
};

export const TB = {
  title: "Tuberculosis death epidemiology and its associated risk factors in Ahmedabad district: a TB patient mortality audit",
  body: "Every notified TB death in the nine Tuberculosis Units of Ahmedabad's rural district, from November 2024 to December 2025, traced through records and verbal autopsy with the family.",
  caption: "One dot for each of the 92 people whose deaths were audited.",
  note: "Taluka-wise findings will be added once the study is published.",
  insight: "The earliest losses happen at home, before the health system sees the patient.",
  meta: [
    ["Design", "Descriptive mortality audit with complete enumeration"],
    ["Method", "Record review and verbal autopsy, three-delays framework"],
    ["Guides", "Prof. A. Bhagyalaxmi (guide) and Dr. Parimal Patel (co-guide)"],
    ["Presented", "IAPSMGC CON 2026, Parul University, Vadodara · 26–28 Nov"],
  ],
};

export const PUBS = [
  {
    id: "ijcm",
    type: "article",
    label: "Journal article",
    year: 2026,
    badge: "First author",
    title: "Betting on Blue Light: VELscope versus conventional oral examination in the high-stakes game of oral lesion detection among Gujarat's tobacco users",
    authors: ["Nawal R", "Sarvaiya N", "Makwana MN", "Trivedi A", "Pandya S", "Raval DA", "Kotadiya B", "Patel R", "Shah A"],
    venue: "Indian Journal of Community Medicine 2026;51(3):547–552",
    links: [
      { label: "DOI", href: "https://doi.org/10.4103/ijcm.ijcm_473_25" },
      { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/42344080/" },
    ],
  },
  {
    id: "jcdr",
    type: "article",
    label: "Journal article",
    year: 2025,
    title: "Diagnostic yield of different bronchoscopic procedures for lung cancer: a retrospective study",
    authors: ["Parmar U", "Patel N", "Prajapati D", "Nawal R"],
    venue: "Journal of Clinical and Diagnostic Research 2025;19(11):OC01–OC06",
    links: [{ label: "DOI", href: "https://doi.org/10.7860/JCDR/2025/81348.21969" }],
  },
  {
    id: "healthline",
    type: "article",
    label: "Journal article",
    title: "Original article in Healthline, the journal of IAPSM Gujarat Chapter",
    note: "With Raval DA and Shah A, B.J. Medical College, Ahmedabad. Full citation on request.",
  },
  {
    id: "clicon",
    type: "abstract",
    label: "Conference abstract",
    year: 2025,
    title: "When air shapes immunity: the untold narrative of environmental influence on allergic disease evolution in Vadodara district (2021–2024)",
    authors: ["Nawal R", "Patel H", "Popat H", "Raval D"],
    venue: "CliCON-OEH 2025, Indo-US Conference on Climate Change Impacts on Occupational and Environmental Health, Ahmedabad · Abstract ABR046",
    links: [{ label: "Proceedings", href: "https://europepmc.org/article/PMC/PMC12061231" }],
  },
  {
    id: "hmp26",
    type: "session",
    label: "H.M. Patel Award session",
    year: 2026,
    badge: "MD dissertation",
    title: "Tuberculosis death epidemiology and its associated risk factors in Ahmedabad district: a TB patient mortality audit",
    venue: "IAPSMGC CON 2026, Parul University, Vadodara · 26–28 November 2026",
  },
  {
    id: "hmp24",
    type: "session",
    label: "H.M. Patel Award session",
    year: 2024,
    title: "VELscope versus conventional oral examination among tobacco users",
    venue: "31st IAPSM Gujarat Chapter Conference, IIPH Gandhinagar · one of six award papers",
  },
];

export const AWARDS = [
  { icon: "medal", title: "Best Medical Officer", text: "Zero maternal and infant deaths in the PHC Rangpur area. Commissionerate, Government of Gujarat." },
  { icon: "shield", title: "COVID Warrior", text: "Citation from the Taluka Health Officer, Chhota Udepur." },
  { icon: "star", title: "Two H.M. Patel Award sessions", text: "IAPSM Gujarat Chapter: 2024 at IIPH Gandhinagar, 2026 at Parul University." },
];

export const EDUCATION = [
  { years: "2023 – 26", title: "MD, Community Medicine", where: "B.J. Medical College, Ahmedabad · Gujarat University" },
  { years: "2015 – 20", title: "MBBS", where: "GMERS Medical College, Valsad · VNSGU, Surat" },
  { years: "2013 – 15", title: "Higher Secondary", where: "Baroda Public School, Vadodara" },
  { years: "2003 – 13", title: "Schooling", where: "Shree Ambe Vidyalaya, Vadodara" },
];

export const SKILLS = [
  { group: "Public health", items: ["Epidemiology", "Disease surveillance (IDSP)", "National health programmes", "Mortality audit", "Health programme management"] },
  { group: "Research and analytics", items: ["R programming", "SPSS", "Systematic review and meta-analysis", "Qualitative research", "Research methodology", "Biostatistics"] },
  { group: "Clinical", items: ["Emergency medicine", "Obstetric delivery", "Wound management", "Catheterisation", "Ascitic tapping", "X-ray interpretation", "Glycaemic management", "OPD and indoor care", "Behavioural counselling"] },
];

export const REGISTRATION = [
  ["Gujarat Medical Council", "Reg. No. G-74331"],
  ["IAPSM", "Life member, No. 8264"],
  ["Certified training", "NCD course · One Health programme"],
  ["Languages", "English, Hindi, Gujarati"],
];
