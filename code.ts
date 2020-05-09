// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__, {
  width: 240,
  height: 450,
});

let allFonts = [
  "Roboto",
  "Open Sans",
  "Lato",
  "Poppins",
  "PT Serif",
  "Lora",
  "Nunito",
  "Noto Serif",
  "Fira Sans",
  "Work Sans",
  "Merriweather",
  "Playfair Display",
  "Comic Neue",
  "Montserrat",
  "Oswald",
  "Raleway",
  "Roboto Slab",
  "Ubuntu",
  "Muli",
  "Nunito",
  "Titillium Web",
  "Quicksand",
  "Nanum Gothic",
  "Inter",
  "IBM Plex Sans",
  "Cabin",
  "Karla",
  "Gotu",
  "IBM Plex Serif",
];

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.

figma.ui.onmessage = async (message) => {
  var lockedFeatures;

  if (message.length >= 1) {
    lockedFeatures = message.split(",");
  } else {
    lockedFeatures = [];
  }

  let typefaceLock = { locked: false };
  let textFillLock = { locked: false };

  let accentFillLock = { locked: false };

  let backgroundFillLock = { locked: false };
  let cardFillLock = { locked: false };
  let strokeFillLock = { locked: false };

  let borderRadiusLock = { locked: false };
  let shadowLock = { locked: false };

  var featureObj = [
    typefaceLock,
    textFillLock,
    accentFillLock,
    backgroundFillLock,
    cardFillLock,
    strokeFillLock,
    borderRadiusLock,
    shadowLock,
  ];

  var allFeatures = [
    "typefaceLock",
    "textFillLock",
    "accentFillLock",
    "backgroundFillLock",
    "cardFillLock",
    "strokeFillLock",
    "borderRadiusLock",
    "shadowLock",
  ];

  for (let i = 0; i <= lockedFeatures.length; i++) {
    if (lockedFeatures[i] == "accentFillLock") {
      accentFillLock.locked = true;
    }
  }

  for (let i = 0; i <= lockedFeatures.length; i++) {}

  if (message.length >= 1) {
    for (let i = 0; i <= lockedFeatures.length; i++) {
      for (let j = 0; j <= allFeatures.length; j++) {
        if (lockedFeatures[i] != undefined) {
          if (lockedFeatures[i] == allFeatures[j]) {
            featureObj[j].locked = true;
          }
        }
      }
    }
  }

  let red,
    green,
    blue,
    accent,
    backgroundRed,
    backgroundGreen,
    backgroundBlue,
    randFont,
    textFill,
    backgroundFill,
    buttonText,
    cardFill,
    shadowFill,
    cardRadius,
    cardRound,
    shadowSize,
    cardCompleteRound,
    buttonCompleteRound,
    buttonRadius,
    strokeWeight,
    cardOutline,
    accentH,
    lightH,
    lightS,
    lightB,
    lightFill,
    ultraLightFill,
    ultraLightS,
    ultraLightH,
    ultraLightB,
    hue,
    darkH,
    darkS,
    darkB,
    darkfill,
    accentS,
    accentB,
    accentFill,
    darkWhite,
    darkBlackH,
    darkBlackS,
    darkBlackB,
    darkgreyH,
    darkgreyS,
    darkgreyB,
    shadowH,
    shadowS,
    shadowB,
    shadowOpacity,
    strokeOpacity,
    lineFill;

  //GENERATE COLOR
  hue = getRandomInt(0, 360);

  if (Math.random() < 0.5) {
    accentH = hue;
  } else {
    accentH = hue + 360;
    if (accentH > 360) {
      accentH -= 360;
    }
  }
  accentS = getRandomInt(60, 100);
  accentB = getRandomInt(70, 50);

  accentFill = hsvToRgb(accentH, accentS, accentB);

  //shadow color
  shadowH = accentH + getRandomInt(-30, 30);
  shadowS = getRandomInt(60, 100);
  shadowB = getRandomInt(0, 100);

  shadowFill = hsvToRgb(shadowH, shadowS, shadowB);

  //light mode
  if (Math.random() < 0.5) {
    //text fill
    darkH = hue + getRandomInt(-30, 30);
    darkB = getRandomInt(0, 35);
    darkS = getRandomInt(0, 80);

    textFill = hsvToRgb(darkH, darkS, darkB);

    //background
    lightH = accentH + getRandomInt(-30, 30);
    lightS = getRandomInt(3, 20);
    lightB = getRandomInt(90, 97);

    if (Math.random() < 0.5) {
      backgroundFill = hsvToRgb(lightH, lightS, lightB);
    } else {
      backgroundFill = [1, 1, 1];
    }

    //card fill
    ultraLightH = accentH + getRandomInt(-30, 30);
    ultraLightS = getRandomInt(0, 20);
    ultraLightB = getRandomInt(97, 100);

    if (Math.random() < 0.7) {
      cardFill = hsvToRgb(ultraLightH, ultraLightS, ultraLightB);
    } else {
      cardFill = [1, 1, 1];
    }

    //shadow opacity
    shadowOpacity = mapRange(getRandomInt(5, 25), 0, 100, 0, 1);

    //stroke opacity
    strokeOpacity = 0.2;
  } else {
    //dark mode

    //text fill
    textFill = [1, 1, 1];

    //background
    darkBlackH = accentH + getRandomInt(-30, 30);
    darkBlackS = getRandomInt(0, 100);
    darkBlackB = getRandomInt(0, 20);
    backgroundFill = hsvToRgb(darkBlackH, darkBlackS, darkBlackB);

    //cardFill
    darkgreyH = accentH + getRandomInt(-30, 30);
    darkgreyS = getRandomInt(0, 30);

    darkgreyB = getRandomInt(30, 50);

    cardFill = hsvToRgb(darkgreyH, darkgreyS, darkgreyB);

    //shadow opacity
    shadowOpacity = 0.5;

    //stroke opacity
    strokeOpacity = 0.4;
  }

  if (Math.random() < 0.7) {
    strokeWeight = 0;
    shadowSize = getRandomInt(5, 60);
  } else {
    strokeWeight = 2;
    shadowSize = 0;
    shadowOpacity = 0;
  }

  if (cardRound) {
    cardRadius = Math.floor(Math.random() * 20) + 1;
    buttonRadius = cardRadius;
  } else {
    cardRadius = 0;
    buttonRadius = 0;
  }

  randFont = allFonts[Math.floor(Math.random() * allFonts.length)];

  await figma.loadFontAsync({
    family: randFont,
    style: "Regular",
  });

  await figma.loadFontAsync({
    family: randFont,
    style: "Bold",
  });

  if (accentFillLock.locked == false) {
    for (let node of figma.currentPage.findAll((n) => n.name === "button")) {
      if ("fills" in node) {
        node.fills = [
          {
            type: "SOLID",
            color: { r: accentFill[0], g: accentFill[1], b: accentFill[2] },
          },
        ];
      }
    }
  }

  if (textFillLock.locked == false) {
    for (let node of figma.currentPage.findAll(
      (n) => n.type === "TEXT" && n.name != "buttonText"
    )) {
      if (node.type === "TEXT") {
        node.fills = [
          {
            type: "SOLID",
            color: { r: textFill[0], g: textFill[1], b: textFill[2] },
          },
        ];
      }
    }
  }

  if (backgroundFillLock.locked == false) {
    for (let node of figma.currentPage.findAll((n) => n.type === "FRAME")) {
      if (node.type === "FRAME") {
        node.backgrounds = [
          {
            blendMode: "NORMAL",
            color: {
              r: backgroundFill[0],
              g: backgroundFill[1],
              b: backgroundFill[2],
            },
            opacity: 1,
            type: "SOLID",
            visible: true,
          },
        ];
      }
    }
  }

  if (cardFillLock.locked == false) {
    for (const node of figma.currentPage.findAll((n) => n.name == "card")) {
      if (node.type === "RECTANGLE") {
        node.fills = [
          {
            type: "SOLID",
            color: {
              r: cardFill[0],
              g: cardFill[1],
              b: cardFill[2],
            },
          },
        ];
      }
    }
  }

  if (borderRadiusLock.locked == false) {
    for (let node of figma.currentPage.findAll((n) => n.name === "card")) {
      if (node.type === "RECTANGLE") {
        node.cornerRadius = cardRadius;
      }
    }
  }

  if (strokeFillLock.locked == false) {
    for (let node of figma.currentPage.findAll((n) => n.name === "card")) {
      if (node.type === "RECTANGLE") {
        node.strokeWeight = strokeWeight;
      }
    }
  }

  for (let node of figma.currentPage.findAll((n) => n.name === "card")) {
    if (strokeFillLock.locked == false) {
      if (node.type === "RECTANGLE") {
        node.strokes = [
          {
            blendMode: "NORMAL",
            color: { r: textFill[0], g: textFill[1], b: textFill[2] },
            opacity: strokeOpacity,
            type: "SOLID",
            visible: true,
          },
        ];
      }
    }
  }

  if (shadowLock.locked == false) {
    for (let node of figma.currentPage.findAll((n) => n.name === "card")) {
      if (node.type === "RECTANGLE") {
        // console.log(shadowSize);
        node.effects = [
          {
            blendMode: "NORMAL",
            color: {
              r: shadowFill[0],
              g: shadowFill[1],
              b: shadowFill[2],
              a: shadowOpacity,
            },
            offset: { x: 0, y: 0 },
            radius: getRandomInt(0, 50),
            type: "DROP_SHADOW",
            visible: true,
          },
        ];
      }
    }
  }

  if (shadowLock.locked == false) {
    for (let node of figma.currentPage.findAll((n) => n.name === "button")) {
      if ("effects" in node) {
        node.effects = [
          {
            blendMode: "NORMAL",
            color: {
              r: shadowFill[0],
              g: shadowFill[1],
              b: shadowFill[2],
              a: shadowOpacity,
            },
            offset: { x: 0, y: 0 },
            radius: shadowSize,
            type: "DROP_SHADOW",
            visible: true,
          },
        ];
      }
    }
  }

  for (let node of figma.currentPage.findAll((n) => n.name === "button")) {
    if ("strokeWeight" in node) {
      node.strokeWeight = 0;
    }
  }

  if (borderRadiusLock.locked == false) {
    for (let node of figma.currentPage.findAll((n) => n.name === "button")) {
      if ("cornerRadius" in node) {
        node.cornerRadius = buttonRadius;
      }
    }
  }

  for (let node of figma.currentPage.findAll((n) => n.name === "input")) {
    if (node.type === "RECTANGLE") {
      console.log("hii");

      node.strokeWeight = 1;
    }
  }

  for (let node of figma.currentPage.findAll((n) => n.name === "input")) {
    console.log("hi");
    if (node.type === "RECTANGLE") {
      node.strokes = [
        {
          blendMode: "NORMAL",
          color: { r: textFill[0], g: textFill[1], b: textFill[2] },
          opacity: strokeOpacity * 1.5,
          type: "SOLID",
          visible: true,
        },
      ];
    }
  }

  if (strokeFillLock.locked == false) {
    for (let node of figma.currentPage.findAll((n) => n.type === "LINE")) {
      if (node.type === "LINE") {
        node.strokes = [
          {
            blendMode: "NORMAL",
            color: { r: textFill[0], g: textFill[1], b: textFill[2] },
            opacity: 1,
            type: "SOLID",
            visible: true,
          },
        ];
      }
    }
  }

  if (strokeFillLock.locked == false) {
    for (let node of figma.currentPage.findAll((n) => n.type === "LINE")) {
      if (node.type === "LINE") {
        node.strokes = [
          {
            blendMode: "NORMAL",
            color: { r: textFill[0], g: textFill[1], b: textFill[2] },
            opacity: 1,
            type: "SOLID",
            visible: true,
          },
        ];
      }
    }
  }

  if (strokeFillLock.locked == false) {
    for (let node of figma.currentPage.findAll((n) => n.type === "VECTOR")) {
      if (node.type === "VECTOR") {
        node.strokes = [
          {
            blendMode: "NORMAL",
            color: { r: textFill[0], g: textFill[1], b: textFill[2] },
            opacity: 1,
            type: "SOLID",
            visible: true,
          },
        ];
      }
    }
  }

  if (typefaceLock.locked == false) {
    for (let node of figma.currentPage.findAll((n) => n.type === "TEXT")) {
      if (node.type === "TEXT" && "fontName" in node) {
        let fontStyle = Object.keys(node.fontName).map(
          (key) => node.fontName[key]
        )[1];
        node.fontName = { family: randFont, style: fontStyle };
      }
    }
  }

  if (borderRadiusLock.locked == false) {
    for (let node of figma.currentPage.findAll((n) => n.name === "input")) {
      if (node.type === "RECTANGLE") {
        node.cornerRadius = buttonRadius;
      }
    }
  }

  for (let node of figma.currentPage.findAll((n) => n.name === "buttonText")) {
    if (node.type === "TEXT") {
      node.fills = [
        {
          type: "SOLID",
          color: { r: 1, g: 1, b: 1 },
        },
      ];
    }
  }
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRand(min, max) {
  return Math.random() * (max - min) + min;
}

function mapRange(value, a, b, c, d) {
  // first map value from (a..b) to (0..1)
  value = (value - a) / (b - a);
  // then map it from (0..1) to (c..d) and return it
  return c + value * (d - c);
}

function hsvToRgb(h, s, v) {
  var r, g, b;
  var i;
  var f, p, q, t;

  // Make sure our arguments stay in-range
  h = Math.max(0, Math.min(360, h));
  s = Math.max(0, Math.min(100, s));
  v = Math.max(0, Math.min(100, v));

  // We accept saturation and value arguments from 0 to 100 because that's
  // how Photoshop represents those values. Internally, however, the
  // saturation and value are calculated from a range of 0 to 1. We make
  // That conversion here.
  s /= 100;
  v /= 100;

  if (s == 0) {
    // Achromatic (grey)
    r = g = b = v;
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  h /= 60; // sector 0 to 5
  i = Math.floor(h);
  f = h - i; // factorial part of h
  p = v * (1 - s);
  q = v * (1 - s * f);
  t = v * (1 - s * (1 - f));

  switch (i) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;

    case 1:
      r = q;
      g = v;
      b = p;
      break;

    case 2:
      r = p;
      g = v;
      b = t;
      break;

    case 3:
      r = p;
      g = q;
      b = v;
      break;

    case 4:
      r = t;
      g = p;
      b = v;
      break;

    default:
      // case 5:
      r = v;
      g = p;
      b = q;
  }

  return [
    mapRange(Math.round(r * 255), 0, 255, 0, 1),
    mapRange(Math.round(g * 255), 0, 255, 0, 1),
    mapRange(Math.round(b * 255), 0, 255, 0, 1),
  ];
}
