import Head from "next/head";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions/actions";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import { Post } from "../interfaces/Interface";
import Link from "next/link";

interface IProps {
  fetchPosts(): Function;
  PostsReducer: Post[];
}

const Main = (props: IProps) => {
  const [posts, setPosts]: [Post[], Function] = useState([]);
  useEffect(() => {
    props.fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setPosts(props.PostsReducer);
  }, [props.PostsReducer]);

  const RenderList = () => {
    return posts.map((el) => {
      return (
        <Link passHref key={el.id} href={`/posts/${el.id}`}>
          <tr>
            <td>{el.id}</td>
            <td className="">
              <Link href={`/posts/${el.id}`}>{el.title}</Link>
            </td>
            <td className="">
              <Link href={`/posts/${el.id}`}>{el.body}</Link>
            </td>
          </tr>
        </Link>
      );
    });
  };

  return posts[0] !== undefined ? (
    <Container>
      <Head>
        <title>Rotterdam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="posts_container">
        <div>
          <div className="table_body">
            <table className="ui table">
              <thead>
                <tr>
                  <th className="">
                    <button className="table_sortableBtn">ID</button>
                  </th>
                  <th>
                    <button className={`table_sortableBtn`}>TITLE</button>
                  </th>
                  <th>
                    <button className={"table_sortableBtn"}>BODY</button>
                  </th>
                </tr>
              </thead>
              <tbody>{RenderList()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  ) : (
    <Container>
      <div className="loader">
        <div className="ui segment">
          <div className="ui active dimmer">
            <div className="ui large text loader">Loading</div>
          </div>
          <p></p>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps, { fetchPosts })(Main);
