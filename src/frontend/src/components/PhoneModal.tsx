import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, X } from "lucide-react";
import { useState } from "react";
import { UseCase } from "../backend";

interface PhoneModalProps {
  isOpen: boolean;
  useCase: UseCase | null;
  onClose: () => void;
  onSubmit: (phoneNumber: string) => void;
}

const useCaseLabels: Record<UseCase, string> = {
  [UseCase.Banking]: "Banking",
  [UseCase.Gambling]: "Gambling",
  [UseCase.Content]: "Content",
};

const useCaseAccents: Record<
  UseCase,
  { color: string; light: string; text: string }
> = {
  [UseCase.Banking]: {
    color: "oklch(0.48 0.18 240)",
    light: "oklch(0.92 0.06 220)",
    text: "oklch(0.38 0.16 240)",
  },
  [UseCase.Gambling]: {
    color: "oklch(0.50 0.20 290)",
    light: "oklch(0.93 0.06 290)",
    text: "oklch(0.40 0.18 290)",
  },
  [UseCase.Content]: {
    color: "oklch(0.52 0.18 25)",
    light: "oklch(0.95 0.05 40)",
    text: "oklch(0.42 0.17 25)",
  },
};

const useCaseDescriptions: Record<UseCase, string> = {
  [UseCase.Banking]: "Secure your banking access with mobile verification",
  [UseCase.Gambling]: "Age and identity verification for responsible gaming",
  [UseCase.Content]: "Unlock premium content with quick mobile verification",
};

export default function PhoneModal({
  isOpen,
  useCase,
  onClose,
  onSubmit,
}: PhoneModalProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = phoneNumber.replace(/\s/g, "");
    if (!cleaned || cleaned.length < 6) {
      setError("Please enter a valid phone number");
      return;
    }
    setError("");
    onSubmit(cleaned);
    setPhoneNumber("");
  };

  const handleClose = () => {
    setPhoneNumber("");
    setError("");
    onClose();
  };

  if (!useCase) return null;

  const accent = useCaseAccents[useCase];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent
        data-ocid="phone_modal.dialog"
        className="sm:max-w-md p-0 overflow-hidden bg-white"
        style={{
          border: "1px solid oklch(0.88 0.01 240)",
          boxShadow:
            "0 25px 60px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        {/* Top accent bar */}
        <div className="h-1.5 w-full" style={{ background: accent.color }} />

        <div className="p-6">
          {/* Header with close button */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: accent.light,
                  border: `1px solid ${accent.color}30`,
                }}
              >
                <Phone className="w-5 h-5" style={{ color: accent.color }} />
              </div>
              <DialogHeader className="text-left">
                <DialogTitle
                  className="text-base font-display font-bold"
                  style={{ color: "oklch(0.18 0.03 255)" }}
                >
                  Verify your phone number
                </DialogTitle>
                <DialogDescription
                  className="text-sm"
                  style={{ color: "oklch(0.52 0.04 255)" }}
                >
                  {useCaseDescriptions[useCase]}
                </DialogDescription>
              </DialogHeader>
            </div>
            <button
              type="button"
              data-ocid="phone_modal.close_button"
              onClick={handleClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
              style={{
                color: "oklch(0.55 0.04 255)",
                background: "oklch(0.94 0.01 240)",
              }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Use case badge */}
          <div className="mb-5">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: accent.light, color: accent.text }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: accent.color }}
              />
              {useCaseLabels[useCase]}
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-sm font-semibold"
                style={{ color: "oklch(0.30 0.04 255)" }}
              >
                Mobile Number
              </Label>
              <div className="relative flex items-center">
                <div
                  className="absolute left-3 flex items-center gap-1.5 text-sm select-none"
                  style={{ color: "oklch(0.45 0.04 255)" }}
                >
                  <span>🇬🇧</span>
                  <span>+44</span>
                  <span
                    className="w-px h-4 mx-1"
                    style={{ background: "oklch(0.85 0.01 240)" }}
                  />
                </div>
                <Input
                  id="phone"
                  data-ocid="phone_modal.input"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="7700 900 123"
                  className="pl-24 h-12 text-base focus-visible:ring-1"
                  style={{
                    background: "oklch(0.97 0.004 240)",
                    color: "oklch(0.18 0.03 255)",
                    border: "1.5px solid oklch(0.85 0.01 240)",
                    outline: "none",
                  }}
                  autoComplete="tel"
                  autoFocus
                />
              </div>
              {error && (
                <p
                  className="text-xs font-medium"
                  style={{ color: "oklch(0.52 0.20 25)" }}
                >
                  {error}
                </p>
              )}
              <p className="text-xs" style={{ color: "oklch(0.58 0.04 255)" }}>
                A verification check will be performed via your mobile network
              </p>
            </div>

            <Button
              data-ocid="phone_modal.submit_button"
              type="submit"
              className="w-full h-12 text-base font-semibold font-display transition-all duration-200 hover:opacity-90 text-white"
              style={{
                background: accent.color,
                border: "none",
                boxShadow: `0 4px 14px ${accent.color}35`,
              }}
            >
              Continue with Verification
            </Button>
          </form>

          <p
            className="mt-4 text-center text-xs"
            style={{ color: "oklch(0.60 0.04 255)" }}
          >
            Your data is encrypted and handled in compliance with GDPR
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
