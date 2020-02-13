import React, { Component } from 'react';

import './Description.css';

import chromeStoreSvg from "../../assets/images/home/chromeStore.svg";
import number_1 from '../../assets/images/products/extension/number_1.png';
import number_2 from '../../assets/images/products/extension/number_2.png';
import number_3 from '../../assets/images/products/extension/number_3.png';
import number_4 from '../../assets/images/products/extension/number_4.png';
import image_1 from '../../assets/images/products/extension/image_1.png';
import image_2 from '../../assets/images/products/extension/image_2.png';
import image_3 from '../../assets/images/products/extension/image_3.png';



export default class Description extends Component {
    render() {
        return (
                <div className="Description">

                    <div className="flex-parent extension-block">

                        <div className="flex-child">
                            <h2>Read articles, watch movies and understand what your favourite songs are about</h2>
                            <p>
                                Translate words while reading an article or watching your favourite movie <br />
                                Add words to your personal lessons or train them in the text <br />
                                Repeat words in the exact context you found them <br />
                                Understand jokes and expressions <br />
                                Enrich your personal vocabulary <br />
                                <b>Learn and repeat words with Easylang Tutor</b>
                            </p>
                        </div>
                        <div className="flex-child">
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child">
                            <div className="extension-header button-header">
                                <div className="point"><img src={number_1} /></div>
                                <div>
                                    <h2>Add Easylang to your Chrome browser</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child button-extension">
                            <div className="button-started-extension">
                                <a className="get-started-button-extension top"
                                    href="https://chrome.google.com/webstore/detail/easylangapp/enhklinppkbachhbnjjpdccklacpidfl"
                                    target="_blank" rel="noopener noreferrer">
                                    <img src={chromeStoreSvg} alt="Chrome-store" className="icon get-started-button__icon" />
                                    <span className="tag">Add Easylang</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child">
                            <div className="extension-header">
                                <div className="point"><img src={number_2} /></div>
                                <div>
                                    <h2>Highlight the expression and add it</h2>
                                    <p>You can also translate the expression or full sentence.
              As you add a word, Easylang will hide it, so you could try to remember it's meaning and spelling.</p>

                                    <p>To train the expression we will add 2-3 sentences of the context,
              so you could remember meaning of the words and situations they are used.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child description-image">
                            <img src={image_1} alt="context-tutor-image" />
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child">
                            <div className="extension-header">
                                <div className="point"><img src={number_3} /></div>
                                <div>
                                    <h2>Open Context tutor in browser or on your mobile device</h2>
                                    <p>In the extension you can find the history of media
              you visited with links on the exact articles and videos. </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child description-image">
                            <img className="description-img" src={image_2} alt="Listening" />
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child">
                            <div className="extension-header">
                                <div className="point"><img src={number_4} /></div>
                                <div>
                                    <h2>Open lessons  and start training</h2>
                                    <p>The training is based on repeating the word, so we hide it from you in the context.
                                      Then you try to guess it.
              Don't worry! You can use hints if you can't remember a letter or a word. <br /> <br />

                                        After training you can see the statictics of your right and wrong answers
              and the whole picture of your progress. </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child description-image">
                            <img src={image_3} alt="Listening" />
                        </div>
                    </div>

                    <div className="flex-child button-extension">
                        <div className="button-started-extension">
                            <a className="get-started-button-extension-bottom top"
                                href="https://chrome.google.com/webstore/detail/easylangapp/enhklinppkbachhbnjjpdccklacpidfl" target="_blank"
                                rel="noopener noreferrer">
                                <img src={chromeStoreSvg} alt="Chrome-store" className="icon get-started-button__icon" />
                                <span className="tag">Add Easylang</span>
                            </a>
                        </div>
                    </div>

                </div>
        )
    }
}