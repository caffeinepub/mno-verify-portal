import { Button } from "@/components/ui/button";
import { useRouter } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Dices,
  Globe,
  PlayCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useVerification } from "../App";
import { UseCase } from "../backend";
import PhoneModal from "../components/PhoneModal";

const useCases = [
  {
    id: UseCase.Banking,
    dataOcid: "home.banking_card",
    icon: Building2,
    title: "Banking",
    subtitle: "Frictionless KYC",
    description:
      "Instant mobile-network verification for account opening, transaction authentication, and regulatory compliance.",
    features: [
      "Real-time MNO lookup",
      "PSD2 compliant",
      "Sub-second verification",
    ],
    path: "/banking",
    accent: "oklch(0.48 0.18 240)",
    accentLight: "oklch(0.92 0.06 220)",
    accentText: "oklch(0.38 0.16 240)",
    badgeText: "FCA Compliant",
  },
  {
    id: UseCase.Gambling,
    dataOcid: "home.gambling_card",
    icon: Dices,
    title: "Gambling",
    subtitle: "Age & ID Verification",
    description:
      "Responsible gambling compliance with instant age verification and self-exclusion checks via carrier data.",
    features: [
      "Age gate enforcement",
      "GamStop integration",
      "Carrier-grade accuracy",
    ],
    path: "/gambling",
    accent: "oklch(0.50 0.20 290)",
    accentLight: "oklch(0.93 0.06 290)",
    accentText: "oklch(0.40 0.18 290)",
    badgeText: "UKGC Compliant",
  },
  {
    id: UseCase.Content,
    dataOcid: "home.content_card",
    icon: PlayCircle,
    title: "Content",
    subtitle: "Premium Access Control",
    description:
      "Gate adult content and restricted media with carrier-verified age checks — no documents required.",
    features: ["Zero-friction flow", "BBFC age ratings", "GDPR privacy-first"],
    path: "/content",
    accent: "oklch(0.52 0.18 25)",
    accentLight: "oklch(0.95 0.05 40)",
    accentText: "oklch(0.42 0.17 25)",
    badgeText: "BBFC Approved",
  },
] as const;

function BankingIllustration({
  accentLight,
  accent,
}: { accentLight: string; accent: string }) {
  return (
    <svg
      role="img"
      aria-label="Banking illustration"
      viewBox="0 0 600 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background */}
      <rect width="600" height="176" fill={accentLight} />
      {/* Grid lines */}
      <line
        x1="0"
        y1="140"
        x2="600"
        y2="140"
        stroke={accent}
        strokeOpacity="0.15"
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="110"
        x2="600"
        y2="110"
        stroke={accent}
        strokeOpacity="0.10"
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="80"
        x2="600"
        y2="80"
        stroke={accent}
        strokeOpacity="0.10"
        strokeWidth="1"
      />
      {/* Bank building */}
      <rect
        x="230"
        y="70"
        width="140"
        height="80"
        rx="3"
        fill={accent}
        fillOpacity="0.20"
      />
      <rect
        x="250"
        y="90"
        width="16"
        height="28"
        rx="2"
        fill={accent}
        fillOpacity="0.55"
      />
      <rect
        x="276"
        y="90"
        width="16"
        height="28"
        rx="2"
        fill={accent}
        fillOpacity="0.55"
      />
      <rect
        x="302"
        y="90"
        width="16"
        height="28"
        rx="2"
        fill={accent}
        fillOpacity="0.55"
      />
      <rect
        x="328"
        y="90"
        width="16"
        height="28"
        rx="2"
        fill={accent}
        fillOpacity="0.55"
      />
      <rect
        x="230"
        y="62"
        width="140"
        height="12"
        rx="2"
        fill={accent}
        fillOpacity="0.45"
      />
      <polygon points="300,42 380,66 220,66" fill={accent} fillOpacity="0.30" />
      <rect
        x="242"
        y="130"
        width="116"
        height="8"
        rx="1"
        fill={accent}
        fillOpacity="0.35"
      />
      {/* Credit card left */}
      <rect
        x="60"
        y="72"
        width="120"
        height="76"
        rx="10"
        fill={accent}
        fillOpacity="0.80"
      />
      <rect
        x="60"
        y="86"
        width="120"
        height="18"
        fill={accent}
        fillOpacity="0.40"
      />
      <rect
        x="72"
        y="116"
        width="36"
        height="6"
        rx="3"
        fill="white"
        fillOpacity="0.70"
      />
      <rect
        x="72"
        y="126"
        width="56"
        height="6"
        rx="3"
        fill="white"
        fillOpacity="0.50"
      />
      <circle cx="154" cy="82" r="10" fill="white" fillOpacity="0.30" />
      <circle cx="166" cy="82" r="10" fill="white" fillOpacity="0.20" />
      {/* Chart line right */}
      <polyline
        points="410,148 440,120 470,130 500,95 530,80 560,58"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="560" cy="58" r="5" fill={accent} />
      <circle cx="500" cy="95" r="4" fill={accent} fillOpacity="0.70" />
      <circle cx="440" cy="120" r="4" fill={accent} fillOpacity="0.50" />
      {/* Coins */}
      <circle cx="390" cy="148" r="14" fill={accent} fillOpacity="0.60" />
      <circle cx="390" cy="148" r="10" fill={accent} fillOpacity="0.40" />
      <text
        x="386"
        y="153"
        fontSize="11"
        fill="white"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        $
      </text>
      <circle cx="415" cy="152" r="10" fill={accent} fillOpacity="0.40" />
      <circle cx="415" cy="152" r="7" fill={accent} fillOpacity="0.30" />
    </svg>
  );
}

