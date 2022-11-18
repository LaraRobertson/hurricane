const settings = {
  "name": "hurricane",
  "state": {
    "frontity": {
      "url": "https://escapeoutgames.tybeewebdesign.com/",
      "title": "Escape Out Games",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      name: "hurricane-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://escapeoutgames.tybeewebdesign.com/",
          "homepage": "home",
          "postTypes": [
            {
              type: "destinations",
              endpoint: "destinations",
              archive: "/destinations"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
