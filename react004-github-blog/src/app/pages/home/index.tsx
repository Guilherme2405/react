import { Link, useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { SquareArrowOutUpRight } from "lucide-react";
import { GithubLogo, Buildings, Users } from "@phosphor-icons/react";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { getProfile } from "@/api/get-profile";
import { getReposProfile } from "@/api/get-repos-profile";

import { useMemo } from "react";

import { FilterRepos } from "@/components/filter-repos";

type Repo = {
  id: number;
  name: string;
  description: string;
  created_at: string;
};

export default function Home() {
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  console.log(profile);

  const { data: repos } = useQuery({
    queryKey: ["repos"],
    queryFn: getReposProfile,
  });
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  const filteredRepos = useMemo(() => {
    if (!repos) return [];

    if (!searchQuery.trim()) {
      return repos;
    }

    return repos.filter(
      (repo: Repo) =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [repos, searchQuery]);

  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <main className="max-w-[1200px] w-full my-auto flex flex-col justify-start items-center gap-12 absolute top-[-70px]">
        <div className="w-full flex flex-col gap-28">
          <div className="w-full h-full flex flex-col justify-start items-center gap-17">
            <div className="w-full min-h-[216px] bg-sidebar border-1 border-primary-foreground rounded-lg relative">
              <div className="w-auto h-auto flex flex-row flex-nowrap justify-between items-center  gap-1 absolute top-10 right-8">
                <Link to="#">
                  <div className="w-auto h-auto flex flex-row flex-nowrap justify-start items-center gap-1">
                    <span className="text-sm font-medium">GITHUB</span>
                    <SquareArrowOutUpRight size={14} strokeWidth={3} />
                  </div>
                </Link>
              </div>

              <div className="w-full p-8">
                <div className="w-full h-full flex flex-row flex-nowrap justify-start items-center gap-8">
                  <div className="w-36 h-36 flex flex-col justify-center items-center">
                    <img
                      src={profile?.avatar_url}
                      className="w-full h-full object-cover rounded-lg"
                      alt=""
                    />
                  </div>
                  <div className=" max-w-[600px] w-full h-full flex flex-col justify-start items-start gap-4">
                    <div>
                      <h1 className="text-2xl font-bold">{profile?.name}</h1>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-6">
                      <span>{profile?.bio}</span>

                      <div className="w-full flex flex-row flex-wrap justify-start items-center gap-6 text-sm">
                        <div className="flex flex-row justify-start items-center gap-1">
                          <GithubLogo size={18} weight="fill" />
                          <Link to={profile?.html_url}>{profile?.login}</Link>
                        </div>

                        <div className="flex flex-row justify-start items-center gap-1">
                          <Buildings size={18} weight="fill" />
                          <span>{profile?.company}</span>
                        </div>

                        <div className="flex flex-row justify-start items-center gap-1">
                          <Users size={18} weight="fill" />
                          <span>{profile?.followers} seguidores</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-2">
              <div className="w-full flex flex-row flex-nowrap justify-between items-center">
                <h3>publicações</h3>
                <span className="text-sm text-muted-foreground">
                  {searchQuery ? (
                    <>
                      {filteredRepos.length} de {profile?.public_repos}{" "}
                      publicações
                      {searchQuery && (
                        <span className="ml-2">
                          para "<strong>{searchQuery}</strong>"
                        </span>
                      )}
                    </>
                  ) : (
                    `${profile?.public_repos} publicações`
                  )}
                </span>
              </div>

              <FilterRepos
                filteredRepos={filteredRepos}
                searchQuery={searchQuery}
                setSearchParams={setSearchParams}
              />
            </div>
          </div>

          <div className="grid h-[450px] sm:grid-cols-2 sm:px-0 px-5 gap-10 grid-cols-1 overflow-y-auto hide-scrollbar-y">
            {filteredRepos.length > 0 ? (
              filteredRepos.map((repo: Repo) => (
                <Link to={`/post/${repo.name}`} key={repo.id}>
                  <div className="w-full h-[260px] bg-sidebar flex flex-col justify-start items-start p-8 rounded-lg">
                    <div className="w-full h-full flex flex-col justify-start items-start gap-10">
                      <div className="w-full h-auto flex flex-row flex-nowrap justify-between items-baseline">
                        <h1 className="w-[250px] text-2xl font-bold pe-3">
                          {repo.name}
                        </h1>
                        <span className=" text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date(repo.created_at), {
                            addSuffix: true,
                            locale: ptBR,
                          })}
                        </span>
                      </div>

                      <div className="w-full h-full flex flex-row flex-nowrap justify-start items-start gap-2">
                        <span className="w-full h-full text-lg text-muted-foreground">
                          {repo.description}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : searchQuery ? (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                <p className="text-lg text-muted-foreground">
                  Nenhum repositório encontrado para "{searchQuery}"
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Tente pesquisar com outros termos
                </p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                >
                  Limpar busca
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}
