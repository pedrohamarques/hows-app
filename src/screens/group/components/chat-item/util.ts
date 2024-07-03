import { formatRelative } from "date-fns";
import { enUS } from "date-fns/locale";

import { Timestamp } from "firebase/firestore";

export function formatTimestamp(timestamp: Timestamp) {
  const convertedDate = new Date(timestamp.seconds * 1000);

  const formatRelativeLocale = {
    lastWeek: "dd/MM",
    yesterday: "'yesterday at' p",
    today: "p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  };

  return formatRelative(convertedDate, new Date(), {
    locale: { ...enUS, formatRelative: (token) => formatRelativeLocale[token] },
  });
}
