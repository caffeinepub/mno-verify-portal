import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ChevronRight,
  Crown,
  Film,
  Newspaper,
  Play,
  Star,
  Tv,
  Zap,
} from "lucide-react";

const continueWatching = [
  {
    id: 1,
    title: "The Crown",
    episode: "S4 E3 · 42m left",
    progress: 65,
    emoji: "👑",
    genre: "Drama",
    rating: "15",
    bg: "#eef2ff",
    border: "#c7d2fe",
    accent: "#4338ca",
  },
  {
    id: 2,
    title: "Planet Earth III",
    episode: "E2 · 28m left",
    progress: 45,
    emoji: "🌍",
    genre: "Documentary",
    rating: "U",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    accent: "#15803d",
  },
  {
    id: 3,
    title: "Dune: Part Two",
    episode: "1h 12m left",
    progress: 30,
    emoji: "🏜️",
    genre: "Sci-Fi",
    rating: "12A",
    bg: "#fffbeb",
    border: "#fde68a",
    accent: "#b45309",
  },
  {
    id: 4,
    title: "Succession",
    episode: "S3 E8 · 55m left",
    progress: 20,
    emoji: "🏢",
    genre: "Drama",
    rating: "18",
    bg: "#fafafa",
    border: "#e2e8f0",
    accent: "#475569",
  },
];

const recommended = [
  {
    id: 1,
    title: "Oppenheimer",
    meta: "2023 · 3h",
    score: "8.9",
    emoji: "☢️",
    genre: "Drama",
    new: false,
    bg: "#fafafa",
    border: "#e2e8f0",
    accent: "#374151",
  },
  {
    id: 2,
    title: "Shogun",
    meta: "Series · 10 eps",
    score: "9.1",
    emoji: "⚔️",
    genre: "Historical",
    new: true,
    bg: "#fff1f2",
    border: "#fecdd3",
    accent: "#b91c1c",
  },
  {
    id: 3,
    title: "Poor Things",
    meta: "2023 · 2h 21m",
    score: "7.9",
    emoji: "🔬",
    genre: "Fantasy",
    new: false,
    bg: "#eef2ff",
    border: "#c7d2fe",
    accent: "#4338ca",
  },
  {
    id: 4,
    title: "The Bear",
    meta: "Series · S3",
    score: "8.7",
    emoji: "🍴",
    genre: "Drama",
    new: true,
    bg: "#fff7ed",
    border: "#fed7aa",
    accent: "#c2410c",
  },
];

const tabs = [
  { id: "movies", label: "Movies", ocid: "content.movies_tab", icon: Film },
  { id: "series", label: "Series", ocid: "content.series_tab", icon: Tv },
  { id: "sports", label: "Sports", ocid: "content.sports_tab", icon: Zap },
  { id: "news", label: "News", ocid: "content.news_tab", icon: Newspaper },
];

