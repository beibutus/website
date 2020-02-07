import React, { Component } from 'react';
import './Description.scss';

import chromeStoreSvg from "../../assets/images/home/chromeStore.svg";
import extension_img_1 from "../../articles/images/extension-img-1.jpg";
import extension_img_2 from "../../articles/images/extension-img-2.png";
import extension_img_iphone_1 from "../../articles/images/extension-img-iphone.png";
import extension_img_iphone_2 from "../../articles/images/extension-img-iphone2.png";

export default class Description extends Component {
    render() {
        return (
            <div className="Description">
                <div class="flex-parent extension-block">

                    <div class="flex-child">
                        <h2>Read articles, watch movies and understand what your favourite songs are about</h2>
                        <p>
                            Translate words while reading an article or watching your favourite movie
                            Add words to your personal lessons or train them in the text
                            Repeat words in the exact context you found them
                            Understand jokes and expressions
                            Enrich your personal vocabulary<br />
                            <b>Learn and repeat words with Easylang Tutor</b>
                        </p>
                    </div>
                    <div class="flex-child">
                    </div>
                </div>

                <div class="flex-parent extension-block">
                    <div class="flex-child">
                        <div class="extension-header">
                            <div class="step">1</div>
                            <div>
                                <h2>Add Easylang to your Chrome browser</h2>
                            </div>
                        </div>
                    </div>
                    <div class="flex-child button-extension">
                        <div class="button-started-extension">
                            <a
                                class="get-started-button-extension top"
                                href="https://chrome.google.com/webstore/detail/easylangapp/enhklinppkbachhbnjjpdccklacpidfl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={chromeStoreSvg}
                                    alt="Chrome-store"
                                    class="icon get-started-button__icon"
                                />
                                <span class="tag">Add Easylang</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex-parent extension-block">
                    <div class="flex-child">
                        <div class="extension-header">
                            <div class="step">2</div>
                            <div>
                                <h2>Highlight the expression and add it</h2>
                                <p>You can also translate the expression or full sentence.
                    As you add a word, Easylang will hide it, so you could try to remember it’s meaning and spelling.</p>

                                <p>To train the expression we will add 2-3 sentences of the context,
                    so you could remember meaning of the words and situations they are used.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex-child">
                        <img src={extension_img_1} alt="context-tutor-image" />
                    </div>
                </div>
                <div class="flex-parent extension-block">
                    <div class="flex-child">
                        <div class="extension-header">
                            <div class="step">3</div>
                            <div>
                                <h2>Open Context tutor in browser or on your mobile device</h2>
                                <p>In the extension you can find the history of media
                    you visited with links on the exact articles and videos. </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex-child">
                        <img
                            src={extension_img_2}
                            alt="Listening" />
                    </div>
                </div>
                <div class="flex-parent extension-block">
                    <div class="flex-child">
                        <div class="extension-header">
                            <div class="step">4</div>
                            <div>
                                <h2>Open lessons  and start training</h2>
                                <p>The training is based on repeating the word, so we hide it from you in the context.
                    Then you try to guess it.<br />
                                    Don’t worry! You can use hints if you can’t remember a letter or a word.</p>

                                <p>After training you can see the statictics of your right and
                    wrong answers and the whole picture of your progress.</p>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="iphone-wrapper">
                            <div class="iphone-1">
                                <img src={extension_img_iphone_1} alt="Iphone-image" />
                            </div>
                            <div class="iphone-2">
                                <img src={extension_img_iphone_2} alt="Iphone-image" />
                            </div>
                        </div>
                    </div>
                </div>

                <h1>
                    <div class="button-started-extension bottom-button">
                        <a
                            class="get-started-button-extension top"
                            href="https://chrome.google.com/webstore/detail/easylangapp/enhklinppkbachhbnjjpdccklacpidfl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={chromeStoreSvg}
                                alt="Chrome-store"
                                class="icon get-started-button__icon"
                            />
                            <span>Add Easylang</span>
                        </a>
                    </div>
                </h1>

            </div>
        )
    }
}