import { useState, useRef } from 'react';
import imgEquipe from '@/imports/equipe.jpg';
import imgEntrada1 from '@/imports/entrada1.jpg.jpg';
import imgAntes from '@/imports/ANTES.jpg';
import imgCaso2 from '@/imports/caso2.jpg.jpg';
import imgDraSuele from '@/imports/dra-suele-abattijpeg.jpeg';
import imgDrDavi from '@/imports/dr-davipng.png';
import imgDrLester from '@/imports/dr-lester-linsjpeg.jpeg';
import imgDraAdriane from '@/imports/dra-adrianee.jpg';
import imgCasosComplexosAntes from '@/imports/casos-complexos-antes.jpg';
import imgCasosComplexosDepois from '@/imports/casos-complexos-depois.jpg';
import imgOrtodontiaAntes from '@/imports/ortodontia-antes.jpg';
import imgOrtodontiaDepois from '@/imports/ortodontia-depois.jpg';
import imgHarmonizacaoAntes from '@/imports/labial.png';
import imgHarmonizacaoDepois from '@/imports/caso8jpeg.jpeg';
import imgCargaImediataAntes from '@/imports/alessandro-before.jpg';
import imgCargaImediataDepois from '@/imports/alessandro-after.jpeg';
import imgLentesContatoAntes from '@/imports/lentes-contato-before.jpg';
import imgLentesContatoDepois from '@/imports/lentes-contato-after.png';

const WA_URL =
  'https://wa.me/5549988620056?text=Ol%C3%A1!%20Quero%20agendar%20uma%20consulta%20na%20Nossa%20Cl%C3%ADnica.';
const INSTAGRAM_URL = 'https://www.instagram.com/nossaclinica__/';

/* ─── icons ─────────────────────────────────────────────────────────────── */

function WaIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function StarFill({ dim = 15 }: { dim?: number }) {
  return (
    <svg width={dim} height={dim} viewBox="0 0 20 20" fill="#fbbc04" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="flex gap-px" aria-label={`${n} de 5 estrelas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <StarFill key={i} dim={i <= n ? 15 : 13} />
      ))}
    </span>
  );
}

function GoogleLogo() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

/* ─── carousel hook ──────────────────────────────────────────────────────── */

function useCarousel(total: number) {
  const [idx, setIdx] = useState(0);
  const sx = useRef<number | null>(null);

  const next = () => setIdx((i) => (i + 1) % total);
  const prev = () => setIdx((i) => (i - 1 + total) % total);

  const onTouchStart = (e: React.TouchEvent) => {
    sx.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (sx.current === null) return;
    const d = sx.current - e.changedTouches[0].clientX;
    if (Math.abs(d) > 44) d > 0 ? next() : prev();
    sx.current = null;
  };

  return { idx, setIdx, next, prev, onTouchStart, onTouchEnd };
}

/* ─── data ───────────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Antes & Depois', href: '#antes-depois' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

const SPECIALTIES = [
  { emoji: '🦷', name: 'Implantodontia', desc: 'Implantes de titânio com tecnologia de ponta e resultado completamente natural.' },
  { emoji: '😁', name: 'Ortodontia', desc: 'Aparelhos metálicos, cerâmicos e alinhadores invisíveis para o sorriso alinhado.' },
  { emoji: '🔬', name: 'Endodontia', desc: 'Tratamento de canal com precisão e conforto máximo para o paciente.' },
  { emoji: '👶', name: 'Odontopediatria', desc: 'Cuidado especializado e acolhedor para que crianças amem ir ao dentista.' },
  { emoji: '✨', name: 'Estética Dental', desc: 'Facetas, lentes de contato dental e clareamento profissional.' },
  { emoji: '💉', name: 'Harmonização Facial', desc: 'Botox, preenchimento labial e bioremodelação para um rosto mais jovem.' },
  { emoji: '🩺', name: 'Cirurgia Oral', desc: 'Extrações complexas e cirurgias realizadas com total segurança e precisão.' },
  { emoji: '🛡️', name: 'Periodontia', desc: 'Tratamento de gengivas e prevenção de doenças periodontais.' },
];

const TEAM = [
  {
    name: 'Dra. Suele Abatti',
    role: 'Coordenação Clínica, Ortodontia & Estética Facial',
    cro: 'CRO-SC 14.077',
    bio: 'Fundadora da Nossa Clínica, Dra. Suele lidera nossa equipe há 10 anos com paixão pelo sorriso de cada paciente.',
    photo: imgDraSuele,
  },
  {
    name: 'Dr. Davi Maia',
    role: 'Implantodontia & Periodontia',
    cro: 'CRO-SC 21.199',
    bio: 'Especialista com mais de 1000 implantes realizados, trazendo segurança e naturalidade em cada procedimento.',
    photo: imgDrDavi,
  },
  {
    name: 'Dr. Lesther Lins',
    role: 'Prótese e Clínica geral',
    cro: 'CRO-SC 23.606',
    bio: 'Especialista em prótese, proporcionando o prazer de voltar a ter dentes fixos ou móveis para restabelecer o prazer de comer bem.',
    photo: imgDrLester,
  },
  {
    name: 'Dra. Adriane',
    role: 'Ortodontia',
    cro: 'CRO-SC 15.443',
    bio: 'Especialista em ortodontia, alinhadores invisíveis e aparelhos estéticos, proporcionando sorrisos alinhados com conforto.',
    photo: imgDraAdriane,
  },
];

const BA_CASES = [
  {
    label: 'Prótese fixa sobre implantes — Carga Imediata',
    desc: 'Em menos de 48h seu sorriso e autoestima totalmente renovados!',
    before: imgCargaImediataAntes,
    after: imgCargaImediataDepois,
  },
  {
    label: 'Prótese Fixa Sobre Implantes',
    desc: 'Transformação completa do sorriso com prótese fixa sobre implantes.',
    before: imgAntes,
    after: imgCaso2,
  },
  {
    label: 'Casos Complexos - Pinos - Facetas - Coroas',
    desc: 'Devolvendo o prazer de sorrir com confiança e sem medo, unindo várias especialidades em um só caso .',
    before: imgCasosComplexosAntes,
    after: imgCasosComplexosDepois,
  },
  {
    label: 'Harmonização Facial',
    desc: 'Botox, bioestimuladores, preenchedores, fios e skincare para um rejuvenescimento natural.',
    before: imgHarmonizacaoAntes,
    after: imgHarmonizacaoDepois,
  },
  {
    label: 'Ortodontia e Clareamento Dental',
    desc: 'Resultado após remoção do aparelho e clareamento, dentes alinhados e rejuvenescidos.',
    before: imgOrtodontiaAntes,
    after: imgOrtodontiaDepois,
  },
  {
    label: 'Lentes de Contato em Porcelana ou Resina.',
    desc: 'O tratamento ideal para quem quer alterar cor, formato, e harmonia do sorriso.',
    before: imgLentesContatoAntes,
    after: imgLentesContatoDepois,
  },
];

const TESTIMONIALS = [
  {
    name: 'Daiane da Silva',
    n: 5,
    time: 'há 2 semanas',
    text: 'Gostei muito do profissionalismo da equipe, quanto por telefone como pessoalmente, desde a recepção até a cadeira do Dr ou da Dra, detalhes importantes que nenhum outro dentista que fui teve atenção, super recomendo🤍',
    initial: 'M',
    color: '#4285f4',
  },
  {
    name: 'Alessandra Severino',
    n: 5,
    time: 'há 1 mês',
    text: 'O atendimento assim como o acolhimento foi tudo nota 👍💯 A Dra. é muito profissional e atenciosa empenha se para conseguir o melhor resultado Todos sempre se disponibilizando a ajudar no que for necessário Parabéns a toda a equipe fiquei muito satisfeita 🥰🥰🥰',
    initial: 'J',
    color: '#34a853',
  },
  {
    name: 'Fernanda R.',
    n: 5,
    time: 'há 3 semanas',
    text: 'Fiz harmonização facial e adorei o resultado! Natural, delicado e exatamente o que eu queria. A Dra. Suele transmite muita segurança e tem habilidade de verdade.',
    initial: 'F',
    color: '#ea4335',
  },
  {
    name: 'Dario L.',
    n: 5,
    time: 'há 2 meses',
    text: 'Excelente atendimento na Nossa Clínica Odontologia! Quero agradecer a toda a equipe pelo carinho, atenção e profissionalismo, e em especial ao Dr. Lesther, pela dedicação e pelos excelentes procedimentos odontológicos realizados. Parabéns a todos pelo trabalho e pelo atendimento de qualidade!',
    initial: 'C',
    color: '#fbbc04',
  },
  {
    name: 'Luciana F.',
    n: 5,
    time: 'há 1 semana',
    text: 'Precisei de atendimento de urgência sábado à tarde. Me atenderam prontamente, com cuidado e competência. Fiquei sem dor na mesma hora, serviço de emergência impecável. Gratíssima!',
    initial: 'L',
    color: '#4285f4',
  },
  {
    name: 'Fernando Vitor',
    n: 5,
    time: 'há 3 meses',
    text: 'A experiência de ser atendido na Nossa Clínica é fantástica, os profissionais são super competentes, a estrutura do local é incrível, conta com uma rede muito boa de pessoas preparadas para te acolher e lhe dar um excelente atendimento. Recomendo sempre aos meus amigos pois além de você ser bem recebido, você se sente super confiante e confortável estando lá, sem dúvidas uma das melhores clínicas odontológicas da região!',
    initial: 'R',
    color: '#34a853',
  },
];

/* ─── components ─────────────────────────────────────────────────────────── */

function SectionTitle({ label, title, subtitle }: { label?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8 md:mb-12 text-center">
      {label && (
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-terra mb-3">
          {label}
        </span>
      )}
      <h2 className="font-display text-[1.75rem] md:text-[2.25rem] font-semibold text-brown leading-tight mb-3">
        {title}
      </h2>
      {subtitle && <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
}

/* ─── Navbar ─────────────────────────────────────────────────────────────── */

function Navbar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-[60px]">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2 font-display font-semibold text-brown text-lg leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="text-xl">🦷</span>
          <span>
            <span className="text-terra">Nossa</span>
            <span className="text-terra"> Clínica</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-muted">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-blue transition-colors duration-150">
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop WA + mobile burger */}
        <div className="flex items-center gap-3">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-green hover:bg-green-dark text-white px-4 py-2 rounded-full text-sm font-bold transition-colors duration-150"
          >
            <WaIcon size={17} />
            WhatsApp
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-cream-dark transition-colors"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <XIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="border-t border-border bg-cream px-4 pt-3 pb-5 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-3 px-3 text-brown font-medium rounded-xl hover:bg-cream-dark transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 bg-green text-white py-3.5 rounded-2xl font-bold text-base"
            onClick={() => setOpen(false)}
          >
            <WaIcon size={20} />
            Falar agora no WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────────────── */

function Hero() {
  const ba = useCarousel(BA_CASES.length);

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cream via-[#eef6fa] to-blue-soft" />

      {/* Main hero */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-4 md:pt-14 md:pb-10">
        <div className="md:grid md:grid-cols-[1fr_auto] md:gap-12 md:items-center">
          {/* Text */}
          <div>
            {/* Emergency badge */}
            <div className="inline-flex items-center gap-2 bg-terra/10 text-terra border border-terra/25 rounded-full px-3 py-1.5 text-xs font-bold mb-5">
              <span className="w-2 h-2 rounded-full bg-terra blink" />
              Atendimento de urgência disponível
            </div>

            {/* Trust chip */}
            <div className="inline-flex items-center gap-1.5 bg-blue/10 text-blue-dark rounded-full px-3 py-1 text-xs font-bold ml-2 mb-5">
              🏆 10 anos em Curitibanos
            </div>

            <h1 className="font-display text-[1.95rem] md:text-[2.75rem] lg:text-[3.1rem] leading-[1.13] font-semibold text-brown mb-5">
              O sorriso que você merece,{' '}
              <em className="text-blue not-italic">com quem você confia.</em>
            </h1>

            <p className="text-muted text-base md:text-lg leading-relaxed mb-6 max-w-lg">
              Equipe multidisciplinar especializada em <strong className="text-brown font-semibold">todas as áreas da odontologia</strong> e harmonização facial — tudo em um só lugar, no coração de Curitibanos‑SC.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6 text-sm">
              <div className="flex items-center gap-1.5">
                <StarFill dim={16} />
                <span className="font-bold text-brown">5.0</span>
                <span className="text-muted">no Google</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted">
                <span>👨‍⚕️</span>
                <span className="font-bold text-brown">5</span>
                <span>especialistas</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted">
                <span>😁</span>
                <span className="font-bold text-brown">+5.500</span>
                <span>sorrisos transformados</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted">
                <span>📍</span>
                <span>Curitibanos‑SC</span>
              </div>
            </div>

            {/* CTA — visible on md+ since sticky WA covers mobile */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2.5 bg-green hover:bg-green-dark text-white px-6 py-3.5 rounded-2xl font-bold text-base transition-colors duration-150 wa-pulse"
            >
              <WaIcon size={21} />
              Fale agora no WhatsApp
            </a>
          </div>

          {/* Hero image */}
          <div className="relative mt-6 md:mt-0 md:w-[340px] lg:w-[420px]">
            <div className="relative rounded-3xl overflow-hidden bg-blue-soft aspect-[4/3] md:aspect-[3/4]">
              <img
                src={imgEquipe}
                alt="Dentista examinando paciente na Nossa Clínica em Curitibanos"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/30 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 left-3 right-3 md:-left-8 md:right-auto md:bottom-8 bg-white rounded-2xl shadow-lg px-3.5 py-3 flex items-center gap-3">
              <span className="text-2xl">🦷</span>
              <div>
                <p className="font-bold text-brown text-sm leading-snug">+5.500 sorrisos transformados</p>
                <p className="text-muted text-xs">em 10 anos de história na cidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Before/After mini carousel ── */}
      <div className="max-w-6xl mx-auto px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold text-brown text-[1.15rem]">Resultados reais de pacientes</h3>
          <a href="#antes-depois" className="text-blue text-sm font-bold hover:underline">
            Ver todos →
          </a>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing"
          onTouchStart={ba.onTouchStart}
          onTouchEnd={ba.onTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${ba.idx * 100}%)` }}
          >
            {BA_CASES.map((c, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 gap-1 rounded-2xl overflow-hidden">
                  <div className="relative aspect-[4/3] bg-cream-dark">
                    <img
                      src={c.before}
                      alt={`Antes — ${c.label}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 bg-brown/70 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      Antes
                    </span>
                  </div>
                  <div className="relative aspect-[4/3] bg-cream-dark">
                    <img
                      src={c.after}
                      alt={`Depois — ${c.label}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-2 right-2 bg-blue text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      Depois
                    </span>
                  </div>
                </div>
                <p className="text-center text-sm font-semibold text-muted mt-2.5">{c.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dots + arrows */}
        <div className="flex items-center justify-center gap-3 mt-3">
          <button
            onClick={ba.prev}
            className="w-7 h-7 rounded-full bg-white border border-border flex items-center justify-center text-muted hover:text-blue hover:border-blue transition-colors"
            aria-label="Anterior"
          >
            ‹
          </button>
          <div className="flex gap-1.5">
            {BA_CASES.map((_, i) => (
              <button
                key={i}
                onClick={() => ba.setIdx(i)}
                className={`h-2 rounded-full transition-all duration-200 ${i === ba.idx ? 'w-5 bg-blue' : 'w-2 bg-border'}`}
                aria-label={`Caso ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={ba.next}
            className="w-7 h-7 rounded-full bg-white border border-border flex items-center justify-center text-muted hover:text-blue hover:border-blue transition-colors"
            aria-label="Próximo"
          >
            ›
          </button>
        </div>
        <p className="text-center text-xs text-muted mt-1.5">← deslize para ver mais →</p>
      </div>
    </section>
  );
}

/* ─── About ──────────────────────────────────────────────────────────────── */

function About() {
  return (
    <section id="sobre" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="md:grid md:grid-cols-2 md:gap-16 md:items-center">
          {/* Image */}
          <div className="relative mb-10 md:mb-0">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-cream-dark">
              <img
                src={imgEntrada1}
                alt="Equipe da Nossa Clínica em Curitibanos"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-5 -right-2 md:-right-6 bg-terra text-white rounded-2xl px-5 py-4 shadow-lg">
              <p className="font-display text-3xl font-bold leading-none">10</p>
              <p className="text-sm font-medium opacity-90">anos em Curitibanos</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-terra mb-3">
              Nossa história
            </span>
            <h2 className="font-display text-[1.75rem] md:text-[2.25rem] font-semibold text-brown leading-tight mb-5">
              Quem somos
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Fundada em 2016, a <strong className="text-brown">Nossa Clínica</strong> nasceu do sonho da{' '}
                <strong className="text-brown">Dra. Suele Abatti</strong> e sua família de oferecer atendimento odontológico completo, humanizado e acessível para curitibanos e região.
              </p>
              <p>
                Em uma década, construímos uma equipe multidisciplinar de especialistas apaixonados pelo que fazem — cada um trazendo excelência em sua área, para que você nunca precise procurar outra clínica.
              </p>
              <p>
                Mais do que tratar dentes, cuidamos de pessoas. Nossa clínica foi projetada para ser um espaço acolhedor, confortável e sem estresse — porque sabemos que uma boa experiência faz toda a diferença.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-3 mt-7">
              {[
                { icon: '❤️', label: 'Atendimento humanizado' },
                { icon: '🏅', label: 'Profissionais certificados' },
                { icon: '🔧', name: '', label: 'Tecnologia de ponta' },
                { icon: '🏡', label: 'Ambiente acolhedor' },
              ].map((v, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-cream rounded-xl px-3 py-3">
                  <span className="text-xl">{v.icon}</span>
                  <span className="text-sm font-semibold text-brown leading-tight">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Specialties ────────────────────────────────────────────────────────── */

function Specialties() {
  return (
    <section id="especialidades" className="py-16 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          label="O que oferecemos"
          title="Especialidades"
          subtitle="Todas as especialidades odontológicas e harmonização facial em um único lugar, por profissionais dedicados."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SPECIALTIES.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-border hover:border-blue/30 hover:shadow-md transition-all duration-200 group"
            >
              <span className="text-3xl mb-3 block">{s.emoji}</span>
              <h3 className="font-display font-semibold text-brown text-base mb-2 group-hover:text-blue transition-colors">
                {s.name}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue font-bold text-sm hover:underline"
          >
            Dúvidas? Fale com nossa equipe →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Team ───────────────────────────────────────────────────────────────── */

function Team() {
  return (
    <section id="equipe" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          label="Quem cuida de você"
          title="Nossa equipe"
          subtitle="Profissionais apaixonados pela saúde bucal e pela transformação da vida de cada paciente."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {TEAM.map((m, i) => (
            <div key={i} className="group">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-cream-dark mb-3">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 inset-x-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs leading-relaxed">{m.bio}</p>
                </div>
              </div>
              <h3 className="font-display font-semibold text-brown text-sm md:text-base leading-tight">{m.name}</h3>
              <p className="text-terra text-xs md:text-sm font-semibold mt-0.5">{m.role}</p>
              <p className="text-muted text-xs mt-0.5">{m.cro}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Before & After ─────────────────────────────────────────────────────── */

function BeforeAfter() {
  const car = useCarousel(BA_CASES.length);

  return (
    <section id="antes-depois" className="py-16 md:py-24 bg-[#1a2f3b]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-terra mb-3">
            Casos reais
          </span>
          <h2 className="font-display text-[1.75rem] md:text-[2.25rem] font-semibold text-white leading-tight mb-3">
            Antes & Depois
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            Resultados reais de pacientes da nossa clínica em Curitibanos. Deslize para ver mais casos.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden rounded-3xl cursor-grab active:cursor-grabbing"
          onTouchStart={car.onTouchStart}
          onTouchEnd={car.onTouchEnd}
        >
          <div
            className="flex transition-transform duration-350 ease-out"
            style={{ transform: `translateX(-${car.idx * 100}%)` }}
          >
            {BA_CASES.map((c, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <div className="grid md:grid-cols-2 gap-1 rounded-3xl overflow-hidden">
                  {/* Before */}
                  <div className="relative aspect-[4/3] bg-[#0e1c24]">
                    <img
                      src={c.before}
                      alt={`Antes — ${c.label}`}
                      className="w-full h-full object-cover opacity-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      ANTES
                    </div>
                  </div>
                  {/* After */}
                  <div className="relative aspect-[4/3] bg-[#0e1c24]">
                    <img
                      src={c.after}
                      alt={`Depois — ${c.label}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 right-4 bg-blue text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      DEPOIS
                    </div>
                  </div>
                </div>
                {/* Case info */}
                <div className="mt-5 text-center">
                  <h3 className="font-display font-semibold text-white text-lg">{c.label}</h3>
                  <p className="text-white/60 text-sm mt-1">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={car.prev}
            className="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 flex items-center justify-center text-lg transition-colors"
            aria-label="Anterior"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {BA_CASES.map((_, i) => (
              <button
                key={i}
                onClick={() => car.setIdx(i)}
                className={`h-2 rounded-full transition-all duration-200 ${i === car.idx ? 'w-6 bg-terra' : 'w-2 bg-white/25'}`}
                aria-label={`Caso ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={car.next}
            className="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 flex items-center justify-center text-lg transition-colors"
            aria-label="Próximo"
          >
            ›
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-green hover:bg-green-dark text-white px-7 py-4 rounded-2xl font-bold text-base transition-colors duration-150 wa-pulse"
          >
            <WaIcon size={21} />
            Quero transformar meu sorriso
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ───────────────────────────────────────────────────────── */

function Testimonials() {
  const car = useCarousel(TESTIMONIALS.length);

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          label="O que dizem nossos pacientes"
          title={
            <>
              Avaliações no{' '}
              <span className="inline-flex items-center gap-1.5">
                <GoogleLogo />
                Google
              </span>
            </>
          }
          subtitle="Mais de 280 avaliações 5 estrelas de pacientes reais de Curitibanos e região."
        />

        {/* Rating summary */}
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center mb-10 bg-white rounded-2xl px-8 py-6 border border-border max-w-md mx-auto">
          <div className="text-center">
            <p className="font-display text-5xl font-bold text-brown leading-none">5.0</p>
            <Stars n={5} />
            <p className="text-muted text-xs mt-1">+280 avaliações</p>
          </div>
          <div className="w-px h-16 bg-border hidden sm:block" />
          <div className="flex flex-col gap-1.5 w-full max-w-[180px]">
            {[5, 4, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <span className="text-xs text-muted w-2">{s}</span>
                <StarFill dim={11} />
                <div className="flex-1 h-1.5 rounded-full bg-cream-dark overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#fbbc04]"
                    style={{ width: s === 5 ? '96%' : s === 4 ? '3%' : '1%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile carousel */}
        <div
          className="relative overflow-hidden md:hidden"
          onTouchStart={car.onTouchStart}
          onTouchEnd={car.onTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-out gap-4"
            style={{ transform: `translateX(calc(-${car.idx * 100}% - ${car.idx * 16}px))` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>

        {/* Mobile dots */}
        <div className="flex justify-center gap-1.5 mt-5 md:hidden">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => car.setIdx(i)}
              className={`h-2 rounded-full transition-all duration-200 ${i === car.idx ? 'w-5 bg-blue' : 'w-2 bg-border'}`}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <div className="w-[85vw] md:w-auto flex-shrink-0 md:flex-shrink bg-white rounded-2xl p-5 border border-border shadow-sm">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
            style={{ background: t.color }}
          >
            {t.initial}
          </div>
          <div>
            <p className="font-semibold text-brown text-sm leading-tight">{t.name}</p>
            <p className="text-muted text-xs">{t.time}</p>
          </div>
        </div>
        <GoogleLogo />
      </div>
      <Stars n={t.n} />
      <p className="text-muted text-sm leading-relaxed mt-3">"{t.text}"</p>
    </div>
  );
}

/* ─── Location ───────────────────────────────────────────────────────────── */

function Location() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          label="Onde estamos"
          title="Localização & Contato"
          subtitle="Estamos no centro de Curitibanos-SC, prontos para atender você e sua família."
        />

        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-start">
          {/* Info */}
          <div className="mb-8 md:mb-0">
            {/* Contact cards */}
            <div className="space-y-3 mb-8">
              {[
                {
                  icon: '📍',
                  label: 'Endereço',
                  value: 'Rua Cel. Vidal Ramos, 334 — Centro\nCuritibanos-SC, 89520-000',
                },
                {
                  icon: '📱',
                  label: 'WhatsApp & Telefone',
                  value: '(49) 9 8862-0056',
                  link: WA_URL,
                  linkLabel: 'Enviar mensagem →',
                },
                {
                  icon: '✉️',
                  label: 'E-mail',
                  value: 'contato@nossaclinicacuritibanos.com.br',
                },
                {
                  icon: '📸',
                  label: 'Instagram',
                  value: 'encontre muito mais casos e depoimentos no @nossaclinica__',
                  link: INSTAGRAM_URL,
                  linkLabel: 'Seguir →',
                },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4 bg-cream rounded-2xl px-4 py-4">
                  <span className="text-xl mt-0.5 flex-shrink-0">{c.icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wide text-terra mb-0.5">{c.label}</p>
                    <p className="text-brown text-sm leading-relaxed whitespace-pre-line">{c.value}</p>
                    {c.link && (
                      <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-blue text-xs font-bold hover:underline">
                        {c.linkLabel}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="bg-[#1a2f3b] rounded-2xl p-5 text-white">
              <h3 className="font-display font-semibold text-base mb-4">Horários de atendimento</h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: 'Segunda a Sexta', hours: '08h30 – 20h00' },
                  { day: 'Sábado', hours: '08h00 – 12h00' },
                  { day: 'Domingo e feriados', hours: 'Fechado' },
                ].map((h, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-white/70">{h.day}</span>
                    <span className={`font-semibold ${h.hours === 'Fechado' ? 'text-white/40' : 'text-terra'}`}>
                      {h.hours}
                    </span>
                  </div>
                ))}
                <div className="pt-3 mt-3 border-t border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green blink flex-shrink-0" />
                  <span className="text-green text-xs font-bold">Urgências atendidas fora do horário</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-md border border-border aspect-[4/3] md:aspect-auto md:h-full md:min-h-[440px] bg-cream-dark">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-50.5875%2C-27.2900%2C-50.5728%2C-27.2792&layer=mapnik&marker=-27.284593%2C-50.580143"
              className="w-full h-full"
              style={{ border: 0, minHeight: '300px' }}
              loading="lazy"
              title="Localização da Nossa Clínica em Curitibanos-SC"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Emergency CTA banner */}
        <div className="mt-10 bg-terra/10 border border-terra/20 rounded-2xl px-5 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <span className="text-2xl flex-shrink-0">🚨</span>
            <div>
              <p className="font-bold text-brown text-sm">Dor de dente agora?</p>
              <p className="text-muted text-xs">Atendemos urgências — entre em contato imediatamente.</p>
            </div>
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-terra hover:bg-terra-dark text-white px-5 py-3 rounded-xl font-bold text-sm transition-colors"
          >
            <WaIcon size={18} />
            Emergência agora
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-[#121d24] text-white/70 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="md:grid md:grid-cols-3 md:gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-display font-semibold text-white text-xl mb-3">
              <span className="text-2xl">🦷</span>
              <span>
                <span className="text-blue-soft">Nossa</span>
                <span className="text-terra"> Clínica</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              10 anos cuidando do sorriso e da saúde bucal das famílias de Curitibanos e região com carinho, profissionalismo e tecnologia.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-white px-5 py-3 rounded-xl font-bold text-sm transition-colors wa-pulse"
            >
              <WaIcon size={18} />
              Fale no WhatsApp
            </a>
          </div>

          {/* Links */}
          <div className="mt-8 md:mt-0">
            <p className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Navegação</p>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-8 md:mt-0">
            <p className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Contato</p>
            <ul className="space-y-3 text-sm">
              <li>📍 Rua Cel. Vidal Ramos, 334 — Centro, Curitibanos-SC</li>
              <li>📱 (49) 9 8862-0056</li>
              <li>✉️ contato@nossaclinicacuritibanos.com.br</li>
              <li className="pt-1 flex gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-lg"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors text-lg" aria-label="Facebook">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row gap-2 justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Nossa Clínica Odontológica — Curitibanos, SC. Todos os direitos reservados.</p>
          <p>CRO-SC-1960 | CNPJ 24.274.523/0001-94</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Sticky WhatsApp ────────────────────────────────────────────────────── */

function StickyWA() {
  return (
    <>
      {/* Mobile: full-width bar at bottom */}
      <div className="fixed bottom-0 inset-x-0 z-50 p-3 bg-white/95 backdrop-blur-sm border-t border-border md:hidden">
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 bg-green hover:bg-green-dark text-white rounded-2xl font-bold text-base py-4 w-full transition-colors duration-150 wa-pulse"
          style={{ minHeight: '56px' }}
        >
          <WaIcon size={22} />
          Fale agora no WhatsApp
        </a>
      </div>

      {/* Desktop: pill at bottom-right */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-7 right-7 z-50 items-center gap-2.5 bg-green hover:bg-green-dark text-white px-5 py-3.5 rounded-full font-bold text-sm shadow-xl transition-colors duration-150 wa-pulse"
      >
        <WaIcon size={20} />
        WhatsApp
      </a>
    </>
  );
}

/* ─── App ────────────────────────────────────────────────────────────────── */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar open={menuOpen} setOpen={setMenuOpen} />

      <main className="pt-[60px] pb-[80px] md:pb-0">
        <Hero />
        <About />
        <Specialties />
        <Team />
        <BeforeAfter />
        <Testimonials />
        <Location />
      </main>

      <Footer />
      <StickyWA />
    </>
  );
}
