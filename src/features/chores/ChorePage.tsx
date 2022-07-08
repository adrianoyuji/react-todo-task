import Spinner from "app/components/Spinner";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ChoreDetails from "./ChoreDetails";
import { BASE_URL, selectChoreSlice } from "./choreSlice";
import { Chore, Status } from "./types";

const ChorePage = () => {
  const [chore, setChore] = useState<Chore | null>(null);
  const { choreId } = useParams();
  const [status, setStatus] = useState<Status>(Status.loading);
  const { list } = useSelector(selectChoreSlice);

  const fetchChore = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/chores/${choreId}`);
      const parsedResponse = await response.json();
      setChore(parsedResponse);
      setStatus(Status.succeeded);
    } catch (error) {
      setStatus(Status.failed);
    }
  };

  useEffect(() => {
    if (choreId && !isNaN(+choreId)) {
      // Attempts to get from redux in order to save an API call
      const foundChore = list.find((chore) => chore.id === +choreId);
      if (foundChore) {
        setChore(foundChore);
        setStatus(Status.succeeded);
      } else {
        //If it fails, it will call the API
        fetchChore();
      }
    } else {
      setStatus(Status.failed);
    }
  }, []);

  const renderContent = {
    [Status.idle]: () => <></>,
    [Status.succeeded]: () => chore && <ChoreDetails chore={chore} />,
    [Status.loading]: () => <Spinner />,
    [Status.failed]: () => <p>Chore not found</p>,
  };
  return <section className="container">{renderContent[status]()}</section>;
};

export default ChorePage;
