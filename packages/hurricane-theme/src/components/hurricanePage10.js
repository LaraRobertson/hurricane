import React from "react"
import {connect, Head, styled, css} from "frontity"
import Image from "@frontity/components/image";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";

const Hurricane = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return (
        <RelativeDiv>
            <Head>
                <title>{page.title.rendered}</title>
                <meta name="description" content={page.excerpt.rendered} />
            </Head>
            <ImageHolder>
                <BackPackHolderSmall>
                    <BackpackSmall onClick={actions.theme.toggleBackpack} isBright={state.theme.backPackHasItems}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/backpack.png" />
                    </BackpackSmall>
                </BackPackHolderSmall>
                <DiaryHolderBig isVisible={state.theme.isTornDiaryInsideVisible}>
                    <DiaryBig>
                        <button className="close-button" onClick={actions.theme.toggleTornDiary}>X</button>
                     </DiaryBig>
                </DiaryHolderBig>

                <BackPackHolderBig isVisible={state.theme.isBackPackVisible}>
                    <BackpackBig>
                        <button className="close-button" onClick={actions.theme.toggleBackpack}>X</button>
                        <h3>Backpack Contents</h3><br />
                        <div className = "wp-block-columns" >
                        {state.game.backpack.map((item) => {
                            return (
                                    <div className = "wp-block-column" key={item.key}>
                                    <img onClick={() => actions.theme.showItemContents(item.key)} className={item.key} src={item.src} />
                                    </div>
                            )
                        })}
                        </div>
                    </BackpackBig>
                </BackPackHolderBig>
                <SafeHolderBig isVisible={state.theme.isSafeVisible} >
                    <SafeBig>
                        <button className="close-button" onClick={actions.theme.toggleSafe}>X</button>
                        <FormGame>
                            <br /><br />
                            <div>Try to Open Safe!</div>
                            <br />
                            <Input1 type="text" id="game1Num1Page10" value={state.game.game1NumPage10guess.game1Num1Page10} onChange={ actions.theme.setGame1Num1Page10 }/>
                            <Input2 type="text" id="game1Num2Page10" value={state.game.game1NumPage10guess.game1Num2Page10} onChange={ actions.theme.setGame1Num2Page10 }/>
                            <Input1 type="text" id="game1Num3Page10" value={state.game.game1NumPage10guess.game1Num3Page10} onChange={ actions.theme.setGame1Num3Page10 }/>

                            <br /><br /><br />


                            {
                                state.theme.isGame1Page10Wrong && state.theme.haveGuessedGame1Page10  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isGame1Page10Wrong && state.theme.haveGuessedGame1Page10  ? (
                                    <div>Right!<br /><br />
                                        <PuzzlePiece2 isVisible={state.theme.isPuzzlePiece2Visible} onClick={actions.theme.PuzzlePiece2}>
                                            <Image src={"https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/puzzlepiece2.png"} />
                                        </PuzzlePiece2></div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </SafeBig>
                </SafeHolderBig>
                <SafeHolderBig isVisible={state.theme.is2ndSafeVisible} >
                    <SafeBig>
                        <button className="close-button" onClick={actions.theme.toggle2ndSafe}>X</button>
                        <FormGame>
                            <br /><br />
                            <div>Try to Open Safe!</div>
                            <br />
                            <Input1 type="number" id="game3Num1Page10" value={state.game.game3NumPage10guess.game3Num1Page10} onChange={ actions.theme.setGame3Num1Page10 }/>
                            <Input2 type="number" id="game3Num2Page10" value={state.game.game3NumPage10guess.game3Num2Page10} onChange={ actions.theme.setGame3Num2Page10 }/>
                            <Input1 type="number" id="game3Num3Page10" value={state.game.game3NumPage10guess.game3Num3Page10} onChange={ actions.theme.setGame3Num3Page10 }/>

                            <br /><br /><br />


                            {
                                state.theme.isGame3Page10Wrong && state.theme.haveGuessedGame3Page10  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isGame3Page10Wrong && state.theme.haveGuessedGame3Page10  ? (
                                    <div>Right!<br /><br />
                                        <PuzzlePiece2 isVisible={state.theme.isPuzzlePiece4Visible} onClick={actions.theme.PuzzlePiece4}>
                                            <Image src={"https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/puzzlepiece4.png"} />
                                        </PuzzlePiece2></div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </SafeBig>
                </SafeHolderBig>
                <SafeHolderBig isVisible={state.theme.is3rdSafeVisible} >
                    <SafeBig>
                        <button className="close-button" onClick={actions.theme.toggle3rdSafe}>X</button>
                <FormGame>
                    <br /><br />
                    <div>Try to Open Safe!</div>
                    <br />
                    <Input1 type="number" id="game2Num1Page10" value={state.game.game2NumPage10guess.game2Num1Page10} onChange={ actions.theme.setGame2Num1Page10 }/>
                    <Input2 type="number" id="game2Num2Page10" value={state.game.game2NumPage10guess.game2Num2Page10} onChange={ actions.theme.setGame2Num2Page10 }/>
                    <Input1 type="number" id="game2Num3Page10" value={state.game.game2NumPage10guess.game2Num3Page10} onChange={ actions.theme.setGame2Num3Page10 }/>

                    <br /><br /><br />


                    {
                        state.theme.isGame2Page10Wrong && state.theme.haveGuessedGame2Page10  ? (
                            <div>Wrong!</div>
                        ) : (<div></div>)
                    }
                    {
                        !state.theme.isGame2Page10Wrong && state.theme.haveGuessedGame2Page10  ? (
                            <div>Right!<br /><br />
                                <PuzzlePiece2 isVisible={state.theme.isPuzzlePiece3Visible} onClick={actions.theme.PuzzlePiece3}>
                                    <Image src={"https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/puzzlepiece3.png"} />
                                </PuzzlePiece2></div>
                        ) : (<div></div>)
                    }
                </FormGame>
                        </SafeBig>
                </SafeHolderBig>
                <SafeHolderBig isVisible={state.theme.is4thSafeVisible} >
                    <SafeBig>
                        <button className="close-button" onClick={actions.theme.toggle4thSafe}>X</button>
                        <FormGame>
                            <br /><br />
                            <div>What is the Code to Start the Truck!</div>
                            <br />
                            <Input3 type="text" id="game4Num1Page10" value={state.game.game4NumPage10guess.game4Num1Page10} onChange={ actions.theme.setGame4Num1Page10 }/>

                            <br /><br /><br />


                            {
                                state.theme.isGame4Page10Wrong && state.theme.haveGuessedGame4Page10  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isGame4Page10Wrong && state.theme.haveGuessedGame4Page10  ? (
                                    <div>Right!<br /><br />
                                      <h1>YOU WIN!!!!!!</h1></div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </SafeBig>
                </SafeHolderBig>
                <InfoHolderSmall>
                    <InfoSmall onClick={actions.theme.toggleInfo}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/info.png" /></InfoSmall>
                </InfoHolderSmall>


                <Switch>
                    <Cube1 when={state.theme.isSpinnyThing1 === "diary"} onClick={actions.theme.toggleSpinnyThing1}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-diary.png" />
                    </Cube1>
                    <Cube1 when={state.theme.isSpinnyThing1 === "frisbee"} onClick={actions.theme.toggleSpinnyThing1}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-frisbee.png" />
                    </Cube1>
                    <Cube1 when={state.theme.isSpinnyThing1 === "hat"} onClick={actions.theme.toggleSpinnyThing1}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-hat.png" />
                    </Cube1>
                    <Cube1 when={state.theme.isSpinnyThing1 === "dog"} onClick={actions.theme.toggleSpinnyThing1}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-dog.png" />
                    </Cube1>
                    <Cube1 when={state.theme.isSpinnyThing1 === "egg"} onClick={actions.theme.toggleSpinnyThing1}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-egg.png" />
                    </Cube1>
                    <Cube1 when={state.theme.isSpinnyThing1 === "key"} onClick={actions.theme.toggleSpinnyThing1}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-key.png" />
                    </Cube1>
                </Switch>
                <Switch>
                    <Cube2 when={state.theme.isSpinnyThing2 === "diary"} onClick={actions.theme.toggleSpinnyThing2}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-diary.png" />
                    </Cube2>
                    <Cube2 when={state.theme.isSpinnyThing2 === "frisbee"} onClick={actions.theme.toggleSpinnyThing2}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-frisbee.png" />
                    </Cube2>
                    <Cube2 when={state.theme.isSpinnyThing2 === "hat"} onClick={actions.theme.toggleSpinnyThing2}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-hat.png" />
                    </Cube2>
                    <Cube2 when={state.theme.isSpinnyThing2 === "dog"} onClick={actions.theme.toggleSpinnyThing2}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-dog.png" />
                    </Cube2>
                    <Cube2 when={state.theme.isSpinnyThing2 === "egg"} onClick={actions.theme.toggleSpinnyThing2}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-egg.png" />
                    </Cube2>
                    <Cube2 when={state.theme.isSpinnyThing2 === "key"} onClick={actions.theme.toggleSpinnyThing2}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-key.png" />
                    </Cube2>
                </Switch>
                <Switch>
                    <Cube3 when={state.theme.isSpinnyThing3 === "diary"} onClick={actions.theme.toggleSpinnyThing3}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-diary.png" />
                    </Cube3>
                    <Cube3 when={state.theme.isSpinnyThing3 === "frisbee"} onClick={actions.theme.toggleSpinnyThing3}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-frisbee.png" />
                    </Cube3>
                    <Cube3 when={state.theme.isSpinnyThing3 === "hat"} onClick={actions.theme.toggleSpinnyThing3}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-hat.png" />
                    </Cube3>
                    <Cube3 when={state.theme.isSpinnyThing3 === "dog"} onClick={actions.theme.toggleSpinnyThing3}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-dog.png" />
                    </Cube3>
                    <Cube3 when={state.theme.isSpinnyThing3 === "egg"} onClick={actions.theme.toggleSpinnyThing3}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-egg.png" />
                    </Cube3>
                    <Cube3 when={state.theme.isSpinnyThing3 === "key"} onClick={actions.theme.toggleSpinnyThing3}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-key.png" />
                    </Cube3>
                </Switch>
                <Switch>
                    <Cube4 when={state.theme.isSpinnyThing4 === "diary"} onClick={actions.theme.toggleSpinnyThing4}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-diary.png" />
                    </Cube4>
                    <Cube4 when={state.theme.isSpinnyThing4 === "frisbee"} onClick={actions.theme.toggleSpinnyThing4}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-frisbee.png" />
                    </Cube4>
                    <Cube4 when={state.theme.isSpinnyThing4 === "hat"} onClick={actions.theme.toggleSpinnyThing4}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-hat.png" />
                    </Cube4>
                    <Cube4 when={state.theme.isSpinnyThing4 === "dog"} onClick={actions.theme.toggleSpinnyThing4}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-dog.png" />
                    </Cube4>
                    <Cube4 when={state.theme.isSpinnyThing4 === "egg"} onClick={actions.theme.toggleSpinnyThing4}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-egg.png" />
                    </Cube4>
                    <Cube4 when={state.theme.isSpinnyThing4 === "key"} onClick={actions.theme.toggleSpinnyThing4}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cube-key.png" />
                    </Cube4>
                </Switch>

                <PuzzlePiece1 isVisible={state.theme.isSpinnyRight && state.theme.isPuzzlePiece1Visible} onClick={actions.theme.PuzzlePiece1}>
                    <Image src={"https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/puzzlepiece1.png"} />
                </PuzzlePiece1>


                <SpinnyThing>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/spinny-thing.png" />
                </SpinnyThing>
                <BusStopSign  isVisible={state.theme.isTaserAvailable && !state.theme.isBusStopLit} onClick={actions.theme.toggleBusStop}>
                   <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/busstopsign.png" />
                </BusStopSign>
                <BusStopSign  isVisible={state.theme.isTaserAvailable && state.theme.isBusStopLit} onClick={actions.theme.toggleBusStop}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/busstopsign-on.png" />
                </BusStopSign>
                <BusStopSign  isVisible={!state.theme.isTaserAvailable} >
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/busstopsign.png" />
                </BusStopSign>
                <BlueCornhole isVisible={state.theme.isNumBusAvailable && !state.theme.isCornHoleBlueMsgVisible} onClick={actions.theme.toggleCornHoleBlue}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cornhole-blue.png" />
                </BlueCornhole>
                <BlueCornhole isVisible={state.theme.isNumBusAvailable && state.theme.isCornHoleBlueMsgVisible} onClick={actions.theme.toggleCornHoleBlue}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cornhole-blue-on.png" />
                </BlueCornhole>
                <BlueCornhole isVisible={!state.theme.isNumBusAvailable}>
                    <Image className="test" alt="test" src="http://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cornhole-blue.png" />
                </BlueCornhole>

                <YellowCornhole isVisible={state.theme.isNumBusAvailable && !state.theme.isCornHoleYellowMsgVisible} onClick={actions.theme.toggleCornHoleYellow}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cornhole-yellow.png" />
                </YellowCornhole>
                <YellowCornhole isVisible={state.theme.isNumBusAvailable && state.theme.isCornHoleYellowMsgVisible} onClick={actions.theme.toggleCornHoleYellow}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cornhole-yellow-on.png" />
                </YellowCornhole>
                <YellowCornhole isVisible={!state.theme.isNumBusAvailable}>
                    <Image className="test" alt="test" src="http://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/cornhole-yellow.png" />
                </YellowCornhole>

                {
                    state.theme.isTaserVisible ? (
                        <Taser onClick={actions.theme.taserLight}>
                            <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/taser.png" />
                        </Taser>
                    ) : (
                        <Taser >
                        </Taser>
                    )
                }

                <SafeHolderSmall>
                    <SafeSmall onClick={actions.theme.toggleSafe}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/safe2.png" /></SafeSmall>
                </SafeHolderSmall>
                <SafeHolderSmall2>
                    <SafeSmall onClick={actions.theme.toggle2ndSafe}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/safe2.png" /></SafeSmall>
                </SafeHolderSmall2>
                <SafeHolderSmall3>
                    <SafeSmall onClick={actions.theme.toggle3rdSafe}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/safe2.png" /></SafeSmall>
                </SafeHolderSmall3>
                <Seven>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/7.png" />
                </Seven>
                <Fortytwo>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/42.png" />
                </Fortytwo>
                <TruckCode onClick={actions.theme.toggle4thSafe}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/truck-code.png" />
                </TruckCode>
                <Winner isVisible={!state.theme.isGame4Page10Wrong && state.theme.haveGuessedGame4Page10}>
                                        <span className = "green">WINNER!!!</span>
                    <br /><br /><Link onClick={actions.theme.resetGame} link="/">Reset and go Home</Link>
                </Winner>
            </ImageHolder>
            <ImageHolderLandscape>
                <h2>Please Use Landscape View!</h2>
            </ImageHolderLandscape>
            <InfoHolderBig isVisible={state.theme.isInfoVisible} >
                <InfoBig>
                    <button className="close-button" onClick={actions.theme.toggleInfo}>X</button>
                    <InfoText>
                        <div className="wp-block-columns">
                            <div className="wp-block-column">
                                <InfoSmall >
                                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/info.png" /></InfoSmall>
                            </div>
                            <div className="wp-block-column">
                                <strong>This game is best played in landscape mode. Please turn your device sideways to play.</strong>
                            </div>
                        </div>
                        <div className="font-small">
                            <Link onClick={actions.theme.removeGame} className="link font-small" link="/">Home</Link>
                            &nbsp; | {state.game.gameName} -> <Link className="link font-small" link="/hurricane" onClick={actions.theme.goToPage1}>Intro</Link> |
                            &nbsp;<Link className="link font-small" link="/hurricane" onClick={actions.theme.goToPage2}>stop 1</Link>&nbsp; |
                            &nbsp;<Link className="link font-small" link="/hurricane" onClick={actions.theme.goToPage4}>stop 2</Link>&nbsp; |
                            &nbsp;<Link className="link font-small" link="/hurricane" onClick={actions.theme.goToPage6}>stop 3</Link>&nbsp; |
                            &nbsp;<Link className="link font-small" link="/hurricane" onClick={actions.theme.goToPage8}>stop 4</Link>&nbsp; |
                            &nbsp;<strong>{state.game.gamePage} (stop 5)</strong>
                        </div><br />
                        <strong>How to Play:</strong> Click around - some items will disappear and then appear in your backpack.  If it is in your backpack you may be able to use it by clicking on it.
                        <br />
                        <button className="button-small" onClick={actions.theme.toggleFact5}>Read Sandbag Protection again</button>
                        <button className="button-small" onClick={actions.theme.toggleMapDetails}>Show Map</button>
                        <br />
                        <strong>Goal for this stop:</strong> Get the truck running!
                        <br />
                        <button className="button-small" onClick={actions.theme.toggleHint1}>Hint (blue cornhole)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint2}>Hint (spinning cubes)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint3}>Hint (Bus Stop Safe)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint4}>Hint (yellow cornhole)</button>
                        <br />
                        <HintHolder isVisible={state.theme.isHint1Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint1}>X</button>
                            <strong>Hint for blue cornhole:</strong>
                            <br /><br />Use an object to get something - SE SW N - These are directions.  The safe nearest the blue corn hole board needs 3 numbers.

                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint2Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint2}>X</button>
                            <strong>Hint for spinning cubes:</strong> <br /><br />These objects were seen throughout the game.  In what
                            order did you see them (by stop).<br /><br />

                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint3Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint3}>X</button>
                            <strong>Hint for Bus Stop Safe:</strong>
                            <br /><br />Use an object on bus stop to get a clue.
                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint4Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint4}>X</button>
                            <strong>Hint for yellow cornhole:</strong>
                            <br /><br />Use an object to get something - count boards nad steps.
                            The safe nearest the blue corn hole board needs 3 numbers - so if there are 17 boards and 9 steps it would be 179.
                        </HintHolder>

                        <Link onClick={actions.theme.toggleInfo} link="/hurricane">Close Info and Play</Link> | <Link onClick={actions.theme.resetGame} link="/">Reset and go Home</Link>

                    </InfoText>
                </InfoBig>
            </InfoHolderBig>
            <InfoHolderBig isVisible={state.theme.isFact5Visible} >
                <InfoBig>
                    <button className="close-button" onClick={actions.theme.toggleFact5}>X</button>
                    <InfoText>
                        <div>
                            <strong>Sandbag Protection</strong><br /><br />
                            I now have quick access to 4500 sandbags!
                            <br /><br />
                            I want to help people protect their homes and one way to provide protection from flooding for your home is to protect the doorways.
                            <br /><br />“The best use of sandbags is to protect and anchor plastic sheeting on the door.
                            Sandbags alone will not keep all the water out.
                            <br /><br/>First place the plastic against the door and on the ground in front of the door. Extend the plastic beyond the edges of the doorway. You can use duct tape to help keep it attached to the door and wall.
                            <br /><br />Pile sandbags against the door and over the plastic on the ground, extending the bags slightly
                            beyond both sides of the doorway. <br /><br />Put the next row of bags on top with the center of the bags over the gap in the first row similar to the way bricks overlap.
                            Place the third row in line with the bottom row.
                            This will give you some protection for about a foot of water.”
                            <br />
                             <br />(nwclimate.org)

                        </div>
                        <br />
                        <button className="button" onClick={actions.theme.toggleFact5}>I get it!</button>



                    </InfoText>
                </InfoBig>
            </InfoHolderBig>
            <InfoHolderBig isVisible={state.theme.isMapDetailVisible} >
                <InfoBig>
                    <button className="close-button" onClick={actions.theme.toggleMapDetails}>X</button>
                    <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/hurricane-route.png" />
                </InfoBig>
            </InfoHolderBig>
        </RelativeDiv>
    )
}

