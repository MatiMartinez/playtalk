import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Thread from "../../../global/thread/Thread";

import { FirebaseContext } from "../../../../firebase/index";

export default function Recommendations() {
  //TODO: Firebase
  const { fbase } = useContext(FirebaseContext);

  const [threads, setThreads] = useState([]);

  useEffect(() => {
    function getThreads() {
      fbase.db
        .collection("threads")
        .orderBy("likes")
        .limit(3)
        .onSnapshot(handleSnapshot);
    }
    getThreads();
  }, []);

  function handleSnapshot(snapshot) {
    const threads = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setThreads(threads);
  }

  return (
    <RecommendationsContainer>
      <Title>Recommendations</Title>
      {threads.length === 0
        ? "Loading"
        : threads.map((thread) => (
            <Thread
              key={thread.id}
              user={thread.user}
              date={thread.date}
              text={thread.text}
              comments={thread.comments}
              likes={thread.likes}
            />
          ))}
    </RecommendationsContainer>
  );
}

const RecommendationsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 32px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  margin-top: 32px;
`;
