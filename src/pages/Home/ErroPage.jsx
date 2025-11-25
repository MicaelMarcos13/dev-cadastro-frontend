function ErrorPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Página não encontrada</h1>
      <p>Ops! A rota não existe ou foi digitada incorretamente.</p>
      <a href="#/">Voltar para Home</a>
    </div>
  )
}

export default ErrorPage
