import { useRouter } from "next/router";
import { connect } from "react-redux";
import { fetchPost } from "../../redux/actions/actions";
import { useEffect, useState } from "react";
import { Post } from "../../interfaces/Interface";
import Container from "../../components/Container";

interface IProps {
  fetchPost(id: string | string[]): Function;
  PostReducer: Post;
}

const Id = (props: IProps): JSX.Element => {
  const { query } = useRouter();
  const [post, setPost]: [Post, Function] = useState({
    id: undefined,
    body: "",
    title: "",
  });

  useEffect(() => {
    query.id === undefined ? props.fetchPost("1") : props.fetchPost(query.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setPost(props.PostReducer);
  }, [props.PostReducer]);

  return post.id === undefined ? (
    <Container>
      <div className="loader">
        <div className="ui segment">
          <div className="ui active dimmer">
            <div className="ui large text loader">Loading</div>
          </div>
        </div>
      </div>
    </Container>
  ) : (
    <Container>
      <div className="ui piled segment">
        <h4 className="ui header">Title: {post.title}</h4>
        <p>
          <strong>Body: </strong>
          {post.body}
        </p>
      </div>
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps, { fetchPost })(Id);
