import { useEffect } from 'react';

const BASE_TITLE = 'Wise Up Tech';

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE_TITLE}` : `${BASE_TITLE} — IT Consulting | Make Complexity, Simple`;
  }, [title]);
}
