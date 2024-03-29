import React, { useState, useRef } from 'react'


export const Addbox = (props) => {

    let darkMode;
    if(localStorage.getItem('isDarkMode')===null){
        darkMode = false;
    }
    else{
        darkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    }

    const [addbtnCol, setAddBtnCol] = useState(true)
    const sourceLove = require("./img/interest_1.png");
    const sourceHappy = require("./img/interest_2.png");
    const sourceSad = require("./img/interest_3.png");
    const sourceFun = require("./img/interest_4.png");
    const sourceFamily = require("./img/interest_5.png");
    const sourceMotiv = require("./img/interest_6.png");

    const initValue = darkMode?`2px solid #ffffff87`:`2px solid #00000066`;
    const finValue = `6px solid #4b72be80`;

    const [love, setLove] = useState(initValue);
    const [happy, setHappy] = useState(initValue);
    const [sad, setSad] = useState(initValue);
    const [fun, setFun] = useState(initValue);
    const [family, setFamily] = useState(initValue);
    const [motiv, setMotiv] = useState(initValue);

    let interestList;
    if (localStorage.getItem('interestList') === null){
        interestList = [];
    }
    else{
        interestList = JSON.parse(localStorage.getItem('interestList'));
    }

    const [listItem, setListitem] = useState(interestList);
    const [feedUpdateList, setFeedUpdateList] = useState([]);

    const addBoxRef = useRef(null);


    const onClickAddboxbtn = (e) => {
        e.preventDefault();
        props.onClick(listItem);
        props.updateFeed(feedUpdateList);
    }
 
    

    return (
        <>
            <div className="add-box-back" style={props.style} >
                <div id="add-box" ref={addBoxRef} style={{backgroundColor: darkMode?'#35363a':'white', color: darkMode?'white':'black', borderColor: darkMode?'#35363a':'black'}}>
                    <div id="close-add-box">
                        <button id='close-btn' onClick={props.clickToClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </button>
                    </div>
                    <div id='add-box-heading'>
                        <h3>Select your Interests</h3>
                    </div>

                    <div id="topic-btn">
                        <div className="topics">
                            <div className="topics">
                                <li>
                                    <div className="add-box-items">
                                        {<button className="remove-interest-btn" style={{ visibility: love !== finValue ? 'hidden' : 'visible', backgroundColor: darkMode?'black':'white'}}
                                            onClick={() => {
                                                setLove(initValue);
                                                listItem.splice((listItem.indexOf(sourceLove)), 1);
                                                setListitem(listItem);
                                                feedUpdateList.splice((feedUpdateList.indexOf('love')), 1);
                                                setFeedUpdateList(feedUpdateList);
                                            }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                            </svg>
                                        </button>}
                                        <div style={{color: darkMode?'white':'black'}}>
                                            <img src={sourceLove} draggable="false" style={{padding:love===finValue?"2px":"1px", border: love }}
                                                onClick={() => {
                                                    if (love === initValue) {
                                                        setLove(finValue);
                                                        setListitem([...listItem, sourceLove]);
                                                        setFeedUpdateList([...feedUpdateList, 'love']);
                                                    }
                                                    else {
                                                        setLove(initValue);
                                                        listItem.splice((listItem.indexOf(sourceLove)), 1);
                                                        setListitem(listItem);
                                                        feedUpdateList.splice((feedUpdateList.indexOf('love')), 1);
                                                        setFeedUpdateList(feedUpdateList);
                                                    }
                                                }}
                                                alt="love" width={love===finValue?"50px":"60px"} />Love
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="add-box-items">
                                        {<button className="remove-interest-btn" style={{ visibility: happy !== finValue ? 'hidden' : 'visible', backgroundColor: darkMode?'black':'white'}}
                                            onClick={() => {
                                                setHappy(initValue);
                                                listItem.splice((listItem.indexOf(sourceHappy)), 1);
                                                setListitem(listItem);
                                                feedUpdateList.splice((feedUpdateList.indexOf('happy')), 1);
                                                setFeedUpdateList(feedUpdateList);
                                            }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                            </svg>
                                        </button>}
                                        <div style={{color: darkMode?'white':'black'}}>
                                            <img src={sourceHappy} draggable="false" style={{padding:happy===finValue?"2px":"1px", border: happy }}
                                                onClick={() => {
                                                    if (happy === initValue) {
                                                        setHappy(finValue)
                                                        setListitem([...listItem, sourceHappy]);
                                                        setFeedUpdateList([...feedUpdateList, 'happy']);
                                                    }
                                                    else {
                                                        setHappy(initValue);
                                                        listItem.splice((listItem.indexOf(sourceHappy)), 1);
                                                        setListitem(listItem);
                                                        feedUpdateList.splice((feedUpdateList.indexOf('happy')), 1);
                                                        setFeedUpdateList(feedUpdateList);
                                                    }
                                                }}
                                                alt="happy_sign"
                                                width={happy===finValue?"50px":"60px"} />Happy</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="add-box-items">
                                        {<button className="remove-interest-btn" style={{ visibility: sad !== finValue ? 'hidden' : 'visible', backgroundColor: darkMode?'black':'white'}}
                                            onClick={() => {
                                                setSad(initValue);
                                                listItem.splice((listItem.indexOf(sourceSad)), 1);
                                                setListitem(listItem);
                                                feedUpdateList.splice((feedUpdateList.indexOf('sad')), 1);
                                                setFeedUpdateList(feedUpdateList);
                                            }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                            </svg>
                                        </button>}
                                        <div style={{color: darkMode?'white':'black'}}>
                                            <img src={sourceSad} draggable="false" style={{padding:sad===finValue?"2px":"1px", border: sad }}
                                                onClick={() => {
                                                    if (sad === initValue) {
                                                        setSad(finValue);
                                                        setListitem([...listItem, sourceSad]);
                                                        setFeedUpdateList([...feedUpdateList, 'sad']);
                                                    }
                                                    else {
                                                        setSad(initValue);
                                                        listItem.splice((listItem.indexOf(sourceSad)), 1);
                                                        setListitem(listItem);
                                                        feedUpdateList.splice((feedUpdateList.indexOf('sad')), 1);
                                                        setFeedUpdateList(feedUpdateList);
                                                    }
                                                }}
                                                alt="sad_sign"
                                                width={sad===finValue?"50px":"60px"} />Sad</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="add-box-items">
                                        {<button className="remove-interest-btn" style={{ visibility: fun !== finValue ? 'hidden' : 'visible', backgroundColor: darkMode?'black':'white'}}
                                            onClick={() => {
                                                setFun(initValue);
                                                listItem.splice((listItem.indexOf(sourceFun)), 1);
                                                setListitem(listItem);
                                                feedUpdateList.splice((feedUpdateList.indexOf('fun')), 1);
                                                setFeedUpdateList(feedUpdateList);
                                            }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                            </svg>
                                        </button>}
                                        <div style={{color: darkMode?'white':'black'}}>
                                            <img src={sourceFun} draggable="false" style={{padding:fun===finValue?"2px":"1px", border: fun }}
                                                onClick={() => {
                                                    if (fun === initValue) {
                                                        setFun(finValue)
                                                        setListitem([...listItem, sourceFun]);
                                                        setFeedUpdateList([...feedUpdateList, 'fun']);
                                                    }
                                                    else {
                                                        setFun(initValue);
                                                        listItem.splice((listItem.indexOf(sourceFun)), 1);
                                                        setListitem(listItem);
                                                        feedUpdateList.splice((feedUpdateList.indexOf('fun')), 1);
                                                        setFeedUpdateList(feedUpdateList);
                                                    }
                                                }}
                                                alt="fun_sign"
                                                width={fun===finValue?"50px":"60px"} />Funny</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="add-box-items">
                                        {<button className="remove-interest-btn" style={{ visibility: family !== finValue ? 'hidden' : 'visible', backgroundColor: darkMode?'black':'white'}}
                                            onClick={() => {
                                                setFamily(initValue);
                                                listItem.splice((listItem.indexOf(sourceFamily)), 1);
                                                setListitem(listItem);
                                                feedUpdateList.splice((feedUpdateList.indexOf('family')), 1);
                                                setFeedUpdateList(feedUpdateList);
                                            }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                            </svg>
                                        </button>}
                                        <div style={{color: darkMode?'white':'black'}}>
                                            <img src={sourceFamily} draggable="false" style={{padding:family===finValue?"2px":"1px", border: family }}
                                                onClick={() => {
                                                    if (family === initValue) {
                                                        setFamily(finValue);
                                                        setListitem([...listItem, sourceFamily]);
                                                        setFeedUpdateList([...feedUpdateList, 'family']);
                                                    }
                                                    else {
                                                        setFamily(initValue);
                                                        listItem.splice((listItem.indexOf(sourceFamily)), 1);
                                                        setListitem(listItem);
                                                        feedUpdateList.splice((feedUpdateList.indexOf('family')), 1);
                                                        setFeedUpdateList(feedUpdateList);
                                                    }
                                                }}
                                                alt="family" width={family===finValue?"50px":"60px"} />With
                                            Family</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="add-box-items">
                                        {<button className="remove-interest-btn" style={{ visibility: motiv !== finValue ? 'hidden' : 'visible', backgroundColor: darkMode?'black':'white'}}
                                            onClick={() => {
                                                setMotiv(initValue);
                                                listItem.splice((listItem.indexOf(sourceMotiv)), 1);
                                                setListitem(listItem);
                                                feedUpdateList.splice((feedUpdateList.indexOf('motivation')), 1);
                                                setFeedUpdateList(feedUpdateList);
                                            }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                            </svg>
                                        </button>}
                                        <div style={{color: darkMode?'white':'black'}}>
                                            <img src={sourceMotiv} draggable="false" style={{padding:motiv===finValue?"2px":"1px", border: motiv }}
                                                onClick={() => {
                                                    if (motiv === initValue) {
                                                        setMotiv(finValue);
                                                        setListitem([...listItem, sourceMotiv]);
                                                        setFeedUpdateList([...feedUpdateList, 'motivation']);
                                                    }
                                                    else {
                                                        setMotiv(initValue);
                                                        listItem.splice((listItem.indexOf(sourceMotiv)), 1);
                                                        setListitem(listItem);
                                                        feedUpdateList.splice((feedUpdateList.indexOf('motivation')), 1);
                                                        setFeedUpdateList(feedUpdateList);
                                                    }
                                                }}
                                                alt="motivation_sign"
                                                width={motiv===finValue?"50px":"60px"} />Motivation</div>
                                    </div>
                                </li>
                            </div>
                        </div>
                        <button id="add-interests" style={{backgroundColor: addbtnCol?'#1245b4':'#435f9e'}} onClick={onClickAddboxbtn} onMouseDown={()=>setAddBtnCol(false)} onMouseUp={()=>setAddBtnCol(true)}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )

}
