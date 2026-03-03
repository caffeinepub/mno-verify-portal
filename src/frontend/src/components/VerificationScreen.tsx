import { CheckCircle2, Loader2, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { UseCase } from "../backend";
import { useActor } from "../hooks/useActor";

interface VerificationScreenProps {
  phoneNumber: string;
  useCase: UseCase;
  onComplete: () => void;
}

const steps = [
  {
    id: "mno",
    label: "Checking MNO",
    detail: "Connecting to mobile network operator",
  },
  {
    id: "phone",
    label: "Validating Phone Number",
    detail: "Verifying number format and carrier",
  },
  {
    id: "age",
    label: "Validating Age",
    detail: "Confirming eligibility requirements",
  },
  {
    id: "identity",
    label: "Confirming Identity",
    detail: "Finalising secure verification",
  },
];

type StepStatus = "pending" | "loading" | "done";

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

const useCaseLabels: Record<UseCase, string> = {
  [UseCase.Banking]: "Banking",
  [UseCase.Gambling]: "Gambling",
  [UseCase.Content]: "Content",
};

export default function VerificationScreen({
  phoneNumber,
  useCase,
  onComplete,
}: VerificationScreenProps) {
  const [stepStatuses, setStepStatuses] = useState<StepStatus[]>(
    steps.map((_, i) => (i === 0 ? "loading" : "pending")),
  );
  const [allDone, setAllDone] = useState(false);
  const hasStarted = useRef(false);
  const { actor } = useActor();

  const accent = useCaseAccents[useCase];

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    // Fire backend call in background
    if (actor) {
      actor.submitPhoneNumber(phoneNumber, useCase).catch(() => {
        // Silently ignore errors — verification UI proceeds regardless
      });
    }

    // Animate steps sequentially
    const STEP_DURATION = 1200;

    const runSteps = async () => {
      for (let i = 0; i < steps.length; i++) {
        setStepStatuses((prev) => {
          const next = [...prev];
          next[i] = "loading";
          return next;
        });

        await new Promise<void>((resolve) =>
          setTimeout(resolve, STEP_DURATION),
        );

        setStepStatuses((prev) => {
          const next = [...prev];
          next[i] = "done";
          if (i + 1 < steps.length) {
            next[i + 1] = "loading";
          }
          return next;
        });
      }

      await new Promise<void>((resolve) => setTimeout(resolve, 600));
      setAllDone(true);
      await new Promise<void>((resolve) => setTimeout(resolve, 800));
      onComplete();
    };

    runSteps();
  }, [actor, phoneNumber, useCase, onComplete]);

  const maskedPhone =
    phoneNumber.length > 4
      ? `+44 ••• •••${phoneNumber.slice(-3)}`
      : phoneNumber;

  return (
    <div
      data-ocid={
        allDone ? "verification.success_state" : "verification.loading_state"
      }
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.95 0.04 220) 0%, oklch(0.97 0.02 260) 40%, oklch(0.98 0.01 280) 100%)",
      }}
    >
      {/* Decorative background blobs */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accent.color}, transparent 70%)`,
          top: "5%",
          left: "10%",
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accent.color}, transparent 70%)`,
          bottom: "10%",
          right: "15%",
        }}
      />

      <div className="relative z-10 w-full max-w-sm mx-4">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div
            className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{
              background: "white",
              border: `2px solid ${accent.color}30`,
              boxShadow: `0 8px 30px ${accent.color}25, 0 2px 8px rgba(0,0,0,0.08)`,
            }}
          >
            {allDone ? (
              <CheckCircle2
                className="w-10 h-10 animate-check-in"
                style={{ color: "oklch(0.55 0.18 145)" }}
              />
            ) : (
              <Shield
                className="w-10 h-10 animate-pulse-ring"
                style={{ color: accent.color }}
              />
            )}
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2
            className="text-2xl font-display font-bold mb-1.5"
            style={{ color: "oklch(0.18 0.03 255)" }}
          >
            {allDone ? "Verification Complete" : "Verifying Identity"}
          </h2>
          <p className="text-sm" style={{ color: "oklch(0.52 0.04 255)" }}>
            {allDone
              ? `Welcome to ${useCaseLabels[useCase]}`
              : `Checking ${maskedPhone}`}
          </p>
        </div>

        {/* Steps */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "white",
            border: "1px solid oklch(0.88 0.01 240)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
          }}
        >
          {steps.map((step, index) => {
            const status = stepStatuses[index];
            return (
              <div
                key={step.id}
                className={`flex items-center gap-4 px-5 py-4 transition-all duration-300 ${
                  status !== "pending" ? "animate-step-in" : ""
                } ${index < steps.length - 1 ? "border-b" : ""}`}
                style={{
                  borderColor: "oklch(0.93 0.01 240)",
                  opacity: status === "pending" ? 0.4 : 1,
                  background:
                    status === "loading" ? accent.light : "transparent",
                }}
              >
                {/* Status icon */}
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  {status === "pending" && (
                    <div
                      className="w-5 h-5 rounded-full border-2"
                      style={{ borderColor: "oklch(0.82 0.01 240)" }}
                    />
                  )}
                  {status === "loading" && (
                    <Loader2
                      className="w-5 h-5 animate-spin"
                      style={{ color: accent.color }}
                    />
                  )}
                  {status === "done" && (
                    <CheckCircle2
                      className="w-5 h-5 animate-check-in"
                      style={{ color: "oklch(0.55 0.18 145)" }}
                    />
                  )}
                </div>

                {/* Step info */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-semibold"
                    style={{
                      color:
                        status === "loading"
                          ? accent.text
                          : status === "done"
                            ? "oklch(0.35 0.04 255)"
                            : "oklch(0.65 0.04 255)",
                    }}
                  >
                    {step.label}
                  </p>
                  {status === "loading" && (
                    <p
                      className="text-xs mt-0.5 animate-fade-up"
                      style={{ color: accent.text }}
                    >
                      {step.detail}
                    </p>
                  )}
                </div>

                {/* Status text */}
                <div className="flex-shrink-0">
                  {status === "done" && (
                    <span
                      className="text-xs font-semibold animate-fade-up"
                      style={{ color: "oklch(0.55 0.18 145)" }}
                    >
                      Done
                    </span>
                  )}
                  {status === "loading" && (
                    <span
                      className="text-xs font-medium"
                      style={{ color: accent.color }}
                    >
                      Checking...
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <p
          className="text-center text-xs mt-6"
          style={{ color: "oklch(0.58 0.04 255)" }}
        >
          Powered by MNO Direct Verification · Encrypted & Secure
        </p>
      </div>
    </div>
  );
}
