import * as React from "react";
import { colors, radii, shadows } from "@mastermind/theme";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({
  variant = "primary",
  style,
  ...props
}: ButtonProps) {
  const base: React.CSSProperties = {
    minHeight: 46,
    padding: "0 18px",
    borderRadius: radii.md,
    fontWeight: 700,
    cursor: "pointer",
    transition: "0.2s ease"
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: {
      border: "none",
      background: colors.yellow,
      color: "#111"
    },
    ghost: {
      border: `1px solid ${colors.line}`,
      background: colors.bgSoft,
      color: colors.text
    }
  };

  return <button {...props} style={{ ...base, ...variants[variant], ...style }} />;
}

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ style, ...props }: CardProps) {
  return (
    <div
      {...props}
      style={{
        border: `1px solid ${colors.line}`,
        borderRadius: radii.lg,
        background: colors.panel,
        boxShadow: shadows.card,
        padding: 20,
        ...style
      }}
    />
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  text
}: SectionHeadingProps) {
  return (
    <div style={{ marginBottom: 18 }}>
      {eyebrow ? (
        <span
          style={{
            display: "inline-block",
            marginBottom: 10,
            color: colors.yellow,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase"
          }}
        >
          {eyebrow}
        </span>
      ) : null}

      <h2 style={{ margin: 0, color: colors.text }}>{title}</h2>

      {text ? (
        <p style={{ marginTop: 8, color: colors.muted, lineHeight: 1.7 }}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