function GamblingIllustration({
  accentLight,
  accent,
}: { accentLight: string; accent: string }) {
  return (
    <svg
      role="img"
      aria-label="Gambling illustration"
      viewBox="0 0 600 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background */}
      <rect width="600" height="176" fill={accentLight} />
      {/* Felt table surface */}
      <ellipse
        cx="300"
        cy="180"
        rx="260"
        ry="70"
        fill={accent}
        fillOpacity="0.12"
      />
      {/* Big dice left */}
      <rect
        x="80"
        y="60"
        width="80"
        height="80"
        rx="12"
        fill={accent}
        fillOpacity="0.75"
      />
      <rect
        x="84"
        y="64"
        width="72"
        height="72"
        rx="10"
        fill={accent}
        fillOpacity="0.90"
      />
      <circle cx="104" cy="84" r="7" fill="white" />
      <circle cx="140" cy="84" r="7" fill="white" />
      <circle cx="104" cy="120" r="7" fill="white" />
      <circle cx="140" cy="120" r="7" fill="white" />
      <circle cx="122" cy="102" r="7" fill="white" />
      {/* Smaller dice */}
      <rect
        x="175"
        y="100"
        width="52"
        height="52"
        rx="8"
        fill={accent}
        fillOpacity="0.60"
      />
      <rect
        x="178"
        y="103"
        width="46"
        height="46"
        rx="7"
        fill={accent}
        fillOpacity="0.80"
      />
      <circle cx="190" cy="115" r="5" fill="white" />
      <circle cx="213" cy="138" r="5" fill="white" />
      <circle cx="213" cy="115" r="5" fill="white" />
      {/* Playing cards */}
      <rect
        x="280"
        y="50"
        width="70"
        height="96"
        rx="8"
        fill="white"
        fillOpacity="0.90"
        stroke={accent}
        strokeOpacity="0.30"
        strokeWidth="1.5"
      />
      <text
        x="290"
        y="75"
        fontSize="20"
        fill={accent}
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        A
      </text>
      <text x="290" y="95" fontSize="16" fill={accent} fontFamily="sans-serif">
        ♠
      </text>
      <rect
        x="295"
        y="55"
        width="70"
        height="96"
        rx="8"
        fill="white"
        fillOpacity="0.90"
        stroke={accent}
        strokeOpacity="0.30"
        strokeWidth="1.5"
      />
      <text
        x="305"
        y="80"
        fontSize="20"
        fill="oklch(0.55 0.20 25)"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        K
      </text>
      <text
        x="305"
        y="100"
        fontSize="16"
        fill="oklch(0.55 0.20 25)"
        fontFamily="sans-serif"
      >
        ♥
      </text>
      {/* Chips */}
      <circle cx="450" cy="100" r="30" fill={accent} fillOpacity="0.85" />
      <circle
        cx="450"
        cy="100"
        r="25"
        fill={accent}
        fillOpacity="0.60"
        stroke="white"
        strokeDasharray="8 4"
        strokeWidth="3"
      />
      <circle cx="450" cy="100" r="15" fill={accent} fillOpacity="0.80" />
      <circle cx="480" cy="120" r="22" fill={accent} fillOpacity="0.65" />
      <circle
        cx="480"
        cy="120"
        r="18"
        fill={accent}
        fillOpacity="0.45"
        stroke="white"
        strokeDasharray="6 3"
        strokeWidth="2"
      />
      <circle cx="480" cy="120" r="10" fill={accent} fillOpacity="0.70" />
      {/* Sparkles */}
      <text
        x="510"
        y="65"
        fontSize="18"
        fill={accent}
        fillOpacity="0.80"
        fontFamily="sans-serif"
      >
        ✦
      </text>
      <text
        x="530"
        y="90"
        fontSize="12"
        fill={accent}
        fillOpacity="0.60"
        fontFamily="sans-serif"
      >
        ✦
      </text>
      <text
        x="490"
        y="50"
        fontSize="10"
        fill={accent}
        fillOpacity="0.50"
        fontFamily="sans-serif"
      >
        ✦
      </text>
      <text
        x="70"
        y="52"
        fontSize="14"
        fill={accent}
        fillOpacity="0.60"
        fontFamily="sans-serif"
      >
        ✦
      </text>
    </svg>
  );
}

