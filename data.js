/* ============================================================
   TRAVEL STEPS — trip data
   ------------------------------------------------------------
   To add a new trip: copy any { ... } block and edit it.
   - city / country : shown on the page
   - lat / lng      : coordinates (look up in any map app)
   - date           : used for sorting; dateLabel is displayed
   - color          : the city's signature color (marker + card accent)
   - photo          : your own photos. Store bare filenames (city-N.jpg);
                      they resolve automatically on GitHub Pages and locally.
   - climate / terrain / history : city info (shown in the card)
   - tips           : your travel diary tips
   ============================================================ */

// helper: bare photo filenames city-1.jpg ... city-N.jpg
// (main.js resolves them to the right folder for each environment)
function photos(name, from, to) {
  return Array.from({ length: to - from + 1 }, (_, i) => `${name}-${from + i}.jpg`);
}

const TRIPS = [
  {
    city: 'Sydney',
    country: 'Australia',
    date: '2024-01',
    dateLabel: 'Jan – Feb 2024',
    lat: -33.8688,
    lng: 151.2093,
    color: '#2E86AB',
    photo: photos('sydney', 1, 5),
    climate: 'Humid subtropical — warm summers, mild winters',
    terrain: 'Harbour-side coastal city of drowned river valleys, surf beaches and sandstone plateaus',
    history: 'Founded in 1788 as Britain\u2019s first settlement in Australia, Sydney grew into the nation\u2019s largest metropolis. Its Opera House and Harbour Bridge made it a global stage for the arts and waterfront life.',
    tips: [
      'Book a hotel in Mascot \u2014 close to the airport with great public transport (buses and subway), and full of local life: Woolworths, Coles, Asian restaurants, cafes, brunch spots, fine dining and neighbourhood parks.',
      'Circular Quay Station is the best place to start. It\u2019s easy to get to and sits right next to the Opera House and the Royal Botanic Garden.',
      'The USYD (University of Sydney) campus is super attractive \u2014 you can feel both the old-school authority, just like Hogwarts, and the sense of modern life.'
    ]
  },
  {
    city: 'Melbourne',
    country: 'Australia',
    date: '2024-01',
    dateLabel: 'Jan – Feb 2024',
    lat: -37.8136,
    lng: 144.9631,
    color: '#7A5230',
    photo: photos('melbourne', 1, 21),
    climate: 'Temperate oceanic \u2014 famously "four seasons in one day"',
    terrain: 'Flat coastal plain on Port Phillip Bay, rising toward volcanic plains and the Dandenong Ranges',
    history: 'Established in 1835 and transformed by the 1850s gold rush, Melbourne is Australia\u2019s cultural capital \u2014 renowned for Victorian arcades, laneway street art, coffee culture and a packed sporting calendar.',
    tips: [
      'Prepare both shirts and coats \u2014 you may feel a little cold in the morning and evening but super hot at noon.',
      'Open your mouth and clear your stomach before going! Melbourne has so many hidden little pubs and restaurants and the best coffee in Australia. Don\u2019t miss Queen Victoria Market for fresh local veges, dairy and meats.',
      'Driving along the Great Ocean Road is the chillest thing you can do! Little towns along the road have their own unique sights to visit.'
    ]
  },
  {
    city: 'Geelong',
    country: 'Australia',
    date: '2024-01',
    dateLabel: 'Jan – Feb 2024',
    lat: -38.1499,
    lng: 144.3617,
    color: '#43AA8B',
    photo: photos('geelong', 1, 5),
    climate: 'Temperate oceanic \u2014 mild and breezy all year',
    terrain: 'Corio Bay waterfront at the eastern edge of the Bellarine Peninsula',
    history: 'Declared a city in 1849, Geelong is Victoria\u2019s largest regional city and the eastern gateway to the Great Ocean Road, celebrated for its waterfront and the painted Baywalk Bollards that trace the shore.',
    tips: [
      'Remember to take a pic with the painted bollards on the waterfront \u2014 they are super cute.',
      'If you are a swimmer, try jumping into the sea from the bridge. Trust me, it\u2019s so much fun \u2014 but be careful!',
      'After walking along the beach and the pier, take a seat at the closest restaurant and get some fried fish and chips.'
    ]
  },
  {
    city: 'Cairns',
    country: 'Australia',
    date: '2024-01',
    dateLabel: 'Jan – Feb 2024',
    lat: -16.9186,
    lng: 145.7781,
    color: '#3E9B4F',
    photo: photos('cairns', 1, 4),
    climate: 'Tropical monsoon \u2014 hot and humid summers, drier winters',
    terrain: 'Tropical coast between rainforested ranges and the Coral Sea; gateway to the Great Barrier Reef',
    history: 'Proclaimed in 1876 to serve a nearby goldfield, Cairns grew through sugar cane and tourism into the launch point for the Great Barrier Reef and the Daintree \u2014 the world\u2019s oldest tropical rainforest.',
    tips: [
      'If you don\u2019t like damp weather, think twice \u2014 Cairns has a tropical rainforest climate and sits right next to the ocean.',
      'The rainforest trip is very interesting: you may visit a huge waterfall and get to interact with local residents.',
      'Go diving! You may see colorful corals and tropical fish. Remember to have some seafood at the diving site.'
    ]
  },
  {
    city: 'Bangkok',
    country: 'Thailand',
    date: '2025-01',
    dateLabel: 'Jan – Feb 2025',
    lat: 13.7563,
    lng: 100.5018,
    color: '#D9971E',
    photo: photos('bangkok', 1, 5),
    climate: 'Tropical savanna \u2014 hot year-round with a monsoon season',
    terrain: 'Low-lying delta plain of the Chao Phraya River, laced with canals',
    history: 'Founded in 1782 as the capital of the Chakri dynasty, Bangkok pairs gilded temples and the Grand Palace with neon megamalls \u2014 a city of river ferries, street-food Michelin stars and relentless energy.',
    tips: [
      'Almost all Thai street-side Michelin stands are affordable and tasty at the same time. Fruit stands are a great way to cool down.',
      'The malls and every kind of business downtown are super nice to explore.',
      'Taking a bus boat along the Chao Phraya River to ICONSIAM \u2014 my favorite mall in Thailand \u2014 lets you view the best look of the mall. Evening is the best time to do this!'
    ]
  },
  {
    city: 'Phuket',
    country: 'Thailand',
    date: '2025-01',
    dateLabel: 'Jan – Feb 2025',
    lat: 7.8804,
    lng: 98.3923,
    color: '#F2793B',
    photo: photos('phuket', 1, 5),
    climate: 'Tropical monsoon \u2014 dry and sunny from November to April',
    terrain: 'Thailand\u2019s largest island: granite hills and limestone karsts wrapped in Andaman Sea beaches',
    history: 'Once a stop on the maritime tin-and-rubber trade routes, Phuket blends Sino-Portuguese shophouses in Old Town with beach resort life on Patong, Kata and Karon.',
    tips: [
      'If you have the courage, go to the shooting range. It\u2019s very cost-effective, very enjoyable and very fun.',
      'Remember to visit the hotel\u2019s private beach: spend a few hours there and enjoy the sunset with a virgin mojito at the beach bar.',
      'Take a motorcycle taxi to your destination! Fast and cheap \u2014 the drivers\u2019 skills are truly superb.'
    ]
  },
  {
    city: 'Changsha',
    country: 'China',
    date: '2025-03',
    dateLabel: 'Mar 2025',
    lat: 28.2282,
    lng: 112.9388,
    color: '#D64541',
    photo: photos('changsha', 1, 5),
    climate: 'Humid subtropical \u2014 hot summers, mild damp winters',
    terrain: 'Xiang River valley plain ringed by low hills, with Orange Isle (Juzizhou) sitting midstream',
    history: 'A 3,000-year-old city of Chu culture \u2014 home of Yuelu Academy (founded 976) and the Mawangdui Han tombs \u2014 Changsha today is China\u2019s capital of late-night street life, spicy Hunan cuisine and media entertainment.',
    tips: [
      'The best thing to do in the daytime is to stay in the hotel. Hang out in the evening! You\u2019ll see thousands of stalls and beautiful shows in downtown Changsha.',
      'Try Hunan dishes!!! Chef Fei \u2014 the brand that just opened a new restaurant in San Diego \u2014 has the best stir-fry in China: hello, China\u2019s king of stir-fry, stir-fried pork with peppers! Fish head with chili sauce and a cup of Chayan Yuese milk tea are also musts.',
      'Taking a night walk along Orange Isle and then having some crayfish is the happiest thing in the world.'
    ]
  },
  {
    city: 'Florence',
    country: 'Italy',
    date: '2025-07',
    dateLabel: 'Jul 2025',
    lat: 43.7696,
    lng: 11.2558,
    color: '#B65C35',
    photo: photos('florence', 1, 9),
    climate: 'Humid subtropical \u2014 hot summers, cool damp winters',
    terrain: 'Tuscan hill city on the Arno River, encircled by vineyards and olive terraces',
    history: 'The cradle of the Renaissance, where the Medici bankrolled Brunelleschi\u2019s dome, Michelangelo\u2019s David and Botticelli\u2019s canvases. Its historic centre is a UNESCO World Heritage Site.',
    tips: [
      'After enjoying the view from Piazzale Michelangelo, descend the hill and walk along the old city wall back to your Airbnb \u2014 you might meet some very touching scenes or interesting people along the way.',
      'Don\u2019t forget to have the T-bone steak and gelato. Other little towns in Tuscany also make great substitutes for Florence, though each has its own charming culture.',
      'If possible, visit the attractions early in the morning \u2014 in summer, Florence is crowded and hot.'
    ]
  },
  {
    city: 'Sorrento & Capri',
    country: 'Italy',
    date: '2025-07',
    dateLabel: 'Jul 2025',
    lat: 40.6263,
    lng: 14.3758,
    color: '#E8C547',
    photo: [...photos('sorrento', 1, 3), ...photos('capri', 1, 8)],
    climate: 'Mediterranean \u2014 dry, sun-soaked summers',
    terrain: 'Clifftop town above the Bay of Naples, facing the limestone island of Capri across the gulf',
    history: 'A Grand Tour resort since Roman times \u2014 Villa Jovis on Capri hosted Emperor Tiberius. Sorrento\u2019s lemon groves and Capri\u2019s Blue Grotto and Faraglioni rocks define la dolce vita.',
    tips: [
      'Hotels and Airbnbs on Capri island might be too expensive, so choosing to stay in Sorrento is better. Mountain-top Airbnbs near the cliff edge let you witness breathtaking Mediterranean sunrises and sunsets.',
      'Lemon sorbets on Capri are my favorite ice cream! Good-looking and good-tasting, sour and sweet, with a smell of lemon \u2014 I strongly recommend everyone try it.',
      'The Gardens of Augustus in summer are very dreamy, and also a great spot to view the sea.'
    ]
  },
  {
    city: 'Naples',
    country: 'Italy',
    date: '2025-07',
    dateLabel: 'Jul 2025',
    lat: 40.8518,
    lng: 14.2681,
    color: '#0073CF',
    photo: photos('naples', 1, 3),
    climate: 'Mediterranean \u2014 mild and sunny most of the year',
    terrain: 'Bay-side city in the shadow of Mount Vesuvius, backed by the Phlegraean volcanic fields',
    history: 'Founded by Greeks as Neapolis around 470 BC, Naples has Europe\u2019s largest historic centre and is the birthplace of pizza; nearby Pompeii preserves ancient life frozen by Vesuvius\u2019 eruption.',
    tips: [
      'Mount Vesuvius and the ancient city of Pompeii are right here.',
      'Napoli soccer is very famous! The team now has Kevin De Bruyne, one of my favorite midfielders.',
      'Naples is relatively affordable, which means you can get great pizzas at an attractive price!'
    ]
  },
  {
    city: 'Milan',
    country: 'Italy',
    date: '2025-07',
    dateLabel: 'Jul 2025',
    lat: 45.4642,
    lng: 9.19,
    color: '#6B7A8F',
    photo: photos('milan', 1, 10),
    climate: 'Humid subtropical \u2014 foggy winters, hot summers',
    terrain: 'Po Valley plain at the southern foot of the Alps',
    history: 'From Roman Mediolanum to the ducal court of the Visconti and Sforza \u2014 patrons of Leonardo\u2019s Last Supper \u2014 Milan is Italy\u2019s financial engine and a world capital of fashion and design beneath its Gothic Duomo.',
    tips: [
      'If you like soccer, only 27 euros are needed to visit San Siro Stadium, which contains a little museum of AC Milan and Inter Milan. There\u2019s also a very amazing restaurant near San Siro \u2014 the lobster noodles, pizza, fried seafood and Milanese risotto are all delicious.',
      'As a fashion capital, Milan\u2019s outlets are definitely not to be missed \u2014 among the largest in Europe. The centre of Milan also has many luxury, trendy and personalized-brand stores.',
      'The Milan Cathedral is a must-visit. Many subway stations sit right outside its entrance, and around it you might even see Tyler, the Creator\u2019s latest album promotion on the big screens of the city centre.'
    ]
  },
  {
    city: 'Dolomites',
    country: 'Italy',
    date: '2025-07',
    dateLabel: 'Jul 2025',
    lat: 46.53,
    lng: 11.86,
    color: '#D9798A',
    photo: photos('dolomites', 1, 8),
    climate: 'Alpine \u2014 snowy winters, mild summers with sharp day\u2013night swings',
    terrain: 'Limestone massifs rising to 3,343 m \u2014 pale walls, towers and high meadow plateaus',
    history: 'A World War I front line carved with via ferrata paths, the Dolomites became a birthplace of modern alpinism. Their sunset glow (enrosadira) and Ladin culture earned UNESCO status in 2009.',
    tips: [
      'There aren\u2019t many good foods here, so remember to bring some snacks.',
      'The hiking trails in these mountains are simply amazing \u2014 even without visiting the most prominent attractions, you can still have a satisfying two or three days of exploration.',
      'The sunset glow on the pale peaks is truly breathtaking. If you are not good at climbing mountains, cable cars can take you directly to the summit.'
    ]
  },
  {
    city: 'Adelboden & Interlaken',
    country: 'Switzerland',
    date: '2025-08',
    dateLabel: 'Aug 2025',
    lat: 46.59,
    lng: 7.71,
    color: '#0E7FA8',
    photo: photos('interlaken', 1, 11),
    climate: 'Alpine \u2014 crisp summers, heavy winter snow',
    terrain: 'Bernese Oberland between Lakes Thun and Brienz, beneath the Eiger\u2013M\u00f6nch\u2013Jungfrau skyline',
    history: 'Interlaken grew from an 1133 Augustinian monastery into the Victorian "gateway to the Jungfrau", drawing British alpinists for two centuries. Chalets, cowbells and alpine dairies still define the region.',
    tips: [
      'Find a good guesthouse or hotel on Booking \u2014 you might be able to get free access to all the mountain views in the area, including the cable car tickets!',
      'Foods in Switzerland are sooooooo expensive, so I recommend buying some veges and meats from Coop.',
      'Switzerland is actually pretty cold in summer, and it always rains \u2014 remember to bring thick clothes and umbrellas.'
    ]
  },
  {
    city: 'Macau',
    country: 'China',
    date: '2026-03',
    dateLabel: 'Mar & Oct 2026',
    lat: 22.1987,
    lng: 113.5439,
    color: '#C08552',
    photo: [...photos('macau', 1, 14), 'macau-16.jpg'],
    climate: 'Humid subtropical \u2014 long humid summers, mild winters',
    terrain: 'A compact peninsula plus Taipa and Coloane islands on the Pearl River estuary, land-linked to Zhuhai',
    history: 'Settled by the Portuguese in the 1550s, Macau became Asia\u2019s oldest European settlement and a great maritime entrep\u00f4t. Its baroque churches, azulejo tiles and egg tarts earned UNESCO listing in 2005.',
    tips: [
      'Egg tarts here are amazing \u2014 just pick a tart store at random; every store has its uniqueness. Many small restaurants on the Peninsula are worth visiting: try the porridge! Water crab porridge, fish slice porridge and pork-and-vegetable porridge are all delicious \u2014 don\u2019t forget to pair them with fried dough sticks.',
      'Taipa Island can be explored in one day. The Venetian, The Londoner and The Parisian are all connected; after shopping, take a break and then have something to eat at Rua do Cunha (Guan Ye Street).',
      'Choose a hotel with good value for price \u2014 many offer free shuttle buses to the attractions for their guests.'
    ]
  },
  {
    city: 'Philadelphia',
    country: 'United States',
    date: '2026-07',
    dateLabel: 'Jul – Aug 2026',
    lat: 39.9526,
    lng: -75.1652,
    color: '#274B77',
    photo: photos('philadelphia', 1, 15),
    climate: 'Humid subtropical bordering continental \u2014 four distinct seasons',
    terrain: 'Rolling coastal plain and Piedmont city on the Delaware River',
    history: 'Founded by William Penn in 1682 as a "greene country towne", Philadelphia is where the Declaration of Independence and the Constitution were signed \u2014 the cradle of American democracy.',
    tips: [
      'Don\u2019t miss the Philly cheesesteak.',
      'Hershey in the north has a theme park and a chocolate factory loved by children and adults alike \u2014 thrilling roller coasters plus the most authentic chocolate! King of Prussia is a great place for shopping: trendy brands, sportswear, unique CD stores and quirky printed clothing.',
      'The streets of Philadelphia combine classic and modern elements \u2014 very chic and laid-back.'
    ]
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    date: '2026-08',
    dateLabel: 'Aug 2026',
    lat: 1.3521,
    lng: 103.8198,
    color: '#7D5BA6',
    photo: photos('singapore', 1, 8),
    climate: 'Equatorial rainforest \u2014 hot, humid and showery year-round',
    terrain: 'Low-lying island city-state at the southern tip of the Malay Peninsula, ringed by reclaimed land',
    history: 'Founded as a British trading post by Stamford Raffles in 1819, Singapore is a multicultural port where Chinese, Malay, Indian and colonial heritage meet \u2014 in hawker centres, shophouse rows and the futuristic Gardens by the Bay.',
    tips: [
      'The subway in Singapore is very convenient! From the airport you can ride straight to the most central areas of Marina Bay and the CBD.',
      'The area around Marina Bay is a truly distinctive destination \u2014 the CBD, the quays, the Sands Hotel and Marina Bay Sands are all very close together. Set off in the evening to witness the sunset and the city\u2019s night view, and you\u2019ll just be in time for the light show at the Gardens. In F1 season you may even visit the pit buildings! Living near Orchard Road is great for shopping.',
      'There are a wide variety of food options \u2014 fine dining or hawker stalls, Cantonese, Southeast Asian, sushi, American fast food and Western restaurants. My recommendation: definitely try the Hainanese chicken rice and the beef bone soup \u2014 cheap, delicious and tasty. Of course, having a Boost drink is the best!'
    ]
  },
  {
    city: 'Jinan',
    country: 'China',
    date: '2026-10',
    dateLabel: 'Hometown',
    lat: 36.6512,
    lng: 117.1201,
    color: '#1BB1A8',
    photo: photos('jinan', 1, 25),
    climate: 'Warm temperate continental monsoon \u2014 four distinct seasons, hot rainy summers',
    terrain: 'Basin of low monadnock hills between Mount Tai to the south and the Yellow River to the north, dotted with artesian karst springs',
    history: 'Famed as the "City of Springs" for over 2,000 years, Jinan grew around its gushing karst springs \u2014 Baotu Spring, Black Tiger Spring and the lotus-fringed Daming Lake. A cradle of Shandong culture, it lives on in Li Qingzhao\u2019s poetry and Lao She\u2019s essay "The Winter of Jinan".',
    tips: [
      'Baotu Spring Park is the heart of the city \u2014 come early in the morning to see the springs at their liveliest, when locals gather for morning exercise.',
      'Walk around Daming Lake \u2014 "lotuses on four sides, willows on three" \u2014 and wander Qushuiting Street, where old houses sit right over flowing spring water.',
      'Climb Thousand-Buddha Mountain (or take the cable car) for the classic view of "one city of mountains and half a city of lake". Try Lu cuisine classics: sweet-and-sour carp and nine-turn intestine.'
    ]
  }
];
