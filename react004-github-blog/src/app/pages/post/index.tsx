import { GithubLogo, Calendar, LessThan, Devices } from "@phosphor-icons/react";
import { SquareArrowOutUpRight } from "lucide-react";

import { Link, useParams } from "react-router";
import { postRepos } from "@/api/post-repos";
import { getRepoFiles } from "@/api/post-repos";
import { useQuery } from "@tanstack/react-query";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

type Repo = {
  name: string;
  html_url: string;
};

export default function Post() {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["post"],
    queryFn: () => postRepos(id),
  });

  const { data: files } = useQuery({
    queryKey: ["files"],
    queryFn: () => getRepoFiles(id),
  });

  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <main
        className="max-w-[864px] w-full my-auto
       flex flex-col justify-start items-center gap-12
       absolute top-[-70px]"
      >
        <div className="w-full h-full flex flex-col justify-start items-center gap-17">
          <div
            className="w-full h-[168px] p-8  
           bg-sidebar border-1 border-primary-foreground rounded-lg
            flex flex-col justify-end items-center"
          >
            <div className="w-full">
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <div className="absolute top-8 right-8">
                  <Link to="https://github.com/Guilherme2405">
                    <div className="w-auto h-auto flex flex-row flex-nowrap justify-start items-center gap-1">
                      <span className="text-sm font-medium">VER NO GITHUB</span>
                      <SquareArrowOutUpRight size={14} strokeWidth={3} />
                    </div>
                  </Link>
                </div>

                <div className="absolute top-8 left-8">
                  <Link to="/">
                    <div className="w-auto h-auto flex flex-row flex-nowrap justify-start items-start gap-1">
                      <LessThan size={16} weight="bold" />
                      <span className="text-sm font-medium"> VOLTAR</span>
                    </div>
                  </Link>
                </div>

                <h1 className="text-2xl font-bold">{data?.name}</h1>

                <div className="w-full h-auto flex flex-row flex-wrap justify-start items-center gap-6">
                  <div className="w-auto h-auto flex flex-row flex-nowrap justify-center items-center gap-1">
                    <GithubLogo size={18} weight="fill" />{" "}
                    <Link to={`https://github.com/${data?.owner.login}`}>
                      {data?.owner.login}
                    </Link>
                  </div>

                  <div className="w-auto h-auto flex flex-row flex-nowrap justify-start items-center gap-1">
                    <Calendar size={18} weight="fill" />
                    <span>
                      {data?.created_at &&
                        formatDistanceToNow(new Date(data.created_at), {
                          addSuffix: true,
                          locale: ptBR,
                        })}
                    </span>
                  </div>

                  <div className="w-auto h-auto flex flex-row flex-nowrap justify-start items-center gap-1">
                    <Devices size={18} weight="bold" />
                    <span>{data?.language}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wfull h-[650px] sm:px-0 px-5 py-8 overflow-y-auto hide-scrollbar-y">
            <div>
              <div className="grid sm:grid-cols-3 sm:px-0 px-5 gap-6 grid-cols-1">
                {" "}
                {files?.map((repo: Repo, index: number) => (
                  <Link to={repo.html_url} target="_blank" key={index}>
                    <div className="w-full h-full bg-sidebar flex flex-col justify-center items-center p-8 rounded-lg relative">
                      <div className="w-full h-full flex flex-col justify-center items-center ">
                        <div
                          className="w-full h-auto flex flex-row flex-nowrap justify-between items-center gap-1"
                          key={index}
                        >
                          <h1 className="w-[250px] text-2xl font-bold pe-3">
                            {repo.name}
                          </h1>
                        </div>

                        <div className="w-full h-full flex flex-row flex-nowrap justify-start items-start gap-2">
                          <span className="w-full h-full text-lg text-muted-foreground"></span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
