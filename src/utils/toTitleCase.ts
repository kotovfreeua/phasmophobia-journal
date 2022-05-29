export const toTitleCase = (str: string) =>
  str
    .split(/[_-\s]/)
    .map((text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())
    .join(" ");
