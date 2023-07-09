/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import { PageLayout, PostCard } from "../../components";
import { useEffect, useRef, useState } from "react";
import { loader } from "../../assets";

const Explore = () => {
  const { loading, posts } = useSelector((state) => state.postReducer);
  const [postData, setPostData] = useState([]);
  const [page, setPage] = useState(1);
  const [dataLoading, setDataLoading] = useState(false);
  const obseverRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          mergeData();
        }
      },
      { threshold: 0.7 }
    );

    if (obseverRef.current) observer.observe(obseverRef.current);

    return () => {
      if (obseverRef.current) observer.unobserve(obseverRef.current);
    };
  }, [obseverRef, page]);

  const mergeData = () => {
    if (page <= 4) {
      setDataLoading(true);
      setTimeout(() => {
        const data = posts.slice(0, page * 4);
        setPostData(data);
        setPage((page) => page + 1);
        setDataLoading(false);
      }, 1000);
    }
  };

  return (
    <PageLayout loading={loading}>
      <div className="w-full flex flex-col items-center gap-7 pb-10 sm:pb-5">
        {postData.map((post, index) => (
          <>
            <PostCard post={post} key={post.id} />
            <div className="border w-11/12 sm:w-6/12"></div>
          </>
        ))}
        <div ref={obseverRef}></div>
        {dataLoading && <img src={loader} alt="loader" className="h-16 w-16" />}
      </div>
    </PageLayout>
  );
};

export default Explore;