export default connect(Hurricane)
const Winner = styled.div`
  position:absolute;
  right:0px;
  top:50px;
  font-size: 16px;
  margin-bottom:20px;
  background-color: white;
  padding:20px;
  border: 1px solid #4CAF50;
  cursor:pointer;
  z-index:102;
  display: ${ props => props.isVisible ? 'block' : 'none'};
`
const Taser= styled.div`
  max-width: 800px;
  padding: 1em;
  margin: auto;
  position:absolute;
  bottom:0%;
  left:20%;
  z-index:20;
  
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const Legs = styled.div`
  max-width: 800px;
  padding: 40px 0 0 30px;
  margin: auto;
  height: 100px;
  width:150px;
  position:absolute;
  font-size:12px;
  color: #FFE9EE;
  bottom:20%;
  left:20%;
  z-index:23;
  display: ${ props => props.isVisible ? 'block' : 'none'};

`
const NumBus = styled.div`
  max-width: 800px;
  padding: 10px 0 0 50px;
  margin: auto;
  height: 100px;
  width:257px;
  position:absolute;
  color: #FFE9EE;
  bottom:20%;
  right:10%;
  z-index:23;
  font-size:12px;
  display: ${ props => props.isVisible ? 'block' : 'none'};

`
const HintHolder = styled.div`
  position:absolute;
  top:-1px;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:-1px;
  background-color:white;
  height:300px;
  margin-bottom:20px;
  padding:20px 30px 20px 20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:150;
  border:1px solid green;
