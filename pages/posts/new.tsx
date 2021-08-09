import Link from "next/link";
import Container from "../../components/Container";
import React, { ChangeEvent, useState } from "react";
import { connect } from "react-redux";
import { AddPost } from "../../redux/actions/actions";

interface IProps {
  AddPost(title: string, body: string): Function;
}

const New = (props: IProps): JSX.Element => {
  const [title, setTitle]: [string, Function] = useState("");
  const [body, setBody]: [string, Function] = useState("");
  const [isAdded, setAdded]: [number, Function] = useState(0);

  const AddPostHandler = () => {
    if (isAdded === 1) {
      return;
    } else {
      props.AddPost(title, body);
    }
    setAdded(1);
  };
  return (
    <Container>
      <Link passHref href="/">
        <div className="ui dimmer modals visible active modalWindow">
          <div
            onClick={(e) => e.stopPropagation()}
            className="ui standard modal visible active modal_body"
          >
            <>
              <div className="header">Add New Post</div>
              <div className="content">
                <form className="ui form">
                  <div className="field">
                    <label>Enter Title:</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setTitle(e.target.value)
                      }
                    />
                  </div>
                  <br />
                  <div className="field">
                    <label>Enter Body:</label>
                    <input
                      type="text"
                      value={body}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setBody(e.target.value)
                      }
                    />
                  </div>
                </form>
                {isAdded === 1 ? (
                  <div className="ui success message">
                    <div className="header">
                      Your post was successfully added.
                    </div>
                    <p>Now you can return to Home page</p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="actions">
                <button onClick={AddPostHandler} className="positive ui button">
                  Add Post
                </button>
                <Link passHref href="/">
                  <button className="negative ui button">Cancel</button>
                </Link>
              </div>
            </>
          </div>
        </div>
      </Link>
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps, { AddPost })(New);
