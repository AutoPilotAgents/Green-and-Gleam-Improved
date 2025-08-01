const HEADER_OFFSET = 80; // approximate sticky header height

export function smoothScrollToId(id: string, options?: { offset?: number }) {
  const el = document.getElementById(id);
  if (!el) return;

  const offset = options?.offset ?? HEADER_OFFSET;
  const rect = el.getBoundingClientRect();
  const absoluteY = rect.top + window.pageYOffset - offset;

  window.scrollTo({
    top: absoluteY,
    behavior: 'smooth',
  });
}