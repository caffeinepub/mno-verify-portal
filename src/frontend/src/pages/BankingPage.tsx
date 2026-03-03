import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowDownLeft,
  ArrowLeft,
  ArrowUpRight,
  Bell,
  Building2,
  ChevronRight,
  CreditCard,
  FileText,
  PlusCircle,
  Send,
  Shield,
  TrendingUp,
} from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Sainsbury's Local",
    category: "Groceries",
    amount: -42.5,
    date: "Today, 09:14",
    icon: "🛒",
  },
  {
    id: 2,
    name: "Monthly Salary",
    category: "Income",
    amount: 3850.0,
    date: "1 Mar, 00:00",
    icon: "💼",
  },
  {
    id: 3,
    name: "British Gas",
    category: "Utilities",
    amount: -87.3,
    date: "28 Feb, 08:30",
    icon: "🔌",
  },
  {
    id: 4,
    name: "Pret A Manger",
    category: "Coffee & Food",
    amount: -8.45,
    date: "27 Feb, 11:20",
    icon: "☕",
  },
  {
    id: 5,
    name: "Transfer to J. Smith",
    category: "Transfer",
    amount: -250.0,
    date: "26 Feb, 15:47",
    icon: "↔️",
  },
];

const quickActions = [
  {
    label: "Transfer",
    icon: Send,
    ocid: "banking.transfer_button",
    color: "#2563eb",
  },
  {
    label: "Pay",
    icon: CreditCard,
    ocid: "banking.pay_button",
    color: "#7c3aed",
  },
  {
    label: "Top Up",
    icon: PlusCircle,
    ocid: "banking.topup_button",
    color: "#059669",
  },
  {
    label: "Statements",
    icon: FileText,
    ocid: "banking.statements_button",
    color: "#d97706",
  },
];

