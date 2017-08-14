/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating JavaScript for dictionary blocks.
 * @author acbart@vt.edu (Austin Cory Bart) Original Python generator.
 * @author JC-Orozco (Juan Carlos Orozco) Ported to JavaScript.
 */
'use strict';

goog.provide('Blockly.JavaScript.dicts');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['dict_get'] = function(block) {
  var dict = Blockly.JavaScript.valueToCode(block, 'DICT',
      Blockly.JavaScript.ORDER_MEMBER) || '___';
  var value = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_NONE) || '___';
  var code = dict + '[' + value + ']';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['dict_get_literal'] = function(block) {
  var dict = Blockly.JavaScript.valueToCode(block, 'DICT',
      Blockly.JavaScript.ORDER_MEMBER) || '___';
  var value = Blockly.JavaScript.quote_(block.getFieldValue('ITEM'));
  var code = dict + "['" + value + "']";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['dicts_create_with'] = function(block) {
    var value_keys = Blockly.JavaScript.valueToCode(block, 'keys', Blockly.   JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = new Array(block.itemCount_);
  
    for (var n = 0; n < block.itemCount_; n++) {
        var key = Blockly.JavaScript.quote_(block.getFieldValue('KEY' + n));
        var value = Blockly.JavaScript.valueToCode(block, 'VALUE' + n,
                Blockly.JavaScript.ORDER_NONE) || '___';
        code[n] = key +": "+ value;
    }
    code = '{' + code.join(', ') + '}';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['dict_keys'] = function(block) {
  var dict = Blockly.JavaScript.valueToCode(block, 'DICT',
      Blockly.JavaScript.ORDER_MEMBER) || '___';
  var code = 'ObjectKeys(' + dict + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

