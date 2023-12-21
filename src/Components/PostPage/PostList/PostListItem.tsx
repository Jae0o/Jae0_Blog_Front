import React from "react";
import "../../../CSS/PostPage/PostList/PostListItem.css";
import { PostListItemProps } from "../../../Types/Components/PostPage/PostListTypes";
import { convertDateFormat } from "../../../Util/UtilFunctions";
import { useNavigate } from "react-router-dom";
import { OnClickEvent } from "../../../Types/Components/EventTypes";

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  const formatedDate: string = convertDateFormat(JSON.parse(post.createAt));

  const navigate = useNavigate();
  9;
  const onNavigate: OnClickEvent = () => {
    navigate(`/post/detail/${post.category}/${post.id}`);
  };

  return (
    <li
      className="ptlist__ptitem"
      onClick={onNavigate}>
      <div className="ptitem__header">
        <img
          className="ptitem__thumbnail"
          src={post.thumbnail}
          alt="post-item-Thumbnail"
        />
        <p className="ptitem__createtime">{formatedDate}</p>
      </div>
      <ul className="ptitem__tags">
        {post.tag &&
          post.tag.map((tag, i) => (
            <li
              key={post.id + i}
              className="ptitem__tag-item">
              {tag}
            </li>
          ))}
      </ul>
      <div className="ptitme__title-container">
        <h3 className="ptitem__title"> {post.title}</h3>
      </div>
    </li>
  );
};

export default PostListItem;
