import React, { Component } from 'react';
import NewsItem from './NewsItem';
import './news.css';

export class News extends Component {
  //!Properties of the class
  articles = [
    {
      source: {
        id: 'the-verge',
        name: 'The Verge',
      },
      author: 'Jon Porter',
      title: 'Zelda and Mario boost Nintendo to record profit - The Verge',
      description:
        'Nintendo just had a very profitable first quarter thanks to the release of The Legend of Zelda: Tears of the Kingdom, as well as The Super Mario Bros. Movie.',
      url: 'https://www.theverge.com/2023/8/3/23818357/nintendo-earnings-q1-2024-zelda-totk-mario-movie-profits',
      urlToImage:
        'https://cdn.vox-cdn.com/thumbor/vpVcVjgOLKUBbv6b55mGzUsQiRU=/0x0:2160x1440/1200x628/filters:focal(1080x720:1081x721)/cdn.vox-cdn.com/uploads/chorus_asset/file/24428734/Screen_Shot_2023_02_13_at_8.38.37_AM.jpg',
      publishedAt: '2023-08-03T08:14:41Z',
      content:
        'Zelda and Mario boost Nintendo to record profit\r\nZelda and Mario boost Nintendo to record profit\r\n / Tears of the Kingdom has sold 18.51 million units, and the Super Mario Bros. Movie has grossed ove… [+2101 chars]',
    },
    {
      source: {
        id: null,
        name: 'India Today',
      },
      author: 'Abhik Sengupta',
      title:
        'HP Dragonfly G4 with 13th-Gen Intel CPU and advanced security features launched, price starts at Rs 2.2 lakh - India Today',
      description:
        "At over Rs 2 lakh, the HP Dragonfly G4 is one of the priciest 13-inch laptops aimed at professionals. For perspective, Apple's latest 13-inch MacBook Air with in-house M2 SoC and 256GB SSD costs 1.14 lakh.",
      url: 'https://www.indiatoday.in/technology/news/story/hp-dragonfly-g4-laptop-13th-gen-intel-cpu-advanced-security-price-rs-22-lakh-2415681-2023-08-03',
      urlToImage:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/hp-dragonfly-g4-030129-16x9.jpg?VersionId=me4bXeM4_kJ21BI69tsnXkonce8MPwVI',
      publishedAt: '2023-08-03T08:04:59Z',
      content:
        'By Abhik Sengupta: HP India has refreshed its ultra-premium Dragonfly laptop series with the new HP Dragonfly G4 notebook, primarily designed for C-suite customers. The new laptop boasts a super slee… [+2315 chars]',
    },
    {
      source: {
        id: 'the-times-of-india',
        name: 'The Times of India',
      },
      author: 'TIMESOFINDIA.COM',
      title:
        'Dyson V12s Detect Slim Submarine wet-and-dry cordless vacuum cleaner launched, priced at Rs 62,900 - Times of India',
      description:
        'Dyson has launched its first all-in-one wet-and-dry cordless vacuum cleaner, the V12s Detect Slim Submarine. The device, which costs INR62,900 ($848),',
      url: 'https://timesofindia.indiatimes.com/gadgets-news/dyson-v12s-detect-slim-submarine-wet-and-dry-cordless-vacuum-cleaner-launched-priced-at-rs-62900/articleshow/102382809.cms',
      urlToImage:
        'https://static.toiimg.com/thumb/msid-102382781,width-1070,height-580,imgsize-16094,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
      publishedAt: '2023-08-03T07:37:00Z',
      content: null,
    },
    {
      source: {
        id: null,
        name: 'Jagran.com',
      },
      author: 'Ashish Singh',
      title:
        "Google's AI-Powered Search Will Show Related Videos And Images; Full Details - Jagran English",
      description:
        'Google enhances its AI-powered Search Generative Experience SGE with related videos in overviews Users can quickly explore new topics and find helpful tips or products The update also reduces AI overview generation time by half Google is also developing a sup…',
      url: 'https://english.jagran.com/technology/googles-aipowered-search-will-show-related-videos-and-images-full-details-10091455',
      urlToImage:
        'https://imgeng.jagran.com/images/2023/aug/Google (5)1691046806686.jpg',
      publishedAt: '2023-08-03T07:27:00Z',
      content:
        'Google, which has been making a slew of changes to its generative AI search, has now announced AI-powered Search Generative Experience (SGE) with an aim to offer a more engaging search experience. Ac… [+1880 chars]',
    },
    {
      source: {
        id: null,
        name: 'India Today',
      },
      author: 'Divya Bhati',
      title:
        'AI becomes astrologer, here is how Kundali GPT chatbot uses artificial intelligence to predict horoscope - India Today',
      description:
        'An NIT alumnus has launched a new AI-powered chatbot named Kundali GPT, which offers personalized astrological readings and insights into horoscopes.',
      url: 'https://www.indiatoday.in/technology/news/story/ai-becomes-astrologer-here-is-how-kundali-gpt-chatbot-uses-artificial-intelligence-to-predict-horoscope-2415642-2023-08-03',
      urlToImage:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/kundali-gpt-030532-16x9.jpg?VersionId=BBIuKhZTRWQY0lCJfSAF6slUKJz9b..R',
      publishedAt: '2023-08-03T07:05:49Z',
      content:
        "By Divya Bhati: Artificial Intelligence is revolutionising our lives, impacting every field imaginable. It's helping software engineers in coding, assisting students in assignments, and even aiding c… [+3076 chars]",
    },
    {
      source: {
        id: 'the-times-of-india',
        name: 'The Times of India',
      },
      author: 'The Feed',
      title:
        "Quordle #556: Clues, answers to today's wordy puzzle for August 3 - The Economic Times",
      description:
        "Today's Quordle #556 is out for August 3. Read on for the hints and answers to keep up with your winning streak.",
      url: 'https://economictimes.indiatimes.com/news/international/us/quordle-556-clues-answers-to-todays-wordy-puzzle-for-august-3/articleshow/102380767.cms',
      urlToImage:
        'https://img.etimg.com/thumb/msid-102381420,width-1070,height-580,imgsize-19050,overlay-economictimes/photo.jpg',
      publishedAt: '2023-08-03T07:04:01Z',
      content:
        'Welcome back to the Quordle feed, gamers! We are thrilled to help you maintain your winning streak and level up your Quordle game score with a bunch of clues and solutions for the new word puzzle.His… [+1799 chars]',
    },
    {
      source: {
        id: 'the-hindu',
        name: 'The Hindu',
      },
      author: 'The Hindu',
      title:
        'Meta launches open-source AI music generation tool ‘AudioCraft’ - The Hindu',
      description: null,
      url: 'https://www.thehindu.com/sci-tech/technology/meta-launches-open-source-ai-music-generation-tool-audiocraft/article67153116.ece',
      urlToImage: null,
      publishedAt: '2023-08-03T07:00:00Z',
      content: null,
    },
    {
      source: {
        id: null,
        name: 'Jagran.com',
      },
      author: 'Vikas Yadav',
      title:
        'Infinix GT 10 Pro Launched In India With LED Lights, Cyber Mecha Design | Check Price, Offers, Discounts, Sp - Jagran English',
      description:
        'Infinix GT 10 Pro Pre-orders The phone has a starting price of Rs 19999 on Flipkart for the 8GB  256GB variant It is available in two colour options Cyber Black and Mirage Silver The smartphone comes with a Cyber Mecha Design with a transparent back and LED l…',
      url: 'https://english.jagran.com/technology/infinix-gt-10-pro-preorders-now-live-on-flipkart-check-price-specifications-and-offers-discounts-in-india-10091449',
      urlToImage:
        'https://imgeng.jagran.com/images/2023/aug/infinix-gt-10-pro1691045964732.jpg',
      publishedAt: '2023-08-03T06:43:16Z',
      content:
        'Infinix, a Chinese smartphone manufacturer, has launched the Infinix GT 10 Pro smartphone in India. The smartphone carries a transparent back with LEDs that may remind you of the newly-launched Nothi… [+2417 chars]',
    },
    {
      source: {
        id: null,
        name: 'The Indian Express',
      },
      author: 'The Indian Express',
      title:
        'OnePlus Open reportedly delayed due to change in display supplier - The Indian Express',
      description: null,
      url: 'https://indianexpress.com/article/technology/mobile-tabs/oneplus-open-reportedly-delayed-due-to-change-in-display-supplier-8874142/',
      urlToImage: null,
      publishedAt: '2023-08-03T06:26:33Z',
      content: null,
    },
    {
      source: {
        id: null,
        name: 'GSMArena.com',
      },
      author: 'Sagar',
      title:
        'Apple AirTag 2 likely to enter mass production in Q4 2024 - GSMArena.com',
      description:
        "It might have better integration with the Vision Pro as a part of Apple's spatial computing ecosystem. Apple unveiled the AirTag in April 2021 for $29,...",
      url: 'https://www.gsmarena.com/apple_airtag_2_mass_production_q4_2024_tipped-news-59413.php',
      urlToImage:
        'https://fdn.gsmarena.com/imgroot/news/23/08/apple-airtag-2-q4-2024-mass-production-tipped/-952x498w6/gsmarena_001.jpg',
      publishedAt: '2023-08-03T05:45:01Z',
      content:
        "Apple unveiled the AirTag in April 2021 for $29, which will likely get a successor in late 2024 or early 2025 if analyst Ming-Chi Kuo's prediction turns correct.\r\nKuo predicts the AirTag 2 (tentative… [+469 chars]",
    },
    {
      source: {
        id: null,
        name: 'Jagran.com',
      },
      author: 'Vikas Yadav',
      title:
        'Chrome Updates: Google Introduces Four New Features To Enhance Your Search Experience On Android And iOS | D - Jagran English',
      description:
        'Google Chrome Update Google Chrome among the most popular internet browsers in the world is getting four meaningful upgrades on mobile With these additions the search giant aims to offer more search suggestions that will help a user find information faster',
      url: 'https://english.jagran.com/technology/chrome-new-update-google-introduces-four-features-to-enhance-your-search-suggestions-on-android-ios-smartphones-latest-news-10091434',
      urlToImage:
        'https://imgeng.jagran.com/images/2023/aug/google-chrome-new-features1691040796121.jpg',
      publishedAt: '2023-08-03T05:40:47Z',
      content:
        'Google Chrome, among the most popular internet browsers in the world, is getting meaningful upgrades on mobile. The tech giant regularly rolls out upgrades to polish user experience across diverse as… [+1787 chars]',
    },
    {
      source: {
        id: null,
        name: 'The Indian Express',
      },
      author: 'IE Online',
      title:
        'OnePlus’s latest mid-range smartphone, the OnePlus Nord CE 3 5G, to go on sale on August 4 with various offers and benefits - The Indian Express',
      description:
        'OnePlus has put up a plethora of lucrative offers for customers to avail of during the sale of the Nord CE 3 5G.',
      url: 'https://indianexpress.com/article/technology/tech-news-technology/oneplus-nord-ce-3-5g-sale-aug-4-8874254/',
      urlToImage:
        'https://images.indianexpress.com/2023/08/oneplus-nord-ce-3-5g-lead.jpg',
      publishedAt: '2023-08-03T05:29:55Z',
      content:
        'Global mobile phone company OnePlus is all set to bring its new mid-range smartphone, the OnePlus Nord CE 3 5G, to the market. The OnePlus Nord CE 3 5G, which was unveiled earlier this month, along w… [+3154 chars]',
    },
    {
      source: {
        id: null,
        name: 'Zee Business',
      },
      author: null,
      title:
        'Microsoft Teams unleashes spatial audio, but bluetooth users are left behind - Zee Business',
      description:
        'Microsoft has rolled out spatial audio for its Teams desktop app, providing a more immersive call experience. However, Bluetooth earbud users may feel left out, as the feature is currently limited to wired headsets and stereo-capable laptops. Discover the ben…',
      url: 'https://www.zeebiz.com/technology/video-gallery-microsoft-teams-unleashes-spatial-audio-but-bluetooth-users-are-left-behind-247319',
      urlToImage:
        'https://cdn.zeebiz.com/sites/default/files/2023/08/03/254483',
      publishedAt: '2023-08-03T05:18:01Z',
      content: null,
    },
    {
      source: {
        id: null,
        name: 'Livemint',
      },
      author: 'Govind Choudhary',
      title:
        'Amazon Great Freedom Festival Sale starts today for Prime Members. Check out best deals and offers on premium phones | Mint - Mint',
      description:
        'Amazon Great Freedom Festival Sale begins today at 12 PM IST for Prime members. Non-Prime members can shop from August 4 onwards. Extra 10% discount for SBI Credit Card transactions or EMI. Sale runs until August 8 with discounts on smartphones, laptops, TVs,…',
      url: 'https://www.livemint.com/technology/gadgets/amazon-great-freedom-festival-sale-starts-for-prime-members-check-out-best-deals-and-offers-11691037765571.html',
      urlToImage:
        'https://www.livemint.com/lm-img/img/2023/08/03/600x338/iphone_14_pro_max_1691039383219_1691039389911.jpg',
      publishedAt: '2023-08-03T05:13:54Z',
      content:
        'The Amazon Great Freedom Festival Sale is commencing today at 12 PM IST, exclusively for Prime members. For non-Prime members, the sale will begin from August 4 onwards. Interestingly, during this sa… [+2309 chars]',
    },
    {
      source: {
        id: null,
        name: 'Business Standard',
      },
      author: 'Business Standard',
      title:
        'Samsung to launch Galaxy F34 5G smartphone in India on Aug 7: Details here - Business Standard',
      description: null,
      url: 'https://www.business-standard.com/technology/gadgets/samsung-to-launch-galaxy-f34-5g-smartphone-in-india-on-aug-7-details-here-123080300180_1.html',
      urlToImage: null,
      publishedAt: '2023-08-03T04:42:05Z',
      content: null,
    },
    {
      source: {
        id: 'the-verge',
        name: 'The Verge',
      },
      author: 'Sean Hollister, Wes Davis',
      title:
        "Alienware's new Aurora R16 desktop sheds gobs of plastic for a 40 percent smaller build - The Verge",
      description:
        'The Alienware Aurora R16 largely ditches its trademark out-of-this-world look, achieved via lots of plastic, for better airflow.',
      url: 'https://www.theverge.com/22440712/alienware-aurora-r16-desktop-announcement',
      urlToImage:
        'https://cdn.vox-cdn.com/thumbor/kxSdUarPoV6upx7ATEa4GMj654Q=/0x0:1755x1125/1200x628/filters:focal(795x598:796x599)/cdn.vox-cdn.com/uploads/chorus_asset/file/24827380/Main.png',
      publishedAt: '2023-08-03T04:32:00Z',
      content:
        'Alienwares new Aurora R16 desktop sheds gobs of plastic for a 40 percent smaller build\r\nAlienwares new Aurora R16 desktop sheds gobs of plastic for a 40 percent smaller build\r\n / More box, less alien… [+3764 chars]',
    },
    {
      source: {
        id: null,
        name: 'Sportskeeda',
      },
      author: 'Debayan Saha',
      title:
        'iPhone 15 OLED display rumor hints at slimmer bezels, focus on Pro models, and more - Sportskeeda',
      description:
        "With the highly anticipated launch of Apple's iPhone 15 just around the corner, fresh rumors are starting to emerge from trusted insiders.",
      url: 'https://www.sportskeeda.com/gaming-tech/rumor-iphone-15-oled-display-rumor-hints-slimmer-bezels-focus-pro-models',
      urlToImage:
        'https://staticg.sportskeeda.com/editor/2023/08/f2849-16910301970172-1920.jpg',
      publishedAt: '2023-08-03T03:01:00Z',
      content:
        "With the highly anticipated launch of Apple's iPhone 15 just around the corner, fresh rumors are starting to emerge from trusted insiders. One intriguing piece of information indicates that the upcom… [+2811 chars]",
    },
    {
      source: {
        id: null,
        name: 'Livemint',
      },
      author: 'Livemint',
      title:
        'BGMI redeem codes for Aug 3, 2023: Unlock exciting rewards and free gifts! | Mint - Mint',
      description:
        'BGMI redeem codes allow players to obtain in-game items for free, providing an alternative to purchasing in-game currency.',
      url: 'https://www.livemint.com/technology/tech-news/bgmi-redeem-codes-for-aug-3-2023-unlock-exciting-rewards-and-free-gifts-11691031097944.html',
      urlToImage:
        'https://www.livemint.com/lm-img/img/2023/08/03/600x338/BGMI_1685081078491_1691031314985.jpg',
      publishedAt: '2023-08-03T02:55:26Z',
      content:
        'BGMI (Battlegrounds Mobile India) quickly rose to prominence in India after the ban on PUBG Mobile. Despite facing its own ban, the Indian government decided to allow BGMI back into the country with … [+1969 chars]',
    },
    {
      source: {
        id: null,
        name: 'DAWN.com',
      },
      author: "The Newspaper's Staff Reporter",
      title: 'Premium YouTube for Pakistan - Business - DAWN.COM - DAWN.com',
      description: 'YouTube Premium will be available for Rs479.',
      url: 'https://www.dawn.com',
      urlToImage:
        'https://i.dawn.com/large/2023/08/03085541ff6edc3.jpg?r=085600',
      publishedAt: '2023-08-03T02:01:27Z',
      content:
        'KARACHI: YouTube introduced its premium and music services to users in Pakistan on Wednesday, allowing them to watch videos uninterrupted by ads, while using other apps or when the screen is locked; … [+1355 chars]',
    },
    {
      source: {
        id: null,
        name: 'GSMArena.com',
      },
      author: 'Vlad',
      title: 'Samsung Galaxy S23 FE confirmed to land in India - GSMArena.com',
      description:
        "A new certification reveals it's on its way. Samsung's Galaxy S23 FE has been in the rumor mill for what feels like decades now. Last week a Samsung exec...",
      url: 'https://www.gsmarena.com/samsung_galaxy_s23_fe_confirmed_to_land_in_india-news-59412.php',
      urlToImage:
        'https://fdn.gsmarena.com/imgroot/news/23/08/samsung-galaxy-s23-fe-bis-certified/-952x498w6/gsmarena_000.jpg',
      publishedAt: '2023-08-03T01:46:01Z',
      content:
        "Samsung's Galaxy S23 FE has been in the rumor mill for what feels like decades now. Last week a Samsung exec said it would arrive imminently, and today we have confirmation that it will be offered in… [+888 chars]",
    },
  ];

  //!constructor of the class
  constructor() {
    super();
    console.log('i am a constructor from newscomponent');
    //? creating state in a class based component
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h1>
          <span>NewMonkey</span> - Top Headlines
        </h1>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="My title"
              description="Mydesc"
              imgUrl="https://cdn.vox-cdn.com/thumbor/vpVcVjgOLKUBbv6b55mGzUsQiRU=/0x0:2160x1440/1200x628/filters:focal(1080x720:1081x721)/cdn.vox-cdn.com/uploads/chorus_asset/file/24428734/Screen_Shot_2023_02_13_at_8.38.37_AM.jpg"
              newsUrl="todo"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="My title" description="Mydesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="My title" description="Mydesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
