export function getRoomId(usedId1: string, userId2: string) {
  const sortedIds = [usedId1, userId2].sort();
  const roomId = sortedIds.join("-");

  return roomId;
}
