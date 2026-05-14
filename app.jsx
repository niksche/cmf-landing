// app.jsx — hash router + index pages + boot

function useHashRoute() {
  const [route, setRoute] = useState(window.location.hash.replace(/^#\/?/, '') || '');
  useEffect(() => {
    const onChange = () => setRoute(window.location.hash.replace(/^#\/?/, '') || '');
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

// ----- index pages -----
function ProgramsIndex() {
  return (
    <>
      <section className="page-hero">
        <FormulasBg density="low" />
        <div className="container">
          <a href="#/" className="back-link"><span style={{ display: 'inline-block', transform: 'rotate(180deg)' }}><IconArrow /></span> Back home</a>
          <span className="eyebrow">/ Programs</span>
          <h1 className="h-display h1" style={{ margin: '18px 0 24px' }}>All programs.</h1>
          <p className="lede" style={{ fontSize: 18, maxWidth: '64ch' }}>Four parallel tracks, each two courses deep. Take one, stack several, or design a custom path with admissions.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
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
    </>
  );
}

function PortfolioIndex() {
  const [filter, setFilter] = useState('All');
  const tags = ['All', 'Quant', 'AI', 'Web3', 'DS'];
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.tags.includes(filter));
  return (
    <>
      <section className="page-hero">
        <FormulasBg density="low" />
        <div className="container">
          <a href="#/" className="back-link"><span style={{ display: 'inline-block', transform: 'rotate(180deg)' }}><IconArrow /></span> Back home</a>
          <span className="eyebrow">/ Portfolio</span>
          <h1 className="h-display h1" style={{ margin: '18px 0 24px' }}>Projects.</h1>
          <p className="lede" style={{ fontSize: 18, maxWidth: '64ch', marginBottom: 36 }}>Capstone work and ongoing research from CMF cohorts.</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {tags.map(t => (
              <button key={t} onClick={() => setFilter(t)}
                className="btn btn-sm"
                style={{
                  background: filter === t ? 'var(--gold)' : 'transparent',
                  color: filter === t ? '#1A0E00' : 'var(--text-dim)',
                  borderColor: filter === t ? 'var(--gold)' : 'var(--border-strong)',
                  border: '1px solid',
                }}>{t}</button>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="portfolio-grid">
            {filtered.map(p => (
              <a key={p.id} href={`#/project/${p.id}`} className="card card-corners project-card">
                <ChartThumb variant={p.variant} tint={p.tint} />
                <div className="project-body">
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
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
    </>
  );
}

function About() {
  return (
    <>
      <section className="page-hero">
        <FormulasBg density="med" />
        <div className="container">
          <a href="#/" className="back-link"><span style={{ display: 'inline-block', transform: 'rotate(180deg)' }}><IconArrow /></span> Back home</a>
          <span className="eyebrow">/ About</span>
          <h1 className="h-display h1" style={{ margin: '18px 0 24px' }}>The center.</h1>
          <p className="lede" style={{ fontSize: 18, maxWidth: '64ch' }}>
            CMF was founded in 2019 by a group of practicing quants and academic mathematicians who wanted a single program rigorous enough to read papers and practical enough to ship code.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'flex-start' }}>
            <div>
              <span className="eyebrow" style={{ display: 'block', marginBottom: 16 }}>/ Mission</span>
              <h3 className="h-display h2" style={{ marginBottom: 24 }}>Build the foundation<br/>for future quants.</h3>
              <p className="lede">We teach the math we use on the desk, the code we ship in production, and the intuition that holds the two together. Seven cohorts in, the program is taught entirely by practitioners and revised every cycle.</p>
            </div>
            <ul className="check-list">
              <li><b>Founded 2019</b> — by practicing quants and academic mathematicians.</li>
              <li><b>Seven cohorts</b> completed across four tracks.</li>
              <li><b>28 partner firms</b> in systematic trading, market-making and research.</li>
              <li><b>20% scholarship</b> reserved on every intake.</li>
              <li><b>Open research</b> — every capstone ships paper + code.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="page-hero">
        <FormulasBg density="low" />
        <div className="container">
          <a href="#/" className="back-link"><span style={{ display: 'inline-block', transform: 'rotate(180deg)' }}><IconArrow /></span> Back home</a>
          <span className="eyebrow">/ Contact</span>
          <h1 className="h-display h1" style={{ margin: '18px 0 24px' }}>Get in touch.</h1>
          <p className="lede" style={{ fontSize: 18, maxWidth: '64ch' }}>Questions about programs, partnerships or press? We respond within two business days.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80 }}>
            <div>
              <div style={{ marginBottom: 36 }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10 }}>Admissions</div>
                <a href="mailto:admissions@cmf.edu" style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600 }}>admissions@cmf.edu</a>
              </div>
              <div style={{ marginBottom: 36 }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10 }}>Partnerships</div>
                <a href="mailto:partners@cmf.edu" style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600 }}>partners@cmf.edu</a>
              </div>
              <div style={{ marginBottom: 36 }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10 }}>Office</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 500, lineHeight: 1.5 }}>14 Rue de la Bourse<br/>75002 Paris, France</div>
              </div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              style={{ border: '1px solid var(--border)', padding: 40, background: 'rgba(14,27,54,0.4)' }}>
              {submitted ? (
                <div style={{ padding: '60px 20px', textAlign: 'center' }}>
                  <div style={{ width: 56, height: 56, border: '1.5px solid var(--gold)', borderRadius: '50%', display: 'grid', placeItems: 'center', margin: '0 auto 22px', color: 'var(--gold)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12 L10 18 L20 6" /></svg>
                  </div>
                  <h3 className="h-display h3" style={{ marginBottom: 10 }}>Message sent.</h3>
                  <p className="muted">We'll be in touch within two business days.</p>
                </div>
              ) : (
                <>
                  <FormField label="Your name" />
                  <FormField label="Email" type="email" />
                  <FormField label="Organization" />
                  <FormField label="Message" textarea />
                  <button type="submit" className="btn btn-gold" style={{ marginTop: 12 }}>Send message <IconArrow /></button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function FormField({ label, type = 'text', textarea }) {
  return (
    <label style={{ display: 'block', marginBottom: 24 }}>
      <div className="mono" style={{ fontSize: 11, color: 'var(--text-mute)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 10 }}>{label}</div>
      {textarea ? (
        <textarea rows="4" style={fieldStyle} />
      ) : (
        <input type={type} style={fieldStyle} />
      )}
    </label>
  );
}
const fieldStyle = {
  width: '100%',
  background: 'rgba(10,22,40,0.6)',
  border: '1px solid var(--border)',
  color: 'var(--text)',
  padding: '12px 14px',
  fontFamily: 'var(--font-body)',
  fontSize: 15,
  borderRadius: 2,
  outline: 'none',
};

function Apply() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ track: 'quant', name: '', email: '', bg: '', motivation: '' });
  const tracks = [
    { id: 'quant', label: 'Quantitative Finance', Icon: IconQuant },
    { id: 'ai', label: 'Applied AI for Finance', Icon: IconAI },
    { id: 'web3', label: 'Blockchain & DeFi', Icon: IconWeb3 },
    { id: 'ds', label: 'Data Science for Markets', Icon: IconDS },
  ];

  return (
    <>
      <section className="page-hero">
        <FormulasBg density="low" />
        <div className="container">
          <a href="#/" className="back-link"><span style={{ display: 'inline-block', transform: 'rotate(180deg)' }}><IconArrow /></span> Back home</a>
          <span className="eyebrow">/ Apply · Cohort 07</span>
          <h1 className="h-display h1" style={{ margin: '18px 0 24px' }}>Apply.</h1>
          <p className="lede" style={{ fontSize: 18, maxWidth: '60ch' }}>Three short steps. Full application reviewed within ten business days.</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          {/* steps */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 40 }}>
            {['Track', 'About you', 'Submit'].map((label, i) => (
              <div key={i} style={{ flex: 1, padding: '14px 16px', border: '1px solid', borderColor: step >= i ? 'var(--border-gold)' : 'var(--border)',
                background: step === i ? 'rgba(228,169,60,0.06)' : 'transparent' }}>
                <div className="mono" style={{ fontSize: 10, color: step >= i ? 'var(--gold)' : 'var(--text-mute)', letterSpacing: '0.16em' }}>0{i+1}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, marginTop: 4, color: step >= i ? 'var(--text)' : 'var(--text-dim)' }}>{label}</div>
              </div>
            ))}
          </div>

          {step === 0 && (
            <div>
              <h3 className="h-display h3" style={{ marginBottom: 20 }}>Choose your track.</h3>
              <p className="muted" style={{ marginBottom: 28 }}>You can change this later, or stack a second track at the next intake.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {tracks.map(t => (
                  <button key={t.id} onClick={() => setData({ ...data, track: t.id })}
                    style={{
                      padding: 24, textAlign: 'left',
                      background: data.track === t.id ? 'rgba(228,169,60,0.06)' : 'rgba(14,27,54,0.4)',
                      border: `1px solid ${data.track === t.id ? 'var(--border-gold)' : 'var(--border)'}`,
                      color: 'var(--text)', cursor: 'pointer', borderRadius: 4, transition: 'all 0.15s ease',
                    }}>
                    <div style={{ color: 'var(--gold)', marginBottom: 14 }}><t.Icon /></div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600 }}>{t.label}</div>
                  </button>
                ))}
              </div>
              <div style={{ marginTop: 32, display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => setStep(1)} className="btn btn-gold">Continue <IconArrow /></button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 className="h-display h3" style={{ marginBottom: 28 }}>About you.</h3>
              <FormField label="Full name" />
              <FormField label="Email" type="email" />
              <FormField label="Academic & professional background" textarea />
              <FormField label="Why CMF?" textarea />
              <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={() => setStep(0)} className="btn btn-outline">Back</button>
                <button onClick={() => setStep(2)} className="btn btn-gold">Continue <IconArrow /></button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ width: 72, height: 72, border: '1.5px solid var(--gold)', borderRadius: '50%', display: 'grid', placeItems: 'center', margin: '0 auto 28px', color: 'var(--gold)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12 L10 18 L20 6" /></svg>
              </div>
              <h3 className="h-display h2" style={{ marginBottom: 16 }}>Application received.</h3>
              <p className="lede" style={{ margin: '0 auto 32px' }}>Thanks — you'll hear back from admissions within ten business days. Track your status by email.</p>
              <a href="#/" className="btn btn-outline">Back home</a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

// ----- Router -----
function App() {
  const route = useHashRoute();
  const parts = route.split('/').filter(Boolean);
  const [section, id] = parts;

  let page;
  if (!section || section === 'home') page = <Landing />;
  else if (section === 'programs') page = <ProgramsIndex />;
  else if (section === 'program') page = <ProgramDetail id={id} />;
  else if (section === 'portfolio') page = <PortfolioIndex />;
  else if (section === 'project') page = <ProjectDetail id={id} />;
  else if (section === 'about') page = <About />;
  else if (section === 'contact') page = <Contact />;
  else if (section === 'apply') page = <Apply />;
  else page = <Landing />;

  return (
    <>
      <Nav route={route} />
      <main>{page}</main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
