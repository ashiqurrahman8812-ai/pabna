const sitePages = [
  { id: "home", label: "প্রচ্ছদ", file: "index.html" },
  { id: "about", label: "পাবনা পরিচিতি", file: "about.html" },
  { id: "history", label: "ইতিহাস", file: "history.html" },
  { id: "tourism", label: "দর্শনীয় স্থান", file: "tourism.html" },
  { id: "upazilas", label: "উপজেলা", file: "upazilas.html" },
  { id: "nature", label: "নদী ও প্রকৃতি", file: "nature.html" },
  { id: "education", label: "শিক্ষা", file: "education.html" },
  { id: "economy", label: "অর্থনীতি", file: "economy.html" },
  { id: "culture", label: "সংস্কৃতি ও খাবার", file: "culture.html" },
  { id: "contact", label: "তথ্য ও যোগাযোগ", file: "contact.html" }
];

const photos = {
  hardinge: {
    src: "assets/hardinge-bridge.jpg",
    alt: "পাবনার পদ্মা নদীর ওপর হার্ডিঞ্জ ব্রিজ",
    title: "হার্ডিঞ্জ ব্রিজ",
    credit: "Asm Sultan · CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Hardinge_Bridge,_Pabna.jpg"
  },
  temple: {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Jor_Bangla_Temple_%281%29.jpg",
    alt: "পাবনা শহরের ঐতিহাসিক জোড় বাংলা মন্দির",
    title: "জোড় বাংলা মন্দির",
    credit: "Md. Sarwar Ul Islam Fakir · CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Jor_Bangla_Temple_(1).jpg"
  },
  beel: {
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Cholon_Bill_In_Pabna.jpg/1920px-Cholon_Bill_In_Pabna.jpg",
    alt: "পাবনা অঞ্চলের জলাভূমি ও চলনবিলের প্রাকৃতিক দৃশ্য",
    title: "চলনবিল",
    credit: "George achik · CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Cholon_Bill_In_Pabna.jpg"
  },
  mosque: {
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Ancient_Shahi_Mosque%2C_Pabna.jpeg/1920px-Ancient_Shahi_Mosque%2C_Pabna.jpeg",
    alt: "চাটমোহরের ঐতিহাসিক শাহী মসজিদ",
    title: "চাটমোহর শাহী মসজিদ",
    credit: "অবদানকারী: ফাইল পৃষ্ঠায় · CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Ancient_Shahi_Mosque,_Pabna.jpeg"
  },
  lalon: {
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Lalon_Shah_Bridge_2.jpg/1920px-Lalon_Shah_Bridge_2.jpg",
    alt: "পাকশীতে পদ্মা নদীর ওপর লালন শাহ সেতু",
    title: "লালন শাহ সেতু",
    credit: "Shariful iea · CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Lalon_Shah_Bridge_2.jpg"
  }
};

