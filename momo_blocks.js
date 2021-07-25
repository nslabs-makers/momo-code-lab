Blockly.Blocks['move_momo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move")
        .appendField(new Blockly.FieldDropdown([["Forward","http://momo.local:8080/motors/forward"], ["Back","http://momo.local:8080/motors/back"], ["Left","http://momo.local:8080/motors/left"], ["Right","http://momo.local:8080/motors/right"]]), "Direction");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
