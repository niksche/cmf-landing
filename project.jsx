// project.jsx — Project detail page

const PROJECT_DETAILS = {
  'vol-surface': {
    title: 'Volatility Surface Construction',
    cohort: 'COHORT 06 · QUANT TRACK',
    summary: 'Calibrating arbitrage-free SVI and SSVI surfaces on SPX options with stable interpolation across strikes and tenors — productionized for the cohort\'s research stack.',
    tags: ['Quant', 'Derivatives', 'Calibration'],
    duration: 'Q3 2025 · 12 weeks',
    team: [
      { initials: 'PR', name: 'Priya Ramnath', role: 'Project Lead' },
      { initials: 'MG', name: 'Marco Gentile', role: 'Calibration' },
      { initials: 'LT', name: 'Lin Tao', role: 'Infrastructure' },
      { initials: 'AB', name: 'Aïcha Bah', role: 'Research' },
    ],
    metrics: [
      { v: '0.41 bps', l: 'Avg fit RMSE' },
      { v: '12 ms',    l: 'Calib per slice' },
      { v: '99.7%',    l: 'Arb-free tenors' },
      { v: '4M',       l: 'Quotes / day' },
    ],
    problem: {
      title: 'The problem',
      paras: [
        'Listed equity options trade across a dense lattice of strikes and expiries, but the implied-volatility quotes are noisy and frequently contain static and calendar-arbitrage violations. Downstream consumers — hedge engines, exotic pricers, risk dashboards — need a smooth, stable, arbitrage-free surface that updates many times per second.',
        'Off-the-shelf SVI calibration is fast but brittle: it produces local minima, butterfly-arbitrage in the wings and unstable parameters under small perturbations of the input quotes. The desk needed a calibration that was both fast (millisecond budget per slice) and stable across regimes.',
      ],
      chart: { variant: 'surface', label: 'SPX · Implied vol surface · 2025-10-14' },
    },
    approach: {
      title: 'Our approach',
      paras: [
        'We start from the SSVI parameterization, which guarantees no static arbitrage by construction, then refine each slice with a constrained SVI fit subject to butterfly and calendar conditions. A bespoke solver — a Levenberg–Marquardt core with custom Jacobians and a homotopy warm-start from the previous tick — drives down both fit error and runtime.',
        'Quotes are first cleaned with a stale-mid filter and weighted by inverse spread; the wings are stabilized using a synthetic far-strike anchor derived from the put-call parity invariants of the next nearest expiry.',
      ],
      list: [
        { t: 'SSVI parameter shell', d: 'Provides the no-arbitrage skeleton across all tenors.' },
        { t: 'Slice-level SVI refinement', d: 'Tightens fit while preserving butterfly conditions.' },
        { t: 'Warm-started LM solver', d: 'Custom Jacobians, homotopy in calibration time.' },
        { t: 'Quote cleaning & weighting', d: 'Stale-mid filter, inverse-spread weights, wing anchors.' },
      ],
      chart: { variant: 'curve', label: 'Slice fit · 30-day expiry · log-moneyness' },
    },
    results: {
      title: 'Results & impact',
      paras: [
        'Across one year of SPX option chains, our calibration produced a fully arbitrage-free surface on 99.7% of tenor slices, with average fit RMSE of 0.41 bps of vol. Median calibration time per slice landed at 12 ms — well inside the 50 ms budget agreed with the consuming hedge engine.',
        'The surface is now consumed by three downstream systems in the CMF research stack: an exotic option pricer, a delta-hedging simulator, and the cohort\'s volatility risk dashboard. Code, paper and notebooks are open-sourced to the CMF alumni network.',
      ],
      chart: { variant: 'heatmap', label: 'Calibration residuals · strikes × tenors' },
    },
  },

  'alpha-signals': {
    title: 'Mid-Frequency Alpha Signals',
    cohort: 'COHORT 06 · DS TRACK',
    summary: 'Engineering 40+ orthogonalized factors on US equities, with Sharpe-corrected combinatorial purged cross-validation.',
    tags: ['DS', 'Equities', 'Factor Models'],
    duration: 'Q2 2025 · 10 weeks',
    team: [
      { initials: 'SD', name: 'Sami Doumi', role: 'Project Lead' },
      { initials: 'KP', name: 'Kira Petrov', role: 'Modeling' },
      { initials: 'BJ', name: 'Bryan Jung', role: 'Infrastructure' },
    ],
    metrics: [
      { v: '1.94', l: 'Net Sharpe (OOS)' },
      { v: '+32 bps', l: 'Vs baseline' },
      { v: '0.12', l: 'Avg pairwise ρ' },
      { v: '42', l: 'Factors live' },
    ],
    problem: {
      title: 'The problem',
      paras: [
        'A growing internal factor library was producing overlapping signals with high pairwise correlation, inflated in-sample Sharpe ratios and degraded out-of-sample performance. The desk needed an orthogonalized, deflation-aware factor set.',
      ],
      chart: { variant: 'curve', label: 'Cumulative IC by factor family' },
    },
    approach: {
      title: 'Our approach',
      paras: [
        'We built a feature pipeline rooted in Bailey & López de Prado\'s deflated Sharpe ratio framework, with combinatorial purged CV for evaluation. Factors are orthogonalized in tranches: each new candidate is projected onto the residual space of the existing set.',
      ],
      list: [
        { t: 'Combinatorial purged CV', d: 'Honest out-of-sample estimates under overlap.' },
        { t: 'Deflated Sharpe', d: 'Multiple-testing-aware significance.' },
        { t: 'Residual orthogonalization', d: 'Tranched factor incorporation.' },
        { t: 'Cost-aware backtest', d: 'Realistic spread, impact and borrow.' },
      ],
      chart: { variant: 'heatmap', label: 'Factor correlation matrix' },
    },
    results: {
      title: 'Results & impact',
      paras: [
        'Out-of-sample Sharpe of 1.94 net of conservative costs, with average pairwise factor correlation reduced from 0.41 to 0.12. The framework is now standard across CMF\'s equity research stack.',
      ],
      chart: { variant: 'bars', label: 'Net Sharpe by year · 2019–2025' },
    },
  },

  'onchain-mm': {
    title: 'On-Chain Market Making',
    cohort: 'COHORT 05 · WEB3 TRACK',
    summary: 'Liquidity provision strategy on a concentrated-liquidity AMM with inventory-aware impermanent-loss hedging.',
    tags: ['Web3', 'DeFi', 'Market Making'],
    duration: 'Q1 2025 · 10 weeks',
    team: [
      { initials: 'ZH', name: 'Zhen Hu', role: 'Project Lead' },
      { initials: 'OA', name: 'Olu Adebayo', role: 'On-chain Eng' },
      { initials: 'EN', name: 'Eva Norén', role: 'Risk' },
    ],
    metrics: [
      { v: '11.4%', l: 'APR (net IL)' },
      { v: '−68%', l: 'IL vs naive' },
      { v: '4 chains', l: 'Deployed' },
      { v: '$2.1M', l: 'Peak TVL' },
    ],
    problem: {
      title: 'The problem',
      paras: [
        'Concentrated-liquidity AMMs offer attractive fee yields, but naive LP positions take material impermanent loss in trending markets. The desk wanted a quoting strategy that adapts ranges and hedges inventory in real time.',
      ],
      chart: { variant: 'orderbook', label: 'Liquidity distribution · ETH/USDC' },
    },
    approach: {
      title: 'Our approach',
      paras: [
        'A two-layer system: a range manager that rebalances LP ticks based on a short-horizon volatility forecast, and an inventory hedger that uses perpetual swaps to neutralize residual delta. Both components are aware of gas costs and protocol slippage.',
      ],
      list: [
        { t: 'Vol-aware range rebalancer', d: 'Tick boundaries scale with realized vol forecasts.' },
        { t: 'Perpetual swap delta hedger', d: 'Cross-venue inventory neutralization.' },
        { t: 'Gas-cost optimizer', d: 'Rebalances only when EV exceeds cost.' },
      ],
      chart: { variant: 'curve', label: 'Cumulative PnL vs naive LP' },
    },
    results: {
      title: 'Results & impact',
      paras: [
        'Live since Feb 2025 across four EVM chains. Net APR of 11.4% (after gas and slippage) with impermanent loss 68% lower than a naive equivalent position.',
      ],
      chart: { variant: 'network', label: 'Cross-chain liquidity graph' },
    },
  },

  'sentiment-llm': {
    title: 'LLM-Driven Sentiment Indices',
    cohort: 'COHORT 06 · AI TRACK',
    summary: 'Fine-tuned encoder models on a corpus of earnings transcripts produce sector-level sentiment signals with measurable alpha.',
    tags: ['AI', 'NLP', 'Equities'],
    duration: 'Q3 2025 · 12 weeks',
    team: [
      { initials: 'AH', name: 'Ahmed Halim', role: 'Project Lead' },
      { initials: 'NV', name: 'Nora Vasquez', role: 'ML Research' },
    ],
    metrics: [
      { v: '+32 bps', l: 'Annual alpha' },
      { v: '0.81 AUC', l: 'Surprise prediction' },
      { v: '180k', l: 'Transcripts' },
      { v: '11 sectors', l: 'Coverage' },
    ],
    problem: { title: 'The problem', paras: ['Off-the-shelf sentiment models are calibrated to social-media text and underperform on dense, hedged corporate language.'], chart: { variant: 'heatmap', label: 'Sector sentiment heatmap' } },
    approach: { title: 'Our approach', paras: ['We fine-tuned a 1.3B encoder on 180k labeled earnings transcripts with weak supervision, then aggregated to sector-level indices with shrinkage.'], list: [{ t: 'Domain-specific corpus', d: '180k transcripts, 2008–2025.' }, { t: 'Weak supervision', d: 'Forward returns as soft labels.' }, { t: 'Sector shrinkage', d: 'James–Stein aggregation.' }], chart: { variant: 'curve', label: 'Out-of-sample IC' } },
    results: { title: 'Results & impact', paras: ['+32 bps annualized alpha over a sector-neutral baseline, with 0.81 AUC on earnings-surprise prediction at the t+1 horizon.'], chart: { variant: 'bars', label: 'Alpha by sector' } },
  },

  'rates-curve': {
    title: 'Rates Curve & Carry',
    cohort: 'COHORT 05 · QUANT TRACK',
    summary: 'Multi-curve bootstrapping and carry/roll decomposition for USD swap and treasury markets.',
    tags: ['Quant', 'Rates', 'Curves'],
    duration: 'Q4 2024 · 10 weeks',
    team: [{ initials: 'TG', name: 'Tomás Garín', role: 'Project Lead' }, { initials: 'RD', name: 'Reema Dhar', role: 'Modeling' }],
    metrics: [{ v: '< 0.2 bps', l: 'Bootstrap residual' }, { v: '4 curves', l: 'OIS · SOFR · UST · LIBOR-stub' }, { v: '25Y', l: 'Tenors' }, { v: '11 ms', l: 'Per-tick rebuild' }],
    problem: { title: 'The problem', paras: ['Post-LIBOR transitions and overlapping discount/forecast curves demanded a clean multi-curve framework with carry attribution.'], chart: { variant: 'curve', label: 'USD swap curve · 2Y 5Y 10Y 30Y' } },
    approach: { title: 'Our approach', paras: ['Simultaneous bootstrap across OIS, SOFR and treasury curves with smoothing splines and exact reproduction of liquid benchmark instruments.'], list: [{ t: 'Simultaneous bootstrap', d: 'Joint OIS/SOFR/UST solve.' }, { t: 'Carry decomposition', d: 'Yield, roll, expectation components.' }], chart: { variant: 'bars', label: 'Carry by tenor' } },
    results: { title: 'Results & impact', paras: ['Bootstrap residual under 0.2 bps across the curve set; full per-tick rebuild in 11 ms.'], chart: { variant: 'heatmap', label: 'Curve sensitivity heatmap' } },
  },

  'graph-risk': {
    title: 'Graph-Based Portfolio Risk',
    cohort: 'COHORT 06 · DS TRACK',
    summary: 'Modeling cross-asset contagion with sector graphs and spectral clustering for adaptive risk decomposition.',
    tags: ['DS', 'Risk', 'Graphs'],
    duration: 'Q3 2025 · 8 weeks',
    team: [{ initials: 'IL', name: 'Imani Lavoie', role: 'Project Lead' }, { initials: 'KW', name: 'Kenta Watanabe', role: 'Modeling' }],
    metrics: [{ v: '−24%', l: '99% VaR (stress)' }, { v: '7 clusters', l: 'Adaptive' }, { v: '0.78', l: 'Stability score' }, { v: '500+', l: 'Tickers' }],
    problem: { title: 'The problem', paras: ['Static sector buckets miss the dynamic correlation structure that drives portfolio drawdowns in stressed regimes.'], chart: { variant: 'network', label: 'Asset correlation graph' } },
    approach: { title: 'Our approach', paras: ['Construct rolling shrinkage-correlation graphs and apply spectral clustering with stability selection across windows.'], list: [{ t: 'Rolling shrinkage corr', p: 'Ledoit–Wolf with adaptive shrinkage.' }, { t: 'Spectral clustering', d: 'Normalized cuts on sparsified graph.' }], chart: { variant: 'heatmap', label: 'Cluster stability across windows' } },
    results: { title: 'Results & impact', paras: ['Reduced realized 99% VaR in stress scenarios by 24% vs sector-based decomposition.'], chart: { variant: 'curve', label: 'Drawdown comparison' } },
  },
};

