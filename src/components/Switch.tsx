import * as React from 'react';
import clsx from 'clsx';
import { Visible } from './Icons/Visible';
import { Hidden } from './Icons/Hidden';

type SwitchProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

export const Switch: React.FC<SwitchProps> = ({ checked, onCheckedChange }) => {
  return (
    <div className="block">
      <input
        id="switch"
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="hidden"
      />

      <label
        htmlFor="switch"
        className={clsx(
          'relative cursor-pointer block w-[48px] h-[24px] rounded-full border',
          'bg-bcg-primary border-border-secondary',
          'dark:bg-dark-bcg-primary dark:border-dark-border-primary',
        )}
      >
        <div
          className={clsx(
            'w-[24px] h-[24px] rounded-full border border-2 absolute top-[-1px] transition-all flex justify-center items-center',
            checked
              ? 'bg-white dark:bg-dark-bcg-secondary border-danger left-[23px]'
              : 'bg-primary border-primary left-[-1px]',
          )}
        >
          {checked ? (
            <Hidden className="text-content-tertiary dark:text-dark-content-tertiary md:visible lg:hidden" />
          ) : (
            <Visible className="text-white md:visible lg:hidden" />
          )}
        </div>
      </label>
    </div>
  );
};