`
const RelativeDiv = styled.div`
  position:relative;
`
const YellowCornhole = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:50%;
  left:20%;
  z-index:22;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const SpinnyThing = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top: 50px;
  right:110px;
  z-index:22;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`

const Cube1 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:50px;
  right:215px;
  z-index:25;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const Cube2 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:50px;
  right:180px;
  z-index:25;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const Cube3 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:50px;
  right:145px;
  z-index:25;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const Cube4 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:50px;
  right:110px;
  z-index:25;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const PuzzlePiece1 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:120px;
  right:170px;
  z-index:25;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const PuzzlePiece2 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  z-index:25;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const BusStopSign = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:-5%;
  left:8%;
  z-index:25;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const BlueCornhole = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:50%;
  right:10%;
  z-index:20;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const Seven = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:90%;
  right:1%;
  z-index:20;
`
const Fortytwo = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:30%;
  right:1%;
  z-index:20;
`
const PryBar = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:0%;
  left:27%;
  z-index:30;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }

`


const Input1 = styled.input`
  width:50px;
  border: 1px solid black;
  height:30px;
  font-size:20px;
`
const Input2 = styled.input`
  width:50px;
  border: 1px solid black;
  height:30px;
  font-size:20px;
`
const Input3 = styled.input`
  width:200px;
  border: 1px solid black;
  height:30px;
  font-size:20px;
