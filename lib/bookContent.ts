export interface BookQuote {
  text: string
  author: string
}

export interface BookPage {
  slug: string
  pageNumber: number
  title: string
  paragraphs: string[]
  keyPoints: string[]
  quote?: BookQuote
  fact?: string
}

export interface Chapter {
  slug: string
  number: number
  title: string
  subtitle: string
  description: string
  color: string
  pages: BookPage[]
}

const p = (
  slug: string,
  pageNumber: number,
  title: string,
  paragraphs: string[],
  keyPoints: string[],
  quote?: BookQuote,
  fact?: string,
): BookPage => ({ slug, pageNumber, title, paragraphs, keyPoints, quote, fact })

export const chapters: Chapter[] = [
  {
    slug: 'introduction',
    number: 0,
    title: 'Introduction',
    subtitle: 'The Convergence of Human and Machine',
    description:
      'Why the meeting of biological and artificial intelligence is the defining story of our century.',
    color: '#3b82f6',
    pages: [
      p(
        'introduction',
        1,
        'The Convergence of Human and Machine',
        [
          'For most of history, intelligence was something only living things possessed. Today, machines can translate languages, recognise faces, drive cars and write essays. This book is about what happens when two very different kinds of intelligence — the biological kind we are born with and the artificial kind we build — begin to converge.',
          'That convergence is not a single event but a long conversation between human curiosity and machine capability. Each advances the other: our questions shape what we build, and what we build reshapes what we can imagine. Understanding this relationship is the purpose of the pages ahead.',
        ],
        [
          'Intelligence is no longer unique to biological life.',
          'Human and machine intelligence improve each other in a feedback loop.',
          'The book traces this relationship from its origins to its future.',
        ],
        {
          text: 'The question of whether machines can think is no more interesting than the question of whether fish can swim.',
          author: 'Alan Turing',
        },
      ),
      p(
        'introduction-2',
        2,
        'Two Kinds of Intelligence',
        [
          'Human intelligence is embodied, emotional and shaped by evolution. It learns from a handful of examples, transfers knowledge across domains effortlessly, and is driven by goals, curiosity and social bonds. It is also slow, forgetful and biased.',
          'Machine intelligence is the opposite in many ways: fast, tireless, precise at scale, and able to search billions of possibilities. Yet it is brittle outside its training data and lacks the lived understanding humans take for granted. The interesting question is not which is better, but how they can complement each other.',
        ],
        [
          'Human intelligence is general, embodied and sample-efficient.',
          'Machine intelligence is fast, scalable but narrow and brittle.',
          'Their strengths are complementary rather than competing.',
        ],
      ),
      p(
        'introduction-3',
        3,
        'A Brief History of the Idea',
        [
          'The dream of thinking machines is ancient. Philosophers from Aristotle to Leibniz imagined reasoning as a kind of calculation. In the 19th century, Charles Babbage designed a mechanical computer, and Ada Lovelace saw that such a machine might manipulate more than numbers.',
          'In the 20th century, Alan Turing formalised computation and asked whether machines could think. In 1956 a small workshop at Dartmouth gave the field its name. From there the story moves through optimism, disappointment, and a modern resurgence powered by data and deep learning.',
        ],
        [
          'The idea of mechanised reason predates computers by centuries.',
          'Turing and the 1956 Dartmouth workshop founded the modern field.',
          'The field has cycled through booms and winters.',
        ],
        {
          text: 'I propose to consider the question, "Can machines think?"',
          author: 'Alan Turing, 1950',
        },
      ),
      p(
        'introduction-4',
        4,
        'How Humans Think',
        [
          'Human cognition is not a single process but a chorus of them: perception, memory, attention, language, emotion and reasoning all interacting. We recognise a friend in a fraction of a second, yet struggle to multiply large numbers in our heads.',
          'Two modes of thought are often contrasted. System 1 is fast, automatic and intuitive; System 2 is slow, deliberate and effortful. Much of what feels like "intelligence" is the seamless cooperation of these systems, tuned by a lifetime of experience.',
        ],
        [
          'Cognition is the interaction of many specialised processes.',
          'Fast intuition and slow reasoning work together.',
          'Experience tunes both systems over a lifetime.',
        ],
      ),
      p(
        'introduction-5',
        5,
        'How Machines "Think"',
        [
          'A machine does not think in the human sense, but it does compute. Given a task, an AI system transforms inputs into outputs using learned parameters. A neural network, for example, is a vast collection of numbers adjusted until its predictions match examples.',
          'The crucial difference is representation. Humans carry meaning, context and intention; machines carry statistical patterns. When a model writes a fluent sentence, it is predicting likely sequences, not expressing understanding — a distinction that matters for how we use and trust these systems.',
        ],
        [
          'Machines compute by transforming inputs with learned parameters.',
          'Neural networks are tuned numbers fitted to examples.',
          'Statistical pattern-matching is not the same as human understanding.',
        ],
      ),
      p(
        'introduction-6',
        6,
        'The Turing Test and the Question of Minds',
        [
          'In 1950 Alan Turing proposed a test: if a machine could converse so convincingly that a human could not tell it apart from another human, it would be reasonable to say it could think. The test sidesteps the hard question of consciousness and focuses on behaviour.',
          'Modern chatbots can pass casual versions of this test, yet the debate continues. Does fluent conversation imply understanding, or merely the appearance of it? The question is no longer academic — it shapes how we assign trust, responsibility and rights to the systems we build.',
        ],
        [
          'The Turing Test measures convincing conversation, not consciousness.',
          'Passing it does not settle whether a machine understands.',
          'The question now has real ethical and legal stakes.',
        ],
        {
          text: 'We can only see a short distance ahead, but we can see plenty there that needs to be done.',
          author: 'Alan Turing',
        },
      ),
      p(
        'introduction-7',
        7,
        'Augmentation versus Automation',
        [
          'Automation replaces a human task with a machine; augmentation amplifies human ability while keeping a person in control. A calculator automates arithmetic; a spell-checker augments writing. The same AI technology can be deployed in either mode.',
          'The choice between them is a design and policy decision, not a technical inevitability. Augmentation tends to preserve human agency and judgement, while automation can increase speed and consistency. The most successful systems often blend both, handing routine work to machines and judgement to people.',
        ],
        [
          'Automation replaces tasks; augmentation amplifies people.',
          'The same technology can be used in either mode.',
          'The best systems blend machine speed with human judgement.',
        ],
      ),
      p(
        'introduction-8',
        8,
        'Why the Conversation Matters Now',
        [
          'AI has moved from research labs into everyday life: search, maps, medical imaging, hiring tools, and recommendation feeds. These systems influence what we read, who we meet, and even whether we get a loan or an interview.',
          'Because the stakes are now personal and societal, the conversation about human-AI interaction can no longer be left to engineers alone. Everyone who uses these systems has a stake in how they are designed, governed and improved.',
        ],
        [
          'AI now shapes daily decisions at scale.',
          'Its influence reaches information, opportunity and safety.',
          'The conversation must include everyone, not just engineers.',
        ],
      ),
      p(
        'introduction-9',
        9,
        'How to Read This Book',
        [
          'The book is organised as a journey. It begins with the birth of AI, moves through symbolic reasoning, winters and the machine-learning revolution, then explores deep learning, language, vision and robotics. It closes with ethics and the future of collaboration.',
          'Each page stands on its own but builds on the last. Key points summarise the essentials, and the assistant in the corner can answer questions grounded in this text. Read linearly for the full story, or jump to the chapter that interests you.',
        ],
        [
          'The book moves chronologically from origins to the future.',
          'Each page is self-contained but connected.',
          'The built-in assistant answers from this book’s content.',
        ],
      ),
      p(
        'introduction-10',
        10,
        'Summary and Reflection',
        [
          'We have seen that human and machine intelligence are different but converging, that the dream of thinking machines is centuries old, and that the Turing Test reframed the question from consciousness to behaviour. We have also seen why augmentation and automation are choices, not accidents.',
          'As you continue, keep one question in mind: not "Can machines think?" but "How do we want to think together with them?" The rest of the book is an attempt to answer that question with history, technology and care.',
        ],
        [
          'Human and machine intelligence are complementary.',
          'Behaviour and understanding are not the same thing.',
          'The guiding question is how we want to think together.',
        ],
        {
          text: 'The future is not written by machines alone, but by the humans who create and guide them.',
          author: 'Human & AI',
        },
      ),
    ],
  },
  {
    slug: 'chapter-1',
    number: 1,
    title: 'Chapter 1',
    subtitle: 'The Birth of Artificial Intelligence',
    description:
      'From mechanical calculating engines to the 1956 Dartmouth workshop that named a field.',
    color: '#8b5cf6',
    pages: [
      p(
        'chapter-1',
        11,
        'The Birth of Artificial Intelligence',
        [
          'Artificial intelligence was not born in a single moment. It emerged from centuries of work on logic, mathematics and mechanical computation, and crystallised in the mid-20th century when electronic computers made the dream of a thinking machine seem achievable.',
          'This chapter follows that birth: the ancient idea of reasoning as calculation, the invention of the programmable computer, and the 1956 Dartmouth workshop where a group of optimists gave the new field its name and its ambition.',
        ],
        [
          'AI grew from logic, mathematics and computation over centuries.',
          'Electronic computers made the dream practical in the 1940s–50s.',
          'The 1956 Dartmouth workshop named and launched the field.',
        ],
      ),
      p(
        'chapter-1-2',
        12,
        'Leibniz, Babbage and Mechanised Reason',
        [
          'Gottfried Wilhelm Leibniz dreamed of a universal language of thought in which every question could be settled by calculation — "let us calculate." He also built a mechanical calculator, one of the first devices to mechanise arithmetic.',
          'In the 1800s Charles Babbage designed the Analytical Engine, a general-purpose mechanical computer. Ada Lovelace, who wrote notes on it, is often called the first programmer and recognised that such a machine could in principle manipulate any symbol, not just numbers.',
        ],
        [
          'Leibniz imagined reasoning reduced to calculation.',
          'Babbage designed a general-purpose mechanical computer.',
          'Ada Lovelace saw that machines could manipulate any symbol.',
        ],
        {
          text: 'Let us calculate.',
          author: 'Gottfried Wilhelm Leibniz',
        },
      ),
      p(
        'chapter-1-3',
        13,
        'Alan Turing and the Universal Machine',
        [
          'In 1936 Alan Turing described an abstract machine that could compute anything computable given enough time and memory. This Universal Turing Machine became the theoretical foundation of all modern computers.',
          'During World War II Turing helped break the Enigma cipher, showing the practical power of computation. In 1950 he asked "Can machines think?" and proposed the imitation game, now known as the Turing Test, as a way to answer it through behaviour.',
        ],
        [
          'The Turing Machine defined what is computable.',
          'Codebreaking showed computation’s practical power.',
          'The 1950 imitation game reframed machine intelligence.',
        ],
      ),
      p(
        'chapter-1-4',
        14,
        'The Dartmouth Workshop of 1956',
        [
          'In the summer of 1956, John McCarthy, Marvin Minsky, Nathaniel Rochester and Claude Shannon organised a workshop at Dartmouth College. Their proposal coined the term "artificial intelligence" and set an ambitious goal: to make machines use language, form abstractions, solve problems and improve themselves.',
          'The workshop did not solve intelligence, but it created a community and a name. For the next two decades, researchers would pursue that vision with remarkable optimism, believing that the core of intelligence could be captured in a few working programs.',
        ],
        [
          'The 1956 workshop coined "artificial intelligence".',
          'Its founders were strikingly optimistic about quick progress.',
          'It created the research community that still exists today.',
        ],
        {
          text: 'Every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it.',
          author: 'Dartmouth proposal, 1955',
        },
      ),
      p(
        'chapter-1-5',
        15,
        'Logic Theorist and the First Programs',
        [
          'One of the first AI programs was Logic Theorist, written by Allen Newell and Herbert Simon in 1955–56. It proved theorems from a mathematics textbook and was designed to imitate human problem-solving rather than brute-force calculation.',
          'Around the same time, Arthur Samuel built a checkers program that improved with experience, coining the term "machine learning." These early programs showed that machines could perform tasks once thought to require human intelligence.',
        ],
        [
          'Logic Theorist proved theorems by imitating human reasoning.',
          'Samuel’s checkers program learned from experience.',
          'Early success fuelled great optimism about the field.',
        ],
      ),
      p(
        'chapter-1-6',
        16,
        'The Perceptron and Early Neural Nets',
        [
          'In 1958 Frank Rosenblatt introduced the perceptron, a simple model of a neuron that could learn to classify patterns from examples. It was celebrated as a machine that could perceive and learn, and it attracted enormous attention.',
          'The perceptron showed the promise of learning from data rather than hand-coded rules. But it was limited to simple patterns, a limitation that would later contribute to a famous dispute and a decline in neural-network research.',
        ],
        [
          'The perceptron (1958) learned to classify from examples.',
          'It demonstrated learning from data instead of rules.',
          'Its limits later triggered a neural-network winter.',
        ],
      ),
      p(
        'chapter-1-7',
        17,
        'The Optimism of the Early Builders',
        [
          'The founders of AI believed intelligence could be captured in programs. Herbert Simon predicted a machine would beat a human at chess within a decade; Marvin Minsky suggested that within a generation the problem of creating artificial intelligence would be substantially solved.',
          'These predictions were wrong in their timing, but not in their direction. The optimism of the era drove enormous investment and creativity, laying foundations that would be built on decades later when computing power and data finally caught up.',
        ],
        [
          'Early pioneers expected human-level AI within a generation.',
          'Their timing was wrong but their direction was prescient.',
          'Their ambition funded foundational research for decades.',
        ],
      ),
      p(
        'chapter-1-8',
        18,
        'The First Cracks',
        [
          'By the late 1960s, the gap between promise and delivery became hard to ignore. Programs could handle neat puzzles but failed on messy real-world problems. The combinatorial explosion of possibilities overwhelmed the computers of the day.',
          'A 1969 book by Marvin Minsky and Seymour Papert analysed the limits of the perceptron, dampening enthusiasm for neural networks. Funding tightened, and the field entered its first period of reduced support — a taste of the winters to come.',
        ],
        [
          'Real-world problems overwhelmed early programs.',
          'Combinatorial explosion limited what computers could search.',
          'Minsky and Papert’s analysis cooled neural-network research.',
        ],
      ),
      p(
        'chapter-1-9',
        19,
        'Key Figures of the Founding Era',
        [
          'The founding generation reads like a hall of fame: Alan Turing and John von Neumann on theory; Claude Shannon on information; John McCarthy on Lisp and time-sharing; Marvin Minsky and Seymour Papert on perception and knowledge; Allen Newell and Herbert Simon on problem-solving.',
          'Their work spanned mathematics, psychology, engineering and philosophy. What united them was a conviction that intelligence could be understood and reproduced — a conviction that still animates the field, even as its methods have changed beyond recognition.',
        ],
        [
          'The founders combined mathematics, psychology and engineering.',
          'McCarthy gave the field its name and Lisp its start.',
          'Their shared conviction still drives AI research.',
        ],
      ),
      p(
        'chapter-1-10',
        20,
        'Summary and Reflection',
        [
          'AI was born from a long lineage of logic and computation, made practical by electronic computers and named at Dartmouth in 1956. Early programs like Logic Theorist and the perceptron showed real promise, and the founders’ optimism set the field’s ambition.',
          'But the limits of early hardware and methods soon appeared. The next chapter explores the symbolic approach that dominated the following decades — and the confidence, and fragility, that came with it.',
        ],
        [
          'AI’s roots run through logic, computation and codebreaking.',
          'Dartmouth 1956 named the field and set its ambition.',
          'Early promise met early limits, setting up the symbolic era.',
        ],
      ),
    ],
  },
  {
    slug: 'chapter-2',
    number: 2,
    title: 'Chapter 2',
    subtitle: 'Early AI Systems and Symbolic Reasoning',
    description:
      'The era of rules, logic and expert systems that tried to capture intelligence in symbols.',
    color: '#a855f7',
    pages: [
      p(
        'chapter-2',
        21,
        'Early AI Systems and Symbolic Reasoning',
        [
          'For its first few decades, AI was dominated by the symbolic approach: the belief that intelligence is the manipulation of symbols according to rules. If you could write down knowledge as facts and logic, a machine could reason over it.',
          'This chapter explores that tradition — its grand hypothesis, its search algorithms, its expert systems and its eventual limits. Symbolic AI produced real successes and a deep understanding of reasoning, even as it struggled with the messiness of the real world.',
        ],
        [
          'Symbolic AI treats intelligence as rule-based symbol manipulation.',
          'It dominated the field from the 1950s through the 1980s.',
          'It produced expert systems and lasting insights into reasoning.',
        ],
      ),
      p(
        'chapter-2-2',
        22,
        'The Physical Symbol System Hypothesis',
        [
          'Newell and Simon proposed that a physical symbol system has the necessary and sufficient means for general intelligent action. In plain terms: if you can represent the world with symbols and manipulate them by rules, you can achieve intelligence.',
          'This hypothesis gave symbolic AI its intellectual backbone. It implied that thinking was, at its core, computation over representations — an idea that would be challenged decades later by statistical and connectionist approaches.',
        ],
        [
          'The hypothesis equates intelligence with symbol manipulation.',
          'It gave symbolic AI a strong theoretical foundation.',
          'Later connectionist work would challenge its sufficiency.',
        ],
        {
          text: 'A physical symbol system has the necessary and sufficient means for general intelligent action.',
          author: 'Newell and Simon, 1976',
        },
      ),
      p(
        'chapter-2-3',
        23,
        'Search and Problem Solving',
        [
          'Many early AI problems were framed as search: finding a path through a space of states from a start to a goal. Route-finding, puzzles and games all fit this mould, and researchers developed systematic methods such as breadth-first and depth-first search.',
          'The A* algorithm, introduced in 1968, combined the cost already travelled with an estimate of the cost remaining, finding optimal paths efficiently. Search remains a core tool in AI, used today in planning, scheduling and game-playing systems.',
        ],
        [
          'AI problems were often framed as search through state spaces.',
          'A* (1968) finds optimal paths using cost estimates.',
          'Search is still central to planning and game AI.',
        ],
      ),
      p(
        'chapter-2-4',
        24,
        'Logic and Theorem Proving',
        [
          'If intelligence is symbol manipulation, logic is its natural language. Researchers built systems that could prove theorems by applying inference rules to axioms, and logic programming languages such as Prolog made this approach practical.',
          'Resolution, introduced in 1965, gave a complete method for logical deduction. Automated reasoning would go on to underpin verification tools, database query engines and modern proof assistants — a quiet but enormous legacy of the symbolic era.',
        ],
        [
          'Logic provided a formal language for machine reasoning.',
          'Resolution (1965) gave a complete deduction method.',
          'Automated reasoning underpins verification and databases today.',
        ],
      ),
      p(
        'chapter-2-5',
        25,
        'Expert Systems',
        [
          'Expert systems encoded the knowledge of human specialists as rules, then used an inference engine to reason over them. MYCIN, built in the 1970s, diagnosed blood infections and recommended antibiotics at a level comparable to some physicians.',
          'The 1980s saw a boom in commercial expert systems for finance, manufacturing and medicine. They proved that captured expertise could be valuable, but also revealed the difficulty of extracting knowledge from experts and maintaining large rule bases.',
        ],
        [
          'Expert systems encode specialist knowledge as rules.',
          'MYCIN matched physicians on some diagnostic tasks.',
          'The 1980s brought a commercial boom — and maintenance pain.',
        ],
      ),
      p(
        'chapter-2-6',
        26,
        'Knowledge Representation',
        [
          'To reason, a system must represent what it knows. Researchers developed formalisms such as first-order logic, semantic networks and frames to capture objects, properties and relationships in a form a machine could use.',
          'The central challenge is that real knowledge is vast, messy and full of exceptions. Choosing a representation is a trade-off between expressiveness and tractability, and much of symbolic AI’s history is a history of that trade-off.',
        ],
        [
          'Knowledge representation captures facts and relationships.',
          'Formalisms trade expressiveness against computational tractability.',
          'Real-world knowledge is vast, messy and full of exceptions.',
        ],
      ),
      p(
        'chapter-2-7',
        27,
        'Frames, Scripts and Semantic Nets',
        [
          'Frames organise knowledge into structures with slots for typical properties — a "bird" frame might have slots for wings, beak and nest. Scripts describe stereotyped sequences of events, such as what happens in a restaurant.',
          'These structures helped systems reason with default assumptions and common sense. They also exposed how much ordinary knowledge humans carry without noticing, a gap that would later be called the common-sense problem.',
        ],
        [
          'Frames bundle typical properties into reusable structures.',
          'Scripts capture stereotyped event sequences.',
          'They revealed the depth of the common-sense knowledge gap.',
        ],
      ),
      p(
        'chapter-2-8',
        28,
        'The Limits of Symbolic AI',
        [
          'Symbolic systems are brittle: they fail when the world does not match their hand-built rules. They cannot easily learn from raw data, struggle with uncertainty, and require enormous effort to encode knowledge that humans acquire effortlessly.',
          'The common-sense problem — that ordinary knowledge is too vast to write down — and the frame problem — that relevant context is hard to bound — exposed fundamental difficulties. These limits motivated the shift toward learning from data.',
        ],
        [
          'Symbolic systems are brittle outside their hand-coded rules.',
          'They cannot easily learn from raw data or handle uncertainty.',
          'Common-sense and frame problems exposed deep limits.',
        ],
      ),
      p(
        'chapter-2-9',
        29,
        'Case Study: MYCIN and DENDRAL',
        [
          'DENDRAL, begun in 1965, inferred molecular structures from mass-spectrometry data, showing that AI could contribute to real science. MYCIN, from the 1970s, diagnosed infections and suggested treatments, demonstrating expert-level reasoning in a narrow domain.',
          'Both systems succeeded within carefully bounded tasks and never achieved broad intelligence. Their lesson endures: symbolic AI excels where knowledge can be precisely captured, and struggles everywhere else.',
        ],
        [
          'DENDRAL brought AI into real scientific discovery.',
          'MYCIN reached expert-level diagnosis in a narrow field.',
          'Success came from narrow, well-captured domains.',
        ],
      ),
      p(
        'chapter-2-10',
        30,
        'Summary and Reflection',
        [
          'The symbolic era gave AI its first rigorous theories and real applications, from theorem provers to expert systems. It taught the field how to represent knowledge and reason over it, and it produced tools still in use today.',
          'But brittleness, the common-sense gap and the difficulty of encoding knowledge set the stage for a different approach — one that would let machines learn from data instead of being told what to think. That shift is the subject of the chapters ahead.',
        ],
        [
          'Symbolic AI produced rigorous theories and real applications.',
          'Brittleness and the common-sense gap limited its reach.',
          'Its limits motivated the turn to learning from data.',
        ],
      ),
    ],
  },
  {
    slug: 'chapter-3',
    number: 3,
    title: 'Chapter 3',
    subtitle: 'The AI Winter and Renewed Hope',
    description:
      'How over-promising led to collapse, and how data, computing power and statistics revived the field.',
    color: '#d946ef',
    pages: [
      p(
        'chapter-3',
        31,
        'The AI Winter and Renewed Hope',
        [
          'Twice in its history, artificial intelligence fell out of favour. Funding dried up, public interest faded, and the word "AI" became something to avoid. These periods are known as AI winters, and they are as much a part of the field’s story as its breakthroughs.',
          'This chapter examines why the winters came, what survived them, and how a combination of computing power, data and statistical methods eventually brought renewed hope — and the deep-learning boom that followed.',
        ],
        [
          'AI suffered two major "winters" of reduced funding and interest.',
          'Over-promising and unmet expectations drove the collapses.',
          'Data, computing power and statistics revived the field.',
        ],
      ),
      p(
        'chapter-3-2',
        32,
        'Causes of the First Winter',
        [
          'The first winter followed a wave of bold predictions that did not come true. Machines could not handle real-world complexity, machine translation failed to deliver, and the perceptron’s limits were harshly publicised.',
          'When promised results failed to appear, agencies cut funding. The lesson was not that AI was impossible, but that the field had over-promised relative to the capabilities of the hardware and methods of the time.',
        ],
        [
          'Bold predictions outran the technology of the era.',
          'Machine translation and perceptron limits disappointed funders.',
          'The field learned a painful lesson about over-promising.',
        ],
      ),
      p(
        'chapter-3-3',
        33,
        'The Lighthill Report',
        [
          'In 1973 the British scientist James Lighthill reviewed AI research for the UK government and was sharply critical. He argued that the field had failed to deliver on its grand claims and that its methods did not scale to real problems.',
          'The report led to severe cuts in British AI funding and reinforced a global mood of scepticism. It became a symbol of the first winter — a reminder that confidence must be matched by evidence.',
        ],
        [
          'The 1973 Lighthill Report criticised AI’s unmet promises.',
          'It triggered deep funding cuts in Britain and beyond.',
          'It became a symbol of the first AI winter.',
        ],
      ),
      p(
        'chapter-3-4',
        34,
        'The Second Winter',
        [
          'A brief commercial boom in expert systems in the 1980s collapsed in the late 1980s and early 1990s. Expensive, hard-to-maintain systems failed to deliver, and the market for specialised AI hardware crashed alongside them.',
          'Once again, the field contracted. Yet research continued quietly in universities and labs, and new ideas — especially statistical learning — were gaining ground. The winter was real, but it was not the end of the story.',
        ],
        [
          'The expert-systems boom collapsed around 1987–1993.',
          'Specialised AI hardware markets crashed.',
          'Research continued quietly, and new methods gained ground.',
        ],
      ),
      p(
        'chapter-3-5',
        35,
        'Expert Systems’ Unravelling',
        [
          'Expert systems were costly to build and brittle to maintain. Knowledge had to be elicited from experts by hand, rules accumulated inconsistencies, and systems could not learn from new cases on their own.',
          'As cheaper general-purpose computers arrived, the specialised machines built for AI became obsolete. The economic case for hand-built rule systems weakened, opening the door to approaches that learned from data instead.',
        ],
        [
          'Hand-built rule bases were costly and hard to maintain.',
          'Systems could not learn from new cases automatically.',
          'Cheap general computers undercut specialised AI hardware.',
        ],
      ),
      p(
        'chapter-3-6',
        36,
        'The Rise of Machine Learning',
        [
          'Rather than encoding knowledge by hand, machine learning lets systems infer patterns from examples. This shift moved the burden from human programmers to data, and it proved far more scalable as datasets grew.',
          'Statistical methods, decision trees and neural networks all improved steadily through the 1990s. By the 2000s, learning from data had become the dominant paradigm — a position it still holds today.',
        ],
        [
          'Machine learning infers patterns from examples, not hand-coded rules.',
          'It shifted the burden from programmers to data.',
          'By the 2000s it had become the dominant paradigm.',
        ],
      ),
      p(
        'chapter-3-7',
        37,
        'Moore’s Law and Data',
        [
          'Two quiet revolutions powered AI’s return. Moore’s Law meant computing power roughly doubled every couple of years, making large-scale computation affordable. And the internet produced vast datasets that learning algorithms could feast on.',
          'Neither was an AI breakthrough in itself, but together they changed what was possible. Techniques that had been impractical in the 1980s became routine, and the stage was set for deep learning.',
        ],
        [
          'Moore’s Law made large-scale computation affordable.',
          'The internet produced enormous training datasets.',
          'Together they made previously impractical methods routine.',
        ],
      ),
      p(
        'chapter-3-8',
        38,
        'Statistical Methods Take Over',
        [
          'Probabilistic and statistical approaches brought rigour and uncertainty-awareness to AI. Instead of brittle rules, systems could weigh evidence and produce calibrated confidences, which proved essential for messy real-world data.',
          'Methods such as hidden Markov models and Bayesian networks powered speech recognition and diagnostics. The field’s centre of gravity shifted from logic to statistics, a change that set the stage for the deep-learning era.',
        ],
        [
          'Statistical methods handle uncertainty and noisy data.',
          'Probabilistic models powered speech and diagnostics.',
          'The field’s centre shifted from logic to statistics.',
        ],
      ),
      p(
        'chapter-3-9',
        39,
        'The Deep Learning Breakthrough',
        [
          'In 2012 a neural network called AlexNet dramatically outperformed rivals in the ImageNet image-recognition competition, trained on powerful GPUs with a large dataset. The result stunned the field and ignited the deep-learning boom.',
          'Deep learning combined many-layered neural networks, abundant data and cheap parallel computation. Within a few years it transformed vision, speech and language, and AI re-entered the public imagination with force.',
        ],
        [
          'AlexNet’s 2012 ImageNet win ignited deep learning.',
          'GPUs, big data and deep networks combined for the breakthrough.',
          'AI re-entered the public imagination with force.',
        ],
        {
          text: 'The deep learning revolution was not a single idea but a confluence of data, compute and algorithms.',
          author: 'Human & AI',
        },
      ),
      p(
        'chapter-3-10',
        40,
        'Summary and Reflection',
        [
          'AI’s winters were caused by over-promising and the limits of the technology of the time. What survived them was steady research and, eventually, the convergence of computing power, data and statistical methods that produced deep learning.',
          'The history offers a caution and an encouragement: be ambitious, but ground ambition in evidence. The next chapter turns to the machine-learning revolution itself — the ideas that now underpin modern AI.',
        ],
        [
          'Winters followed over-promising and technological limits.',
          'Research survived, and data plus compute revived the field.',
          'Ambition must be grounded in evidence.',
        ],
      ),
    ],
  },
  {
    slug: 'chapter-4',
    number: 4,
    title: 'Chapter 4',
    subtitle: 'Machine Learning Revolution',
    description:
      'How machines learned to learn — supervised, unsupervised and reinforcement learning.',
    color: '#ec4899',
    pages: [
      p(
        'chapter-4',
        41,
        'The Machine Learning Revolution',
        [
          'Machine learning is the practice of building systems that improve at a task by learning from data rather than being explicitly programmed. It is the engine behind modern AI, from spam filters to recommendation systems.',
          'This chapter introduces its main branches — supervised, unsupervised and reinforcement learning — and the classic algorithms that made the revolution possible, along with the central ideas of generalisation and the bias-variance trade-off.',
        ],
        [
          'Machine learning improves systems by learning from data.',
          'Its main branches are supervised, unsupervised and reinforcement learning.',
          'Generalisation — performing well on unseen data — is the goal.',
        ],
      ),
      p(
        'chapter-4-2',
        42,
        'What Is Machine Learning?',
        [
          'In traditional programming, a human writes rules and the computer applies them. In machine learning, the human provides examples and the system infers the rules. The program is not the rules; it is the process that discovers them from data.',
          'Tom Mitchell offered a classic definition: a program learns from experience with respect to some task and performance measure. That framing — task, experience, performance — still organises how practitioners think about learning systems.',
        ],
        [
          'Traditional code applies rules; ML infers them from examples.',
          'A program learns by improving a performance measure.',
          'Task, experience and performance define a learning problem.',
        ],
        {
          text: 'A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P.',
          author: 'Tom Mitchell, 1997',
        },
      ),
      p(
        'chapter-4-3',
        43,
        'Supervised Learning',
        [
          'Supervised learning trains a model on labelled examples — inputs paired with correct outputs — so it can predict labels for new inputs. Classifying email as spam or not, or predicting house prices, are classic supervised tasks.',
          'The model is fitted by minimising a loss function that measures its errors, using optimisation methods such as gradient descent. The quality of the labels and the diversity of the data largely determine how well the model generalises.',
        ],
        [
          'Supervised learning learns from labelled input-output pairs.',
          'Models are trained by minimising a loss function.',
          'Data quality and diversity drive generalisation.',
        ],
      ),
      p(
        'chapter-4-4',
        44,
        'Unsupervised Learning',
        [
          'Unsupervised learning finds structure in data without labels. Clustering groups similar points, dimensionality reduction compresses data while preserving structure, and density estimation models how data is distributed.',
          'These methods power recommendation, anomaly detection and data exploration. They are often a first step in understanding a dataset before any supervised modelling begins.',
        ],
        [
          'Unsupervised learning finds structure without labels.',
          'Clustering and dimensionality reduction are key techniques.',
          'It powers recommendations, anomaly detection and exploration.',
        ],
      ),
      p(
        'chapter-4-5',
        45,
        'Reinforcement Learning',
        [
          'Reinforcement learning trains an agent to take actions in an environment to maximise cumulative reward. Through trial and error, the agent learns a policy — a strategy for choosing actions — that yields the best long-term outcome.',
          'It produced landmark results such as systems that mastered games from scratch. Because it learns from consequences rather than labels, it is powerful for control and sequential decision-making, but it can be slow and sensitive to reward design.',
        ],
        [
          'RL agents learn by maximising cumulative reward.',
          'Trial and error yields a policy for choosing actions.',
          'It excels at control but can be slow and reward-sensitive.',
        ],
      ),
      p(
        'chapter-4-6',
        46,
        'Decision Trees and Ensembles',
        [
          'Decision trees split data into branches based on feature tests, producing an interpretable model that is easy to read and reason about. A single tree is simple but can be unstable and limited in accuracy.',
          'Ensemble methods combine many trees. Random forests average many decorrelated trees, and gradient boosting builds trees sequentially to correct earlier errors. These methods remain among the most reliable tools for tabular data.',
        ],
        [
          'Decision trees split data into interpretable branches.',
          'Random forests and boosting combine many trees.',
          'Tree ensembles remain state-of-the-art on tabular data.',
        ],
      ),
      p(
        'chapter-4-7',
        47,
        'Support Vector Machines',
        [
          'Support vector machines find the boundary that best separates classes with the widest possible margin. By mapping data into higher-dimensional spaces with kernels, they can separate data that is not linearly separable in the original space.',
          'SVMs were dominant in the 1990s and 2000s and remain excellent for many problems with moderate data. Their reliance on margin maximisation gave a strong theoretical foundation to the statistical turn in AI.',
        ],
        [
          'SVMs separate classes with the widest margin.',
          'Kernel tricks handle non-linear boundaries.',
          'They were central to the statistical turn in AI.',
        ],
      ),
      p(
        'chapter-4-8',
        48,
        'Feature Engineering',
        [
          'A model can only learn from the information it is given. Feature engineering is the art of transforming raw data into informative inputs — scaling, encoding, combining and selecting features that make learning easier.',
          'For years, feature engineering was where most human effort went. Deep learning later reduced this burden by learning features directly from raw data, but thoughtful features still matter, especially with limited data.',
        ],
        [
          'Features determine what a model can learn.',
          'Feature engineering transforms raw data into useful inputs.',
          'Deep learning automates features, but they still matter.',
        ],
      ),
      p(
        'chapter-4-9',
        49,
        'Bias, Variance and Generalisation',
        [
          'A model that is too simple underfits and misses patterns (high bias); one that is too complex memorises noise and fails on new data (overfitting, high variance). The bias-variance trade-off is the central tension in supervised learning.',
          'Generalisation — performing well on unseen data — is the true goal. Techniques such as cross-validation, regularisation and more data help strike the right balance. A model that fits training data perfectly may be worse than one that leaves some errors.',
        ],
        [
          'Underfitting (high bias) misses patterns; overfitting (high variance) memorises noise.',
          'The bias-variance trade-off is central to model design.',
          'Generalisation to unseen data is the real measure of success.',
        ],
      ),
      p(
        'chapter-4-10',
        50,
        'Summary and Reflection',
        [
          'The machine-learning revolution replaced hand-coded rules with learning from data, across supervised, unsupervised and reinforcement paradigms. Classic algorithms — trees, ensembles, SVMs — established a rigorous statistical foundation.',
          'The ideas of generalisation and the bias-variance trade-off remain essential. The next chapter shows how deep learning scaled these ideas with many-layered neural networks, abundant data and powerful computation.',
        ],
        [
          'ML learns from data across three main paradigms.',
          'Classic algorithms gave the field statistical rigour.',
          'Generalisation and the bias-variance trade-off endure.',
        ],
      ),
    ],
  },
  {
    slug: 'chapter-5',
    number: 5,
    title: 'Chapter 5',
    subtitle: 'Deep Learning and Neural Networks',
    description:
      'Many-layered networks, backpropagation and the breakthroughs that defined the modern era.',
    color: '#f43f5e',
    pages: [
      p(
        'chapter-5',
        51,
        'Deep Learning and Neural Networks',
        [
          'Deep learning uses neural networks with many layers to learn representations of data directly, without hand-crafted features. It is the technology behind the modern AI boom in vision, speech and language.',
          'This chapter traces the revival of the perceptron, the algorithm that made deep networks trainable — backpropagation — and the architectures and breakthroughs that turned depth into power.',
        ],
        [
          'Deep learning uses many-layered neural networks.',
          'It learns representations directly from raw data.',
          'It powers the modern boom in vision, speech and language.',
        ],
      ),
      p(
        'chapter-5-2',
        52,
        'The Perceptron Reborn',
        [
          'The perceptron, dismissed in the late 1960s, returned in the 1980s as part of multilayer networks. Adding hidden layers allowed networks to represent far more complex functions than a single perceptron could.',
          'The key obstacle was training: how to adjust the weights of hidden layers when only the final output is supervised. The answer, popularised in 1986, was backpropagation.',
        ],
        [
          'Multilayer networks can represent complex functions.',
          'Hidden layers vastly expanded what networks could learn.',
          'The open problem was training those hidden layers.',
        ],
      ),
      p(
        'chapter-5-3',
        53,
        'Backpropagation',
        [
          'Backpropagation computes how each weight in a network contributed to the error, by applying the chain rule of calculus from the output back through the layers. This gives the gradient used to update weights by gradient descent.',
          'It made deep networks trainable and is arguably the single most important algorithm in modern AI. Efficient implementations and automatic differentiation now let researchers train networks with millions or billions of parameters.',
        ],
        [
          'Backpropagation applies the chain rule to compute gradients.',
          'It made training deep networks practical.',
          'It is the foundational algorithm of modern deep learning.',
        ],
        {
          text: 'Backpropagation is the engine that made deep learning possible.',
          author: 'Human & AI',
        },
      ),
      p(
        'chapter-5-4',
        54,
        'Activation Functions',
        [
          'Without non-linearities, a deep network would collapse into a single linear transformation. Activation functions such as the sigmoid, hyperbolic tangent and, later, the rectified linear unit (ReLU) introduce the non-linearity that lets networks model complex relationships.',
          'ReLU, which simply outputs zero for negative inputs and the input otherwise, became the default because it is simple and trains quickly. The choice of activation shapes how well and how fast a network learns.',
        ],
        [
          'Non-linear activations let networks model complex relationships.',
          'ReLU became the default for its simplicity and speed.',
          'Activation choice strongly affects training.',
        ],
      ),
      p(
        'chapter-5-5',
        55,
        'Convolutional Neural Networks',
        [
          'Convolutional neural networks (CNNs) are designed for grid-like data such as images. They use filters that slide across the input, sharing weights so the network detects features like edges and textures regardless of position.',
          'Pooling layers reduce resolution, and stacking convolutions builds a hierarchy from simple edges to complex objects. CNNs dominated image recognition after AlexNet and remain foundational to computer vision.',
        ],
        [
          'CNNs use sliding filters with shared weights for images.',
          'Weight sharing makes them efficient and position-tolerant.',
          'Stacked convolutions build a hierarchy of features.',
        ],
      ),
      p(
        'chapter-5-6',
        56,
        'Recurrent Neural Networks',
        [
          'Recurrent neural networks (RNNs) process sequences by maintaining a hidden state that carries information from earlier steps. This makes them natural for text, speech and time series, where order matters.',
          'Long short-term memory (LSTM) networks, introduced in 1997, addressed the difficulty of learning long-range dependencies through gating mechanisms. RNNs powered language modelling and translation before transformers took over.',
        ],
        [
          'RNNs maintain a hidden state to process sequences.',
          'LSTMs use gates to learn long-range dependencies.',
          'RNNs powered early language and speech systems.',
        ],
      ),
      p(
        'chapter-5-7',
        57,
        'Attention and Transformers',
        [
          'The 2017 paper "Attention Is All You Need" introduced the transformer, which replaces recurrence with attention: each position can weigh every other position directly. This allows massive parallelism and long-range context.',
          'Transformers became the backbone of modern language models and spread to vision and beyond. Their scalability — more data, more parameters, more compute — reshaped what AI could do.',
        ],
        [
          'Transformers (2017) replace recurrence with attention.',
          'Attention weighs all positions directly, enabling parallelism.',
          'They became the backbone of modern large models.',
        ],
        {
          text: 'Attention Is All You Need.',
          author: 'Vaswani et al., 2017',
        },
      ),
      p(
        'chapter-5-8',
        58,
        'Training at Scale: GPUs',
        [
          'Deep learning is computationally hungry. Graphics processing units (GPUs), originally built for rendering games, turned out to be ideal for the parallel matrix operations that neural networks require, slashing training times.',
          'As models grew, specialised hardware and distributed training became essential. The ability to train on thousands of processors in parallel is a large part of why modern AI is possible at all.',
        ],
        [
          'GPUs excel at the parallel maths neural networks need.',
          'Specialised hardware and distribution enable huge models.',
          'Compute at scale is central to modern AI progress.',
        ],
      ),
      p(
        'chapter-5-9',
        59,
        'Landmark Moments',
        [
          'AlexNet’s 2012 ImageNet victory proved deep learning’s power in vision. In 2016 AlphaGo defeated a world champion at Go, a game long thought to require human intuition, using deep networks and reinforcement learning.',
          'These milestones captured the public imagination and accelerated investment. They showed that deep learning could master domains previously considered too subtle or intuitive for machines.',
        ],
        [
          'AlexNet (2012) proved deep learning in vision.',
          'AlphaGo (2016) mastered Go with networks and RL.',
          'These milestones accelerated investment and attention.',
        ],
      ),
      p(
        'chapter-5-10',
        60,
        'Summary and Reflection',
        [
          'Deep learning revived the perceptron, made it trainable with backpropagation, and scaled it with architectures like CNNs, RNNs and transformers. Combined with GPUs and big data, it produced the modern AI boom.',
          'These networks learn features directly from data, removing much hand-engineering. The next chapters apply this machinery to language, vision and the physical world through robotics.',
        ],
        [
          'Backpropagation made deep networks trainable.',
          'CNNs, RNNs and transformers each transformed a domain.',
          'Compute and data turned depth into real-world power.',
        ],
      ),
    ],
  },
  {
    slug: 'chapter-6',
    number: 6,
    title: 'Chapter 6',
    subtitle: 'Natural Language Processing',
    description:
      'From rules to transformers — how machines learned to understand and generate language.',
    color: '#ef4444',
    pages: [
      p(
        'chapter-6',
        61,
        'Natural Language Processing',
        [
          'Natural language processing (NLP) is the branch of AI concerned with enabling machines to understand, interpret and generate human language. It powers translation, search, assistants and the chatbots that now feel almost human.',
          'This chapter traces NLP from hand-written rules through statistical methods to the embeddings and transformers that define the current era of large language models.',
        ],
        [
          'NLP enables machines to work with human language.',
          'It powers translation, search, assistants and chatbots.',
          'The field moved from rules to statistics to deep learning.',
        ],
      ),
      p(
        'chapter-6-2',
        62,
        'From Rules to Statistics',
        [
          'Early NLP relied on hand-crafted grammar and lexicon rules. These systems were precise but brittle, breaking on the ambiguity and variety of real language. The field needed a more robust foundation.',
          'Statistical methods brought data and probability to language. By the 1990s, systems learned patterns from large corpora, and machine translation shifted from rules to statistical phrase-based models.',
        ],
        [
          'Rule-based NLP was precise but brittle.',
          'Statistical methods brought data and probability.',
          'Machine translation moved from rules to data.',
        ],
      ),
      p(
        'chapter-6-3',
        63,
        'Tokenization and Embeddings',
        [
          'Before a model can process text, it must turn it into numbers. Tokenization splits text into words or subword units, and embeddings map each token to a dense vector that captures its meaning and relationships.',
          'Embeddings place semantically similar words near each other in a continuous space, so that "king" and "queen" end up close. This representation is the foundation on which modern language models are built.',
        ],
        [
          'Tokenization turns text into units a model can process.',
          'Embeddings map tokens to meaning-rich vectors.',
          'Similar meanings end up near each other in vector space.',
        ],
      ),
      p(
        'chapter-6-4',
        64,
        'Word2Vec and Meaning',
        [
          'Word2Vec, introduced in 2013, learned word embeddings from the contexts in which words appear. It produced striking results: the vector for "king" minus "man" plus "woman" landed near "queen", capturing analogies algebraically.',
          'Word2Vec showed that meaning could be learned from data and expressed geometrically. It was a landmark in representing language and a direct ancestor of the embeddings used in today’s models.',
        ],
        [
          'Word2Vec (2013) learned embeddings from context.',
          'It captured analogies as vector arithmetic.',
          'It proved meaning could be learned and expressed geometrically.',
        ],
      ),
      p(
        'chapter-6-5',
        65,
        'Sequence Models for Language',
        [
          'Recurrent networks and LSTMs modelled language as sequences, predicting the next token from previous ones. They powered machine translation and speech recognition, but struggled with long-range dependencies and parallel training.',
          'These sequence models were a crucial step, showing that neural networks could handle the structure of language. Their limitations motivated the search for a more parallel and scalable architecture.',
        ],
        [
          'RNNs and LSTMs modelled language as sequences.',
          'They powered translation and speech recognition.',
          'Their limits motivated the transformer.',
        ],
      ),
      p(
        'chapter-6-6',
        66,
        'The Transformer Architecture',
        [
          'The transformer replaced sequential processing with self-attention, letting every token attend to every other token in parallel. This made training dramatically faster and allowed models to capture long-range context effectively.',
          'The architecture’s scalability proved decisive: larger models trained on more data kept getting better. The transformer became the universal engine of modern NLP and beyond.',
        ],
        [
          'Self-attention lets every token weigh every other token.',
          'Parallel training made models dramatically faster to train.',
          'Scalability made the transformer the engine of modern NLP.',
        ],
      ),
      p(
        'chapter-6-7',
        67,
        'BERT and Bidirectional Context',
        [
          'BERT, released in 2018, pre-trained a transformer on huge text by predicting masked words, learning deep bidirectional context. It could then be fine-tuned for many tasks with little extra data.',
          'BERT set records across language understanding benchmarks and showed the power of pre-training plus fine-tuning — a recipe that became standard for a wave of models.',
        ],
        [
          'BERT (2018) pre-trained on masked-word prediction.',
          'It learned deep bidirectional context.',
          'Pre-training plus fine-tuning became the standard recipe.',
        ],
      ),
      p(
        'chapter-6-8',
        68,
        'GPT and Generative Models',
        [
          'The GPT family took a different path: predict the next token at massive scale. Generative pre-training followed by scaling produced models that could write, summarise, translate and converse with striking fluency.',
          'As models grew, they displayed emergent abilities — solving problems they were not explicitly trained for. This generative paradigm underlies the chatbots and assistants that have brought AI into everyday life.',
        ],
        [
          'GPT models predict the next token at massive scale.',
          'Scale produced fluent, general-purpose generation.',
          'Emergent abilities appeared as models grew.',
        ],
      ),
      p(
        'chapter-6-9',
        69,
        'Large Language Models in Practice',
        [
          'Large language models are now used for drafting, coding, tutoring and analysis. They are powerful but imperfect: they can produce fluent falsehoods, reflect biases in their data, and lack reliable grounding in facts.',
          'Using them well means understanding their limits — verifying important claims, providing context, and keeping humans in the loop. They are best seen as capable assistants rather than oracles.',
        ],
        [
          'LLMs assist with drafting, coding, tutoring and analysis.',
          'They can produce fluent falsehoods and reflect data biases.',
          'They are capable assistants, not infallible oracles.',
        ],
      ),
      p(
        'chapter-6-10',
        70,
        'Summary and Reflection',
        [
          'NLP evolved from brittle rules to statistical methods to embeddings and transformers. Word2Vec showed meaning could be learned; BERT and GPT showed that scale plus pre-training yields general language ability.',
          'These models are transforming how we work with information, but their limits demand care. The next chapter turns from language to vision — how machines learn to see.',
        ],
        [
          'NLP moved from rules to statistics to deep learning.',
          'Embeddings and transformers define the modern era.',
          'Powerful models require verification and human oversight.',
        ],
      ),
    ],
  },
  {
    slug: 'chapter-7',
    number: 7,
    title: 'Chapter 7',
    subtitle: 'Computer Vision and Perception',
    description:
      'How machines learned to see — from edges and features to detection, recognition and self-driving cars.',
    color: '#f97316',
    pages: [
      p(
        'chapter-7',
        71,
        'Computer Vision and Perception',
        [
          'Computer vision is the branch of AI that enables machines to interpret visual information. It powers face recognition, medical imaging, quality inspection and the perception systems of autonomous vehicles.',
          'This chapter follows vision from its early hand-built features through the deep-learning breakthroughs that let machines detect, segment and understand images with remarkable accuracy.',
        ],
        [
          'Computer vision lets machines interpret images and video.',
          'It powers recognition, medical imaging and autonomy.',
          'Deep learning transformed the field after 2012.',
        ],
      ),
      p(
        'chapter-7-2',
        72,
        'How Images Become Numbers',
        [
          'To a computer, an image is a grid of pixel values — numbers representing brightness and colour. A greyscale image is a matrix of intensities; a colour image has three such matrices for red, green and blue.',
          'All vision algorithms operate on these numbers. The challenge is to extract meaningful structure — objects, shapes, textures — from raw pixels, a task humans do effortlessly but machines find surprisingly hard.',
        ],
        [
          'Images are grids of pixel numbers for a machine.',
          'Colour images have separate red, green and blue channels.',
          'Extracting meaning from raw pixels is the core challenge.',
        ],
      ),
      p(
        'chapter-7-3',
        73,
        'Early Vision and Edge Detection',
        [
          'Early computer vision focused on low-level features. Edge detectors such as the Sobel and Canny operators find boundaries where intensity changes sharply, producing outlines that simplify an image into its essential structure.',
          'These hand-built operators were a first step toward understanding scenes. They remain useful, but they capture only the simplest visual information and must be combined with higher-level reasoning.',
        ],
        [
          'Edge detectors find boundaries where intensity changes.',
          'Canny and Sobel are classic operators still in use.',
          'Low-level features are a first step toward scene understanding.',
        ],
      ),
      p(
        'chapter-7-4',
        74,
        'Feature Descriptors: SIFT',
        [
          'SIFT, the scale-invariant feature transform, detected distinctive keypoints and described them in a way robust to scale, rotation and lighting. This let systems match objects across different images reliably.',
          'For years, SIFT and similar descriptors underpinned applications from image stitching to object recognition. They were a high point of hand-engineered vision before deep learning learned features automatically.',
        ],
        [
          'SIFT finds distinctive, robust keypoints in images.',
          'It enables reliable matching across views and lighting.',
          'It was a high point of hand-engineered vision.',
        ],
      ),
      p(
        'chapter-7-5',
        75,
        'Object Detection',
        [
          'Object detection finds and labels every object in an image, drawing a box around each. Early systems used sliding windows and hand-crafted features; modern systems use deep networks that predict boxes and classes together.',
          'Frameworks such as R-CNN, YOLO and their successors made detection fast and accurate enough for real-time use in cars, cameras and robotics. Detection is foundational to any system that must act on what it sees.',
        ],
        [
          'Object detection locates and labels every object.',
          'Deep networks like YOLO enable real-time detection.',
          'Detection underpins cars, cameras and robots.',
        ],
      ),
      p(
        'chapter-7-6',
        76,
        'Segmentation',
        [
          'Segmentation goes further than boxes, labelling every pixel with its object class. This produces precise masks that separate a person from the background or delineate a tumour in a scan.',
          'Semantic segmentation labels all pixels of a class, while instance segmentation distinguishes individual objects. These techniques are essential wherever precise shape matters, from medical imaging to autonomous driving.',
        ],
        [
          'Segmentation labels every pixel by object class.',
          'Semantic and instance segmentation serve different needs.',
          'It is essential where precise shape matters, like medicine.',
        ],
      ),
      p(
        'chapter-7-7',
        77,
        'Facial Recognition',
        [
          'Facial recognition maps a face to a vector and compares it against a database. Modern systems achieve high accuracy on benchmarks, but performance varies with lighting, demographics and image quality.',
          'The technology raises serious ethical questions about consent, privacy and bias. Its accuracy and its dangers are both real, which is why its use is increasingly regulated and debated.',
        ],
        [
          'Facial recognition compares face vectors against a database.',
          'Accuracy varies with lighting and demographics.',
          'It raises serious privacy and bias concerns.',
        ],
      ),
      p(
        'chapter-7-8',
        78,
        'OCR and Document AI',
        [
          'Optical character recognition converts images of text into editable text. Once brittle and rule-heavy, OCR is now highly accurate thanks to deep learning, handling diverse fonts, handwriting and layouts.',
          'Document AI goes further, understanding the structure of forms, tables and receipts. Together they power digitisation, accessibility and automation of paperwork at enormous scale.',
        ],
        [
          'OCR converts images of text into editable text.',
          'Deep learning made OCR robust to fonts and handwriting.',
          'Document AI understands forms, tables and structure.',
        ],
      ),
      p(
        'chapter-7-9',
        79,
        'Vision in Autonomous Vehicles',
        [
          'Self-driving cars rely on vision alongside lidar, radar and maps to perceive the world. Cameras detect lanes, signs, pedestrians and hazards, feeding perception and planning systems that make driving decisions.',
          'Vision is cheap and information-rich but sensitive to weather and lighting, which is why autonomous systems fuse multiple sensors. The field is a demanding proving ground for the reliability of AI perception.',
        ],
        [
          'Autonomous vehicles fuse vision with lidar and radar.',
          'Cameras detect lanes, signs, pedestrians and hazards.',
          'Sensor fusion compensates for vision’s weaknesses.',
        ],
      ),
      p(
        'chapter-7-10',
        80,
        'Summary and Reflection',
        [
          'Computer vision progressed from hand-built edges and SIFT features to deep networks that detect, segment and recognise with superhuman accuracy on many benchmarks. It is now central to medicine, manufacturing and autonomy.',
          'Its power brings responsibility, especially around privacy and bias. The next chapter moves from seeing to acting — robotics and embodied AI.',
        ],
        [
          'Vision moved from hand-built features to deep learning.',
          'Detection, segmentation and recognition are now highly accurate.',
          'Power brings duties around privacy and fairness.',
        ],
      ),
    ],
  },
  {
    slug: 'chapter-8',
    number: 8,
    title: 'Chapter 8',
    subtitle: 'Robotics and Embodied AI',
    description:
      'When intelligence meets a body — robots that sense, decide and act in the physical world.',
    color: '#f59e0b',
    pages: [
      p(
        'chapter-8',
        81,
        'Robotics and Embodied AI',
        [
          'Robotics brings AI into the physical world. An embodied agent must sense its environment, reason about it, and act through motors — all in real time, with the messy unpredictability of the real world.',
          'This chapter explores what embodiment means, the robots that already work alongside us, and the challenges of connecting perception, decision and action safely.',
        ],
        [
          'Robotics connects AI to sensing and acting in the world.',
          'Embodied agents must reason and act in real time.',
          'The physical world is messy and unpredictable.',
        ],
      ),
      p(
        'chapter-8-2',
        82,
        'What Is Embodied AI?',
        [
          'Embodied AI holds that intelligence is shaped by having a body that interacts with an environment. Rather than reasoning in the abstract, an embodied agent learns through perception and action, much as animals do.',
          'This view contrasts with purely disembodied computation. It suggests that some kinds of understanding — of space, physics, and consequence — arise only from acting in the world.',
        ],
        [
          'Embodied AI ties intelligence to having a body.',
          'It learns through perception and action, not abstraction.',
          'Some understanding arises only from acting in the world.',
        ],
      ),
      p(
        'chapter-8-3',
        83,
        'Industrial Robots',
        [
          'Industrial robots have transformed manufacturing. Precise, tireless arms weld, paint, assemble and package, often working in cages separated from humans for safety.',
          'These robots excel at repetitive, structured tasks. The frontier is making them more flexible and safe enough to work directly alongside people, which requires better perception and interaction.',
        ],
        [
          'Industrial robots excel at precise, repetitive tasks.',
          'They transformed manufacturing speed and consistency.',
          'The frontier is safe, flexible human-robot collaboration.',
        ],
      ),
      p(
        'chapter-8-4',
        84,
        'Sensors and Actuators',
        [
          'Robots perceive through sensors — cameras, lidar, touch, force and position — and act through actuators such as motors and grippers. The quality of both determines what a robot can do.',
          'Closing the loop between sensing and acting is the essence of robotics. Better sensors and actuators, combined with smarter software, steadily expand the range of tasks robots can perform.',
        ],
        [
          'Sensors let robots perceive; actuators let them act.',
          'Cameras, lidar and touch provide rich feedback.',
          'The sense-act loop defines robotic capability.',
        ],
      ),
      p(
        'chapter-8-5',
        85,
        'The Perception-Action Loop',
        [
          'A robot continuously cycles: perceive the world, plan an action, execute it, and perceive the result. This loop must run fast and reliably, because the world changes while the robot decides.',
          'Modern robots use AI for each stage — vision for perception, learning for planning, and control for execution. Closing this loop robustly in unstructured environments remains one of AI’s great challenges.',
        ],
        [
          'Robots loop through perceive, plan, act and sense again.',
          'The loop must be fast and reliable in a changing world.',
          'Robustly closing it in unstructured settings is a grand challenge.',
        ],
      ),
      p(
        'chapter-8-6',
        86,
        'Human-Robot Interaction',
        [
          'As robots move into shared spaces, interaction design becomes crucial. A robot must communicate its intentions, respond to human signals, and behave in ways people find predictable and trustworthy.',
          'Good interaction blends verbal and non-verbal cues, respects personal space, and yields to humans when needed. The goal is collaboration that feels natural, not merely functional.',
        ],
        [
          'Shared spaces demand predictable, trustworthy robots.',
          'Robots must communicate intentions and read human signals.',
          'Good interaction feels natural, not merely functional.',
        ],
      ),
      p(
        'chapter-8-7',
        87,
        'Service and Social Robots',
        [
          'Service robots handle tasks from cleaning floors to delivering supplies in hospitals. Social robots engage people through conversation and expression, finding roles in education, therapy and companionship.',
          'These applications place robots in intimate human settings, raising questions about emotional attachment, privacy and the appropriate limits of machines in social roles.',
        ],
        [
          'Service robots handle practical tasks in human spaces.',
          'Social robots engage through conversation and expression.',
          'They raise questions of attachment, privacy and limits.',
        ],
      ),
      p(
        'chapter-8-8',
        88,
        'Sim-to-Real Transfer',
        [
          'Training robots in the real world is slow, costly and risky. Simulation lets engineers practise millions of trials safely and quickly, then transfer the learned skills to physical robots.',
          'The sim-to-real gap — the difference between simulated and real physics — is a central obstacle. Techniques such as domain randomisation make simulated training more robust to reality’s surprises.',
        ],
        [
          'Simulation allows fast, safe, large-scale robot training.',
          'The sim-to-real gap is a central obstacle.',
          'Domain randomisation helps bridge simulation and reality.',
        ],
      ),
      p(
        'chapter-8-9',
        89,
        'Safety and Collaboration',
        [
          'Robots that share space with people must be safe by design. This means force limits, collision avoidance, transparent behaviour and the ability to stop immediately when something goes wrong.',
          'Safety is not only technical but social: people must trust a robot to behave predictably. Building that trust requires reliability, clear communication and respect for human authority.',
        ],
        [
          'Shared-space robots must be safe by design.',
          'Force limits and collision avoidance protect people.',
          'Trust requires reliability, clarity and respect for authority.',
        ],
      ),
      p(
        'chapter-8-10',
        90,
        'Summary and Reflection',
        [
          'Embodied AI connects intelligence to bodies that sense and act. Industrial robots transformed manufacturing; service and social robots are entering daily life. The perception-action loop, sim-to-real transfer and safety are the field’s defining challenges.',
          'As robots become more capable and more present, the question is not only what they can do, but how we want to live alongside them. The next chapter turns to the ethics of AI itself.',
        ],
        [
          'Embodied AI ties intelligence to physical action.',
          'Simulation and safety are central engineering challenges.',
          'The question is how we want to live alongside robots.',
        ],
      ),
    ],
  },
  {
    slug: 'chapter-9',
    number: 9,
    title: 'Chapter 9',
    subtitle: 'Ethics and Bias in AI',
    description:
      'Fairness, transparency, privacy and accountability in systems that increasingly shape our lives.',
    color: '#eab308',
    pages: [
      p(
        'chapter-9',
        91,
        'Ethics and Bias in AI',
        [
          'AI systems now influence who gets a loan, a job or an apartment, and what news we see. With that power comes responsibility. Ethics in AI asks how to build and deploy systems that are fair, transparent and accountable.',
          'This chapter examines algorithmic bias, its sources, the challenge of defining fairness, and the broader questions of privacy, accountability and governance.',
        ],
        [
          'AI now shapes high-stakes decisions about people.',
          'Ethics asks how to make AI fair, transparent and accountable.',
          'Bias, privacy and accountability are central concerns.',
        ],
      ),
      p(
        'chapter-9-2',
        92,
        'Algorithmic Bias',
        [
          'Algorithmic bias occurs when a system produces systematically unfair outcomes for certain groups. It can appear in hiring tools, credit scoring, medical diagnosis and criminal justice, often with serious consequences.',
          'Bias is not always intentional. It frequently enters through data that reflects historical inequities, and it can be invisible until someone measures outcomes across groups. Detecting it requires deliberate auditing.',
        ],
        [
          'Algorithmic bias produces systematically unfair outcomes.',
          'It appears in hiring, credit, medicine and justice.',
          'It is often unintentional and invisible without auditing.',
        ],
      ),
      p(
        'chapter-9-3',
        93,
        'Sources of Bias',
        [
          'Bias enters AI through data, design and deployment. Training data may under-represent some groups or encode past discrimination. Labels may reflect human prejudice, and design choices may optimise for the wrong objective.',
          'Even a technically accurate model can be unfair if it is used in an unjust context. Understanding bias requires looking beyond the algorithm to the whole sociotechnical system around it.',
        ],
        [
          'Bias enters through data, design and deployment.',
          'Data can under-represent groups or encode discrimination.',
          'A model’s context of use shapes whether it is fair.',
        ],
      ),
      p(
        'chapter-9-4',
        94,
        'Fairness Metrics',
        [
          'There is no single definition of fairness. A model might be required to have equal accuracy across groups, equal false-positive rates, or equal selection rates — and these goals can conflict with one another.',
          'Choosing a fairness metric is therefore an ethical and political decision, not a purely technical one. It requires deciding which notion of fairness matters most for the particular context and the people affected.',
        ],
        [
          'Fairness has multiple, sometimes conflicting definitions.',
          'Equal accuracy, error rates and selection rates can clash.',
          'Choosing a metric is an ethical decision, not just technical.',
        ],
      ),
      p(
        'chapter-9-5',
        95,
        'Transparency and Explainability',
        [
          'Many powerful models are opaque: it is hard to say exactly why they produced a given output. This is a problem when decisions affect people’s lives and they are entitled to an explanation.',
          'Explainable AI seeks to make model behaviour interpretable, through simpler models, feature attributions or example-based explanations. Transparency also means being open about when and how AI is being used.',
        ],
        [
          'Powerful models are often opaque and hard to interpret.',
          'Explainable AI makes model behaviour more understandable.',
          'Transparency includes disclosing when AI is used.',
        ],
      ),
      p(
        'chapter-9-6',
        96,
        'Privacy and Surveillance',
        [
          'AI intensifies privacy risks by making it cheap to collect, analyse and cross-reference vast amounts of personal data. Facial recognition and behaviour prediction can enable surveillance at unprecedented scale.',
          'Protecting privacy requires limits on collection, strong security, and clear rules about use. The tension between useful data and individual rights is one of the defining policy questions of the age.',
        ],
        [
          'AI makes mass data collection and analysis cheap.',
          'It enables surveillance at unprecedented scale.',
          'Privacy needs limits on collection and clear use rules.',
        ],
      ),
      p(
        'chapter-9-7',
        97,
        'Accountability',
        [
          'When an AI system causes harm, who is responsible — the developer, the deployer, the user, or the system itself? Accountability requires clear answers, and current systems often blur responsibility across many hands.',
          'Mechanisms such as audits, documentation, human oversight and legal liability help assign responsibility. Without them, harms can fall through the cracks, leaving affected people without recourse.',
        ],
        [
          'Harm from AI raises the question of who is responsible.',
          'Responsibility is often blurred across developers and deployers.',
          'Audits, oversight and liability help ensure recourse.',
        ],
      ),
      p(
        'chapter-9-8',
        98,
        'Autonomous Systems and Moral Questions',
        [
          'Autonomous systems force hard moral choices. A self-driving car may face an unavoidable collision; a medical AI may allocate scarce resources. How should such systems be designed to decide?',
          'These questions have no purely technical answers. They require public deliberation about values, and they remind us that encoding a decision in software is also encoding a moral stance.',
        ],
        [
          'Autonomous systems face unavoidable moral choices.',
          'There are no purely technical answers to these dilemmas.',
          'Encoding a decision encodes a moral stance.',
        ],
      ),
      p(
        'chapter-9-9',
        99,
        'Regulation and Governance',
        [
          'Governments are developing rules for AI, from transparency requirements to risk-based regulation and bans on certain uses. The goal is to capture AI’s benefits while limiting its harms.',
          'Effective governance must keep pace with fast-moving technology without stifling innovation. It requires cooperation across borders, sectors and disciplines, and the participation of the people most affected.',
        ],
        [
          'Governments are developing risk-based AI regulation.',
          'Governance must balance innovation against protection.',
          'It requires broad, international and inclusive cooperation.',
        ],
      ),
      p(
        'chapter-9-10',
        100,
        'Summary and Reflection',
        [
          'Ethics in AI is about building systems that are fair, transparent and accountable. Bias enters through data and design; fairness is contested; privacy and accountability demand deliberate protection.',
          'These are not afterthoughts but design requirements. The final chapter looks forward to how humans and AI might collaborate — and how to do so responsibly.',
        ],
        [
          'Ethics must be built in, not bolted on.',
          'Fairness, transparency and accountability are core requirements.',
          'Responsible design shapes the future of collaboration.',
        ],
      ),
    ],
  },
  {
    slug: 'chapter-10',
    number: 10,
    title: 'Chapter 10',
    subtitle: 'The Future of Human-AI Collaboration',
    description:
      'Augmented intelligence, the future of work, and a responsible path toward general intelligence.',
    color: '#84cc16',
    pages: [
      p(
        'chapter-10',
        101,
        'The Future of Human-AI Collaboration',
        [
          'The future of AI is not simply about machines replacing people. It is about how humans and intelligent systems can work together — combining human judgement and values with machine speed and scale.',
          'This final chapter explores artificial general intelligence, augmented intelligence, the changing world of work, and the principles of responsible development that will shape the decades ahead.',
        ],
        [
          'The future is about collaboration, not just replacement.',
          'It combines human judgement with machine capability.',
          'Responsible development will shape the outcome.',
        ],
      ),
      p(
        'chapter-10-2',
        102,
        'Artificial General Intelligence',
        [
          'Artificial general intelligence (AGI) is the hypothetical ability of a machine to understand and learn any intellectual task a human can. Current systems are narrow, excelling at specific tasks but lacking broad, flexible understanding.',
          'Whether and when AGI might arrive is deeply uncertain. The concept focuses attention on what general intelligence requires — transfer, reasoning, common sense — and on the need to prepare for powerful systems responsibly.',
        ],
        [
          'AGI means general, human-level learning across any task.',
          'Current AI is narrow and specialised.',
          'The concept highlights the need for responsible preparation.',
        ],
      ),
      p(
        'chapter-10-3',
        103,
        'Augmented Intelligence',
        [
          'Augmented intelligence keeps humans in the loop, using AI to enhance rather than replace human capability. A doctor with AI diagnostic support, or a designer with generative tools, exemplifies the approach.',
          'This framing puts human agency first. It suggests the most valuable near-term AI is that which makes people more capable, rather than that which makes them unnecessary.',
        ],
        [
          'Augmented intelligence enhances rather than replaces people.',
          'It keeps humans in control of decisions.',
          'The most valuable near-term AI makes people more capable.',
        ],
      ),
      p(
        'chapter-10-4',
        104,
        'The Future of Work',
        [
          'AI will change work by automating some tasks, transforming others, and creating new roles. Rather than whole jobs disappearing at once, tasks within jobs will shift, requiring workers to adapt continually.',
          'The transition demands investment in education, retraining and social support. The central policy question is how to share AI’s gains broadly, so that productivity growth translates into widespread benefit.',
        ],
        [
          'AI shifts tasks within jobs more than whole jobs at once.',
          'Workers will need continual adaptation and retraining.',
          'Policy must ensure AI’s gains are broadly shared.',
        ],
      ),
      p(
        'chapter-10-5',
        105,
        'Human-Centred AI',
        [
          'Human-centred AI puts people’s needs, values and wellbeing at the centre of design. It asks not only what a system can do, but what it should do, and for whose benefit.',
          'This approach involves participatory design, attention to diverse users, and respect for autonomy and dignity. It treats technology as a means to human flourishing, not an end in itself.',
        ],
        [
          'Human-centred AI starts from people’s needs and values.',
          'It asks what a system should do, not just what it can.',
          'It treats technology as a means to human flourishing.',
        ],
      ),
      p(
        'chapter-10-6',
        106,
        'AI in Science and Medicine',
        [
          'AI is accelerating science by finding patterns in vast data, predicting protein structures, and suggesting new materials and medicines. In medicine, it aids diagnosis, imaging and drug discovery.',
          'These tools amplify human expertise rather than replace it. The most promising results come from tight collaboration between domain scientists, clinicians and AI systems.',
        ],
        [
          'AI accelerates discovery across science and medicine.',
          'It aids diagnosis, imaging and drug development.',
          'The best results come from human-AI collaboration.',
        ],
      ),
      p(
        'chapter-10-7',
        107,
        'Risks and Safety',
        [
          'Powerful AI brings risks: misuse, accidents, bias at scale, and the challenge of ensuring systems behave as intended. As capability grows, so does the importance of safety research and careful deployment.',
          'Safety is a technical and social discipline: building reliable systems, testing them thoroughly, and governing their use. Getting it right is a precondition for realising AI’s benefits.',
        ],
        [
          'Powerful AI brings risks of misuse, accidents and bias.',
          'Safety is both a technical and social discipline.',
          'Getting safety right is a precondition for benefit.',
        ],
      ),
      p(
        'chapter-10-8',
        108,
        'Responsible Development',
        [
          'Responsible AI development means building with fairness, transparency, accountability and safety from the start. It involves diverse teams, rigorous testing, and ongoing monitoring after deployment.',
          'It also means honesty about limitations and a willingness to say when a system should not be used. Responsibility is a practice, sustained over the whole lifecycle of a system.',
        ],
        [
          'Responsible development builds ethics in from the start.',
          'It requires diverse teams and ongoing monitoring.',
          'It includes honesty about limits and when not to deploy.',
        ],
      ),
      p(
        'chapter-10-9',
        109,
        'A Vision for the Next Decade',
        [
          'The next decade will likely bring more capable, more integrated and more pervasive AI — in science, work, education and daily life. The technical trajectory is toward systems that are more general and more useful.',
          'Whether that trajectory serves humanity depends on the choices made now: how we design, govern and share the technology. The future is not predetermined; it is being built, choice by choice.',
        ],
        [
          'AI will become more capable, integrated and pervasive.',
          'Its benefit depends on present choices about design and governance.',
          'The future is built, not predetermined.',
        ],
      ),
      p(
        'chapter-10-10',
        110,
        'Conclusion and Reflection',
        [
          'We began with two kinds of intelligence converging and end with a choice about how to think together. AI’s history — its dreams, winters and breakthroughs — shows both the power of the idea and the need for humility.',
          'The measure of success will not be how intelligent our machines become, but how well they serve human flourishing. That is a task for everyone, and it begins with the questions we choose to ask.',
        ],
        [
          'The story is a convergence, and now a choice.',
          'Success is measured by human flourishing, not raw capability.',
          'The task belongs to everyone.',
        ],
        {
          text: 'The future is not written by machines alone, but by the humans who create and guide them.',
          author: 'Human & AI',
        },
      ),
    ],
  },
]

export const allPages: (BookPage & { chapterSlug: string; chapterTitle: string; chapterColor: string })[] =
  chapters.flatMap((chapter) =>
    chapter.pages.map((page) => ({
      ...page,
      chapterSlug: chapter.slug,
      chapterTitle: chapter.title,
      chapterColor: chapter.color,
    })),
  )

export const totalPages = allPages.length

export function getPage(slug: string) {
  return allPages.find((page) => page.slug === slug)
}

export function getChapter(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug)
}

export function getNeighbours(slug: string) {
  const index = allPages.findIndex((page) => page.slug === slug)
  return {
    index,
    prev: index > 0 ? allPages[index - 1] : null,
    next: index >= 0 && index < allPages.length - 1 ? allPages[index + 1] : null,
  }
}

export function getChapterPages(chapterSlug: string) {
  return allPages.filter((page) => page.chapterSlug === chapterSlug)
}