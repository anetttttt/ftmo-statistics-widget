import * as Tooltip from '@radix-ui/react-tooltip';
import { Info } from '../designSystem/Icons/Info';
import clsx from 'clsx';

export const InfoTootlip: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="cursor-help">
          <Info />
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            sideOffset={6}
            className={clsx(
              'p-2 text-xs max-w-[200px] rounded-[4px] animate-fadeIn border',
              'text-content-primary bg-bcg-secondary border-border-secondary',
              'dark:text-dark-content-tertiary dark:bg-dark-bcg-primary dark:border-dark-border-primary',
            )}
          >
            {children}
            <Tooltip.Arrow
              className="fill-border-secondary dark:fill-dark-border-primary"
            />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};