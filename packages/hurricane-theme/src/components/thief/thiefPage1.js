import React from "react"
import {connect, Head, styled, css} from "frontity"
import Image from "@frontity/components/image";
import Switch from "@frontity/components/switch";

const Hurricane = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return (
        <div>
            <Head>
                <title>{page.title.rendered}</title>
                <meta name="description" content={page.excerpt.rendered} />
            </Head>
            <Switch>
                <button when={state.theme.isGameDetailVisible === true} className="button-small" onClick={actions.theme.toggleGameDetails}>Hide Game Details</button>

                <button when={state.theme.isGameDetailVisible === false} className="button-small" onClick={actions.theme.toggleGameDetails}>Show Game Details</button>
            </Switch>
            <GameDetails isVisible={state.theme.isGameDetailVisible}>
                <button className="close-button" onClick={actions.theme.toggleGameDetails}>X</button>
                <strong>Game Details:</strong> This game has 1 stop. You can tell if you are at the right stop by looking at the picture on the game.
                The picture represents the playing area and contains some extra stuff on screen for you to use to find the thief's ill-begotten gains.
                Once you are at the stop, you need click around on the game screen to
                try and figure out the puzzles. You also need to use details from your surroundings. (<strong>it is recommended to play in landscape mode</strong>). <br /><br /><strong>Fun Fact</strong>: The game can be played on one device or everyone can play together
                on their own device - just click on appropriate link to access game, once you have loaded game you don't need the internet.
                If you keep the window open gameplay will be saved over a long period of time.<br /><br />
                <div className="wp-block-columns">
                    <div className="wp-block-column-intro">
                        <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/info.png" />
                    </div>
                    <div className="wp-block-column-intro">
                        <h3>Click on Info bubble for helpful information about game</h3>
                    </div>
                </div>
                <div className="wp-block-columns">
                    <div className="wp-block-column-intro">
                        <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/diary-50.png" />
                    </div>
                    <div className="wp-block-column-intro">
                        <h3>Clicking on objects will sometimes open a small window with information and sometimes put them in your backpack.</h3>
                    </div>
                </div>
                <div className="wp-block-columns">
                    <div className="wp-block-column-intro">
                        <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/backpack.png" />
                    </div>
                    <div className="wp-block-column-intro">
                        <h3>If an object is in your backpack it will be highlighted .</h3>
                    </div>
                </div>
            </GameDetails>
                    <h2>A Thief is loose at Tybee Oaks!</h2>
                    <h2>Can you Help?</h2>


                    <h4>Only Stop is the Tybean Art & Coffee Bar.</h4>
            <div className="italics">Game is best viewed in landscape mode. Please turn your phone horizontally for gameplay at stops.</div>
                    <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/tybean-porch.png" />
            <h4>Start Playing when you are here</h4>


            <br />
            <hr /><br />
                    <h3>Game is under development - check back soon!!!</h3>
                    <div><br />Please email us at info@escapeout.games if you are interested in beta testing.</div>
            <br /><hr />
            <div className="wp-block-columns">
                <div className="wp-block-column ">
                    beta code:
                </div>
                <div className="wp-block-column input-column2">
                    <Input1 type="number" id="game1Num1Page1" value={state.game.game1NumPage1guess.game1Num1Page1} onChange={ actions.theme.setGame1Num1Page1 }/>
                    <Input2 type="number" id="game1Num2Page1" value={state.game.game1NumPage1guess.game1Num2Page1} onChange={ actions.theme.setGame1Num2Page1 }/>
                </div>
            </div>


            {
                !state.theme.isGame1Page1Wrong && state.theme.haveGuessedGame1Page1 ? (
                    <button className="button" onClick={actions.theme.goToPage2Thief}>I'm at Stop 1 and Want to Play!</button>
                ) : (
                    <div></div>
                )
            }


            {
                state.theme.isGame1Page1Wrong && state.theme.haveGuessedGame1Page1  ? (
                    <div>beta code wrong</div>
                ) : (<div></div>)
            }
            {
                !state.theme.isGame1Page1Wrong && state.theme.haveGuessedGame1Page1  ? (
                    <div>beta code ok</div>
                ) : (<div></div>)
            }





        </div>

    )
}

export default connect(Hurricane)
const GameDetails = styled.div`
  display: ${ props => props.isVisible ? 'block' : 'none'};
  background-color: #f7f7f7;
  padding:10px;
`
const Input1 = styled.input`
  width:30px;
  border: 1px solid black;
  height:30px;
  font-size:20px;
`
const Input2 = styled.input`
  width:30px;
  border: 1px solid black;
  height:30px;
  font-size:20px;
`

