/** 
 * this is a custom header you can add to every file!
 * Untyped file generated from VariantsWithPayload.re by genType.
 */
/* eslint-disable */

const $$toJS13337556 = {"0": "ARenamed"};

const $$toRE13337556 = {"ARenamed": 0};

const $$toJS346759412 = {"0": "A", "1": "B", "2": "C"};

const $$toRE346759412 = {"A": 0, "B": 1, "C": 2};

const $$toJS435467058 = {"97": "a", "98": "bRenamed", "937218926": true, "-574635695": 20, "803296723": 0.5};

const $$toRE435467058 = {"a": 97, "bRenamed": 98, "true": 937218926, "20": -574635695, "0.5": 803296723};

import * as VariantsWithPayloadBS from './VariantsWithPayload.bs';

export const testWithPayload = function (Arg1) {
  const result = VariantsWithPayloadBS.testWithPayload(typeof(Arg1) === 'object'
    ? {HASH: /* c */99, VAL: Arg1}
    : $$toRE435467058[Arg1.toString()]);
  return typeof(result) === 'object'
    ? result.VAL
    : $$toJS435467058[result]
};

export const printVariantWithPayload = function (Arg1) {
  const result = VariantsWithPayloadBS.printVariantWithPayload(typeof(Arg1) === 'object'
    ? {HASH: /* c */99, VAL: Arg1}
    : $$toRE435467058[Arg1.toString()]);
  return result
};

export const testManyPayloads = function (Arg1) {
  const result = VariantsWithPayloadBS.testManyPayloads(Arg1.tag==="oneRenamed"
    ? {HASH: /* one */5544550, VAL: Arg1.value}
    : Arg1.tag===2
    ? {HASH: /* two */5795212, VAL: Arg1.value}
    : {HASH: /* three */261117022, VAL: Arg1.value});
  return result.HASH===/* one */5544550
    ? {tag:"oneRenamed", value:result.VAL}
    : result.HASH===/* two */5795212
    ? {tag:2, value:result.VAL}
    : {tag:"three", value:result.VAL}
};

export const printManyPayloads = function (Arg1) {
  const result = VariantsWithPayloadBS.printManyPayloads(Arg1.tag==="oneRenamed"
    ? {HASH: /* one */5544550, VAL: Arg1.value}
    : Arg1.tag===2
    ? {HASH: /* two */5795212, VAL: Arg1.value}
    : {HASH: /* three */261117022, VAL: Arg1.value});
  return result
};

export const testSimpleVariant = function (Arg1) {
  const result = VariantsWithPayloadBS.testSimpleVariant($$toRE346759412[Arg1]);
  return $$toJS346759412[result]
};

export const testVariantWithPayloads = function (Arg1) {
  const result = VariantsWithPayloadBS.testVariantWithPayloads(typeof(Arg1) === 'object'
    ? Arg1.tag==="B"
      ? {TAG: 0, _0:Arg1.value}
      : Arg1.tag==="C"
      ? {TAG: 1, _0:Arg1.value[0], _1:Arg1.value[1]}
      : Arg1.tag==="D"
      ? {TAG: 2, _0:Arg1.value}
      : {TAG: 3, _0:Arg1.value[0], _1:Arg1.value[1], _2:Arg1.value[2]}
    : $$toRE13337556[Arg1]);
  return typeof(result) === 'object'
    ? result.TAG===0
      ? {tag:"B", value:result._0}
      : result.TAG===1
      ? {tag:"C", value:result}
      : result.TAG===2
      ? {tag:"D", value:result._0}
      : {tag:"E", value:result}
    : $$toJS13337556[result]
};

export const printVariantWithPayloads = function (Arg1) {
  const result = VariantsWithPayloadBS.printVariantWithPayloads(typeof(Arg1) === 'object'
    ? Arg1.tag==="B"
      ? {TAG: 0, _0:Arg1.value}
      : Arg1.tag==="C"
      ? {TAG: 1, _0:Arg1.value[0], _1:Arg1.value[1]}
      : Arg1.tag==="D"
      ? {TAG: 2, _0:Arg1.value}
      : {TAG: 3, _0:Arg1.value[0], _1:Arg1.value[1], _2:Arg1.value[2]}
    : $$toRE13337556[Arg1]);
  return result
};

export const testVariant1Int = function (Arg1) {
  const result = VariantsWithPayloadBS.testVariant1Int({TAG: 0, _0:Arg1.value});
  return {tag:"R", value:result._0}
};

export const testVariant1Object = function (Arg1) {
  const result = VariantsWithPayloadBS.testVariant1Object({TAG: 0, _0:Arg1});
  return result._0
};
