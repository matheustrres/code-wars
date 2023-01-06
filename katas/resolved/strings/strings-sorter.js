const stringsSorter = (str, locale, options) => {
  const result = [...str].sort((a, b) => a.localeCompare(b, locale, options));

  return result.join('');
}

console.log(
  stringsSorter('aãoyzqbc8179', 'pt-BR', {
    ignorePunctuation: true,
    sensitivity: 'base'
  })
); /* 1789aãbcoqyz */