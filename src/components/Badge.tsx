import clsx from 'clsx';

type BadgeVariant = 'primary' | 'success';

type BadgeProps = {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
};

const badgeVariantCls: Record<BadgeVariant, string> = {
  primary: 'bg-primary-10 text-primary border-primary',
  success: 'bg-success text-white border-success',
  // And other variants
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant,
  className,
}) => {
  return (
    <span
      className={clsx(
        badgeVariantCls[variant],
        'inline-block text-xs font-medium border rounded-full px-3 py-1',
        className,
      )}
    >
      {children}
    </span>
  );
};
