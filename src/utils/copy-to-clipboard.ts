/**
 * Portions adapted from Cypress Documentation.
 * Copyright (c) 2017 Cypress.io (https://cypress.io)
 * Licensed under the MIT License. See THIRD_PARTY_NOTICES.md.
 */

/**
 * Copies text using the Clipboard API and falls back to a temporary textarea
 * when the API is unavailable, such as in an insecure local context.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Clipboard API is unavailable or the permission was denied.
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);

  try {
    textarea.select();
    return document.execCommand('copy');
  } catch {
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
}
