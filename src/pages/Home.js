import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Search from "../components/home/search/Search";
import Layout from "../components/common/layout/Layoutwrap";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../redux/selectors/selector.js";
import { fetchMoreUsersSelector } from "../redux/selectors/selector.js";
import UserComponent from "../components/home/users/Users";
import { getUser } from "../redux/actions/userActions";
import { setPageNo } from "../redux/reducers/userReducer";

const options = {
  root: null,
  rootMargin: "10px",
};

const Home = () => {
  const { error, searchData, pageNo } = useSelector((state) => state.app);
  const { nationality } = useSelector((state) => state.settings);
  const users = useSelector((state) => userSelector(state.app));

  const fetchMore = useSelector((state) => fetchMoreUsersSelector(state.app));

  const [page, setPage] = useState(0);
  const [loading, isloading] = useState(false);

  const dispatch = useDispatch();
  const [node, setNode] = useState(null);

  const observer = useRef(
    new window.IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) incrementPage();
    }, options)
  );

  const incrementPage = () => {
    setPage((x) => x + 1);
    isloading(false);
  };

  useLayoutEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node]);

  useEffect(() => {
    if (fetchMore) {
      isloading(true);
      if (loading) {
        if (pageNo == 1) {
          dispatch(getUser({ pageNo, nationality }));
          dispatch(setPageNo(pageNo + 1));
        }
        if (pageNo > 1 && pageNo < 20) {
          dispatch(getUser({ pageNo, nationality, limit: 50 }));
          dispatch(setPageNo(pageNo + 1));
        }
      }
    }
  }, [page, setNode]);

  const data = {
    users,
    error,
    setNode,
    nationality,
    searchData,
    pageNo,
    fetchMore,
  };

  return (
    <Layout>
      {/* <Search /> */}
      {/* <UserComponent data={data} /> */}
    </Layout>
  );
};

export default Home;
