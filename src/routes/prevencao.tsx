import { createFileRoute } from '@tanstack/react-router';
import { Check, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/antigolpe/shell';
import { Newsletter } from '@/components/antigolpe/newsletter';
import { tips, pageHead } from '@/lib/antigolpe/content';
export const Route = createFileRoute('/prevencao')({ head: () => pageHead('Dicas de prevenção', 'Proteja suas contas, senhas, dados e pagamentos com atitudes simples. Conheça a demonstração de dicas semanais.'), component: Prevention });
function Prevention() { return <><SectionHeading eyebrow="PEQUENAS ATITUDES. MAIS PROTEÇÃO." title="Dicas de prevenção" description="Segurança digital não precisa ser complicada. Comece pelo básico."/><div className="prevention-banner"><ShieldCheck size={25}/><div><strong>Desconfie da urgência. Confirme antes de agir.</strong><p>Uma pausa e uma checagem por outro canal fazem a diferença.</p></div></div><div className="tips-grid">{tips.map(tip => <article className="prevention-card" key={tip.title}><span className="icon-tile green"><tip.icon size={22}/></span><h3>{tip.title}</h3><p>{tip.text}</p><div className="tip-action"><Check size={16}/><span><strong>Faça isto:</strong> {tip.action}</span></div></article>)}</div><Newsletter/></>; }
