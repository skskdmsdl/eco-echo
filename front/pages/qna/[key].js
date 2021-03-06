import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper from '../../store/configureStore';
import AppLayout from '../../components/AppLayout';

const QnaPost = () => {
  const { singlePost } = useSelector((state) => state.post);
  const router = useRouter();
  const { email } = router.query;

  return (
    <AppLayout>
      <Head>
        <title>
          {singlePost.User.email}
          님의 문의
        </title>
        <meta name="description" content={singlePost.content} />
        <meta property="og:title" content={`${singlePost.User.email}님의 문의`} />
        <meta property="og:description" content={singlePost.content} />
      </Head>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  console.log(context);
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_POST_REQUEST,
    data: context.params.id, // context.params.id 또는 context.query.id로 {id}에 접근 가능
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
  return { props: {} };
});

export default QnaPost;