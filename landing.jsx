// landing.jsx — Landing/Home page
const PROGRAMS = [
  {
    id: 'ai',
    num: '01',
    tag: 'AI',
    title: 'Applied AI for Finance',
    desc: 'From classical ML to transformers — building signal pipelines, forecasting models and execution agents grounded in market reality.',
    courses: ['Course 1 · Foundations of ML in Markets', 'Course 2 · Deep Learning & LLMs for Quant'],
    Icon: () => <IconAI />,
  },
  {
    id: 'web3',
    num: '02',
    tag: 'WEB3',
    title: 'Blockchain & DeFi',
    desc: 'Protocol mechanics, AMMs, MEV and on-chain liquidity — a quant\'s view of decentralized finance and tokenized markets.',
    courses: ['Course 1 · DeFi Primitives & AMM Math', 'Course 2 · On-chain Strategy & MEV'],
    Icon: () => <IconWeb3 />,
  },
  {
    id: 'quant',
    num: '03',
    tag: 'QUANT',
    title: 'Quantitative Finance & Derivatives',
    desc: 'From binomial trees to Monte Carlo — pricing, hedging, and the stochastic calculus that underpins modern derivatives.',
    courses: ['Course 1 · Financial Mathematics & Derivatives Pricing', 'Course 2 · Stochastic Calculus in Practice'],
    Icon: () => <IconQuant />,
  },
  {
    id: 'ds',
    num: '04',
    tag: 'DS',
    title: 'Data Science for Markets',
    desc: 'Tick data, alternative data, factor models and statistical inference for systematic trading research.',
    courses: ['Course 1 · Market Data Engineering', 'Course 2 · Statistical Learning for Alpha'],
    Icon: () => <IconDS />,
  },
];

const PROJECTS = [
  { id: 'vol-surface',    title: 'Volatility Surface Construction', cohort: 'COHORT 06 · QUANT',
    desc: 'Calibrating SVI and SSVI surfaces on SPX options with arbitrage-free interpolation across strikes and tenors.',
    tags: ['Quant', 'Derivatives'], variant: 'surface', tint: 'gold' },
  { id: 'alpha-signals',  title: 'Mid-Frequency Alpha Signals',    cohort: 'COHORT 06 · DS',
    desc: 'Engineering 40+ orthogonalized factors on US equities, evaluated with Sharpe-corrected combinatorial purged CV.',
    tags: ['DS', 'Equities'], variant: 'curve', tint: 'gold' },
  { id: 'onchain-mm',     title: 'On-Chain Market Making',         cohort: 'COHORT 05 · WEB3',
    desc: 'Liquidity provision strategy on a concentrated-liquidity AMM with inventory-aware impermanent-loss hedging.',
    tags: ['Web3', 'DeFi'], variant: 'orderbook', tint: 'gold' },
  { id: 'sentiment-llm',  title: 'LLM-Driven Sentiment Indices',   cohort: 'COHORT 06 · AI',
    desc: 'Fine-tuned encoders on earnings transcripts; sector-level sentiment signal beats baseline by 32 bps annualized.',
    tags: ['AI', 'NLP'], variant: 'heatmap', tint: 'gold' },
  { id: 'rates-curve',    title: 'Rates Curve & Carry',            cohort: 'COHORT 05 · QUANT',
    desc: 'Multi-curve bootstrapping and carry/roll decomposition for USD swap and treasury markets.',
    tags: ['Quant', 'Rates'], variant: 'bars', tint: 'gold' },
  { id: 'graph-risk',     title: 'Graph-Based Portfolio Risk',     cohort: 'COHORT 06 · DS',
    desc: 'Modeling cross-asset contagion with sector graphs; spectral clustering for adaptive risk decomposition.',
    tags: ['DS', 'Risk'], variant: 'network', tint: 'gold' },
];