const content = {
  about: {
    title: "পাবনাকে জানুন",
    subtitle: "নদী, জনপদ আর প্রাণবন্ত মানুষের মিলনে গড়ে ওঠা এক পরিচিত জেলা।",
    image: "hardinge",
    intro: "পাবনা বাংলাদেশের রাজশাহী বিভাগের একটি জেলা। পদ্মা ও যমুনা নদীঘেরা এই অঞ্চলে আছে উর্বর সমতল ভূমি, বিস্তৃত জলাভূমি, ঐতিহাসিক স্থাপনা এবং সমৃদ্ধ জনজীবন। জেলা সদর পাবনা শহর।",
    sections: [
      { title: "অবস্থান ও ভূপ্রকৃতি", text: "জেলার উত্তরে ও পূর্বদিকে যমুনা নদীর অববাহিকা, দক্ষিণে পদ্মা নদীর বিস্তৃতি। নদীবিধৌত সমতলভূমি, চরাঞ্চল এবং চলনবিল-সংলগ্ন জলাভূমি এখানকার ভূপ্রকৃতিকে বৈচিত্র্যময় করেছে। ঋতু বদলের সঙ্গে নদী ও বিলের দৃশ্যও বদলে যায়।" },
      { title: "জেলার পরিচয়", text: "পাবনা জেলা রাজশাহী বিভাগের অন্তর্গত। পাবনা শহর প্রশাসন, শিক্ষা, সংস্কৃতি ও বাণিজ্যের গুরুত্বপূর্ণ কেন্দ্র। জেলার গ্রামীণ জনপদে কৃষি ও নদীনির্ভর জীবনের পাশাপাশি শহরাঞ্চলে শিক্ষা, স্বাস্থ্যসেবা, শিল্প ও ব্যবসার বিকাশ ঘটেছে।" }
    ],
    cards: [
      ["নদীমাতৃক ভূদৃশ্য", "পদ্মা ও যমুনার অববাহিকা জেলার প্রকৃতি, কৃষি এবং জনজীবনে রেখেছে গভীর ছাপ।", "≈"],
      ["বৈচিত্র্যময় জনপদ", "শহর, গ্রাম, চর এবং বিল—এক জেলার ভেতরেই ভিন্ন ভিন্ন জীবন ও পরিবেশ।", "⌂"],
      ["ঐতিহ্য ও অগ্রযাত্রা", "প্রত্নস্থাপনা ও শিক্ষাপ্রতিষ্ঠানের পাশাপাশি আধুনিক শিল্পও গড়ে তুলেছে জেলার পরিচয়।", "✦"]
    ]
  },
  history: {
    title: "ইতিহাসের পথে পাবনা",
    subtitle: "নদীপথ, জনপদ, প্রতিরোধ আর স্থাপত্যে লেখা এক দীর্ঘ ইতিহাস।",
    image: "temple",
    intro: "পাবনার পরিচয় গড়ে উঠেছে নদীঘেঁষা জনবসতি, কৃষিনির্ভর অর্থনীতি, উপনিবেশিক সময়ের সামাজিক আন্দোলন এবং বাংলার স্থাপত্য-ঐতিহ্যের ধারায়। জেলার বিভিন্ন স্থাপনা ও লোকস্মৃতি সেই ইতিহাসের সাক্ষ্য বহন করে।",
    sections: [
      { title: "জেলা গঠনের অধ্যায়", text: "পাবনা জেলা ১৮৩২ সালে গঠিত হয়। প্রশাসনিক সীমানা ও স্থানীয় জনপদের বিন্যাস সময়ের সঙ্গে পরিবর্তিত হলেও পাবনা শহর দীর্ঘদিন ধরে আশপাশের অঞ্চলের প্রশাসনিক ও বাণিজ্যিক কেন্দ্র হিসেবে ভূমিকা রেখেছে।" },
      { title: "পাবনা কৃষক আন্দোলন", text: "উনিশ শতকের দ্বিতীয়ার্ধে জমিদারি ব্যবস্থার অন্যায় খাজনা ও নিপীড়নের বিরুদ্ধে পাবনা অঞ্চলে কৃষক-প্রতিরোধ গড়ে ওঠে। ১৮৭৩ সাল থেকে সংগঠিত এই আন্দোলন বাংলার কৃষক-অধিকার ও সামাজিক ইতিহাসে বিশেষভাবে আলোচিত।" },
      { title: "ঐতিহ্যের স্থাপত্য", text: "জোড় বাংলা মন্দিরের পোড়ামাটির অলংকরণ এবং চাটমোহর শাহী মসজিদের ঐতিহাসিক স্থাপত্য ধর্মীয় ও কারুশিল্পের বহুমাত্রিক ঐতিহ্যকে তুলে ধরে। সংরক্ষণ ও সচেতন পর্যটন এই নিদর্শনগুলোর ভবিষ্যতের জন্য জরুরি।" }
    ],
    cards: [
      ["১৮৩২", "পাবনা জেলা গঠনের বছর।", "⌛"],
      ["১৮৭৩", "পাবনা কৃষক আন্দোলনের সংগঠিত পর্যায়ের সূচনা।", "✊"],
      ["ঐতিহ্য", "জোড় বাংলা মন্দির ও শাহী মসজিদ ইতিহাসের দৃশ্যমান সাক্ষী।", "▤"]
    ]
  },
  tourism: {
    title: "পাবনার দর্শনীয় স্থান",
    subtitle: "ইতিহাসের স্থাপনা থেকে নদীর সেতু—ভ্রমণে দেখুন জেলার নানা রূপ।",
    image: "hardinge",
    intro: "পাবনা ভ্রমণে স্থাপত্য, নদী ও স্থানীয় জনজীবনকে একসঙ্গে দেখার সুযোগ আছে। ঐতিহাসিক স্থান ঘুরতে গেলে স্থানীয় নির্দেশনা মেনে চলুন, ধর্মীয় স্থানে শালীন পোশাক পরুন এবং পরিবেশ পরিচ্ছন্ন রাখুন।",
    cards: [
      ["হার্ডিঞ্জ ব্রিজ", "ঈশ্বরদীর পাকশীতে পদ্মা নদীর ওপর নির্মিত ঐতিহাসিক রেলসেতু। ব্রিটিশ শাসনামলে নির্মিত এ সেতু প্রকৌশল-ঐতিহ্য ও নদীপারের দৃশ্যের জন্য পরিচিত।", "hardinge", "রেলসেতু · পাকশী"],
      ["লালন শাহ সেতু", "পাকশীর কাছে পদ্মা নদী পারাপারের সড়কসেতু। হার্ডিঞ্জ ব্রিজের পাশাপাশি দাঁড়িয়ে থাকা এই সেতু নদী ও প্রকৌশল-দৃশ্যকে নতুন মাত্রা দেয়।", "lalon", "সড়কসেতু · পাকশী"],
      ["জোড় বাংলা মন্দির", "পাবনা শহরের প্রাচীন মন্দির। বাংলার কুটির-অনুপ্রাণিত স্থাপত্য এবং পোড়ামাটির অলংকরণ এর বিশেষ বৈশিষ্ট্য।", "temple", "ঐতিহাসিক স্থাপনা · পাবনা শহর"],
      ["চাটমোহর শাহী মসজিদ", "চাটমোহরের ঐতিহাসিক মসজিদ। এর স্থাপত্য ও স্থানীয় ইতিহাস জানতে ভ্রমণের আগে স্থানীয় কর্তৃপক্ষের নির্দেশনা নিন।", "mosque", "ঐতিহাসিক মসজিদ · চাটমোহর"],
      ["চলনবিল", "পাবনা-নাটোর-সিরাজগঞ্জ বিস্তৃত অঞ্চলের জলাভূমি। বর্ষায় নৌভ্রমণ ও জলজ প্রকৃতির দৃশ্য মনোরম; নিরাপদ নৌযান বেছে নিন।", "beel", "জলাভূমি · উত্তর-পশ্চিমাঞ্চল"],
      ["গজনার বিল", "সুজানগর অঞ্চলের বিল ও জলাভূমি স্থানীয় প্রকৃতি, মাছধরা এবং মৌসুমি জীবনের সঙ্গে জড়িয়ে আছে।", "beel", "বিলাঞ্চল · সুজানগর"]
    ],
    sections: [
      { title: "ভ্রমণ পরিকল্পনা", text: "ঐতিহাসিক স্থাপনায় যাওয়ার আগে খোলার সময় ও স্থানীয় প্রবেশ-নিয়ম যাচাই করুন। বর্ষাকালে নদী ও বিলের পানির অবস্থা দ্রুত বদলাতে পারে—নৌভ্রমণে লাইফজ্যাকেট ব্যবহার করুন এবং আবহাওয়ার পূর্বাভাস দেখে রওনা দিন." }
    ]
  },
  upazilas: {
    title: "পাবনার ৯টি উপজেলা",
    subtitle: "প্রতিটি উপজেলার রয়েছে নিজস্ব জনপদ, জীবিকা ও স্থানীয় পরিচয়।",
    image: "beel",
    intro: "পাবনা জেলা প্রশাসনিকভাবে নয়টি উপজেলায় বিভক্ত। নিচে সব উপজেলার নাম ও সংক্ষিপ্ত পরিচয় দেওয়া হলো। স্থানভিত্তিক বিস্তারিত সেবা ও হালনাগাদ তথ্যের জন্য উপজেলা বা জেলা প্রশাসনের সরকারি ওয়েবসাইট দেখুন।",
    cards: [
      ["পাবনা সদর", "জেলা সদর ও পাবনা শহরকে ঘিরে প্রশাসন, শিক্ষা, স্বাস্থ্যসেবা এবং ব্যবসার কেন্দ্র।", "⌂"],
      ["ঈশ্বরদী", "পাকশী, হার্ডিঞ্জ ব্রিজ ও লালন শাহ সেতুর জন্য পরিচিত; এখানে রেল ও শিল্পাঞ্চলেরও উপস্থিতি রয়েছে।", "↗"],
      ["আটঘরিয়া", "জেলার উত্তর-পশ্চিমের একটি উপজেলা; কৃষি ও স্থানীয় বাজার এখানকার জনজীবনের অংশ।", "❋"],
      ["বেড়া", "যমুনা নদীঘেঁষা জনপদ; নদীকেন্দ্রিক যাতায়াত, কৃষি ও মৎস্যজীবন এলাকার পরিচয়ের সঙ্গে যুক্ত।", "≈"],
      ["ভাঙ্গুড়া", "কৃষিপ্রধান জনপদ; স্থানীয় হাটবাজার ও গ্রামীণ যোগাযোগ উপজেলা জীবনে গুরুত্বপূর্ণ।", "❋"],
      ["চাটমোহর", "ঐতিহাসিক শাহী মসজিদ এবং চলনবিল-সংলগ্ন প্রকৃতির জন্য পরিচিত।", "▤"],
      ["ফরিদপুর", "গ্রামীণ কৃষি, বাজার এবং স্থানীয় যোগাযোগের ওপর নির্ভরশীল একটি উপজেলা।", "⌂"],
      ["সাঁথিয়া", "কৃষি ও আঞ্চলিক বাণিজ্য এখানকার অর্থনৈতিক জীবনে গুরুত্বপূর্ণ ভূমিকা রাখে।", "❋"],
      ["সুজানগর", "গজনার বিল ও পেঁয়াজ উৎপাদনের সঙ্গে পরিচিত; কৃষি এ উপজেলার অন্যতম প্রধান জীবিকা।", "✿"]
    ],
    sections: [
      { title: "প্রশাসনিক তথ্য", text: "উপজেলার সীমানা, ইউনিয়ন, সরকারি সেবা এবং যোগাযোগের তথ্য সময়ের সঙ্গে হালনাগাদ হতে পারে। সর্বশেষ তথ্যের জন্য পাবনা জেলা প্রশাসনের সরকারি পোর্টাল অনুসরণ করুন।", link: ["সরকারি জেলা পোর্টাল", "https://pabna.gov.bd/"] }
    ]
  },
  nature: {
    title: "নদী ও প্রকৃতির পাবনা",
    subtitle: "পদ্মার স্রোত, যমুনার বিস্তার আর বিলের ঋতুবদল—প্রকৃতির এক চলমান ক্যানভাস।",
    image: "beel",
    intro: "পাবনার ভূপ্রকৃতি নদী ও জলাভূমির সঙ্গে নিবিড়ভাবে জড়িত। মৌসুমি বৃষ্টি ও নদীর পানি জেলার চর, বিল, কৃষিজমি ও জীববৈচিত্র্যে পরিবর্তন আনে; এই প্রকৃতি স্থানীয় জীবিকা ও সংস্কৃতিরও অংশ।",
    cards: [
      ["পদ্মা নদী", "ঈশ্বরদী-পাকশীসহ জেলার দক্ষিণাংশে পদ্মার প্রবাহ ও তীরবর্তী জীবন উল্লেখযোগ্য। নদীভাঙন, নৌযান চলাচল ও মৌসুমি পানির পরিবর্তন এ অঞ্চলের বাস্তবতা।", "hardinge", "নদী · দক্ষিণ পাবনা"],
      ["যমুনা নদী", "জেলার পূর্ব ও উত্তর-পূর্বের জনপদ যমুনা নদীর অববাহিকার সঙ্গে যুক্ত। চরাঞ্চল ও নদীপারের জীবন নদীর গতিপ্রকৃতির ওপর নির্ভরশীল।", "lalon", "নদী · পূর্বাঞ্চল"],
      ["চলনবিল", "দেশের বৃহৎ জলাভূমি অঞ্চলগুলোর একটি চলনবিল পাবনা, নাটোর ও সিরাজগঞ্জ জুড়ে বিস্তৃত। বর্ষা ও শুষ্ক মৌসুমে এর রূপ আলাদা।", "beel", "জলাভূমি"],
      ["গজনার বিল", "সুজানগর এলাকার বিলাঞ্চল মৌসুমি পানি, মাছ ও কৃষির সঙ্গে স্থানীয় মানুষের সম্পর্ক তুলে ধরে।", "beel", "বিল · সুজানগর"]
    ],
    sections: [
      { title: "প্রকৃতির প্রতি দায়িত্ব", text: "নদী ও বিল ভ্রমণে প্লাস্টিক বা বর্জ্য ফেলে যাবেন না। পাখি ও জলজ প্রাণীকে বিরক্ত না করে দূর থেকে দেখুন; নৌযাত্রায় নিরাপত্তা সরঞ্জাম ব্যবহার করুন এবং স্থানীয় পরিবেশ-নির্দেশনা অনুসরণ করুন।" }
    ]
  },
  education: {
    title: "শিক্ষার ঐতিহ্য ও সম্ভাবনা",
    subtitle: "দীর্ঘদিনের শিক্ষাচর্চা থেকে বিজ্ঞান ও উচ্চশিক্ষা—পাবনায় রয়েছে নানা সুযোগ।",
    image: "temple",
    intro: "পাবনা শহর ও উপজেলার নানা পর্যায়ের শিক্ষাপ্রতিষ্ঠান জেলার শিক্ষাজীবনকে সমৃদ্ধ করেছে। ঐতিহ্যবাহী কলেজের পাশাপাশি বিশ্ববিদ্যালয়, মেডিকেল কলেজ, কারিগরি ও সাধারণ শিক্ষাপ্রতিষ্ঠান রয়েছে। ভর্তি ও কার্যক্রমের হালনাগাদ তথ্য সংশ্লিষ্ট প্রতিষ্ঠানের সরকারি ওয়েবসাইটে দেখুন।",
    cards: [
      ["পাবনা বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়", "বিজ্ঞান, প্রকৌশল, ব্যবসায় শিক্ষা, মানবিক ও সামাজিক বিজ্ঞানে উচ্চশিক্ষা ও গবেষণার সুযোগ।", "⌘", "https://pust.ac.bd/"],
      ["সরকারি এডওয়ার্ড কলেজ", "পাবনা শহরের ঐতিহ্যবাহী উচ্চশিক্ষা প্রতিষ্ঠান; স্নাতক ও স্নাতকোত্তর পর্যায়ে বিভিন্ন বিষয়ে পাঠদান করে।", "▤", "https://www.edwardcollege.edu.bd/"],
      ["পাবনা মেডিকেল কলেজ", "চিকিৎসাশিক্ষার একটি সরকারি প্রতিষ্ঠান; ভর্তি ও একাডেমিক তথ্যের জন্য স্বাস্থ্য শিক্ষা অধিদপ্তরের নির্দেশনা অনুসরণ করুন।", "✚"],
      ["পাবনা ক্যাডেট কলেজ", "ঈশ্বরদী এলাকায় অবস্থিত আবাসিক শিক্ষাপ্রতিষ্ঠান। ভর্তি বিজ্ঞপ্তি ও কার্যক্রমের সর্বশেষ তথ্য প্রতিষ্ঠানের নিজস্ব উৎসে যাচাই করুন।", "⌂"],
      ["বিদ্যালয় ও কারিগরি শিক্ষা", "জেলা ও উপজেলার বিভিন্ন স্কুল, মাদ্রাসা, পলিটেকনিক ও কারিগরি প্রতিষ্ঠানে মাধ্যমিক থেকে দক্ষতাভিত্তিক শিক্ষা দেওয়া হয়।", "✎"]
    ],
    sections: [
      { title: "শিক্ষার্থী ও অভিভাবকদের জন্য", text: "ভর্তি, পাঠ্যক্রম, পরীক্ষার ফল, বৃত্তি বা যোগাযোগের তথ্য সময়ের সঙ্গে বদলায়। নির্ভুল তথ্যের জন্য প্রতিষ্ঠানের সরকারি ওয়েবসাইট বা সংশ্লিষ্ট শিক্ষা বোর্ডের নোটিশ দেখুন।", link: ["পাবনা বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়", "https://pust.ac.bd/"] }
    ]
  },
  economy: {
    title: "কর্মচঞ্চল অর্থনীতি",
    subtitle: "কৃষিজমি, দুগ্ধশিল্প, উৎপাদন ও স্থানীয় বাজারে গড়ে ওঠে পাবনার জীবিকা।",
    image: "beel",
    intro: "কৃষি পাবনার অর্থনীতির গুরুত্বপূর্ণ ভিত্তি। ধান, পাট, পেঁয়াজসহ নানা ফসলের পাশাপাশি দুগ্ধ উৎপাদন, ক্ষুদ্র ও মাঝারি ব্যবসা, শিল্পকারখানা এবং আঞ্চলিক বাজার মানুষের কর্মসংস্থানে ভূমিকা রাখে।",
    cards: [
      ["কৃষি ও ফসল", "উর্বর পলিমাটি ও নদী-অববাহিকার কারণে ধান, পাট, পেঁয়াজ, ডাল ও বিভিন্ন মৌসুমি ফসলের চাষ হয়। ফসলের ধরন ও উৎপাদন মৌসুমভেদে পরিবর্তিত হয়।", "❋"],
      ["দুগ্ধ ও প্রাণিসম্পদ", "পাবনা অঞ্চলে গবাদিপশু পালন ও দুধ উৎপাদনের সুপরিচিত ঐতিহ্য রয়েছে। দুগ্ধভিত্তিক ক্ষুদ্র উদ্যোগ ও সরবরাহব্যবস্থাও গ্রামীণ অর্থনীতির অংশ।", "♧"],
      ["শিল্প ও কর্মসংস্থান", "ঈশ্বরদী ও পাকশী অঞ্চলের শিল্প, সরকারি-বেসরকারি প্রতিষ্ঠান এবং উৎপাদনমুখী উদ্যোগ স্থানীয় কর্মসংস্থান ও ব্যবসায় অবদান রাখে।", "⚙"],
      ["হাটবাজার ও ব্যবসা", "পাবনা শহরসহ উপজেলা সদরের হাটবাজার কৃষিপণ্য, নিত্যপ্রয়োজনীয় সামগ্রী ও আঞ্চলিক বাণিজ্যের সংযোগস্থল।", "▦"]
    ],
    sections: [
      { title: "টেকসই উন্নয়নের দিক", text: "নদীভাঙন, বন্যা ও পানির মৌসুমি পরিবর্তন কৃষি ও জীবিকায় প্রভাব ফেলতে পারে। কৃষিপণ্যের ন্যায্য বাজার, দক্ষতা উন্নয়ন এবং পরিবেশবান্ধব উৎপাদন জেলার অর্থনীতিকে আরও স্থিতিশীল করতে সহায়তা করে।" }
    ]
  },
  culture: {
    title: "সংস্কৃতি, উৎসব ও স্বাদ",
    subtitle: "লোকঐতিহ্য, মিলনমেলা আর দুধ-মিষ্টির স্বাদে প্রাণ পায় পাবনার সংস্কৃতি।",
    image: "temple",
    intro: "পাবনার সংস্কৃতিতে গ্রামীণ মেলা, লোকসংগীত, ধর্মীয় ও জাতীয় উৎসব এবং নদীকেন্দ্রিক জীবন পাশাপাশি রয়েছে। অঞ্চলভেদে খাবার, কথ্যভাষা ও সামাজিক রীতিতে বৈচিত্র্য দেখা যায়।",
    cards: [
      ["লোকসংগীত ও পালাগান", "গ্রামীণ আসর, পালাগান ও লোকসংগীত স্থানীয় ঐতিহ্যকে প্রজন্ম থেকে প্রজন্মে পৌঁছে দেয়। উৎসবের সময় মেলা ও সাংস্কৃতিক আয়োজনও মানুষের মিলনক্ষেত্র হয়।", "♫"],
      ["উৎসবের আবহ", "বাংলা নববর্ষ, জাতীয় দিবস, ধর্মীয় উৎসব ও স্থানীয় মেলাকে ঘিরে নানা আয়োজন হয়। অনুষ্ঠান ও তারিখের তথ্য স্থানীয়ভাবে যাচাই করে অংশ নিন।", "✦"],
      ["দুধ ও মিষ্টি", "দুগ্ধ উৎপাদনের পরিচিতির সঙ্গে দুধ, দই ও মিষ্টির নানা পদ পাবনার খাদ্যসংস্কৃতিতে জায়গা করে নিয়েছে। স্থানীয় দোকান ও অঞ্চলভেদে স্বাদে পার্থক্য থাকতে পারে।", "♧"],
      ["নদী ও গ্রামীণ খাবার", "মৌসুমি মাছ, চাল-ভিত্তিক খাবার এবং ঘরোয়া রান্না নদী ও কৃষির সঙ্গে জড়িত স্থানীয় খাদ্যরীতির পরিচয় বহন করে।", "♨"]
    ],
    sections: [
      { title: "স্থানীয় ঐতিহ্যকে সম্মান করুন", text: "মেলা বা ধর্মীয় আয়োজনে স্থানীয় রীতি মেনে চলুন, অনুমতি ছাড়া মানুষের ছবি তুলবেন না এবং ঐতিহাসিক স্থানে কোনো চিহ্ন বা স্থাপনা স্পর্শ করে ক্ষতি করবেন না।" }
    ]
  },
  contact: {
    title: "তথ্য ও যোগাযোগ",
    subtitle: "হালনাগাদ সরকারি তথ্য ও নাগরিক সেবার জন্য নির্ভরযোগ্য সূত্রে যান।",
    image: "hardinge",
    intro: "এই ওয়েবসাইটটি পাবনা জেলা পরিচিতি ও ভ্রমণ-তথ্যের একটি অনানুষ্ঠানিক তথ্যপোর্টাল। সরকারি সেবা, জরুরি যোগাযোগ, সময়সূচি বা প্রশাসনিক তথ্যের ক্ষেত্রে নিচের সরকারি ও প্রাতিষ্ঠানিক ওয়েবসাইট ব্যবহার করুন।",
    cards: [
      ["পাবনা জেলা প্রশাসন", "জেলা প্রশাসনের নোটিশ, সরকারি দপ্তর ও নাগরিক তথ্যের জন্য জেলা পোর্টাল।", "↗", "https://pabna.gov.bd/"],
      ["বাংলাদেশ জাতীয় তথ্য বাতায়ন", "সরকারি দপ্তর, সেবা ও জাতীয় তথ্য বাতায়নের কেন্দ্রীয় প্রবেশদ্বার।", "⌂", "https://bangladesh.gov.bd/"],
      ["বাংলাদেশ পর্যটন করপোরেশন", "দেশের পর্যটন গন্তব্য ও ভ্রমণ-তথ্যের সরকারি উৎস।", "✦", "https://parjatan.gov.bd/"],
      ["পাবনা বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়", "বিশ্ববিদ্যালয়ের একাডেমিক, ভর্তি ও প্রশাসনিক হালনাগাদ তথ্য।", "⌘", "https://pust.ac.bd/"],
      ["সরকারি এডওয়ার্ড কলেজ", "কলেজের একাডেমিক ও প্রশাসনিক তথ্যের প্রাতিষ্ঠানিক ওয়েবসাইট।", "▤", "https://www.edwardcollege.edu.bd/"]
    ],
    sections: [
      { title: "এই সাইট সম্পর্কে", text: "আমাদের পাবনা একটি তথ্যভিত্তিক পরিচিতিমূলক ওয়েবসাইট; এটি কোনো সরকারি দপ্তরের নিজস্ব সাইট নয়। গুরুত্বপূর্ণ সিদ্ধান্তের আগে সংশ্লিষ্ট সরকারি বা প্রাতিষ্ঠানিক উৎসে তথ্য যাচাই করুন।" },
      { title: "ছবির উৎস ও লাইসেন্স", text: "এই সাইটের স্থান-সম্পর্কিত ছবিগুলো Wikimedia Commons থেকে নেওয়া। প্রতিটি ছবির নিচের উৎস-লিংকে মূল ফাইল, অবদানকারী ও লাইসেন্সের বিস্তারিত পাওয়া যাবে; ব্যবহারের আগে সংশ্লিষ্ট লাইসেন্সের শর্ত দেখুন।" }
    ]
  }
};

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function imageMarkup(key, className = "") {
  const photo = photos[key];
  if (!photo) return "";
  return `<img class="${className}" src="${photo.src}" alt="${esc(photo.alt)}" loading="lazy" decoding="async">`;
}

