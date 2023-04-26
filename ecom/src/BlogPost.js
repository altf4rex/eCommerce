import React from "react";
import SectionButton from "./SectionButton";
import Photo from "../src/assets/photo.jpg";
import PostPhotoDinner from "../src/assets/post-photo-dinner.jpg";
import PostPhotoVegetable from "../src/assets/post-photo-vegetable.jpg";
import PostPhotoBreads from "../src/assets/post-photo-breads.jpg";
import PostPhotoBreakfast from "../src/assets/post-photo-breakfast.jpg";
import PostPhotoSalat from "../src/assets/post-photo-salat.jpg";

const BlogPost = () => {
  const header = { header: "Read our Blog posts", button: "Go to Blog" };
  return (
    <div style={{margin: "64px 0"}}>
      <SectionButton header={header} />
      <div className="post">
        <a href="#" className="post__left">
          <div style={{ position: "relative" }}>
            <img className="post__left-img" src={PostPhotoDinner} alt="" />
            <p className="post__left-text">
              Our chef tips for a great and tasty dinner ready in 20 minutes
            </p>
            <div className="post__left-author">
              <img className="post__left-photo" src={Photo} alt="" />
              <p className="post__left-name">Author</p>
              <p className="post__left-date">17. 6. 2020</p>
            </div>
          </div>
        </a>
        <a href="#" className="post__middle">
          <img src={PostPhotoVegetable} alt="" />
          <p className="post__middle-text">
            Which vegetable your family will love and want’s eat each day
          </p>
          <div className="post__middle-author">
            <p className="post__middle-name">Author</p>
            <p className="post__middle-date">15. 6. 2020</p>
          </div>
        </a>
        <div className="post__right">
          <a href="#" className="post__right-post">
            <div>
              <p className="post__right-text">
              Prepare a simple and delicious breads
              </p>
              <div className="post__right-author">
                <p className="post__right-name">Author</p>
                <p className="post__right-date">14.1.2020</p>
              </div>
            </div>
            <img className="post__right-img" src={PostPhotoBreads} alt="" />
          </a>
          <a href="#" className="post__right-post">
            <div>
              <p className="post__right-text">
                Our chef tips for a great and healthy breakfast
              </p>
              <div className="post__right-author">
                <p className="post__right-name">Author</p>
                <p className="post__right-date">14.1.2020</p>
              </div>
            </div>
            <img className="post__right-img" src={PostPhotoBreakfast} alt="" />
          </a>
          <a href="#" className="post__right-post">
            <div>
              <p className="post__right-text">
              Salat is kinda good start to your morning routines
              </p>
              <div className="post__right-author">
                <p className="post__right-name">Author</p>
                <p className="post__right-date">14.1.2020</p>
              </div>
            </div>
            <img className="post__right-img" src={PostPhotoSalat} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