`
const ImageHolderLandscape = styled.div`
  position:relative;
  height: calc(100vh - 60px);
  z-index:10;
  @media (min-width: 500px) {
    display: none;
  }
 
`
const ImageHolder = styled.div`
  position:relative;
  height: calc(100vh - 60px);
  max-height:400px;
  z-index:10;
  @media (max-width: 501px) {
    display: none;
  }
  background: url("https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/huc-a-poos-truck.png") top center / cover no-repeat;

`
const BackPackHolderSmall = styled.div`
  position:absolute;
  right:20px;
  font-size: 10px;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
`
const SafeHolderSmall = styled.div`
  position:absolute;
  bottom:4%;
  left:15%;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
`
const SafeHolderSmall2 = styled.div`
  position:absolute;
  top:115px;
  left:40%;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
`
const SafeHolderSmall3 = styled.div`
  position:absolute;
  top:115px;
  left:55%;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
`
const TruckCode= styled.div`
  position:absolute;
  top:2%;
  left:2%;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
`
const InfoHolderSmall = styled.div`
  position:absolute;
  right:-10px;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
`
const BackPackHolderBig = styled.div`
  position:absolute;
  top:0;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  height:300px;
  margin-bottom:20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:103;
`
const DiaryHolderBig = styled.div`
  position:absolute;
  top:0;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  height:300px;
  margin-bottom:20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:105;
  background: url("https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/torndiarydogpark.png") #fff top left / auto no-repeat;
  