function attribution(photo) {
  return `<a href="${photo.source}" target="_blank" rel="noopener noreferrer">ছবি: ${esc(photo.credit)} · Wikimedia Commons</a>`;
}

function cardMarkup(card, index) {
  const [title, text, visual, rawMeta, href] = card;
  const hasLinkInMeta = rawMeta && rawMeta.startsWith("https://") && !href;
  const meta = hasLinkInMeta ? "" : rawMeta;
  const target = hasLinkInMeta ? rawMeta : href;
  const photo = photos[visual];
  const visualMarkup = photo
    ? `<div class="place-media"><button class="place-photo lightbox-trigger" type="button" aria-label="${esc(title)} ছবিটি বড় করে দেখুন" data-src="${photo.src}" data-alt="${esc(photo.alt)}">${imageMarkup(visual, "")}</button><span class="photo-credit">${attribution(photo)}</span></div>`
    : `<div class="card-symbol symbol-${index % 4}" aria-hidden="true">${esc(visual || "✦")}</div>`;
  const cardBody = `<h3>${esc(title)}</h3><p>${esc(text)}</p>${meta ? `<span class="card-meta">${esc(meta)}</span>` : ""}`;
  const action = target ? `<a class="text-link" href="${target}" target="_blank" rel="noopener noreferrer">প্রতিষ্ঠানের ওয়েবসাইট <span aria-hidden="true">↗</span></a>` : "";
  return `<article class="info-card reveal">${visualMarkup}<div class="info-card-body">${cardBody}${action}</div></article>`;
}

