import { AppDispatch } from "app/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChoreItem from "./ChoreItem/ChoreItem";
import { fetchChores, selectChoreSlice } from "./choreSlice";
import { Status } from "./types";

const ChoreList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { error, list: chores, status } = useSelector(selectChoreSlice);

  useEffect(() => {
    if (status === Status.idle) dispatch(fetchChores());
  }, [status, dispatch]);

  const renderContent = {
    [Status.idle]: () => <></>,
    [Status.succeeded]: () => (
      <div>
        {chores.map((chore) => (
          <ChoreItem {...chore} key={chore.id} />
        ))}
      </div>
    ),
    [Status.loading]: () => <p>Loading...</p>,
    [Status.failed]: () => <p>{error}</p>,
  };

  return <section className="container">{renderContent[status]()}</section>;
};

export default ChoreList;
