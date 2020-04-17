/**
 * The Logger class is used to provide a uniform logger throughout
 * the extension
 */
class Logger {
  /**
   * Write an info level message to the console
   * @param {String} msg
   */
  info(msg) {
    log(console.info, msg);
  }

  /**
   * Write an debug level message to the console
   * @param {String} msg
   */
  debug(msg) {
    log(console.debug, msg);
  }

  /**
   * Write an error level message to the console
   * @param {String} msg
   */
  error(msg) {
    log(console.error, msg);
  }

  /**
   * Write an warning level message to the console
   * @param {String} msg
   */
  warn(msg) {
    log(console.warn, msg);
  }
}

export const Log = new Logger();

/**
 * Writes a log to the console, the 'fn' parameter expects a function
 * that can be invoked to write a log.
 * @param {Function} fn
 * @param {String} msg
 */
function log(fn, msg) {
  fn(`[SES] ${msg}`);
}