function renderHeader(activeId) {
  const primary = sitePages.slice(0, 5);
  const more = sitePages.slice(5);
  return `<header class="site-header"><div class="header-inner">
    <a class="brand" href="index.html" aria-label="আমাদের পাবনা প্রচ্ছদে যান">
      <span class="brand-mark" aria-hidden="true"><span>প</span></span>
      <span class="brand-copy"><strong>আমাদের পাবনা</strong><small>আমার জেলা, আমার গর্ব</small></span>
    </a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="মেনু খুলুন"><span></span><span></span><span></span></button>
    <nav class="navigation" id="primary-navigation" aria-label="প্রধান নেভিগেশন">
      <ul>${primary.map((page) => `<li><a class="${page.id === activeId ? "active" : ""}" ${page.id === activeId ? 'aria-current="page"' : ""} href="${page.file}">${page.label}</a></li>`).join("")}
        <li class="nav-more"><button type="button" class="more-toggle" aria-expanded="false">আরও <span aria-hidden="true">⌄</span></button>
          <ul class="more-menu">${more.map((page) => `<li><a class="${page.id === activeId ? "active" : ""}" ${page.id === activeId ? 'aria-current="page"' : ""} href="${page.file}">${page.label}</a></li>`).join("")}</ul>
        </li>
      </ul>
    </nav>
  </div></header>`;
}

