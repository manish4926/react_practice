import UserTab from "components/Toby/UserTab";
import Collection from "components/Toby/Collection";
import BookmarkTab from "components/Toby/BookmarkTab";

const Home = (props) => {
  return (
    <>
      <div className="col-1">
        <UserTab></UserTab>
      </div>
      <div className="col-8">
        <Collection></Collection>
      </div>
      <div className="col-3">
        <BookmarkTab></BookmarkTab>
      </div>
    </>
  );
};

export default Home;
