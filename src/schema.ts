export const Schema = {
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "rating": {
      "type": "integer",
      "maximum": 5
    },
    "done": {
      "type": "boolean"
    }
  },
  "required": ["name"]
}
