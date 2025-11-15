import clsx from 'clsx';

type ButtonVariant = 'outlined';

type ButtonProps = {
  variant: ButtonVariant;
  children: React.ReactNode;
  href?: string;
  target?: string;
  className?: string;
};

const buttonVariantCls: Record<ButtonVariant, string> = {
  outlined:
    'bg-transparent border-border-tertiary hover:bg-[#9b9c9d26] transition-all ' +
    'dark:border-dark-border-tertiary',
  // And other variants
};
const buttonCls =
  'border rounded-[4px] py-2 px-10 flex items-center justify-center text-sm text-center cursor-pointer';

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  href,
  target,
  className,
}) => {
  return href ? (
    <a
      href={href}
      target={target}
      className={clsx(buttonVariantCls[variant], buttonCls, className)}
    >
      {children}
    </a>
  ) : (
    <button
      type="button"
      className={clsx(buttonVariantCls[variant], buttonCls, className)}
    >
      {children}
    </button>
  );
};
