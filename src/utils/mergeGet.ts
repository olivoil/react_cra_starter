import { flow, assignIn, map, reduce } from 'lodash/fp';
const reduceWithDefault = (reduce as any).convert({ cap: false });

/**
 * At a given attribute this will merge all objects
 * in a list of objects found at that attribute.
 *
 * @example
 * const listOfObjects = [
 *   {defaults: {a: 1}},
 *   {defaults: {b: {}}},
 *   {defaults: {c: "string"}}
 * ]
 *
 * // returns {a: 1, b: {}, c: "string"}
 * mergeGet("defaults")(listOfObjects)
 *
 * @param {String} attributeName - The Apollo cache
 * @returns {Function} Apollo State Link
 */
const mergeGet = (attributeName: string): Function =>
  flow(
    // pick a single attribute from each object
    map(attributeName as any),
    // merge all values into a single object
    reduceWithDefault(assignIn, {})
  );

export default mergeGet;
