import React from 'react'
import { Main, MainContainer } from './MainElements'
const MainSection = () => {
    return (
        <Main>
            <MainContainer>
                <iframe 
                    title="Twitch Player"
                    src="https://player.twitch.tv/?channel=xqcow&parent=localhost"
                    frameborder="0"
                    allowfullscreen="true"
                    scrolling="no"
                    height="720"
                    width="1280"
                    >
                </iframe>
            </MainContainer>
            <MainContainer>
                <iframe
                        title="Twitch Chat"
                        id="chat_embed"
                        src="https://www.twitch.tv/embed/xqcow/chat?darkpopout&parent=localhost"
                        frameborder="0"
                        height="720"
                        width="350">
                    </iframe>
            </MainContainer>
        </Main>
    )
}

export default MainSection
