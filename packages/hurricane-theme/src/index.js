import Root from "./components"
import link from "@frontity/html2react/processors/link";

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

const hurricaneTheme = {
  name: "hurricane-theme",
  roots: {
    theme: Root,
  },
  state: {
    themeNewHurricane: {
      isMapDetailVisible: false,
    },
    theme: {
      isUrlVisible: false,
      isGameDetailVisible: false,
      isMapDetailVisible: false,
      isWaiverVisible: true,
      isWaiverSigned: false,
      isFact1Visible: true,
      isFact2Visible: true,
      isFact3Visible: true,
      isFact4Visible: true,
      isFact5Visible: true,
      isDiaryVisible: true,
      isDiaryInsideVisible: false,
      isTornDiaryInsideVisible: false,
      isLegsVisible: false,
      isLegsAvailable: false,
      isNumBusVisible: false,
      isNumBusAvailable: false,
      isCornHoleBlueMsgVisible: false,
      isCornHoleYellowMsgVisible: false,
      isBusStopLit: false,
      isLightVisible: true,
      isTaserVisible: true,
      isTaserAvailable: false,
      isPryBarVisible: true,
      isKeyVisible: true,
      isLightOn: false,
      isPrybarOn: false,
      isKeyOn: false,
      isBackPackVisible: false,
      isSafeVisible: false,
      isSandBag2Visible: false,
      isKeyHoleAvailable: false,
      isCementSafeOpen: false,
      isCementSafeLockOpen: false,
      isCementSafeOpenSandbags: false,
      isCementSandbagMessageVisible: false,
      isCementSandbagMessage2Visible: false,
      isCementSandbagMessage3Visible: false,
      isOakSafeOpen: false,
      isButtonPressed: false,
      is2ndSafeVisible: false,
      is3rdSafeVisible: false,
      is4thSafeVisible: false,
      isSignVisible: false,
      is2ndSignVisible: false,
      isWordsVisible: false,
      isFloorMessageVisible: false,
      isTableVisible: false,
      isGame1Page1Wrong: true,
      haveGuessedGame1Page1: false,
      isGame1Page2Wrong: true,
      isGame1Page4Wrong: true,
      isGame2Page4Wrong: true,
      isGame1Page6Wrong: true,
      isGame1Page8Wrong: true,
      isGame1Page10Wrong: true,
      isGame2Page10Wrong: true,
      isGame3Page10Wrong: true,
      isGame4Page10Wrong: true,
      haveGuessedGame1Page2: false,
      haveGuessedGame1Page4: false,
      haveGuessedGame2Page4: false,
      haveGuessedGame1Page6: false,
      haveGuessedGame1Page8: false,
      haveGuessedGame1Page10: false,
      haveGuessedGame2Page10: false,
      haveGuessedGame3Page10: false,
      haveGuessedGame4Page10: false,
      backPackHasItems: false,
      isHeaderClosed: false,
      isInfoVisible: false,
      isRightBushOpen: false,
      isLeftBushOpen: false,
      isSpinnyThing1: "frisbee",
      isSpinnyThing2: "diary",
      isSpinnyThing3: "hat",
      isSpinnyThing4: "egg",
      isSpinnyRight: false,
      isPuzzlePiece1Visible: true,
      isPuzzlePiece2Visible: true,
      isPuzzlePiece3Visible: true,
      isPuzzlePiece4Visible: true,
      totalHintsHurricane: 0,
      isHint1Visible: false,
      isHint2Visible: false,
      isHint3Visible: false,
      isHint4Visible: false,
      /* not tracking use for now */
      isHint1Used: false,
      isHint2Used: false,
      isHint3Used: false,
      isHint4Used: false,
      /* Thief */
      haveGuessedGame1Word1Page1Thief: false,
      isGame1Word1Page1ThiefWrong: true,
      haveGuessedGame1Word2Page1Thief: false,
      isGame1Word2Page1ThiefWrong: true,
      haveGuessedGame1Word3Page1Thief: false,
      isGame1Word3Page1ThiefWrong: true,
      haveGuessedGame1Word4Page1Thief: false,
      isGame1Word4Page1ThiefWrong: true,
      backPackHasItemsThief: false,
      isLightVisibleThief: true,
      isKnobMessageVisible: false,
      isKnobMessageAvailable: false,
      isHoleOpen: false,
      clickCount: 0,
      clickTimeNow: 0,
      clickTimeThen: 0,
      isNotesThiefVisible: false,
      isSafeThiefVisible: false,
      isHint1ThiefVisible: false,
      isHint2ThiefVisible: false,
      isHint3ThiefVisible: false,
      isHint4ThiefVisible: false,
      /* not tracking use for now */
      isHint1ThiefUsed: false,
      isHint2ThiefUsed: false,
      isHint3ThiefUsed: false,
      isHint4ThiefUsed: false,
      totalHintsThief: 0,
      /* BackYard */
      isGreenEggHolderVisible: false,
      isGreenEggHidden: true,
      haveGuessedGreenEgg: false,
      isGreenEggWrong: true,
      isBlueEggHolderVisible: false,
      isBlueEggHidden: true,
      haveGuessedBlueEgg: false,
      isBlueEggWrong: true,
      isPinkEggHolderVisible: false,
      isPinkEggHidden: true,
      haveGuessedPinkEgg: false,
      isPinkEggWrong: true,
      isRedEggHolderVisible: false,
      isRedEggHidden: true,
      haveGuessedRedEgg: false,
      isRedEggWrong: true,
      isPurpleEggHolderVisible: false,
      isPurpleEggHidden: true,
      haveGuessedPurpleEgg: false,
      isPurpleEggWrong: true,
      isOrangeEggHolderVisible: false,
      isOrangeEggHidden: true,
      haveGuessedOrangeEgg: false,
      isOrangeEggWrong: true,
      isYellowEggHolderVisible: false,
      isYellowEggHidden: true,
      haveGuessedYellowEgg: false,
      isYellowEggWrong: true,
      isIndigoEggHolderVisible: false,
      isIndigoEggHidden: true,
      haveGuessedIndigoEgg: false,
      isIndigoEggWrong: true,
      isAquaEggHolderVisible: false,
      isAquaEggHidden: true,
      haveGuessedAquaEgg: false,
      isAquaEggWrong: true,
      isSunsetEggHolderVisible: false,
      isSunsetEggHidden: true,
      haveGuessedSunsetEgg: false,
      isSunsetEggWrong: true,
      isNeonEggHolderVisible: false,
      isNeonEggHidden: true,
      haveGuessedNeonEgg: false,
      isNeonEggWrong: true,
      isBrownEggHolderVisible: false,
      isBrownEggHidden: true,
      haveGuessedBrownEgg: false,
      isBrownEggWrong: true,
      isBlackEggHolderVisible: false,
      isBlackEggHidden: true,
      haveGuessedBlackEgg: false,
      isBlackEggWrong: true,
      isPeachEggHolderVisible: false,
      isPeachEggHidden: true,
      haveGuessedPeachEgg: false,
      isPeachEggWrong: true,
      isGreyEggHolderVisible: false,
      isGreyEggHidden: true,
      haveGuessedGreyEgg: false,
      isGreyEggWrong: true,
      isDarkgreenEggHolderVisible: false,
      isDarkgreenEggHidden: true,
      haveGuessedDarkgreenEgg: false,
      isDarkgreenEggWrong: true,
      

    },
    game: {
      backpack: [],
      backpackThief: [],
      thiefNotes: "",
      notes: "",
      saved: false,
      game1NumPage1guess: {game1Num1Page1:'',game1Num2Page1:''},
      game1NumPage2guess: {game1Num1Page2:'',game1Num2Page2:'',game1Num3Page2:'',game1Num4Page2:'',game1Num5Page2:''},
      game1NumPage4guess: {game1Num1Page4:'',game1Num2Page4:'',game1Num3Page4:'',game1Num4Page4:'',game1Num5Page4:''},
      game2NumPage4guess: {game2Num1Page4:'',game2Num2Page4:'',game2Num3Page4:'',game2Num4Page4:''},
      game1NumPage6guess: {game1LettersPage6:'',game1Num1Page6:'',game1Num2Page6:'',game1Num3Page6:'',game1Num4Page6:''},
      game1NumPage8guess: {game1Num1Page8:'',game1Num2Page8:'',game1Num3Page8:'',game1Num4Page8:'',game1Num5Page8:''},
      game1NumPage10guess: {game1Num1Page10:'',game1Num2Page10:'',game1Num3Page10:''},
      game2NumPage10guess: {game2Num1Page10:'',game2Num2Page10:'',game2Num3Page10:''},
      game3NumPage10guess: {game3Num1Page10:'',game3Num2Page10:'',game3Num3Page10:''},
      game4NumPage10guess: {game4Num1Page10:''},
      game1SpinnyPage10guess: {game1Spinny1Page10:'',game1Spinny2Page10:'',game1Spinny3Page10:'',game1Spinny4Page10:''},
      game1NumPage1: {game1Num1Page1:'1',game1Num2Page1:'2'},
      game1NumPage2: {game1Num1Page2:'3',game1Num2Page2:'9',game1Num3Page2:'6',game1Num4Page2:'8',game1Num5Page2:'2'},
      game1NumPage4: {game1Num1Page4:'7',game1Num2Page4:'8',game1Num3Page4:'5',game1Num4Page4:'9',game1Num5Page4:'4'},
      game2NumPage4: {game2Num1Page4:'3',game2Num2Page4:'6',game2Num3Page4:'8',game2Num4Page4:'7'},
      game1NumPage6: {game1LettersPage6:'SBOVHW',game1Num1Page6:'1',game1Num2Page6:'9',game1Num3Page6:'2',game1Num4Page6:'1'},
      game1NumPage8: {game1Num1Page8:'4',game1Num2Page8:'1',game1Num3Page8:'0',game1Num4Page8:'8',game1Num5Page8:'9'},
      game1NumPage10: {game1Num1Page10:'B',game1Num2Page10:'O',game1Num3Page10:'P'},
      game2NumPage10: {game2Num1Page10:'42',game2Num2Page10:'7',game2Num3Page10:'3'},
      game3NumPage10: {game3Num1Page10:'1',game3Num2Page10:'7',game3Num3Page10:'9'},
      game4NumPage10: {game4Num1Page10:'GO GET SANDBAGS'},
      game1SpinnyPage10: {game1Spinny1Page10:'diary',game1Spinny2Page10:'frisbee',game1Spinny3Page10:'key',game1Spinny4Page10:'dog'},
      game1Word1Page1ThiefGuess: {game1Word1Page1ThiefLetters:''},
      game1Word1Page1ThiefAnswer: {game1Word1Page1ThiefLetters:'bean'},
      game1Word2Page1ThiefGuess: {game1Word2Page1ThiefLetters:''},
      game1Word2Page1ThiefAnswer: {game1Word2Page1ThiefLetters:'plla'},
      game1Word3Page1ThiefGuess: {game1Word3Page1ThiefLetters:''},
      game1Word3Page1ThiefAnswer: {game1Word3Page1ThiefLetters:'ghiradelli'},
      game1Word4Page1ThiefGuess: {game1Word4Page1ThiefLetters:''},
      game1Word4Page1ThiefAnswer: {game1Word4Page1ThiefLetters:'inferno'},

      gameName: "",
      gamePage: "Intro",

      /* BackYard */
      gameNameBY: "",
      gamePageBY: "Backyard - Intro",
      greenEggGuess: {greenEggLetters:''},
      greenEggAnswer: {greenEggLetters:'ZEBRA'},
      BlueEggGuess: {BlueEggLetters:''},
      BlueEggAnswer: {BlueEggLetters:'CB07MB'},
      PinkEggGuess: {PinkEggLetters:''},
      PinkEggAnswer: {PinkEggLetters:'WRONG'},
      RedEggGuess: {RedEggLetters:''},
      RedEggAnswer: {RedEggLetters:'21'},
      PurpleEggGuess: {PurpleEggLetters:''},
      PurpleEggAnswer: {PurpleEggLetters:'TROPICAL'},
      OrangeEggGuess: {OrangeEggLetters:''},
      OrangeEggAnswer: {OrangeEggLetters:'TUFFI'},
      YellowEggGuess: {YellowEggLetters:''},
      YellowEggAnswer: {YellowEggLetters:'EXECUTIVE CHARTER'},
      IndigoEggGuess: {IndigoEggLetters:''},
      IndigoEggAnswer: {IndigoEggLetters:'COOL CRITTERS OUTREACH'},
      AquaEggGuess: {AquaEggLetters:''},
      AquaEggAnswer: {AquaEggLetters:'1948'},
      SunsetEggGuess: {SunsetEggLetters:''},
      SunsetEggAnswer: {SunsetEggLetters:'AWY 9563'},
      NeonEggGuess: {NeonEggLetters:''},
      NeonEggAnswer: {NeonEggLetters:'ADDIDAS'},
      BlackEggGuess: {BlackEggLetters:''},
      BlackEggAnswer: {BlackEggLetters:'7 LBS 7 OZ'},
      BrownEggGuess: {BrownEggLetters:''},
      BrownEggAnswer: {BrownEggLetters:'9'},
      GreyEggGuess: {GreyEggLetters:''},
      GreyEggAnswer: {GreyEggLetters:'DUCK'},
      PeachEggGuess: {PeachEggLetters:''},
      PeachEggAnswer: {PeachEggLetters:'OOH AAH POINT'},
      DarkgreenEggGuess: {DarkgreenEggLetters:''},
      DarkgreenEggAnswer: {DarkgreenEggLetters:'SPIDER-MAN'},
      /* Thief */
      gameNameThief: "",
      gamePageThief: "Intro - Thief",
    }
  },
  actions: {
    theme: {
      afterCSR: ({state}) => {
        console.log("state.game.saved: " + state.game.saved);
        if (state.router.link.includes("hurricane")) {
          console.log("1: state.router.link: " + state.router.link);
          state.game.gameName = "game: Hurricane";
          var gamePage = localStorage.getItem("gamePage");
          if (gamePage) {
            state.game.gamePage = localStorage.getItem("gamePage");
          }
        } else if (state.router.link.includes("backyard")) {
          console.log("1: state.router.link: " + state.router.link);
          state.game.gamePageBY = "Backyard - Intro";
          state.game.gameNameBY = "game: Backyard";
          var gamePage = localStorage.getItem("gamePageBY");
          if (gamePage) {
            state.game.gamePageBY = localStorage.getItem("gamePageBY");
            console.log("test gamePageBY: " + state.game.gamePageBY);
          }
        } else if (state.router.link.includes("thief")) {
          console.log("1: state.router.link: " + state.router.link);
          state.game.gamePageThief = "Intro - Thief";
          state.game.gameNameThief = "game: Thief";
          var gamePage = localStorage.getItem("gamePageThief");
          if (gamePage) {
            state.game.gamePageThief = localStorage.getItem("gamePageThief");
            console.log("test gamePageThief: " + state.game.gamePageThief);
          }
        }

        /* close header */
        const closeArray = [
          "Tybean Lower Porch",
          "Jaycee Park - Shelter",
          "Jaycee Park - Gazebo",
          "Small Dog Park",
          "Hucapoos",
          "Backyard - Game",
          "Tybean Lower Porch (thief)"
        ];
        state.theme.isHeaderClosed = false;
        for (var i = 0; i < closeArray.length; i++) {
          console.log("closeArray[i]: " + closeArray[i]);
          console.log("state.game.gamePage: " + state.game.gamePage);
          if (closeArray[i] === state.game.gamePage) {
            state.theme.isHeaderClosed = true;
          }
          if (closeArray[i] === state.game.gamePageBY) {
            state.theme.isHeaderClosed = true;
          }
          if (closeArray[i] === state.game.gamePageThief) {
            state.theme.isHeaderClosed = true;
          }
        }
        if (!state.game.saved) {
          /* waiver */
          if (localStorage.getItem('WaiverSigned') === "true") {
            state.theme.isWaiverVisible = false;
            state.theme.isWaiverSigned = true;
          }
          if (state.game.backpack.length === 0) {
            console.log("set up status");
            /* demo number for page 1 */
            if (localStorage.getItem('isGame1Page1Wrong') === "true" || localStorage.getItem('isGame1Page1Wrong') === null) {
              state.theme.isGame1Page1Wrong = true;
            } else {
              state.theme.isGame1Page1Wrong = false;
            }
            if (localStorage.getItem('haveGuessedGame1Page1') === "true") {
              state.theme.haveGuessedGame1Page1 = true;
            } else {
              state.theme.haveGuessedGame1Page1 = false;
            }
            if (localStorage.getItem('isGame1Page2Wrong') === "true" || localStorage.getItem('isGame1Page2Wrong') === null) {
              state.theme.isGame1Page2Wrong = true;
            } else {
              state.theme.isGame1Page2Wrong = false;
            }
            if (localStorage.getItem('haveGuessedGame1Page2') === "true") {
              state.theme.haveGuessedGame1Page2 = true;
            } else {
              state.theme.haveGuessedGame1Page2 = false;
            }
            if (localStorage.getItem('isGame1Page4Wrong') === "true" || localStorage.getItem('isGame1Page4Wrong') === null) {
              state.theme.isGame1Page4Wrong = true;
            } else {
              state.theme.isGame1Page4Wrong = false;
            }
            if (localStorage.getItem('haveGuessedGame1Page4') === "true") {
              state.theme.haveGuessedGame1Page4 = true;
            } else {
              state.theme.haveGuessedGame1Page4 = false;
            }
            if (localStorage.getItem('isGame2Page4Wrong') === "true" || localStorage.getItem('isGame2Page4Wrong') === null) {
              state.theme.isGame2Page4Wrong = true;
            } else {
              state.theme.isGame2Page4Wrong = false;
            }
            if (localStorage.getItem('haveGuessedGame2Page4') === "true") {
              state.theme.haveGuessedGame2Page4 = true;
            } else {
              state.theme.haveGuessedGame2Page4 = false;
            }
            if (localStorage.getItem('isGame1Page6Wrong') === "true" || localStorage.getItem('isGame1Page6Wrong') === null) {
              state.theme.isGame1Page6Wrong = true;
            } else {
              state.theme.isGame1Page6Wrong = false;
            }
            if (localStorage.getItem('haveGuessedGame1Page6') === "true") {
              state.theme.haveGuessedGame1Page6 = true;
            } else {
              state.theme.haveGuessedGame1Page6 = false;
            }
            if (localStorage.getItem('isGame1Page8Wrong') === "true" || localStorage.getItem('isGame1Page8Wrong') === null) {
              state.theme.isGame1Page8Wrong = true;
            } else {
              console.log("set isGame1Page8Wrong false");
              state.theme.isGame1Page8Wrong = false;
            }
            if (localStorage.getItem('haveGuessedGame1Page8') === "true") {
              state.theme.haveGuessedGame1Page8 = true;
            } else {
              state.theme.haveGuessedGame1Page8 = false;
            }
            if (localStorage.getItem('isGame1Page10Wrong') === "true" || localStorage.getItem('isGame1Page10Wrong') === null) {
              state.theme.isGame1Pag10Wrong = true;
            } else {
              console.log("set isGame1Page10Wrong false");
              state.theme.isGame1Page10Wrong = false;
            }
            if (localStorage.getItem('isGame2Page10Wrong') === "true" || localStorage.getItem('isGame2Page10Wrong') === null) {
              state.theme.isGame2Pag10Wrong = true;
            } else {
              console.log("set isGame2Page10Wrong false");
              state.theme.isGame2Page10Wrong = false;
            }
            if (localStorage.getItem('isGame3Page10Wrong') === "true" || localStorage.getItem('isGame3Page10Wrong') === null) {
              state.theme.isGame3Pag10Wrong = true;
            } else {
              console.log("set isGame3Page10Wrong false");
              state.theme.isGame3Page10Wrong = false;
            }
            if (localStorage.getItem('isGame4Page10Wrong') === "true" || localStorage.getItem('isGame4Page10Wrong') === null) {
              state.theme.isGame4Pag10Wrong = true;
            } else {
              console.log("set isGame4Page10Wrong false");
              state.theme.isGame4Page10Wrong = false;
            }
            if (localStorage.getItem('haveGuessedGame1Page10') === "true") {
              state.theme.haveGuessedGame1Page10 = true;
            } else {
              state.theme.haveGuessedGame1Page10 = false;
            }
            if (localStorage.getItem('isGame1Word1Page1ThiefWrong') === "true" || localStorage.getItem('isGame1Word1Page1ThiefWrong') === null) {
              state.theme.isGame1Word1Page1ThiefWrong = true;
            } else {
              console.log("set isGame1Word1Page1ThiefWrong false");
              state.theme.isGame1Word1Page1ThiefWrong = false;
            }
            if (localStorage.getItem('haveGuessedGame1Word1Page1Thief') === "true") {
              state.theme.haveGuessedGame1Word1Page1Thief = true;
            } else {
              state.theme.haveGuessedGame1Word1Page1Thief = false;
            }
            if (localStorage.getItem('isGame1Word2Page1ThiefWrong') === "true" || localStorage.getItem('isGame1Word2Page1ThiefWrong') === null) {
              state.theme.isGame1Word2Page1ThiefWrong = true;
            } else {
              console.log("set isGame1Word2Page1ThiefWrong false");
              state.theme.isGame1Word2Page1ThiefWrong = false;
            }
            if (localStorage.getItem('haveGuessedGame1Word2Page1Thief') === "true") {
              state.theme.haveGuessedGame1Word2Page1Thief = true;
            } else {
              state.theme.haveGuessedGame1Word2Page1Thief = false;
            }
            if (localStorage.getItem('isGame1Word3Page1ThiefWrong') === "true" || localStorage.getItem('isGame1Word3Page1ThiefWrong') === null) {
              state.theme.isGame1Word3Page1ThiefWrong = true;
            } else {
              console.log("set isGame1Word3Page1ThiefWrong false");
              state.theme.isGame1Word3Page1ThiefWrong = false;
            }
            if (localStorage.getItem('haveGuessedGame1Word3Page1Thief') === "true") {
              state.theme.haveGuessedGame1Word3Page1Thief = true;
            } else {
              state.theme.haveGuessedGame1Word3Page1Thief = false;
            }
            if (localStorage.getItem('isGame1Word4Page1ThiefWrong') === "true" || localStorage.getItem('isGame1Word4Page1ThiefWrong') === null) {
              state.theme.isGame1Word4Page1ThiefWrong = true;
            } else {
              console.log("set isGame1Word4Page1ThiefWrong false");
              state.theme.isGame1Word4Page1ThiefWrong = false;
            }
            if (localStorage.getItem('haveGuessedGame1Word4Page1Thief') === "true") {
              state.theme.haveGuessedGame1Word4Page1Thief = true;
            } else {
              state.theme.haveGuessedGame1Word4Page1Thief = false;
            }
            console.log("set up backpack");
            // Set up Backpack
            //check local storage
            const backPackArray = [
              "book",
              "light",
              "prybar",
              "key",
              "piece1",
              "piece2",
              "piece3",
              "piece4",
              "taser"
            ];
            for (var i = 0; i < backPackArray.length; i++) {
              var param = localStorage.getItem(backPackArray[i]);
              console.log("param: " + param);
              if (param) {
                console.log("backPackArray[i]: " + backPackArray[i]);
                switch (backPackArray[i]) {
                  case 'light':
                    console.log("push to backpack array - light");
                    state.game.backpack.push({
                      key: "light",
                      src: "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/blacklight-off.png"
                    })
                    break;
                  case 'prybar':
                    console.log("push to backpack array - light");
                    state.game.backpack.push({
                      key: "prybar",
                      src: "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/prybar-not-using.png"
                    })
                    break;
                  case 'key':
                    console.log("push to backpack array - key");
                    state.game.backpack.push({
                      key: "key",
                      src: "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/key-not-using.png"
                    })
                    break;
                  case 'taser':
                    console.log("push to backpack array - taser");
                    state.game.backpack.push({
                      key: "taser",
                      src: "http://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/taser-not-using.png"
                    })
                    break;
                  default:
                    state.game.backpack.push({
                      key: backPackArray[i],
                      src: param
                    })
                }

                state.game.saved = true;
                if (backPackArray[i] === "prybar") {
                  console.log("Prybar in backpack - turn off: ")
                  localStorage.setItem("prybar", "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/prybar-not-using.png");
                  state.theme.isPryBarVisible = false;
                }
                if (backPackArray[i] === "key") {
                  console.log("Key Hole Available: ");
                  state.theme.isKeyHoleAvailable = true;
                  localStorage.setItem("prybar", "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/key-not-using.png");
                  state.theme.isKeyVisible = false;
                }
                if (backPackArray[i] === "light") {
                  console.log("Black Light in backpack - turn off: ");
                  localStorage.setItem("light", "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/blacklight-off.png");
                  state.theme.isLightVisible = false;
                }
                if (backPackArray[i] === "taser") {
                  console.log("Taser in backpack - turn off: ");
                  localStorage.setItem("taser", "http://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/taser-not-using.png");
                  state.theme.isTaserVisible = false;
                }
              }
            }
            //set backpack variable
            if (state.game.backpack.length != 0) {
              state.theme.backPackHasItems = true;
            }
          }
          if (state.game.backpackThief.length === 0) {
            console.log("set up status (thief)");
            /* demo number for page 1 */
            if (localStorage.getItem('isGame1Page1WrongThief') === "true" || localStorage.getItem('isGame1Page1WrongThief') === null) {
              state.theme.isGame1Page1WrongThief = true;
            } else {
              state.theme.isGame1Page1WrongThief = false;
            }
            if (localStorage.getItem('haveGuessedGame1Page1Thief') === "true") {
              state.theme.haveGuessedGame1Page1Thief = true;
            } else {
              state.theme.haveGuessedGame1Page1Thief = false;
            }

            console.log("set up backpack (thief)");
            // Set up Backpack

            //check local storage
            const backPackArrayThief = [
              "light-thief"
            ];
            for (var i = 0; i < backPackArrayThief.length; i++) {
              var param = localStorage.getItem(backPackArrayThief[i]);
              console.log("param: " + param);
              if (param) {
                console.log("backPackArrayThief[i]: " + backPackArrayThief[i]);
                state.game.backpackThief.push({
                  key: "light-thief",
                  src: "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/blacklight-off.png"
                })
                state.game.saved = true;

                if (backPackArrayThief[i] === "light-thief") {
                  console.log("Black Light in backpack: ");
                  localStorage.setItem("light-thief", "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/blacklight-off.png");
                  state.theme.isLightVisibleThief = false;
                }

              }
            }
            //set backpack variable
            if (state.game.backpackThief.length != 0) {
              state.theme.backPackHasItemsThief = true;
            }
          }
          //set up thief notes

          if (localStorage.getItem('thiefNotes') != null) {
            console.log("thief notes: ")
            state.game.thiefNotes = localStorage.getItem('thiefNotes')
          }
          //set up notes
          if (localStorage.getItem('notes') != null) {
            console.log("notes: ")
            state.game.notes = localStorage.getItem('notes')
          }
          //Set up Guessed Numbers
          console.log("set up guessed numbers - page 1");
          //check local storage
          var numArrayPage1 = [
            "game1Num1Page1",
            "game1Num2Page1"
          ];
          for (var i = 0; i < numArrayPage1.length; i++) {
            var param = localStorage.getItem(numArrayPage1[i]);
            console.log("param: " + param);
            if (param) {
              state.game.game1NumPage1guess[numArrayPage1[i]] = param;
              state.game.saved = true;
            }
          }
          //Set up Guessed Numbers Page 2
          console.log("set up guessed numbers - page 2");
          //check local storage
          var numArrayPage2 = [
            "game1Num1Page2",
            "game1Num2Page2",
            "game1Num3Page2",
            "game1Num4Page2",
            "game1Num5Page2"
          ];
          for (var i = 0; i < numArrayPage2.length; i++) {
            var param = localStorage.getItem(numArrayPage2[i]);
            console.log("param: " + param);
            if (param) {
              state.game.game1NumPage2guess[numArrayPage2[i]] = param;
              state.game.saved = true;
            }
          }
          //Set up Guessed Numbers Page 4 - game 1
          console.log("set up guessed numbers - page 4");
          //check local storage
          var numArrayPage4 = [
            "game1Num1Page4",
            "game1Num2Page4",
            "game1Num3Page4",
            "game1Num4Page4",
            "game1Num5Page4"
          ];
          for (var i = 0; i < numArrayPage4.length; i++) {
            var param = localStorage.getItem(numArrayPage4[i]);
            console.log("param: " + param);
            if (param) {
              state.game.game1NumPage4guess[numArrayPage4[i]] = param;
              state.game.saved = true;
            }
          }
          //Set up Guessed Numbers Page 4 - game 2
          console.log("set up guessed numbers - page 4 - game 2");
          //check local storage
          var numArrayPage4 = [
            "game2Num1Page4",
            "game2Num2Page4",
            "game2Num3Page4",
            "game2Num4Page4"
          ];
          for (var i = 0; i < numArrayPage4.length; i++) {
            var param = localStorage.getItem(numArrayPage4[i]);
            console.log("param: " + param);
            if (param) {
              state.game.game2NumPage4guess[numArrayPage4[i]] = param;
              state.game.saved = true;
            }
          }
          //Set up Guessed Numbers Page 6 - game 1
          console.log("set up guessed numbers - page 6 - game 1");
          //check local storage
          var numArrayPage6 = [
            "game1LettersPage6",
            "game1Num1Page6",
            "game1Num2Page6",
            "game1Num3Page6",
            "game1Num4Page6"
          ];
          for (var i = 0; i < numArrayPage6.length; i++) {
            var param = localStorage.getItem(numArrayPage6[i]);
            console.log("param: " + param);
            if (param) {
              state.game.game1NumPage6guess[numArrayPage6[i]] = param;
              state.game.saved = true;
            }
          }
          //Set up Guessed Numbers Page 8 - game 1
          console.log("set up guessed numbers - page 8 - game 1");
          //check local storage
          var numArrayPage8 = [
            "game1Num1Page8",
            "game1Num2Page8",
            "game1Num3Page8",
            "game1Num4Page8",
            "game1Num5Page8"
          ];
          for (var i = 0; i < numArrayPage8.length; i++) {
            var param = localStorage.getItem(numArrayPage8[i]);
            console.log("param: " + param);
            if (param) {
              state.game.game1NumPage8guess[numArrayPage8[i]] = param;
              state.game.saved = true;
            }
          }
          //Set up Guessed Numbers Page 10 - game1
          console.log("set up guessed numbers - page 10 - game 1");
          //check local storage
          var numArrayPage10 = [
            "game1Num1Page10",
            "game1Num2Page10",
            "game1Num3Page10",
          ];
          for (var i = 0; i < numArrayPage10.length; i++) {
            var param = localStorage.getItem(numArrayPage10[i]);
            console.log("param: " + param);
            if (param) {
              state.game.game1NumPage10guess[numArrayPage10[i]] = param;
              state.game.saved = true;
            }
          }
          //Set up Guessed Numbers Page 10 - game2
          console.log("set up guessed numbers - page 10 - game 2");
          //check local storage
          var numArrayPage10 = [
            "game2Num1Page10",
            "game2Num2Page10",
            "game2Num3Page10",
          ];
          for (var i = 0; i < numArrayPage10.length; i++) {
            var param = localStorage.getItem(numArrayPage10[i]);
            console.log("param: " + param);
            if (param) {
              state.game.game2NumPage10guess[numArrayPage10[i]] = param;
              state.game.saved = true;
            }
          }
          //Set up Guessed Numbers Page 10 - game3
          console.log("set up guessed numbers - page 10 - game 3");
          //check local storage
          var numArrayPage10 = [
            "game3Num1Page10",
            "game3Num2Page10",
            "game3Num3Page10",
          ];
          for (var i = 0; i < numArrayPage10.length; i++) {
            var param = localStorage.getItem(numArrayPage10[i]);
            console.log("param: " + param);
            if (param) {
              state.game.game3NumPage10guess[numArrayPage10[i]] = param;
              state.game.saved = true;
            }
          }
          //Set up Guessed Numbers Page 10 - game2
          console.log("set up guessed numbers - page 10 - game 4");
          //check local storage
          var numArrayPage10 = [
            "game4Num1Page10",
          ];
          for (var i = 0; i < numArrayPage10.length; i++) {
            var param = localStorage.getItem(numArrayPage10[i]);
            console.log("param: " + param);
            if (param) {
              state.game.game4NumPage10guess[numArrayPage10[i]] = param;
              state.game.saved = true;
            }
          }
          //Set up Guessed words Thief
          console.log("set up guessed words - word 1 Thief");
          //check local storage
          var word1ArrayThief = [
            "game1Word1Page1ThiefLetters"
          ];
          for (var i = 0; i < word1ArrayThief.length; i++) {
            var param = localStorage.getItem(word1ArrayThief[i]);
            console.log("param: " + param);
            if (param) {
              state.game.game1Word1Page1ThiefGuess[word1ArrayThief[i]] = param;
              state.game.saved = true;
            }
          }
          //Set up Guessed words Thief
          console.log("set up guessed words - word 2 Thief");
          //check local storage
          var Word2ArrayThief = [
            "game1Word2Page1ThiefLetters"
          ];
          for (var i = 0; i < Word2ArrayThief.length; i++) {
            var param = localStorage.getItem(Word2ArrayThief[i]);
            console.log("param: " + param);
            if (param) {
              state.game.game1Word2Page1ThiefGuess[Word2ArrayThief[i]] = param;
              state.game.saved = true;
            }
          }
          //Set up Guessed words Thief
          console.log("set up guessed words - word 3 Thief");
          //check local storage
          var Word3ArrayThief = [
            "game1Word3Page1ThiefLetters"
          ];
          for (var i = 0; i < Word3ArrayThief.length; i++) {
            var param = localStorage.getItem(Word3ArrayThief[i]);
            console.log("param: " + param);
            if (param) {
              state.game.game1Word3Page1ThiefGuess[Word3ArrayThief[i]] = param;
              state.game.saved = true;
            }
          }
          //Set up Guessed words Thief
          console.log("set up guessed words - word 4 Thief");
          //check local storage
          var Word4ArrayThief = [
            "game1Word4Page1ThiefLetters"
          ];
          for (var i = 0; i < Word4ArrayThief.length; i++) {
            var param = localStorage.getItem(Word4ArrayThief[i]);
            console.log("param: " + param);
            if (param) {
              state.game.game1Word4Page1ThiefGuess[Word4ArrayThief[i]] = param;
              state.game.saved = true;
            }
          }



          if (localStorage.getItem('haveGuessedGreenEgg') === "true") {
            state.theme.haveGuessedGreenEgg = true;
          }
          if (localStorage.getItem('isGreenEggHidden') === "false") {
            state.theme.isGreenEggHidden = false;
          }
          if (localStorage.getItem('isGreenEggWrong') === "false") {
            state.theme.isGreenEggWrong = false;
          }

          if (localStorage.getItem('haveGuessedBlueEgg') === "true") {
            state.theme.haveGuessedBlueEgg = true;
          }
          if (localStorage.getItem('isBlueEggHidden') === "false") {
            state.theme.isBlueEggHidden = false;
          }
          if (localStorage.getItem('isBlueEggWrong') === "false") {
            state.theme.isBlueEggWrong = false;
          }

          if (localStorage.getItem('haveGuessedPinkEgg') === "true") {
            state.theme.haveGuessedPinkEgg = true;
          }
          if (localStorage.getItem('isPinkEggHidden') === "false") {
            state.theme.isPinkEggHidden = false;
          }
          if (localStorage.getItem('isPinkEggWrong') === "false") {
            state.theme.isPinkEggWrong = false;
          }

          if (localStorage.getItem('haveGuessedRedEgg') === "true") {
            state.theme.haveGuessedRedEgg = true;
          }
          if (localStorage.getItem('isRedEggHidden') === "false") {
            state.theme.isRedEggHidden = false;
          }
          if (localStorage.getItem('isRedEggWrong') === "false") {
            state.theme.isRedEggWrong = false;
          }
          
          if (localStorage.getItem('haveGuessedPurpleEgg') === "true") {
            state.theme.haveGuessedPurpleEgg = true;
          }
          if (localStorage.getItem('isPurpleEggHidden') === "false") {
            state.theme.isPurpleEggHidden = false;
          }
          if (localStorage.getItem('isPurpleEggWrong') === "false") {
            state.theme.isPurpleEggWrong = false;
          }

          if (localStorage.getItem('haveGuessedOrangeEgg') === "true") {
            state.theme.haveGuessedOrangeEgg = true;
          }
          if (localStorage.getItem('isOrangeEggHidden') === "false") {
            state.theme.isOrangeEggHidden = false;
          }
          if (localStorage.getItem('isOrangeEggWrong') === "false") {
            state.theme.isOrangeEggWrong = false;
          }

          if (localStorage.getItem('haveGuessedYellowEgg') === "true") {
            state.theme.haveGuessedYellowEgg = true;
          }
          if (localStorage.getItem('isYellowEggHidden') === "false") {
            state.theme.isYellowEggHidden = false;
          }
          if (localStorage.getItem('isYellowEggWrong') === "false") {
            state.theme.isYellowEggWrong = false;
          }

          if (localStorage.getItem('haveGuessedIndigoEgg') === "true") {
            state.theme.haveGuessedIndigoEgg = true;
          }
          if (localStorage.getItem('isIndigoEggHidden') === "false") {
            state.theme.isIndigoEggHidden = false;
          }
          if (localStorage.getItem('isIndigoEggWrong') === "false") {
            state.theme.isIndigoEggWrong = false;
          }

          if (localStorage.getItem('haveGuessedAquaEgg') === "true") {
            state.theme.haveGuessedAquaEgg = true;
          }
          if (localStorage.getItem('isAquaEggHidden') === "false") {
            state.theme.isAquaEggHidden = false;
          }
          if (localStorage.getItem('isAquaEggWrong') === "false") {
            state.theme.isAquaEggWrong = false;
          }

          if (localStorage.getItem('haveGuessedSunsetEgg') === "true") {
            state.theme.haveGuessedSunsetEgg = true;
          }
          if (localStorage.getItem('isSunsetEggHidden') === "false") {
            state.theme.isSunsetEggHidden = false;
          }
          if (localStorage.getItem('isSunsetEggWrong') === "false") {
            state.theme.isSunsetEggWrong = false;
          }

          if (localStorage.getItem('haveGuessedNeonEgg') === "true") {
            state.theme.haveGuessedNeonEgg = true;
          }
          if (localStorage.getItem('isNeonEggHidden') === "false") {
            state.theme.isNeonEggHidden = false;
          }
          if (localStorage.getItem('isNeonEggWrong') === "false") {
            state.theme.isNeonEggWrong = false;
          }

          if (localStorage.getItem('haveGuessedBrownEgg') === "true") {
            state.theme.haveGuessedBrownEgg = true;
          }
          if (localStorage.getItem('isBrownEggHidden') === "false") {
            state.theme.isBrownEggHidden = false;
          }
          if (localStorage.getItem('isBrownEggWrong') === "false") {
            state.theme.isBrownEggWrong = false;
          }
          
          if (localStorage.getItem('haveGuessedBlackEgg') === "true") {
            state.theme.haveGuessedBlackEgg = true;
          }
          if (localStorage.getItem('isBlackEggHidden') === "false") {
            state.theme.isBlackEggHidden = false;
          }
          if (localStorage.getItem('isBlackEggWrong') === "false") {
            state.theme.isBlackEggWrong = false;
          }

          if (localStorage.getItem('haveGuessedDarkgreenEgg') === "true") {
            state.theme.haveGuessedDarkgreenEgg = true;
          }
          if (localStorage.getItem('isDarkgreenEggHidden') === "false") {
            state.theme.isDarkgreenEggHidden = false;
          }
          if (localStorage.getItem('isDarkgreenEggWrong') === "false") {
            state.theme.isDarkgreenEggWrong = false;
          }

          if (localStorage.getItem('haveGuessedGreyEgg') === "true") {
            state.theme.haveGuessedGreyEgg = true;
          }
          if (localStorage.getItem('isGreyEggHidden') === "false") {
            state.theme.isGreyEggHidden = false;
          }
          if (localStorage.getItem('isGreyEggWrong') === "false") {
            state.theme.isGreyEggWrong = false;
          }

          if (localStorage.getItem('haveGuessedPeachEgg') === "true") {
            state.theme.haveGuessedPeachEgg = true;
          }
          if (localStorage.getItem('isPeachEggHidden') === "false") {
            state.theme.isPeachEggHidden = false;
          }
          if (localStorage.getItem('isPeachEggWrong') === "false") {
            state.theme.isPeachEggWrong = false;
          }


        }
      },
      removeGame: ({state}) => {
        console.log("removeGame");
        state.game.gameName = "";
        state.game.gameNameBY = "";
        state.game.gameNameThief = "";
        state.theme.isHeaderClosed = false;
        state.theme.isInfoVisible = false;
      },
      resetGame: ({state}) => {
        state.game.gameName = "";
        state.game.gamePage = "";
        state.game.gameNameBY = "";
        state.game.gamePageBY = "";
        state.game.gameNameThief = "";
        state.game.gamePageThief = "";
        localStorage.clear();
      },
      resetGameBackYard: ({state}) => {
        console.log("reset game");
        state.game.gameNameBY = "game: Backyard";
        state.game.gamePageBY = "Backyard - Intro";
        localStorage.clear();
      },
      removeBackpackItem: ({state}) => value => {
        console.log("value: " + value);
        /* remove from localstorage */
        localStorage.removeItem(value);
        /* remove from backpack array */
        for (var i = 0; i < state.game.backpack.length; i++) {
          if (state.game.backpack[i].key === value) {
            console.log("delete value: " + state.game.backpack[i].key)
            //delete state.game.backpack[i];
            state.game.backpack.splice(i, 1);
            //set backpack variable
            if (state.game.backpack.length === 0) {
              state.theme.backPackHasItems = false;
            }
            if (value === "diary") {
              console.log("diary is visible");
              /* diary is visible */
              state.theme.isDiaryVisible = true;
            } else if (value === "light") {
              console.log("light is visible");
              /* light is visible */
              state.theme.isLightVisible = true;
              state.theme.isLegsAvailable = false;
              state.theme.isLegsVisible = false;
              state.theme.isNumBusAvailable = false;
              state.theme.isNumBusVisible = false;
            }
          }

        }

      },
      toggleGameDetails: ({state}) => {
        state.theme.isGameDetailVisible = !state.theme.isGameDetailVisible
      },
      toggleHint1: ({state}) => {
        /* not tracking use for now */
        state.theme.totalHintsThief = state.theme.totalHintsThief + 1;
        state.theme.isHint1Visible = !state.theme.isHint1Visible
      },
      toggleHint2: ({state}) => {
        state.theme.isHint2Visible = !state.theme.isHint2Visible
      },
      toggleHint3: ({state}) => {
        state.theme.isHint3Visible = !state.theme.isHint3Visible
      },
      toggleHint4: ({state}) => {
        state.theme.isHint4Visible = !state.theme.isHint4Visible
      },
      toggleHint1Thief: ({state}) => {
        state.theme.isHint1ThiefVisible = !state.theme.isHint1ThiefVisible
      },
      toggleHint2Thief: ({state}) => {
        state.theme.isHint2ThiefVisible = !state.theme.isHint2ThiefVisible
      },
      toggleHint3Thief: ({state}) => {
        state.theme.isHint3ThiefVisible = !state.theme.isHint3ThiefVisible
      },
      toggleHint4Thief: ({state}) => {
        state.theme.isHint4ThiefVisible = !state.theme.isHint4ThiefVisible
      },
      toggleMapDetails: ({state}) => {
        state.theme.isMapDetailVisible = !state.theme.isMapDetailVisible
      },
      toggleWaiver: ({state}) => {
        state.theme.isWaiverVisible = !state.theme.isWaiverVisible;
        state.theme.isWaiverSigned = !state.theme.isWaiverSigned;
        localStorage.setItem("WaiverSigned", true);
      },
      toggleDiary: ({state}) => {
        state.theme.isDiaryInsideVisible = !state.theme.isDiaryInsideVisible
      },
      toggleButton: ({state}) => {
        state.theme.isButtonPressed = !state.theme.isButtonPressed
      },
      toggleSandbag2: ({state}) => {
        state.theme.isSandbag2Visible = !state.theme.isSandbag2Visible
      },
      toggleTornDiary: ({state}) => {
        state.theme.isTornDiaryInsideVisible = !state.theme.isTornDiaryInsideVisible
      },
      showItemContents: ({state}) => value => {
        console.log("show contents value: " + value);
        switch (value) {
          case 'diary':
            console.log("show diary");
            /* diary is visible */
            state.theme.isDiaryInsideVisible = true;
            break;
          case 'light':
            state.theme.isLightOn = !state.theme.isLightOn
            console.log("turn on/off light - local storage");
            if (state.theme.isLightOn) {
              state.theme.isLegsAvailable = true;
              state.theme.isNumBusAvailable = true;
            } else {
              state.theme.isLegsAvailable = false;
              state.theme.isNumBusAvailable = false;
            }
            // change image
            for (var i = 0; i < state.game.backpack.length; i++) {
              if (state.game.backpack[i].key === "light") {
                console.log("turn on/off light - state");
                if (state.theme.isLightOn) {
                  state.game.backpack[i].src = "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/blacklight-on.png"
                } else {
                  state.game.backpack[i].src = "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/blacklight-off.png"
                }
              }
            }
            break;
          case 'prybar':
            state.theme.isPrybarOn = !state.theme.isPrybarOn
            // change image
            for (var i = 0; i < state.game.backpack.length; i++) {
              if (state.game.backpack[i].key === "prybar") {
                console.log("turn on/off prybar - state");
                if (state.theme.isPrybarOn) {
                  state.game.backpack[i].src = "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/prybar-using.png"
                } else {
                  state.game.backpack[i].src = "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/prybar-not-using.png"
                }
              }
            }
            break;
          case 'key':
            state.theme.isKeyOn = !state.theme.isKeyOn
            // change image
            for (var i = 0; i < state.game.backpack.length; i++) {
              if (state.game.backpack[i].key === "key") {
                console.log("turn on/off key - state");
                if (state.theme.isKeyOn) {
                  state.game.backpack[i].src = "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/key-using.png"
                } else {
                  state.game.backpack[i].src = "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/key-not-using.png"
                }
              }
            }
            break;
          case 'taser':
            state.theme.isTaserAvailable = !state.theme.isTaserAvailable;
            // change image
            for (var i = 0; i < state.game.backpack.length; i++) {
              if (state.game.backpack[i].key === "taser") {
                console.log("turn on/off taser - state");
                if (state.theme.isTaserAvailable) {
                  state.game.backpack[i].src = "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/taser-using.png"
                } else {
                  state.game.backpack[i].src = "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/taser-not-using.png"
                }
              }
            }
            break;
          case "light-thief":
            state.theme.isLightOn = !state.theme.isLightOn
            console.log("turn on/off light - local storage (thief)");
            if (state.theme.isLightOn) {
              state.theme.isLegsAvailable = true;
              state.theme.isNumBusAvailable = true;
              state.theme.isKnobMessageAvailable = true;
            } else {
              state.theme.isLegsAvailable = false;
              state.theme.isNumBusAvailable = false;
              state.theme.isKnobMessageAvailable = false;
            }
            // change image
            for (var i = 0; i < state.game.backpackThief.length; i++) {
              if (state.game.backpackThief[i].key === "light-thief") {
                console.log("turn on/off light - state (thief)");
                if (state.theme.isLightOn) {
                  state.game.backpackThief[i].src = "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/blacklight-on.png"
                } else {
                  state.game.backpackThief[i].src = "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/blacklight-off.png"
                }
              }
            }
          default:

        }


      },
      closeItemContents: ({state}) => value => {
        console.log("show contents value: " + value);
        if (value === "diary") {
          console.log("show diary");
          /* diary is visible */
          state.theme.isDiaryInsideVisible = false;
        }


      },
      toggleUrl: ({state}) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
      toggleLegs: ({state}) => {
        console.log("toggle legs: " + state.theme.isLegsVisible);
        state.theme.isLegsVisible = !state.theme.isLegsVisible
      },
      toggleNumBus: ({state}) => {
        console.log("toggle NumBus");
        state.theme.isNumBusVisible = !state.theme.isNumBusVisible
      },
      toggleBusStop: ({state}) => {
        console.log("toggle Bus Stop");
        state.theme.isBusStopLit = !state.theme.isBusStopLit
      },
      toggleCornHoleBlue: ({state}) => {
        console.log("toggle Cornhole blue");
        state.theme.isCornHoleBlueMsgVisible = !state.theme.isCornHoleBlueMsgVisible
      },
      toggleCornHoleYellow: ({state}) => {
        console.log("toggle Cornhole yellow");
        state.theme.isCornHoleYellowMsgVisible = !state.theme.isCornHoleYellowMsgVisible
      },
      toggleKnobMessageThief: ({state}) => {
        console.log("toggle toggleKnobMessageThief");
        state.theme.isKnobMessageVisible = !state.theme.isKnobMessageVisible
      },
     countClicks: ({state}) => {
       var secondBetweenTwoDate = Math.abs((new Date().getTime() - state.theme.clickTimeThen) / 1000);
       console.log("diff: " + secondBetweenTwoDate)
       state.theme.clickTimeNow = new Date();
        if (state.theme.clickCount === 0) {
          // start timing
          state.theme.clickTimeThen = new Date().getTime();
          console.log("time now: " + state.theme.clickTimeNow);
          state.theme.clickCount = 1;
        } else if (secondBetweenTwoDate<5 && state.theme.clickCount > 0) {
          console.log("add click");
          state.theme.clickTimeThen = state.theme.clickTimeNow;
          state.theme.clickCount = state.theme.clickCount + 1;
        } else {
          state.theme.clickCount = 0;
        }
        if (state.theme.clickCount > 6) {
          state.theme.isHoleOpen = !state.theme.isHoleOpen;
          state.theme.clickCount = 0;
        }
       console.log("count Clicks: " + state.theme.clickCount);

      },
      toggleSign: ({state}) => {
        console.log("toggle Sign");
        state.theme.isSignVisible = !state.theme.isSignVisible
      },
      toggle2ndSign: ({state}) => {
        console.log("toggle 2nd Sign");
        state.theme.is2ndSignVisible = !state.theme.is2ndSignVisible
      },
      toggleWords: ({state}) => {
        state.theme.isWordsVisible = !state.theme.isWordsVisible
      },
      toggleFloorMessage: ({state}) => {
        state.theme.isFloorMessageVisible = !state.theme.isFloorMessageVisible
      },
      toggleTable: ({state}) => {
        console.log("toggle Table");
        state.theme.isTableVisible = !state.theme.isTableVisible
      },
      toggleRightBush: ({state}) => {
        state.theme.isRightBushOpen = !state.theme.isRightBushOpen
      },
      toggleLeftBush: ({state}) => {
        state.theme.isLeftBushOpen = !state.theme.isLeftBushOpen
      },
      backpackDiary: ({state}) => {
        state.theme.isDiaryVisible = false;
        localStorage.setItem("diary", "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/diary.png");
        //write to backpack big
        state.game.backpack.push({
          src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/diary.png',
          key: 'diary'
        })
        //set backpack variable
        state.theme.backPackHasItems = true;
      },
      backpackLight: ({state}) => {
        state.theme.isLightVisible = false;
        console.log("put light in backpack");
        localStorage.setItem("light", "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/blacklight-off.png");
        //write to backpack big
        /* check if there */
        if (state.game.backpack.length > 0) {
          for (var i = 0; i < state.game.backpack.length; i++) {
            var bptest = true;
            if (state.game.backpack[i].key === "light") {
              console.log("light is already there");
              bptest = false;
            }
          }
          if (bptest === true) {
            state.game.backpack.push({
              src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/blacklight-off.png',
              key: 'light'
            })
          }
        } else {
          state.game.backpack.push({
            src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/blacklight-off.png',
            key: 'light'
          })
        }

        state.theme.backPackHasItems = true;
      },
      taserLight: ({state}) => {
        state.theme.isTaserVisible = false;
        console.log("put Taser in backpack");
        localStorage.setItem("taser", "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/taser-not-using.png");
        //write to backpack big
        /* check if there */
        if (state.game.backpack.length > 0) {
          for (var i = 0; i < state.game.backpack.length; i++) {
            var bptest = true;
            if (state.game.backpack[i].key === "taser") {
              console.log("taser is already there");
              bptest = false;
            }
          }
          if (bptest === true) {
            state.game.backpack.push({
              src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/taser-not-using.png',
              key: 'taser'
            })
          }
        } else {
          state.game.backpack.push({
            src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/taser-not-using.png',
            key: 'taser'
          })
        }

        state.theme.backPackHasItems = true;
      },
      PuzzlePiece1: ({state}) => {
        console.log("put piece 1 in backpack");
        localStorage.setItem("piece1", "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/puzzlepiece1.png");
        state.theme.isPuzzlePiece1Visible = false;
        //write to backpack big
        /* check if there */
        if (state.game.backpack.length > 0) {
          var bptest = true;
          for (var i = 0; i < state.game.backpack.length; i++) {
            if (state.game.backpack[i].key === "piece1") {
              console.log("piece 1 is already there");
              bptest = false;
            }
          }
          if (bptest === true) {
            state.game.backpack.push({
              src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/puzzlepiece1.png',
              key: 'piece1'
            })
          }
        } else {
          state.game.backpack.push({
            src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/puzzlepiece1.png',
            key: 'piece1'
          })
        }

        state.theme.backPackHasItems = true;
      },
      PuzzlePiece2: ({state}) => {
        console.log("put piece 2 in backpack");
        localStorage.setItem("piece2", "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/puzzlepiece2.png");
        state.theme.isPuzzlePiece2Visible = false;
        //write to backpack big
        /* check if there */
        if (state.game.backpack.length > 0) {
          var bptest = true;
          for (var i = 0; i < state.game.backpack.length; i++) {
            if (state.game.backpack[i].key === "piece2") {
              console.log("piece 1 is already there");
              bptest = false;
            }
          }
          if (bptest === true) {
            state.game.backpack.push({
              src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/puzzlepiece2.png',
              key: 'piece2'
            })
          }
        } else {
          state.game.backpack.push({
            src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/puzzlepiece2.png',
            key: 'piece2'
          })
        }

        state.theme.backPackHasItems = true;
      },
      PuzzlePiece3: ({state}) => {
        console.log("put piece 2 in backpack");
        localStorage.setItem("piece3", "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/puzzlepiece3.png");
        state.theme.isPuzzlePiece3Visible = false;
        //write to backpack big
        /* check if there */
        if (state.game.backpack.length > 0) {
          var bptest = true;
          for (var i = 0; i < state.game.backpack.length; i++) {
            if (state.game.backpack[i].key === "piece3") {
              console.log("piece 1 is already there");
              bptest = false;
            }
          }
          if (bptest === true) {
            state.game.backpack.push({
              src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/puzzlepiece3.png',
              key: 'piece3'
            })
          }
        } else {
          state.game.backpack.push({
            src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/puzzlepiece3.png',
            key: 'piece3'
          })
        }

        state.theme.backPackHasItems = true;
      },
      PuzzlePiece4: ({state}) => {
        console.log("put piece 2 in backpack");
        localStorage.setItem("piece4", "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/puzzlepiece4.png");
        state.theme.isPuzzlePiece4Visible = false;
        //write to backpack big
        /* check if there */
        if (state.game.backpack.length > 0) {
          var bptest = true;
          for (var i = 0; i < state.game.backpack.length; i++) {
            if (state.game.backpack[i].key === "piece4") {
              console.log("piece 1 is already there");
              bptest = false;
            }
          }
          if (bptest === true) {
            state.game.backpack.push({
              src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/puzzlepiece4.png',
              key: 'piece4'
            })
          }
        } else {
          state.game.backpack.push({
            src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/puzzlepiece4.png',
            key: 'piece4'
          })
        }

        state.theme.backPackHasItems = true;
      },
      backpackLightThief: ({state}) => {
        state.theme.isLightVisibleThief = false;
        console.log("put light in backpack (thief)");
        localStorage.setItem("light-thief", "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/blacklight-off.png");
        //write to backpack big
        /* check if there */
        if (state.game.backpackThief.length > 0) {
          for (var i = 0; i < state.game.backpackThief.length; i++) {
            var bptest = true;
            if (state.game.backpackThief[i].key === "light-thief") {
              console.log("light is already there");
              bptest = false;
            }
          }
          if (bptest === true) {
              state.game.backpackThief.push({
                src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/blacklight-off.png',
                key: 'light-thief'
              })
          }
        } else {
          state.game.backpackThief.push({
            src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/blacklight-off.png',
            key: 'light-thief'
          })
        }

        state.theme.backPackHasItemsThief = true;
      },
      PryBar: ({state}) => {
        state.theme.isPryBarVisible = false;
        console.log("put prybar in backpack");
        localStorage.setItem("prybar", "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/prybar-not-using.png");
        //write to backpack big
        /* check if there */
        if (state.game.backpack.length > 0) {
          for (var i = 0; i < state.game.backpack.length; i++) {
            var bptest = true;
            if (state.game.backpack[i].key === "prybar") {
              console.log("prybar is already there");
              bptest = false;
            }
          }
          if (bptest === true) {
            state.game.backpack.push({
              src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/prybar-not-using.png',
              key: 'prybar'
            })
          }
        } else {
          state.game.backpack.push({
            src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/prybar-not-using.png',
            key: 'prybar'
          })
        }

        state.theme.backPackHasItems = true;
        state.theme.is2ndSafeAvailable = true;
      },
      Key: ({state}) => {
        state.theme.isKeyVisible = false;
        state.theme.isKeyHoleAvailable = true;
        console.log("put key in backpack");
        localStorage.setItem("key", "https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/key-not-using.png");
        //write to backpack big
        /* check if there */
        if (state.game.backpack.length > 0) {
          for (var i = 0; i < state.game.backpack.length; i++) {
            var bptest = true;
            if (state.game.backpack[i].key === "key") {
              ("key is already there");
              bptest = false;
            }
          }
          if (bptest === true) {
            state.game.backpack.push({
              src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/key-not-using.png',
              key: 'key'
            })
          }
        } else {
          state.game.backpack.push({
            src: 'https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/key-not-using.png',
            key: 'key'
          })
        }

        state.theme.backPackHasItems = true;
      },
      toggleHeader: ({state}) => {
        state.theme.isHeaderClosed = !state.theme.isHeaderClosed;
      },
      toggleBackpack: ({state}) => {
        state.theme.isBackPackVisible = !state.theme.isBackPackVisible;
      },
      toggleInfo: ({state}) => {
        state.theme.isInfoVisible = !state.theme.isInfoVisible;
      },
      toggleFact1: ({state}) => {
        state.theme.isFact1Visible = !state.theme.isFact1Visible;
      },
      toggleFact2: ({state}) => {
        state.theme.isFact2Visible = !state.theme.isFact2Visible;
      },
      toggleFact3: ({state}) => {
        state.theme.isFact3Visible = !state.theme.isFact3Visible;
      },
      toggleFact4: ({state}) => {
        state.theme.isFact4Visible = !state.theme.isFact4Visible;
      },
      toggleFact5: ({state}) => {
        state.theme.isFact5Visible = !state.theme.isFact5Visible;
      },
      toggleSafe: ({state}) => {
        state.theme.isSafeVisible = !state.theme.isSafeVisible;
      },
      toggleSafeThief: ({state}) => {
        state.theme.isSafeThiefVisible = !state.theme.isSafeThiefVisible;
      },
      toggleNotesThief: ({state}) => {
        state.theme.isNotesThiefVisible = !state.theme.isNotesThiefVisible;
      },
      toggleOpenCementSafe: ({state}) => {
        console.log("toggle open Cement Safe");
        state.theme.isCementSafeOpen = !state.theme.isCementSafeOpen;
      },
      toggleOpenCementSafeLock: ({state}) => {
        console.log("toggle open Cement Safe Lock");
        state.theme.isCementSafeLockOpen = !state.theme.isCementSafeLockOpen;
      },
      toggleSandbagMessage: ({state}) => {
        console.log("toggle open Sandbag message");
        state.theme.isCementSandbagMessageVisible = !state.theme.isCementSandbagMessageVisible;
      },
      toggleSandbagMessage2: ({state}) => {
        console.log("toggle open Sandbag message2");
        state.theme.isCementSandbagMessage2Visible = !state.theme.isCementSandbagMessage2Visible;
      },
      toggleSandbagMessage3: ({state}) => {
        console.log("toggle open Sandbag message3");
        state.theme.isCementSandbagMessage3Visible = !state.theme.isCementSandbagMessage3Visible;
      },
      toggle2ndSafe: ({state}) => {
        state.theme.is2ndSafeVisible = !state.theme.is2ndSafeVisible;
      },
      toggle3rdSafe: ({state}) => {
        state.theme.is3rdSafeVisible = !state.theme.is3rdSafeVisible;
      },
      toggle4thSafe: ({state}) => {
        state.theme.is4thSafeVisible = !state.theme.is4thSafeVisible;
      },
      toggleSpinnyThing1: ({state}) => {
        console.log("1: isSpinnyThing1:" + state.theme.isSpinnyThing1);
        switch (state.theme.isSpinnyThing1) {
          case 'frisbee':
            state.theme.isSpinnyThing1 = "diary";
            break;
          case 'diary':
            state.theme.isSpinnyThing1 = "hat";
            break;
          case 'hat':
            state.theme.isSpinnyThing1 = "egg";
            break;
          case 'egg':
            state.theme.isSpinnyThing1 = "key";
            break;
          case 'key':
            state.theme.isSpinnyThing1 = "dog";
            break;
          case 'dog':
            state.theme.isSpinnyThing1 = "frisbee";
            break;

          default:
            state.theme.isSpinnyThing1 = "frisbee";
        }
        console.log("2: isSpinnyThing1:" + state.theme.isSpinnyThing1);
        state.game.game1SpinnyPage10guess["game1Spinny1Page10"] = state.theme.isSpinnyThing1;
        //check if guess is right
        if (shallowEqual(state.game.game1SpinnyPage10guess, state.game.game1SpinnyPage10)) {
          state.theme.isSpinnyRight = true;
          localStorage.setItem("isSpinnyRight", true);
        }
      },
      toggleSpinnyThing2: ({state}) => {
        console.log("1: isSpinnyThing2:" + state.theme.isSpinnyThing2);
        switch (state.theme.isSpinnyThing2) {

          case 'frisbee':
            state.theme.isSpinnyThing2 = "diary";
            // set guess
            break;
          case 'diary':
            state.theme.isSpinnyThing2 = "hat";
            // set guess
            break;
          case 'hat':
            state.theme.isSpinnyThing2 = "egg";
            // set guess
            break;
          case 'egg':
            state.theme.isSpinnyThing2 = "key";
            // set guess
            break;
          case 'key':
            state.theme.isSpinnyThing2 = "dog";
            // set guess
            break;
          case 'dog':
            state.theme.isSpinnyThing2 = "frisbee";
            // set guess
            break;

          default:
            state.theme.isSpinnyThing2 = "frisbee";
        }
        console.log("2: isSpinnyThing2:" + state.theme.isSpinnyThing2);
        state.game.game1SpinnyPage10guess["game1Spinny2Page10"] = state.theme.isSpinnyThing2;
        //check if guess is right
        if (shallowEqual(state.game.game1SpinnyPage10guess, state.game.game1SpinnyPage10)) {
          state.theme.isSpinnyRight = true;
          localStorage.setItem("isSpinnyRight", true);
        }
      },
      toggleSpinnyThing3: ({state}) => {
        console.log("1: isSpinnyThing3:" + state.theme.isSpinnyThing3);
        switch (state.theme.isSpinnyThing3) {

          case 'frisbee':
            state.theme.isSpinnyThing3 = "diary";
            break;
          case 'diary':
            state.theme.isSpinnyThing3 = "hat";
            break;
          case 'hat':
            state.theme.isSpinnyThing3 = "egg";
            break;
          case 'egg':
            state.theme.isSpinnyThing3 = "key";
            break;
          case 'key':
            state.theme.isSpinnyThing3 = "dog";
            break;
          case 'dog':
            state.theme.isSpinnyThing3 = "frisbee";
            break;

          default:
            state.theme.isSpinnyThing3 = "frisbee";
        }
        console.log("2: isSpinnyThing3:" + state.theme.isSpinnyThing3);
        state.game.game1SpinnyPage10guess["game1Spinny3Page10"] = state.theme.isSpinnyThing3;
        //check if guess is right
        if (shallowEqual(state.game.game1SpinnyPage10guess, state.game.game1SpinnyPage10)) {
          state.theme.isSpinnyRight = true;
          localStorage.setItem("isSpinnyRight", true);
        }
      },
      toggleSpinnyThing4: ({state}) => {
        console.log("1: isSpinnyThing4:" + state.theme.isSpinnyThing4);
        switch (state.theme.isSpinnyThing4) {

          case 'frisbee':
            state.theme.isSpinnyThing4 = "diary";
            break;
          case 'diary':
            state.theme.isSpinnyThing4 = "hat";
            break;
          case 'hat':
            state.theme.isSpinnyThing4 = "egg";
            break;
          case 'egg':
            state.theme.isSpinnyThing4 = "key";
            break;
          case 'key':
            state.theme.isSpinnyThing4 = "dog";
            break;
          case 'dog':
            state.theme.isSpinnyThing4 = "frisbee";
            break;

          default:
            state.theme.isSpinnyThing4 = "frisbee";
        }
        console.log("2: isSpinnyThing4:" + state.theme.isSpinnyThing4);
        state.game.game1SpinnyPage10guess["game1Spinny4Page10"] = state.theme.isSpinnyThing4;
        //check if guess is right
        if (shallowEqual(state.game.game1SpinnyPage10guess, state.game.game1SpinnyPage10)) {
          state.theme.isSpinnyRight = true;
          localStorage.setItem("isSpinnyRight", true);
        }
      },
      setGame1Num1Page1: ({state}) => {
        var x = document.getElementById("game1Num1Page1").value;
        console.log("x: " + x);
        state.game.game1NumPage1guess["game1Num1Page1"] = x;
        console.log("state.game.game1NumPage1guess.game1Num1Page1: " + state.game.game1NumPage1guess.game1Num1Page1);
        localStorage.setItem("game1Num1Page1", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage1guess, state.game.game1NumPage1)) {
          state.theme.haveGuessedGame1Page1 = true;
          localStorage.setItem("haveGuessedGame1Page1", true);
          state.theme.isGame1Page1Wrong = false;
          localStorage.setItem("isGame1Page1Wrong", false);
        } else {
          console.log("wrong guess for page 1");
          state.theme.haveGuessedGame1Page1 = true;
          localStorage.setItem("haveGuessedGame1Page1", true);
          state.theme.isGame1Page1Wrong = true;
          localStorage.setItem("isGame1Page1Wrong", true);
        }
      },
      setGame1Num2Page1: ({state}) => {
        var x = document.getElementById("game1Num2Page1").value;
        console.log("x: " + x);
        state.game.game1NumPage1guess["game1Num2Page1"] = x;
        console.log("state.game.game1NumPage1guess.game1Num2Page1: " + state.game.game1NumPage1guess.game1Num2Page1);
        localStorage.setItem("game1Num2Page1", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage1guess, state.game.game1NumPage1)) {
          state.theme.haveGuessedGame1Page1 = true;
          localStorage.setItem("haveGuessedGame1Page1", true);
          state.theme.isGame1Page1Wrong = false;
          localStorage.setItem("isGame1Page1Wrong", false);
        } else {
          console.log("wrong guess for page 1");
          state.theme.haveGuessedGame1Page1 = true;
          localStorage.setItem("haveGuessedGame1Page1", true);
          state.theme.isGame1Page1Wrong = true;
          localStorage.setItem("isGame1Page1Wrong", true);
        }
      },
      setGame1Num1Page2: ({state}) => {
        var x = document.getElementById("game1Num1Page2").value;
        console.log("x: " + x);
        state.game.game1NumPage2guess["game1Num1Page2"] = x;
        console.log("state.game.game1NumPage2guess.game1Num1Page2: " + state.game.game1NumPage2guess.game1Num1Page2);
        localStorage.setItem("game1Num1Page2", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage2guess, state.game.game1NumPage2)) {
          state.theme.haveGuessedGame1Page2 = true;
          localStorage.setItem("haveGuessedGame1Page2", true);
          state.theme.isGame1Page2Wrong = false;
          localStorage.setItem("isGame1Page2Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page2 = true;
          localStorage.setItem("haveGuessedGame1Page2", true);
          state.theme.isGame1Page2Wrong = true;
          localStorage.setItem("isGame1Page2Wrong", true);
        }
      },
      setGame1Num2Page2: ({state}) => {
        var x = document.getElementById("game1Num2Page2").value;
        console.log("x: " + x);
        state.game.game1NumPage2guess["game1Num2Page2"] = x;
        console.log("state.game.game1NumPage2guess.game1Num2Page2: " + state.game.game1NumPage1guess.game1Num2Page2);
        localStorage.setItem("game1Num2Page2", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage2guess, state.game.game1NumPage2)) {
          state.theme.haveGuessedGame1Page2 = true;
          localStorage.setItem("haveGuessedGame1Page2", true);
          state.theme.isGame1Page2Wrong = false;
          localStorage.setItem("isGame1Page2Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page2 = true;
          localStorage.setItem("haveGuessedGame1Page2", true);
          state.theme.isGame1Page2Wrong = true;
          localStorage.setItem("isGame1Page2Wrong", true);
        }
      },
      setGame1Num3Page2: ({state}) => {
        var x = document.getElementById("game1Num3Page2").value;
        console.log("x: " + x);
        state.game.game1NumPage2guess["game1Num3Page2"] = x;
        console.log("state.game.game1NumPage2guess.game1Num3Page2: " + state.game.game1NumPage1guess.game1Num3Page2);
        localStorage.setItem("game1Num3Page2", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage2guess, state.game.game1NumPage2)) {
          state.theme.haveGuessedGame1Page2 = true;
          localStorage.setItem("haveGuessedGame1Page2", true);
          state.theme.isGame1Page2Wrong = false;
          localStorage.setItem("isGame1Page2Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page2 = true;
          localStorage.setItem("haveGuessedGame1Page2", true);
          state.theme.isGame1Page2Wrong = true;
          localStorage.setItem("isGame1Page2Wrong", true);
        }
      },
      setGame1Num4Page2: ({state}) => {
        var x = document.getElementById("game1Num4Page2").value;
        console.log("x: " + x);
        state.game.game1NumPage2guess["game1Num4Page2"] = x;
        console.log("state.game.game1NumPage2guess.game1Num4Page2: " + state.game.game1NumPage1guess.game1Num4Page2);
        localStorage.setItem("game1Num4Page2", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage2guess, state.game.game1NumPage2)) {
          state.theme.haveGuessedGame1Page2 = true;
          localStorage.setItem("haveGuessedGame1Page2", true);
          state.theme.isGame1Page2Wrong = false;
          localStorage.setItem("isGame1Page2Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page2 = true;
          localStorage.setItem("haveGuessedGame1Page2", true);
          state.theme.isGame1Page2Wrong = true;
          localStorage.setItem("isGame1Page2Wrong", true);
        }
      },
      setGame1Num5Page2: ({state}) => {
        var x = document.getElementById("game1Num5Page2").value;
        console.log("x: " + x);
        state.game.game1NumPage2guess["game1Num5Page2"] = x;
        console.log("state.game.game1NumPage2guess.game1Num5Page2: " + state.game.game1NumPage1guess.game1Num5Page2);
        localStorage.setItem("game1Num5Page2", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage2guess, state.game.game1NumPage2)) {
          state.theme.haveGuessedGame1Page2 = true;
          localStorage.setItem("haveGuessedGame1Page2", true);
          state.theme.isGame1Page2Wrong = false;
          localStorage.setItem("isGame1Page2Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page2 = true;
          localStorage.setItem("haveGuessedGame1Page2", true);
          state.theme.isGame1Page2Wrong = true;
          localStorage.setItem("isGame1Page2Wrong", true);
        }
      },
      setGame1Num1Page4: ({state}) => {
        var x = document.getElementById("game1Num1Page4").value;
        console.log("x: " + x);
        state.game.game1NumPage4guess["game1Num1Page4"] = x;
        console.log("state.game.game1NumPage4guess.game1Num1Page4: " + state.game.game1NumPage4guess.game1Num1Page4);
        localStorage.setItem("game1Num1Page4", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage4guess, state.game.game1NumPage4)) {
          state.theme.haveGuessedGame1Page4 = true;
          localStorage.setItem("haveGuessedGame1Page4", true);
          state.theme.isGame1Page4Wrong = false;
          localStorage.setItem("isGame1Page4Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page4 = true;
          localStorage.setItem("haveGuessedGame1Page4", true);
          state.theme.isGame1Page4Wrong = true;
          localStorage.setItem("isGame1Page4Wrong", true);
        }
      },
      setGame1Num2Page4: ({state}) => {
        var x = document.getElementById("game1Num2Page4").value;
        console.log("x: " + x);
        state.game.game1NumPage4guess["game1Num2Page4"] = x;
        console.log("state.game.game1NumPage4guess.game1Num2Page4: " + state.game.game1NumPage1guess.game1Num2Page4);
        localStorage.setItem("game1Num2Page4", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage4guess, state.game.game1NumPage4)) {
          state.theme.haveGuessedGame1Page4 = true;
          localStorage.setItem("haveGuessedGame1Page4", true);
          state.theme.isGame1Page4Wrong = false;
          localStorage.setItem("isGame1Page4Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page4 = true;
          localStorage.setItem("haveGuessedGame1Page4", true);
          state.theme.isGame1Page4Wrong = true;
          localStorage.setItem("isGame1Page4Wrong", true);
        }
      },
      setGame1Num3Page4: ({state}) => {
        var x = document.getElementById("game1Num3Page4").value;
        console.log("x: " + x);
        state.game.game1NumPage4guess["game1Num3Page4"] = x;
        console.log("state.game.game1NumPage4guess.game1Num3Page4: " + state.game.game1NumPage1guess.game1Num3Page4);
        localStorage.setItem("game1Num3Page4", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage4guess, state.game.game1NumPage4)) {
          state.theme.haveGuessedGame1Page4 = true;
          localStorage.setItem("haveGuessedGame1Page4", true);
          state.theme.isGame1Page4Wrong = false;
          localStorage.setItem("isGame1Page4Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page4 = true;
          localStorage.setItem("haveGuessedGame1Page4", true);
          state.theme.isGame1Page4Wrong = true;
          localStorage.setItem("isGame1Page4Wrong", true);
        }
      },
      setGame1Num4Page4: ({state}) => {
        var x = document.getElementById("game1Num4Page4").value;
        console.log("x: " + x);
        state.game.game1NumPage4guess["game1Num4Page4"] = x;
        console.log("state.game.game1NumPage4guess.game1Num4Page4: " + state.game.game1NumPage1guess.game1Num4Page4);
        localStorage.setItem("game1Num4Page4", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage4guess, state.game.game1NumPage4)) {
          state.theme.haveGuessedGame1Page4 = true;
          localStorage.setItem("haveGuessedGame1Page4", true);
          state.theme.isGame1Page4Wrong = false;
          localStorage.setItem("isGame1Page4Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page4 = true;
          localStorage.setItem("haveGuessedGame1Page4", true);
          state.theme.isGame1Page4Wrong = true;
          localStorage.setItem("isGame1Page4Wrong", true);
        }
      },
      setGame1Num5Page4: ({state}) => {
        var x = document.getElementById("game1Num5Page4").value;
        console.log("x: " + x);
        state.game.game1NumPage4guess["game1Num5Page4"] = x;
        console.log("state.game.game1NumPage4guess.game1Num5Page4: " + state.game.game1NumPage1guess.game1Num5Page4);
        localStorage.setItem("game1Num5Page4", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage4guess, state.game.game1NumPage4)) {
          state.theme.haveGuessedGame1Page4 = true;
          localStorage.setItem("haveGuessedGame1Page4", true);
          state.theme.isGame1Page4Wrong = false;
          localStorage.setItem("isGame1Page4Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page4 = true;
          localStorage.setItem("haveGuessedGame1Page4", true);
          state.theme.isGame1Page4Wrong = true;
          localStorage.setItem("isGame1Page4Wrong", true);
        }
      },
      setGame2Num1Page4: ({state}) => {
        var x = document.getElementById("game2Num1Page4").value;
        console.log("x: " + x);
        state.game.game2NumPage4guess["game2Num1Page4"] = x;
        console.log("state.game.game2NumPage4guess.game2Num1Page4: " + state.game.game2NumPage4guess.game2Num1Page4);
        localStorage.setItem("game2Num1Page4", x);
        //check if guess is right
        if (shallowEqual(state.game.game2NumPage4guess, state.game.game2NumPage4)) {
          state.theme.haveGuessedGame2Page4 = true;
          localStorage.setItem("haveGuessedGame2Page4", true);
          state.theme.isGame2Page4Wrong = false;
          localStorage.setItem("isGame2Page4Wrong", false);
          state.theme.isCementSafeOpenSandbags = true;
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame2Page4 = true;
          localStorage.setItem("haveGuessedGame2Page4", true);
          state.theme.isGame2Page4Wrong = true;
          localStorage.setItem("isGame2Page4Wrong", true);
          state.theme.isCementSafeOpenSandbags = false;
        }
      },
      setGame2Num2Page4: ({state}) => {
        var x = document.getElementById("game2Num2Page4").value;
        console.log("x: " + x);
        state.game.game2NumPage4guess["game2Num2Page4"] = x;
        console.log("state.game.game2NumPage4guess.game2Num2Page4: " + state.game.game2NumPage4guess.game2Num2Page4);
        localStorage.setItem("game2Num2Page4", x);
        //check if guess is right
        if (shallowEqual(state.game.game2NumPage4guess, state.game.game2NumPage4)) {
          state.theme.haveGuessedGame2Page4 = true;
          localStorage.setItem("haveGuessedGame2Page4", true);
          state.theme.isGame2Page4Wrong = false;
          localStorage.setItem("isGame2Page4Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame2Page4 = true;
          localStorage.setItem("haveGuessedGame2Page4", true);
          state.theme.isGame2Page4Wrong = true;
          localStorage.setItem("isGame2Page4Wrong", true);
        }
      },
      setGame2Num3Page4: ({state}) => {
        var x = document.getElementById("game2Num3Page4").value;
        console.log("x: " + x);
        state.game.game2NumPage4guess["game2Num3Page4"] = x;
        console.log("state.game.game2NumPage4guess.game2Num3Page4: " + state.game.game2NumPage4guess.game2Num3Page4);
        localStorage.setItem("game2Num3Page4", x);
        //check if guess is right
        if (shallowEqual(state.game.game2NumPage4guess, state.game.game2NumPage4)) {
          state.theme.haveGuessedGame2Page4 = true;
          localStorage.setItem("haveGuessedGame2Page4", true);
          state.theme.isGame2Page4Wrong = false;
          localStorage.setItem("isGame2Page4Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame2Page4 = true;
          localStorage.setItem("haveGuessedGame2Page4", true);
          state.theme.isGame2Page4Wrong = true;
          localStorage.setItem("isGame2Page4Wrong", true);
        }
      },
      setGame2Num4Page4: ({state}) => {
        var x = document.getElementById("game2Num4Page4").value;
        console.log("x: " + x);
        state.game.game2NumPage4guess["game2Num4Page4"] = x;
        console.log("state.game.game2NumPage4guess.game2Num4Page4: " + state.game.game2NumPage4guess.game2Num4Page4);
        localStorage.setItem("game2Num4Page4", x);
        //check if guess is right
        if (shallowEqual(state.game.game2NumPage4guess, state.game.game2NumPage4)) {
          state.theme.haveGuessedGame2Page4 = true;
          localStorage.setItem("haveGuessedGame2Page4", true);
          state.theme.isGame2Page4Wrong = false;
          localStorage.setItem("isGame2Page4Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame2Page4 = true;
          localStorage.setItem("haveGuessedGame2Page4", true);
          state.theme.isGame2Page4Wrong = true;
          localStorage.setItem("isGame2Page4Wrong", true);
        }
      },
      setGame1Num1Page6: ({state}) => {
        var x = document.getElementById("game1Num1Page6").value;
        console.log("x: " + x);
        state.game.game1NumPage6guess["game1Num1Page6"] = x;
        console.log("state.game.game1NumPage6guess.game1Num1Page6: " + state.game.game1NumPage6guess.game1Num1Page6);
        localStorage.setItem("game1Num1Page6", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage6guess, state.game.game1NumPage6)) {
          state.theme.haveGuessedGame1Page6 = true;
          localStorage.setItem("haveGuessedGame1Page6", true);
          state.theme.isGame1Page6Wrong = false;
          localStorage.setItem("isGame1Page6Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page6 = true;
          localStorage.setItem("haveGuessedGame1Page6", true);
          state.theme.isGame1Page6Wrong = true;
          localStorage.setItem("isGame1Page6Wrong", true);
        }
      },
      setGame1Num2Page6: ({state}) => {
        var x = document.getElementById("game1Num2Page6").value;
        console.log("x: " + x);
        state.game.game1NumPage6guess["game1Num2Page6"] = x;
        console.log("state.game.game1NumPage6guess.game1Num2Page6: " + state.game.game1NumPage1guess.game1Num2Page6);
        localStorage.setItem("game1Num2Page6", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage6guess, state.game.game1NumPage6)) {
          state.theme.haveGuessedGame1Page6 = true;
          localStorage.setItem("haveGuessedGame1Page6", true);
          state.theme.isGame1Page6Wrong = false;
          localStorage.setItem("isGame1Page6Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page6 = true;
          localStorage.setItem("haveGuessedGame1Page6", true);
          state.theme.isGame1Page6Wrong = true;
          localStorage.setItem("isGame1Page6Wrong", true);
        }
      },
      setGame1Num3Page6: ({state}) => {
        var x = document.getElementById("game1Num3Page6").value;
        console.log("x: " + x);
        state.game.game1NumPage6guess["game1Num3Page6"] = x;
        console.log("state.game.game1NumPage6guess.game1Num3Page6: " + state.game.game1NumPage1guess.game1Num3Page6);
        localStorage.setItem("game1Num3Page6", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage6guess, state.game.game1NumPage6)) {
          state.theme.haveGuessedGame1Page6 = true;
          localStorage.setItem("haveGuessedGame1Page6", true);
          state.theme.isGame1Page6Wrong = false;
          localStorage.setItem("isGame1Page6Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page6 = true;
          localStorage.setItem("haveGuessedGame1Page6", true);
          state.theme.isGame1Page6Wrong = true;
          localStorage.setItem("isGame1Page6Wrong", true);
        }
      },
      setGame1Num4Page6: ({state}) => {
        var x = document.getElementById("game1Num4Page6").value;
        console.log("x: " + x);
        state.game.game1NumPage6guess["game1Num4Page6"] = x;
        console.log("state.game.game1NumPage6guess.game1Num4Page6: " + state.game.game1NumPage1guess.game1Num4Page6);
        localStorage.setItem("game1Num4Page6", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage6guess, state.game.game1NumPage6)) {
          state.theme.haveGuessedGame1Page6 = true;
          localStorage.setItem("haveGuessedGame1Page6", true);
          state.theme.isGame1Page6Wrong = false;
          localStorage.setItem("isGame1Page6Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page6 = true;
          localStorage.setItem("haveGuessedGame1Page6", true);
          state.theme.isGame1Page6Wrong = true;
          localStorage.setItem("isGame1Page6Wrong", true);
        }
      },
      setGame1LettersPage6: ({state}) => {
        var x = document.getElementById("game1LettersPage6").value;
        console.log("x: " + x);
        state.game.game1NumPage6guess["game1LettersPage6"] = x;
        console.log("state.game.game1NumPage6guess.game1LettersPage6: " + state.game.game1NumPage1guess.game1LettersPage6);
        localStorage.setItem("game1LettersPage6", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage6guess, state.game.game1NumPage6)) {
          state.theme.haveGuessedGame1Page6 = true;
          localStorage.setItem("haveGuessedGame1Page6", true);
          state.theme.isGame1Page6Wrong = false;
          localStorage.setItem("isGame1Page6Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page6 = true;
          localStorage.setItem("haveGuessedGame1Page6", true);
          state.theme.isGame1Page6Wrong = true;
          localStorage.setItem("isGame1Page6Wrong", true);
        }
      },
      setGame1Num1Page8: ({state}) => {
        var x = document.getElementById("game1Num1Page8").value;
        console.log("x: " + x);
        state.game.game1NumPage8guess["game1Num1Page8"] = x;
        console.log("state.game.game1NumPage8guess.game1Num1Page8: " + state.game.game1NumPage8guess.game1Num1Page8);
        localStorage.setItem("game1Num1Page8", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage8guess, state.game.game1NumPage8)) {
          state.theme.haveGuessedGame1Page8 = true;
          localStorage.setItem("haveGuessedGame1Page8", true);
          state.theme.isGame1Page8Wrong = false;
          localStorage.setItem("isGame1Page8Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page8 = true;
          localStorage.setItem("haveGuessedGame1Page8", true);
          state.theme.isGame1Page8Wrong = true;
          localStorage.setItem("isGame1Page8Wrong", true);
        }
      },
      setGame1Num2Page8: ({state}) => {
        var x = document.getElementById("game1Num2Page8").value;
        console.log("x: " + x);
        state.game.game1NumPage8guess["game1Num2Page8"] = x;
        console.log("state.game.game1NumPage8guess.game1Num2Page8: " + state.game.game1NumPage1guess.game1Num2Page8);
        localStorage.setItem("game1Num2Page8", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage8guess, state.game.game1NumPage8)) {
          state.theme.haveGuessedGame1Page8 = true;
          localStorage.setItem("haveGuessedGame1Page8", true);
          state.theme.isGame1Page8Wrong = false;
          localStorage.setItem("isGame1Page8Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page8 = true;
          localStorage.setItem("haveGuessedGame1Page8", true);
          state.theme.isGame1Page8Wrong = true;
          localStorage.setItem("isGame1Page8Wrong", true);
        }
      },
      setGame1Num3Page8: ({state}) => {
        var x = document.getElementById("game1Num3Page8").value;
        console.log("x: " + x);
        state.game.game1NumPage8guess["game1Num3Page8"] = x;
        console.log("state.game.game1NumPage8guess.game1Num3Page8: " + state.game.game1NumPage1guess.game1Num3Page8);
        localStorage.setItem("game1Num3Page8", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage8guess, state.game.game1NumPage8)) {
          state.theme.haveGuessedGame1Page8 = true;
          localStorage.setItem("haveGuessedGame1Page8", true);
          state.theme.isGame1Page8Wrong = false;
          localStorage.setItem("isGame1Page8Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page8 = true;
          localStorage.setItem("haveGuessedGame1Page8", true);
          state.theme.isGame1Page8Wrong = true;
          localStorage.setItem("isGame1Page8Wrong", true);
        }
      },
      setGame1Num4Page8: ({state}) => {
        var x = document.getElementById("game1Num4Page8").value;
        console.log("x: " + x);
        state.game.game1NumPage8guess["game1Num4Page8"] = x;
        console.log("state.game.game1NumPage8guess.game1Num4Page8: " + state.game.game1NumPage1guess.game1Num4Page8);
        localStorage.setItem("game1Num4Page8", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage8guess, state.game.game1NumPage8)) {
          state.theme.haveGuessedGame1Page8 = true;
          localStorage.setItem("haveGuessedGame1Page8", true);
          state.theme.isGame1Page8Wrong = false;
          localStorage.setItem("isGame1Page8Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page8 = true;
          localStorage.setItem("haveGuessedGame1Page8", true);
          state.theme.isGame1Page8Wrong = true;
          localStorage.setItem("isGame1Page8Wrong", true);
        }
      },
      setGame1Num5Page8: ({state}) => {
        var x = document.getElementById("game1Num5Page8").value;
        console.log("x: " + x);
        state.game.game1NumPage8guess["game1Num5Page8"] = x;
        console.log("state.game.game1NumPage8guess.game1Num5Page8: " + state.game.game1NumPage1guess.game1Num5Page8);
        localStorage.setItem("game1Num5Page8", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage8guess, state.game.game1NumPage8)) {
          state.theme.haveGuessedGame1Page8 = true;
          localStorage.setItem("haveGuessedGame1Page8", true);
          state.theme.isGame1Page8Wrong = false;
          localStorage.setItem("isGame1Page8Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page8 = true;
          localStorage.setItem("haveGuessedGame1Page8", true);
          state.theme.isGame1Page8Wrong = true;
          localStorage.setItem("isGame1Page8Wrong", true);
        }
      },
      setGame1Num1Page10: ({state}) => {
        var x = document.getElementById("game1Num1Page10").value;
        console.log("x: " + x);
        state.game.game1NumPage10guess["game1Num1Page10"] = x;
        console.log("state.game.game1NumPage10guess.game1Num1Page10: " + state.game.game1NumPage10guess.game1Num1Page10);
        localStorage.setItem("game1Num1Page10", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage10guess, state.game.game1NumPage10)) {
          state.theme.haveGuessedGame1Page10 = true;
          localStorage.setItem("haveGuessedGame1Page10", true);
          state.theme.isGame1Page10Wrong = false;
          localStorage.setItem("isGame1Page10Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page10 = true;
          localStorage.setItem("haveGuessedGame1Page10", true);
          state.theme.isGame1Page10Wrong = true;
          localStorage.setItem("isGame1Page10Wrong", true);
        }
      },
      setGame1Num2Page10: ({state}) => {
        var x = document.getElementById("game1Num2Page10").value;
        console.log("x: " + x);
        state.game.game1NumPage10guess["game1Num2Page10"] = x;
        console.log("state.game.game1NumPage10guess.game1Num2Page10: " + state.game.game1NumPage1guess.game1Num2Page10);
        localStorage.setItem("game1Num2Page10", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage10guess, state.game.game1NumPage10)) {
          state.theme.haveGuessedGame1Page10 = true;
          localStorage.setItem("haveGuessedGame1Page10", true);
          state.theme.isGame1Page10Wrong = false;
          localStorage.setItem("isGame1Page10Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page10 = true;
          localStorage.setItem("haveGuessedGame1Page10", true);
          state.theme.isGame1Page10Wrong = true;
          localStorage.setItem("isGame1Page10Wrong", true);
        }
      },
      setGame1Num3Page10: ({state}) => {
        var x = document.getElementById("game1Num3Page10").value;
        console.log("x: " + x);
        state.game.game1NumPage10guess["game1Num3Page10"] = x;
        console.log("state.game.game1NumPage10guess.game1Num3Page10: " + state.game.game1NumPage1guess.game1Num3Page10);
        localStorage.setItem("game1Num3Page10", x);
        //check if guess is right
        if (shallowEqual(state.game.game1NumPage10guess, state.game.game1NumPage10)) {
          state.theme.haveGuessedGame1Page10 = true;
          localStorage.setItem("haveGuessedGame1Page10", true);
          state.theme.isGame1Page10Wrong = false;
          localStorage.setItem("isGame1Page10Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Page10 = true;
          localStorage.setItem("haveGuessedGame1Page10", true);
          state.theme.isGame1Page10Wrong = true;
          localStorage.setItem("isGame1Page10Wrong", true);
        }
      },
      setGame2Num1Page10: ({state}) => {
        var x = document.getElementById("game2Num1Page10").value;
        console.log("x: " + x);
        state.game.game2NumPage10guess["game2Num1Page10"] = x;
        console.log("state.game.game2NumPage10guess.game2Num1Page10: " + state.game.game2NumPage10guess.game2Num1Page10);
        localStorage.setItem("game2Num1Page10", x);
        //check if guess is right
        if (shallowEqual(state.game.game2NumPage10guess, state.game.game2NumPage10)) {
          state.theme.haveGuessedGame2Page10 = true;
          localStorage.setItem("haveGuessedGame2Page10", true);
          state.theme.isGame2Page10Wrong = false;
          localStorage.setItem("isGame2Page10Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame2Page10 = true;
          localStorage.setItem("haveGuessedGame2Page10", true);
          state.theme.isGame2Page10Wrong = true;
          localStorage.setItem("isGame2Page10Wrong", true);
        }
      },
      setGame2Num2Page10: ({state}) => {
        var x = document.getElementById("game2Num2Page10").value;
        console.log("x: " + x);
        state.game.game2NumPage10guess["game2Num2Page10"] = x;
        console.log("state.game.game2NumPage10guess.game2Num2Page10: " + state.game.game2NumPage10guess.game2Num2Page10);
        localStorage.setItem("game2Num2Page10", x);
        //check if guess is right
        if (shallowEqual(state.game.game2NumPage10guess, state.game.game2NumPage10)) {
          state.theme.haveGuessedGame2Page10 = true;
          localStorage.setItem("haveGuessedGame2Page10", true);
          state.theme.isGame2Page10Wrong = false;
          localStorage.setItem("isGame2Page10Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame2Page10 = true;
          localStorage.setItem("haveGuessedGame2Page10", true);
          state.theme.isGame2Page10Wrong = true;
          localStorage.setItem("isGame2Page10Wrong", true);
        }
      },
      setGame2Num3Page10: ({state}) => {
        var x = document.getElementById("game2Num3Page10").value;
        console.log("x: " + x);
        state.game.game2NumPage10guess["game2Num3Page10"] = x;
        console.log("state.game.game2NumPage10guess.game2Num3Page10: " + state.game.game2NumPage10guess.game2Num3Page10);
        localStorage.setItem("game2Num3Page10", x);
        //check if guess is right
        if (shallowEqual(state.game.game2NumPage10guess, state.game.game2NumPage10)) {
          state.theme.haveGuessedGame2Page10 = true;
          localStorage.setItem("haveGuessedGame2Page10", true);
          state.theme.isGame2Page10Wrong = false;
          localStorage.setItem("isGame2Page10Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame2Page10 = true;
          localStorage.setItem("haveGuessedGame2Page10", true);
          state.theme.isGame2Page10Wrong = true;
          localStorage.setItem("isGame2Page10Wrong", true);
        }
      },
      setGame3Num1Page10: ({state}) => {
        var x = document.getElementById("game3Num1Page10").value;
        console.log("x: " + x);
        state.game.game3NumPage10guess["game3Num1Page10"] = x;
        console.log("state.game.game3NumPage10guess.game3Num1Page10: " + state.game.game3NumPage10guess.game3Num1Page10);
        localStorage.setItem("game3Num1Page10", x);
        //check if guess is right
        if (shallowEqual(state.game.game3NumPage10guess, state.game.game3NumPage10)) {
          state.theme.haveGuessedGame3Page10 = true;
          localStorage.setItem("haveGuessedGame3Page10", true);
          state.theme.isGame3Page10Wrong = false;
          localStorage.setItem("isGame3Page10Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame3Page10 = true;
          localStorage.setItem("haveGuessedGame3Page10", true);
          state.theme.isGame3Page10Wrong = true;
          localStorage.setItem("isGame3Page10Wrong", true);
        }
      },
      setGame3Num2Page10: ({state}) => {
        var x = document.getElementById("game3Num2Page10").value;
        console.log("x: " + x);
        state.game.game3NumPage10guess["game3Num2Page10"] = x;
        console.log("state.game.game3NumPage10guess.game3Num2Page10: " + state.game.game3NumPage10guess.game3Num2Page10);
        localStorage.setItem("game3Num2Page10", x);
        //check if guess is right
        if (shallowEqual(state.game.game3NumPage10guess, state.game.game3NumPage10)) {
          state.theme.haveGuessedGame3Page10 = true;
          localStorage.setItem("haveGuessedGame3Page10", true);
          state.theme.isGame3Page10Wrong = false;
          localStorage.setItem("isGame3Page10Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame3Page10 = true;
          localStorage.setItem("haveGuessedGame3Page10", true);
          state.theme.isGame3Page10Wrong = true;
          localStorage.setItem("isGame3Page10Wrong", true);
        }
      },
      setGame3Num3Page10: ({state}) => {
        var x = document.getElementById("game3Num3Page10").value;
        console.log("x: " + x);
        state.game.game3NumPage10guess["game3Num3Page10"] = x;
        console.log("state.game.game3NumPage10guess.game3Num3Page10: " + state.game.game3NumPage10guess.game3Num3Page10);
        localStorage.setItem("game3Num3Page10", x);
        //check if guess is right
        if (shallowEqual(state.game.game3NumPage10guess, state.game.game3NumPage10)) {
          state.theme.haveGuessedGame3Page10 = true;
          localStorage.setItem("haveGuessedGame3Page10", true);
          state.theme.isGame3Page10Wrong = false;
          localStorage.setItem("isGame3Page10Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame3Page10 = true;
          localStorage.setItem("haveGuessedGame3Page10", true);
          state.theme.isGame3Page10Wrong = true;
          localStorage.setItem("isGame3Page10Wrong", true);
        }
      },
      setGame4Num1Page10: ({state}) => {
        var x = document.getElementById("game4Num1Page10").value;
        console.log("x: " + x);
        state.game.game4NumPage10guess["game4Num1Page10"] = x;
        console.log("state.game.game4NumPage10guess.game4Num1Page10: " + state.game.game4NumPage10guess.game4Num1Page10);
        localStorage.setItem("game4Num1Page10", x);
        //check if guess is right
        if (shallowEqual(state.game.game4NumPage10guess, state.game.game4NumPage10)) {
          state.theme.haveGuessedGame4Page10 = true;
          localStorage.setItem("haveGuessedGame4Page10", true);
          state.theme.isGame4Page10Wrong = false;
          localStorage.setItem("isGame4Page10Wrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame4Page10 = true;
          localStorage.setItem("haveGuessedGame4Page10", true);
          state.theme.isGame4Page10Wrong = true;
          localStorage.setItem("isGame4Page10Wrong", true);
        }
      },
      /* Thief Game Set up */
      setGame1Word1Page1ThiefLetters: ({state}) => {
        var x = document.getElementById("Game1Word1Page1ThiefLetters").value;
        console.log("x: " + x);
        state.game.game1Word1Page1ThiefGuess["game1Word1Page1ThiefLetters"] = x;
        console.log("state.game.game1Word1Page1ThiefGuess.game1Word1Page1ThiefLetters: " + state.game.game1Word1Page1ThiefGuess.game1Word1Page1ThiefLetters);
        localStorage.setItem("game1Word1Page1ThiefLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.game1Word1Page1ThiefGuess, state.game.game1Word1Page1ThiefAnswer)) {
          state.theme.haveGuessedGame1Word1Page1Thief = true;
          localStorage.setItem("haveGuessedGame1Word1Page1Thief", true);
          state.theme.isGame1Word1Page1ThiefWrong = false;
          localStorage.setItem("isGame1Word1Page1ThiefWrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Word1Page1Thief = true;
          localStorage.setItem("haveGuessedGame1Word1Page1Thief", true);
          state.theme.isGame1Word1Page1ThiefWrong = true;
          localStorage.setItem("isGame1Word1Page1ThiefWrong", true);
        }

      },
      setGame1Word2Page1ThiefLetters: ({state}) => {
        var x = document.getElementById("Game1Word2Page1ThiefLetters").value;
        console.log("x: " + x);
        state.game.game1Word2Page1ThiefGuess["game1Word2Page1ThiefLetters"] = x;
        console.log("state.game.game1Word2Page1ThiefGuess.game1Word2Page1ThiefLetters: " + state.game.game1Word2Page1ThiefGuess.game1Word2Page1ThiefLetters);
        localStorage.setItem("game1Word2Page1ThiefLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.game1Word2Page1ThiefGuess, state.game.game1Word2Page1ThiefAnswer)) {
          state.theme.haveGuessedGame1Word2Page1Thief = true;
          localStorage.setItem("haveGuessedGame1Word2Page1Thief", true);
          state.theme.isGame1Word2Page1ThiefWrong = false;
          localStorage.setItem("isGame1Word2Page1ThiefWrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Word2Page1Thief = true;
          localStorage.setItem("haveGuessedGame1Word2Page1Thief", true);
          state.theme.isGame1Word2Page1ThiefWrong = true;
          localStorage.setItem("isGame1Word2Page1ThiefWrong", true);
        }

      },
      setGame1Word3Page1ThiefLetters: ({state}) => {
        var x = document.getElementById("Game1Word3Page1ThiefLetters").value;
        console.log("x: " + x);
        state.game.game1Word3Page1ThiefGuess["game1Word3Page1ThiefLetters"] = x;
        console.log("state.game.game1Word3Page1ThiefGuess.game1Word3Page1ThiefLetters: " + state.game.game1Word3Page1ThiefGuess.game1Word3Page1ThiefLetters);
        localStorage.setItem("game1Word3Page1ThiefLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.game1Word3Page1ThiefGuess, state.game.game1Word3Page1ThiefAnswer)) {
          state.theme.haveGuessedGame1Word3Page1Thief = true;
          localStorage.setItem("haveGuessedGame1Word3Page1Thief", true);
          state.theme.isGame1Word3Page1ThiefWrong = false;
          localStorage.setItem("isGame1Word3Page1ThiefWrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Word3Page1Thief = true;
          localStorage.setItem("haveGuessedGame1Word3Page1Thief", true);
          state.theme.isGame1Word3Page1ThiefWrong = true;
          localStorage.setItem("isGame1Word3Page1ThiefWrong", true);
        }

      },
      setGame1Word4Page1ThiefLetters: ({state}) => {
        var x = document.getElementById("Game1Word4Page1ThiefLetters").value;
        console.log("x: " + x);
        state.game.game1Word4Page1ThiefGuess["game1Word4Page1ThiefLetters"] = x;
        console.log("state.game.game1Word4Page1ThiefGuess.game1Word4Page1ThiefLetters: " + state.game.game1Word4Page1ThiefGuess.game1Word4Page1ThiefLetters);
        localStorage.setItem("game1Word4Page1ThiefLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.game1Word4Page1ThiefGuess, state.game.game1Word4Page1ThiefAnswer)) {
          state.theme.haveGuessedGame1Word4Page1Thief = true;
          localStorage.setItem("haveGuessedGame1Word4Page1Thief", true);
          state.theme.isGame1Word4Page1ThiefWrong = false;
          localStorage.setItem("isGame1Word4Page1ThiefWrong", false);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGame1Word4Page1Thief = true;
          localStorage.setItem("haveGuessedGame1Word4Page1Thief", true);
          state.theme.isGame1Word4Page1ThiefWrong = true;
          localStorage.setItem("isGame1Word4Page1ThiefWrong", true);
        }

      },
      setNotes: ({state}) => {
        var x = document.getElementById("Notes").value;
        console.log("x: " + x);
        state.game.notes = x;
        localStorage.setItem("notes", x);
      },
      setThiefNotes: ({state}) => {
        var x = document.getElementById("ThiefNotes").value;
        console.log("x: " + x);
        state.game.thiefNotes = x;
        localStorage.setItem("thiefNotes", x);
      },
      goToPage1: ({state}) => {
        state.game.gamePage = "Intro"
        localStorage.setItem("gamePage", "Intro");
        state.theme.isHeaderClosed = false;
        state.theme.isInfoVisible = false;
      },
      goToPage2: ({state}) => {
        if (state.theme.haveGuessedGame1Page1 === true && state.theme.isGame1Page1Wrong === false) {
          state.game.gamePage = "Tybean Lower Porch";
          localStorage.setItem("gamePage", "Tybean Lower Porch");
          state.theme.isHeaderClosed = true;
          state.theme.isInfoVisible = false;
          state.theme.isSafeVisible = false;
        }
      },
      goToPage1Thief: ({state}) => {
        state.game.gamePageThief = "Intro - Thief"
        localStorage.setItem("gamePageThief", "Intro - Thief");
        state.theme.isHeaderClosed = false;
        state.theme.isInfoVisible = false;
      },
      goToPage2Thief: ({state}) => {
        if (state.theme.haveGuessedGame1Page1 === true && state.theme.isGame1Page1Wrong === false) {
          state.game.gamePageThief = "Tybean Lower Porch (thief)";
          localStorage.setItem("gamePageThief", "Tybean Lower Porch (thief)");
          state.theme.isHeaderClosed = true;
          state.theme.isInfoVisible = false;
        }
      },
      goToPage3: ({state}) => {
        if (state.theme.haveGuessedGame1Page1 === true && state.theme.isGame1Page1Wrong === false) {
          state.game.gamePage = "Jaycee Park - Shelter - Intro";
          localStorage.setItem("gamePage", "Jaycee Park - Shelter - Intro");
          state.theme.isHeaderClosed = false;
          state.theme.isInfoVisible = false;
        }
      },
      goToPage4: ({state}) => {
        console.log("goToPage4");
        if (state.theme.haveGuessedGame1Page2 === true && state.theme.isGame1Page2Wrong === false) {
          state.game.gamePage = "Jaycee Park - Shelter";
          localStorage.setItem("gamePage", "Jaycee Park - Shelter");
          state.theme.isHeaderClosed = true;
          state.theme.is2ndSafeVisible = false;
          state.theme.isInfoVisible = false;
          state.theme.isCementSandbagMessageVisible = false;
        }
      },
      goToPage5: ({state}) => {
        if (state.theme.haveGuessedGame2Page4 === true && state.theme.isGame2Page4Wrong === false) {
          state.game.gamePage = "Jaycee Park - Gazebo - Intro";
          localStorage.setItem("gamePage", "Jaycee Park - Gazebo - Intro");
          state.theme.isHeaderClosed = false;
          state.theme.isInfoVisible = false;
        }
      },
      goToPage6: ({state}) => {
        console.log("goToPage6");
        if (state.theme.haveGuessedGame2Page4 === true && state.theme.isGame2Page4Wrong === false) {
          state.game.gamePage = "Jaycee Park - Gazebo";
          localStorage.setItem("gamePage", "Jaycee Park - Gazebo");
          state.theme.isHeaderClosed = true;
          state.theme.isInfoVisible = false;
          state.theme.isCementSandbagMessage2Visible = false;
        }
      },
      goToPage7: ({state}) => {
        console.log("goToPage7");
        if (state.theme.haveGuessedGame1Page6 === true && state.theme.isGame1Page6Wrong === false) {
          state.game.gamePage = "Small Dog Park - Intro";
          localStorage.setItem("gamePage", "Small Dog Park - Intro");
          state.theme.isHeaderClosed = false;
          state.theme.isInfoVisible = false;
        }
      },
      goToPage8: ({state}) => {
        console.log("goToPage8");
        if (state.theme.haveGuessedGame1Page6 === true && state.theme.isGame1Page6Wrong === false) {
          state.game.gamePage = "Small Dog Park";
          localStorage.setItem("gamePage", "Small Dog Park");
          state.theme.isHeaderClosed = true;
          state.theme.isCementSandbagMessage3Visible = false;
          state.theme.isInfoVisible = false;
        }
      },
      goToPage9: ({state}) => {
        console.log("goToPage9");
        if (state.theme.haveGuessedGame1Page8 === true && state.theme.isGame1Page8Wrong === false) {
          state.game.gamePage = "Hucapoos - Intro";
          localStorage.setItem("gamePage", "Hucapoos - Intro");
          state.theme.isHeaderClosed = false;
          state.theme.isInfoVisible = false;
        }
      },
      goToPage10: ({state}) => {
        console.log("goToPage10");
        if (state.theme.haveGuessedGame1Page8 === true && state.theme.isGame1Page8Wrong === false) {
          state.game.gamePage = "Hucapoos";
          localStorage.setItem("gamePage", "Hucapoos");
          state.theme.isHeaderClosed = true;
        }
      },
      checkPage2: ({state}) => {
        //check if guess is right
        function shallowEqual(object1, object2) {
          const keys1 = Object.keys(object1);
          const keys2 = Object.keys(object2);
          if (keys1.length !== keys2.length) {
            return false;
          }
          for (let key of keys1) {
            if (object1[key] !== object2[key]) {
              return false;
            }
          }
          return true;
        }

        if (shallowEqual(state.game.game1NumPage1guess, state.game.game1NumPage1)) {
          //state.game.gamePage = "Tybean Lower Porch";
          state.theme.haveGuessedGame1Page1 = true;
          localStorage.setItem("haveGuessedGame1Page1", true);
          if (state.theme.haveGuessedGame1Page1) {
            localStorage.setItem("gamePage", "Tybean Lower Porch");
          }
          state.theme.isGame1Page1Wrong = false;
          localStorage.setItem("isGame1Page1Wrong", false);
        } else {
          state.theme.haveGuessedGame1Page1 = true;
          localStorage.setItem("haveGuessedGame1Page1", true);
          state.theme.isGame1Page1Wrong = true;
          localStorage.setItem("isGame1Page1Wrong", true);
        }
        state.theme.isHeaderClosed = true;
      },
      /* BackYard */
      goToBYPage1: ({state}) => {
        state.game.gamePageBY = "Backyard - Intro"
        localStorage.setItem("gamePageBY", "Backyard - Intro");
        state.theme.isHeaderClosed = false;
        state.theme.isInfoVisible = false;
      },
      goToBYPage2: ({state}) => {
        state.game.gamePageBY = "Backyard - Game";
        localStorage.setItem("gamePageBY", "Backyard - Game");
        state.theme.isHeaderClosed = true;
        state.theme.isInfoVisible = false;
      },
      toggleGreenEgg: ({state}) => {
        state.theme.isGreenEggHolderVisible = !state.theme.isGreenEggHolderVisible
      },
      setGreenEggLetters: ({state}) => {
        var x = document.getElementById("greenEggLetters").value;
        console.log("x: " + x);
        state.game.greenEggGuess["greenEggLetters"] = x;
        console.log("state.game.GreenEggGuess.greenEggLetters: " + state.game.greenEggGuess.greenEggLetters);
        localStorage.setItem("greenEggLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.greenEggGuess, state.game.greenEggAnswer)) {
          state.theme.haveGuessedGreenEgg = true;
          localStorage.setItem("haveGuessedGreenEgg", true);
          state.theme.isGreenEggWrong = false;
          localStorage.setItem("isGreenEggWrong", false);
          state.theme.isGreenEggHidden = false;
          localStorage.setItem("isGreenEggHidden", false);
          state.theme.backPackHasItems = true;
          localStorage.setItem("backPackHasItems", true);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGreenEgg = true;
          localStorage.setItem("haveGuessedGreenEgg", true);
          state.theme.isGreenEggWrong = true;
          localStorage.setItem("isGreenEggWrong", true);
        }
      },
      toggleBlueEgg: ({state}) => {
        state.theme.isBlueEggHolderVisible = !state.theme.isBlueEggHolderVisible
      },
      setBlueEggLetters: ({state}) => {
        var x = document.getElementById("BlueEggLetters").value;
        console.log("x: " + x);
        state.game.BlueEggGuess["BlueEggLetters"] = x;
        console.log("state.game.BlueEggGuess.BlueEggLetters: " + state.game.BlueEggGuess.BlueEggLetters);
        localStorage.setItem("BlueEggLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.BlueEggGuess, state.game.BlueEggAnswer)) {
          state.theme.haveGuessedBlueEgg = true;
          localStorage.setItem("haveGuessedBlueEgg", true);
          state.theme.isBlueEggWrong = false;
          localStorage.setItem("isBlueEggWrong", false);
          state.theme.isBlueEggHidden = false;
          localStorage.setItem("isBlueEggHidden", false);
          state.theme.backPackHasItems = true;
          localStorage.setItem("backPackHasItems", true);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedBlueEgg = true;
          localStorage.setItem("haveGuessedBlueEgg", true);
          state.theme.isBlueEggWrong = true;
          localStorage.setItem("isBlueEggWrong", true);
        }
        
      },
      togglePinkEgg: ({state}) => {
        state.theme.isPinkEggHolderVisible = !state.theme.isPinkEggHolderVisible
      },
      setPinkEggLetters: ({state}) => {
        var x = document.getElementById("PinkEggLetters").value;
        console.log("x: " + x);
        state.game.PinkEggGuess["PinkEggLetters"] = x;
        console.log("state.game.PinkEggGuess.PinkEggLetters: " + state.game.PinkEggGuess.PinkEggLetters);
        localStorage.setItem("PinkEggLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.PinkEggGuess, state.game.PinkEggAnswer)) {
          state.theme.haveGuessedPinkEgg = true;
          localStorage.setItem("haveGuessedPinkEgg", true);
          state.theme.isPinkEggWrong = false;
          localStorage.setItem("isPinkEggWrong", false);
          state.theme.isPinkEggHidden = false;
          localStorage.setItem("isPinkEggHidden", false);
          state.theme.backPackHasItems = true;
          localStorage.setItem("backPackHasItems", true);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedPinkEgg = true;
          localStorage.setItem("haveGuessedPinkEgg", true);
          state.theme.isPinkEggWrong = true;
          localStorage.setItem("isPinkEggWrong", true);
        }

      },
      toggleRedEgg: ({state}) => {
        state.theme.isRedEggHolderVisible = !state.theme.isRedEggHolderVisible
      },
      setRedEggLetters: ({state}) => {
        var x = document.getElementById("RedEggLetters").value;
        console.log("x: " + x);
        state.game.RedEggGuess["RedEggLetters"] = x;
        console.log("state.game.RedEggGuess.RedEggLetters: " + state.game.RedEggGuess.RedEggLetters);
        localStorage.setItem("RedEggLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.RedEggGuess, state.game.RedEggAnswer)) {
          state.theme.haveGuessedRedEgg = true;
          localStorage.setItem("haveGuessedRedEgg", true);
          state.theme.isRedEggWrong = false;
          localStorage.setItem("isRedEggWrong", false);
          state.theme.isRedEggHidden = false;
          localStorage.setItem("isRedEggHidden", false);
          state.theme.backPackHasItems = true;
          localStorage.setItem("backPackHasItems", true);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedRedEgg = true;
          localStorage.setItem("haveGuessedRedEgg", true);
          state.theme.isRedEggWrong = true;
          localStorage.setItem("isRedEggWrong", true);
        }

      },
      togglePurpleEgg: ({state}) => {
        state.theme.isPurpleEggHolderVisible = !state.theme.isPurpleEggHolderVisible
      },
      setPurpleEggLetters: ({state}) => {
        var x = document.getElementById("PurpleEggLetters").value;
        console.log("x: " + x);
        state.game.PurpleEggGuess["PurpleEggLetters"] = x;
        console.log("state.game.PurpleEggGuess.PurpleEggLetters: " + state.game.PurpleEggGuess.PurpleEggLetters);
        localStorage.setItem("PurpleEggLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.PurpleEggGuess, state.game.PurpleEggAnswer)) {
          state.theme.haveGuessedPurpleEgg = true;
          localStorage.setItem("haveGuessedPurpleEgg", true);
          state.theme.isPurpleEggWrong = false;
          localStorage.setItem("isPurpleEggWrong", false);
          state.theme.isPurpleEggHidden = false;
          localStorage.setItem("isPurpleEggHidden", false);
          state.theme.backPackHasItems = true;
          localStorage.setItem("backPackHasItems", true);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedPurpleEgg = true;
          localStorage.setItem("haveGuessedPurpleEgg", true);
          state.theme.isPurpleEggWrong = true;
          localStorage.setItem("isPurpleEggWrong", true);
        }

      },
      toggleOrangeEgg: ({state}) => {
        state.theme.isOrangeEggHolderVisible = !state.theme.isOrangeEggHolderVisible
      },
      setOrangeEggLetters: ({state}) => {
        var x = document.getElementById("OrangeEggLetters").value;
        console.log("x: " + x);
        state.game.OrangeEggGuess["OrangeEggLetters"] = x;
        console.log("state.game.OrangeEggGuess.OrangeEggLetters: " + state.game.OrangeEggGuess.OrangeEggLetters);
        localStorage.setItem("OrangeEggLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.OrangeEggGuess, state.game.OrangeEggAnswer)) {
          state.theme.haveGuessedOrangeEgg = true;
          localStorage.setItem("haveGuessedOrangeEgg", true);
          state.theme.isOrangeEggWrong = false;
          localStorage.setItem("isOrangeEggWrong", false);
          state.theme.isOrangeEggHidden = false;
          localStorage.setItem("isOrangeEggHidden", false);
          state.theme.backPackHasItems = true;
          localStorage.setItem("backPackHasItems", true);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedOrangeEgg = true;
          localStorage.setItem("haveGuessedOrangeEgg", true);
          state.theme.isOrangeEggWrong = true;
          localStorage.setItem("isOrangeEggWrong", true);
        }

      },
      toggleYellowEgg: ({state}) => {
        state.theme.isYellowEggHolderVisible = !state.theme.isYellowEggHolderVisible
      },
      setYellowEggLetters: ({state}) => {
        var x = document.getElementById("YellowEggLetters").value;
        console.log("x: " + x);
        state.game.YellowEggGuess["YellowEggLetters"] = x;
        console.log("state.game.YellowEggGuess.YellowEggLetters: " + state.game.YellowEggGuess.YellowEggLetters);
        localStorage.setItem("YellowEggLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.YellowEggGuess, state.game.YellowEggAnswer)) {
          state.theme.haveGuessedYellowEgg = true;
          localStorage.setItem("haveGuessedYellowEgg", true);
          state.theme.isYellowEggWrong = false;
          localStorage.setItem("isYellowEggWrong", false);
          state.theme.isYellowEggHidden = false;
          localStorage.setItem("isYellowEggHidden", false);
          state.theme.backPackHasItems = true;
          localStorage.setItem("backPackHasItems", true);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedYellowEgg = true;
          localStorage.setItem("haveGuessedYellowEgg", true);
          state.theme.isYellowEggWrong = true;
          localStorage.setItem("isYellowEggWrong", true);
        }

      },
      toggleIndigoEgg: ({state}) => {
        state.theme.isIndigoEggHolderVisible = !state.theme.isIndigoEggHolderVisible
      },
      setIndigoEggLetters: ({state}) => {
        var x = document.getElementById("IndigoEggLetters").value;
        console.log("x: " + x);
        state.game.IndigoEggGuess["IndigoEggLetters"] = x;
        console.log("state.game.IndigoEggGuess.IndigoEggLetters: " + state.game.IndigoEggGuess.IndigoEggLetters);
        localStorage.setItem("IndigoEggLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.IndigoEggGuess, state.game.IndigoEggAnswer)) {
          state.theme.haveGuessedIndigoEgg = true;
          localStorage.setItem("haveGuessedIndigoEgg", true);
          state.theme.isIndigoEggWrong = false;
          localStorage.setItem("isIndigoEggWrong", false);
          state.theme.isIndigoEggHidden = false;
          localStorage.setItem("isIndigoEggHidden", false);
          state.theme.backPackHasItems = true;
          localStorage.setItem("backPackHasItems", true);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedIndigoEgg = true;
          localStorage.setItem("haveGuessedIndigoEgg", true);
          state.theme.isIndigoEggWrong = true;
          localStorage.setItem("isIndigoEggWrong", true);
        }

      },
      toggleAquaEgg: ({state}) => {
        state.theme.isAquaEggHolderVisible = !state.theme.isAquaEggHolderVisible
      },
      setAquaEggLetters: ({state}) => {
        var x = document.getElementById("AquaEggLetters").value;
        console.log("x: " + x);
        state.game.AquaEggGuess["AquaEggLetters"] = x;
        console.log("state.game.AquaEggGuess.AquaEggLetters: " + state.game.AquaEggGuess.AquaEggLetters);
        localStorage.setItem("AquaEggLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.AquaEggGuess, state.game.AquaEggAnswer)) {
          state.theme.haveGuessedAquaEgg = true;
          localStorage.setItem("haveGuessedAquaEgg", true);
          state.theme.isAquaEggWrong = false;
          localStorage.setItem("isAquaEggWrong", false);
          state.theme.isAquaEggHidden = false;
          localStorage.setItem("isAquaEggHidden", false);
          state.theme.backPackHasItems = true;
          localStorage.setItem("backPackHasItems", true);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedAquaEgg = true;
          localStorage.setItem("haveGuessedAquaEgg", true);
          state.theme.isAquaEggWrong = true;
          localStorage.setItem("isAquaEggWrong", true);
        }

      },
      toggleSunsetEgg: ({state}) => {
        state.theme.isSunsetEggHolderVisible = !state.theme.isSunsetEggHolderVisible
      },
      setSunsetEggLetters: ({state}) => {
        var x = document.getElementById("SunsetEggLetters").value;
        console.log("x: " + x);
        state.game.SunsetEggGuess["SunsetEggLetters"] = x;
        console.log("state.game.SunsetEggGuess.SunsetEggLetters: " + state.game.SunsetEggGuess.SunsetEggLetters);
        localStorage.setItem("SunsetEggLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.SunsetEggGuess, state.game.SunsetEggAnswer)) {
          state.theme.haveGuessedSunsetEgg = true;
          localStorage.setItem("haveGuessedSunsetEgg", true);
          state.theme.isSunsetEggWrong = false;
          localStorage.setItem("isSunsetEggWrong", false);
          state.theme.isSunsetEggHidden = false;
          localStorage.setItem("isSunsetEggHidden", false);
          state.theme.backPackHasItems = true;
          localStorage.setItem("backPackHasItems", true);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedSunsetEgg = true;
          localStorage.setItem("haveGuessedSunsetEgg", true);
          state.theme.isSunsetEggWrong = true;
          localStorage.setItem("isSunsetEggWrong", true);
        }

      },
      toggleNeonEgg: ({state}) => {
        state.theme.isNeonEggHolderVisible = !state.theme.isNeonEggHolderVisible
      },
      setNeonEggLetters: ({state}) => {
        var x = document.getElementById("NeonEggLetters").value;
        console.log("x: " + x);
        state.game.NeonEggGuess["NeonEggLetters"] = x;
        console.log("state.game.NeonEggGuess.NeonEggLetters: " + state.game.NeonEggGuess.NeonEggLetters);
        localStorage.setItem("NeonEggLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.NeonEggGuess, state.game.NeonEggAnswer)) {
          state.theme.haveGuessedNeonEgg = true;
          localStorage.setItem("haveGuessedNeonEgg", true);
          state.theme.isNeonEggWrong = false;
          localStorage.setItem("isNeonEggWrong", false);
          state.theme.isNeonEggHidden = false;
          localStorage.setItem("isNeonEggHidden", false);
          state.theme.backPackHasItems = true;
          localStorage.setItem("backPackHasItems", true);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedNeonEgg = true;
          localStorage.setItem("haveGuessedNeonEgg", true);
          state.theme.isNeonEggWrong = true;
          localStorage.setItem("isNeonEggWrong", true);
        }

      },
      toggleBlackEgg: ({state}) => {
        state.theme.isBlackEggHolderVisible = !state.theme.isBlackEggHolderVisible
      },
      setBlackEggLetters: ({state}) => {
        var x = document.getElementById("BlackEggLetters").value;
        console.log("x: " + x);
        state.game.BlackEggGuess["BlackEggLetters"] = x;
        console.log("state.game.BlackEggGuess.BlackEggLetters: " + state.game.BlackEggGuess.BlackEggLetters);
        localStorage.setItem("BlackEggLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.BlackEggGuess, state.game.BlackEggAnswer)) {
          state.theme.haveGuessedBlackEgg = true;
          localStorage.setItem("haveGuessedBlackEgg", true);
          state.theme.isBlackEggWrong = false;
          localStorage.setItem("isBlackEggWrong", false);
          state.theme.isBlackEggHidden = false;
          localStorage.setItem("isBlackEggHidden", false);
          state.theme.backPackHasItems = true;
          localStorage.setItem("backPackHasItems", true);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedBlackEgg = true;
          localStorage.setItem("haveGuessedBlackEgg", true);
          state.theme.isBlackEggWrong = true;
          localStorage.setItem("isBlackEggWrong", true);
        }

      },
      toggleBrownEgg: ({state}) => {
        state.theme.isBrownEggHolderVisible = !state.theme.isBrownEggHolderVisible
      },
      setBrownEggLetters: ({state}) => {
        var x = document.getElementById("BrownEggLetters").value;
        console.log("x: " + x);
        state.game.BrownEggGuess["BrownEggLetters"] = x;
        console.log("state.game.BrownEggGuess.BrownEggLetters: " + state.game.BrownEggGuess.BrownEggLetters);
        localStorage.setItem("BrownEggLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.BrownEggGuess, state.game.BrownEggAnswer)) {
          state.theme.haveGuessedBrownEgg = true;
          localStorage.setItem("haveGuessedBrownEgg", true);
          state.theme.isBrownEggWrong = false;
          localStorage.setItem("isBrownEggWrong", false);
          state.theme.isBrownEggHidden = false;
          localStorage.setItem("isBrownEggHidden", false);
          state.theme.backPackHasItems = true;
          localStorage.setItem("backPackHasItems", true);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedBrownEgg = true;
          localStorage.setItem("haveGuessedBrownEgg", true);
          state.theme.isBrownEggWrong = true;
          localStorage.setItem("isBrownEggWrong", true);
        }

      },
      togglePeachEgg: ({state}) => {
        state.theme.isPeachEggHolderVisible = !state.theme.isPeachEggHolderVisible
      },
      setPeachEggLetters: ({state}) => {
        var x = document.getElementById("PeachEggLetters").value;
        console.log("x: " + x);
        state.game.PeachEggGuess["PeachEggLetters"] = x;
        console.log("state.game.PeachEggGuess.PeachEggLetters: " + state.game.PeachEggGuess.PeachEggLetters);
        localStorage.setItem("PeachEggLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.PeachEggGuess, state.game.PeachEggAnswer)) {
          state.theme.haveGuessedPeachEgg = true;
          localStorage.setItem("haveGuessedPeachEgg", true);
          state.theme.isPeachEggWrong = false;
          localStorage.setItem("isPeachEggWrong", false);
          state.theme.isPeachEggHidden = false;
          localStorage.setItem("isPeachEggHidden", false);
          state.theme.backPackHasItems = true;
          localStorage.setItem("backPackHasItems", true);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedPeachEgg = true;
          localStorage.setItem("haveGuessedPeachEgg", true);
          state.theme.isPeachEggWrong = true;
          localStorage.setItem("isPeachEggWrong", true);
        }

      },
      toggleGreyEgg: ({state}) => {
        state.theme.isGreyEggHolderVisible = !state.theme.isGreyEggHolderVisible
      },
      setGreyEggLetters: ({state}) => {
        var x = document.getElementById("GreyEggLetters").value;
        console.log("x: " + x);
        state.game.GreyEggGuess["GreyEggLetters"] = x;
        console.log("state.game.GreyEggGuess.GreyEggLetters: " + state.game.GreyEggGuess.GreyEggLetters);
        localStorage.setItem("GreyEggLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.GreyEggGuess, state.game.GreyEggAnswer)) {
          state.theme.haveGuessedGreyEgg = true;
          localStorage.setItem("haveGuessedGreyEgg", true);
          state.theme.isGreyEggWrong = false;
          localStorage.setItem("isGreyEggWrong", false);
          state.theme.isGreyEggHidden = false;
          localStorage.setItem("isGreyEggHidden", false);
          state.theme.backPackHasItems = true;
          localStorage.setItem("backPackHasItems", true);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedGreyEgg = true;
          localStorage.setItem("haveGuessedGreyEgg", true);
          state.theme.isGreyEggWrong = true;
          localStorage.setItem("isGreyEggWrong", true);
        }

      },
      toggleDarkgreenEgg: ({state}) => {
        state.theme.isDarkgreenEggHolderVisible = !state.theme.isDarkgreenEggHolderVisible
      },
      setDarkgreenEggLetters: ({state}) => {
        var x = document.getElementById("DarkgreenEggLetters").value;
        console.log("x: " + x);
        state.game.DarkgreenEggGuess["DarkgreenEggLetters"] = x;
        console.log("state.game.DarkgreenEggGuess.DarkgreenEggLetters: " + state.game.DarkgreenEggGuess.DarkgreenEggLetters);
        localStorage.setItem("DarkgreenEggLetters", x);
        //check if guess is right
        if (shallowEqual(state.game.DarkgreenEggGuess, state.game.DarkgreenEggAnswer)) {
          state.theme.haveGuessedDarkgreenEgg = true;
          localStorage.setItem("haveGuessedDarkgreenEgg", true);
          state.theme.isDarkgreenEggWrong = false;
          localStorage.setItem("isDarkgreenEggWrong", false);
          state.theme.isDarkgreenEggHidden = false;
          localStorage.setItem("isDarkgreenEggHidden", false);
          state.theme.backPackHasItems = true;
          localStorage.setItem("backPackHasItems", true);
        } else {
          console.log("wrong guess");
          state.theme.haveGuessedDarkgreenEgg = true;
          localStorage.setItem("haveGuessedDarkgreenEgg", true);
          state.theme.isDarkgreenEggWrong = true;
          localStorage.setItem("isDarkgreenEggWrong", true);
        }

      },
    }
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
}

export default hurricaneTheme
