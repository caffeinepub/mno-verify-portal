import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ChevronRight,
  Flame,
  Minus,
  Plus,
  Shield,
  Star,
  Trophy,
} from "lucide-react";

const games = [
  {
    id: 1,
    title: "Lucky Sevens",
    category: "Slots",
    rtp: "96.5%",
    players: "2.4k",
    emoji: "🎰",
    hot: true,
    bg: "#f3f0ff",
    border: "#c4b5fd",
    accent: "#7c3aed",
  },
  {
    id: 2,
    title: "Texas Hold'em",
    category: "Poker",
    rtp: "97.0%",
    players: "1.8k",
    emoji: "🃏",
    hot: false,
    bg: "#f0f9ff",
    border: "#bae6fd",
    accent: "#0369a1",
  },
  {
    id: 3,
    title: "European Roulette",
    category: "Roulette",
    rtp: "97.3%",
    players: "3.1k",
    emoji: "🎡",
    hot: true,
    bg: "#fff1f2",
    border: "#fecdd3",
    accent: "#dc2626",
  },
  {
    id: 4,
    title: "Blackjack Pro",
    category: "Blackjack",
    rtp: "99.5%",
    players: "2.2k",
    emoji: "🂡",
    hot: false,
    bg: "#f0fdf4",
    border: "#bbf7d0",
    accent: "#15803d",
  },
  {
    id: 5,
    title: "Speed Bingo",
    category: "Bingo",
    rtp: "94.0%",
    players: "987",
    emoji: "🎱",
    hot: false,
    bg: "#fffbeb",
    border: "#fde68a",
    accent: "#b45309",
  },
  {
    id: 6,
    title: "Live Casino",
    category: "Live",
    rtp: "97.8%",
    players: "4.5k",
    emoji: "🎬",
    hot: true,
    bg: "#fdf4ff",
    border: "#f0abfc",
    accent: "#a21caf",
  },
];

