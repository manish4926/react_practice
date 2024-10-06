import GeneralPost from "components/SocialMedia/Components/Posts/GeneralPost";
import ImagePost from "components/SocialMedia/Components/Posts/ImagePost";
import VideoPost from "components/SocialMedia/Components/Posts/VideoPost";
import CollagePost from "components/SocialMedia/Components/Posts/CollagePost";

const PostList = () => {
    return (
      <>
      <GeneralPost></GeneralPost>
      <ImagePost></ImagePost>
      <VideoPost></VideoPost>
      <CollagePost></CollagePost>
      </>  
    );
}

export default PostList;