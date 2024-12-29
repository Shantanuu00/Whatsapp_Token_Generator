import crypto from 'crypto';

/**
 * Generates a unique, secure key.
 * @returns {string} A key string in the format: KEY-<16 random characters>.
 */
export const generateSecureKey = () => {
  const randomBytes = crypto.randomBytes(8).toString('hex').toUpperCase();
  return `KEY-${randomBytes}`;
};
