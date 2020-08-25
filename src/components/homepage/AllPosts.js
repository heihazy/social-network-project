import React, { Component } from "react";
import PostSummary from "../posts/PostSummary";
class AllPosts extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Post 1",
          id: 1,
          text:
            "Sint officia non ex duis quis excepteur nulla esse officia qui cillum sit officia cillum. Ut labore enim do nostrud pariatur voluptate nisi dolor ut reprehenderit excepteur ex Lorem Lorem. Dolor culpa consequat do mollit incididunt enim magna irure adipisicing culpa exercitation culpa. Laborum occaecat laborum excepteur do non aliqua et velit pariatur. Exercitation aute eu Lorem nisi ex dolore occaecat nisi laboris ex proident. Labore eu eiusmod ullamco id labore ut fugiat enim do velit. Do velit elit dolor ut ullamco.",
          linkUrl: "posts/1",
        },
        {
          title: "Post 2",
          id: 2,
          text:
            "Sint officia non ex duis quis excepteur nulla esse officia qui cillum sit officia cillum. Ut labore enim do nostrud pariatur voluptate nisi dolor ut reprehenderit excepteur ex Lorem Lorem. Dolor culpa consequat do mollit incididunt enim magna irure adipisicing culpa exercitation culpa. Laborum occaecat laborum excepteur do non aliqua et velit pariatur. Exercitation aute eu Lorem nisi ex dolore occaecat nisi laboris ex proident. Labore eu eiusmod ullamco id labore ut fugiat enim do velit. Do velit elit dolor ut ullamco.",
          linkUrl: "posts/2",
        },
        {
          title: "Post 3",
          id: 3,
          text:
            "Sint officia non ex duis quis excepteur nulla esse officia qui cillum sit officia cillum. Ut labore enim do nostrud pariatur voluptate nisi dolor ut reprehenderit excepteur ex Lorem Lorem. Dolor culpa consequat do mollit incididunt enim magna irure adipisicing culpa exercitation culpa. Laborum occaecat laborum excepteur do non aliqua et velit pariatur. Exercitation aute eu Lorem nisi ex dolore occaecat nisi laboris ex proident. Labore eu eiusmod ullamco id labore ut fugiat enim do velit. Do velit elit dolor ut ullamco.",
          linkUrl: "posts/3",
        },
        {
          title: "Post 4",
          id: 4,
          text:
            "Sint officia non ex duis quis excepteur nulla esse officia qui cillum sit officia cillum. Ut labore enim do nostrud pariatur voluptate nisi dolor ut reprehenderit excepteur ex Lorem Lorem. Dolor culpa consequat do mollit incididunt enim magna irure adipisicing culpa exercitation culpa. Laborum occaecat laborum excepteur do non aliqua et velit pariatur. Exercitation aute eu Lorem nisi ex dolore occaecat nisi laboris ex proident. Labore eu eiusmod ullamco id labore ut fugiat enim do velit. Do velit elit dolor ut ullamco.",
          linkUrl: "posts/4",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <PostSummary key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default AllPosts;
