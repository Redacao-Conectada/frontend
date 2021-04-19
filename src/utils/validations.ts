export function validateEmail(email: string): string {
  // eslint-disable-next-line no-useless-escape
  const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.trim().length === 0) {
    return 'Email não pode ser vazio';
  }
  if (regularExpression.test(String(email).toLowerCase())) {
    return '';
  }
  return 'Digite um e-mail válido.';
}
