import clsx from 'clsx';

type ButtonVariant = 'outlined' | 'icon';

type ButtonProps = {
  variant: ButtonVariant;
  children: React.ReactNode;
  href?: string;
  target?: string;
  className?: string;
  onClick?: () => void;
};

const buttonVariantCls: Record<ButtonVariant, string> = {
  outlined:
    'border rounded-[4px] flex items-center justify-center text-sm text-center cursor-pointer ' +
    'py-2 px-10 bg-transparent border-border-tertiary hover:bg-[#9b9c9d26] transition-all ' +
    'dark:border-dark-border-tertiary',
  icon: '',
  // ...and other variants
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  href,
  target,
  className,
  onClick,
}) => {
  return href ? (
    <a
      href={href}
      target={target}
      className={clsx(buttonVariantCls[variant], className)}
    >
      {children}
    </a>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className={clsx(buttonVariantCls[variant], className)}
    >
      {children}
    </button>
  );
};
