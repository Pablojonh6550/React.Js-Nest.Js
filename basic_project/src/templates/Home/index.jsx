import { Component } from "react";
import { loadPosts } from "../../utils/load-posts";
import "./styles.css";

import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
        <Button />
      </section>
    );
  }
}