function renderSection(section) {
  return `<section class="content-section section-wrap reveal"><div class="section-copy"><h2>${esc(section.title)}</h2><p>${esc(section.text)}</p>${section.link ? `<a class="button button-outline" href="${section.link[1]}" target="_blank" rel="noopener noreferrer">${esc(section.link[0])}<span aria-hidden="true"> ↗</span></a>` : ""}</div></section>`;
}

function renderSubpage(page) {
  const data = content[page];
  const heroPhoto = photos[data.image];
  const image = heroPhoto ? `<div class="subhero-image">${imageMarkup(data.image, "")}<span class="image-credit">${attribution(heroPhoto)}</span></div>` : "";
  const cards = data.cards ? `<section class="section-wrap cards-section"><div class="section-heading reveal"><span class="eyebrow">জেলার নানা পরিচয়</span><h2>${page === "upazilas" ? "উপজেলাগুলো এক নজরে" : page === "tourism" ? "ঘুরে দেখার গন্তব্য" : "যে বিষয়গুলো জানার মতো"}</h2><p>${page === "upazilas" ? "জেলার নয়টি উপজেলা—প্রতিটি নিজস্ব বৈশিষ্ট্যে আলাদা।" : "পাবনার পরিচিত জায়গা ও সম্ভাবনাগুলো একটু কাছ থেকে দেখুন।"}</p></div><div class="card-grid ${page === "upazilas" ? "upazila-grid" : ""}">${data.cards.map(cardMarkup).join("")}</div></section>` : "";
  const sections = data.sections.map(renderSection).join("");
  return `<section class="subhero"><div class="subhero-wash"></div><div class="subhero-copy"><span class="eyebrow">আমাদের পাবনা · ${sitePages.find((item) => item.id === page).label}</span><h1>${esc(data.title)}</h1><p>${esc(data.subtitle)}</p></div>${image}</section>
    <section class="intro-section section-wrap"><div class="intro-mark" aria-hidden="true">প</div><div><span class="eyebrow">জেলার পরিচয়</span><p>${esc(data.intro)}</p></div></section>
    ${cards}${sections}
    <section class="closing-banner section-wrap reveal"><div><span class="eyebrow">আরও জানুন</span><h2>পাবনার গল্প এখনও চলমান</h2><p>ইতিহাস, প্রকৃতি ও জনজীবনের আরও পরিচয় জানতে ঘুরে দেখুন আমাদের পৃষ্ঠাগুলো।</p></div><a class="button button-light" href="contact.html">তথ্যসূত্র দেখুন <span aria-hidden="true">↗</span></a></section>`;
}

