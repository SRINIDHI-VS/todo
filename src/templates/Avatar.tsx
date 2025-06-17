import type { SxProps } from "@mui/material";
import Avatar from "@mui/material/Avatar";
type Variant = "circular" | "square";
type Size = "sm" | "md" | "lg";
interface IAvatarprops {
  source: string;
  alt?: string;
  variant?: Variant;
  className?: string;
  size?: Size;
}

const sizeToSx: Record<Size, SxProps> = {
  sm: {
    width: 24,
    height: 24,
  },
  md: {
    width: 32,
    height: 32,
  },

  lg: {
    width: 48,
    height: 48,
  },
};

export const Avatars = ({
  source,
  alt,
  variant = "circular",
  className,
  size = "md",
}: IAvatarprops) => {
  const sx = sizeToSx[size];
  return (
    <Avatar
      sx={sx}
      variant={variant}
      src={source}
      alt={alt}
      className={className}
    />
  );
};
