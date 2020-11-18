import React from 'react'

const [like, setLike] = useState(liked);

        <button
          type="button"
          onClick={async (e) => {
            like ? await removeLike(_id) : await addLike(_id);
            setLike(!like);
          }}
          className="btn btn-light"
        >
          {like ? (
            <i className="fas fa-heart like-color"></i>
          ) : (
            <i className="far fa-heart"></i>
          )}{" "}
          <span>{likes.length}</span>
        </button>

        