function renderHome() {
  const highlights = [
    ["নদীর দেশ", "পদ্মা–যমুনার অববাহিকা, বিল আর প্রাণবন্ত নদীপারের জীবন।", "≈", "nature.html"],
    ["ইতিহাসের ছাপ", "কৃষক আন্দোলন, প্রাচীন স্থাপনা আর সময়ের সাক্ষী জনপদ।", "⌛", "history.html"],
    ["সম্ভাবনার জেলা", "শিক্ষা, কৃষি, শিল্প ও স্থানীয় উদ্যোগে এগিয়ে চলা পাবনা।", "✦", "economy.html"]
  ];
  const gallery = ["hardinge", "temple", "beel", "mosque", "lalon"];
  return `<section class="home-hero">
      <div class="hero-photo">${imageMarkup("hardinge", "")}</div><div class="hero-overlay"></div>
      <div class="hero-content"><span class="hero-kicker"><span class="live-dot"></span> রাজশাহী বিভাগের এক ঐতিহ্যবাহী জেলা</span>
        <h1>আমাদের প্রিয়<br><span>পাবনা</span></h1>
        <p>ইতিহাস, ঐতিহ্য, প্রকৃতি ও সম্ভাবনার জেলা</p>
        <div class="hero-actions"><a class="button button-primary" href="tourism.html">পাবনা ঘুরে দেখুন <span aria-hidden="true">↗</span></a><a class="hero-secondary" href="#introduction">জেলা পরিচিতি <span aria-hidden="true">↓</span></a></div>
      </div>
      <div class="hero-note"><span class="note-icon" aria-hidden="true">⌖</span><span><strong>পাকশী, ঈশ্বরদী</strong><small>পদ্মার পারে ঐতিহ্যের সেতুবন্ধন</small></span></div>
      <span class="hero-credit">${attribution(photos.hardinge)}</span>
      <a class="scroll-cue" href="#introduction" aria-label="নিচে স্ক্রল করুন"><span></span></a>
    </section>
    <section class="welcome-section section-wrap" id="introduction"><div class="welcome-copy reveal"><span class="eyebrow">জেলার সঙ্গে পরিচয়</span><h2>পদ্মা–যমুনার স্নিগ্ধতায়,<br>ঐতিহ্যে ভরা এক জনপদ</h2><p>বাংলাদেশের রাজশাহী বিভাগের পাবনা—নদী, বিল, ইতিহাস আর মানুষের আন্তরিকতায় গড়া এক জেলা। হার্ডিঞ্জ ব্রিজের গর্ব, জোড় বাংলা মন্দিরের নকশা, চলনবিলের ঋতুরূপ আর কর্মচঞ্চল জনপদ মিলে তৈরি করেছে এর স্বতন্ত্র পরিচয়।</p><a class="text-link" href="about.html">পাবনা সম্পর্কে আরও জানুন <span aria-hidden="true">→</span></a></div>
      <div class="welcome-image reveal">${imageMarkup("beel", "")}<div class="image-label"><span>✦</span><span>প্রকৃতির রূপে পাবনা</span></div><span class="image-credit">${attribution(photos.beel)}</span></div>
    </section>
    <section class="highlight-section"><div class="section-wrap"><div class="section-heading centered reveal"><span class="eyebrow">এক জেলায় অনেক গল্প</span><h2>পাবনার বিশেষ পরিচয়</h2><p>শুধু একটি গন্তব্য নয়—এ এক বহুমাত্রিক অভিজ্ঞতা।</p></div><div class="highlight-grid">${highlights.map((item, index) => `<a href="${item[3]}" class="highlight-card reveal"><span class="highlight-icon icon-${index}" aria-hidden="true">${item[2]}</span><h3>${item[0]}</h3><p>${item[1]}</p><span class="card-arrow" aria-hidden="true">↗</span></a>`).join("")}</div></div></section>
    <section class="featured-section section-wrap"><div class="section-heading section-heading-row reveal"><div><span class="eyebrow">দেখার মতো জায়গা</span><h2>পাবনার চেনা-অচেনা</h2><p>ঐতিহাসিক স্থাপনা, সেতু ও নদীর দৃশ্য একসঙ্গে আবিষ্কার করুন।</p></div><a class="text-link" href="tourism.html">সব গন্তব্য <span aria-hidden="true">→</span></a></div><div class="featured-grid">
      ${["hardinge", "temple", "mosque"].map((key, index) => `<article class="featured-card reveal ${index === 0 ? "featured-large" : ""}"><a class="featured-mainlink" href="tourism.html" aria-label="${esc(photos[key].title)} সম্পর্কে জানুন">${imageMarkup(key, "")}<span class="featured-shade"></span><span class="featured-text"><small>${index === 0 ? "ঈশ্বরদী · পাকশী" : index === 1 ? "পাবনা শহর" : "চাটমোহর"}</small><strong>${photos[key].title}</strong></span></a><span class="featured-credit">${attribution(photos[key])}</span></article>`).join("")}
    </div></section>
    <section class="gallery-section"><div class="section-wrap"><div class="section-heading centered reveal"><span class="eyebrow">দৃশ্যের অ্যালবাম</span><h2>চোখে দেখা পাবনা</h2><p>প্রকৃতি ও ঐতিহ্যের কয়েকটি মুহূর্ত। ছবিতে ক্লিক করে বড় করে দেখুন।</p></div><div class="gallery-grid">${gallery.map((key) => `<figure class="gallery-item reveal"><button class="gallery-trigger lightbox-trigger" type="button" data-src="${photos[key].src}" data-alt="${esc(photos[key].alt)}" aria-label="${esc(photos[key].title)} ছবিটি বড় করে দেখুন">${imageMarkup(key, "")}<span class="gallery-zoom" aria-hidden="true">+</span></button><figcaption class="gallery-caption"><strong>${photos[key].title}</strong><small>${attribution(photos[key])}</small></figcaption></figure>`).join("")}</div></div></section>
    <section class="home-cta section-wrap reveal"><div><span class="eyebrow">জানুন, দেখুন, অনুভব করুন</span><h2>পাবনার গল্পে আপনাকে স্বাগতম</h2><p>জেলা, উপজেলা, ইতিহাস ও ভ্রমণ-তথ্যের আরও বিস্তারিত দেখুন।</p></div><a class="button button-primary" href="upazilas.html">উপজেলাগুলো জানুন <span aria-hidden="true">→</span></a></section>`;
}

