import React from "react"
import {connect, Head, styled, css} from "frontity"
import Image from "@frontity/components/image";
import Link from "@frontity/components/link";


const Hurricane = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return (
        <div>
            <Head>
                <title>{page.title.rendered}</title>
                <meta name="description" content={page.excerpt.rendered} />
            </Head>
            <ImageHolder>
                <BackPackHolderSmall>
                    <BackpackSmall onClick={actions.theme.toggleBackpack} isBright={state.theme.backPackHasItems}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/backpack.png" />
                    </BackpackSmall>
                </BackPackHolderSmall>
                <BackPackHolderBig isVisible={state.theme.isBackPackVisible}>
                    <BackpackBig>
                        <button className="close-button" onClick={actions.theme.toggleBackpack}>X</button>
                        <h3>Backpack Contents</h3><br />
                        <div className="wp-block-columns">
                            <div className="wp-block-column">
                                {
                                    !state.theme.isGreenEggWrong && state.theme.haveGuessedGreenEgg  ? (
                                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/greenegg.png" />
                                    ) : (<div></div>)
                                }
                                {
                                    !state.theme.isPinkEggWrong && state.theme.haveGuessedPinkEgg  ? (
                                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/pinkegg.png" />
                                    ) : (<div></div>)
                                }
                                {
                                    !state.theme.isOrangeEggWrong && state.theme.haveGuessedOrangeEgg  ? (
                                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/orangeegg.png" />
                                    ) : (<div></div>)
                                }
                            </div>
                            <div className="wp-block-column">
                                {
                                    !state.theme.isBlueEggWrong && state.theme.haveGuessedBlueEgg  ? (
                                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/blueegg.png" />
                                    ) : (<div></div>)
                                }
                                {
                                    !state.theme.isRedEggWrong && state.theme.haveGuessedRedEgg  ? (
                                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/redegg.png" />
                                    ) : (<div></div>)
                                }
                                {
                                    !state.theme.isPurpleEggWrong && state.theme.haveGuessedPurpleEgg  ? (
                                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/purpleegg.png" />
                                    ) : (<div></div>)
                                }
                            </div>
                        </div>
                        <div className="wp-block-columns">
                            <div className="wp-block-column">
                                {
                                    !state.theme.isIndigoEggWrong && state.theme.haveGuessedIndigoEgg  ? (
                                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/indigoegg.png" />
                                    ) : (<div></div>)
                                }
                                {
                                    !state.theme.isAquaEggWrong && state.theme.haveGuessedAquaEgg  ? (
                                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/aquaegg.png" />
                                    ) : (<div></div>)
                                }

                                {
                                    !state.theme.isNeonEggWrong && state.theme.haveGuessedNeonEgg  ? (
                                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/neonegg.png" />
                                    ) : (<div></div>)
                                }
                            </div>
                            <div className="wp-block-column">
  
                                {
                                    !state.theme.isYellowEggWrong && state.theme.haveGuessedYellowEgg  ? (
                                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/yellowegg.png" />
                                    ) : (<div></div>)
                                }
                                {
                                    !state.theme.isSunsetEggWrong && state.theme.haveGuessedSunsetEgg  ? (
                                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/sunsetegg.png" />
                                    ) : (<div></div>)
                                }
                                {
                                    !state.theme.isBrownEggWrong && state.theme.haveGuessedBrownEgg  ? (
                                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/brownegg.png" />
                                    ) : (<div></div>)
                                }
                            </div>
                        </div>
                        <div className="wp-block-columns">
                            <div className="wp-block-column">

                                {
                                    !state.theme.isDarkgreenEggWrong && state.theme.haveGuessedDarkgreenEgg  ? (
                                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/darkgreenegg.png" />
                                    ) : (<div></div>)
                                }

                                {
                                    !state.theme.isPeachEggWrong && state.theme.haveGuessedPeachEgg  ? (
                                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/peachegg.png" />
                                    ) : (<div></div>)
                                }
                            </div>
                            <div className="wp-block-column">

                                {
                                    !state.theme.isGreyEggWrong && state.theme.haveGuessedGreyEgg  ? (
                                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/greyegg.png" />
                                    ) : (<div></div>)
                                }

                                {
                                    !state.theme.isBlackEggWrong && state.theme.haveGuessedBlackEgg  ? (
                                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/blackegg.png" />
                                    ) : (<div></div>)
                                }

                            </div>
                        </div>
                    </BackpackBig>
                </BackPackHolderBig>
                <InfoHolderSmall onClick={actions.theme.toggleInfo}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/info.png" />
                </InfoHolderSmall>
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
                               {state.game.gameNameBY} -> <Link className="link font-small" link="/backyard" onClick={actions.theme.goToBYPage1}>Intro</Link> | {state.game.gamePageBY} (only stop)
                            </div><br />
                            <strong>How to Play:</strong> Click on boxes - solve the clue and the egg will appear in your backpack. Answers to clues are here:
                            <Link target="_blank" link="https://photos.app.goo.gl/D8osP3kKxiT7dPxd8">https://photos.app.goo.gl/D8osP3kKxiT7dPxd8</Link>
                            <br /><br />
                            <strong>Goal for this stop:</strong> Get the Eggs!
                            <br /><br />
                            <Link onClick={actions.theme.toggleInfo} link="/backyard">Close Info and Play</Link> | <Link onClick={actions.theme.resetGameBackYard} link="/backyard">Reset and go Home</Link>

                        </InfoText>
                    </InfoBig>
                </InfoHolderBig>

                {
                    state.theme.isGreenEggHidden ? (
                        <GreenEgg onClick={actions.theme.toggleGreenEgg}>
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/green-egg-in-box.png" />
                        </GreenEgg>
                    ) : (
                        <GreenEgg >
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/empty-box.png" />
                        </GreenEgg>
                    )
                }
                <EggHolderBig isVisible={state.theme.isGreenEggHolderVisible} >
                    <EggBig>
                        <button className="close-button" onClick={actions.theme.toggleGreenEgg}>X</button>
                            <FormGame>
                                <div>Animal Addie ate first on her the Saturday after her First Birthday (answer in all caps).</div>
                                <br />
                                <InputText type="text" id="greenEggLetters" value={state.game.greenEggGuess.greenEggLetters} onChange={ actions.theme.setGreenEggLetters}/>
                                <br /><br /><br />

                                {
                                    state.theme.isGreenEggWrong && state.theme.haveGuessedGreenEgg  ? (
                                        <div>Wrong!</div>
                                    ) : (<div></div>)
                                }
                                {
                                    !state.theme.isGreenEggWrong && state.theme.haveGuessedGreenEgg  ? (
                                        <div>Right!<br /><br />
                                        Egg is in your backpack!</div>
                                    ) : (<div></div>)
                                }
                            </FormGame>
                        </EggBig>
                </EggHolderBig>
                {
                    state.theme.isBlueEggHidden ? (
                        <BlueEgg onClick={actions.theme.toggleBlueEgg}>
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/blue-egg-in-box.png" />
                        </BlueEgg>
                    ) : (
                        <BlueEgg >
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/empty-box.png" />
                        </BlueEgg>
                    )
                }
                <EggHolderBig isVisible={state.theme.isBlueEggHolderVisible} >
                    <EggBig>
                        <button className="close-button" onClick={actions.theme.toggleBlueEgg}>X</button>
                        <FormGame>
                            <div>Ohio License number on Red Honda Odyssey (answer in all caps).</div>
                            <br />
                            <InputText type="text" id="BlueEggLetters" value={state.game.BlueEggGuess.BlueEggLetters} onChange={ actions.theme.setBlueEggLetters}/>
                            <br /><br /><br />

                            {
                                state.theme.isBlueEggWrong && state.theme.haveGuessedBlueEgg  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isBlueEggWrong && state.theme.haveGuessedBlueEgg  ? (
                                    <div>Right!<br /><br />
                                        Egg is in your backpack!</div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </EggBig>
                </EggHolderBig>
                {
                    state.theme.isPinkEggHidden ? (
                        <PinkEgg onClick={actions.theme.togglePinkEgg}>
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/pink-egg-in-box.png" />
                        </PinkEgg>
                    ) : (
                        <PinkEgg >
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/empty-box.png" />
                        </PinkEgg>
                    )
                }
                <EggHolderBig isVisible={state.theme.isPinkEggHolderVisible} >
                    <EggBig>
                        <button className="close-button" onClick={actions.theme.togglePinkEgg}>X</button>
                        <FormGame>
                            <div>What Else Can Go ___________? On a Winter Card before Sam was born. (answer in all caps)</div>
                            <br />
                            <InputText type="text" id="PinkEggLetters" value={state.game.PinkEggGuess.PinkEggLetters} onChange={ actions.theme.setPinkEggLetters}/>
                            <br /><br /><br />

                            {
                                state.theme.isPinkEggWrong && state.theme.haveGuessedPinkEgg  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isPinkEggWrong && state.theme.haveGuessedPinkEgg  ? (
                                    <div>Right!<br /><br />
                                        Egg is in your backpack!</div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </EggBig>
                </EggHolderBig>
                {
                    state.theme.isRedEggHidden ? (
                        <RedEgg onClick={actions.theme.toggleRedEgg}>
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/red-egg-in-box.png" />
                        </RedEgg>
                    ) : (
                        <RedEgg >
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/empty-box.png" />
                        </RedEgg>
                    )
                }
                <EggHolderBig isVisible={state.theme.isRedEggHolderVisible} >
                    <EggBig>
                        <button className="close-button" onClick={actions.theme.toggleRedEgg}>X</button>
                        <FormGame>
                            <div>How Long (inches) was Sam when he was born? (answer with a number)</div>
                            <br />
                            <InputText type="text" id="RedEggLetters" value={state.game.RedEggGuess.RedEggLetters} onChange={ actions.theme.setRedEggLetters}/>
                            <br /><br /><br />

                            {
                                state.theme.isRedEggWrong && state.theme.haveGuessedRedEgg  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isRedEggWrong && state.theme.haveGuessedRedEgg  ? (
                                    <div>Right!<br /><br />
                                        Egg is in your backpack!</div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </EggBig>
                </EggHolderBig>
                {
                    state.theme.isPurpleEggHidden ? (
                        <PurpleEgg onClick={actions.theme.togglePurpleEgg}>
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/purple-egg-in-box.png" />
                        </PurpleEgg>
                    ) : (
                        <PurpleEgg >
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/empty-box.png" />
                        </PurpleEgg>
                    )
                }
                <EggHolderBig isVisible={state.theme.isPurpleEggHolderVisible} >
                    <EggBig>
                        <button className="close-button" onClick={actions.theme.togglePurpleEgg}>X</button>
                        <FormGame>
                            <div>Word on Addie's shirt at Beach while celebrating Sam's first birthday (answer in ALL CAPS).</div>
                            <br />
                            <InputText type="text" id="PurpleEggLetters" value={state.game.PurpleEggGuess.PurpleEggLetters} onChange={ actions.theme.setPurpleEggLetters}/>
                            <br /><br /><br />

                            {
                                state.theme.isPurpleEggWrong && state.theme.haveGuessedPurpleEgg  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isPurpleEggWrong && state.theme.haveGuessedPurpleEgg  ? (
                                    <div>Right!<br /><br />
                                        Egg is in your backpack!</div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </EggBig>
                </EggHolderBig>
                {
                    state.theme.isOrangeEggHidden ? (
                        <OrangeEgg onClick={actions.theme.toggleOrangeEgg}>
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/orange-egg-in-box.png" />
                        </OrangeEgg>
                    ) : (
                        <OrangeEgg >
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/empty-box.png" />
                        </OrangeEgg>
                    )
                }
                <EggHolderBig isVisible={state.theme.isOrangeEggHolderVisible} >
                    <EggBig>
                        <button className="close-button" onClick={actions.theme.toggleOrangeEgg}>X</button>
                        <FormGame>
                            <div>Brand of Milk we drank in Germany (answer in ALL CAPS).</div>
                            <br />
                            <InputText type="text" id="OrangeEggLetters" value={state.game.OrangeEggGuess.OrangeEggLetters} onChange={ actions.theme.setOrangeEggLetters}/>
                            <br /><br /><br />

                            {
                                state.theme.isOrangeEggWrong && state.theme.haveGuessedOrangeEgg  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isOrangeEggWrong && state.theme.haveGuessedOrangeEgg  ? (
                                    <div>Right!<br /><br />
                                        Egg is in your backpack!</div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </EggBig>
                </EggHolderBig>
                {
                    state.theme.isYellowEggHidden ? (
                        <YellowEgg onClick={actions.theme.toggleYellowEgg}>
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/yellow-egg-in-box.png" />
                        </YellowEgg>
                    ) : (
                        <YellowEgg >
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/empty-box.png" />
                        </YellowEgg>
                    )
                }
                <EggHolderBig isVisible={state.theme.isYellowEggHolderVisible} >
                    <EggBig>
                        <button className="close-button" onClick={actions.theme.toggleYellowEgg}>X</button>
                        <FormGame>
                            <div>Name of Bus in front of Cincinnati Museum (answer in ALL CAPS).</div>
                            <br />
                            <InputText type="text" id="YellowEggLetters" value={state.game.YellowEggGuess.YellowEggLetters} onChange={ actions.theme.setYellowEggLetters}/>
                            <br /><br /><br />

                            {
                                state.theme.isYellowEggWrong && state.theme.haveGuessedYellowEgg  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isYellowEggWrong && state.theme.haveGuessedYellowEgg  ? (
                                    <div>Right!<br /><br />
                                        Egg is in your backpack!</div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </EggBig>
                </EggHolderBig>
                {
                    state.theme.isIndigoEggHidden ? (
                        <IndigoEgg onClick={actions.theme.toggleIndigoEgg}>
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/indigo-egg-in-box.png" />
                        </IndigoEgg>
                    ) : (
                        <IndigoEgg >
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/empty-box.png" />
                        </IndigoEgg>
                    )
                }
                <EggHolderBig isVisible={state.theme.isIndigoEggHolderVisible} >
                    <EggBig>
                        <button className="close-button" onClick={actions.theme.toggleIndigoEgg}>X</button>
                        <FormGame>
                            <div>Name of Group that provided entertainment at Sam's Last Birthday in Cincinnati (answer in ALL CAPS).</div>
                            <br />
                            <InputText type="text" id="IndigoEggLetters" value={state.game.IndigoEggGuess.IndigoEggLetters} onChange={ actions.theme.setIndigoEggLetters}/>
                            <br /><br /><br />

                            {
                                state.theme.isIndigoEggWrong && state.theme.haveGuessedIndigoEgg  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isIndigoEggWrong && state.theme.haveGuessedIndigoEgg  ? (
                                    <div>Right!<br /><br />
                                        Egg is in your backpack!</div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </EggBig>
                </EggHolderBig>
                {
                    state.theme.isAquaEggHidden ? (
                        <AquaEgg onClick={actions.theme.toggleAquaEgg}>
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/aqua-egg-in-box.png" />
                        </AquaEgg>
                    ) : (
                        <AquaEgg >
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/empty-box.png" />
                        </AquaEgg>
                    )
                }
                <EggHolderBig isVisible={state.theme.isAquaEggHolderVisible} >
                    <EggBig>
                        <button className="close-button" onClick={actions.theme.toggleAquaEgg}>X</button>
                        <FormGame>
                            <div>What Year was St. Michael's established?</div>
                            <br />
                            <InputText type="text" id="AquaEggLetters" value={state.game.AquaEggGuess.AquaEggLetters} onChange={ actions.theme.setAquaEggLetters}/>
                            <br /><br /><br />

                            {
                                state.theme.isAquaEggWrong && state.theme.haveGuessedAquaEgg  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isAquaEggWrong && state.theme.haveGuessedAquaEgg  ? (
                                    <div>Right!<br /><br />
                                        Egg is in your backpack!</div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </EggBig>
                </EggHolderBig>
                {
                    state.theme.isSunsetEggHidden ? (
                        <SunsetEgg onClick={actions.theme.toggleSunsetEgg}>
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/sunset-egg-in-box.png" />
                        </SunsetEgg>
                    ) : (
                        <SunsetEgg >
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/empty-box.png" />
                        </SunsetEgg>
                    )
                }
                <EggHolderBig isVisible={state.theme.isSunsetEggHolderVisible} >
                    <EggBig>
                        <button className="close-button" onClick={actions.theme.toggleSunsetEgg}>X</button>
                        <FormGame>
                            <div>What was the Georgia License Plate Number on Red Honda Odyssey?</div>
                            <br />
                            <InputText type="text" id="SunsetEggLetters" value={state.game.SunsetEggGuess.SunsetEggLetters} onChange={ actions.theme.setSunsetEggLetters}/>
                            <br /><br /><br />

                            {
                                state.theme.isSunsetEggWrong && state.theme.haveGuessedSunsetEgg  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isSunsetEggWrong && state.theme.haveGuessedSunsetEgg  ? (
                                    <div>Right!<br /><br />
                                        Egg is in your backpack!</div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </EggBig>
                </EggHolderBig>
                {
                    state.theme.isNeonEggHidden ? (
                        <NeonEgg onClick={actions.theme.toggleNeonEgg}>
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/neon-egg-in-box.png" />
                        </NeonEgg>
                    ) : (
                        <NeonEgg >
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/empty-box.png" />
                        </NeonEgg>
                    )
                }
                <EggHolderBig isVisible={state.theme.isNeonEggHolderVisible} >
                    <EggBig>
                        <button className="close-button" onClick={actions.theme.toggleNeonEgg}>X</button>
                        <FormGame>
                            <div>Word on Addie's shirt on her birthday in Portugal? (All CAPS)</div>
                            <br />
                            <InputText type="text" id="NeonEggLetters" value={state.game.NeonEggGuess.NeonEggLetters} onChange={ actions.theme.setNeonEggLetters}/>
                            <br /><br /><br />

                            {
                                state.theme.isNeonEggWrong && state.theme.haveGuessedNeonEgg  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isNeonEggWrong && state.theme.haveGuessedNeonEgg  ? (
                                    <div>Right!<br /><br />
                                        Egg is in your backpack!</div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </EggBig>
                </EggHolderBig>
                {
                    state.theme.isBlackEggHidden ? (
                        <BlackEgg onClick={actions.theme.toggleBlackEgg}>
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/black-egg-in-box.png" />
                        </BlackEgg>
                    ) : (
                        <BlackEgg >
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/empty-box.png" />
                        </BlackEgg>
                    )
                }
                <EggHolderBig isVisible={state.theme.isBlackEggHolderVisible} >
                    <EggBig>
                        <button className="close-button" onClick={actions.theme.toggleBlackEgg}>X</button>
                        <FormGame>
                            <div>How much did Ty weigh at Birth? (_ LBS _ OZ)</div>
                            <br />
                            <InputText type="text" id="BlackEggLetters" value={state.game.BlackEggGuess.BlackEggLetters} onChange={ actions.theme.setBlackEggLetters}/>
                            <br /><br /><br />

                            {
                                state.theme.isBlackEggWrong && state.theme.haveGuessedBlackEgg  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isBlackEggWrong && state.theme.haveGuessedBlackEgg  ? (
                                    <div>Right!<br /><br />
                                        Egg is in your backpack!</div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </EggBig>
                </EggHolderBig>
                {
                    state.theme.isBrownEggHidden ? (
                        <BrownEgg onClick={actions.theme.toggleBrownEgg}>
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/brown-egg-in-box.png" />
                        </BrownEgg>
                    ) : (
                        <BrownEgg >
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/empty-box.png" />
                        </BrownEgg>
                    )
                }
                <EggHolderBig isVisible={state.theme.isBrownEggHolderVisible} >
                    <EggBig>
                        <button className="close-button" onClick={actions.theme.toggleBrownEgg}>X</button>
                        <FormGame>
                            <div>Number of Kids on Sam and Addie's Baseball Team.</div>
                            <br />
                            <InputText type="text" id="BrownEggLetters" value={state.game.BrownEggGuess.BrownEggLetters} onChange={ actions.theme.setBrownEggLetters}/>
                            <br /><br /><br />

                            {
                                state.theme.isBrownEggWrong && state.theme.haveGuessedBrownEgg  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isBrownEggWrong && state.theme.haveGuessedBrownEgg  ? (
                                    <div>Right!<br /><br />
                                        Egg is in your backpack!</div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </EggBig>
                </EggHolderBig>
                {
                    state.theme.isGreyEggHidden ? (
                        <GreyEgg onClick={actions.theme.toggleGreyEgg}>
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/grey-egg-in-box.png" />
                        </GreyEgg>
                    ) : (
                        <GreyEgg >
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/empty-box.png" />
                        </GreyEgg>
                    )
                }
                <EggHolderBig isVisible={state.theme.isGreyEggHolderVisible} >
                    <EggBig>
                        <button className="close-button" onClick={actions.theme.toggleGreyEgg}>X</button>
                        <FormGame>
                            <div>Animal on Ty's Life Jacket at Lake in 2013 (ALL CAPITALS)</div>
                            <br />
                            <InputText type="text" id="GreyEggLetters" value={state.game.GreyEggGuess.GreyEggLetters} onChange={ actions.theme.setGreyEggLetters}/>
                            <br /><br /><br />

                            {
                                state.theme.isGreyEggWrong && state.theme.haveGuessedGreyEgg  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isGreyEggWrong && state.theme.haveGuessedGreyEgg  ? (
                                    <div>Right!<br /><br />
                                        Egg is in your backpack!</div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </EggBig>
                </EggHolderBig>
                {
                    state.theme.isPeachEggHidden ? (
                        <PeachEgg onClick={actions.theme.togglePeachEgg}>
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/peach-egg-in-box.png" />
                        </PeachEgg>
                    ) : (
                        <PeachEgg >
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/empty-box.png" />
                        </PeachEgg>
                    )
                }
                <EggHolderBig isVisible={state.theme.isPeachEggHolderVisible} >
                    <EggBig>
                        <button className="close-button" onClick={actions.theme.togglePeachEgg}>X</button>
                        <FormGame>
                            <div>Name of point we hiked to in the Grand Canyon.</div>
                            <br />
                            <InputText type="text" id="PeachEggLetters" value={state.game.PeachEggGuess.PeachEggLetters} onChange={ actions.theme.setPeachEggLetters}/>
                            <br /><br /><br />

                            {
                                state.theme.isPeachEggWrong && state.theme.haveGuessedPeachEgg  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isPeachEggWrong && state.theme.haveGuessedPeachEgg  ? (
                                    <div>Right!<br /><br />
                                        Egg is in your backpack!</div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </EggBig>
                </EggHolderBig>
                {
                    state.theme.isDarkgreenEggHidden ? (
                        <DarkgreenEgg onClick={actions.theme.toggleDarkgreenEgg}>
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/darkgreen-egg-in-box.png" />
                        </DarkgreenEgg>
                    ) : (
                        <DarkgreenEgg >
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/empty-box.png" />
                        </DarkgreenEgg>
                    )
                }
                <EggHolderBig isVisible={state.theme.isDarkgreenEggHolderVisible} >
                    <EggBig>
                        <button className="close-button" onClick={actions.theme.toggleDarkgreenEgg}>X</button>
                        <FormGame>
                            <div>Word on Ty's shirt at his 4 year old birthday party.</div>
                            <br />
                            <InputText type="text" id="DarkgreenEggLetters" value={state.game.DarkgreenEggGuess.DarkgreenEggLetters} onChange={ actions.theme.setDarkgreenEggLetters}/>
                            <br /><br /><br />

                            {
                                state.theme.isDarkgreenEggWrong && state.theme.haveGuessedDarkgreenEgg  ? (
                                    <div>Wrong!</div>
                                ) : (<div></div>)
                            }
                            {
                                !state.theme.isDarkgreenEggWrong && state.theme.haveGuessedDarkgreenEgg  ? (
                                    <div>Right!<br /><br />
                                        Egg is in your backpack!</div>
                                ) : (<div></div>)
                            }
                        </FormGame>
                    </EggBig>
                </EggHolderBig>
            </ImageHolder>
            <ImageHolderLandscape>
                <h2>Please Use Landscape View!</h2>
            </ImageHolderLandscape>
        </div>
    )
}

export default connect(Hurricane)

const Input = styled.input`
  width:30px;
  border: 1px solid black;
  height:30px;
  font-size:20px;
`
const InputText = styled.input`
  width:250px;
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
  background: url("https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/backyard.png") top center / cover no-repeat;

`
const BackPackHolderSmall = styled.div`
  position:absolute;
  right:20px;
  font-size: 10px;
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
  top:30px;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  height:300px;
  margin-bottom:20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:103;
`

const EggHolderBig = styled.div`
  position:absolute;
  top:30px;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  height:300px;
  margin-bottom:20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:105;
  
`
const DiaryContent = styled.div`
padding:30px;
  width:200px;
  
`
const InfoHolderBig = styled.div`
  position:absolute;
  top:30px;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  height:350px;
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
const EggBig= styled.div`
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

const InfoBig= styled.div`
  max-width: 800px;
  padding:10px;
  width:100%;
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
    top:30px;
    left: 30px;
    `
const BlueEgg = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:40%;
  right:10%;
  z-index:22;

  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const GreenEgg = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom: 41%;
  left:32%;
  z-index:20;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`

const PinkEgg= styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
  position:absolute;
  top:63%;
  right:32%;
  z-index:20;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const RedEgg = styled.div`
  position:absolute;
  top:40%;
  right:30%;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`

const PurpleEgg = styled.div`
  position:absolute;
  bottom:1%;
  left:5%;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const OrangeEgg = styled.div`
  position:absolute;
  bottom:1%;
  right:5%;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const YellowEgg = styled.div`
  position:absolute;
  bottom:15%;
  right:10%;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const IndigoEgg = styled.div`
  position:absolute;
  bottom:45%;
  left:5%;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const AquaEgg = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom: 37%;
  left:22%;
  z-index:20;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const SunsetEgg = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top: 31%;
  left:17%;
  z-index:20;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const NeonEgg = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom: 51%;
  left:42%;
  z-index:20;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const BrownEgg= styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
  position:absolute;
  top:53%;
  right:22%;
  z-index:20;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const BlackEgg= styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
  position:absolute;
  top:43%;
  right:12%;
  z-index:20;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const GreyEgg = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:33%;
  right:1%;
  z-index:22;

  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const PeachEgg = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:55%;
  right:5%;
  z-index:22;

  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const DarkgreenEgg = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:47%;
  right:1%;
  z-index:22;

  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const InfoText = styled.div`
  width:100%;
  padding: 10px;

`