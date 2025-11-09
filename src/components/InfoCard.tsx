interface InfoCardProps {
  label: string;
  value: string;
  colorScheme: 'indigo' | 'blue' | 'violet' | 'pink' | 'emerald' | 'amber' | 'fuchsia';
}

const colorClasses = {
  indigo: {
    gradient: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20',
    border: 'border-indigo-200 dark:border-indigo-800',
    text: 'text-indigo-600 dark:text-indigo-400'
  },
  blue: {
    gradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    text: 'text-blue-600 dark:text-blue-400'
  },
  violet: {
    gradient: 'from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20',
    border: 'border-violet-200 dark:border-violet-800',
    text: 'text-violet-600 dark:text-violet-400'
  },
  pink: {
    gradient: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
    border: 'border-pink-200 dark:border-pink-800',
    text: 'text-pink-600 dark:text-pink-400'
  },
  emerald: {
    gradient: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
    border: 'border-emerald-200 dark:border-emerald-800',
    text: 'text-emerald-600 dark:text-emerald-400'
  },
  amber: {
    gradient: 'from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20',
    border: 'border-amber-200 dark:border-amber-800',
    text: 'text-amber-600 dark:text-amber-400'
  },
  fuchsia: {
    gradient: 'from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/20',
    border: 'border-fuchsia-200 dark:border-fuchsia-800',
    text: 'text-fuchsia-600 dark:text-fuchsia-400'
  }
};

export function InfoCard({ label, value, colorScheme }: InfoCardProps) {
  const colors = colorClasses[colorScheme];

  return (
    <div className={`bg-gradient-to-br ${colors.gradient} p-4 rounded-xl border ${colors.border}`}>
      <div className={`text-sm ${colors.text} font-medium mb-1`}>{label}</div>
      <div className="text-lg font-semibold text-slate-900 dark:text-white">{value}</div>
    </div>
  );
}
