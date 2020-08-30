import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { createPost } from "../../redux/posts/posts.action";
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost({
      title: this.state.title,
      text: this.state.text,
    });
  };
  render() {
    return (
      <div className="new-post">
        <form className="new-post-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="title"
            onChange={this.handleChange}
            label="title"
          />
          <FormInput
            type="text"
            name="text"
            onChange={this.handleChange}
            label="text"
          />
          <CustomButton type="submit">POST</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
  };
};
export default connect(mapDispatchToProps)(NewPost);
