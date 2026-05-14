// program.jsx — Program detail page (template, Quant fully detailed)

const PROGRAM_DETAILS = {
  quant: {
    tag: 'QUANT · TRACK 03',
    title: 'Quantitative Finance & Derivatives',
    subtitle: 'From binomial models to Monte Carlo methods',
    intro: 'A comprehensive review of the key concepts, models and pricing techniques behind modern derivatives — taught with the depth required to read the literature, the rigor to prove the results, and the engineering to ship them on real market data.',
    meta: [
      { k: 'Duration',  v: '14 weeks' },
      { k: 'Format',    v: 'Hybrid · Weekly' },
      { k: 'Cohort',    v: '07 · Fall 2026' },
      { k: 'Level',     v: 'Graduate' },
    ],
    modules: [
      { num: '01', title: 'Models', tag: '2 WEEKS',
        desc: 'Binomial model and Black–Scholes — the two anchors of derivatives pricing, derived from no-arbitrage and martingale arguments.' },
      { num: '02', title: 'Option Greeks', tag: '1 WEEK',
        desc: 'Δ (Delta), Γ (Gamma), Θ (Theta), ν (Vega) and their interrelationships — what they measure, how they trade, and why they fail.' },
      { num: '03', title: 'Volatility', tag: '1 WEEK',
        desc: 'Historical, implied, and the √T rule. Smile, skew and surface construction with arbitrage-free interpolation.' },
      { num: '04', title: 'Market Data & Tools', tag: '1 WEEK',
        desc: 'Option pricing and yield curves in Bloomberg. Hands-on with live tickers, swap curves and vol surfaces from the desk.' },
      { num: '05', title: 'PDE Approach', tag: '2 WEEKS',
        desc: 'The Black–Scholes equation and finite-difference methods. Implicit, explicit and Crank–Nicolson schemes in Python.' },
      { num: '06', title: 'Stochastic Calculus', tag: '2 WEEKS',
        desc: 'Itô process, martingales, risk-neutral measure and the Fundamental Theorem of Asset Pricing. The machinery, end to end.' },
      { num: '07', title: 'Advanced Derivatives', tag: '2 WEEKS',
        desc: 'Barrier options (up/down · in/out), Asian options, American features and the calibration that makes them tradeable.' },
      { num: '08', title: 'Monte Carlo Methods', tag: '2 WEEKS',
        desc: 'Pricing and simulation of complex derivatives. Variance reduction, quasi-MC, and Longstaff–Schwartz for early exercise.' },
      { num: '09', title: 'Capstone', tag: '1 WEEK',
        desc: 'Ship a calibrated pricer on production-grade data, with documentation, tests and a written defense.' },
    ],
    outcomes: [
      'Price European, American and exotic options with confidence',
      'Read and reproduce derivatives papers from the literature',
      'Calibrate volatility surfaces and yield curves on real data',
      'Build and validate Monte Carlo pricers in production code',
      'Reason fluently in the language of Greeks and risk',
    ],
    audience: [
      'Mathematicians and physicists moving into quant finance',
      'Software engineers joining a trading or pricing team',
      'Junior quants seeking a rigorous refresher with practice',
      'Researchers who want to bridge theory and the desk',
    ],
    instructors: [
      { initials: 'AL', name: 'Dr. Andrei Lupescu', role: 'Lead Instructor', bio: '15 years on the rates desk. PhD in stochastic analysis, ETH Zürich.' },
      { initials: 'NB', name: 'Dr. Nadia Bensaïd',  role: 'Co-instructor',  bio: 'Former head of vol modelling at a top-tier market maker. Author of two textbooks.' },
      { initials: 'YK', name: 'Yusuke Kataoka',     role: 'TA Lead',        bio: 'Senior quant developer. Runs the C++/Python implementation track.' },
    ],
    faqs: [
      { q: 'What background do I need?', a: 'A solid grasp of real analysis, probability and linear algebra. Comfort with Python is expected; C++ is taught as needed. We do not assume prior finance coursework — the financial intuition is built from first principles.' },
      { q: 'How much time per week should I plan for?', a: 'Roughly 12–16 hours: a 3-hour live session, 2 hours of office hours and the rest for problem sets, code and reading. The track is intense by design.' },
      { q: 'Is the program remote, in-person or hybrid?', a: 'Hybrid. Live sessions stream and record; cohorts gather in person for two intensive on-sites and the capstone defense.' },
      { q: 'Do you offer career placement?', a: 'Yes — we maintain active referral relationships with 28 partner firms across systematic trading, market making, sell-side derivatives and quant research roles.' },
      { q: 'Is there a scholarship or aid?', a: 'CMF reserves 20% of every cohort for need- and merit-based scholarships. Applications open with each intake cycle.' },
    ],
  },
  ai: {
    tag: 'AI · TRACK 01',
    title: 'Applied AI for Finance',
    subtitle: 'From classical ML to transformers, grounded in markets',
    intro: 'Machine learning that holds up to market reality: forecasting, classification and generative models applied to tick data, fundamentals and unstructured text — taught alongside the statistical caveats that make or break them.',
    meta: [
      { k: 'Duration', v: '12 weeks' }, { k: 'Format', v: 'Hybrid · Weekly' },
      { k: 'Cohort', v: '07 · Fall 2026' }, { k: 'Level', v: 'Graduate' },
    ],
    modules: [
      { num: '01', title: 'ML Foundations for Markets', tag: '2 WEEKS', desc: 'Bias-variance, regularization and the special pathologies of financial data: low SNR, non-stationarity and leakage.' },
      { num: '02', title: 'Feature Engineering on Tick Data', tag: '1 WEEK', desc: 'Microstructure features, fractional differencing and event-based sampling.' },
      { num: '03', title: 'Forecasting & Signals', tag: '2 WEEKS', desc: 'Time-series models, gradient boosting and neural sequence models — with combinatorial purged cross-validation.' },
      { num: '04', title: 'Deep Learning Architectures', tag: '2 WEEKS', desc: 'CNNs, RNNs and attention for sequences; tabular deep nets and their limits.' },
      { num: '05', title: 'LLMs in Finance', tag: '2 WEEKS', desc: 'Encoders for NLP signals; fine-tuning, retrieval and structured extraction from filings.' },
      { num: '06', title: 'Reinforcement Learning', tag: '1 WEEK', desc: 'Policy gradients and execution-aware agents on simulated order books.' },
      { num: '07', title: 'Capstone', tag: '2 WEEKS', desc: 'Ship an ML-driven trading or research artifact, validated on out-of-sample data.' },
    ],
    outcomes: [
      'Apply modern ML to real, noisy market data with statistical honesty',
      'Build, deploy and monitor LLM-driven research pipelines',
      'Design experiments that survive multiple-testing scrutiny',
      'Reason about transaction costs and execution in model design',
    ],
    audience: [
      'ML engineers moving into quant research',
      'Quants adding modern ML to their toolkit',
      'Researchers building NLP and alternative-data pipelines',
    ],
    instructors: [
      { initials: 'JP', name: 'Dr. Jin Park', role: 'Lead Instructor', bio: 'Former research lead, systematic equities. PhD in statistics, Stanford.' },
      { initials: 'IM', name: 'Iris Mendel', role: 'Co-instructor', bio: 'LLM team lead at a top hedge fund.' },
      { initials: 'DR', name: 'Dario Renzi', role: 'TA Lead', bio: 'Senior ML engineer. Maintains the cohort\'s training infrastructure.' },
    ],
    faqs: [
      { q: 'How much ML experience is required?', a: 'Comfort with the basics of supervised learning and Python\'s ML stack. We move quickly into the financial-data specifics.' },
      { q: 'Do you cover deployment?', a: 'Yes — model serving, monitoring and drift detection are part of the capstone.' },
    ],
  },
  web3: {
    tag: 'WEB3 · TRACK 02',
    title: 'Blockchain & DeFi',
    subtitle: 'Protocol mechanics and on-chain liquidity for quants',
    intro: 'A quant\'s view of decentralized finance: AMM math, MEV, liquidations and the cross-chain plumbing that makes on-chain markets tradeable.',
    meta: [
      { k: 'Duration', v: '10 weeks' }, { k: 'Format', v: 'Hybrid · Weekly' },
      { k: 'Cohort', v: '07 · Fall 2026' }, { k: 'Level', v: 'Graduate' },
    ],
    modules: [
      { num: '01', title: 'DeFi Primitives', tag: '1 WEEK', desc: 'Tokens, custody, settlement, oracles — the unfamiliar parts of the stack.' },
      { num: '02', title: 'AMM Math', tag: '2 WEEKS', desc: 'CFMMs, concentrated liquidity and impermanent loss derived from first principles.' },
      { num: '03', title: 'On-Chain Strategy', tag: '2 WEEKS', desc: 'Liquidity provision, arbitrage and statistical strategies adapted to the on-chain microstructure.' },
      { num: '04', title: 'MEV', tag: '2 WEEKS', desc: 'Searcher, builder, validator. PBS, sandwich constraints and competitive dynamics.' },
      { num: '05', title: 'Capstone', tag: '3 WEEKS', desc: 'Ship a live on-chain strategy or research artifact, evaluated on mainnet data.' },
    ],
    outcomes: [
      'Reason quantitatively about AMM and lending protocols',
      'Build on-chain strategies grounded in microstructure',
      'Read and reproduce DeFi research papers',
    ],
    audience: [
      'Quants curious about on-chain markets',
      'Engineers building DeFi research and trading systems',
    ],
    instructors: [
      { initials: 'VM', name: 'Dr. Vera Marlow', role: 'Lead Instructor', bio: 'Author on AMM design and MEV markets.' },
      { initials: 'OK', name: 'Omar Khalid', role: 'Co-instructor', bio: 'Founder, on-chain market-making team.' },
    ],
    faqs: [
      { q: 'Do I need to write smart contracts?', a: 'You read them; the strategy code is in Python and Rust.' },
    ],
  },
  ds: {
    tag: 'DS · TRACK 04',
    title: 'Data Science for Markets',
    subtitle: 'Tick data, alternative data and factor models',
    intro: 'The data side of systematic trading: clean, model, decompose and stress-test the inputs that drive every modern strategy.',
    meta: [
      { k: 'Duration', v: '12 weeks' }, { k: 'Format', v: 'Hybrid · Weekly' },
      { k: 'Cohort', v: '07 · Fall 2026' }, { k: 'Level', v: 'Graduate' },
    ],
    modules: [
      { num: '01', title: 'Market Data Engineering', tag: '2 WEEKS', desc: 'L1/L2/L3 feeds, tick normalization, corporate actions and survivorship.' },
      { num: '02', title: 'Factor Models', tag: '2 WEEKS', desc: 'Fama-French, PCA, and modern orthogonalization techniques.' },
      { num: '03', title: 'Statistical Learning for Alpha', tag: '2 WEEKS', desc: 'Robust regression, dimensionality reduction and signal combination.' },
      { num: '04', title: 'Backtesting', tag: '2 WEEKS', desc: 'Bias-free simulation, transaction costs and combinatorial purged CV.' },
      { num: '05', title: 'Capstone', tag: '4 WEEKS', desc: 'Ship a factor research artifact with rigorous out-of-sample evidence.' },
    ],
    outcomes: [
      'Engineer production-grade research datasets',
      'Build and validate factor models on equity universes',
      'Apply modern statistical learning to alpha research',
    ],
    audience: [
      'Data scientists moving into systematic trading',
      'Quants adding rigor to their backtesting',
    ],
    instructors: [
      { initials: 'HC', name: 'Dr. Helena Cho', role: 'Lead Instructor', bio: 'Former PM, multi-strat fund. PhD in econometrics.' },
      { initials: 'ML', name: 'Marcus Liu', role: 'Co-instructor', bio: 'Senior data engineer; built the cohort\'s data lake.' },
    ],
    faqs: [
      { q: 'Do you provide data?', a: 'Yes — cohorts get access to the CMF research data stack: equity tick data, fundamentals and curated alt-data feeds.' },
    ],
  },
};

