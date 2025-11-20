type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageIntro({ eyebrow, title, description, children }: PageIntroProps) {
  return (
    <div className="space-y-6 text-center">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          {eyebrow}
        </p>
      )}
      <h1 className="font-serif text-4xl">{title}</h1>
      {description && <p className="text-lg text-[var(--muted)]">{description}</p>}
      {children}
    </div>
  );
}

