import React from "react"
import {connect, Head, styled, css} from "frontity"
import Image from "@frontity/components/image";
import Link from "@frontity/components/link";
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
                    <h2>Small Dog Park</h2>

                    <h3>4th Stop is the small dog park near campground.</h3>
            <Link className="link font-small" link="/hurricane" onClick={actions.theme.goToPage6}>Back to Gazebo (stop 3)</Link>
            <br />
            <Switch>
                <button when={state.theme.isMapDetailVisible === false} className="button-small" onClick={actions.theme.toggleMapDetails}>Show Map</button>
                <button when={state.theme.isMapDetailVisible === true} className="button-small" onClick={actions.theme.toggleMapDetails}>Hide Map</button>
            </Switch>

            <GameDetails isVisible={state.theme.isMapDetailVisible}>
                <button className="close-button" onClick={actions.theme.toggleMapDetails}>X</button>
                <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/hurricane-route.png" />
            </GameDetails><br />
                    <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/small-dog-park.jpg" />
                    <br /><br />
                    <button className="button" onClick={actions.theme.goToPage8}>I'm Here and ready to play stop 4!</button>


        </div>

    )
}

export default connect(Hurricane)

const GameDetails = styled.div`
  display: ${ props => props.isVisible ? 'block' : 'none'};
  background-color: #f7f7f7;
  padding:10px;
`