function ProjectDetail({ id }) {
  const p = PROJECT_DETAILS[id] || PROJECT_DETAILS['vol-surface'];
  useEffect(() => { window.scrollTo({ top: 0 }); }, [id]);

  // Related: 2 other projects
  const related = Object.entries(PROJECT_DETAILS).filter(([k]) => k !== id).slice(0, 3);

  return (
    <>
      <section className="page-hero">
        <FormulasBg density="low" />
        <div className="container">
          <a href="#/portfolio" className="back-link"><span style={{ display: 'inline-block', transform: 'rotate(180deg)' }}><IconArrow /></span> Back to portfolio</a>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'flex-end' }}>
            <div>
              <div style={{ display: 'flex', gap: 6, marginBottom: 22, flexWrap: 'wrap' }}>
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                <span className="tag muted">{p.cohort}</span>
              </div>
              <h1 className="h-display h1" style={{ marginBottom: 28, textTransform: 'none', letterSpacing: '-0.02em' }}>{p.title}</h1>
              <p className="lede" style={{ fontSize: 18 }}>{p.summary}</p>
            </div>
            <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: 32 }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--text-mute)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 14 }}>Project meta</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div><div className="mono" style={{ fontSize: 11, color: 'var(--text-mute)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Duration</div><div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, marginTop: 4 }}>{p.duration}</div></div>
                <div><div className="mono" style={{ fontSize: 11, color: 'var(--text-mute)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Cohort</div><div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, marginTop: 4 }}>{p.cohort}</div></div>
                <div><div className="mono" style={{ fontSize: 11, color: 'var(--text-mute)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Status</div><div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, marginTop: 4, color: 'var(--gold)' }}>Shipped</div></div>
              </div>
            </div>
          </div>

          {/* metrics row */}
          <div className="metrics" style={{ marginTop: 56 }}>
            {p.metrics.map(m => (
              <div className="metric" key={m.l}>
                <div className="metric-val">{m.v}</div>
                <div className="metric-label">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="container">
          <div className="proj-section">
            <div className="proj-section-label"><span className="num">01</span>{p.problem.title}</div>
            <div>
              <h3>The unsolved part of the desk's workflow.</h3>
              {p.problem.paras.map((para, i) => <p key={i}>{para}</p>)}
              {p.problem.chart && (
                <div className="chart-frame">
                  <div className="chart-frame-head">
                    <h6>{p.problem.chart.label}</h6>
                    <span className="pill">Fig. 01</span>
                  </div>
                  <ChartThumb variant={p.problem.chart.variant} tint="gold" />
                </div>
              )}
            </div>
          </div>

          {/* APPROACH */}
          <div className="proj-section">
            <div className="proj-section-label"><span className="num">02</span>{p.approach.title}</div>
            <div>
              <h3>How we built it.</h3>
              {p.approach.paras.map((para, i) => <p key={i}>{para}</p>)}
              {p.approach.list && (
                <ul className="check-list" style={{ marginTop: 24 }}>
                  {p.approach.list.map((it, i) => (
                    <li key={i}><b>{it.t}</b> &nbsp;— {it.d || it.p}</li>
                  ))}
                </ul>
              )}
              {p.approach.chart && (
                <div className="chart-frame">
                  <div className="chart-frame-head">
                    <h6>{p.approach.chart.label}</h6>
                    <span className="pill">Fig. 02</span>
                  </div>
                  <ChartThumb variant={p.approach.chart.variant} tint="gold" />
                </div>
              )}
            </div>
          </div>

          {/* RESULTS */}
          <div className="proj-section">
            <div className="proj-section-label"><span className="num">03</span>{p.results.title}</div>
            <div>
              <h3>What landed in production.</h3>
              {p.results.paras.map((para, i) => <p key={i}>{para}</p>)}
              {p.results.chart && (
                <div className="chart-frame">
                  <div className="chart-frame-head">
                    <h6>{p.results.chart.label}</h6>
                    <span className="pill">Fig. 03</span>
                  </div>
                  <ChartThumb variant={p.results.chart.variant} tint="gold" />
                </div>
              )}
            </div>
          </div>

          {/* TEAM */}
          <div className="proj-section">
            <div className="proj-section-label"><span className="num">04</span>The team</div>
            <div>
              <h3>Built by cohort 06.</h3>
              <p>A four-person cohort team across modeling, infrastructure and research. Advised by CMF faculty and a desk mentor from a partner firm.</p>
              <div className="team-grid" style={{ marginTop: 28, gridTemplateColumns: `repeat(${Math.min(4, p.team.length)}, 1fr)` }}>
                {p.team.map(t => (
                  <div className="team-card" key={t.name}>
                    <div className="team-avatar">{t.initials}</div>
                    <h5>{t.name}</h5>
                    <div className="role">{t.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section" style={{ background: 'rgba(14,27,54,0.4)' }}>
        <div className="container">
          <div className="section-head">
            <div className="left">
              <span className="eyebrow">/ More from portfolio</span>
              <h2 className="h-display h2">Related projects.</h2>
            </div>
            <a href="#/portfolio" className="btn btn-outline">All projects <IconArrow /></a>
          </div>
          <div className="portfolio-grid">
            {related.map(([k, r]) => {
              const proj = PROJECTS.find(x => x.id === k) || { variant: 'curve', tint: 'gold' };
              return (
                <a key={k} href={`#/project/${k}`} className="card card-corners project-card">
                  <ChartThumb variant={proj.variant} tint={proj.tint} />
                  <div className="project-body">
                    <div className="project-tags">
                      {r.tags.slice(0, 2).map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <h4>{r.title}</h4>
                    <p>{r.summary}</p>
                    <span className="card-link">Read more</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

window.ProjectDetail = ProjectDetail;
window.PROJECT_DETAILS = PROJECT_DETAILS;