function ContentIllustration({
  accentLight,
  accent,
}: { accentLight: string; accent: string }) {
  return (
    <svg
      role="img"
      aria-label="Content illustration"
      viewBox="0 0 600 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background */}
      <rect width="600" height="176" fill={accentLight} />
      {/* Main screen */}
      <rect
        x="100"
        y="38"
        width="280"
        height="110"
        rx="12"
        fill={accent}
        fillOpacity="0.20"
        stroke={accent}
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      {/* Screen content thumbnail rows */}
      <rect
        x="114"
        y="54"
        width="252"
        height="56"
        rx="6"
        fill={accent}
        fillOpacity="0.30"
      />
      {/* Play button overlay */}
      <circle cx="240" cy="82" r="22" fill={accent} fillOpacity="0.85" />
      <polygon points="232,72 232,92 256,82" fill="white" />
      {/* Progress bar */}
      <rect
        x="114"
        y="118"
        width="252"
        height="6"
        rx="3"
        fill={accent}
        fillOpacity="0.20"
      />
      <rect
        x="114"
        y="118"
        width="140"
        height="6"
        rx="3"
        fill={accent}
        fillOpacity="0.65"
      />
      <circle cx="254" cy="121" r="5" fill={accent} />
      {/* Screen stand */}
      <rect
        x="224"
        y="148"
        width="32"
        height="8"
        rx="2"
        fill={accent}
        fillOpacity="0.35"
      />
      <rect
        x="208"
        y="154"
        width="64"
        height="5"
        rx="2"
        fill={accent}
        fillOpacity="0.25"
      />
      {/* Film strip left */}
      <rect
        x="38"
        y="52"
        width="46"
        height="90"
        rx="4"
        fill={accent}
        fillOpacity="0.65"
      />
      <rect
        x="42"
        y="58"
        width="38"
        height="22"
        rx="2"
        fill="white"
        fillOpacity="0.25"
      />
      <rect
        x="42"
        y="84"
        width="38"
        height="22"
        rx="2"
        fill="white"
        fillOpacity="0.25"
      />
      <rect
        x="42"
        y="110"
        width="38"
        height="22"
        rx="2"
        fill="white"
        fillOpacity="0.25"
      />
      <rect
        x="38"
        y="52"
        width="6"
        height="90"
        rx="2"
        fill={accent}
        fillOpacity="0.30"
      />
      <rect
        x="78"
        y="52"
        width="6"
        height="90"
        rx="2"
        fill={accent}
        fillOpacity="0.30"
      />
      {/* Stars right */}
      <text
        x="430"
        y="72"
        fontSize="22"
        fill={accent}
        fillOpacity="0.90"
        fontFamily="sans-serif"
      >
        ★
      </text>
      <text
        x="460"
        y="100"
        fontSize="16"
        fill={accent}
        fillOpacity="0.70"
        fontFamily="sans-serif"
      >
        ★
      </text>
      <text
        x="490"
        y="78"
        fontSize="28"
        fill={accent}
        fillOpacity="0.55"
        fontFamily="sans-serif"
      >
        ★
      </text>
      <text
        x="520"
        y="108"
        fontSize="14"
        fill={accent}
        fillOpacity="0.65"
        fontFamily="sans-serif"
      >
        ★
      </text>
      <text
        x="445"
        y="128"
        fontSize="12"
        fill={accent}
        fillOpacity="0.50"
        fontFamily="sans-serif"
      >
        ★
      </text>
      {/* Small thumbnail cards right */}
      <rect
        x="420"
        y="48"
        width="58"
        height="38"
        rx="6"
        fill={accent}
        fillOpacity="0.20"
        stroke={accent}
        strokeOpacity="0.25"
        strokeWidth="1"
      />
      <circle cx="449" cy="67" r="10" fill={accent} fillOpacity="0.55" />
      <polygon points="444,62 444,72 456,67" fill="white" fillOpacity="0.85" />
      <rect
        x="430"
        y="135"
        width="58"
        height="38"
        rx="6"
        fill={accent}
        fillOpacity="0.20"
        stroke={accent}
        strokeOpacity="0.25"
        strokeWidth="1"
      />
      <circle cx="459" cy="154" r="10" fill={accent} fillOpacity="0.55" />
      <polygon
        points="454,149 454,159 466,154"
        fill="white"
        fillOpacity="0.85"
      />
    </svg>
  );
}

