export function choice(items) {
  const randomItem = Math.floor(Math.random() * items.length);
  return items[randomItem];
}

export function remove(items, item) {
  const index = items.indexOf(item);
  if (index !== -1) {
    return [...items.slice(0, index), ...items.slice(index + 1)];
  }
  return items;
}