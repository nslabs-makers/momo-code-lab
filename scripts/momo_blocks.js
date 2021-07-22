Blockly.defineBlocksWithJsonArray([{
  "type": "move_momo",
  "message0": "Move %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "Direction",
      "options": [
        [
          "Forward",
          "http://momo.local:8080/motors/forward"
        ],
        [
          "Back",
          "http://momo.local:8080/motors/back"
        ],
        [
          "Left",
          "http://momo.local:8080/motors/left"
        ],
        [
          "Right",
          "http://momo.local:8080/motors/right"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
}]);