function ProgramDetail({ id }) {
  const p = PROGRAM_DETAILS[id] || PROGRAM_DETAILS.quant;
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => { window.scrollTo({ top: 0 }); }, [id]);

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <FormulasBg density="med" />
        <div className="container">
          <a href="#/programs" className="back-link"><span style={{ display: 'inline-block', transform: 'rotate(180deg)' }}><IconArrow /></span> Back to programs</a>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'flex-end' }}>
            <div>
              <span className="program-tag" style={{ marginBottom: 24, display: 'inline-block' }}>{p.tag}</span>
              <h1 className="h-display h1" style={{ marginBottom: 22 }}>{p.title}</h1>
              <p className="subhead" style={{ marginBottom: 24, maxWidth: '20ch' }}>{p.subtitle}</p>
              <p className="lede" style={{ marginBottom: 32 }}>{p.intro}</p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a href="#/apply" className="btn btn-gold">Apply now <IconArrow /></a>
                <a href="#syllabus" className="btn btn-outline">Download syllabus</a>
              </div>
            </div>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)', border: '1px solid var(--border)' }}>
                {p.meta.map(m => (
                  <div key={m.k} style={{ padding: '20px 22px', background: 'rgba(14,27,54,0.7)' }}>
                    <div className="mono" style={{ fontSize: 11, color: 'var(--text-mute)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 8 }}>{m.k}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600 }}>{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section" id="syllabus">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <span className="eyebrow">/ 01 — Curriculum</span>
              <h2 className="h-display h2">What you'll learn,<br/>module by module.</h2>
            </div>
            <p className="lede">Every module ships with problem sets, a coding sprint
              and a short written reflection. The capstone runs through the entire track.</p>
          </div>
          <div className="curriculum">
            {p.modules.map(m => (
              <div className="module" key={m.num}>
                <div className="module-num">{m.num}</div>
                <div className="module-body">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
                <div className="module-meta">{m.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes / Audience */}
      <section className="section" style={{ background: 'rgba(14,27,54,0.4)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <span className="eyebrow" style={{ display: 'block', marginBottom: 16 }}>/ 02 — Outcomes</span>
              <h3 className="h-display h2" style={{ marginBottom: 28 }}>What you'll<br/>walk away with.</h3>
              <ul className="check-list">
                {p.outcomes.map(o => <li key={o}>{o}</li>)}
              </ul>
            </div>
            <div>
              <span className="eyebrow" style={{ display: 'block', marginBottom: 16 }}>/ 03 — Who it's for</span>
              <h3 className="h-display h2" style={{ marginBottom: 28 }}>Built for those<br/>moving into quant.</h3>
              <ul className="check-list">
                {p.audience.map(a => <li key={a}>{a}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <span className="eyebrow">/ 04 — Instructors</span>
              <h2 className="h-display h2">Taught by<br/>practitioners.</h2>
            </div>
            <p className="lede">CMF instructors split their time between the program
              and active research, trading or engineering roles.</p>
          </div>
          <div className="team-grid">
            {p.instructors.map(i => (
              <div className="team-card" key={i.name}>
                <div className="team-avatar">{i.initials}</div>
                <h5>{i.name}</h5>
                <div className="role">{i.role}</div>
                <p>{i.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'rgba(14,27,54,0.4)' }}>
        <div className="container">
          <div className="section-head">
            <div className="left">
              <span className="eyebrow">/ 05 — Frequently asked</span>
              <h2 className="h-display h2">Questions<br/>before applying.</h2>
            </div>
            <p className="lede">Still curious? Admissions hold office hours every
              Wednesday — book a slot from the contact page.</p>
          </div>
          <div className="faq">
            {p.faqs.map((f, i) => (
              <div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={i}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="plus" />
                </button>
                <div className="faq-a"><div className="faq-a-inner">{f.a}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA tail */}
      <section className="section-tight">
        <div className="container" style={{ textAlign: 'center', padding: '60px 0' }}>
          <p className="eyebrow" style={{ display: 'block', marginBottom: 18 }}>Applications close August 30</p>
          <h2 className="h-display h2" style={{ marginBottom: 30 }}>Build the foundation.<br/>Join cohort 07.</h2>
          <div style={{ display: 'inline-flex', gap: 14 }}>
            <a href="#/apply" className="btn btn-gold">Apply now <IconArrow /></a>
            <a href="#/programs" className="btn btn-outline">All programs</a>
          </div>
        </div>
      </section>
    </>
  );
}

window.ProgramDetail = ProgramDetail;
window.PROGRAM_DETAILS = PROGRAM_DETAILS;
