export function error(status, msg) {
  var err = new Error(msg);
  err.status = status;
  return err;
}
export default (status, msg) => error(status, msg);