function HeroBanner() {
  return (
    <svg
      role="img"
      aria-label="MNO Verification Network hero illustration"
      viewBox="0 0 900 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      style={{ display: "block", background: "oklch(0.96 0.03 230)" }}
    >
      {/* Sky gradient background */}
      <defs>
        <linearGradient id="heroBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.94 0.06 220)" />
          <stop offset="100%" stopColor="oklch(0.98 0.02 220)" />
        </linearGradient>
        <linearGradient id="glowBlue" x1="0" y1="0" x2="1" y2="1">
          <stop
            offset="0%"
            stopColor="oklch(0.55 0.20 240)"
            stopOpacity="0.85"
          />
          <stop
            offset="100%"
            stopColor="oklch(0.42 0.22 260)"
            stopOpacity="0.95"
          />
        </linearGradient>
        <linearGradient id="phoneGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.22 0.04 255)" />
          <stop offset="100%" stopColor="oklch(0.16 0.03 255)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="900" height="280" fill="url(#heroBg)" />

      {/* Subtle grid */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <line
          key={`vg${i}`}
          x1={i * 112}
          y1="0"
          x2={i * 112}
          y2="280"
          stroke="oklch(0.70 0.04 220)"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={`hg${i}`}
          x1="0"
          y1={i * 70}
          x2="900"
          y2={i * 70}
          stroke="oklch(0.70 0.04 220)"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
      ))}

      {/* Glowing orb behind phone */}
      <circle
        cx="450"
        cy="155"
        r="110"
        fill="oklch(0.55 0.18 240)"
        fillOpacity="0.08"
      />
      <circle
        cx="450"
        cy="155"
        r="75"
        fill="oklch(0.55 0.18 240)"
        fillOpacity="0.07"
      />

      {/* ===== PHONE (centre) ===== */}
      <rect
        x="388"
        y="42"
        width="124"
        height="210"
        rx="18"
        fill="url(#phoneGrad)"
      />
      <rect
        x="393"
        y="47"
        width="114"
        height="200"
        rx="14"
        fill="oklch(0.14 0.03 255)"
      />
      {/* Screen */}
      <rect
        x="397"
        y="60"
        width="106"
        height="175"
        rx="10"
        fill="oklch(0.96 0.04 230)"
      />
      {/* Notch */}
      <rect
        x="428"
        y="47"
        width="44"
        height="10"
        rx="5"
        fill="oklch(0.10 0.02 255)"
      />
      {/* Shield icon on screen */}
      <circle cx="450" cy="115" r="28" fill="oklch(0.88 0.08 220)" />
      <path
        d="M450 95 L466 102 L466 117 C466 128 458 136 450 140 C442 136 434 128 434 117 L434 102 Z"
        fill="url(#glowBlue)"
      />
      <path
        d="M443 116 L448 121 L458 110"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Screen text lines */}
      <rect
        x="415"
        y="152"
        width="70"
        height="6"
        rx="3"
        fill="oklch(0.55 0.18 240)"
        fillOpacity="0.80"
      />
      <rect
        x="422"
        y="164"
        width="56"
        height="5"
        rx="2.5"
        fill="oklch(0.55 0.04 255)"
        fillOpacity="0.40"
      />
      {/* Progress bar */}
      <rect
        x="415"
        y="178"
        width="70"
        height="5"
        rx="2.5"
        fill="oklch(0.88 0.04 220)"
      />
      <rect
        x="415"
        y="178"
        width="52"
        height="5"
        rx="2.5"
        fill="oklch(0.55 0.18 240)"
      />
      {/* Home bar */}
      <rect
        x="430"
        y="230"
        width="40"
        height="4"
        rx="2"
        fill="oklch(0.45 0.05 255)"
        fillOpacity="0.40"
      />

      {/* ===== LEFT NODE — BANKING ===== */}
      <rect
        x="70"
        y="96"
        width="130"
        height="88"
        rx="14"
        fill="white"
        fillOpacity="0.90"
        stroke="oklch(0.75 0.10 240)"
        strokeWidth="1.5"
      />
      {/* Bank icon */}
      <rect
        x="118"
        y="112"
        width="34"
        height="26"
        rx="3"
        fill="oklch(0.55 0.18 240)"
        fillOpacity="0.15"
      />
      <rect
        x="122"
        y="118"
        width="6"
        height="10"
        rx="1"
        fill="oklch(0.48 0.18 240)"
        fillOpacity="0.70"
      />
      <rect
        x="132"
        y="118"
        width="6"
        height="10"
        rx="1"
        fill="oklch(0.48 0.18 240)"
        fillOpacity="0.70"
      />
      <rect
        x="142"
        y="118"
        width="6"
        height="10"
        rx="1"
        fill="oklch(0.48 0.18 240)"
        fillOpacity="0.70"
      />
      <polygon
        points="135,107 152,114 118,114"
        fill="oklch(0.48 0.18 240)"
        fillOpacity="0.45"
      />
      <rect
        x="116"
        y="138"
        width="38"
        height="4"
        rx="2"
        fill="oklch(0.55 0.18 240)"
        fillOpacity="0.60"
      />
      <text
        x="135"
        y="158"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fontFamily="system-ui,sans-serif"
        fill="oklch(0.28 0.06 255)"
      >
        Banking
      </text>
      <text
        x="135"
        y="170"
        textAnchor="middle"
        fontSize="8"
        fontFamily="system-ui,sans-serif"
        fill="oklch(0.52 0.04 255)"
      >
        KYC / PSD2
      </text>

      {/* ===== RIGHT NODE — GAMBLING ===== */}
      <rect
        x="700"
        y="96"
        width="130"
        height="88"
        rx="14"
        fill="white"
        fillOpacity="0.90"
        stroke="oklch(0.72 0.12 290)"
        strokeWidth="1.5"
      />
      {/* Dice */}
      <rect
        x="728"
        y="112"
        width="30"
        height="30"
        rx="5"
        fill="oklch(0.50 0.20 290)"
        fillOpacity="0.80"
      />
      <circle cx="737" cy="121" r="3" fill="white" />
      <circle cx="749" cy="134" r="3" fill="white" />
      <circle cx="749" cy="121" r="3" fill="white" />
      <rect
        x="762"
        y="116"
        width="22"
        height="22"
        rx="4"
        fill="oklch(0.50 0.20 290)"
        fillOpacity="0.55"
      />
      <circle cx="769" cy="123" r="2.5" fill="white" />
      <circle cx="777" cy="131" r="2.5" fill="white" />
      <text
        x="765"
        y="158"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fontFamily="system-ui,sans-serif"
        fill="oklch(0.28 0.06 255)"
      >
        Gambling
      </text>
      <text
        x="765"
        y="170"
        textAnchor="middle"
        fontSize="8"
        fontFamily="system-ui,sans-serif"
        fill="oklch(0.52 0.04 255)"
      >
        Age / UKGC
      </text>

      {/* ===== BOTTOM NODE — CONTENT ===== */}
      <rect
        x="310"
        y="210"
        width="130"
        height="55"
        rx="14"
        fill="white"
        fillOpacity="0.90"
        stroke="oklch(0.72 0.14 25)"
        strokeWidth="1.5"
      />
      <circle
        cx="365"
        cy="237"
        r="14"
        fill="oklch(0.52 0.18 25)"
        fillOpacity="0.80"
      />
      <polygon points="360,230 360,244 374,237" fill="white" />
      <text
        x="400"
        y="234"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fontFamily="system-ui,sans-serif"
        fill="oklch(0.28 0.06 255)"
      >
        Content
      </text>
      <text
        x="400"
        y="246"
        textAnchor="middle"
        fontSize="8"
        fontFamily="system-ui,sans-serif"
        fill="oklch(0.52 0.04 255)"
      >
        BBFC / Age-gate
      </text>

      {/* ===== CONNECTION LINES ===== */}
      {/* Left banking node → phone */}
      <path
        d="M200 140 Q295 140 388 145"
        stroke="oklch(0.55 0.18 240)"
        strokeWidth="2"
        strokeDasharray="6 4"
        strokeOpacity="0.60"
        fill="none"
      />
      {/* Right gambling node → phone */}
      <path
        d="M700 140 Q605 140 512 145"
        stroke="oklch(0.50 0.20 290)"
        strokeWidth="2"
        strokeDasharray="6 4"
        strokeOpacity="0.60"
        fill="none"
      />
      {/* Bottom content node → phone */}
      <path
        d="M450 210 L450 252"
        stroke="oklch(0.52 0.18 25)"
        strokeWidth="2"
        strokeDasharray="6 4"
        strokeOpacity="0.60"
        fill="none"
      />

      {/* Animated dots on lines */}
      <circle
        cx="295"
        cy="140"
        r="4"
        fill="oklch(0.55 0.18 240)"
        filter="url(#glow)"
      />
      <circle
        cx="605"
        cy="140"
        r="4"
        fill="oklch(0.50 0.20 290)"
        filter="url(#glow)"
      />
      <circle
        cx="450"
        cy="232"
        r="4"
        fill="oklch(0.52 0.18 25)"
        filter="url(#glow)"
      />

      {/* Small floating badges */}
      <rect
        x="240"
        y="62"
        width="78"
        height="22"
        rx="11"
        fill="oklch(0.55 0.18 240)"
        fillOpacity="0.90"
      />
      <text
        x="279"
        y="77"
        textAnchor="middle"
        fontSize="9"
        fontWeight="600"
        fontFamily="system-ui,sans-serif"
        fill="white"
      >
        ✓ Verified
      </text>

      <rect
        x="582"
        y="62"
        width="78"
        height="22"
        rx="11"
        fill="oklch(0.50 0.20 290)"
        fillOpacity="0.90"
      />
      <text
        x="621"
        y="77"
        textAnchor="middle"
        fontSize="9"
        fontWeight="600"
        fontFamily="system-ui,sans-serif"
        fill="white"
      >
        ✓ Age Check
      </text>

      <rect
        x="582"
        y="190"
        width="78"
        height="22"
        rx="11"
        fill="oklch(0.52 0.18 25)"
        fillOpacity="0.90"
      />
      <text
        x="621"
        y="205"
        textAnchor="middle"
        fontSize="9"
        fontWeight="600"
        fontFamily="system-ui,sans-serif"
        fill="white"
      >
        ✓ Access OK
      </text>
    </svg>
  );
}

