export const en = {
  lang: 'en',
  title: 'F2+F3 — the screenshot manager for technical Minecraft',
  description:
    'A desktop app that turns your Minecraft screenshots into a searchable record of coordinates, biomes, mobs and builds, with a Fabric mod that brings it into the game.',
  nav: {
    use: 'How it works',
    app: 'The app',
    mod: 'The mod',
    tech: 'Under the hood',
    ai: 'AI',
    download: 'Download'
  },
  hero: {
    eyebrow: 'Screenshot manager for technical Minecraft',
    h1: 'Every screenshot remembers where it was taken',
    lead: 'F2+F3 reads the coordinates, biome, mobs and builds behind each screenshot and keeps them one click away. Its Fabric mod puts the same gallery, your map plans and a materials list inside the game.',
    platform: 'Platform',
    button: 'Download',
    meta: 'Free and open source · MIT',
    caption: 'The gallery, with the data of every capture read from the game.'
  },
  use: {
    eyebrow: 'In practice',
    h2: 'Three keys you already know',
    lead: 'There is nothing to learn. You keep taking screenshots the way you always have.',
    steps: [
      {
        h: 'Press F2',
        p: 'Take the screenshot as usual. With the mod installed, the exact game data is saved next to it. Without the mod, leave F3 open and the app reads it from the image.'
      },
      {
        h: 'Open F2+F3',
        p: 'Your captures appear sorted by world and folder. Search by biome, dimension or mob, and copy the coordinates or a /tp command with one click.'
      },
      {
        h: 'Go back there',
        p: 'Press F6 in the game, pick a capture and follow the arrow. Or pin the materials of a build to the HUD and gather them.'
      }
    ]
  },
  app: {
    eyebrow: 'The desktop app',
    h2: 'A launcher for your screenshots',
    lead: 'It looks like the Minecraft Launcher on purpose, so it feels like part of the game. It works with the official launcher and with instance launchers, several game folders at once.',
    features: [
      {
        img: 'gallery',
        h: 'Gallery',
        p: 'Folders, favourites, notes and tags on top of your real screenshots folder. Nothing is copied or locked in a database.',
        li: [
          'Filter by world, dimension, biome or mob',
          'Move, rename and delete from the app, with the data files following the image',
          'A popup tells you when a new capture arrives'
        ],
        alt: 'F2+F3 gallery showing a grid of Minecraft screenshots with biome and coordinate labels'
      },
      {
        img: 'details',
        h: 'Everything about one capture',
        p: 'Position, chunk, facing, light, weather, game mode, the block and entity at the crosshair, nearby mobs and structures. Every value shows where it came from.',
        li: [
          'Copy XYZ or a ready /tp command',
          'Technical panel: TPS and MSPT, mob caps, gamerules, redstone signal, container contents',
          'Villager trades of the villager you were looking at'
        ],
        alt: 'Screenshot viewer with a details panel listing coordinates, biome, light and technical data'
      },
      {
        img: 'map',
        h: 'Map and planners',
        p: 'Every capture is a point on a map per world and dimension. Switch between Overworld and Nether coordinates, see chunk and region borders, and the slime chunks of your seed.',
        li: [
          'AFK planner: the 24 and 128 block spawn spheres around a spot, and which farms stay loaded',
          'Portal planner: where a portal will actually link',
          'Export waypoints for Xaero and JourneyMap'
        ],
        alt: 'Map view with captures as points, chunk grid, slime chunks and the AFK planner spheres'
      },
      {
        img: 'build',
        h: 'Builds you can take with you',
        p: 'Hold Shift and press F2 to capture a build with its photo. The app shows its size and materials in stacks, exports the .nbt, or pastes it into another world.',
        li: [
          'Standard vanilla structure format',
          'Material list ready to copy',
          'Place it back from the in-game gallery, rotated to where you face'
        ],
        alt: 'Build section listing the materials of a captured build in stacks'
      }
    ],
    extra: [
      {
        h: 'Backup to your own Google Drive',
        p: 'Sign in with Google and the captures and their data go to a folder in your account. The app only sees the files it created.'
      },
      {
        h: 'English and Spanish',
        p: 'One button switches the whole interface. The mod follows the language of the game.'
      },
      {
        h: 'Linux and Windows',
        p: 'AppImage and Windows installer. It can start with the system and stay in the tray watching for new captures.'
      }
    ]
  },
  mod: {
    eyebrow: 'F2+F3 Companion · Fabric',
    h2: 'The app, inside the game',
    lead: 'A client-side mod for Minecraft 26.3, 1.21.1 and 1.20.1. It needs no other mod, not even Fabric API.',
    englishOnly: '',
    cards: [
      {
        media: 'mod-gallery',
        h: 'In-game gallery',
        keys: ['F6'],
        p: 'Your captures of this world with their data, notes and favourites from the app. Copy the coordinates or ask to be guided there.'
      },
      {
        media: 'mod-materials',
        video: true,
        h: 'Pinned materials list',
        keys: ['M'],
        p: 'Pin the materials of a build to the right of the HUD. It counts your inventory as you gather and ticks off each line until you have everything.'
      },
      {
        media: 'mod-plans',
        video: true,
        h: 'Your map plans in the world',
        keys: ['J', 'Shift', 'J'],
        p: 'The AFK spot with its 24 and 128 block spheres, your farms, linked portals and slime chunks, drawn where they are.'
      },
      {
        media: 'mod-build',
        h: 'Capture and place builds',
        keys: ['Shift', 'F2'],
        p: 'Mark depth, width and height with the wheel, name it and it is saved. Placing it shows a box you can rotate and move before confirming, with undo.'
      },
      {
        media: 'mod-guide',
        h: 'Guide',
        keys: ['H'],
        p: 'An arrow on the HUD with the distance and how far up or down. Between the Overworld and the Nether it points to the matching coordinates.'
      },
      {
        media: 'mod-sidecar',
        h: 'Exact data with every F2',
        keys: ['F2'],
        p: 'A small JSON file next to the image with what the game knows: seed, biome, structures you are inside, visible mobs, gamerules and tick rate.'
      }
    ]
  },
  tech: {
    eyebrow: 'Under the hood',
    h2: 'How it knows',
    lead: 'A capture can be described by up to five sources. Each is stored separately, and the app always shows the most reliable one available, labelled with its origin.',
    ladder: [
      {
        name: 'Mod',
        badge: 'Exact',
        tier: 'var(--green-light)',
        p: 'The companion file written by the mod at the moment of the capture. Read straight from the game, including things F3 never shows.'
      },
      {
        name: 'F3',
        badge: 'Exact',
        tier: 'var(--green-light)',
        p: 'OCR of the debug screen. No machine learning: the app loads the game font from your installed version and matches its glyphs pixel by pixel.'
      },
      {
        name: 'Advanced AI',
        badge: 'Estimated',
        tier: 'var(--blue)',
        p: 'Optional, with your own key or a local Ollama. A vision model describes the scene, including structures.'
      },
      {
        name: 'Local model',
        badge: 'Local',
        tier: 'var(--yellow)',
        p: 'Optional 170 MB download that runs offline on your CPU. Biome and the mob at the crosshair, and only when it is confident.'
      },
      {
        name: 'Colours',
        badge: 'Approximate',
        tier: 'var(--text-3)',
        p: 'Always available. Dimension and a rough scene guess from the colours of the image.'
      }
    ],
    ladderNote:
      'A value you set by hand beats all of them. Re-analysing a capture keeps the AI and manual results, so nothing is paid for twice.',
    ocr: {
      h: 'Reading F3 without guessing',
      p: [
        'Minecraft draws its debug screen with a bitmap font, so every character is an exact pattern of pixels. F2+F3 extracts that font from the jar of your installed version, finds the GUI scale of the capture and compares glyphs directly. The result is the number the game printed, not an approximation of it.',
        'The parser then understands the layout of each version: position, chunk, facing, light, the targeted block with its state and tags, server TPS and MSPT, /tick state, day, and the mob cap counters by category.'
      ]
    },
    contract: {
      h: 'One small contract between mod and app',
      p: 'The mod and the app never talk to each other. They share four files, validated with a schema where each section fails on its own: a malformed block of data is dropped and the rest is kept.',
      files: [
        ['NAME.f2f3.json', 'mod → app', 'Exact data of one capture'],
        ['NAME.f2f3.nbt', 'mod → app', 'The build, as a vanilla structure'],
        ['f2f3/app-index.json', 'app → mod', 'Notes, tags and sheets for the in-game gallery'],
        ['f2f3/plans.json', 'app → mod', 'AFK and portal plans per world']
      ],
      cols: ['File', 'Direction', 'Contents']
    },
    arch: {
      h: 'Architecture',
      p: 'Electron, React and TypeScript, split so that the logic that matters has no dependency on Electron and is tested on its own.',
      boxes: [
        ['core/', 'Pure logic: font and OCR, F3 parser, NBT reader, local vision, analysis resolution. No Electron.'],
        ['main/', 'Services: library, analysis worker pool, thumbnails, capture watcher, Drive backup, AI providers.'],
        ['shared/', 'Typed IPC contract, catalogs, slime chunks, planners, placement maths, translations.'],
        ['renderer/', 'React and Zustand. It cannot import core: it only sees the typed bridge.']
      ],
      li: [
        'Analysis runs in worker threads and is cached by file size and modification time',
        'Context isolation, sandbox and a strict CSP; API keys never leave the main process and are encrypted with the system keychain',
        '172 automated tests, with real fixtures: F3 screenshots, mod files and .nbt builds from each supported version'
      ]
    },
    mechanics: {
      h: 'Game mechanics, checked against the game',
      p: 'The planners do not rely on wiki folklore. The rules were read from the game bytecode and the slime chunk formula is validated against the game own random generator.',
      li: [
        'Mobs spawn between 24 and 128 blocks from the player, in a 3D sphere',
        'A chunk spawns mobs only if its centre is within 128 horizontal blocks',
        'Portals search a ±16 block square in the Nether and ±128 in the Overworld, over the full height, picking the closest in 3D',
        'Slime chunks computed from the seed with 64-bit arithmetic'
      ]
    },
    modTech: {
      h: 'One mod, three Minecraft versions',
      p: 'The mod is written once against 26.3, which ships unobfuscated. The 1.21.1 and 1.20.1 ports keep the same code and add a thin compatibility layer that imitates the newer classes, so a feature is ported by copying it.',
      li: [
        'Every hook is a mixin: screenshot, tick, HUD, keyboard and mouse wheel',
        'Files are written off the game thread, to a temporary file and then moved, so the app never reads half a file',
        'Builds are placed through the integrated server, not with commands, so it works without cheats'
      ],
      cols: ['Minecraft', 'Java', 'Mappings', 'Rendering of world shapes'],
      rows: [
        ['26.3', '25', 'None needed', 'Game gizmos API'],
        ['1.21.1', '21', 'Official Mojang', 'Own layer over Tesselator'],
        ['1.20.1', '17', 'Official Mojang', 'Own layer, PoseStack']
      ]
    }
  },
  ai: {
    eyebrow: 'Artificial intelligence',
    h2: 'AI, with the numbers on the table',
    lead: 'When there is no mod and no F3 on screen, the image is all there is. F2+F3 has two AI levels for that case. Both are optional, both are labelled as estimates, and we measured how often the local one is right.',
    local: {
      h: 'The local model',
      p: [
        'A CLIP ViT-B/32 vision model in half precision, run with ONNX on your CPU. Nothing is uploaded. It works zero-shot: instead of training a classifier, the image is compared with text descriptions of each biome and mob.',
        'Those descriptions are embedded once, when the app is built, and shipped as a small JSON file. That is why you only download the vision half of the model: 170 MB instead of the full pair.'
      ],
      li: [
        'Two crops per capture: the scene without the F3 columns and the hotbar for the biome, and the area around the crosshair for the mob',
        'Candidates are limited to the dimension: no ghasts in the Overworld',
        'It answers only above a confidence threshold and with a clear margin over the runner-up',
        'Colour checks veto impossible answers: a cherry grove needs pink, a desert needs sand',
        'Structures are left to the advanced level: local zero-shot models could not tell them apart in our tests'
      ]
    },
    results: {
      h: 'Measured, not promised',
      p: 'We built a labelled set in the game: the mod wrote the real biome of every capture and we summoned each mob at the crosshair. Then the local model analysed the images without that data.',
      precisionBiome: 'biome precision',
      precisionBiomeNote: '{c} of the {a} answers it gave were right',
      precisionMob: 'mob precision',
      precisionMobNote: '{c} of the {a} answers it gave were right',
      falseAlarm: 'false mob alarms',
      falseAlarmNote: '{a} of {t} captures without a mob at the crosshair',
      speed: 'per capture',
      speedNote: 'on CPU, both crops included',
      chart: 'What it did with each capture',
      rows: {
        biomeKnown: 'Biomes it knows',
        biomeUnknown: 'Biomes it has no label for',
        mob: 'Mob at the crosshair'
      },
      legend: { ok: 'Right', bad: 'Wrong', skip: 'Did not answer' },
      of: '{n} captures',
      reading:
        'With mobs the model does what it was designed for: it stays quiet most of the time, and when it speaks it is usually right. Biomes are its weak point. A general-purpose model confuses neighbouring biomes and has no label for many of them, which is why the app shows its biome as an estimate you can correct, and why the exact sources always win.',
      method: 'Method',
      methodLi: [
        '{n} captures taken in Minecraft 26.3 at {res}, default resource pack, by a script that teleports to each biome',
        'Five captures per biome site from different points and angles, four at midday and one at dusk; each mob three to five blocks away, in three settings per dimension, one of them at night',
        'Ground truth: the biome reported by the game at the player position and the mob that was summoned',
        'The dimension was given, as F3 provides it; the F3 overlay itself was hidden',
        'Underground biomes were not sampled, and the biome is the one where the player stands, which near a border is not always the one in view'
      ],
      perBiome: 'Results by biome',
      perMob: 'Results by mob',
      cols: ['', 'Captures', 'Right', 'Wrong', 'No answer']
    },
    advanced: {
      h: 'The advanced level',
      p: 'For the captures that matter, a large vision model can describe what a small one cannot: structures, weather, time of day, every mob in the frame. You choose the provider and use your own key.',
      li: [
        'Claude, OpenAI or any compatible endpoint, Gemini, or Ollama running on your machine',
        'The answer must follow a fixed schema and is validated before it is stored',
        'What F3 already read is passed as context, and the model is told to ignore the debug text',
        'Batch analysis asks for confirmation with the number of requests before spending anything',
        'Keys are stored encrypted on your computer and never reach the interface code'
      ]
    },
    built: {
      h: 'Built with AI, too',
      p: 'F2+F3 was developed in pair with Claude Code: the app, the mod and its ports, the tests and this evaluation. Every commit in both repositories says so.'
    }
  },
  download: {
    eyebrow: 'Download',
    h2: 'Get F2+F3',
    lead: 'Free and open source. The app includes the mod: Settings › Save the mod puts the right jar in your mods folder.',
    appH: 'Desktop app',
    modH: 'Companion mod · Fabric',
    modNote: 'Client only. Requires Fabric Loader. No Fabric API needed.',
    source: 'Source code'
  },
  footer: {
    disclaimer:
      'Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.',
    made: 'Made by Moises Guevara.'
  }
}

export type Copy = typeof en