export default function BankingPage() {
  const navigate = useNavigate();

  return (
    <div
      data-ocid="banking.page"
      className="min-h-screen"
      style={{
        background: "#f0f4ff",
        fontFamily: "'Satoshi', system-ui, sans-serif",
      }}
    >
      {/* Top nav */}
      <header
        className="sticky top-0 z-20 border-b"
        style={{
          background: "white",
          borderColor: "#e2e8f0",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate({ to: "/" })}
              className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <div className="w-px h-4 bg-slate-200" />
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
                }}
              >
                <Building2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-sm text-slate-800 font-display">
                ClearBank
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
            >
              <Bell className="w-4 h-4 text-slate-600" />
            </button>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{
                background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
              }}
            >
              AJ
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-5">
        {/* Hero illustration banner */}
        <div
          className="rounded-2xl overflow-hidden animate-fade-up"
          style={{
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          }}
        >
          <svg
            viewBox="0 0 800 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            style={{ display: "block", height: "200px" }}
            role="img"
            aria-label="Banking illustration"
          >
            {/* Sky-blue gradient background */}
            <defs>
              <linearGradient id="bank-bg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#eff6ff" />
                <stop offset="100%" stopColor="#dbeafe" />
              </linearGradient>
              <linearGradient id="bank-card" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="bank-chart" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            <rect width="800" height="200" fill="url(#bank-bg)" />

            {/* Decorative circles */}
            <circle cx="750" cy="30" r="60" fill="#2563eb" fillOpacity="0.07" />
            <circle cx="50" cy="170" r="80" fill="#1e3a8a" fillOpacity="0.05" />
            <circle
              cx="400"
              cy="-10"
              r="90"
              fill="#3b82f6"
              fillOpacity="0.06"
            />

            {/* Bank building */}
            <g transform="translate(60, 30)">
              {/* Pillars */}
              <rect
                x="10"
                y="55"
                width="12"
                height="70"
                fill="#1e3a8a"
                rx="1"
              />
              <rect
                x="30"
                y="55"
                width="12"
                height="70"
                fill="#1e3a8a"
                rx="1"
              />
              <rect
                x="50"
                y="55"
                width="12"
                height="70"
                fill="#1e3a8a"
                rx="1"
              />
              <rect
                x="70"
                y="55"
                width="12"
                height="70"
                fill="#1e3a8a"
                rx="1"
              />
              {/* Roof */}
              <polygon points="0,55 92,55 46,20" fill="#2563eb" />
              {/* Base */}
              <rect
                x="0"
                y="125"
                width="92"
                height="10"
                fill="#1e3a8a"
                rx="2"
              />
              <rect
                x="-6"
                y="133"
                width="104"
                height="7"
                fill="#1d4ed8"
                rx="2"
              />
              {/* Door */}
              <rect
                x="36"
                y="90"
                width="20"
                height="35"
                fill="#eff6ff"
                rx="2"
              />
              {/* Top label */}
              <rect
                x="20"
                y="30"
                width="52"
                height="10"
                fill="white"
                fillOpacity="0.3"
                rx="2"
              />
            </g>

            {/* Credit card */}
            <g transform="translate(240, 45)">
              <rect width="160" height="100" rx="10" fill="url(#bank-card)" />
              {/* Chip */}
              <rect
                x="15"
                y="25"
                width="28"
                height="20"
                rx="4"
                fill="#facc15"
              />
              <rect
                x="19"
                y="25"
                width="8"
                height="20"
                fill="#f59e0b"
                fillOpacity="0.5"
              />
              <rect
                x="15"
                y="33"
                width="28"
                height="4"
                fill="#f59e0b"
                fillOpacity="0.5"
              />
              {/* Card number dots */}
              <circle cx="15" cy="65" r="3" fill="white" fillOpacity="0.7" />
              <circle cx="25" cy="65" r="3" fill="white" fillOpacity="0.7" />
              <circle cx="35" cy="65" r="3" fill="white" fillOpacity="0.7" />
              <circle cx="45" cy="65" r="3" fill="white" fillOpacity="0.7" />
              <circle cx="65" cy="65" r="3" fill="white" fillOpacity="0.7" />
              <circle cx="75" cy="65" r="3" fill="white" fillOpacity="0.7" />
              <circle cx="85" cy="65" r="3" fill="white" fillOpacity="0.7" />
              <circle cx="95" cy="65" r="3" fill="white" fillOpacity="0.7" />
              <circle cx="115" cy="65" r="3" fill="white" fillOpacity="0.7" />
              <circle cx="125" cy="65" r="3" fill="white" fillOpacity="0.7" />
              <circle cx="135" cy="65" r="3" fill="white" fillOpacity="0.7" />
              <circle cx="145" cy="65" r="3" fill="white" fillOpacity="0.7" />
              {/* Valid thru */}
              <rect
                x="15"
                y="80"
                width="40"
                height="6"
                rx="2"
                fill="white"
                fillOpacity="0.3"
              />
              {/* Logo circle */}
              <circle cx="135" cy="30" r="12" fill="white" fillOpacity="0.25" />
              <circle cx="143" cy="30" r="12" fill="white" fillOpacity="0.15" />
            </g>

            {/* Chart bars */}
            <g transform="translate(480, 30)">
              {/* Chart area fill */}
              <path
                d="M0,130 L0,90 L40,70 L80,85 L120,50 L160,35 L200,55 L240,20 L240,130 Z"
                fill="url(#bank-chart)"
              />
              {/* Chart line */}
              <polyline
                points="0,90 40,70 80,85 120,50 160,35 200,55 240,20"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Chart dots */}
              <circle cx="0" cy="90" r="4" fill="#2563eb" />
              <circle cx="40" cy="70" r="4" fill="#2563eb" />
              <circle cx="80" cy="85" r="4" fill="#2563eb" />
              <circle cx="120" cy="50" r="4" fill="#2563eb" />
              <circle cx="160" cy="35" r="5" fill="#1e3a8a" />
              <circle cx="200" cy="55" r="4" fill="#2563eb" />
              <circle cx="240" cy="20" r="5" fill="#1e3a8a" />
              {/* Baseline */}
              <line
                x1="0"
                y1="130"
                x2="240"
                y2="130"
                stroke="#bfdbfe"
                strokeWidth="1.5"
              />
              {/* Up arrow label */}
              <rect
                x="175"
                y="12"
                width="60"
                height="20"
                rx="6"
                fill="#2563eb"
              />
              <text
                x="205"
                y="26"
                textAnchor="middle"
                fill="white"
                fontSize="9"
                fontWeight="bold"
              >
                +18.4%
              </text>
            </g>

            {/* Decorative coins */}
            <circle cx="210" cy="160" r="18" fill="#facc15" fillOpacity="0.8" />
            <circle
              cx="210"
              cy="160"
              r="14"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
            />
            <text
              x="210"
              y="165"
              textAnchor="middle"
              fill="#92400e"
              fontSize="12"
              fontWeight="bold"
            >
              £
            </text>

            <circle cx="440" cy="170" r="14" fill="#facc15" fillOpacity="0.6" />
            <circle
              cx="440"
              cy="170"
              r="10"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.5"
            />
            <text
              x="440"
              y="175"
              textAnchor="middle"
              fill="#92400e"
              fontSize="10"
              fontWeight="bold"
            >
              £
            </text>
          </svg>
        </div>

        {/* Greeting */}
        <div className="animate-fade-up">
          <p className="text-sm text-slate-500 mb-0.5">Good morning,</p>
          <h1 className="text-2xl font-display font-black text-slate-900">
            Alex Johnson
          </h1>
        </div>

        {/* Balance card */}
        <div
          data-ocid="banking.balance_card"
          className="relative rounded-2xl overflow-hidden p-6 animate-fade-up"
          style={{
            background:
              "linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #3b82f6 100%)",
            boxShadow:
              "0 8px 30px rgba(37, 99, 235, 0.4), 0 2px 6px rgba(0,0,0,0.15)",
          }}
        >
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)",
            }}
          />
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="text-blue-200 text-xs font-medium uppercase tracking-widest mb-1">
                  Current Account
                </p>
                <p className="text-white text-3xl font-display font-black">
                  £4,250.00
                </p>
                <p className="text-blue-300 text-xs mt-1">
                  Available: £4,100.00
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 text-white text-xs font-medium">
                  <TrendingUp className="w-3 h-3" />
                  +2.4% this month
                </div>
              </div>
            </div>
            {/* Card number */}
            <div className="flex items-center justify-between">
              <p className="text-blue-200 text-sm font-mono tracking-widest">
                •••• •••• •••• 4291
              </p>
              <Badge
                className="text-xs font-medium border-0"
                style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
              >
                Verified ✓
              </Badge>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div
          className="grid grid-cols-4 gap-3 animate-fade-up"
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.label}
                type="button"
                data-ocid={action.ocid}
                className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: "white",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${action.color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: action.color }} />
                </div>
                <span className="text-xs font-medium text-slate-700 font-display">
                  {action.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Security badge */}
        <div
          className="flex items-center gap-3 p-4 rounded-xl animate-fade-up"
          style={{
            background: "#eff6ff",
            border: "1px solid #bfdbfe",
            animationDelay: "0.15s",
            animationFillMode: "both",
          }}
        >
          <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-blue-900">
              MNO Verified Account
            </p>
            <p className="text-xs text-blue-600 mt-0.5">
              Your identity was verified via mobile network — no documents
              needed
            </p>
          </div>
        </div>

        {/* Transactions */}
        <div
          data-ocid="banking.transactions_list"
          className="rounded-2xl overflow-hidden animate-fade-up"
          style={{
            background: "white",
            border: "1px solid #e2e8f0",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            animationDelay: "0.2s",
            animationFillMode: "both",
          }}
        >
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-display font-bold text-slate-900 text-base">
              Recent Transactions
            </h2>
            <button
              type="button"
              className="text-xs font-medium text-blue-600 flex items-center gap-1 hover:text-blue-700 transition-colors"
            >
              View all
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-slate-50">
            {transactions.map((txn) => (
              <div
                key={txn.id}
                className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: "#f1f5f9" }}
                >
                  {txn.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800 truncate font-display">
                    {txn.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {txn.category} · {txn.date}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p
                    className="text-sm font-bold font-display"
                    style={{ color: txn.amount > 0 ? "#059669" : "#0f172a" }}
                  >
                    {txn.amount > 0 ? "+" : ""}£
                    {Math.abs(txn.amount).toFixed(2)}
                  </p>
                  <div className="flex justify-end mt-0.5">
                    {txn.amount > 0 ? (
                      <ArrowDownLeft className="w-3 h-3 text-emerald-500" />
                    ) : (
                      <ArrowUpRight className="w-3 h-3 text-slate-400" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="border-t mt-8 py-5"
        style={{ borderColor: "#e2e8f0", background: "white" }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center text-xs text-slate-400">
          © {new Date().getFullYear()}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
