import Topo from "@/components/Topo";
import { useFetch } from "@/hooks/useFetch";
import axios from "axios";
import { useEffect, useState } from "react";

interface Repository {
  full_name: string;
  description: string;
}

export default function DataFetching() {
  //passando o token!!!!
  //    const token = "teste";
  //   const { data: repositories, isFetching } = useFetch<Repository[]>(
  //     "http://api.github.com/users/diego3g/repos",
  //     {
  //       headers: { Authorization: "Bearer " + token },
  //     }
  //  );

  const { data: repositories, isFetching } = useFetch<Repository[]>(
    "http://api.github.com/users/diego3g/repos"
  );

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {repositories?.map((repo) => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
