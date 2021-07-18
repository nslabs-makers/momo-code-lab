Blockly.defineBlocksWithJsonArray([
  {
    "type": "move_momo",
    "message0": "Move %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [
          ["Forward", "http://momo.local:8080/motors/forward"],
          ["Back", "http://momo.local:8080/motors/forward"],
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 50
  }
]);
