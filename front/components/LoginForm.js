import React, { useCallback, useState } from 'react';
import { Drawer, Button, Input, Form, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import useInput from '../hooks/useInput';

const ButtonWrapper = styled(Button)`
    background: #aacd6e;
    border-color: #aacd6e;
    
    :hover {
        background: #80c340;
        border-color: #80c340;
    }
`;

const SignupInput = styled(Input)` 
    margin-bottom: 10px;
    border: 0;
    border-bottom: 1px solid #f0f0f0;
    font-size: 13px;
    outline: none;
    :hover {
        border-color: #aacd6e;
    } 
    :focus {
        box-shadow: none;
    }
`;

const InputWrapper = styled(Input)` 
    margin-bottom: 10px;
    border: 0 0 0 1px;
    :hover {
        border-color: #aacd6e;
    } 
    :focus {
        box-shadow: none;
    }
`;

const DivWrapper = styled.div` 
    height: 102px;
    overflow: auto;
    padding: 16px 14px;
    font-size: 12px;
    color: #909090;
    border: 1px solid #f0f0f0;
    margin-top: 10px;
`;

const CheckWrapper = styled(Checkbox)` 
    margin: 10px 0;
    color: #909090;
    span {
        font-size: 12px;
        padding-left: 3px;

    }
`;

const ButtonStyle = styled(Button)`
    background: #aacd6e;
    border-color: #aacd6e;
    padding: 0 80px;
    margin-left: 2px;
    margin-top: 5px;
    
    :hover {
        background: #80c340;
        border-color: #80c340;
    }
`;

const Signup = styled.a`
    color: black;
    font-size: 10px;

    :hover {
        color: #80c340;
    }
`;

const SearchPassword = styled.a`
    color: black;
    font-size: 10px;
    margin-left: 100px;

    :hover {
        color: #80c340;
    }
`;

const LoginWrapper = styled.p`
    font-size: 12px;
    border-top: 1px solid #f0f0f0;
    margin-top: 30px;
    padding-top: 35px;

`;

const ImgWrapper = styled.img`
    width: 25px;
    float: right;
    margin: 0 5px;

`;

// const Global = createGlobalStyle`
//     .ant-input-affix-wrapper {
//         background: #aacd6e;
//         border-color: #aacd6e;
//     }
// `;

const LoginForm = () => {
    // const dispatch = useDispatch();
    // const { logInLoading, logInError } = useSelector((state) => state.user);
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const onSubmitForm = useCallback(() => {
        console.log({
        email, password,
        });
    }, [email, password]);

    // ????????? drawer ????????? ????????????
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
        setSignupState(false);
    };

    // useEffect(() => {
    //     if (logInError) {
    //       alert(logInError);
    //     }
    // }, [logInError]);

    // const onSubmitForm = useCallback(() => {
    //     console.log(email, password);
    //     dispatch({
    //       type: LOG_IN_REQUEST,
    //       data: { email, password },
    //     });
    // }, []);

    // ???????????? or ????????? ??? ??????
    const [signupState, setSignupState] = useState(false);
    const onSignup = () => {
        setSignupState(true);
    };

    // ???????????? ?????????
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }

    return (
        <>
            <ButtonWrapper onClick={showDrawer}>
                ?????????
            </ButtonWrapper>
            
            {signupState ?           
            <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <Form onFinish={onSubmitForm}>
                    <br />
                    <SignupInput value={email} onChange={onChangeEmail} placeholder="?????????" type="email" />
                    <SignupInput placeholder="?????????" type="text" />
                    <SignupInput value={password} onChange={onChangePassword} placeholder="????????????" type="password" />               
                    <SignupInput placeholder="???????????? ??????" type="password" />
                    <DivWrapper>
                        <p>???1???(??????)

                        ??? ????????? ?????????????????? ???????????? ????????? ?????? ?????????(?????? "?????????"??? ??????)??? ????????? ?????? ??????????????? ???????????? ?????????????? ??? ??????????????? ???????????? ???????????? ?????????.

                        ???2???(??????)

                        ??? "????????????" ?????? ?????? ?????? ????????? ??????????????? ???????????? ????????? ???????????? ????????????????????? ???????????? ?????? ?????? ????????? ????????? ??? ????????? ????????? ????????? ???????????? ?????????, ????????? ??????????????? ???????????? ???????????? ???????????? ???????????????.
                        ??? "?????????"??? "????????????"??? ???????????? ??? ????????? ?????? "????????????"??? ???????????? ???????????? ?????? ?????? ??? ???????????? ????????????.
                        ??? '??????'?????? ?????? "????????????"??? ??????????????? ???????????? ??????????????? ??? ?????????, "????????????"??? ????????? ??????????????? ???????????????, "????????????"??? ???????????? ???????????? ??????????????? ????????? ??? ?????? ?????? ????????????.
                        ??? '?????????'?????? ?????? ????????? ???????????? ?????? "????????????"??? ???????????? ???????????? ???????????? ?????? ????????????.

                        ???3??? (????????? ????????? ??????)

                        ??? "????????????"??? ??? ????????? ????????? ??????, ????????? ?????????, ???????????? ??????, ?????????????????????, ?????????(??????, ??????, ???????????? ?????? ???) ?????? ???????????? ??? ??? ????????? ???????????????(??????)??? ???????????????.
                        ??? "????????????"??? ?????????????????????????????????, ?????????????????????, ???????????????, ?????????????????????????????????????????????, ??????????????????????????????, ?????????????????? ??? ???????????? ???????????? ?????? ???????????? ??? ????????? ????????? ??? ????????????.
                        ??? "????????????"??? ????????? ????????? ???????????? ???????????? ??? ??????????????? ???????????? ??????????????? ?????? ?????? ??????????????? ??? ???????????? 7??????????????? ???????????? ???????????? ???????????????.
                        ??? "????????????"??? ????????? ????????? ???????????? ??? ??????????????? ??? ???????????? ????????? ???????????? ???????????? ???????????? ??? ????????? ?????? ????????? ????????? ???????????? ???????????? ??????????????? ????????? ???????????????. ?????? ?????? ????????? ????????? ???????????? ???????????? ????????? ????????? ????????? ????????? ?????? ???3?????? ?????? ??????????????? ?????????????????? '???"??? ???????????? "???"??? ????????? ?????? ???????????? ???????????? ????????? ???????????????.
                        ??? ??? ???????????? ????????? ????????? ????????? ??? ????????? ????????? ???????????? ????????? ????????? ????????????????????????????????? ??? ???????????? ?????? ???????????? ????????????.

                        ???4???(???????????? ?????? ??? ??????)

                        ??? "????????????"??? ????????? ?????? ????????? ???????????????.
                        1. ?????? ?????? ????????? ?????? ?????? ?????? ??? ??????????????? ??????
                        2. ??????????????? ????????? ?????? ?????? ????????? ??????
                        3. ?????? "????????????"??? ????????? ??????
                        ??? "????????????"??? ????????? ?????? ?????? ????????? ????????? ?????? ?????? ???????????? ?????? ???????????? ????????? ?????? ????????? ????????????????? ????????? ????????? ??? ????????????. ??? ???????????? ????????? ????????????????? ?????? ??? ??????????????? ???????????? ????????? ????????????????? ????????? ????????? ?????? ??? ???????????? ?????? 7????????? ???????????????.
                        ??? "????????????"??? ??????????????? ???????????? ????????? ????????? ???????????? ????????? ????????? ?????? ?????? ????????? ????????? ???????????? ????????? ????????? ???????????? "????????????"??? ?????? ????????? ???????????? ?????? ????????? ???????????????. ???, "????????????"??? ?????? ?????? ????????? ?????? ???????????? ???????????? ???????????????.

                        ???5???(???????????? ??????)

                        ??? "????????????"??? ????????? ??? ????????????????????? ???????????????????? ??? ??????, ????????? ?????? ?????? ????????? ????????? ???????????? ???????????? ????????? ??????????????? ????????? ??? ????????????.
                        ??? ???1?????? ?????? ????????? ????????? ???????????? "???"??? ???8?????? ?????? ???????????? ??????????????? ???????????????.
                        ??? "????????????"??? ???1?????? ????????? ???????????? ????????? ??????????????? ??????????????? ????????? ????????? ?????? ???3?????? ?????? ????????? ????????? ???????????????. ??? "????????????"??? ?????? ?????? ????????? ?????? ???????????? ???????????? ???????????????.

                        ???6???(????????????)

                        ??? ???????????? "????????????"??? ?????? ?????? ????????? ?????? ??????????????? ????????? ??? ??? ????????? ??????????????? ??????????????? ???????????? ??????????????? ???????????????.
                        ??? "????????????"??? ???1?????? ?????? ???????????? ????????? ?????? ????????? ????????? ??? ?????? ????????? ???????????? ?????? ??? ???????????? ???????????????.
                        1. ?????????????????? ??? ?????? ???7??????3?????? ????????? ????????? ??????????????? ????????? ?????? ?????? ??????, ?????? ???7??????3?????? ?????? ???????????? ????????? 3?????? ????????? ????????? "????????????"??? ??????????????? ????????? ?????? ???????????? ????????? ??????.
                        2. ?????? ????????? ??????, ????????????, ????????? ?????? ??????
                        3. ?????? ???????????? ???????????? ?????? "????????????"??? ????????? ????????? ????????? ????????? ???????????? ??????
                        ??? ????????????????????? ??????????????? "????????????"??? ????????? ???????????? ????????? ???????????? ?????????.
                        ??? ????????? ???15??????1?????? ?????? ??????????????? ????????? ?????? ??????, ?????? ???????????? ?????? ???????????? "????????????"??? ????????? ??? ??????????????? ????????? ?????????.

                        ???7???(?????? ?????? ??? ?????? ?????? ???)

                        ??? ????????? "????????????"??? ???????????? ????????? ????????? ??? ????????? "????????????"??? ?????? ??????????????? ???????????????.
                        ??? ????????? ?????? ????????? ????????? ???????????? ??????, "????????????"??? ??????????????? ?????? ??? ???????????? ??? ????????????.
                        1. ?????? ???????????? ?????? ????????? ????????? ??????
                        2. "????????????"??? ???????????? ????????? ?????????????? ?????? ??????, ?????? "????????????"????????? ???????????? ????????? ???????????? ????????? ????????? ???????????? ?????? ??????
                        3. ?????? ????????? "????????????" ????????? ??????????????? ??? ????????? ???????????? ??? ????????????????????? ???????????? ??????
                        4. "????????????"??? ???????????? ????????? ??? ????????? ??????????????? ??????????????? ????????? ????????? ?????? ??????
                        ??? "????????????"??? ?????? ????????? ?????????????? ?????????, ????????? ????????? 2????????? ??????????????? 30???????????? ??? ????????? ???????????? ???????????? ?????? "????????????"??? ??????????????? ???????????? ??? ????????????.
                        ??? "????????????"??? ??????????????? ??????????????? ???????????? ??????????????? ???????????????. ??? ?????? ???????????? ?????? ????????????, ???????????? ???????????? ????????? ????????? ???????????????.

                        ???8???(????????? ?????? ??????)

                        ??? "????????????"??? ????????? ?????? ????????? ?????? ??????, ????????? "????????????"??? ????????? ???????????? ????????? ??? ??? ????????????.
                        ??? "????????????"??? ??????????????? ????????? ?????? ????????? ?????? 1???????????? "????????????" ???????????? ?????????????????? ?????? ????????? ????????? ??? ????????????.

                        9???(????????????)

                        "????????????"???????????? "????????????"????????? ????????? ????????? ????????? ????????? ???????????????.
                        1. ??????, ??????, ???????????? ??????
                        2. ?????? ?????? ????????? ??????
                        3. ??????????????? ??????
                        4. ??? ????????? ??????????????? ??????(???, ????????? ??????)

                        ???10??? (????????? ??????)

                        ??? "????????????"??? ???9?????? ?????? ??????????????? ????????? ?????? ????????? ???????????? ?????? ??? ???????????????.
                        1. ?????? ????????? ??????, ????????????, ????????? ?????? ??????
                        2. ??????????????? ??????, ????????? ???????????????????????? ???????????? ?????? ??? ????????? ???????????? ??????
                        3. ?????? ??????????????? ???????????? ?????? "????????????" ????????? ????????? ????????? ????????? ???????????? ??????
                        ??? "????????????"??? ????????? ???12??????1?????? ??????????????????????????? ??????????????? ????????? ????????? ????????? ????????? ????????? ?????????.

                        ???11???(????????????)

                        "????????????"?????? ????????? ?????? ?????? ????????? ?????? ????????????????????? ?????? ????????? ????????? ??? ??? ????????????.
                        1. ????????????
                        2. ??????????????????
                        3. ????????????????????????
                        4. ??????????????? ?????? ??????

                        ???12???(???????????????????????????????? ?????? ??? ??????)

                        ??? "????????????"??? ???????????? ??????????????? ?????? ?????? ??????????????? ????????????????????? ?????????.
                        ??? ????????????????????? ?????? ???????????? ??????????????? ??????????????? ?????? ???????????? ????????????????????? ?????? ??? ?????? ???????????? ?????? ??? ????????? ????????? ??? ????????????.
                        ??? "????????????"??? ????????? ???????????? ???????????? ?????? ??? ?????? ????????? ?????? ????????? ???????????? ??? ????????? ?????? ???????????????.

                        ???13???(??????)

                        "????????????"??? ???????????? ????????? ????????? ?????? ????????????, ????????? ???????????? ?????????, ????????? ???????????? ?????? ???????????????. ?????? "????????????"??? ????????????????? ?????? ??????????????? ????????? ???????????? ?????? ?????? ???????????? ????????? ???????????????.

                        ???14???(??????, ?????? ??? ??????)

                        ??? "????????????"??? ???????????? ??????????????? ?????? ?????? ????????? ???????????? ????????? ????????? ?????? ?????? ????????? ????????? ??? ??? ?????? ????????? ???????????? ??? ????????? ??????????????? ????????????, ????????? ?????? ?????? ????????? ????????? ?????? ???????????? ????????? ?????? ????????? 3????????????, ????????? ?????? ???????????? ??? ???????????????????????? 3???????????? ???????????? ??? ??????????????? ????????????.
                        ??? ?????? ????????? ???????????? "????????????"??? ????????? ?????????????????? ????????? ???????????? ?????? ????????? ????????? ???????????? ????????? ?????? ?????? ??????, ?????? ??? ?????? ????????? ?????????. ?????? ??? ??????????????? ????????? ???????????? 20??? ????????? ?????????.
                        1. ????????? ????????? ??????????????? ??????????????? "????????????"??? ????????? ????????? ????????? ??????
                        2. ????????? ????????? ??????, ?????????????????? ??????????????? ??????
                        3. ????????? ????????? ????????? ?????????????????? ?????? ????????? ??????
                        4. ?????????????????????????????? ???18?????? ????????? ????????? ??????????????? ??? ????????? ???????????? ????????? ???????????? ???????????? ????????? ???????????? ??????

                        ???15???(??????????????????)

                        ??? "????????????"??? ???????????? ??????????????? ???????????? ????????? ????????? ???????????? ????????? ???????????????.
                        ?????? ????????? ?????????????????? ?????? ??? ??? ????????? ?????????????????? ?????????.
                        1. ??????
                        2. ??????????????????(????????? ??????)
                        3. ??????
                        4. ????????????
                        5. ??????ID(????????? ??????)
                        6. ????????????(????????? ??????)
                        ??? "????????????"??? ???????????? ??????????????? ????????? ??????????????? ???????????? ????????? ????????? ?????? ???????????? ????????? ????????????.
                        ??? ????????? ??????????????? ?????? ???????????? ???????????? ???????????? ???????????? ???3????????? ????????? ??? ?????????, ?????? ?????? ?????? ????????? "????????????"??? ?????????. ??????, ????????? ???????????? ????????? ?????????.
                        1. ??????????????? ?????????????????? ????????? ????????? ???????????? ???????????? ??????(??????, ??????, ????????????)??? ???????????? ??????
                        2. ????????????, ???????????? ?????? ??????????????? ????????? ????????? ???????????? ?????? ????????? ????????? ??? ?????? ????????? ???????????? ??????
                        ??? "????????????"??? ???2?????? ???3?????? ?????? ???????????? ????????? ????????? ?????? ???????????? ?????????????????? ???????????? ??????(??????, ?????? ??? ???????????? ?????? ?????????), ????????? ???????????? ??? ????????????, ???3?????? ?????? ???????????? ????????????(???????????????, ???????????? ??? ????????? ????????? ??????)??? ????????????????????????????????????????????? ???16??????3?????? ????????? ????????? ?????? ??????????????? ???????????? ?????? ???????????? ???????????? ??? ????????? ????????? ??? ????????????.
                        ??? ???????????? ???????????? "????????????"??? ????????? ?????? ????????? ??????????????? ?????? ?????? ??? ??????????????? ????????? ??? ????????? "????????????"??? ?????? ?????? ???????????? ????????? ????????? ?????? ????????? ?????????. ???????????? ????????? ????????? ????????? ???????????? "????????????"??? ??? ????????? ????????? ????????? ?????? ??????????????? ???????????? ????????????.
                        ??? "????????????"??? ???????????? ????????? ????????? ???????????? ???????????? ??? ?????? ??????????????? ????????????, ???????????? ?????? ????????? ???????????? ??????????????? ??????, ??????, ??????, ?????? ????????? ?????? ???????????? ????????? ????????? ?????? ????????? ?????????.
                        ??? "????????????" ?????? ???????????? ??????????????? ???????????? ???3?????? ??????????????? ???????????? ?????? ???????????? ????????? ????????? ????????? ?????? ??????????????? ???????????? ???????????????.

                        ???16???("???"??? ??????)

                        ??? "?????? ????????? ??? ????????? ??????????????? ??????????????? ????????? ????????? ?????? ????????? ??? ????????? ????????? ?????? ?????? ???????????????, ??????????????? ????????????????? ???????????? ??? ????????? ???????????? ?????????.
                        ??? "????????????"??? ???????????? ???????????? ????????? ???????????? ????????? ??? ????????? ???????????? ????????????(???????????? ??????)????????? ?????? ?????? ???????????? ???????????? ?????????.
                        ??? "????????????"??? ???????????? ????????? ????????? ??????????????????????????????????????????????? ???3??? ????????? ????????? ??????????????????????? ???????????? ???????????? ????????? ?????? ????????? ?????? ????????? ????????? ?????????.
                        ??? "????????????"??? ???????????? ????????? ?????? ??????????????? ????????? ??????????????? ???????????? ????????????.

                        ???17???( ????????? ID ??? ??????????????? ?????? ??????)

                        ??? ???15?????? ????????? ????????? ID??? ??????????????? ?????? ??????????????? ???????????? ????????????.
                        ??? ????????? ????????? ID ??? ??????????????? ???3????????? ???????????? ????????? ????????????.
                        ??? ????????? ????????? ID ??? ??????????????? ?????????????????? ???3?????? ???????????? ????????? ????????? ???????????? ?????? "????????????"??? ???????????? "????????????"??? ????????? ?????? ???????????? ?????? ????????? ?????????.

                        ???18???(???????????? ??????)

                        ???????????? ?????? ????????? ???????????? ????????????.
                        1. ?????? ?????? ????????? ??????????????? ??????
                        2. "????????????"??? ????????? ????????? ??????
                        3. "????????????"??? ?????? ?????? ????????? ??????(????????? ???????????? ???)??? ?????? ?????? ??????
                        4. "????????????" ?????? ???3?????? ????????? ??? ?????????????????? ?????? ??????
                        5. "????????????" ?????? ???3?????? ????????? ?????????????????? ????????? ???????????? ??????
                        6. ?????? ?????? ???????????? ????????????????????????? ?????? ??????????????? ????????? ????????? ?????? ?????? ?????? ???????????? ??????

                        ???19???(??????"????????????"??? ?????????"????????????" ?????? ??????)

                        ??? ?????? "????????????"??? ?????? "????????????"??? ????????? ??????(???: ????????? ????????? ???????????? ??????, ?????? ??? ????????? ?????? ?????????)?????? ????????? ????????? ??????, ????????? ?????? "????????????"(??? ?????????)????????? ?????? ????????? ????????? "????????????"(????????????)????????? ?????????.
                        ??? ?????? "????????????"??? ????????? "????????????"??? ??????????????? ???????????? ????????????????? ????????? ???????????? ????????? ????????? ????????? ????????????????????? ???????????? ?????? ?????? "????????????"??? ??????????????? ????????? ???????????? ??? ????????? ?????? ????????????????????? ????????????.

                        ???20???(???????????? ?????? ??? ????????????)

                        ??? "???"??? ????????? ???????????? ?????? ????????? ?????? ?????????????????? "???"??? ???????????????.
                        ??? ???????????? "????????????"??? ?????????????????? ?????? ????????? "????????????"??? ?????? ???????????? ??????, ??????, ??????, ??????, ?????? ?????? ????????? ????????? ?????????????????? ??????????????? ???3????????? ???????????? ???????????? ????????????.

                        ???21???(????????????)

                        ??? "????????????"??? ???????????? ???????????? ????????? ???????????? ????????? ???????????? ??? ????????? ?????????????????? ????????? ??????????????????????????? ???????????????????????.
                        ??? "????????????"??? ?????????????????? ???????????? ???????????? ??? ????????? ??????????????? ??? ????????? ???????????????. ??????, ????????? ????????? ????????? ???????????? ??????????????? ??? ????????? ??????????????? ?????? ????????? ????????????.
                        ??? "????????????"??? ??????????????? ????????? ????????? ????????????????????? ???28??? ??? ??? ????????? ???15?????? ????????? ????????? ???????????????????????????????????? ????????? ?????? ??? ????????????.

                        ???22???(????????? ??? ?????????)

                        ??? "????????????"??? ??????????????? ????????? ???????????? ????????? ?????? ????????? ????????????????????? ??????????????? ???????????????.
                        ??? "????????????"??? ??????????????? ????????? ???????????? ???????????? ???????????? ???????????????.
                        * ????????? : 2021??? 05??? 15??? ?????? ???????????? ???????????? ??????</p>
                    </DivWrapper>
                    <CheckWrapper onChange={onChange}>??????????????? ???????????????.</CheckWrapper>
                    <DivWrapper>
                        <p>1. ???????????? ??????????????? ?????? ??? ????????????

                        ???. ???????????? ??????????????? ??????
                        ??????, ????????? ????????????, ????????? ????????????, ?????? ???????????? ????????? ?????? ?????? ???????????? ?????? ????????? ?????? ??????????????? ???????????? ????????????.
                        [?????? ???????????? ???]
                        - ???????????? : ?????????, ????????? ??????
                        - ???????????? : ????????? ??????, ????????? ??????
                        [?????? ?????? ???]
                        - ?????? ?????? : ?????????, ????????????, ?????????, ?????????, ??????, ??????, ????????????
                        ??????, ????????? ?????????????????? ???????????? ???????????? ????????? ?????? ???????????? ???????????? ???????????? ????????? ??? ????????????.
                        - IP Address, ??????, ?????? ??????, ????????? ?????? ??????, ?????? ?????? ??????
                        ??????, ?????? ????????? ??? ????????? ????????? ?????? ???????????? ?????? ???????????? ???????????? ???????????? ????????? ?????? ???????????? ????????? ??? ????????????.
                        - ??????, ?????????, ?????? ???????????????, ???????????? ???
                        ??????, ?????? ????????? ?????? ???????????? ????????? ?????? ?????? ???????????? ????????? ??? ????????????.
                        - ???????????? ????????? : ????????????, ???????????? ???
                        - ???????????? ????????? : ??????????????????, ?????????, ?????????????????? ???
                        - ??????????????? : ?????????, ???????????? ???
                        - ????????? ????????? : ????????? ??????
                        ???. ???????????? ????????????
                        ????????? ????????? ?????? ???????????? ??????????????? ???????????????.
                        - ????????????, ????????????, ??????, ??????, ?????? ?????????, ?????????, ????????? ??????, ????????????
                        - ???????????????????????? ??????
                        - ???????????? ?????? ?????? ?????? ??????.

                        2. ??????????????? ?????? ??? ????????????

                        ???. ????????? ????????? ?????? ?????? ?????? ??? ????????? ????????? ?????? ????????????
                        ????????? ??????, ?????? ?????? ????????? ??????, ???????????? ?????? ????????? ??? ??????, ????????????, ?????? ??? ?????? ??????, ????????????
                        ???. ????????????
                        ????????? ????????? ?????? ??? ????????? ?????? ???????????? ?????? ????????????, ????????????, ????????????(??????????????????????????? ???20??? 1?????? ???11??? 1??? 1???~8??? ??????????????? ?????? ?????????????????? ??? 2?????? ?????? ??????????????? ?????????????????? ??????)??? ?????? ??????????????? ????????? ????????????, ???????????? ??????, ?????? ??? ???????????? ??????, ???14??? ?????? ?????? ???????????? ?????? ??? ?????? ????????? ???????????? ??????, ?????? ?????? ????????? ????????????,?????? ????????? ?????? ????????????, ???????????? ??? ????????????, ???????????? ??????
                        ???. ?????? ????????? ?????? ??? ?????????
                        ?????? ????????? ?????? ??? ?????? ????????? ??????, ???????????? ????????? ?????? ????????? ?????? ??? ?????? ??????, ???????????? ????????? ??????, ????????? ??? ????????? ?????? ?????? ??? ???????????? ?????????????????? ??????, ????????? ?????????????????? ?????? ??????

                        3. ??????????????? ?????? ??? ????????????

                        ???????????? ??????????????? ??????????????? ??????????????? ?????? ??? ??????????????? ???????????? ?????? ?????? ???????????????.
                        ???, ????????? ????????? ???????????? ????????? ????????? ????????? ?????? ?????? ???????????????.
                        ???. ?????? ?????? ????????? ?????? ???????????? ??????
                        - ??????????????????
                        ?????? ?????? : ?????? ?????? ??????
                        ?????? ?????? : 1???
                        ???. ??????????????? ?????? ???????????? ??????
                        ??????, ??????????????? ???????????? ?????????????????? ?????? ?????? ??? ??????????????? ????????? ????????? ????????? ????????? ?????? ?????? ????????? ?????????????????? ?????? ????????? ?????? ?????? ??????????????? ???????????????.
                        ??? ?????? ????????? ???????????? ????????? ??? ????????? ??????????????? ???????????? ??????????????? ????????? ????????????.
                        - ?????? ?????? ???????????? ?????? ?????? ??????????????? ?????? : ??????????????? ???????????? ?????????????????? ?????? ??????????????? ?????? : 5???
                        - ???????????? ??? ?????? ?????? ????????? ?????? ??????
                        ?????? ?????? : ??????????????? ???????????? ?????????????????? ?????? ??????
                        ?????? ?????? : 5???
                        - ???????????? ?????? ?????? ??????????????? ?????? ?????? ?????? ?????? : ??????????????? ???????????? ?????????????????? ?????? ??????
                        ?????? ?????? : 3???
                        - ??????????????? ?????? ??????
                        ?????? ?????? : ???????????? ???????????? ??? ???????????? ?????? ?????? ??????
                        ?????? ?????? : 6??????
                        - ????????? ?????? ??????
                        ?????? ?????? : ?????????????????????
                        ?????? ?????? : 3??????

                        4. ????????? ??? ?????????????????? ????????? ??? ????????????

                        ????????? ??? ?????????????????? ???????????? ?????? ????????? ?????? ?????? ?????? ??? 14??? ???????????? ???????????? ????????????, ???????????? ???????????? ??????/ ??????,??????/ ????????????/ ?????? ????????? ????????? ??? ????????????.
                        ?????? ????????? ??????????????? ????????????????????????(?????? ???????????????????????? ???) ????????? ??????????????????, ????????????(1588-3366) ?????? ???????????? ????????????????????? ?????? ?????? ???????????? ??????????????? ???????????? ?????????????????????.
                        ????????? ????????? ???????????? ???????????? ??????????????? ?????? ?????? ????????? ????????? ??????/ ??????,????????? ????????? ??? ????????????.
                        - ????????? ?????? ????????? ??????????????? ???????????? ??????
                        - ?????? ????????? ???????????????? ?????? ????????? ????????? ?????? ????????? ????????? ??? ?????? ????????? ???????????? ????????? ????????? ?????? ??????
                        - ???????????? ???????????? ????????? ?????????????? ??? ??????
                        - ????????? ??????????????? ????????? ?????????????????? ???????????? ????????? ??????????????? ????????? ????????? ???????????? ???????????? '??????(session)' ?????? '??????(cookie)' ?????? ???????????????.
                        (1) ?????? ??? ????????? ?????? : ???????????? ??????????????? ???????????? ??????????????? ???????????? ????????? ???????????? ?????? ?????? ?????? ?????? ????????? ????????? ???????????? ?????? ????????????, ????????? ??? ?????? ?????? ???????????? ??? ???????????? ????????? ???????????? ??????????????? ????????? ?????? ?????? ????????? ???????????? ???????????? ????????? ?????????????????? ??????????????? ?????? ????????? ????????????.
                        (2) ?????? ??? ????????? ?????? ?????? :????????? ?????? ??? ????????? ???????????? ?????? ????????? ?????? ??????, ??????????????? ????????? ???????????? ?????? ?????? ???????????? ???????????? ????????? ???????????? ????????? ?????? ???????????? ???????????????. ?????? ?????? ????????? ?????? ??? ?????? ????????? ?????? ???????????? ?????? ??? ?????? ????????? ???????????????.
                        ???????????? ??????????????? ??? ??????????????? ???????????? ??? ??????
                        ????????? ???????????? ??????????????? ???????????? ??????????????? ????????? ????????? ???????????? ????????? ????????? ?????? ?????? ?????? ??? ?????????????????????????????? ???????????? ????????????.
                        (1) ???????????? ??????????????? ??? ?????? ?????? ????????????
                        ???????????? ??????????????? : ?????????
                        ?????? ?????? ???????????? : ???????????? ???????????????
                        ?????? : 02 3442 3555
                        ????????? : info@sta1.com
                        (2) ??????????????? ????????????
                        ??????????????? ????????????: ?????? ?????????
                        ?????? : 02 3442 3555
                        ????????? : info@sta1.com
                        (3) ?????? ??????
                        ???????????? ????????? ???????????? ??????????????? ???????????? ?????? ?????????????????? ?????? ????????? ??????????????????????????? ?????? ??????????????? ???????????? ??? ????????????. ????????? ??????????????? ??????????????? ?????? ???????????? ????????? ????????? ?????? ????????????.
                        ?????? ????????????????????? ?????? ????????? ????????? ???????????? ???????????? ?????? ????????? ??????????????? ????????????.
                        ?????????????????????????????? (http://privacy.kisa.or.kr)
                        ???????????? ??????????????? ???????????????????????? (www.spo.go.kr / ???????????? 1301)
                        ????????? ?????????????????? (cyberbureau.police.go.kr / ???????????? 182)</p>
                    </DivWrapper>
                    <CheckWrapper onChange={onChange}>??????????????????????????? ???????????????.</CheckWrapper>
                    <ButtonStyle htmlType="submit">????????????</ButtonStyle>
                </Form>                
            </Drawer>
            :
            <Drawer
                title="?????????"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <Form onFinish={onSubmitForm}>
                    <br />
                    <InputWrapper placeholder="?????????" type="email"  prefix={<UserOutlined />} />  
                    <InputWrapper placeholder="????????????" type="password" prefix={<LockOutlined />} />                
                    <ButtonStyle type="primary" htmlType="submit">?????????</ButtonStyle>
                    <Link href="/"><Signup onClick={onSignup} >????????????</Signup></Link>
                    <Link href="/"><SearchPassword>???????????? ??????</SearchPassword></Link>
                </Form>
                <LoginWrapper>?????? ?????????
                    <ImgWrapper src="/images/google.png" />
                    <ImgWrapper src="/images/facebook.png" />
                    <ImgWrapper src="/images/naver.png" />
                </LoginWrapper>
            </Drawer>
    }
        </>
    );
};

export default LoginForm;