export default function ContentPage() {
  const navigate = useNavigate();

  return (
    <div
      data-ocid="content.page"
      className="min-h-screen"
      style={{
        background: "#fff7f0",
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
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate({ to: "/" })}
              className="flex items-center gap-1.5 text-sm font-semibold transition-colors text-orange-600 hover:text-orange-700"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <div className="w-px h-4 bg-slate-200" />
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #ea580c, #c2410c)",
                }}
              >
                <Play className="w-3.5 h-3.5 text-white fill-white" />
              </div>
              <span
                className="font-black text-base tracking-tight font-display"
                style={{ color: "#c2410c" }}
              >
                StreamVault
              </span>
            </div>
          </div>

          {/* Premium badge */}
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl"
            style={{
              background: "#fff7ed",
              border: "1px solid #fed7aa",
            }}
          >
            <Crown className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-xs font-bold text-amber-700">
              Premium Member
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        {/* Featured hero banner */}
        <div
          data-ocid="content.featured_banner"
          className="relative rounded-2xl overflow-hidden animate-fade-up bg-white"
          style={{
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          }}
        >
          {/* Illustration */}
          <div className="h-48 overflow-hidden">
            <svg
              viewBox="0 0 800 192"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              style={{ display: "block" }}
              preserveAspectRatio="xMidYMid slice"
              role="img"
              aria-label="Content streaming illustration"
            >
              <defs>
                <linearGradient id="content-bg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fff7ed" />
                  <stop offset="100%" stopColor="#ffedd5" />
                </linearGradient>
                <linearGradient id="screen-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1e1b4b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="btn-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ea580c" />
                  <stop offset="100%" stopColor="#c2410c" />
                </linearGradient>
              </defs>

              <rect width="800" height="192" fill="url(#content-bg)" />

              {/* Decorative background circles */}
              <circle
                cx="700"
                cy="180"
                r="100"
                fill="#fed7aa"
                fillOpacity="0.4"
              />
              <circle cx="80" cy="10" r="80" fill="#fdba74" fillOpacity="0.2" />
              <circle
                cx="400"
                cy="200"
                r="120"
                fill="#fb923c"
                fillOpacity="0.08"
              />

              {/* Film strip left */}
              <g transform="translate(20, 20)">
                <rect width="55" height="152" rx="4" fill="#1e1b4b" />
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <g key={i}>
                    <rect
                      x="5"
                      y={8 + i * 18}
                      width="12"
                      height="12"
                      rx="2"
                      fill="#374151"
                    />
                    <rect
                      x="38"
                      y={8 + i * 18}
                      width="12"
                      height="12"
                      rx="2"
                      fill="#374151"
                    />
                    <rect
                      x="19"
                      y={10 + i * 18}
                      width="17"
                      height="10"
                      rx="2"
                      fill={
                        i % 3 === 0
                          ? "#ea580c"
                          : i % 3 === 1
                            ? "#f97316"
                            : "#fb923c"
                      }
                      fillOpacity="0.7"
                    />
                  </g>
                ))}
              </g>

              {/* Main TV screen */}
              <g transform="translate(110, 15)">
                {/* TV body */}
                <rect width="280" height="162" rx="14" fill="#1e1b4b" />
                {/* Screen bezel */}
                <rect
                  x="8"
                  y="8"
                  width="264"
                  height="146"
                  rx="8"
                  fill="url(#screen-grad)"
                />
                {/* Content on screen */}
                <rect
                  x="12"
                  y="12"
                  width="256"
                  height="138"
                  rx="6"
                  fill="#0f172a"
                />
                {/* Fake widescreen movie */}
                <rect x="12" y="42" width="256" height="78" fill="#1a1035" />
                {/* Mountain silhouette */}
                <polygon
                  points="90,120 140,65 180,90 220,55 270,120"
                  fill="#2d1f5e"
                />
                <polygon
                  points="12,120 70,80 110,100 140,65 150,120"
                  fill="#3b2d70"
                />
                {/* Stars in movie */}
                <circle
                  cx="50"
                  cy="55"
                  r="1.5"
                  fill="white"
                  fillOpacity="0.8"
                />
                <circle cx="100" cy="50" r="1" fill="white" fillOpacity="0.6" />
                <circle
                  cx="200"
                  cy="45"
                  r="1.5"
                  fill="white"
                  fillOpacity="0.7"
                />
                <circle cx="240" cy="55" r="1" fill="white" fillOpacity="0.5" />
                {/* Letterbox bars */}
                <rect x="12" y="12" width="256" height="30" fill="#0f172a" />
                <rect x="12" y="120" width="256" height="30" fill="#0f172a" />
                {/* Title text */}
                <rect
                  x="30"
                  y="22"
                  width="100"
                  height="8"
                  rx="3"
                  fill="#374151"
                />
                {/* TV stand */}
                <rect
                  x="120"
                  y="162"
                  width="40"
                  height="14"
                  rx="3"
                  fill="#374151"
                />
                <rect
                  x="95"
                  y="174"
                  width="90"
                  height="8"
                  rx="4"
                  fill="#4b5563"
                />
              </g>

              {/* Play button overlay on TV */}
              <g transform="translate(233, 80)">
                <circle
                  cx="28"
                  cy="28"
                  r="28"
                  fill="url(#btn-grad)"
                  fillOpacity="0.9"
                />
                <polygon points="20,16 20,40 44,28" fill="white" />
              </g>

              {/* Popcorn box */}
              <g transform="translate(440, 45)">
                {/* Box body */}
                <path d="M10,50 L0,160 L80,160 L70,50 Z" fill="#ea580c" />
                {/* Stripes */}
                <path
                  d="M20,50 L10,160 L20,160 L30,50 Z"
                  fill="#c2410c"
                  fillOpacity="0.6"
                />
                <path
                  d="M40,50 L30,160 L40,160 L50,50 Z"
                  fill="#c2410c"
                  fillOpacity="0.6"
                />
                <path
                  d="M60,50 L50,160 L60,160 L70,50 Z"
                  fill="#c2410c"
                  fillOpacity="0.6"
                />
                {/* Box top rim */}
                <rect
                  x="5"
                  y="45"
                  width="70"
                  height="12"
                  rx="4"
                  fill="#b45309"
                />
                <rect
                  x="5"
                  y="45"
                  width="70"
                  height="6"
                  rx="4"
                  fill="#fbbf24"
                />
                {/* Popcorn pieces */}
                <ellipse cx="25" cy="38" rx="12" ry="10" fill="#fef3c7" />
                <ellipse cx="40" cy="28" rx="14" ry="11" fill="#fffbeb" />
                <ellipse cx="55" cy="36" rx="12" ry="10" fill="#fef3c7" />
                <ellipse cx="15" cy="28" rx="10" ry="9" fill="#fffbeb" />
                <ellipse cx="65" cy="28" rx="10" ry="9" fill="#fef3c7" />
                <ellipse cx="35" cy="18" rx="11" ry="10" fill="#fffbeb" />
                <ellipse cx="50" cy="20" rx="10" ry="9" fill="#fef3c7" />
              </g>

              {/* Streaming bar UI */}
              <g transform="translate(560, 60)">
                <rect
                  width="190"
                  height="120"
                  rx="12"
                  fill="white"
                  fillOpacity="0.85"
                />
                {/* Now Watching label */}
                <rect
                  x="12"
                  y="14"
                  width="70"
                  height="8"
                  rx="3"
                  fill="#ea580c"
                />
                <text x="12" y="21" fill="white" fontSize="7" fontWeight="bold">
                  NOW PLAYING
                </text>
                {/* Title */}
                <rect
                  x="12"
                  y="30"
                  width="130"
                  height="10"
                  rx="3"
                  fill="#1e1b4b"
                  fillOpacity="0.8"
                />
                <rect
                  x="12"
                  y="46"
                  width="90"
                  height="7"
                  rx="2"
                  fill="#94a3b8"
                  fillOpacity="0.5"
                />
                {/* Progress bar */}
                <rect
                  x="12"
                  y="68"
                  width="166"
                  height="6"
                  rx="3"
                  fill="#e2e8f0"
                />
                <rect
                  x="12"
                  y="68"
                  width="90"
                  height="6"
                  rx="3"
                  fill="#ea580c"
                />
                <circle
                  cx="102"
                  cy="71"
                  r="5"
                  fill="white"
                  stroke="#ea580c"
                  strokeWidth="2"
                />
                {/* Time */}
                <rect
                  x="12"
                  y="82"
                  width="30"
                  height="5"
                  rx="2"
                  fill="#94a3b8"
                  fillOpacity="0.4"
                />
                <rect
                  x="148"
                  y="82"
                  width="30"
                  height="5"
                  rx="2"
                  fill="#94a3b8"
                  fillOpacity="0.4"
                />
                {/* Controls */}
                <circle cx="55" cy="100" r="10" fill="#f1f5f9" />
                <polygon points="49,100 49,106 55,103" fill="#475569" />
                <polygon points="55,100 55,106 61,103" fill="#475569" />
                <circle cx="95" cy="100" r="14" fill="#ea580c" />
                <polygon points="88,100 88,107 102,103.5" fill="white" />
                <circle cx="135" cy="100" r="10" fill="#f1f5f9" />
                <polygon points="129,103 135,100 129,100" fill="#475569" />
                <polygon points="135,103 141,100 135,100" fill="#475569" />
              </g>

              {/* Film strip right */}
              <g transform="translate(725, 20)">
                <rect width="55" height="152" rx="4" fill="#1e1b4b" />
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <g key={i}>
                    <rect
                      x="5"
                      y={8 + i * 18}
                      width="12"
                      height="12"
                      rx="2"
                      fill="#374151"
                    />
                    <rect
                      x="38"
                      y={8 + i * 18}
                      width="12"
                      height="12"
                      rx="2"
                      fill="#374151"
                    />
                    <rect
                      x="19"
                      y={10 + i * 18}
                      width="17"
                      height="10"
                      rx="2"
                      fill={
                        i % 3 === 0
                          ? "#f97316"
                          : i % 3 === 1
                            ? "#ea580c"
                            : "#fb923c"
                      }
                      fillOpacity="0.7"
                    />
                  </g>
                ))}
              </g>
            </svg>
          </div>

          <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Movie poster placeholder */}
            <div
              className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl flex-shrink-0 flex items-center justify-center text-4xl"
              style={{
                background: "#fff1f2",
                border: "1.5px solid #fecdd3",
                boxShadow: "0 4px 12px rgba(185, 28, 28, 0.12)",
              }}
            >
              ⚔️
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  className="text-xs font-bold border-0"
                  style={{ background: "#ef4444", color: "white" }}
                >
                  NEW EPISODE
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs text-yellow-600 font-bold">9.1</span>
                </div>
              </div>
              <h2
                className="text-xl sm:text-2xl font-display font-black mb-1"
                style={{ color: "#1e1b4b", letterSpacing: "-0.02em" }}
              >
                Shogun
              </h2>
              <p className="text-sm mb-2 text-slate-500">
                Series · Season 1 · Episode 10 just released
              </p>
              <p className="text-sm mb-4 max-w-md leading-relaxed text-slate-500">
                An epic tale of power, honor, and survival in feudal Japan. A
                shipwrecked English navigator becomes embroiled in a conflict
                that will change history.
              </p>
              <div className="flex items-center gap-2">
                <Button
                  className="font-display font-bold text-sm h-9 px-5 text-white"
                  style={{
                    background: "linear-gradient(135deg, #ea580c, #c2410c)",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(194, 65, 12, 0.3)",
                  }}
                >
                  <Play className="w-4 h-4 mr-1.5 fill-white" />
                  Play Now
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="font-display font-semibold text-sm h-9 px-4"
                  style={{
                    background: "white",
                    border: "1.5px solid #e2e8f0",
                    color: "#475569",
                  }}
                >
                  + My List
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs
          defaultValue="movies"
          className="animate-fade-up"
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          <TabsList
            className="w-full sm:w-auto border-0 p-1 rounded-xl"
            style={{
              background: "white",
              gap: "2px",
              border: "1px solid #e2e8f0",
            }}
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  data-ocid={tab.ocid}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-display font-semibold rounded-lg transition-all"
                  style={{ color: "#64748b" }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        {/* Continue watching */}
        <section
          className="animate-fade-up"
          style={{ animationDelay: "0.15s", animationFillMode: "both" }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-slate-900 text-base">
              Continue Watching
            </h2>
            <button
              type="button"
              className="flex items-center gap-1 text-xs font-semibold text-orange-600"
            >
              See all
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {continueWatching.map((item, index) => (
              <div
                key={item.id}
                data-ocid={`content.continue_item.${index + 1}`}
                className="relative rounded-xl overflow-hidden cursor-pointer group transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: item.bg,
                  border: `1.5px solid ${item.border}`,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div className="p-3.5 pb-2">
                  <div className="text-3xl mb-2 select-none">{item.emoji}</div>
                  <p
                    className="font-display font-bold text-sm truncate"
                    style={{ color: "#1e1b4b" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-xs mt-0.5 truncate text-slate-500">
                    {item.episode}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="h-1 bg-slate-200 mx-3 mb-3 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${item.progress}%`,
                      background: item.accent,
                    }}
                  />
                </div>

                {/* Rating badge */}
                <div className="absolute top-2 right-2">
                  <span
                    className="text-xs px-1.5 py-0.5 rounded font-bold"
                    style={{
                      background: "white",
                      color: item.accent,
                      border: `1px solid ${item.border}`,
                    }}
                  >
                    {item.rating}
                  </span>
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.75)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: item.accent }}
                  >
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended */}
        <section
          className="animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-slate-900 text-base">
              Recommended For You
            </h2>
            <button
              type="button"
              className="flex items-center gap-1 text-xs font-semibold text-orange-600"
            >
              See all
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {recommended.map((item, index) => (
              <div
                key={item.id}
                data-ocid={`content.recommended_item.${index + 1}`}
                className="relative rounded-xl overflow-hidden cursor-pointer group transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: item.bg,
                  border: `1.5px solid ${item.border}`,
                  minHeight: "150px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div className="p-3.5">
                  {item.new && (
                    <Badge
                      className="text-xs font-bold border-0 mb-2 px-1.5 py-0.5"
                      style={{ background: "#ef4444", color: "white" }}
                    >
                      NEW
                    </Badge>
                  )}
                  <div className="text-3xl mb-2 select-none mt-1">
                    {item.emoji}
                  </div>
                  <p
                    className="font-display font-bold text-sm truncate"
                    style={{ color: "#1e1b4b" }}
                  >
                    {item.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs text-yellow-600 font-bold">
                        {item.score}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">{item.meta}</span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.75)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: item.accent }}
                  >
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="border-t mt-8 py-5"
        style={{ borderColor: "#e2e8f0", background: "white" }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center text-xs text-slate-400">
          © {new Date().getFullYear()}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline font-semibold"
          >
            caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