`

const CementHolderBig = styled.div`
  position:absolute;
  top:0;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  height:300px;
  margin-bottom:20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:103;
`


const CementBig= styled.div`
  max-width: 800px;
  padding:10px;
  width:100%;
  height:300px;
  margin: auto;
  position:absolute;
  top:0;
  right:0;
  border: 1px solid green;


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`

const SafeHolderBig = styled.div`
  position:absolute;
  top:0;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  height:300px;
  margin-bottom:20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:103;
`
const InfoHolderBig = styled.div`
  position:absolute;
  top:0;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  min-height:350px;
  margin-bottom:20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:103;
`

const BackpackSmall= styled.div`
  max-width: 800px;
  width:60px;
  height:78px;
  margin: auto;
  position:absolute;
  top:0;
  right:30px;
  padding-top:0px;
  text-align:center;
  border: ${ props => props.isBright ? '3px solid yellow' : 'none'};
  border-radius: 15px;

  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const InfoSmall= styled.div`
  max-width: 800px;
  margin: auto;
  width:50px;
  height:36px;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  } 
`

const SafeSmall= styled.div`
  max-width: 800px;
  width:70px;
  margin: auto;
  position:absolute;


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const BackpackBig= styled.div`
  max-width: 800px;
  padding:10px;
  width:100%;
  height:300px;
  margin: auto;
  position:absolute;
  top:0;
  right:0;
  border: 1px solid green;


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const DiaryBig= styled.div`
  max-width: 800px;
  width:100%;
  height:300px;
  margin: auto;
  position:absolute;
  top:0;
  right:0;
  border: 1px solid green;


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const SignHolderBig = styled.div`
  position:absolute;
  top:0;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  height:300px;
  margin-bottom:20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:103;
`
const SignBig= styled.div`
  max-width: 800px;
  padding:10px;
  width:100%;
  height:300px;
  margin: auto;
  position:absolute;
  top:0;
  right:0;
  border: 1px solid green;


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const TableHolderBig = styled.div`
  position:absolute;
  top:0;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  height:300px;
  margin-bottom:20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:103;
`
const TableBig= styled.div`
  max-width: 800px;
  padding:10px;
  width:100%;
  height:300px;
  margin: auto;
  position:absolute;
  top:0;
  right:0;
  border: 1px solid green;


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const InfoBig= styled.div`
  max-width: 800px;
  padding:10px;
  width:100%;
  margin: auto;
  position:relative;
  top:0;
  right:0;
  border: 1px solid green;


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`

const SafeBig= styled.div`
  max-width: 800px;
  padding:10px;
  width:100%;
  height:300px;
  margin: auto;
  position:absolute;
  top:0;
  right:0;
  border: 1px solid green;


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const FormGame = styled.form`
    position:absolute;
    top:0;
    left: 30px;
    height:200px;
    `

const InfoText = styled.div`
  width:100%;
  padding: 10px;

`