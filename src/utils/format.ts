export function formatImagePath(path: string) {
  const removedPath = path.split("/ImagePicker/");

  return removedPath[1];
}
