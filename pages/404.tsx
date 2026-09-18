export default function Custom404() {
  return (
    <div style={{ padding: '4rem', textAlign: 'center', fontFamily: 'sans-serif', background: '#090d16', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Page Not Found</h1>
      <p style={{ color: '#94a3b8', margin: '1rem 0' }}>The page you are looking for does not exist.</p>
      <a href="/" style={{ padding: '0.75rem 1.5rem', background: '#2563eb', color: '#fff', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 600 }}>Return Home</a>
    </div>
  );
}
