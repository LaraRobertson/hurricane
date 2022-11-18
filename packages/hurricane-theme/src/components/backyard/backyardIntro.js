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
                    <h2>Get the Eggs!</h2>

            <div className="wp-block-columns">
                <div className="wp-block-column">
                    <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/pink-egg.png" />
                </div>
                <div className="wp-block-column">
                    <h3>Eggs are in the backyard.</h3>
                </div>
            </div>
            <div className="wp-block-columns">
                <div className="wp-block-column">
                    <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/info.png" />
                </div>
                <div className="wp-block-column">
                    <h3>Click on Info bubble for helpful information about game</h3>
                </div>
            </div>
            <div className="wp-block-columns">
                <div className="wp-block-column">
                    <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/backpack.png" />
                </div>
                <div className="wp-block-column">
                    <h3>If an object is in your backpack it will be highlighted .</h3>
                </div>
            </div>
            <div className="wp-block-columns">
                <div className="wp-block-column">
                    <h3>Click here to load photos to help you solve clues.</h3>
                </div>
                <div className="wp-block-column">
                    <Link target="_blank" link="https://photos.app.goo.gl/D8osP3kKxiT7dPxd8">https://photos.app.goo.gl/D8osP3kKxiT7dPxd8</Link>
                </div>

            </div>

            <div className="italics">Game is best viewed in landscape mode. Please turn your phone horizontally for gameplay at stops.</div>
                    <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/backyard.png" />

            <br />

           <button className="button" onClick={actions.theme.goToBYPage2}>I'm Ready to Play!</button>

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

