import clsx from "clsx";
import type { FC, ReactNode } from "react";
import React, { useCallback } from "react";

type htmlElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "label";

type BigHeadingVariant = "d1" | "d2" | "h1" | "h2";

type SmallHeadingVariant = "h3" | "h4" | "h5";

type ParagraphyVariant = "plarge" | "pregular" | "psmaller" | "psmall";

type LabelVariant = "labelsmall" | "labelbig";

type ITypographyProps =
  | {
      className?: string;
      children: ReactNode;
      id?: string;
    } & (
      | {
          variant?: BigHeadingVariant;
          as?: "h1" | "h2";
        }
      | {
          variant?: SmallHeadingVariant;
          as?: "h3" | "h4" | "h5";
        }
      | {
          variant?: ParagraphyVariant;
          as?: "p" | "span" | "label";
        }
      | {
          variant?: LabelVariant;
          as?: "p" | "span" | "label";
        }
    );

const classes: {
  [key in
    | BigHeadingVariant
    | SmallHeadingVariant
    | ParagraphyVariant
    | LabelVariant]: string | undefined;
} = {
  d1: "display-1",
  d2: "display-2",
  h1: undefined,
  h2: undefined,
  h3: undefined,
  h4: undefined,
  h5: undefined,
  plarge: undefined,
  pregular: "pregular",
  psmall: "psmall",
  psmaller: "psmaller",
  labelbig: "label-big",
  labelsmall: "label-small",
};

export const Typography: FC<ITypographyProps> = ({
  as,
  children,
  variant = "plarge",
  className = "",
  ...otherProps
}) => {
  const getComponentType = useCallback((): htmlElement => {
    if (as) {
      return as;
    }

    if (
      variant === "h1" ||
      variant === "h2" ||
      variant === "h3" ||
      variant === "h4" ||
      variant === "h5"
    ) {
      return variant;
    }

    if (variant[0] === "d") {
      return "h2";
    }

    if (variant[0] === "p") {
      return "p";
    }

    if (variant[0] === "l") {
      return "label";
    }

    return "p";
  }, [as, variant]);

  const elementType = getComponentType();

  return React.createElement(
    elementType,
    { className: clsx(classes[variant], className), ...otherProps },
    children
  );
};