function Landing() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <FormulasBg density="med" />
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="eyebrow">EST. 2019 · INTAKE 2026</span>
              <h1 className="h-display h1 hero-headline">Center of<br/>Mathematical<br/>Finance</h1>
              <p className="subhead hero-sub">Bridging rigorous theory and real-world quantitative practice</p>
              <p className="lede hero-para">
                CMF trains mathematicians, computer scientists and physicists to build the
                pricing models, signal engines and trading systems behind modern markets —
                grounded in measure-theoretic rigor and shipped on production data.
              </p>
              <div className="hero-ctas">
                <a href="#/programs" className="btn btn-gold">Explore Programs <IconArrow /></a>
                <a href="#/portfolio" className="btn btn-outline">View Portfolio</a>
              </div>
            </div>
            <div className="hero-visual">
              <WireframeSurface />
              {/* Floating formula chips */}
              <div className="formula-chip" style={{ top: '4%', right: '4%', maxWidth: '92%' }}>
                <Tex latex="dS_t = \mu S_t\,dt + \sigma S_t\,dW_t" />
              </div>
              <div className="formula-chip" style={{ top: '36%', left: '2%' }}>
                <Tex latex="C = e^{-rT}\,\mathbb{E}^{\mathbb{Q}}[H_T]" />
              </div>
              <div className="formula-chip" style={{ bottom: '18%', right: '4%' }}>
                <Tex latex="\Delta = \tfrac{\partial C}{\partial S} \quad \Gamma = \tfrac{\partial^2 C}{\partial S^2}" />
              </div>
              <div className="formula-chip" style={{ bottom: '4%', left: '6%' }}>
                <Tex latex="\sigma_{\text{impl}}\,\sqrt{T}" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / VALUES */}
      <section className="section" id="about">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <span className="eyebrow">/ 01 — Our approach</span>
              <h2 className="h-display h2">Three principles<br/>guide every cohort.</h2>
            </div>
            <p className="lede">A graduate-level program built by practicing quants. We
              teach the math we use, the code we ship, and the intuition that holds them together.</p>
          </div>
          <div className="values">
            <div className="value">
              <div className="value-icon"><IconRigor /></div>
              <h4>Rigorous</h4>
              <p>Measure theory, stochastic calculus, numerical methods — taught with the
                depth required to read papers and prove things, not just recite them.</p>
            </div>
            <div className="value">
              <div className="value-icon"><IconPractice /></div>
              <h4>Practical</h4>
              <p>Every model lands in code on production-grade data: tick feeds, swap curves,
                option chains and on-chain liquidity — never toy datasets.</p>
            </div>
            <div className="value">
              <div className="value-icon"><IconIntuition /></div>
              <h4>Intuitive</h4>
              <p>We build the financial intuition behind the math: why a Greek behaves the
                way it does, why a curve steepens, why a strategy decays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section" id="programs">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <span className="eyebrow">/ 02 — Curricula</span>
              <h2 className="h-display h2">Programs open<br/>for registration.</h2>
            </div>
            <p className="lede">Four parallel tracks, each two courses deep. Take one,
              stack several, or design a custom path with admissions.</p>
          </div>
          <div className="programs-grid">
            {PROGRAMS.map(p => (
              <a key={p.id} href={`#/program/${p.id}`} className="card card-corners program-card">
                <span className="card-corners"></span>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
                  <span className="program-tag">{p.tag}</span>
                  <span style={{ color: 'var(--gold)', opacity: 0.6 }}><p.Icon /></span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="program-courses">
                  {p.courses.map(c => <span key={c}>{c}</span>)}
                </div>
                <div className="card-footer">
                  <span className="program-num">{p.num} / 04</span>
                  <span className="card-link">Learn more</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section" id="portfolio" style={{ background: 'linear-gradient(180deg, transparent, rgba(14,27,54,0.4) 30%, rgba(14,27,54,0.4) 70%, transparent)' }}>
        <div className="container">
          <div className="section-head">
            <div className="left">
              <span className="eyebrow">/ 03 — Portfolio</span>
              <h2 className="h-display h2">Projects by our<br/>team and cohorts.</h2>
            </div>
            <p className="lede">Capstone work and ongoing research from CMF cohorts.
              Every project ships with a paper, a notebook and a production-shaped repository.</p>
          </div>
          <div className="portfolio-grid">
            {PROJECTS.map(p => (
              <a key={p.id} href={`#/project/${p.id}`} className="card card-corners project-card">
                <ChartThumb variant={p.variant} tint={p.tint} />
                <div className="project-body">
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    <span className="tag muted">{p.cohort.split('·')[0].trim()}</span>
                  </div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  <span className="card-link">Read more</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="section-tight">
        <div className="container">
          <div className="stats">
            <div className="stat">
              <div className="stat-num"><span className="g">07</span></div>
              <div className="stat-label">Cohorts completed</div>
            </div>
            <div className="stat">
              <div className="stat-num">142</div>
              <div className="stat-label">Projects shipped</div>
            </div>
            <div className="stat">
              <div className="stat-num">386</div>
              <div className="stat-label">Alumni placed</div>
            </div>
            <div className="stat">
              <div className="stat-num"><span className="g">28</span></div>
              <div className="stat-label">Partner firms</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <span className="eyebrow">/ 04 — Voices</span>
              <h2 className="h-display h2">From our alumni<br/>and partners.</h2>
            </div>
          </div>
          <div className="testimonials">
            <div className="testimonial">
              <p>"CMF rebuilt the way I read papers. Six months in I was pricing
                exotic barriers on the desk — and actually understanding what the
                Greeks were telling me."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">EK</div>
                <div className="testimonial-meta"><b>Elena Kovač</b><span>Quant · Cohort 04</span></div>
              </div>
            </div>
            <div className="testimonial">
              <p>"The most rigorous applied program I've seen. The graduates we
                hire from CMF arrive ready to contribute to production systems
                in their first month."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">RT</div>
                <div className="testimonial-meta"><b>Ravi Thakkar</b><span>Head of Research · Partner Firm</span></div>
              </div>
            </div>
            <div className="testimonial">
              <p>"The intuition track is the secret weapon. Anyone can grind
                through Shreve — CMF makes you feel why a martingale is the
                right tool for the job."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">MS</div>
                <div className="testimonial-meta"><b>Maya Soriano</b><span>Researcher · Cohort 05</span></div>
              </div>
            </div>
          </div>

          <div className="partners">
            <div className="partner">NORTHFIELD</div>
            <div className="partner">AXIOM CAP</div>
            <div className="partner">VEGA LABS</div>
            <div className="partner">DELTA ONE</div>
            <div className="partner">PRIMEROOT</div>
            <div className="partner">QUADRA</div>
          </div>
        </div>
      </section>
    </>
  );
}

window.Landing = Landing;
window.PROGRAMS = PROGRAMS;
window.PROJECTS = PROJECTS;
