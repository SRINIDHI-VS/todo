import type { OptionOwnerState, OptionProps } from '@mui/base/Option';
import { Option as BaseOption } from '@mui/base/Option';
import type { SelectProps } from '@mui/base/Select';
import { Select as MuiSelect } from '@mui/base/Select';
import clsx from 'clsx';
import * as React from 'react';

type OptionObject = { value: number | string; label: string };

type DropdownProps = {
  disabled?: boolean;
  className?: string;
  onChange: (
    event:
      | React.MouseEvent<Element, MouseEvent>
      | React.KeyboardEvent<Element>
      | React.FocusEvent<Element, Element>
      | null,
    value: number | string | null
  ) => void;
  options: OptionObject[];
  defaultValue?: number | string | null;
  value?: number | string | null;
};

const getOptionColorClasses = ({
  selected,
  highlighted,
  disabled,
}: Partial<OptionOwnerState<number>>) => {
  let classes = '';
  if (disabled) {
    classes += ' text-slate-400 dark:text-slate-700';
  } else {
    if (selected) {
      classes +=
        ' bg-purple-100 dark:bg-purple-950 text-purple-950 dark:text-purple-50';
    } else if (highlighted) {
      classes +=
        ' bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-300';
    }
    classes +=
      ' hover:dark:bg-slate-800 hover:bg-slate-100 hover:dark:text-slate-300 hover:text-slate-900';
  }
  return classes;
};

const Option = React.forwardRef<HTMLLIElement, OptionProps<number | string>>(
  function InternalOption(props, ref) {
    return (
      <BaseOption
        ref={ref}
        {...props}
        slotProps={{
          root: ({ selected, highlighted, disabled }) => ({
            className: `z-50 list-none p-2 rounded-lg cursor-default last-of-type:border-b-0 ${getOptionColorClasses(
              { selected, highlighted, disabled }
            )}`,
          }),
        }}
      />
    );
  }
);

// function useIsDarkMode() {
//   const theme = useTheme();
//   return theme.palette.mode === 'dark';
// }

// export default function UnstyledSelectBasic() {
//   // Replace this with your app logic for determining dark modes
//   const isDarkMode = useIsDarkMode();

//   return (
//     <div className={isDarkMode ? 'dark' : ''}>
//       <CustomSelect defaultValue={10}>
//         <Option value={10}>Ten</Option>
//         <Option value={20}>Twenty</Option>
//         <Option value={30}>Thirty</Option>
//       </CustomSelect>
//     </div>
//   );
// }

const resolveSlotProps = (fn: any, args: any) =>
  typeof fn === 'function' ? fn(args) : fn;

export const CustomSelect = React.forwardRef(function CustomSelect(
  {
    options,
    ...props
  }: SelectProps<number | string, false> & {
    options: OptionObject[];
  },
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  // Replace this with your app logic for determining dark modes
  // const isDarkMode = useIsDarkMode();

  return (
    <MuiSelect
      ref={ref}
      {...props}
      className={clsx(props.className)}
      slotProps={{
        ...props.slotProps,
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              `box-border w-80 rounded-lg border border-solid border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-900 shadow shadow-slate-200 outline-0 transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:shadow-slate-900 dark:hover:bg-slate-700 ${
                ownerState.focusVisible ? 'border-purple-400' : ''
              } ${
                ownerState.open ? 'after:content-["▴"]' : 'after:content-["▾"]'
              } after:float-right`,
              resolvedSlotProps?.className
            ),
          };
        },
        listbox: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.listbox,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              `my-3 w-full cursor-pointer overflow-auto rounded-xl border border-solid border-slate-200 bg-white p-1.5 text-sm text-slate-900 shadow shadow-slate-200 outline-0 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:shadow-slate-900`,
              resolvedSlotProps?.className
            ),
          };
        },
        popper: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.popper,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(`absolute z-[99999]`, resolvedSlotProps?.className),
            container: () => document.getElementById('__next'),
          };
        },
      }}
    >
      {options.map(({ value, label }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      ))}
    </MuiSelect>
  );
});

export const Select: React.FC<DropdownProps> = (props) => {
  return <CustomSelect {...props} />;
};

// FULL REFERENCE ------------------
// https://mui.com/base-ui/react-select/
