export const UISchema = {
  "type": "VerticalLayout",
  "elements": [
    {
      "type": "Control",
      "label": "Name",
      "scope": {
        "$ref": "#/properties/name"
      }
    },
    {
      "type": "Control",
      "label": "Description",
      "scope": {
        "$ref": "#/properties/description"
      },
      "options": {
        "multi": true
      }
    },
    {
      "type": "Control",
      "label": "Rating",
      "scope": {
        "$ref": "#/properties/rating"
      },
      "options": {
        "multi": true
      }
    },
    {
      "type": "Control",
      "label": "Done?",
      "scope": {
        "$ref": "#/properties/done"
      }
    }
  ]
}
