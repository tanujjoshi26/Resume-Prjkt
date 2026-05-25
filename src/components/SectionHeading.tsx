type Props = {
  eyebrow: string;
  title: string;
};

export default function SectionHeading({
  eyebrow,
  title,
}: Props) {
  return (
    <div className="space-y-4 mb-16">
      
      <p className="text-blue-400 uppercase tracking-[0.3em] text-sm">
        {eyebrow}
      </p>

      <h2 className="text-4xl md:text-4xl font-bold max-w-3xl leading-tight">
        {title}
      </h2>

    </div>
  );
}