const stats = [
  { value: "99.8%", label: "Verification accuracy" },
  { value: "<0.3s", label: "Average response time" },
  { value: "400+", label: "MNO partnerships" },
  { value: "50M+", label: "Verifications monthly" },
];

export default function HomePage() {
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const { startVerification } = useVerification();

  const handleCardClick = (useCase: UseCase) => {
    setSelectedUseCase(useCase);
    setModalOpen(true);
  };

  const handleModalSubmit = (phoneNumber: string) => {
    if (!selectedUseCase) return;
    const uc = selectedUseCase;
    setModalOpen(false);

    const useCaseRoutes: Record<UseCase, string> = {
      [UseCase.Banking]: "/banking",
      [UseCase.Gambling]: "/gambling",
      [UseCase.Content]: "/content",
    };

    startVerification({
      phoneNumber,
      useCase: uc,
      onComplete: () => {
        router.navigate({ to: useCaseRoutes[uc] });
      },
    });
  };

  return (
    <div className="min-h-screen mesh-bg relative overflow-x-hidden">
      {/* Header */}
      <header
        className="relative z-10 border-b bg-white/80 backdrop-blur-md"
        style={{ borderColor: "oklch(0.88 0.01 240)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.18 240), oklch(0.45 0.16 260))",
              }}
            >
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <span
              className="font-display font-bold text-lg tracking-tight"
              style={{ color: "oklch(0.18 0.03 255)" }}
            >
              VerifyNow
            </span>
          </div>
          <nav className="hidden sm:flex items-center gap-6">
            {["Solutions", "Docs", "Pricing", "Company"].map((item) => (
              <button
                key={item}
                type="button"
                className="text-sm font-medium transition-colors"
                style={{ color: "oklch(0.52 0.05 255)" }}
              >
                {item}
              </button>
            ))}
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex text-xs font-semibold"
            style={{
              background: "oklch(0.55 0.18 240)",
              color: "white",
              border: "none",
            }}
          >
            Get API Access
          </Button>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8 md:pt-20 md:pb-10 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 animate-fade-up"
            style={{
              background: "oklch(0.88 0.08 220)",
              color: "oklch(0.38 0.16 240)",
              border: "1px solid oklch(0.80 0.10 220)",
            }}
          >
            <Zap className="w-3.5 h-3.5" />
            Trusted by 500+ enterprises worldwide
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-display font-black mb-4 tracking-tight leading-[1.08] animate-fade-up"
            style={{
              color: "oklch(0.18 0.03 255)",
              animationDelay: "0.1s",
              animationFillMode: "both",
            }}
          >
            Mobile Network
            <br />
            <span style={{ color: "oklch(0.48 0.18 240)" }}>
              Identity Verification
            </span>
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-up"
            style={{
              color: "oklch(0.48 0.05 255)",
              animationDelay: "0.2s",
              animationFillMode: "both",
            }}
          >
            Instant, carrier-verified identity checks for Banking, Gambling, and
            Content platforms. No passwords. No documents. Just your SIM.
          </p>

          {/* Hero image */}
          <div
            className="relative mx-auto max-w-3xl mb-12 rounded-2xl overflow-hidden animate-fade-up"
            style={{
              animationDelay: "0.3s",
              animationFillMode: "both",
              border: "1px solid oklch(0.88 0.01 240)",
              boxShadow:
                "0 20px 60px oklch(0.55 0.18 240 / 0.12), 0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            <HeroBanner />
            {/* Floating stat */}
            <div
              className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md"
              style={{
                background: "rgba(255,255,255,0.92)",
                border: "1px solid oklch(0.88 0.01 240)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span
                className="text-xs font-semibold"
                style={{ color: "oklch(0.28 0.04 255)" }}
              >
                Network Online — 400+ MNOs connected
              </span>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section
          className="border-y"
          style={{
            borderColor: "oklch(0.88 0.01 240)",
            background: "white",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center py-2 ${i < stats.length - 1 ? "md:border-r" : ""}`}
                  style={{ borderColor: "oklch(0.88 0.01 240)" }}
                >
                  <div
                    className="text-2xl font-display font-black"
                    style={{ color: "oklch(0.48 0.18 240)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "oklch(0.55 0.04 255)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use case cards */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-display font-bold mb-3"
              style={{ color: "oklch(0.18 0.03 255)" }}
            >
              Choose your use case
            </h2>
            <p className="text-sm" style={{ color: "oklch(0.55 0.04 255)" }}>
              Select a solution to experience the verification flow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <div
                  key={uc.id}
                  data-ocid={uc.dataOcid}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 bg-white"
                  style={{
                    border: "1px solid oklch(0.88 0.01 240)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      `0 12px 36px rgba(0,0,0,0.10), 0 0 0 2px ${uc.accent}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 4px 16px rgba(0,0,0,0.06)";
                  }}
                >
                  {/* Illustration */}
                  <div
                    className="h-44 overflow-hidden transition-transform duration-500 group-hover:scale-105"
                    style={{ background: uc.accentLight }}
                  >
                    {uc.id === UseCase.Banking && (
                      <BankingIllustration
                        accentLight={uc.accentLight}
                        accent={uc.accent}
                      />
                    )}
                    {uc.id === UseCase.Gambling && (
                      <GamblingIllustration
                        accentLight={uc.accentLight}
                        accent={uc.accent}
                      />
                    )}
                    {uc.id === UseCase.Content && (
                      <ContentIllustration
                        accentLight={uc.accentLight}
                        accent={uc.accent}
                      />
                    )}
                  </div>

                  <div className="p-5">
                    {/* Badge */}
                    <div className="mb-3 flex items-center gap-2">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-semibold"
                        style={{
                          background: uc.accentLight,
                          color: uc.accentText,
                          border: `1px solid ${uc.accent}30`,
                        }}
                      >
                        {uc.badgeText}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex items-center gap-2 mb-1">
                      <Icon
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: uc.accent }}
                      />
                      <h3
                        className="text-lg font-display font-bold"
                        style={{ color: "oklch(0.18 0.03 255)" }}
                      >
                        {uc.title}
                      </h3>
                    </div>
                    <p
                      className="text-xs font-semibold mb-3"
                      style={{ color: uc.accent }}
                    >
                      {uc.subtitle}
                    </p>

                    {/* Description */}
                    <p
                      className="text-sm mb-4 leading-relaxed"
                      style={{ color: "oklch(0.48 0.04 255)" }}
                    >
                      {uc.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-1.5 mb-5">
                      {uc.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-xs"
                          style={{ color: "oklch(0.42 0.04 255)" }}
                        >
                          <CheckCircle
                            className="w-3.5 h-3.5 flex-shrink-0"
                            style={{ color: uc.accent }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      className="w-full font-display font-semibold text-sm h-10 text-white transition-all duration-200"
                      style={{
                        background: uc.accent,
                        border: "none",
                        boxShadow: `0 4px 12px ${uc.accent}35`,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(uc.id);
                      }}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Trust section */}
        <section
          className="border-t"
          style={{
            borderColor: "oklch(0.88 0.01 240)",
            background: "white",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-center">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {[
                { icon: ShieldCheck, label: "ISO 27001 Certified" },
                { icon: Globe, label: "Global MNO Network" },
                { icon: Zap, label: "99.99% Uptime SLA" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon
                    className="w-4 h-4"
                    style={{ color: "oklch(0.48 0.18 240)" }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.42 0.05 255)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="border-t"
        style={{
          borderColor: "oklch(0.88 0.01 240)",
          background: "oklch(0.97 0.006 240)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.18 240), oklch(0.45 0.16 260))",
              }}
            >
              <ShieldCheck className="w-3 h-3 text-white" />
            </div>
            <span
              className="text-xs font-semibold"
              style={{ color: "oklch(0.48 0.05 255)" }}
            >
              VerifyNow
            </span>
          </div>
          <p className="text-xs" style={{ color: "oklch(0.55 0.04 255)" }}>
            © {new Date().getFullYear()}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-semibold"
              style={{ color: "oklch(0.48 0.18 240)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>

      {/* Phone Modal */}
      <PhoneModal
        isOpen={modalOpen}
        useCase={selectedUseCase}
        onClose={() => {
          setModalOpen(false);
          setSelectedUseCase(null);
        }}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
}
