import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect } from "react";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

type Repo = {
  id: number;
  name: string;
  description: string;
  created_at: string;
};

export function FilterRepos({
  searchQuery,
  setSearchParams,
}: {
  filteredRepos: Repo[];
  searchQuery: string;
  setSearchParams: (params: { search?: string }) => void;
}) {
  const { register, handleSubmit, setValue, watch } = useForm<SearchFormInputs>(
    {
      resolver: zodResolver(searchFormSchema),
      defaultValues: {
        query: searchQuery,
      },
    }
  );

  useEffect(() => {
    setValue("query", searchQuery);
  }, [searchQuery, setValue]);

  const watchedQuery = watch("query");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (watchedQuery !== searchQuery) {
        if (watchedQuery.trim()) {
          setSearchParams({ search: watchedQuery.trim() });
        } else {
          setSearchParams({});
        }
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [watchedQuery, searchQuery, setSearchParams]);

  function onSubmit(data: SearchFormInputs) {
    if (data.query.trim()) {
      setSearchParams({ search: data.query.trim() });
    } else {
      setSearchParams({});
    }
  }

  function clearSearch() {
    setSearchParams({});
    setValue("query", "");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="w-full flex flex-row flex-wrap justify-between items-center gap-2">
        <div className="relative w-full">
          <input
            className="w-full h-10
                      outline-none focus:outline-none border-1 border-muted rounded-md p-1 pr-20 focus:border-primary"
            type="text"
            placeholder="Buscar repositórios por nome ou descrição"
            {...register("query")}
          />

          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 
                        text-sm text-muted-foreground hover:text-foreground
                        px-2 py-1 rounded bg-muted hover:bg-muted-foreground/10"
            >
              Limpar
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