function renderFooter() {
  return `<footer class="site-footer"><div class="footer-main section-wrap"><div class="footer-brand"><a class="brand brand-footer" href="index.html"><span class="brand-mark" aria-hidden="true"><span>প</span></span><span class="brand-copy"><strong>আমাদের পাবনা</strong><small>আমার জেলা, আমার গর্ব</small></span></a><p>ইতিহাস, ঐতিহ্য, প্রকৃতি ও সম্ভাবনার জেলা—পাবনাকে জানার একটি তথ্যভিত্তিক উদ্যোগ।</p></div>
    <div class="footer-links"><h2>দ্রুত লিংক</h2><ul>${sitePages.slice(0, 5).map((page) => `<li><a href="${page.file}">${page.label}</a></li>`).join("")}</ul></div>
    <div class="footer-links"><h2>আরও জানুন</h2><ul>${sitePages.slice(5).map((page) => `<li><a href="${page.file}">${page.label}</a></li>`).join("")}</ul></div>
    <div class="footer-links footer-official"><h2>সরকারি তথ্য</h2><p>সরকারি সেবা ও হালনাগাদ তথ্যের জন্য জেলা প্রশাসনের পোর্টাল দেখুন।</p><a href="https://pabna.gov.bd/" target="_blank" rel="noopener noreferrer">পাবনা জেলা পোর্টাল <span aria-hidden="true">↗</span></a><span class="social-caption">সামাজিক মাধ্যম</span><div class="social-links" aria-label="সামাজিক মাধ্যম"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">◎</a></div></div>
  </div><div class="footer-bottom"><div class="section-wrap"><span>© <span id="current-year"></span> আমাদের পাবনা</span><span>একটি অনানুষ্ঠানিক পরিচিতিমূলক ওয়েবসাইট · ছবির স্বত্ব নিজ নিজ অবদানকারীর</span><a href="#top" class="footer-top">উপরে যান ↑</a></div></div></footer>`;
}

