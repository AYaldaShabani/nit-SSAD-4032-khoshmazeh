import axios from "axios";

const fakeData = [
  {
    id: 1,
    title: "Name machine manage",
    instructions:
      "Out police history who class. Size spend determine six we own stop. Throw Congress hope commercial chair participant play.",
    cook_time: 95,
    difficulty: "Hard",
    image_url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    video_url: "https://www.youtube.com/watch?v=yDIEfxpU1fQ",
    is_approved: true,
    created_at: "2025-02-08T22:27:20",
    created_by: "Matthew Myers",
    category: "breakfast",
    ingredients: ["Milk", "Cheese", "Eggs", "Basil", "Salt"],
    comments: [
      "Together land building chair provide war.",
      "Question head table talk.",
      "Focus week southern administration red different store learn.",
      "Treatment soon write father."
    ]
  },
  {
    id: 2,
    title: "Night worker choose give",
    instructions:
      "Operation of much go effort like. Candidate guy team where development than fish. Field eye small line strong drive live mother. When manager during who concern.",
    cook_time: 79,
    difficulty: "Medium",
    image_url: "https://images.unsplash.com/photo-1556912167-f556f1f39df6",
    video_url: "https://www.youtube.com/watch?v=dZLY5ZdvfZ4",
    is_approved: false,
    created_at: "2024-10-23T09:29:27",
    created_by: "Mr. Oscar Caldwell Jr.",
    category: "breakfast",
    ingredients: ["Pepper", "Sugar", "Onion", "Lemon"],
    comments: [
      "Half lot gun happen picture.",
      "Particularly involve party top husband animal nation.",
      "Never although turn American hour."
    ]
  },
  {
    id: 3,
    title: "Sit some vote",
    instructions:
      "Author more each fear. Live operation by imagine visit. That policy meet. Pick continue leg popular inside give. Source especially only structure.",
    cook_time: 71,
    difficulty: "Medium",
    image_url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    video_url: "https://www.youtube.com/watch?v=1-SJGQ2HLp8",
    is_approved: true,
    created_at: "2024-11-05T04:08:45",
    created_by: "Wendy Valencia",
    category: "breakfast",
    ingredients: ["Pepper", "Eggs", "Potatoes"],
    comments: [
      "Not bad east treat.",
      "Happy anyone threat top.",
      "Sing moment term until.",
      "Provide according explain act."
    ]
  },
  {
    id: 4,
    title: "Indicate truth",
    instructions:
      "List with modern number everyone. Himself letter skin. Child foreign agree personal city though. Teach station artist analysis. Open note focus person marriage state. Up money strategy sound look.",
    cook_time: 66,
    difficulty: "Medium",
    image_url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    video_url: "https://www.youtube.com/watch?v=qgLZOUkZ9Ww",
    is_approved: false,
    created_at: "2024-09-16T18:42:19",
    created_by: "Terry Burnett",
    category: "breakfast",
    ingredients: ["Eggs", "Onion", "Vanilla"],
    comments: [
      "Goal yet increase bar many grow again.",
      "Look agree although sit various trial clearly.",
      "Edge several contain while current even."
    ]
  },
  {
    id: 5,
    title: "Ahead time strong",
    instructions:
      "Key like friend whom discussion drop. True or picture fall local south rule simple. Friend deep risk mouth pattern. Analysis call fast near perhaps wife talk. Man thousand course try main any about.",
    cook_time: 37,
    difficulty: "Medium",
    image_url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    video_url: "https://www.youtube.com/watch?v=9q0Z3QrxNgA",
    is_approved: true,
    created_at: "2025-06-06T18:01:33",
    created_by: "Matthew Dawson",
    category: "breakfast",
    ingredients: ["Sugar", "Potatoes", "Cheese"],
    comments: [
      "Myself happy including beyond attention finally.",
      "Team step character couple model."
    ]
  },
  {
    id: 6,
    title: "Prevent manage",
    instructions:
      "Listen seek purpose Republican small single. Real responsibility feel activity state body. Home exactly our. Government choose painting theory.",
    cook_time: 30,
    difficulty: "Hard",
    image_url: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    video_url: "https://www.youtube.com/watch?v=afF0MRA4q8E",
    is_approved: false,
    created_at: "2024-09-22T18:46:08",
    created_by: "Mary Farley",
    category: "pizza",
    ingredients: ["Eggs", "Chicken", "Olive Oil"],
    comments: [
      "Yourself cut by measure model middle entire.",
      "Leader bag Mrs."
    ]
  },
  {
    id: 7,
    title: "Woman body",
    instructions:
      "Police value pick thank on attorney. Region chair town discover industry politics drug. Pm state indicate this pull strong.",
    cook_time: 36,
    difficulty: "Easy",
    image_url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    video_url: "https://www.youtube.com/watch?v=yDIEfxpU1fQ",
    is_approved: true,
    created_at: "2025-06-12T14:06:11",
    created_by: "Shaun Richardson",
    category: "pizza",
    ingredients: [
      "Carrots",
      "Tomatoes",
      "Butter",
      "Potatoes",
      "Sugar",
      "Cocoa Powder"
    ],
    comments: ["Relate strong get father."]
  },
  {
    id: 8,
    title: "Film include",
    instructions:
      "Rich speak toward. Although Mrs chair two. Floor official account prevent evidence.",
    cook_time: 7,
    difficulty: "Easy",
    image_url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    video_url: "https://www.youtube.com/watch?v=afF0MRA4q8E",
    is_approved: false,
    created_at: "2025-02-20T01:12:35",
    created_by: "Michelle Mullins",
    category: "pizza",
    ingredients: ["Honey", "Milk", "Garlic", "Salt", "Eggs"],
    comments: [
      "Manage between second television.",
      "Person from majority with account heart."
    ]
  },
  {
    id: 9,
    title: "North increase whole",
    instructions:
      "Chair indicate ago listen hear worker. Medical reality second issue friend process. Property system education marriage. Financial believe quickly sort.",
    cook_time: 47,
    difficulty: "Easy",
    image_url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    video_url: "https://www.youtube.com/watch?v=tpz7CnFzNoc",
    is_approved: false,
    created_at: "2024-08-24T18:24:43",
    created_by: "Allison Sanchez",
    category: "pizza",
    ingredients: ["Vanilla", "Sugar", "Pepper"],
    comments: [
      "Yourself process even sense source realize administration.",
      "Minute arrive assume address individual PM window.",
      "Remember moment no next subject.",
      "Hear blue international thing answer dinner ground join."
    ]
  },
  {
    id: 10,
    title: "Board treatment",
    instructions:
      "Drug memory child everybody discuss news. Prove technology push how it individual. Money serve site PM spring third usually these.",
    cook_time: 26,
    difficulty: "Hard",
    image_url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    video_url: "https://www.youtube.com/watch?v=tpz7CnFzNoc",
    is_approved: false,
    created_at: "2024-11-07T13:52:32",
    created_by: "Matthew Hernandez",
    category: "pizza",
    ingredients: ["Honey", "Onion", "Vanilla", "Eggs", "Carrots", "Cheese"],
    comments: ["Actually music garden three."]
  },
  {
    id: 11,
    title: "Scene growth",
    instructions:
      "Ago common western international drop purpose. One most field direction window health next. Stage everyone condition security.",
    cook_time: 102,
    difficulty: "Easy",
    image_url: "https://images.unsplash.com/photo-1556912167-f556f1f39df6",
    video_url: "https://www.youtube.com/watch?v=9q0Z3QrxNgA",
    is_approved: true,
    created_at: "2024-06-16T06:43:01",
    created_by: "Laurie Smith",
    category: "pasta",
    ingredients: ["Olive Oil", "Salt", "Eggs", "Butter"],
    comments: [
      "Operation town establish big report.",
      "Community official song story sit.",
      "Republican my they avoid.",
      "Food determine he receive wide."
    ]
  },
  {
    id: 12,
    title: "List so focus",
    instructions:
      "Ground car manage production evening quite role. Church drive game with direction head. Option organization risk student. Language attorney actually action industry go.",
    cook_time: 66,
    difficulty: "Easy",
    image_url: "https://images.unsplash.com/photo-1546069901-eacef0df6022",
    video_url: "https://www.youtube.com/watch?v=4aZr5hZXP_s",
    is_approved: true,
    created_at: "2024-09-05T10:53:23",
    created_by: "Kaitlyn Wilson",
    category: "pasta",
    ingredients: ["Salt", "Butter", "Carrots"],
    comments: [
      "Your product that key should.",
      "Never cold risk line successful."
    ]
  },
  {
    id: 13,
    title: "Also half eat",
    instructions:
      "Wide theory development law purpose our blue. Become phone staff protect billion. His image him new book figure. Control from dinner beautiful deep traditional administration. Front PM election. Particularly skill radio fire stand most another.",
    cook_time: 76,
    difficulty: "Hard",
    image_url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    video_url: "https://www.youtube.com/watch?v=4aZr5hZXP_s",
    is_approved: true,
    created_at: "2024-11-07T08:13:39",
    created_by: "Theresa Kane",
    category: "pasta",
    ingredients: ["Butter", "Sugar", "Milk", "Vanilla"],
    comments: [
      "Sound go just away.",
      "Adult smile just take work.",
      "Outside traditional bar skill view when.",
      "Either heavy laugh her language music."
    ]
  },
  {
    id: 14,
    title: "Over cut charge",
    instructions:
      "Do son great reduce away if face. Four quality help together inside fight simply. Guy since sometimes affect. Story lay together yeah ahead final card. Scene single section five sure unit. Approach large try face focus up identify.",
    cook_time: 118,
    difficulty: "Hard",
    image_url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    video_url: "https://www.youtube.com/watch?v=qgLZOUkZ9Ww",
    is_approved: false,
    created_at: "2025-04-05T19:50:06",
    created_by: "John Hughes",
    category: "pasta",
    ingredients: [
      "Cocoa Powder",
      "Milk",
      "Butter",
      "Chicken",
      "Salt",
      "Carrots"
    ],
    comments: [
      "Statement member have each allow.",
      "Produce account million stage."
    ]
  },
  {
    id: 15,
    title: "Finish image",
    instructions:
      "Surface eat step whatever growth develop part. She serve character five learn avoid. Time with person leave himself.",
    cook_time: 16,
    difficulty: "Hard",
    image_url: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    video_url: "https://www.youtube.com/watch?v=qgLZOUkZ9Ww",
    is_approved: false,
    created_at: "2025-03-08T22:27:36",
    created_by: "Kimberly Larsen",
    category: "pasta",
    ingredients: ["Milk", "Tomatoes", "Carrots"],
    comments: ["We meet which produce last."]
  },
  {
    id: 16,
    title: "Republican discuss",
    instructions:
      "Plant staff member can. Across charge clear occur. Model top difficult realize.",
    cook_time: 98,
    difficulty: "Easy",
    image_url: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    video_url: "https://www.youtube.com/watch?v=4aZr5hZXP_s",
    is_approved: false,
    created_at: "2024-06-14T05:33:05",
    created_by: "Melissa Adkins MD",
    category: "meat",
    ingredients: ["Salt", "Tomatoes", "Butter", "Honey"],
    comments: [
      "Throw spend money.",
      "Identify measure network pick wall performance."
    ]
  },
  {
    id: 17,
    title: "World price",
    instructions:
      "Thank draw glass. Happen idea back space hear bad sing. Before behavior easy. Environment necessary professor.",
    cook_time: 87,
    difficulty: "Medium",
    image_url: "https://images.unsplash.com/photo-1556912167-f556f1f39df6",
    video_url: "https://www.youtube.com/watch?v=ZJy1ajvMU1k",
    is_approved: true,
    created_at: "2025-02-06T14:12:46",
    created_by: "Michael Marquez",
    category: "meat",
    ingredients: ["Butter", "Basil", "Onion", "Eggs", "Carrots"],
    comments: [
      "Blood grow note worry set do.",
      "Bar trip within place.",
      "That memory father manager activity."
    ]
  },
  {
    id: 18,
    title: "More fear",
    instructions:
      "Help black reduce value. Father plant participant your. Might part cup energy suggest. At PM others reduce consumer near forget lead. Item speech pay issue yeah fly.",
    cook_time: 24,
    difficulty: "Medium",
    image_url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    video_url: "https://www.youtube.com/watch?v=yDIEfxpU1fQ",
    is_approved: true,
    created_at: "2025-03-21T09:01:59",
    created_by: "Kristine Jones",
    category: "meat",
    ingredients: ["Onion", "Honey", "Basil", "Potatoes"],
    comments: [
      "Firm stand current state every tree Republican.",
      "Move next hit discuss business protect price.",
      "Program yourself people spring history professor."
    ]
  },
  {
    id: 19,
    title: "Yard watch",
    instructions:
      "Individual establish hard around agreement share. Than thank success believe future official. Read fear ability feel look check. Energy say man education conference left early. Agree course data fish authority. Way by hand whatever society.",
    cook_time: 6,
    difficulty: "Easy",
    image_url: "https://images.unsplash.com/photo-1556912167-f556f1f39df6",
    video_url: "https://www.youtube.com/watch?v=Q5wEVZVrG8Y",
    is_approved: false,
    created_at: "2025-05-21T17:49:53",
    created_by: "Valerie Carey",
    category: "meat",
    ingredients: ["Lemon", "Olive Oil", "Cocoa Powder", "Flour", "Honey"],
    comments: [
      "Bad floor image consider different.",
      "Still hotel reality.",
      "Only tend eat.",
      "Close experience cut so science form."
    ]
  },
  {
    id: 20,
    title: "Information water",
    instructions:
      "Local moment deal bring head. Forget matter end give food production low. Present stay whose well year whether.",
    cook_time: 52,
    difficulty: "Medium",
    image_url: "https://images.unsplash.com/photo-1546069901-eacef0df6022",
    video_url: "https://www.youtube.com/watch?v=1-SJGQ2HLp8",
    is_approved: false,
    created_at: "2025-02-12T12:59:27",
    created_by: "Christine Brown",
    category: "meat",
    ingredients: ["Flour", "Butter", "Potatoes", "Onion"],
    comments: ["Chair add outside end protect mission pick."]
  },
  {
    id: 21,
    title: "Remember rise everything",
    instructions:
      "Person political probably huge child. See system day behind rock instead. Father yes various ground practice plan skill. At remember all star audience what someone.",
    cook_time: 53,
    difficulty: "Medium",
    image_url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    video_url: "https://www.youtube.com/watch?v=1-SJGQ2HLp8",
    is_approved: true,
    created_at: "2025-02-20T03:03:21",
    created_by: "Norma Huffman",
    category: "salad",
    ingredients: ["Garlic", "Chicken", "Cocoa Powder", "Eggs"],
    comments: [
      "Such charge growth word herself.",
      "History let meeting value gas management sign.",
      "Ever rise difference than show."
    ]
  },
  {
    id: 22,
    title: "Area vote leader",
    instructions:
      "Section guess listen mind game forget collection place. Anyone toward score. Entire ready action pull sometimes. Tend movement over believe rest. Modern suffer watch off.",
    cook_time: 54,
    difficulty: "Easy",
    image_url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    video_url: "https://www.youtube.com/watch?v=ZJy1ajvMU1k",
    is_approved: false,
    created_at: "2025-05-17T10:20:05",
    created_by: "Brittany Duke",
    category: "salad",
    ingredients: ["Onion", "Vanilla", "Carrots", "Honey", "Chicken", "Milk"],
    comments: [
      "New him suddenly grow according.",
      "Blue industry pick.",
      "Serve class myself successful."
    ]
  },
  {
    id: 23,
    title: "Your western teacher",
    instructions:
      "Investment management knowledge run relate opportunity still class. Class film above might stock sport pull. Wind call his executive.",
    cook_time: 118,
    difficulty: "Medium",
    image_url: "https://images.unsplash.com/photo-1546069901-eacef0df6022",
    video_url: "https://www.youtube.com/watch?v=tpz7CnFzNoc",
    is_approved: false,
    created_at: "2024-08-26T02:33:40",
    created_by: "David Medina",
    category: "salad",
    ingredients: ["Honey", "Pepper", "Cheese"],
    comments: ["Traditional call despite lot so thought local their."]
  },
  {
    id: 24,
    title: "Democratic view",
    instructions:
      "We general return generation notice. Area exactly blue wish blood particular yet. Cell doctor customer short of. Enter social or scientist process per. Again career way type rock. Happy trade carry majority.",
    cook_time: 96,
    difficulty: "Medium",
    image_url: "https://images.unsplash.com/photo-1546069901-eacef0df6022",
    video_url: "https://www.youtube.com/watch?v=Q5wEVZVrG8Y",
    is_approved: false,
    created_at: "2025-05-05T15:03:19",
    created_by: "Thomas Campos",
    category: "salad",
    ingredients: ["Potatoes", "Cocoa Powder", "Butter", "Garlic"],
    comments: [
      "Morning develop read he.",
      "Data enter moment identify parent per."
    ]
  },
  {
    id: 25,
    title: "Left along car",
    instructions:
      "Fund teach else. Both house indicate national. Theory air force because daughter. Body relationship month always.",
    cook_time: 20,
    difficulty: "Hard",
    image_url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    video_url: "https://www.youtube.com/watch?v=dZLY5ZdvfZ4",
    is_approved: true,
    created_at: "2025-01-20T13:16:21",
    created_by: "Brian Le",
    category: "salad",
    ingredients: ["Butter", "Honey", "Salt", "Basil", "Potatoes", "Cheese"],
    comments: [
      "Relate amount from their issue at reach.",
      "Another strong animal Republican result."
    ]
  },
  {
    id: 26,
    title: "Husband big management its",
    instructions:
      "Glass probably away same focus serious. Customer condition standard. Guy leave light significant guy one direction six. Change up body eat respond show.",
    cook_time: 69,
    difficulty: "Hard",
    image_url: "https://images.unsplash.com/photo-1556912167-f556f1f39df6",
    video_url: "https://www.youtube.com/watch?v=qgLZOUkZ9Ww",
    is_approved: true,
    created_at: "2024-09-07T06:28:36",
    created_by: "Patricia Huffman",
    category: "dessert",
    ingredients: ["Olive Oil", "Pepper", "Salt", "Vanilla", "Basil"],
    comments: [
      "First easy language theory determine total product.",
      "Develop west surface effort east human south.",
      "Music close science pretty city lawyer dog.",
      "City today around laugh case speak."
    ]
  },
  {
    id: 27,
    title: "Computer",
    instructions:
      "Long feeling catch yard suddenly unit poor and. Picture time board size run condition kid. Both boy process continue. Under away continue fast. Join eight whatever sort sense crime early. Exist raise professional they second option.",
    cook_time: 48,
    difficulty: "Easy",
    image_url: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    video_url: "https://www.youtube.com/watch?v=9q0Z3QrxNgA",
    is_approved: true,
    created_at: "2025-05-07T10:00:10",
    created_by: "April Davis",
    category: "dessert",
    ingredients: ["Onion", "Salt", "Eggs", "Lemon"],
    comments: [
      "Main spring yeah executive mind practice.",
      "Third despite remember phone laugh.",
      "Better ever country north organization risk card."
    ]
  },
  {
    id: 28,
    title: "Person ability",
    instructions:
      "Hundred hour month measure rule cause. Dark choose seven. Dream of parent food than hit compare. Bed walk matter stop tough image. Create sense age mean nearly.",
    cook_time: 98,
    difficulty: "Hard",
    image_url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    video_url: "https://www.youtube.com/watch?v=4aZr5hZXP_s",
    is_approved: false,
    created_at: "2025-06-11T00:38:14",
    created_by: "Carlos Warren",
    category: "dessert",
    ingredients: ["Garlic", "Onion", "Basil", "Salt", "Tomatoes"],
    comments: [
      "Matter hit prove particularly develop.",
      "Behavior organization beat less business."
    ]
  },
  {
    id: 29,
    title: "Foreign",
    instructions:
      "Federal century very game history. Want specific rich research respond area. Summer difference later friend best. Lot business wind enter sometimes good. We thousand but leg item hot.",
    cook_time: 112,
    difficulty: "Medium",
    image_url: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    video_url: "https://www.youtube.com/watch?v=9q0Z3QrxNgA",
    is_approved: false,
    created_at: "2024-09-14T21:42:06",
    created_by: "Charles Graves",
    category: "dessert",
    ingredients: ["Pepper", "Basil", "Flour", "Cocoa Powder", "Potatoes"],
    comments: [
      "City fund turn economy deal someone listen.",
      "Certain girl cup case Mr."
    ]
  },
  {
    id: 30,
    title: "Those performance human kitchen",
    instructions:
      "Hair beat society everything why. Set lay tonight term perform. Personal remain suggest study along structure. Experience wait sound ago.",
    cook_time: 51,
    difficulty: "Easy",
    image_url: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    video_url: "https://www.youtube.com/watch?v=4aZr5hZXP_s",
    is_approved: false,
    created_at: "2024-10-16T06:45:09",
    created_by: "Mr. Joshua Robinson",
    category: "dessert",
    ingredients: ["Potatoes", "Honey", "Salt"],
    comments: [
      "Control fill suddenly determine statement.",
      "Mind for town road population.",
      "Indicate history program power concern."
    ]
  },
  {
    id: 31,
    title: "Media student but",
    instructions:
      "Bad natural with. Show popular truth else exactly field. Keep available ago region child adult.",
    cook_time: 106,
    difficulty: "Medium",
    image_url: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    video_url: "https://www.youtube.com/watch?v=Q5wEVZVrG8Y",
    is_approved: true,
    created_at: "2024-07-23T10:51:40",
    created_by: "Ashley Rodriguez",
    category: "sweet",
    ingredients: ["Onion", "Olive Oil", "Garlic", "Carrots"],
    comments: [
      "State pull party born my whatever.",
      "Then administration born study us."
    ]
  },
  {
    id: 32,
    title: "Positive money whole",
    instructions:
      "Himself newspaper once religious adult. Around there economic travel. Individual dog spring ever mention. Simply ever yet American. Others off theory four our drug floor.",
    cook_time: 114,
    difficulty: "Hard",
    image_url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    video_url: "https://www.youtube.com/watch?v=dZLY5ZdvfZ4",
    is_approved: true,
    created_at: "2024-12-02T12:11:34",
    created_by: "Tara Scott",
    category: "sweet",
    ingredients: ["Milk", "Pepper", "Lemon", "Garlic", "Chicken"],
    comments: [
      "Respond experience bring artist institution rather station.",
      "Office spring guess forget image class common.",
      "Choose hair sport focus."
    ]
  },
  {
    id: 33,
    title: "Since image",
    instructions:
      "Traditional popular already seat down institution. Sometimes manage its what. Subject participant guy.",
    cook_time: 48,
    difficulty: "Easy",
    image_url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    video_url: "https://www.youtube.com/watch?v=1-SJGQ2HLp8",
    is_approved: false,
    created_at: "2025-03-17T01:15:10",
    created_by: "Tara Smith",
    category: "sweet",
    ingredients: ["Chicken", "Butter", "Honey", "Flour"],
    comments: [
      "To education parent worker.",
      "School every likely effect either four through.",
      "Film pressure school personal catch people dinner.",
      "Effort recognize difference structure loss let."
    ]
  },
  {
    id: 34,
    title: "Contain sometimes act",
    instructions:
      "Business civil available history. Language half discover life. Although leave recent friend. Capital rate position organization their garden indeed.",
    cook_time: 64,
    difficulty: "Easy",
    image_url: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    video_url: "https://www.youtube.com/watch?v=ZJy1ajvMU1k",
    is_approved: true,
    created_at: "2024-11-05T13:56:44",
    created_by: "John Campbell",
    category: "sweet",
    ingredients: ["Pepper", "Honey", "Salt", "Butter"],
    comments: [
      "Personal goal give market significant feel choice protect.",
      "Itself like voice lead magazine these wife."
    ]
  },
  {
    id: 35,
    title: "Month responsibility since",
    instructions:
      "Home buy drive service these even trial. Example party trip stage. Attorney western find more.",
    cook_time: 57,
    difficulty: "Medium",
    image_url: "https://images.unsplash.com/photo-1546069901-eacef0df6022",
    video_url: "https://www.youtube.com/watch?v=4aZr5hZXP_s",
    is_approved: true,
    created_at: "2024-08-24T03:54:40",
    created_by: "Carol Lopez",
    category: "sweet",
    ingredients: ["Vanilla", "Honey", "Olive Oil", "Eggs"],
    comments: [
      "Production down minute spend cover alone.",
      "Popular beat they buy well president.",
      "Maybe although receive computer."
    ]
  },
  {
    id: 36,
    title: "Tax structure",
    instructions:
      "Plant interesting sure consider. Former total everyone my. Artist tend care girl not. Whose institution current next article away. Nature quickly camera compare particularly share. Too range put.",
    cook_time: 52,
    difficulty: "Easy",
    image_url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    video_url: "https://www.youtube.com/watch?v=tpz7CnFzNoc",
    is_approved: false,
    created_at: "2025-01-19T14:10:11",
    created_by: "Alexandra Christensen",
    category: "rice",
    ingredients: ["Vanilla", "Garlic", "Olive Oil", "Pepper", "Lemon"],
    comments: [
      "Couple thousand lose.",
      "Cold force mean.",
      "City standard heart thus practice resource cold."
    ]
  },
  {
    id: 37,
    title: "Education religious total",
    instructions:
      "International travel cost city success medical reason. Change able perform seat. Purpose off trouble threat identify relate. Somebody fund meet teach. Market white and.",
    cook_time: 83,
    difficulty: "Hard",
    image_url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    video_url: "https://www.youtube.com/watch?v=9q0Z3QrxNgA",
    is_approved: true,
    created_at: "2024-07-01T07:46:41",
    created_by: "Michael Mcdonald",
    category: "rice",
    ingredients: ["Garlic", "Salt", "Flour", "Tomatoes", "Onion"],
    comments: [
      "Project over inside after science.",
      "Relationship we nice wear but administration make."
    ]
  },
  {
    id: 38,
    title: "Determine ready watch card",
    instructions:
      "Interest determine poor data start example. Push scientist appear newspaper discover require. Save too agent pull call again strategy.",
    cook_time: 20,
    difficulty: "Hard",
    image_url: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    video_url: "https://www.youtube.com/watch?v=Q5wEVZVrG8Y",
    is_approved: true,
    created_at: "2025-05-14T21:42:06",
    created_by: "Carol Dunn",
    category: "rice",
    ingredients: ["Butter", "Garlic", "Carrots", "Pepper", "Basil"],
    comments: [
      "Outside player hold finish visit recognize.",
      "Money civil mind mother.",
      "Word yeah wonder.",
      "Daughter citizen ability media model."
    ]
  },
  {
    id: 39,
    title: "Matter economic traditional",
    instructions:
      "Leader could say up official. Find hard instead value. Until his risk sometimes involve yes. Above machine rise story write space.",
    cook_time: 50,
    difficulty: "Medium",
    image_url: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    video_url: "https://www.youtube.com/watch?v=dZLY5ZdvfZ4",
    is_approved: false,
    created_at: "2024-09-21T07:52:05",
    created_by: "Yvonne Tran",
    category: "rice",
    ingredients: ["Garlic", "Lemon", "Sugar", "Carrots", "Potatoes", "Onion"],
    comments: [
      "Shoulder attorney wear receive.",
      "Cover while character science.",
      "Member issue too outside officer find."
    ]
  },
  {
    id: 40,
    title: "Interesting interview understand",
    instructions:
      "Way fund garden beautiful care cultural chair long. Could military anything must resource eight here. Account food community under too issue capital. Trade section two picture. Toward red power picture court usually resource.",
    cook_time: 109,
    difficulty: "Easy",
    image_url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    video_url: "https://www.youtube.com/watch?v=ZJy1ajvMU1k",
    is_approved: true,
    created_at: "2024-06-14T06:04:49",
    created_by: "Christopher Silva",
    category: "rice",
    ingredients: ["Milk", "Carrots", "Pepper"],
    comments: [
      "Pretty court ok near.",
      "School clearly my within say into guess."
    ]
  }
];

const USE_FAKE_DATA = true;

const fetchFake = (data, delay = 300) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });

export const getAllFoods = async () => {
  if (USE_FAKE_DATA) {
    return fetchFake(fakeData);
  }
  else {
    const res = await axios.get("");
    if (res.status === 200) {
      return res.data;
    }
    else {
      throw new Error("Failed to fetch data");
    }
  
  }
}
export const getLatesFood = async (count = 6) => { 
  if (USE_FAKE_DATA) {
    const sorted = [...fakeData].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    return fetchFake(sorted.slice(0, count));
  }
  else {
    const res = await axios.get("");
    if (res.status === 200) {
      const sorted = res.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      return sorted.slice(0, count);
    }
    else {
      throw new Error("Failed to fetch data");
    }
  }
}

export const getFoodByCategory = async (category) => { 
  if (USE_FAKE_DATA) {
    const filtered = fakeData.filter(food => food.category.toLowerCase() === category.toLowerCase());
    return fetchFake(filtered);
  }
  else {
    const res = await axios.get(`?category=${category}`);
    if (res.status === 200) {
      return res.data;
    }
    else {
      throw new Error("Failed to fetch data");
    }
  }
}