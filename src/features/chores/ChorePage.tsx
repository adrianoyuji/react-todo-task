import "./styles.scss";
import ChoreHeading from "./ChoreHeading";
import ChoreList from "./ChoreList";
import ChoreModal from "./ChoreModal";

const ChorePage = () => {
  return (
    <>
      <ChoreHeading />
      <ChoreList />
      <ChoreModal />
    </>
  );
};

export default ChorePage;
