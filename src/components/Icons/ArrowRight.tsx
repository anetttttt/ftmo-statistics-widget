import type { Icons } from '../../types/icons';

export const ArrowRight = ({ className, size = '12px' }: Icons) => (
  <span className={className}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.45196 6.00004L2.75 1.97561L4.10737 0.5L9.16672 6.00003L4.10742 11.5L2.75005 10.0244L6.45196 6.00004Z"
        fill="currentColor"
      />
    </svg>
  </span>
);
