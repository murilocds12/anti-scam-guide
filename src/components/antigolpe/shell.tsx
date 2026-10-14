import { Link, useLocation } from '@tanstack/react-router';
import { ShieldCheck, LockKeyhole, ArrowUpRight, ChevronRight, Menu, X, CircleHelp } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { navigation } from '@/lib/antigolpe/content';
export function AppShell({ children }: { children: ReactNode }) {
 const { pathname } = useLocation(); const [open, setOpen] = useState(false);
 const current = navigation.find(item => item.to === pathname);
 return <div className="app-layout">
  <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
  <aside className={`sidebar ${open ? 'is-open' : ''}`}>
   <div className="sidebar-brand"><Link to="/" onClick={() => setOpen(false)} className="brand"><span className="brand-mark"><ShieldCheck size={24}/></span><span>Anti<span className="brand-accent">Golpe</span><small>SUA SEGURANÇA DIGITAL</small></span></Link><Button variant="ghost" size="icon" className="mobile-close" aria-label="Fechar menu" onClick={() => setOpen(false)}><X/></Button></div>
   <span className="nav-caption">COMO PODEMOS AJUDAR</span>
   <nav aria-label="Navegação principal">{navigation.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className={`nav-item ${pathname === item.to ? 'active' : ''}`} aria-current={pathname === item.to ? 'page' : undefined}><item.icon size={20}/><span>{item.title}</span>{pathname === item.to && <ChevronRight size={16}/>}</Link>)}</nav>
   <div className="sidebar-bottom"><div className="sidebar-reassurance"><ShieldCheck size={24}/><strong>Informação que protege.</strong><p>Mais clareza para você.<br/>Menos espaço para golpes.</p><span><span className="status-dot"/> Gratuito e sem cadastro</span></div><div className="sidebar-signoff"><LockKeyhole size={13}/> Sua privacidade vem primeiro</div></div>
  </aside>
  {open && <div className="menu-backdrop" onClick={() => setOpen(false)}/>}
  <div className="main-layout"><header className="topbar"><div className="breadcrumb"><Button variant="ghost" size="icon" className="mobile-menu" aria-label="Abrir menu" onClick={() => setOpen(true)}><Menu/></Button><Link to="/">Início</Link>{current && <><ChevronRight size={14}/><span>{current.title}</span></>}</div><span className="private-label"><LockKeyhole size={14}/> Um espaço seguro para se informar</span><span className="header-badge"><ShieldCheck size={14}/> Sem cadastro</span></header>
   <main id="conteudo" className="page-content" tabIndex={-1}>{children}</main>
   <footer className="page-footer"><span>© {new Date().getFullYear()} AntiGolpe <span className="footer-divider">·</span> Informação para sua proteção.</span><span><ShieldCheck size={13}/> Orientação, não garantia de segurança.</span></footer>
  </div>
 </div>;
}
export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) { return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>; }
export function DemoNotice({ email = false }: { email?: boolean }) { return <div className="demo-notice"><CircleHelp size={16}/><span>{email ? 'Demonstração — envio de e-mails não conectado.' : 'Demonstração — análise real não conectada.'}</span></div>; }
export function ExternalHelp({ href, title, children }: { href: string; title: string; children: ReactNode }) { return <a href={href} target="_blank" rel="noopener noreferrer" className="official-link"><span><strong>{title}</strong><small>{children}</small></span><ArrowUpRight size={18}/></a>; }