export default function GamblingPage() {
  const navigate = useNavigate();

  return (
    <div
      data-ocid="gambling.page"
      className="min-h-screen"
      style={{
        background: "#f5f3ff",
        fontFamily: "'Satoshi', system-ui, sans-serif",
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur-md"
        style={{
          borderColor: "#e2e8f0",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate({ to: "/" })}
              className="flex items-center gap-1.5 text-sm font-semibold transition-colors"
              style={{ color: "#7c3aed" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <div className="w-px h-4 bg-slate-200" />
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                }}
              >
                🎲
              </div>
              <span
                className="font-black text-base tracking-tight font-display"
                style={{ color: "#5b21b6" }}
              >
                VegasVault
              </span>
            </div>
          </div>

          {/* Balance display */}
          <div
            data-ocid="gambling.balance_card"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl"
            style={{
              background: "#f3f0ff",
              border: "1px solid #c4b5fd",
            }}
          >
            <span
              className="text-xs font-semibold"
              style={{ color: "#7c3aed" }}
            >
              Balance
            </span>
            <span
              className="text-sm font-black font-display"
              style={{ color: "#4c1d95" }}
            >
              £150.00
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Hero illustration + promo banner */}
        <div
          className="relative rounded-2xl overflow-hidden animate-fade-up"
          style={{
            background: "white",
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          }}
        >
          {/* Illustration */}
          <div className="h-44 overflow-hidden">
            <svg
              viewBox="0 0 800 176"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              style={{ display: "block" }}
              preserveAspectRatio="xMidYMid slice"
              role="img"
              aria-label="Casino illustration"
            >
              <defs>
                <linearGradient id="gamble-bg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2e1065" />
                  <stop offset="100%" stopColor="#4c1d95" />
                </linearGradient>
                <linearGradient id="chip-gold" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <radialGradient id="spotlight" cx="50%" cy="0%" r="70%">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#2e1065" stopOpacity="0" />
                </radialGradient>
              </defs>

              <rect width="800" height="176" fill="url(#gamble-bg)" />
              <rect width="800" height="176" fill="url(#spotlight)" />

              {/* Star dust */}
              <circle cx="100" cy="20" r="2" fill="#c4b5fd" fillOpacity="0.6" />
              <circle
                cx="150"
                cy="50"
                r="1.5"
                fill="#a78bfa"
                fillOpacity="0.5"
              />
              <circle cx="300" cy="15" r="2" fill="#c4b5fd" fillOpacity="0.7" />
              <circle
                cx="500"
                cy="30"
                r="1.5"
                fill="#a78bfa"
                fillOpacity="0.6"
              />
              <circle cx="650" cy="20" r="2" fill="#c4b5fd" fillOpacity="0.5" />
              <circle
                cx="720"
                cy="55"
                r="1.5"
                fill="#a78bfa"
                fillOpacity="0.4"
              />
              <circle
                cx="200"
                cy="140"
                r="1.5"
                fill="#c4b5fd"
                fillOpacity="0.3"
              />
              <circle
                cx="600"
                cy="150"
                r="2"
                fill="#a78bfa"
                fillOpacity="0.4"
              />

              {/* Dice 1 */}
              <g transform="translate(60, 38)">
                <rect width="72" height="72" rx="12" fill="#7c3aed" />
                <rect
                  x="2"
                  y="2"
                  width="68"
                  height="68"
                  rx="10"
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="1.5"
                />
                {/* Dots - 6 face */}
                <circle cx="22" cy="22" r="6" fill="white" />
                <circle cx="36" cy="22" r="6" fill="white" />
                <circle cx="50" cy="22" r="6" fill="white" />
                <circle cx="22" cy="36" r="6" fill="white" />
                <circle cx="50" cy="36" r="6" fill="white" />
                <circle cx="22" cy="50" r="6" fill="white" />
                <circle cx="36" cy="50" r="6" fill="white" />
                <circle cx="50" cy="50" r="6" fill="white" />
              </g>

              {/* Dice 2 (rotated) */}
              <g transform="translate(155, 55) rotate(-12)">
                <rect width="62" height="62" rx="10" fill="#6d28d9" />
                <rect
                  x="2"
                  y="2"
                  width="58"
                  height="58"
                  rx="8"
                  fill="none"
                  stroke="#c4b5fd"
                  strokeWidth="1"
                />
                {/* 3 face */}
                <circle cx="16" cy="16" r="5" fill="white" />
                <circle cx="31" cy="31" r="5" fill="white" />
                <circle cx="46" cy="46" r="5" fill="white" />
              </g>

              {/* Playing cards */}
              <g transform="translate(280, 25)">
                {/* Card back */}
                <rect
                  x="20"
                  y="10"
                  width="70"
                  height="110"
                  rx="8"
                  fill="#5b21b6"
                />
                <rect
                  x="24"
                  y="14"
                  width="62"
                  height="102"
                  rx="6"
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                />
                {/* Card front - Ace of Spades */}
                <rect width="70" height="110" rx="8" fill="white" />
                <rect
                  x="2"
                  y="2"
                  width="66"
                  height="106"
                  rx="6"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
                <text
                  x="10"
                  y="22"
                  fill="#1e1b4b"
                  fontSize="14"
                  fontWeight="bold"
                >
                  A
                </text>
                <text x="10" y="36" fill="#1e1b4b" fontSize="12">
                  ♠
                </text>
                {/* Big spade */}
                <text
                  x="35"
                  y="70"
                  textAnchor="middle"
                  fill="#1e1b4b"
                  fontSize="36"
                >
                  ♠
                </text>
                {/* Bottom corner */}
                <text
                  x="60"
                  y="98"
                  textAnchor="end"
                  fill="#1e1b4b"
                  fontSize="14"
                  fontWeight="bold"
                  transform="rotate(180, 35, 95)"
                >
                  A
                </text>
              </g>

              {/* Casino chip */}
              <g transform="translate(430, 40)">
                <circle cx="50" cy="50" r="50" fill="#dc2626" />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="5"
                  strokeDasharray="12 8"
                />
                <circle cx="50" cy="50" r="34" fill="#b91c1c" />
                <circle cx="50" cy="50" r="28" fill="#dc2626" />
                <text
                  x="50"
                  y="55"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                >
                  100
                </text>
              </g>

              {/* Roulette wheel suggestion */}
              <g transform="translate(560, 10)">
                <circle cx="85" cy="85" r="75" fill="#1e1b4b" />
                <circle
                  cx="85"
                  cy="85"
                  r="72"
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="2"
                />
                {/* Wheel segments - alternating red/black */}
                {[
                  0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130,
                  140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250,
                  260, 270, 280, 290, 300, 310, 320, 330, 340, 350,
                ].map((angle, i) => (
                  <path
                    key={angle}
                    d={`M 85 85 L ${85 + 68 * Math.cos((angle * Math.PI) / 180)} ${85 + 68 * Math.sin((angle * Math.PI) / 180)} A 68 68 0 0 1 ${85 + 68 * Math.cos(((angle + 10) * Math.PI) / 180)} ${85 + 68 * Math.sin(((angle + 10) * Math.PI) / 180)} Z`}
                    fill={i % 2 === 0 ? "#dc2626" : "#1f2937"}
                  />
                ))}
                <circle cx="85" cy="85" r="28" fill="#2e1065" />
                <circle cx="85" cy="85" r="22" fill="#1e1b4b" />
                <circle cx="85" cy="85" r="8" fill="#fbbf24" />
                <circle cx="85" cy="85" r="4" fill="white" />
              </g>

              {/* Gold coin stack */}
              <g transform="translate(248, 105)">
                <ellipse cx="20" cy="16" rx="20" ry="8" fill="#d97706" />
                <rect x="0" y="8" width="40" height="8" fill="#f59e0b" />
                <ellipse cx="20" cy="8" rx="20" ry="8" fill="url(#chip-gold)" />
                <ellipse
                  cx="20"
                  cy="8"
                  rx="14"
                  ry="5"
                  fill="none"
                  stroke="#fde68a"
                  strokeWidth="1.5"
                />

                <ellipse cx="20" cy="30" rx="20" ry="8" fill="#d97706" />
                <rect x="0" y="22" width="40" height="8" fill="#f59e0b" />
                <ellipse
                  cx="20"
                  cy="22"
                  rx="20"
                  ry="8"
                  fill="url(#chip-gold)"
                />
                <ellipse
                  cx="20"
                  cy="22"
                  rx="14"
                  ry="5"
                  fill="none"
                  stroke="#fde68a"
                  strokeWidth="1.5"
                />
              </g>

              {/* "JACKPOT" text banner */}
              <g transform="translate(230, 148)">
                <rect width="140" height="24" rx="12" fill="#7c3aed" />
                <text
                  x="70"
                  y="17"
                  textAnchor="middle"
                  fill="#fbbf24"
                  fontSize="12"
                  fontWeight="bold"
                  letterSpacing="2"
                >
                  JACKPOT
                </text>
              </g>
            </svg>
          </div>
          {/* Promo content */}
          <div className="p-5 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-600 text-xs font-bold uppercase tracking-widest">
                  Welcome Offer
                </span>
              </div>
              <h2
                className="text-xl font-display font-black mb-1"
                style={{ color: "#1e1b4b" }}
              >
                100% Match Bonus
              </h2>
              <p className="text-sm text-slate-500 mb-3">
                Up to £200 on your first deposit
              </p>
              <Button
                size="sm"
                className="font-display font-bold text-xs h-8 px-4 text-white"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                  border: "none",
                }}
              >
                Claim Bonus
              </Button>
            </div>
            <div className="text-5xl select-none">🎰</div>
          </div>
          <p className="px-5 pb-4 text-slate-400 text-xs">
            T&Cs apply. 18+ only. Gamble responsibly.
          </p>
        </div>

        {/* Deposit / Withdraw */}
        <div
          className="flex gap-3 animate-fade-up"
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          <Button
            data-ocid="gambling.deposit_button"
            className="flex-1 h-11 font-display font-bold text-white"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
              border: "none",
              boxShadow: "0 4px 14px rgba(124, 58, 237, 0.3)",
            }}
          >
            <Plus className="w-4 h-4 mr-2" />
            Deposit
          </Button>
          <Button
            data-ocid="gambling.withdraw_button"
            variant="outline"
            className="flex-1 h-11 font-display font-bold"
            style={{
              background: "white",
              border: "1.5px solid #c4b5fd",
              color: "#7c3aed",
            }}
          >
            <Minus className="w-4 h-4 mr-2" />
            Withdraw
          </Button>
        </div>

        {/* Hot games indicator */}
        <div
          className="flex items-center gap-2 animate-fade-up"
          style={{ animationDelay: "0.15s", animationFillMode: "both" }}
        >
          <Flame className="w-4 h-4 text-orange-500" />
          <h2 className="font-display font-bold text-slate-800 text-base">
            Popular Games
          </h2>
          <button
            type="button"
            className="ml-auto flex items-center gap-1 text-xs font-semibold"
            style={{ color: "#7c3aed" }}
          >
            View all
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Games grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          {games.map((game, index) => (
            <div
              key={game.id}
              data-ocid={`gambling.game_item.${index + 1}`}
              className="relative rounded-xl overflow-hidden cursor-pointer group transition-all duration-200 hover:-translate-y-1 bg-white"
              style={{
                border: `1.5px solid ${game.border}`,
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                minHeight: "120px",
                background: game.bg,
              }}
            >
              {/* Hot badge */}
              {game.hot && (
                <div className="absolute top-2 right-2 z-10">
                  <Badge
                    className="text-xs font-bold px-1.5 py-0.5 border-0"
                    style={{
                      background: "#f59e0b",
                      color: "white",
                    }}
                  >
                    <Flame className="w-2.5 h-2.5 mr-0.5" />
                    HOT
                  </Badge>
                </div>
              )}

              <div className="p-3.5 flex flex-col h-full">
                <div className="text-3xl mb-2 select-none">{game.emoji}</div>
                <div className="mt-auto">
                  <p
                    className="font-display font-bold text-sm truncate"
                    style={{ color: "#1e1b4b" }}
                  >
                    {game.title}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span
                      className="text-xs px-1.5 py-0.5 rounded-full font-semibold"
                      style={{
                        background: "white",
                        color: game.accent,
                        border: `1px solid ${game.border}`,
                      }}
                    >
                      {game.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      {game.players} playing
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.75)" }}
              >
                <Button
                  size="sm"
                  className="font-display font-bold text-xs h-8 px-4 text-white"
                  style={{
                    background: game.accent,
                    border: "none",
                  }}
                >
                  Play Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* RTP info */}
        <div
          className="flex items-start gap-3 p-4 rounded-xl animate-fade-up"
          style={{
            background: "#fffbeb",
            border: "1px solid #fde68a",
            animationDelay: "0.25s",
            animationFillMode: "both",
          }}
        >
          <Star className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-500" />
          <div>
            <p className="text-xs font-bold text-amber-900 mb-0.5">
              Highest RTP Available
            </p>
            <p className="text-xs text-amber-700">
              Blackjack Pro offers 99.5% return to player — the best odds in the
              lobby
            </p>
          </div>
        </div>

        {/* Responsible gambling */}
        <div
          className="flex items-center gap-3 p-4 rounded-xl animate-fade-up"
          style={{
            background: "#f3f0ff",
            border: "1px solid #c4b5fd",
            animationDelay: "0.3s",
            animationFillMode: "both",
          }}
        >
          <Shield className="w-5 h-5 flex-shrink-0 text-violet-600" />
          <div>
            <p className="text-xs font-bold text-violet-900">
              Gamble Responsibly · 18+ Only
            </p>
            <p className="text-xs mt-0.5 text-violet-600">
              Set deposit limits · Self-exclusion available · BeGambleAware.org
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="border-t mt-6 py-5"
        style={{ borderColor: "#e2e8f0", background: "white" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-xs text-slate-400">
          © {new Date().getFullYear()}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-500 hover:underline font-semibold"
          >
            caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
