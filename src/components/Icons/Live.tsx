import type { Icons } from '../../types/icons';

export const Live = ({ className, size = '16px' }: Icons) => (
  <span className={className}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_59_499)">
        <path
          d="M13.4804 1.54601H10.0704L9.46564 0.433538C9.32286 0.171779 9.0373 0 8.72654 0H7.27351C6.96275 0 6.67719 0.171779 6.526 0.433538L5.92968 1.54601H2.51969C1.13386 1.54601 0 2.65031 0 4V13.546C0 14.8957 1.13386 16 2.51969 16H13.4804C14.8662 16 16 14.8957 16 13.546V4C16 2.65031 14.8662 1.54601 13.4804 1.54601ZM14.3203 13.5542C14.3203 14.0041 13.9423 14.3722 13.4804 14.3722H2.51969C2.05775 14.3722 1.6798 14.0041 1.6798 13.5542V4C1.6798 3.5501 2.05775 3.182 2.51969 3.182H13.4804C13.9423 3.182 14.3203 3.5501 14.3203 4V13.5542Z"
          fill="currentColor"
        />
        <path
          d="M4.41791 6.77309H5.06463V10.2087H6.1313V10.7813H4.41791V6.77309Z"
          fill="currentColor"
        />
        <path
          d="M6.44206 6.77309H7.08878V10.7813H6.44206V6.77309Z"
          fill="currentColor"
        />
        <path
          d="M8.48362 9.88148H8.47522L8.05527 6.77309H7.40015L8.02168 10.7813H8.87837L9.5083 6.77309H8.91197L8.48362 9.88148Z"
          fill="currentColor"
        />
        <path
          d="M11.5823 10.7813H9.81848V6.77309H11.5823V7.34569H10.4652V8.40091H11.3471V8.9735H10.4652V10.2087H11.5823V10.7813Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_59_499">
          <rect
            width={size}
            height={size}
            fill="currentColor"
          />
        </clipPath>
      </defs>
    </svg>
  </span>
);
