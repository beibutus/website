import React from "react";
import ReactHtmlParser from "react-html-parser";

import "./Player.scss";

import devices_player_image from "../../assets/images/devices_player_image.png";


const PlayerFooter = (props) => {

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    }

    return (
        <div>
            <div className="player-devices">
                <img src={devices_player_image} alt="Devices_image" />
            </div>

            <footer className="getStarted-footer">
                <div className="getStartedPlayer-button">
                    <a
                        className="startedPlayer-button top"
                        href="https://github.com/easably/platform-player-extension/releases/latest/download/EasyLang.Player-Beta-mac.dmg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>{getLangText("GetPlayerButtonMac")}</span>
                    </a>
                    <a
                        className="startedPlayer-button top"
                        href="https://github.com/easably/platform-player-extension/releases/latest/download/EasyLang.Player-Beta-win.exe"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>{getLangText("GetPlayerButtonWindows")}</span>
                    </a>
                </div>
            </footer>
        </div>
    )

};

export default PlayerFooter;