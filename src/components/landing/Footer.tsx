const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container">
        <div className="text-center">
          <p className="text-sm opacity-80 mb-2">
            © {currentYear} Atividades TDAH. Todos os direitos reservados.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Termos de Uso
            </a>
            <span>|</span>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Política de Privacidade
            </a>
            <span>|</span>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
