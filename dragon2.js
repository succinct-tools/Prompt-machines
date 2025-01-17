let usedPrompts = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("generateBtn").addEventListener("click", () => {
        const availablePrompts = prompts.filter(prompt => !usedPrompts.includes(prompt));

        if (availablePrompts.length === 0) {
            document.getElementById("prompt").innerText = "No more prompts available in this list.";
            return;
        }

        const randomIndex = Math.floor(Math.random() * availablePrompts.length);
        const randomPrompt = availablePrompts[randomIndex];

        usedPrompts.push(randomPrompt);
        document.getElementById("prompt").innerText = randomPrompt;

        const recentPromptsList = document.getElementById("recent-prompts");
        const listItem = document.createElement("li");
        listItem.innerText = randomPrompt;
        recentPromptsList.appendChild(listItem);
    });
});

const prompts =  [
       "The vacuum of time",
        "Terror in the night",
        "Flashes of euphoria",
        "Dancing with the devil",
        "Fatal accident",
        "Haunting melody",
        "Black ice",
        "Breathtaking reality",
        "Sensation of loss",
        "Shooting star",
        "Broken spirit",
        "Aurora Borealis",
        "Left behind",
        "Unguarded touch",
        "Last time",
        "Dying sun",
        "Devastating explosion",
        "Alone in a crowd",
        "Fragmented truths",
        "Gaping chasm",
        "Arise from the ashes",
        "The end of the beginning",
        "Remember me",
        "Flash of lightning",
        "Emergency evacuation",
        "Immortal laughter",
        "A whisper on the wind",
        "Electrifying sacrifice",
        "The calm before the storm",
        "A life of lies",
        "The winds of change",
        "The hand of fate",
        "Desperate plea",
        "Nightmare",
        "Whitewashed walls",
        "Caught in the act",
        "Wake up, the day is dying",
        "Close your eyes",
        "Beyond the horizon",
        "Finality",
        "Releasing the sparrow",
        "Something's out there",
        "Golden miracle",
        "I covet you",
        "The eye of the storm",
        "Screaming silence",
        "Her body was found",
        "I used to remember you",
        "Gasping confession",
        "Betrayal",
        "Uncontrollable wrath",
        "Dragon of shadow",
        "Natural disaster",
        "Leap of faith",
        "Faceless and nameless",
        "Harsh revelation",
        "A path to follow",
        "The power of goodbye",
        "Through a child's eyes",
        "One final look back",
        "Crumbling heart",
        "Ignored instinct",
        "Seductive danger",
        "Jumbled truths",
        "Shallow grave",
        "Why they call it falling",
        "Volcano",
        "Dying land",
        "A child's truth",
        "Antiseptic air",
        "Chained to mortality",
        "Dim as an ember",
        "Acid tears",
        "Unexpected emptiness",
        "Miraculous relief",
        "Letting go",
        "What Earth once was",
        "Frantic search",
        "Tragic moment",
        "Beneath the smiles",
        "Across the worlds",
        "In the still of the night",
        "Counting years",
        "Kidnapped innocence",
        "Tears of desire",
        "Ring of sunlight",
        "Trembling cold",
        "Missing planet",
        "Suffering rain",
        "Parched ego",
        "Toxic tease",
        "Horrific distortion",
        "Miracle ruin",
        "Wailing shadows",
        "Barren abyss",
        "Ravenous time",
        "Approaching doom",
        "Eternal danger",
        "Vacant arch",
        "Recoil",
        "Vehement grace",
        "Urban legend",
        "Gentle warmth",
        "Rippling tide",
        "Fallen haze",
        "That's all I ask of you",
        "Think of me",
        "Promise me",
        "A white rose",
        "Never let go",
        "Ghost of a rose",
        "Fire",
        "Enchanting surrender",
        "Cowering sunrise",
        "Deliverance",
        "Resisting temptation",
        "Leaves of amber",
        "I remember when she loved me",
        "Heart of a child",
        "Don't scream",
        "Bereft confusion",
        "Mysterious stranger",
        "Subconscious reality",
        "The truth about forever",
        "She's burning up",
        "You were supposed to be watching her",
        "Lost soul",
        "Wandering spirit",
        "Touched by an angel",
        "Shattered reflections",
        "Central power",
        "Lightning fast refusal",
        "Don't you dare",
        "Emerald eternity",
        "There will always be a monster",
        "Infinite embrace",
        "It's too late",
        "Cabin by the sea",
        "Guardian",
        "Amusingly inconsequential",
        "Ignited illusion",
        "Forsaken stealth",
        "Corrupted intrigue",
        "Kindle my soul",
        "Majestic memories",
        "Breathe, baby, breathe",
        "Resonating hunger",
        "Relinquished radiance",
        "Transcendent joy",
        "Silent watcher",
        "Her eyes believed in mysteries",
        "Last breath",
        "Sweet nothings",
        "Unfinished tale",
        "Endless darkness",
        "Suffocating darkness",
        "Passing warrior",
        "Shield maiden",
        "Old oak",
        "Ancient willow",
        "Off the map",
        "Deserted riverbank",
        "I never thought",
        "A walk along the shore",
        "The valley of echoes",
        "The family nobody wanted",
        "Dancing in the fountain",
        "Laughter from the flames",
        "A time for tenderness",
        "Sleeping storm",
        "Islands in the sky",
        "Unheeded warning",
        "Voices in my mind",
        "Spellbound",
        "It wasn't your fault",
        "Tempting enigma",
        "Your compassion is like a shadow",
        "Even I have forgotten my name",
        "I hate love",
        "Irresistible coercion",
        "I offer no excuses",
        "Tumbling clouds",
        "Blue mists",
        "You think you have it bad",
        "My pain was like a desert",
        "No one could bleed that much and live",
        "Nothing lost, nothing gained",
        "Delicious tragedy",
        "The in between",
        "Into the river",
        "You're only sleeping",
        "What can you see",
        "They're calling you home",
        "The end",
        "Somewhere out there",
        "Lamentation",
        "The moment",
        "Suddenly",
        "Childhood's end",
        "Broken weapon",
        "Gazing upon the sky with dampened eyes",
        "Vast horizons",
        "Entrapment",
        "Quaking need",
        "Memory of a dream",
        "Dangerous illusion",
        "Firestarter",
        "Enraged superstition",
        "Guilty morals",
        "Fragile as a drea",
        "An eye for an eye, a tooth for a tooth",
        "Portals of discovery",
        "Fall from grace",
        "Balance of power",
        "Out of sight, out of mind",
        "Diamond in the rough",
        "The essence of life",
        "Nostalgic numbness",
        "Desire, ask, believe, receive",
        "A fate worse than death",
        "The razor's edge",
        "Reach for the stars",
        "Touch me",
        "Unrequited accusation",
        "Tragic shadow",
        "Forbidden laughter",
        "Starved for affection",
        "Between a rock and a hard place",
        "No man is an island",
        "Critical vengeance",
        "Rough hands",
        "Mystery",
        "After tonight",
        "Farewell",
        "And the edges blur",
        "One thousand promises",
        "A broken sensitivity",
        "A curling shadow",
        "A darker pride",
        "A deluge of dancers",
        "A fallacy in your head",
        "A four leaf clover",
        "A golden shield",
        "A love remembered",
        "A lustful lie",
        "A magical time",
        "A perfect rainbow in Hell",
        "A queer sort of clockwork",
        "A secondhand heart",
        "A story never to tell",
        "All sorts of complicated",
        "All the tears of God",
        "Alone I break",
        "And that's when I stopped believing in gravity",
        "No one mourns the wicked",
        "Die alone",
        "Asleep at dawn",
        "Assassin for hire",
        "Based on a dream",
        "Once upon a December",
        "Before the next tear falls",
        "The beginning of goodbye",
        "A lonely tomorrow",
        "Beneath the blue",
        "Better left unsaid",
        "Between a rock and your mother",
        "Beyond the galaxy's walls",
        "Birthing black and white",
        "Blood and moon",
        "Blood wars",
        "Bribing the Devil",
        "Broken promises and broken hearts",
        "False gold",
        "By midnight's favor",
        "By the light of a million stars",
        "Castles in the sky",
        "Catastrophe in the making",
        "Crawling nightmare",
        "Crimson orchid",
        "Crown of ivy",
        "Call of the wild",
        "Darkness becomes me",
        "Dawn of night",
        "Dawning upon a crimson ruin",
        "Death becomes you",
        "Demon tongue",
        "Desolation row",
        "Destined envy",
        "Burning star",
        "Do you remember the end",
        "Don't look into its eyes",
        "Dragons in your eyes",
        "Make a wish and toss a penny to the moon",
        "Ecstatic pain",
        "Edge of sanity",
        "Elemental rain",
        "Equinox rising",
        "Ethereal blood",
        "Evening shadows",
        "Exquisite and unforgivable",
        "Face down I cry",
        "Fallen fae",
        "Light step",
        "Faery-eyed child",
        "Fail with honour",
        "A childhood dream",
        "Fields of dust",
        "Final breath",
        "Finding infinity",
        "Flame in the twilight",
        "For the child I will sing",
        "Foreign serenade",
        "Lost beginning",
        "Forgotten, not forgiven",
        "Fractured reality",
        "Fragile hearts and candy-coated dreams",
        "Angels among us",
        "Haunting lonely pools",
        "Portrait in black",
        "Approaching Flood",
        "Technological reality",
        "I am the night you died",
        "I can hear him laughing at me",
        "I appeared here to vanish there",
        "I close my eyes and you disappear",
        "I loved you mommy, the day I killed you",
        "I miss who you were",
        "I thought you were alive",
        "I was here two days from now",
        "I wish upon tonight",
        "I write sins, not tragedies",
        "If looks could kill",
        "Illuminated darkness",
        "Death by imagination",
        "Pierce the sky",
        "Unfathomable truth",
        "Shackles of the mind",
        "Growing fonder",
        "A time to grieve",
        "Fire in your eyes",
        "Tales of long ago",
        "Live on your toes, love on your knees, die on your feet",
        "Prisoner in her mind",
        "Hold still, I'm trying to kill you",
        "Breath of the devil",
        "The innocent can never last",
        "Too wide to cross",
        "Arrogance and beauty, painted in ugliness",
        "Falseness in acquaintance",
        "Beneath the shade of the Sycamore",
        "One season's eve",
        "In the shadow of Mount Gloom",
        "Intoxicating the mind",
        "Island of light",
        "It ends tonight",
        "Jilted dreams",
        "Night of fire",
        "Knowledge in death, wisdom in immortality",
        "Liberating release",
        "Life on white wings",
        "A beacon of hope",
        "Like shattered glass",
        "Listless winter",
        "Little girl's downfall",
        "Lonely by candlelight",
        "Silent angels",
        "Gazing out a broken window",
        "You cannot lose what you never had",
        "Blood and tears",
        "Love's pretty follies",
        "The gift of lucidity",
        "Mint and lilac",
        "Missing Heaven and roses",
        "Mother Earth's last stand",
        "How to say goodbye",
        "Where does the sky end",
        "Breathtaking innocence",
        "Perilous stranger",
        "Lost in dreams",
        "Found in reality",
        "Forgotten sanctuary",
        "Treacherous deceit",
        "Warped",
        "Disenchanted crystal",
        "Laughing at the moon",
        "Yesterday's tomorrow",
        "Future of the past",
        "Supernova",
        "Whispers in the dark",
        "Letters from nowhere",
        "The one no one sees",
        "Beautiful disaster",
        "Passionate desires",
        "Remnants of darkness",
        "The bitterness of mortality",
        "An exquisite extreme unknown",
        "More Heaven than a heart could hold",
        "Flames of disaster",
        "Miraculous discovery",
        "Trusting in a soul",
        "Twilight surrender",
        "When love turns to hate",
        "Lost and alone",
        "When the river runs dry",
        "Lapping at the shores of sleep",
        "Landing among the stars",
        "Reaching for the moon",
        "When stillness descends",
        "On the brink of forever",
        "Clinging to the edge of control",
        "Abandoned resistance",
        "Eyes within the Heart",
        "Heart within the eyes",
        "When forever fades away",
        "Grave acceptance",
        "Flying amidst a rainbow",
        "Falling from a cloud",
        "Alone with forever",
        "Sunrise upon a soul",
        "Prisms of a fragmented whole",
        "A glittering cavern",
        "Disembodied voices",
        "Dancing beneath the moon",
        "Dancing on the water",
        "Gliding over glass",
        "A tale rewritten",
        "Exiled child",
        "Letters and vowels, spinning and tiles",
        "I'll try violence",
        "Who named the stars",
        "Mysterious beyond",
        "Ocean tears",
        "Sleepy death",
        "Sea bed",
        "Whispering nightmare",
        "Bound by silence",
        "A twinkle in the night",
        "A waking slumber",
        "See no evil, hear no evil, speak no evil",
        "My lips are sealed",
        "Sometimes it is better not to follow your own destiny",
        "An invitation to Heaven",
        "Attacked by a dream",
        "Caressed by a nightmare",
        "The ravages of time",
        "Ancient tale",
        "Faces in the clouds",
        "Ripped apart",
        "The end of something better - The beginning of something worse",
        "The space between",
        "Look beyond",
        "Edge of the knife",
        "A human voice",
        "Dream the impossible",
        "Forgotten roads",
        "Flowers in the ashes",
        "A bitter pill",
        "Another fine mess",
        "The life inside",
        "Still crossroads",
        "Frozen bridges",
        "Fear of the fall",
        "Illusions of the darkness",
        "Sacrificial tension",
        "Path of a child",
        "Imitation of life",
        "Behind the mirror",
        "Through the fire",
        "Echoes of bondage",
        "Freedom in chains",
        "Parting regrets",
        "Something unheard of",
        "Hidden tales",
        "Laughter of the ages",
        "Frozen fire",
        "White shores",
        "Lights out",
        "Liquid sunset",
        "Silver glass",
        "When words fail",
        "A death of a thousand screams",
        "Those who do not remember the past",
        "When laughter's lost in peaceful silence",
        "The sands of time",
        "When death's lips left mine",
        "Cataclysm",
        "When Earth dies",
        "When worlds collide",
        "A mortal's forever",
        "Flight of disaster",
        "When tomorrows run out",
        "Kisses of a night terror",
        "Dashed against a rock",
        "Invisible defender",
        "The tattered, the torn",
    ];