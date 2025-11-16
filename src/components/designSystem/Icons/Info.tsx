import type { Icons } from '../../../types/icons';

export const Info = ({ className, size = '16px' }: Icons) => (
  <span className={className}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_59_520)">
        <path
          d="M8.81804 6.94478H7.18205V11.1166H8.81804V6.94478Z"
          fill="currentColor"
        />
        <path
          d="M8.00004 5.70144C8.21272 5.70144 8.4254 5.61146 8.58082 5.46422C8.73624 5.3088 8.81804 5.1043 8.81804 4.88344C8.81804 4.67076 8.72806 4.45808 8.58082 4.30267C8.27816 4.00001 7.7301 4.00001 7.42744 4.30267C7.27203 4.45808 7.18205 4.67076 7.18205 4.88344C7.18205 5.09612 7.27203 5.3088 7.41926 5.46422C7.57468 5.61146 7.78736 5.70144 8.00004 5.70144Z"
          fill="currentColor"
        />
        <path
          d="M8 0C3.591 0 0 3.591 0 8C0 12.409 3.591 16 8 16C12.409 16 16 12.409 16 8C16 3.591 12.4172 0 8 0ZM8 14.364C4.4908 14.364 1.63599 11.5092 1.63599 8C1.63599 4.4908 4.4908 1.63599 8 1.63599C11.5092 1.63599 14.364 4.4908 14.364 8C14.364 11.5092 11.5092 14.364 8 14.364Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_59_520">
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
