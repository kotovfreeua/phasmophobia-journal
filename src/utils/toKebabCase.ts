export default function toKebabCase(str: string) {
  return str.split(" ").join("-").toLowerCase();
}
