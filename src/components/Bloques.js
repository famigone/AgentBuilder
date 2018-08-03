import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Blockly from 'node-blockly/browser'; 

import BlocklyDrawer, { Block, Category } from 'react-blockly-drawer';

const helloWorld =  {
    name: 'HelloWorld',
    category: 'AGENTE',
    block: {
      init: function () {
        this.jsonInit({
          message0: 'Hello %1',
          args0: [
            {
              type: 'field_input',
              name: 'NAME',
              check: 'String',
            },
          ],
          output: 'String',
          colour: 160,
          tooltip: 'Says Hello',
        });
      },
    },
    generator: (block) => {
      const message = `'${block.getFieldValue('NAME')}'` || '\'\'';
      const code = `console.log('Hello ${message}')`;
      return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
  }

class Bloques extends Component {

 

  render() {
    return(

    <BlocklyDrawer
      tools={[helloWorld]}
      onChange={(code, workspace) => {
        console.log(code, workspace);
      }}
      appearance={
        {
          categories: {
            AGENTE: {
              colour: '270'
            },
          },
        }
      }
    >
   

   <category name="Control" colour="%{BKY_LOGIC_HUE}">
      
        <block type="controls_if"></block>
        <block type="controls_if">
          <mutation else="1"></mutation>
        </block>
        <block type="controls_if">
          <mutation elseif="1" else="1"></mutation>
        </block>
      </category>
      
     <category name="Loops" colour="%{BKY_LOOPS_HUE}">
      <block type="controls_repeat_ext">
        <value name="TIMES">
          <block type="math_number">
            <field name="NUM">10</field>
          </block>
        </value>
      </block>
      <block type="controls_whileUntil"></block>
      <block type="controls_for">
        <field name="VAR">i</field>
        <value name="FROM">
          <block type="math_number">
            <field name="NUM">1</field>
          </block>
        </value>
        <value name="TO">
          <block type="math_number">
            <field name="NUM">10</field>
          </block>
        </value>
        <value name="BY">
          <block type="math_number">
            <field name="NUM">1</field>
          </block>
        </value>
      </block>
      <block type="controls_forEach"></block>
      <block type="controls_flow_statements"></block>
    </category>
 <category name="Boolean" colour="%{BKY_LOGIC_HUE}">
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="logic_negate"></block>
        <block type="logic_boolean"></block>
        <block type="logic_null"></block>
        <block type="logic_ternary"></block>
      </category>


 <category name="Variables" colour="330" custom="VARIABLE"></category>
  <category name="Functions" colour="290" custom="PROCEDURE"></category>




    </BlocklyDrawer>
)
}
}

export default Bloques;