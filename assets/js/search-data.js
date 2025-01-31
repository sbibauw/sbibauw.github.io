// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "projects-reflexive-writing-at-the-high-school-to-university-transition",
          title: 'Reflexive writing at the high-school to university transition',
          description: "FNRS-FRFC research project from 2008 to 2010 at UCLouvain",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2010-frfc/";
            },},{id: "projects-ai-tutoring-for-language-learning",
          title: 'AI Tutoring for Language Learning',
          description: "CDR research project • Funded by FNRS • Developing the LanguageLab web interface",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-cdr/";
            },},{id: "projects-task-based-dialogue-systems-for-language-learning",
          title: 'Task-based dialogue systems for language learning',
          description: "Doctoral research project at KU Leuven, funded by a SENESCYT scholarship (Ecuador)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2014-phd/";
            },},{id: "projects-enhancing-efl-learners-speaking-ability-through-chatbot-assisted-dynamic-assessment-powered-by-llms",
          title: 'Enhancing EFL learners’ speaking ability through chatbot-assisted dynamic assessment powered by LLMs',
          description: "Doctoral research project by Zhaori Wang • Joint PhD KU Leuven-UCLouvain • Funded by CSC",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-zhaori/";
            },},{id: "talks-conversational-agents-for-language-learning-state-of-the-art-and-avenues-for-research-on-task-based-agents",
          title: 'Conversational agents for language learning: state of the art and avenues for research...',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2015/2015-calico/";
            },},{id: "talks-instructional-design-and-natural-language-processing-in-dialogue-based-call",
          title: 'Instructional design and natural language processing in dialogue-based CALL',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2016/2016-calico/";
            },},{id: "talks-the-effectiveness-of-dialogue-based-call-on-l2-proficiency-development-a-meta-analysis",
          title: 'The effectiveness of dialogue-based CALL on L2 proficiency development: a meta-analysis',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2017/2017-calico/";
            },},{id: "talks-génération-automatique-de-texte-état-de-la-recherche-et-des-applications",
          title: 'Génération automatique de texte : état de la recherche et des applications',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2017/2017-audaxis/";
            },},{id: "talks-hey-siri-can-i-learn-english-by-talking-to-you-a-meta-analysis-of-dialogue-based-call",
          title: '“Hey Siri, can I learn English by talking to you?” A meta-analysis of...',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2018/2018-plin-day/";
            },},{id: "talks-insights-from-a-multilevel-meta-analysis-on-the-effectiveness-of-dialogue-based-call",
          title: 'Insights from a multilevel meta-analysis on the effectiveness of dialogue-based CALL',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2018/2018-call/";
            },},{id: "talks-dialogue-based-call-a-multilevel-meta-analysis",
          title: 'Dialogue-based CALL: a multilevel meta-analysis',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2018/2018-tuebingen/";
            },},{id: "talks-enseignement-apprentissage-des-langues-assisté-par-ordinateur-état-de-la-recherche-et-des-applications",
          title: 'Enseignement-apprentissage des langues assisté par ordinateur : état de la recherche et des...',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2018/2018-quito/";
            },},{id: "talks-dialogue-based-call-a-multilevel-meta-analysis",
          title: 'Dialogue-based CALL: a multilevel meta-analysis',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2018/dialogue-based-call-multilevel-meta-analysis-wot/";
            },},{id: "talks-effects-of-dialogue-based-call-practice-on-foreign-language-learning",
          title: 'Effects of dialogue-based CALL practice on foreign language learning',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2019/2019-itec/";
            },},{id: "talks-effects-of-interactivity-of-written-practice-on-incidental-vocabulary",
          title: 'Effects of interactivity of written practice on incidental vocabulary',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2019/effects-interactivity-incidental-vocabulary/";
            },},{id: "talks-interactivity-in-dialogue-based-call-practice-effects-on-learners-perceptions-and-production",
          title: 'Interactivity in dialogue-based CALL practice: effects on learners perceptions and production',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2019/2019-eurocall/";
            },},{id: "talks-systèmes-de-dialogue-pour-l-39-apprentissage-des-langues-typologie-des-systèmes-et-mesure-des-effets",
          title: 'Systèmes de dialogue pour l&amp;#39;apprentissage des langues : typologie des systèmes et mesure...',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2019/2019-cental/";
            },},{id: "talks-desarrollo-de-la-fluidez-oral-en-lengua-extranjera-experimento-de-medición-semiautomática-de-los-efectos-de-aprendizaje",
          title: 'Desarrollo de la fluidez oral en lengua extranjera: experimento de medición semiautomática de...',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2019/2019-asefie/";
            },},{id: "talks-medir-efectos-en-educación-introducción-a-los-métodos-cuantitativos",
          title: 'Medir efectos en educación: introducción a los métodos cuantitativos',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2020/medir-efectos-en-educacion-introduccion-metodos-cuantitativos/";
            },},{id: "talks-la-tecnología-aplicada-a-la-educación",
          title: 'La tecnología aplicada a la educación',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2021/2021-mecatronica/";
            },},{id: "talks-aprendizaje-del-inglés-basado-en-tareas-y-tecnología",
          title: 'Aprendizaje del inglés basado en tareas y tecnología',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2021/2021-congreso-educo/";
            },},{id: "talks-task-based-language-teaching-with-technology",
          title: 'Task-based language teaching with technology',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2021/2021-pucesa/";
            },},{id: "talks-automatizing-l2-fluency-measurement-validity-and-developmental-sensitivity-of-temporal-fluency-metrics-variations",
          title: 'Automatizing L2 fluency measurement: validity and developmental sensitivity of temporal fluency metrics variations...',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2021/2021-aila/";
            },},{id: "talks-can-we-detect-short-term-fluency-development-after-2-hours-of-chat-with-a-dialogue-system",
          title: 'Can we detect short term fluency development after 2 hours of chat with...',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2022/detect-short-term-fluency-development-dialogue-system/";
            },},{id: "talks-inteligencia-artificial-para-el-aprendizaje-de-idiomas-diseño-y-efectividad-de-sistemas-de-diálogo-y-chatbots",
          title: 'Inteligencia artificial para el aprendizaje de idiomas: Diseño y efectividad de sistemas de...',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2022/inteligencia-artificial-para-aprendizaje-de-idiomas/";
            },},{id: "talks-intelligence-artificielle-et-fle-outils-pour-enseignants-et-apprenants",
          title: 'Intelligence artificielle et FLE: outils pour enseignants et apprenants',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2022/intelligence-artificielle-et-FLE/";
            },},{id: "talks-reference-management",
          title: 'Reference management',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2022/reference-management/";
            },},{id: "talks-aportes-y-límites-de-las-tecnologías-educativas-unas-lecciones-de-la-pandemia",
          title: 'Aportes y límites de las tecnologías educativas: unas lecciones de la pandemia',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2022/2022-csiu7/";
            },},{id: "talks-frequency-of-occurrence-in-output-helps-predict-incidental-vocabulary-learning",
          title: 'Frequency of occurrence in output helps predict incidental vocabulary learning',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2023/2023-aaal/";
            },},{id: "talks-chatbots-in-het-onderwijs-wat-is-niet-mogelijk",
          title: 'Chatbots in het onderwijs: wat is (niet) mogelijk?',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2023/2023-kulak/";
            },},{id: "talks-presentation-at-tsll-2023-which-interactivity-matters-in-tsll-agency-engagement-and-negotiation-in-conversational-ai-iowa-state-university-aimes-ia",
          title: 'Presentation at TSLL 2023: Which interactivity matters in TSLL? Agency, engagement and negotiation...',
          description: "",
          section: "Talks",},{id: "talks-",
          title: '',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2025/2024-02-cripedis/";
            },},{id: "talks-presentation-at-learning-bytes-festival-2024-language-learning-with-conversational-ai-with-anaïs-tack-buda-kortrijk",
          title: 'Presentation at Learning Bytes Festival 2024: Language Learning with Conversational AI with Anaïs...',
          description: "",
          section: "Talks",},{id: "talks-presentation-at-workshop-les-stades-d-acquisition-d-une-langue-étrangère-input-output-et-mots-en-contexte-comment-la-production-contribue-également-à-l-acquisition-lexicale-uclouvain-louvain-la-neuve",
          title: 'Presentation at Workshop « Les stades d’acquisition d’une langue étrangère »: Input, output...',
          description: "",
          section: "Talks",},{id: "talks-workshop-at-the-ai-in-language-education-altissia-training-day-the-use-of-chatbots-to-enhance-students-speaking-ability-uclouvain-saint-louis-brussels",
          title: 'Workshop at the AI in Language Education Altissia Training Day: The Use of...',
          description: "",
          section: "Talks",},{id: "talks-presentation-at-colloque-international-retour-du-sujet-et-du-sens-en-didactique-des-langues-apprendre-les-langues-à-l-ère-de-chatgpt-quels-rôles-pour-l-apprenant-l-enseignant-et-l-ia-université-de-liège-liège",
          title: 'Presentation at Colloque international [Retour] du Sujet et du Sens en Didactique des...',
          description: "",
          section: "Talks",},{id: "talks-presentation-at-colloque-agi-lang-which-interactivity-matters-with-a-chatbot-agency-vs-feedback-on-perception-engagement-amp-amp-learning-université-grenoble-alpes-grenoble",
          title: 'Presentation at Colloque Agi-lang: Which interactivity matters with a chatbot? Agency vs feedback...',
          description: "",
          section: "Talks",},{id: "talks-paper-at-eurosla-2024-observing-very-short-term-speaking-fluency-development-in-computer-delivered-interviews-université-paul-valéry-montpellier-3-montpellier",
          title: 'Paper at EuroSLA 2024: Observing very-short-term speaking fluency development in computer-delivered interviews (Université...',
          description: "",
          section: "Talks",},{id: "talks-keynote-at-stage-international-d-été-en-didactique-du-fle-enseigner-le-fle-à-l-ère-de-chatgpt-usages-et-mésusage-des-ia-génératives-uclouvain-louvain-la-neuve",
          title: 'Keynote at Stage international d’été en didactique du FLE: Enseigner le FLE à...',
          description: "",
          section: "Talks",},{id: "talks-presentation-at-4e-congrès-européen-de-la-fipf-pratiquer-le-français-avec-une-ia-conversationnelle-entre-liberté-et-correction-quelle-interactivité-importe-universitatea-politehnica-bucharest",
          title: 'Presentation at 4e Congrès européen de la FIPF: Pratiquer le français avec une...',
          description: "",
          section: "Talks",},{id: "talks-keynote-at-rentrée-académique-de-l-école-de-traduction-et-interprétation-intelligence-artificielle-la-solution-pour-l-apprentissage-des-langues-uclouvain-saint-louis-brussels",
          title: 'Keynote at Rentrée académique de l’École de Traduction et Interprétation: Intelligence artificielle :...',
          description: "",
          section: "Talks",},{id: "talks-keynote-at-15e-congrès-national-des-professeurs-de-français-en-equateur-enseigner-le-fle-à-l-ère-de-chatgpt-usages-et-mésusage-des-ia-génératives-universidad-central-del-ecuador-quito",
          title: 'Keynote at 15e Congrès national des professeurs de français en Equateur: Enseigner le...',
          description: "",
          section: "Talks",},{id: "talks-keynote-at-training-day-transformer-la-formation-avec-l-ia-training-transformeren-met-ai-ia-attention-et-mémoire-place-et-potentiel-en-formation-fps-policy-and-support-bosa-brussels",
          title: 'Keynote at Training Day “Transformer la Formation avec l’IA / Training Transformeren met...',
          description: "",
          section: "Talks",},{id: "talks-paper-at-nlp4call-2024-generating-contexts-for-esp-vocabulary-exercises-with-llms-with-iglika-nikolova-stoupak-amandine-dumont-françoise-stas-patrick-watrin-amp-amp-thomas-françois-université-rennes-2-rennes",
          title: 'Paper at NLP4CALL 2024: Generating Contexts for ESP Vocabulary Exercises with LLMs with...',
          description: "",
          section: "Talks",},{id: "talks-keynote-at-journée-d-étude-innovations-pédagogiques-dans-l-enseignement-du-français-dans-un-contexte-plurilingue-et-interculturel-chomsky-vs-chatgpt-ce-que-révèlent-les-grands-modèles-de-langage-llm-sur-l-apprentissage-des-langues-hanoi-university-hanoi",
          title: 'Keynote at Journée d’étude “Innovations pédagogiques dans l’enseignement du français dans un contexte...',
          description: "",
          section: "Talks",},{id: "talks-keynote-at-the-international-conference-shifting-boundaries-ai-and-human-interactions-redefining-reality-shai-looking-back-looking-forward-from-dialogue-based-call-to-llm-chatbots-for-language-learning-universitá-di-napoli-l-orientale-naples",
          title: 'Keynote at the International Conference Shifting Boundaries: AI and Human Interactions Redefining Reality...',
          description: "",
          section: "Talks",},{id: "talks-keynote-at-journée-du-français-intelligence-artificielle-et-langues-au-delà-du-blabla-intelligence-artificielle-et-activités-intelligentes-pour-la-classe-de-français-with-michel-boiron-eeckout-academy-ku-leuven-kulak-kortrijk",
          title: 'Keynote at Journée du français: Intelligence artificielle et langues : au-delà du blabla...',
          description: "",
          section: "Talks",},{id: "talks-keynote-at-prix-de-l-abpf-ia-et-apprentissage-du-français-moins-de-buzz-plus-d-humain-ulb-brussels",
          title: 'Keynote at Prix de l’ABPF: IA et apprentissage du français : moins de...',
          description: "",
          section: "Talks",},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ZK0L1fgAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sbibauw", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-1264-6090", "_blank");
        },
      },{
        id: 'social-zotero',
        title: 'Zotero',
        section: 'Socials',
        handler: () => {
          window.open("https://www.zotero.org/sbibauw", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sbibauw", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/sbibauw.bsky.social", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
