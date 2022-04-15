import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "News-Medical.Net",
      },
      author: null,
      title:
        "Booster dose of mRNA vaccine highly effective in preventing SARS-CoV-2 infection - News-Medical.Net",
      description:
        "A booster dose of mRNA vaccine significantly decreases the risk of being infected with either the delta or omicron COVID-19 variants, according to scientists at the Rocky Mountain Center for Occupational and Environmental Health (RMCOEH), a program partnershi…",
      url: "https://www.news-medical.net/news/20220414/Booster-dose-of-mRNA-vaccine-highly-effective-in-preventing-SARS-CoV-2-infection.aspx",
      urlToImage:
        "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2017/1/A_doctor_makes_a_vaccination_to_a_child-Yuganov_Konstantin_cdbf1b05417f45e89b8268af4858e1c9-620x480.jpg",
      publishedAt: "2022-04-15T01:39:00Z",
      content:
        "A booster dose of mRNA vaccine significantly decreases the risk of being infected with either the delta or omicron COVID-19 variants, according to scientists at the Rocky Mountain Center for Occupati… [+2711 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "hindustantimes.com",
      title:
        "Ukraine war day 51| Russia lead warship sinks, US says ‘big blow’: 10 points - Hindustan Times",
      description:
        "Ukraine war: Speculation is rife that Russia's Vladimir Putin may resort to the use of nuclear weapons after current setbacks.  | World News",
      url: "https://www.hindustantimes.com/world-news/ukraine-war-day-51-russia-lead-warship-sinks-us-says-big-blow-10-points-101649982976018.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/04/15/1600x900/Russia-Ukraine-War-Ship-1_1649983282181_1649983287766.jpg",
      publishedAt: "2022-04-15T00:41:54Z",
      content:
        "A Ukrainian-made Neptune anti-ship missile hit Russias lead warship on Thursday, and hours later it sank in the Blank Sea, Kyiv has said, in the latest flare-up between the two countries as the war e… [+3206 chars]",
    },
    {
      source: {
        id: null,
        name: "Itnewsonline.com",
      },
      author: null,
      title:
        "Coverage Set for NASA's SpaceX Crew-4 Briefing, Events, Broadcast - IT News Online",
      description:
        "Coverage Set for NASA's SpaceX Crew-4 Briefing, Events, Broadcast",
      url: "http://www.itnewsonline.com/PRNewswire/Coverage-Set-for-NASAs-SpaceX-Crew-4-Briefing-Events-Broadcast/833628",
      urlToImage: null,
      publishedAt: "2022-04-14T23:50:50Z",
      content:
        "<table><tr><td>Coverage Set for NASA's SpaceX Crew-4 Briefing, Events, BroadcastCopyright 2022 PR Newswire. All Rights Reserved2022-04-14</td></tr></table> WASHINGTON, April 14, 2022 /PRNewswire/ --… [+10131 chars]",
    },
    {
      source: {
        id: null,
        name: "PINKVILLA",
      },
      author: "Pinkvilla Desk",
      title:
        "WATCH: Groom Ranbir Kapoor kneels in front of Alia Bhatt during varmala ceremony, seals his love with a kiss - PINKVILLA",
      description:
        "Alia Bhatt and Ranbir Kapoor dated for five years before taking their relationship a step further.",
      url: "https://www.pinkvilla.com/entertainment/news/watch-groom-ranbir-kapoor-kneels-front-alia-bhatt-during-varmala-ceremony-seals-his-love-kiss-1068461",
      urlToImage:
        "https://www.pinkvilla.com/files/styles/fbimagesection/public/ranbir-alia-kiss_social_0.jpg?itok=HDxbGQNU",
      publishedAt: "2022-04-14T23:40:39Z",
      content:
        "After creating a massive buzz about their affair and wedding, Ranbir Kapoor and Alia Bhatt finally tied the knot on April 14 in presence of their close friends and family members. They tied the knot … [+1436 chars]",
    },
    {
      source: {
        id: null,
        name: "Deccan Chronicle",
      },
      author: "Swati Sharma",
      title: "Gluten Intolerance: A rising problem - Deccan Chronicle",
      description:
        "Until a few decades ago, Celiac Disease was regarded as uncommon, but now it is considered a major health problem worldwide",
      url: "https://www.deccanchronicle.com/lifestyle/health-and-wellbeing/150422/gluten-intolerance-a-rising-problem.html",
      urlToImage:
        "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-9laj4qtkm655bbhngu0hap9vt0-20180121093351.Medi.jpeg",
      publishedAt: "2022-04-14T22:58:00Z",
      content:
        "Recently, Miss Universe 2021 Harnaaz Sandhu, revealed after being trolled for gaining weight, that she had been diagnosed with Celiac Disease, a condition triggered by sensitivity to gluten, a protei… [+2333 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBCTV18",
      },
      author: "Prakhar Sachdeo",
      title: "RR vs GT LIVE score - CNBCTV18",
      description:
        "Match 24 of TATA IPL 2022 will see Rajasthan Royals taking on Gujarat Titans at Dr DY Patil Sports Academy on Navi Mumbai. RR led by Sanju Samson sit at the top of the points table after winning three of their first four games of IPL 2022. They come into thi…",
      url: "https://www.cnbctv18.com/sports/ipl-2022-rr-vs-gt-live-score-updates-rajasthan-royals-vs-gujarat-titans-live-updates-dr-d-y-patil-stadium-hardik-pandya-sanju-samson-13158792.htm",
      urlToImage:
        "https://images.cnbctv18.com/wp-content/uploads/2022/04/IPL-2022-Rajasthan-Royals-vs-Gujarat-Titans-24th-Match-Live-Cricket-Score-Commentary-Indian-Premier-League-2022-Venue-Dr-DY-Patil-Sports-Academy-Mumbai--1019x573.jpg",
      publishedAt: "2022-04-14T22:34:57Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Sinking Of Warship A 'Big Blow' To Russian Naval Strength: Pentagon - NDTV",
      description:
        "The sinking of the warship Moskva on Thursday after it was engulfed in an inferno was a 'big blow' to Russia's naval strength in the Black Sea, the Pentagon said Thursday.",
      url: "https://www.ndtv.com/world-news/sinking-of-warship-moskwa-a-big-blow-to-russian-naval-strength-in-black-sea-pentagon-2889819",
      urlToImage:
        "https://c.ndtvimg.com/2022-04/8hqscrhg_russia-moskva-missile-cruiser-afp-650_625x300_14_April_22.jpg",
      publishedAt: "2022-04-14T22:23:19Z",
      content:
        "Ukraine claimed that the ship had been hit in a rocket attack. Washington: The sinking of the warship Moskva on Thursday after it was engulfed in an inferno was a 'big blow' to Russia's naval streng… [+893 chars]",
    },
    {
      source: {
        id: null,
        name: "Greater Kashmir",
      },
      author: "Press Trust of India",
      title:
        "Mushtaq Zargar designated as terrorist under UAPA - Greater Kashmir",
      description: "",
      url: "https://www.greaterkashmir.com/front-page-2/mushtaq-zargar-designated-as-terrorist-under-uapa",
      urlToImage:
        "https://gumlet.assettype.com/greaterkashmir%2Fimport%2F2017%2F06%2F2017_6largeimg215_jun_2017_011417647.jpg?w=1200&auto=format%2Ccompress&ogImage=true",
      publishedAt: "2022-04-14T22:12:37Z",
      content:
        "The home ministry said Zargar is a threat to peace, not only to India but around the world, with his contacts and proximity to radical terrorist groups like the Al-Qaeda and Jaish-e-Mohammed and the … [+739 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Twitter CEO tells employees company not 'held hostage' by Elon Musk offer: source - The Hindu",
      description: "",
      url: "https://news.google.com/__i/rss/rd/articles/CBMiiAFodHRwczovL3d3dy50aGVoaW5kdS5jb20vYnVzaW5lc3MvSW5kdXN0cnkvdHdpdHRlci1jZW8tdGVsbHMtZW1wbG95ZWVzLWNvbXBhbnktbm90LWhlbGQtaG9zdGFnZS1ieS1tdXNrLW9mZmVyLXNvdXJjZS9hcnRpY2xlNjUzMjIyODMuZWNl0gGNAWh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9idXNpbmVzcy9JbmR1c3RyeS90d2l0dGVyLWNlby10ZWxscy1lbXBsb3llZXMtY29tcGFueS1ub3QtaGVsZC1ob3N0YWdlLWJ5LW11c2stb2ZmZXItc291cmNlL2FydGljbGU2NTMyMjI4My5lY2UvYW1wLw?oc=5",
      urlToImage: null,
      publishedAt: "2022-04-14T22:09:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Johnson T A",
      title:
        "Contractor death case: Karnataka minister Eshwarappa to step down amid mounting pressure - The Indian Express",
      description:
        "The Minister said he was quitting “to prevent embarrassment to the BJP'' and would submit his resignation to Bommai in Bengaluru.",
      url: "https://indianexpress.com/article/cities/bangalore/karnataka-minister-eshwarappa-booked-in-contractor-death-to-resign-tomorrow-7869429/",
      urlToImage: "https://images.indianexpress.com/2022/04/eshwarappa-3.jpg",
      publishedAt: "2022-04-14T19:00:02Z",
      content:
        "TWO DAYS after he was named as an accused in a case registered over the unnatural death of a civil contractor, Karnataka Minister and senior BJP leader K S Eshwarappa announced that he would resign f… [+3769 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "Cricbuzz Live: Match 24, #RRvGT, Post-match show - Cricbuzz",
      description: "",
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDoNUojj4WMU",
      urlToImage: null,
      publishedAt: "2022-04-14T18:40:34Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Ranbir Kapoor, Alia Bhatt Wedding: Deepika Padukone Wishes The Newlyweds 'Love, Light And Laughter' - NDTV Movies",
      description:
        "Alia, Ranbir Wedding: 'Wishing you both a lifetime of love, light and laughter,' wrote Deepika Padukone",
      url: "https://www.ndtv.com/entertainment/ranbir-kapoor-alia-bhatt-wedding-deepika-padukone-wishes-the-newlyweds-love-light-and-laughter-2889657",
      urlToImage:
        "https://c.ndtvimg.com/2022-04/iftrjnr_deepika_625x300_14_April_22.jpg",
      publishedAt: "2022-04-14T18:30:10Z",
      content:
        "Deepika and Alia posing together Alia Bhatt's wedding post is overwhelmed by comments left by her Bollywood colleagues, among the Deepika Padukone. Alia and Ranbir Kapoor got married on Thursday aft… [+1595 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "Press Trust of India",
      title:
        "IPL 2022, RR vs GT Report: Gujarat Titans Beat Rajasthan Royals To Go Top Of The Table - NDTV Sports",
      description:
        "IPL 2022: Skipper Hardik Pandya enhanced his reputation as a number four batter with an unbeaten 87 off 52 balls as Gujarat Titans trounced Rajasthan Royals by 37 runs in the Indian Premier League here on Thursday.",
      url: "https://sports.ndtv.com/ipl-2022/ipl-2022-rr-vs-gt-report-gujarat-titans-beat-rajasthan-royals-to-go-top-of-the-table-2889581",
      urlToImage:
        "https://c.ndtvimg.com/2022-04/ikc6bf58_gujarat-titans-bcci_625x300_14_April_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2022-04-14T18:19:11Z",
      content:
        "Skipper Hardik Pandya enhanced his reputation as a number four batter with an unbeaten 87 off 52 balls as Gujarat Titans trounced Rajasthan Royals by 37 runs in the Indian Premier League here on Thur… [+3137 chars]",
    },
    {
      source: {
        id: null,
        name: "Cricketaddictor.com",
      },
      author: "More by Vicky Singh",
      title:
        "SRH vs KKR Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Tata IPL 2022 - Cricket Addictor",
      description:
        "SRH vs KKR Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Tata IPL 2022 SunRisers Hyderabad vs Kolkata Knight Riders Dream11 Prediction 2022 Today Match",
      url: "https://cricketaddictor.com/fantasy-cricket/srh-vs-kkr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-tata-ipl-2022/",
      urlToImage:
        "https://cricketaddictor.com/wp-content/uploads/2022/04/2-1-5.png",
      publishedAt: "2022-04-14T18:13:35Z",
      content:
        "SRH vs KKR Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of Tata IPL 2022 match between Sunrisers Hyderabad and Kolkata Knight Riders. They will play… [+5526 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TIMESOFINDIA.COM",
      title:
        "iQoo to launch Z6 Pro 5G in India soon: Launch date, expected price and more - Times of India",
      description:
        "Leaks and rumours about iQoo launching its mid-range smartphone Z6 Pro 5G have been doing the rounds for a while.",
      url: "https://timesofindia.indiatimes.com/gadgets-news/iqoo-to-launch-z6-pro-5g-in-india-soon-launch-date-expected-price-and-more/articleshow/90853146.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90853146,width-1070,height-580,imgsize-658120,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-04-14T17:57:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "SlashGear",
      },
      author: "Rahul Srinivas",
      title:
        "Amazon Officially Unwraps Upcoming OnePlus Flagship With 150W Fast Charging - SlashGear",
      description:
        "The next OnePlus phone was just revealed by Amazon, while another new OnePlus smartphone sits in the wings, barely confirmed to exist before launch.",
      url: "https://www.slashgear.com/832627/amazon-officially-unwraps-upcoming-oneplus-flagship-with-150w-fast-charging/",
      urlToImage:
        "https://www.slashgear.com/img/gallery/amazon-officially-unwraps-upcoming-oneplus-flagship-with-150w-fast-charging/l-intro-1649958855.jpg",
      publishedAt: "2022-04-14T17:56:00Z",
      content:
        "Even though the OnePlus 10R would be positioned below the OnePlus 10, there are certain areas in which it seems to beat its more powerful, expensive sibling. When launched, the OnePlus 10R could beco… [+1571 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "Paytm Becomes Official Digital Payments Partner For Prime Ministers' Museum | Mint - Mint",
      description:
        "During the event, the PM bought the first ticket to the museum through Paytm electronic data capture machine.",
      url: "https://www.livemint.com/companies/news/paytm-becomes-official-digital-payments-partner-for-prime-ministers-museum-11649953487746.html",
      urlToImage:
        "https://images.livemint.com/img/2022/04/14/600x338/paytm-kBLD--621x414@LiveMint_1649954202160.jpg",
      publishedAt: "2022-04-14T16:37:13Z",
      content:
        "Paytm has become an official digital payments partner for the prime ministers' museum, One97 Communications owner of the fintech company said on Thursday.  Earlier in the day, Prime Minister Narendr… [+2018 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "AP",
      title:
        "Vladimir Putin warns against phasing out Russian gas - The Indian Express",
      description:
        "The European Union is dependent on Russia for 40% of its natural gas and 25% of its oil.",
      url: "https://indianexpress.com/article/world/vladimir-putin-warns-against-phasing-out-russian-gas-7869770/",
      urlToImage: "https://images.indianexpress.com/2022/03/putin-3-1-1.jpg",
      publishedAt: "2022-04-14T16:37:10Z",
      content:
        "Russian President Vladimir Putin has warned that Western countries’ attempts to phase out Russian gas imports will have a negative impact on their economies.Speaking Thursday, Putin said European att… [+540 chars]",
    },
    {
      source: {
        id: null,
        name: "Bollywood Hungama",
      },
      author: "Bollywood Hungama",
      title:
        "KGF 2 Box Office Estimate Day 1: Collects Rs. 50 crores in Hindi; Yash defeats Baahubali 2 to become another pan India sensation - Bollywood Hungama",
      description:
        "KGF 2 Box Office Estimate Day 1: Collects Rs. 50 crores in Hindi; Yash defeats Baahubali 2 to become another pan India sensation. Bollywood News: Latest Bollywood News, Bollywood News Today, Bollywood Celebrity News, Breaking News, Celeb News, Celebrities New…",
      url: "https://www.bollywoodhungama.com/news/box-office-special-features/kgf-2-box-office-estimate-day-1-collects-rs-50-crores-hindi-yash-defeats-baahubali-2-become-another-pan-india-sensation/",
      urlToImage:
        "https://stat2.bollywoodhungama.in/wp-content/uploads/2022/04/KGF-2-Box-Office-Estimate-Day-1-Collects-Rs.-50-crores-in-Hindi-Yash-defeats-Baahubali-2-to-become-another-pan-India-sensation.jpeg",
      publishedAt: "2022-04-14T16:30:10Z",
      content:
        "KGF 2 has the chance of surpassing War to emerge the biggest opener of all time in the Hindi markets, and we would have a clearer picture once we have the numbers from smaller centres, which were lit… [+1350 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=crypto&apiKey=d4dbb2c29bdc4152a0cb09f5f2a2ed24";
    let data = await fetch(url);
    let parsedData = await data.json();
  }

  render() {
    return (
      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container p-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {this.state.articles.map((element) => {
              return (
                <NewsItems
                  key={element.url}
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default News;