function setupInteractions() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");
  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(open));
      navigation.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
    });
  }
  const moreToggle = document.querySelector(".more-toggle");
  const moreMenu = document.querySelector(".more-menu");
  if (moreToggle && moreMenu) {
    moreToggle.addEventListener("click", () => {
      const open = moreToggle.getAttribute("aria-expanded") !== "true";
      moreToggle.setAttribute("aria-expanded", String(open));
      moreMenu.classList.toggle("is-open", open);
    });
  }
  document.querySelectorAll(".navigation a").forEach((link) => link.addEventListener("click", () => {
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    }
  }));
  const backTop = document.createElement("button");
  backTop.className = "back-to-top";
  backTop.type = "button";
  backTop.setAttribute("aria-label", "পাতার উপরে যান");
  backTop.innerHTML = "↑";
  document.body.appendChild(backTop);
  const updateTopButton = () => backTop.classList.toggle("is-visible", window.scrollY > 420);
  window.addEventListener("scroll", updateTopButton, { passive: true });
  updateTopButton();
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const lightboxTriggers = document.querySelectorAll(".lightbox-trigger");
  if (lightboxTriggers.length) {
    const dialog = document.createElement("div");
    dialog.className = "lightbox";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-label", "ছবির পূর্বরূপ");
    dialog.innerHTML = `<button type="button" class="lightbox-close" aria-label="ছবি বন্ধ করুন">×</button><img alt=""><p></p>`;
    document.body.appendChild(dialog);
    const dialogImage = dialog.querySelector("img");
    const caption = dialog.querySelector("p");
    const closeButton = dialog.querySelector(".lightbox-close");
    const close = () => {
      dialog.classList.remove("is-open");
      document.body.classList.remove("lightbox-open");
    };
    lightboxTriggers.forEach((trigger) => trigger.addEventListener("click", () => {
      dialogImage.src = trigger.dataset.src;
      dialogImage.alt = trigger.dataset.alt || "";
      caption.textContent = trigger.dataset.alt || "";
      dialog.classList.add("is-open");
      document.body.classList.add("lightbox-open");
      closeButton.focus();
    }));
    closeButton.addEventListener("click", close);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) close();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && dialog.classList.contains("is-open")) close();
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
}

const pageId = document.body.dataset.page || "home";
document.getElementById("site-header").innerHTML = renderHeader(pageId);
document.getElementById("page-content").innerHTML = pageId === "home" ? renderHome() : renderSubpage(pageId);
document.getElementById("site-footer").innerHTML = renderFooter();
document.body.insertAdjacentHTML("afterbegin", '<a class="skip-link" href="#page-content">মূল কনটেন্টে যান</a><span id="top"></span>');
document.getElementById("current-year").textContent = String(new Date().getFullYear());
setupInteractions();
