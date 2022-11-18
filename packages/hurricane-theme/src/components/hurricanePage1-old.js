import React from "react"
import {connect, Head, styled, css} from "frontity"
import Image from "@frontity/components/image";

const Hurricane = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return (
        <div>
            <Head>
                <title>{page.title.rendered}</title>
                <meta name="description" content={page.excerpt.rendered} />
            </Head>
                    <h2>Tybee Needs Sandbags!</h2>
                    <h2>Can you Help?</h2>


            <div className="wp-block-columns">
                <div className="wp-block-column">
                    <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/sandbag.png" />
                </div>
                <div className="wp-block-column">
                    <h3>Sandbags are hidden all over the city and we need you to find them.</h3>
                </div>

            </div>
                    <h3>First Stop is the Tybean Art & Coffee Bar.</h3>
                    <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/tybean-porch.png" />

                    <h3>Game is under development - check back soon!!!</h3>
                    <div><br />Please email us at info@escapeout.games if you are interested in beta testing.</div>

            <div className="wp-block-columns">
                <div className="wp-block-column">
                    <h3>Find the secret number on the bottom porch.</h3>
                </div>
                <div className="wp-block-column input-column2">
                    <Input1 type="number" id="game1Num1Page1" value={state.game.game1NumPage1guess.game1Num1Page1} onChange={ actions.theme.setGame1Num1Page1 }/>
                    <Input2 type="number" id="game1Num2Page1" value={state.game.game1NumPage1guess.game1Num2Page1} onChange={ actions.theme.setGame1Num2Page1 }/>
                </div>
            </div>


                    {
                        !state.theme.isGame1Page1Wrong && state.theme.haveGuessedGame1Page1 ? (
                            <button className="button" onClick={actions.theme.goToPage2}>Click to Start Playing!</button>
                        ) : (
                            <button className="button" onClick={actions.theme.checkPage2}>I found the Number!</button>
                        )
                    }


                    {
                        state.theme.isGame1Page1Wrong && state.theme.haveGuessedGame1Page1  ? (
                            <div>Wrong Number!</div>
                        ) : (<div></div>)
                    }
                    {
                        !state.theme.isGame1Page1Wrong && state.theme.haveGuessedGame1Page1  ? (
                            <div>Right Number!</div>
                        ) : (<div></div>)
                    }



        </div>

    )
}

export default connect(Hurricane)

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

