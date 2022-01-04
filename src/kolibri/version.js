export { release, dateStamp, versionInfo, clientId }

const release     = "0.1.36";

const dateStamp   = "2022-01-04 T 15:32:20 MEZ";

const versionInfo = release + " at " + dateStamp;

const stamp       = () => Math.random().toString(36).slice(2).padEnd(11,"X").slice(0,11);

/**
 * A constant random string of 22 lowercase characters/digits, probability: 1 of 36 ** 22 > 1.7e+34,
 * generated at construction time.
 * @type { String }
 */
const clientId    = stamp() + stamp();
